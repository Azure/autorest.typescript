import { ExampleParameter, TestCodeModel } from "@autorest/testmodeler/dist/src/core/model";
import { Project } from "ts-morph";
import { getAutorestOptions, getSession } from "../../autorestSession";
import * as fs from 'fs';
import * as path from 'path';
import * as hbs from "handlebars";
import { NameType, normalizeName } from "../../utils/nameUtils";
import { getLanguageMetadata } from "../../utils/languageHelpers";
import { transformBaseUrl } from "../../transforms/urlTransforms";
import { PathMetadata, Paths, RLCSampleDetail, RLCSampleGroup, SampleParameter, SampleParameters, TestSampleParameters, OperationMethod } from "../../restLevelClient/interfaces";
import { camelCase } from "@azure-tools/codegen";
import { pathDictionary } from "../../restLevelClient/generateClientDefinition";
import { Operation, ParameterLocation } from "@autorest/codemodel";
import { isLongRunningOperation } from "../../restLevelClient/helpers/hasPollingOperations";
import { isPagingOperation } from "../../utils/extractPaginationDetails";
import { getSecurityInfoFromModel } from "../../utils/schemaHelpers";
import { getParameterAssignment } from "../../utils/valueHelpers";

const tokenCredentialPackage = "@azure/identity";
const apiKeyCredentialPackage = "@azure/core-auth";

export let hasRLCSamplesGenerated = false;

export function generateRLCSamples(model: TestCodeModel, project: Project) {
    const {
        generateSample,
        multiClient
    } = getAutorestOptions();
    const session = getSession();
    if (!generateSample || !model?.testModel?.mockTest?.exampleGroups) {
        return;
    }
    // Currently only support single client
    if (multiClient) {
        session.info("Not support to generate samples for multi-clients and return directly")
        return;
    }
    const sampleGroups: RLCSampleGroup[] = transformRLCSampleData(model);
    if (sampleGroups.length > 0) {
        hasRLCSamplesGenerated = true;
    }
    for (const sampleGroup of sampleGroups) {
        try {
            const file = fs.readFileSync(path.join(__dirname, "rlcSamples.ts.hbs"), {
                encoding: "utf-8"
            });
            const sampleGroupFileContents = hbs.compile(file, { noEscape: true });
            project.createSourceFile(`samples-dev/${sampleGroup.filename}.ts`, sampleGroupFileContents(sampleGroup), {
                overwrite: true
            });
        } catch (error) {
            session.error("An error was encountered while handling sample generation", [sampleGroup.filename]);
            session.error("Stop generating samples and please inform the developers of codegen the detailed errors", []);
        }
    }
}

export function transformRLCSampleData(model: TestCodeModel): RLCSampleGroup[] {
    const rlcSampleGroups: RLCSampleGroup[] = [];
    if (!model?.testModel?.mockTest?.exampleGroups) {
        return rlcSampleGroups;
    }
    const session = getSession();
    const paths: Paths = pathDictionary;
    const clientName = getLanguageMetadata(model.language).name;
    const clientInterfaceName = clientName.endsWith("Client")
        ? `${clientName}`
        : `${clientName}Client`;
    const defaultFactoryName = camelCase(`create ${clientInterfaceName}`);
    const rawSamplesForAll = model.testModel.mockTest.exampleGroups;
    for (const rawSamplesForOperID of rawSamplesForAll) {
        const importedDict: Record<string, Set<string>> = {};
        const operation: Operation = rawSamplesForOperID.operation;
        const path: string = operation.requests?.[0].protocol.http?.path;
        const method = operation.requests?.[0].protocol.http?.method;
        const pathDetail: PathMetadata = paths[path];
        const operatonConcante = `${rawSamplesForOperID?.operationGroup?.language?.default?.name}${rawSamplesForOperID?.operation?.language?.default?.name}`;
        const sampleGroup: RLCSampleGroup = {
            filename: `${camelCase(
                transformSpecialLetterToSpace(operatonConcante)
            )}Sample`,
            defaultFactoryName,
            clientPackageName: getPackageName(),
            samples: []
        };
        const rawSamples = rawSamplesForOperID?.examples;
        if (!rawSamples || rawSamples.length == 0) {
            session.debug(`Skip sample transformation`);
            continue;
        }
        try {
            for (const rawSample of rawSamples) {
                // initialize the sample
                const sample: RLCSampleDetail = {
                    description: getLanguageMetadata(
                        rawSamplesForOperID.operation.language
                    ).description,
                    originalFileLocation: refineOriginalFileLocation(rawSample.originalFile),
                    name: camelCase(
                        transformSpecialLetterToSpace(rawSample?.name)
                    ),
                    path,
                    defaultFactoryName,
                    clientParamAssignments: [],
                    pathParamAssignments: [],
                    methodParamAssignments: [],
                    clientParamNames: "",
                    pathParamNames: "",
                    methodParamNames: "",
                    method,
                    isLRO: false,
                    isPaging: false
                };
                // convert the parameters to the intermidate model - SampleParameters
                const rawParamters: TestSampleParameters = {
                    client: rawSample.clientParameters,
                    path: (rawSample.methodParameters || []).filter(isPathLevelParam),
                    method: (rawSample.methodParameters || []).filter(isMethodLevelParam)
                };
                // client-level, path-level and method-level parameter preparation
                const parameters: SampleParameters = {
                    client: convertClientLevelParameters(rawParamters.client, model, importedDict),
                    path: convertPathLevelParameters(rawParamters.path, pathDetail, path),
                    method: convertMethodLevelParameters(rawParamters.method, pathDetail.methods[method], importedDict)
                };
                // enrich parameter details
                enrichParameterInSample(sample, parameters);
                // enrich LRO and pagination info
                enrichLROAndPagingInSample(sample, operation, importedDict);
                sampleGroup.samples.push(sample);
            }
        } catch (error) {
            session.error("An error was encountered while transforming sample", [
                `${operation.operationId}`
            ]);
            throw error;
        }
        if (sampleGroup.samples.length == 0) {
            session.debug(`No sample found for operation - ${operation.operationId}`);
        }
        // enrich the importedTypes after all examples resolved in the same file
        rlcSampleGroups.push(sampleGroup);
        enrichImportedString(sampleGroup, importedDict, defaultFactoryName);
    }
    return rlcSampleGroups;
}

function refineOriginalFileLocation(originalFileLoc: string) {
    const parts = originalFileLoc.split("node_modules");
    return (parts.length == 2) ? parts[1] : originalFileLoc;
}

function isMethodLevelParam(param: ExampleParameter) {
    const methodPositions = [ParameterLocation.Body, ParameterLocation.Query, ParameterLocation.Header];
    return methodPositions.includes(param.parameter.protocol.http?.in);
}

function isPathLevelParam(param: ExampleParameter) {
    return param.parameter.protocol.http?.in == ParameterLocation.Path;
}

function convertClientLevelParameters(rawClientParams: ExampleParameter[], model: TestCodeModel, importedDict: Record<string, Set<string>>): SampleParameter[] {
    const clientParams: SampleParameter[] = [];
    if (!rawClientParams || rawClientParams.length == 0) {
        return clientParams;
    }

    const { parameterName } = transformBaseUrl(model);
    const {
        addCredentials,
        credentialScopes,
        credentialKeyHeaderName
    } = getSecurityInfoFromModel(model.security);
    const hasUriParameter = !!parameterName, hasCredentials = addCredentials && ((credentialScopes && credentialScopes.length > 0) || credentialKeyHeaderName);
    const rawUriParameters = rawClientParams.filter(p => p.parameter.protocol.http?.in === ParameterLocation.Uri);
    if (hasUriParameter && rawUriParameters.length > 0) {
        // Currently only support one parametrized host
        // TODO: support more parameters in url once the bug fixs - https://github.com/Azure/autorest.typescript/issues/1399
        const urlValue = getParameterAssignment(rawUriParameters[0].exampleValue, true);
        clientParams.push({
            name: parameterName,
            assignment: `const ${parameterName} = ` + urlValue + `;`
        });
    }
    if (hasCredentials) {
        // Currently only support token credential
        if (credentialKeyHeaderName) {
            clientParams.push({
                name: "credential",
                assignment: `const credential = new AzureKeyCredential("{Your API key}");`
            });
            addValueInImportedDict(apiKeyCredentialPackage, "AzureKeyCredential", importedDict);
        } else {
            clientParams.push({
                name: "credential",
                assignment: "const credential = new DefaultAzureCredential();"
            });
            addValueInImportedDict(tokenCredentialPackage, "DefaultAzureCredential", importedDict);
        }


    }
    return clientParams;
}

function addValueInImportedDict(key: string, val: string, importedDict: Record<string, Set<string>>) {
    if (!importedDict[key]) {
        importedDict[key] = new Set<string>();
    }
    importedDict[key].add(val);
}

function convertPathLevelParameters(rawPathParams: ExampleParameter[], pathDetail: PathMetadata, path: string): SampleParameter[] {
    const res: Record<string, any> = {};
    (rawPathParams || []).forEach(p => {
        const name = p.parameter.language.default.serializedName || p.parameter.language.default.name;
        res[name] = p;
    })
    const pathItself = {
        name: `"${path}"`
    };
    const pathParams = (pathDetail || []).pathParameters.map(p => {
        const pathParam: SampleParameter = {
            name: p.name
        }
        // path params are mandatory we'll leave it empty if no input
        const value = !!res[p.name] ? getParameterAssignment(res[p.name].exampleValue, true) : `""`;
        pathParam.assignment = `const ${pathParam.name} =` + value + `;`;
        return pathParam;
    });
    return [pathItself].concat(pathParams);
}

function convertMethodLevelParameters(rawMethodParams: ExampleParameter[], methods: OperationMethod[], importedDict: Record<string, Set<string>>): SampleParameter[] {
    if (!methods || methods.length == 0) {
        return [];
    }
    const method = methods[0];
    const hasInputParams = (!!rawMethodParams && rawMethodParams.length > 0), requireParam = !method.hasOptionalOptions;
    if (!hasInputParams && !requireParam) {
        return [];
    }

    const allSideAssignments = [], querySideAssignments: string[] = [], headerSideAssignments: string[] = [];
    rawMethodParams.filter(p => p.parameter.protocol.http?.in == ParameterLocation.Body).forEach(p => {
        allSideAssignments.push(` body: ` + getParameterAssignment(p.exampleValue, true));
    });
    rawMethodParams.filter(p => p.parameter.protocol.http?.in == ParameterLocation.Query).forEach(p => {
        const name = getLanguageMetadata(p.parameter.language).serializedName || p.parameter.language.default.name;
        querySideAssignments.push(`${name}: ` + getParameterAssignment(p.exampleValue, true));
    });
    if (querySideAssignments.length > 0) {
        allSideAssignments.push(` queryParameters: { ` + querySideAssignments.join(", ") + `}`);
    }
    rawMethodParams.filter(p => p.parameter.protocol.http?.in == ParameterLocation.Header).forEach(p => {
        const name = `"${getLanguageMetadata(p.parameter.language).serializedName}"`;
        headerSideAssignments.push(`${name}: ` + getParameterAssignment(p.exampleValue, true));
    });
    if (headerSideAssignments.length > 0) {
        allSideAssignments.push(` headers: { ` + headerSideAssignments.join(", ") + `}`);
    }
    let value: string = `{}`;
    if (allSideAssignments.length > 0) {
        value = `{ ` + allSideAssignments.join(", ") + `}`;
    }
    const optionParam: SampleParameter = {
        name: "options",
        assignment: `const options: ${method.optionsName} =` + value + `;`
    }
    addValueInImportedDict(getPackageName(), method.optionsName, importedDict);
    return [optionParam];
}

function enrichParameterInSample(sample: RLCSampleDetail, parameters: SampleParameters) {
    sample.clientParamAssignments = getAssignmentStrArray(parameters.client);
    sample.clientParamNames = getContactParameterNames(parameters.client);
    sample.pathParamAssignments = getAssignmentStrArray(parameters.path);
    sample.pathParamNames = getContactParameterNames(parameters.path);
    sample.methodParamAssignments = getAssignmentStrArray(parameters.method);
    sample.methodParamNames = (parameters.method.length > 0) ? "options" : "";
}

function getAssignmentStrArray(parameters: SampleParameter[]) {
    return parameters.filter(p => !!p.assignment).map(p => p.assignment!);
}

function getContactParameterNames(parameters: SampleParameter[]) {
    return parameters.filter(p => p.name != null).map(p => p.name!).join(',');
}

function enrichLROAndPagingInSample(sample: RLCSampleDetail, operation: Operation, importedDict: Record<string, Set<string>>) {
    if (isLongRunningOperation(operation)) {
        sample.isLRO = true;
        addValueInImportedDict(getPackageName(), "getLongRunningPoller", importedDict);
    }
    if (isPagingOperation(operation)) {
        sample.isPaging = true;
        addValueInImportedDict(getPackageName(), "paginate", importedDict);
    }
}

function transformSpecialLetterToSpace(str: string) {
    if (!str) {
        return str;
    }
    return str
        .replace(/_/g, " ")
        .replace(/\//g, " Or ")
        .replace(/,|\.|\(|\)/g, " ")
        .replace("'s ", " ");
}

function getPackageName() {
    const {
        packageDetails
    } = getAutorestOptions();
    return packageDetails.name;
}

export function createSampleData(model: TestCodeModel) {
    const {
        addCredentials,
        packageDetails
    } = getAutorestOptions();
    const clientFileName = normalizeName(
        getLanguageMetadata(model.language).name,
        NameType.File
    );
    const clientName = getLanguageMetadata(model.language).name;
    const clientInterfaceName = clientName.endsWith("Client") ? `${clientName}` : `${clientName}Client`;
    const { parameterName } = transformBaseUrl(model);
    const hasUriParameter = !!parameterName, hasCredentials = addCredentials;
    const clientParameters = [];
    const clientParamAssignments = [];
    if (hasUriParameter) {
        clientParamAssignments.push(`const ${parameterName} = process.env["ENDPOINT"] || "<${parameterName}>"`);
        clientParameters.push(`${parameterName}`);
    }
    if (hasCredentials) {
        clientParamAssignments.push("const credential = new DefaultAzureCredential();");
        clientParameters.push("credential");
    }
    return {
        filename: `${clientFileName}Sample`,
        clientParamAssignments,
        clientClassName: clientInterfaceName,
        clientPackageName: `${packageDetails.name}`,
        clientParameterNames: clientParameters.join(","),
        hasCredentials
    }

}
function enrichImportedString(sampleGroup: RLCSampleGroup, importedDict: Record<string, Set<string>>, defaultFactoryName: string) {
    const importedTypes: string[] = [], packageName = getPackageName();
    if (!!importedDict[packageName]) {
        const otherTypes = Array.from(importedDict[packageName]).join(", ");
        importedTypes.push(`import ${defaultFactoryName}, { ${otherTypes} } from "${packageName}";`);
    } else {
        importedTypes.push(`import ${defaultFactoryName} from "${packageName}";`);
    }
    if (importedDict[tokenCredentialPackage]) {
        const otherTypes = Array.from(importedDict[tokenCredentialPackage]).join(", ");
        importedTypes.push(`import { ${otherTypes} } from "${tokenCredentialPackage}";`);
    }
    if (importedDict[apiKeyCredentialPackage]) {
        const otherTypes = Array.from(importedDict[apiKeyCredentialPackage]).join(", ");
        importedTypes.push(`import { ${otherTypes} } from "${apiKeyCredentialPackage}";`);
    }
    sampleGroup.importedTypes = importedTypes;
}


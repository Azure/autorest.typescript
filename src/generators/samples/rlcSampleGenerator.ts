import { TestCodeModel } from "@autorest/testmodeler/dist/src/core/model";
import { Project } from "ts-morph";
import { getAutorestOptions, getSession } from "../../autorestSession";
import * as fs from 'fs';
import * as path from 'path';
import * as hbs from "handlebars";
import { NameType, normalizeName } from "../../utils/nameUtils";
import { getLanguageMetadata } from "../../utils/languageHelpers";
import { transformBaseUrl } from "../../transforms/urlTransforms";
import { PathMetadata, Paths, RLCSampleDetail, RLCSampleGroup, SampleParameter, SampleParameters, TestSampleParameters } from "../../restLevelClient/interfaces";
import { camelCase } from "@azure-tools/codegen";
import { pathDictionary } from "../../restLevelClient/generateClientDefinition";
import { Operation, ParameterLocation } from "@autorest/codemodel";
// import { ExampleModel } from "@autorest/testmodeler";

export function generateRLCSamples(model: TestCodeModel, project: Project) {
    const {
        generateSample,
        multiClient
    } = getAutorestOptions();
    const session = getSession();
    if (!generateSample || !model?.testModel?.mockTest?.exampleGroups) {
        return;
    }
    // Not supported to generate code for multi-client
    if (multiClient) {
        // TODO: add logging info
        return;
    }
    try {
        const file = fs.readFileSync(path.join(__dirname, "rlcSamples.ts.hbs"), {
            encoding: "utf-8"
        });

        const sampleFileContents = hbs.compile(file, { noEscape: true });
        const res = transformRLCSampleData(model);

        session.debug(res.toString());


        const sampleData = createSampleData(model);
        project.createSourceFile(`samples-dev/${sampleData.filename}.ts`, sampleFileContents(sampleData), {
            overwrite: true
        });
    } catch (error) {
        session.error("An error was encountered while handling sample generation", []);
        throw error;
    }
}

export function transformRLCSampleData(model: TestCodeModel): RLCSampleGroup[] {
    const rlcSampleGroups: RLCSampleGroup[] = [];
    if (!model?.testModel?.mockTest?.exampleGroups) {
        return rlcSampleGroups;
    }
    const session = getSession();
    const paths: Paths = pathDictionary;
    const rawSamplesForAll = model.testModel.mockTest.exampleGroups;
    for (const rawSamplesForOperID of rawSamplesForAll) {
        const operation: Operation = rawSamplesForOperID.operation;
        const operationId = rawSamplesForOperID.operationId;
        const operationName = getLanguageMetadata(operation.language).name;
        const path: string = operation.requests?.[0].protocol.http?.path;
        const method = operation.requests?.[0].protocol.http?.method;
        const pathDetail: PathMetadata = paths[path];
        const sampleGroup: RLCSampleGroup = {
            filename: "",
            clientClassName: "",
            clientPackageName: "",
            samples: []
        };
        const rawSamples = rawSamplesForOperID?.examples;
        if (!rawSamples || rawSamples.length == 0) {
            session.debug(`Skip sample transformation`);
            continue;
        }
        try {
            for (const rawSample of rawSamples) {
                // initial the sample
                const sample: RLCSampleDetail = {
                    description: getLanguageMetadata(
                        rawSamplesForOperID.operation.language
                    ).description,
                    originalFileLocation: rawSample.originalFile,
                    name: camelCase(
                        transformSpecialLetterToSpace(rawSample?.name)
                    ),
                    path,
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
                    "client": [],
                    "path": [],
                    "method": []
                };
                rawParamters.client = rawSample.clientParameters;
                rawParamters.path = (rawSample.methodParameters || [])
                                    .filter(param => param.parameter.protocol.http?.in == ParameterLocation.Path);
                rawParamters.method = (rawSample.methodParameters || [])
                                    .filter(param => param.parameter.protocol.http?.in == ParameterLocation.Body);
                const parameters : SampleParameters = {
                    "client": [],
                    "path": [],
                    "method": []
                };
                // client-level parameter preparation
                convertClientLevelParameters(rawParamters, parameters);
                // path-level parameter preparation
                parameters.path = convertPathLevelParameters(rawParamters.path, pathDetail);
                // method-level parameter 
                convertMethodLevelParameters(rawParamters, parameters);
                // enrich parameter details
                enrichParameterInSample(sample, parameters);
                // enrich LRO and pagination info
                enrichLROAndPagingInSample(sample,operation);
                sampleGroup.samples.push(sample);
            }
        } catch (error) {
            session.error("An error was encountered while transforming sample", [
                "exampleGroup.operationId"
            ]);
            throw error;
        }
        if (sampleGroup.samples.length > 0) {
            // enrich the importedTypes after all examples resolved
            // sampleGroup.importedTypes = Array.from(importedTypeSet);
            // TOOD: handle imported sets
            rlcSampleGroups.push(sampleGroup);
        } else {
            session.debug(`No sample found`);
        }
    }
    return rlcSampleGroups;
}

function convertClientLevelParameters(from: TestSampleParameters, to: SampleParameters) {
    console.log(from);

}

function convertPathLevelParameters(from:any[], pathDetail: PathMetadata):SampleParameter[] {
    const res: Record<string, any> = {};
    (from || []).forEach(p => {
        const name = p.parameter.language.default.serializedName || p.parameter.language.default.name;
        res[name] = p;
    })
    return (pathDetail || []).pathParameters.map(p => {
        if(res[p.name]) {
            return {
                name: ""
            } as SampleParameter;
        } else {
            const pathParam: SampleParameter = {
                name: p.name
            }
            pathParam.assignment = `const ${pathParam.name} = "${res[p.name].exampleValue.rawValue}";`;
            return pathParam;
        } 
    });
}

function convertMethodLevelParameters(from: TestSampleParameters, to: SampleParameters) {
    console.log(from);
}

function enrichParameterInSample(sample: RLCSampleDetail,  parameters: SampleParameters) {
    console.log(sample);
}

function enrichLROAndPagingInSample(sample: RLCSampleDetail, operation: Operation) {
    console.log(sample);
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

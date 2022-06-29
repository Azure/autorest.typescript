import { ExampleParameter, ExampleValue, TestCodeModel } from "@autorest/testmodeler/dist/src/core/model";
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
import { ChoiceSchema, ConstantSchema, Operation, ParameterLocation, SchemaType } from "@autorest/codemodel";
import { isLongRunningOperation } from "../../restLevelClient/helpers/hasPollingOperations";
import { isPagingOperation } from "../../utils/extractPaginationDetails";
// import { ExampleModel } from "@autorest/testmodeler";

const credentialPackageName = "@azure/identity";

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
                const parameters: SampleParameters = {
                    "client": [],
                    "path": [],
                    "method": []
                };
                // client-level parameter preparation
                parameters.client = convertClientLevelParameters(rawParamters.client, model, importedDict);
                // path-level parameter preparation
                parameters.path = convertPathLevelParameters(rawParamters.path, pathDetail, path);
                // method-level parameter 
                parameters.method = convertMethodLevelParameters(rawParamters.method, pathDetail.methods[method], importedDict);
                // enrich parameter details
                enrichParameterInSample(sample, parameters);
                // enrich LRO and pagination info
                enrichLROAndPagingInSample(sample, operation, importedDict);
                sampleGroup.samples.push(sample);
            }
        } catch (error) {
            session.error("An error was encountered while transforming sample", [
                "exampleGroup.operationId"
            ]);
            throw error;
        }
        if(sampleGroup.samples.length == 0) {
            session.debug(`No sample found`);
        }
        // enrich the importedTypes after all examples resolved
            // sampleGroup.importedTypes = Array.from(importedTypeSet);
            rlcSampleGroups.push(sampleGroup);
            enrichImportedString(sampleGroup, importedDict);
    }
    return rlcSampleGroups;
}

function convertClientLevelParameters(rawClientParams: ExampleParameter[], model: TestCodeModel, importedDict: Record<string, Set<string>>):SampleParameter[] {
    const clientParams: SampleParameter[] = [];
    const {
        addCredentials,
    } = getAutorestOptions();
    if(!rawClientParams || rawClientParams.length == 0) {
        return clientParams;
    }

    const { parameterName } = transformBaseUrl(model);
    const hasUriParameter = !!parameterName, hasCredentials = addCredentials;
    const rawUriParameters = rawClientParams.filter(p => p.parameter.protocol.http?.in === ParameterLocation.Uri);
    if (hasUriParameter && rawUriParameters.length > 0) {
        // Currently only support one parametrized host
        // TODO: support more parameters in url
        const urlValue = getParameterAssignment(rawUriParameters[0].exampleValue); 
        clientParams.push({
            name: parameterName,
            assignment: `const ${parameterName} = ` + urlValue
        });
    }
    if (hasCredentials) {
        // Currently only support token credential
        // TODO: support api-key credential;
        clientParams.push({
            name: "credential",
            assignment: "const credential = new DefaultAzureCredential();"
        });
        addValueInImportedDict(credentialPackageName, "DefaultAzureCredential", importedDict);
    }
    return clientParams;
}

function addValueInImportedDict(key: string, val: string, importedDict:  Record<string, Set<string>>) {
    if(!importedDict[key]) {
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
        name: path
    };
    const pathParams = (pathDetail || []).pathParameters.map(p => {
        if (!res[p.name]) {
            // path params are mandotary we'll leave it empty if no input
            return {
                name: ""
            } as SampleParameter;
        } else {
            const pathParam: SampleParameter = {
                name: p.name
            }
            const value = getParameterAssignment(res[p.name].exampleValue)
            pathParam.assignment = `const ${pathParam.name} = "${value}";`;
            return pathParam;
        }
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
    
    const value: any = {};
    rawMethodParams.forEach(p => {
        if (p.parameter.protocol.http?.in == ParameterLocation.Body) {
            value.body = getParameterAssignment(p.exampleValue);
        }
        // Handle other position in options
    });
    const optionParam: SampleParameter = {
        name: "options",
        assignment: `const options: ${method.optionsName} = ${JSON.stringify(value)};`
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

function getParameterAssignment(exampleValue: ExampleValue) {
    let schemaType = exampleValue.schema.type;
    const rawValue = exampleValue.rawValue;
    let retValue = rawValue;
    switch (schemaType) {
      case SchemaType.Constant:
        const contentSchema = exampleValue.schema as ConstantSchema;
        schemaType = contentSchema.valueType.type;
        break;
      case SchemaType.Choice:
      case SchemaType.SealedChoice:
        const choiceSchema = exampleValue.schema as ChoiceSchema;
        schemaType = choiceSchema.choiceType.type;
        break;
    }
    if (rawValue === null) {
      switch (schemaType) {
        case SchemaType.Object:
        case SchemaType.Any:
        case SchemaType.Dictionary:
        case SchemaType.AnyObject:
          retValue = `{}`;
          break;
        case SchemaType.Array:
          retValue = `[]`;
          break;
        default:
          retValue = undefined;
      }
      return retValue;
    }
    switch (schemaType) {
      case SchemaType.String:
      case SchemaType.Char:
      case SchemaType.Time:
      case SchemaType.Uuid:
      case SchemaType.Uri:
      case SchemaType.Credential:
      case SchemaType.Duration:
        retValue = `"${rawValue
          ?.toString()
          .replace(/"/g, '\\"')
          .replace(/\n/g, "\\n")}"`;
        break;
      case SchemaType.Boolean:
        (retValue = rawValue), toString();
        break;
      case SchemaType.Object:
      case SchemaType.Dictionary:
        const values = [];
        for (const prop in exampleValue.properties) {
          const property = exampleValue.properties[prop];
          if (property === undefined || property === null) {
            continue;
          }
          const initPropName = property.language?.default?.name
            ? property.language?.default?.name
            : prop;
          const propName = normalizeName(initPropName, NameType.Property, true);
          let propRetValue: string;
          if (propName.indexOf("/") > -1 || propName.match(/^\d/)) {
            propRetValue = `"${propName}": ` + getParameterAssignment(property);
          } else {
            propRetValue = `${propName}: ` + getParameterAssignment(property);
          }
          values.push(propRetValue);
        }
        if (values.length > 0) {
          retValue = `{${values.join(", ")}}`;
        } else {
          retValue = "{}";
        }
        break;
      case SchemaType.Array:
        const valuesArr = [];
        for (const element of <ExampleValue[]>exampleValue.elements) {
          let propRetValueArr = getParameterAssignment(element);
          valuesArr.push(propRetValueArr);
        }
        if (valuesArr.length > 0) {
          retValue = `[${valuesArr.join(", ")}]`;
        } else {
          retValue = "[]";
        }
        break;
      case SchemaType.Date:
      case SchemaType.DateTime:
        retValue = `new Date("${rawValue}")`;
        break;
      case SchemaType.Any:
      case SchemaType.AnyObject:
        retValue = `${JSON.stringify(rawValue)}`;
        break;
      default:
        break;
    }
    return retValue;
  }

function enrichLROAndPagingInSample(sample: RLCSampleDetail, operation: Operation,  importedDict: Record<string, Set<string>>) {
    if(isLongRunningOperation(operation)) {
        sample.isLRO = true;
        addValueInImportedDict(getPackageName(), "getLongRunningPoller", importedDict);
    }
    if(isPagingOperation(operation)) {
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
function enrichImportedString(sampleGroup: RLCSampleGroup, importedDict: Record<string, Set<string>>) {
    const importedTypes: string[] = [], packageName = getPackageName();
    if(!!importedDict[packageName]) {
        const otherTypes = Array.from(importedDict[packageName]).join(",");
        importedTypes.push(`import createClient, { ${otherTypes} } from "${packageName}";`);
    } else {
        importedTypes.push(`import createClient from "${packageName}";`);
    }
    if(importedDict[credentialPackageName]){
        const otherTypes = Array.from(importedDict[credentialPackageName]).join(",");
        importedTypes.push(`import { ${otherTypes} } from "${credentialPackageName}";`);
    }
    sampleGroup.importedTypes = importedTypes;
}


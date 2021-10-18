import { CodeModel, ConstantSchema, Protocol, SchemaType } from "@autorest/codemodel";
import { ClientOptions } from "../models/clientDetails";
import { SampleDetails } from "../models/sampleDetails";
import { ExampleValue, TestCodeModel } from "@autorest/tests/dist/src/core/model"
import { getLanguageMetadata } from "../utils/languageHelpers";
import { getAutorestOptions } from "../autorestSession";

export function transformSamples(
    codeModel: CodeModel,
    options: ClientOptions
): SampleDetails[] {
    return getAllExamples(codeModel);
}

export function getAllExamples(codeModel: TestCodeModel) {
    const { packageDetails } = getAutorestOptions();
    let examplesModels: SampleDetails[] = [];
    if (codeModel?.testModel?.mockTest?.exampleGroups !== undefined) {
        for(const exampleGroups of codeModel.testModel.mockTest.exampleGroups) {
            for(const example of exampleGroups.examples) {
                const sample: SampleDetails = {
                    operationDescription: getLanguageMetadata(example.operation.language).description,
                    operationName: getLanguageMetadata(example.operation.language).name,
                    operationGroupName: getLanguageMetadata(example.operationGroup.language).name,
                    clientClassName: getLanguageMetadata(codeModel.language).name,
                    clientPackageName: packageDetails.name,
                    clientParameterNames: "",
                    methodParameterNames: "",
                    bodySchemaName: "",
                    hasBody: false,
                    sampleFunctionName: example.name,
                    methodParamAssignments: [],
                    clientParamAssignments: []
                }
                const clientParameterNames = ["credential"];
                for(const clientParameter of example.clientParameters) {
                    if (clientParameter.exampleValue.schema.type === SchemaType.Constant) {
                        continue;
                    }
                    const parameterName = getLanguageMetadata(clientParameter.exampleValue.language).name;
                    const paramAssignment = `const ${parameterName} = ` + getParameterAssignment(clientParameter.exampleValue);
                    sample.clientParamAssignments.push(paramAssignment)
                    clientParameterNames.push(parameterName);
                }
                if (clientParameterNames.length > 0) {
                    sample.clientParameterNames = clientParameterNames.join(", ");
                }
                const methodParameterNames = []
                for(const methodParameter of example.methodParameters) {
                    if (methodParameter.exampleValue.schema.type === SchemaType.Constant) {
                        continue;
                    }
                    const parameterName = getLanguageMetadata(methodParameter.exampleValue.language).name;
                    let paramAssignment = "";
                    if (methodParameter.parameter.protocol?.http?.['in'] === "body") {
                        sample.hasBody = true;
                        sample.bodySchemaName = getLanguageMetadata(methodParameter.exampleValue.schema.language).name;
                        paramAssignment = `const ${parameterName}: ${sample.bodySchemaName} = ` + getParameterAssignment(methodParameter.exampleValue);
                    } else {
                        paramAssignment = `const ${parameterName} = ` + getParameterAssignment(methodParameter.exampleValue);
                    }
                    sample.methodParamAssignments.push(paramAssignment);
                    methodParameterNames.push(parameterName);
                }
                if (methodParameterNames.length > 0) {
                    sample.methodParameterNames = methodParameterNames.join(", ");
                }
                examplesModels.push(sample);
            }
            
        }        
    }
    return examplesModels;
}

function getParameterAssignment(exampleValue: ExampleValue) {
    let  schemaType = exampleValue.schema.type;
    const rawValue = exampleValue.rawValue;
    let retValue = rawValue
    switch (schemaType) {
        case SchemaType.Constant:
            const contentSchema = exampleValue.schema as ConstantSchema;
            schemaType = contentSchema.valueType.type;
        case SchemaType.Choice:
        case SchemaType.SealedChoice:
        case SchemaType.String:
        case SchemaType.Char:
        case SchemaType.Time:
        case SchemaType.Uuid:
        case SchemaType.Uri:
        case SchemaType.Credential:
            retValue = `"${rawValue}"`;
            break;
        case SchemaType.Boolean:
            retValue = rawValue,toString();
            break;
        case SchemaType.Object:
        case SchemaType.Dictionary:
            const values = []
            for(const prop in exampleValue.properties) {
                let propRetValue = `${prop}: ` + getParameterAssignment(exampleValue.properties[prop]);
                values.push(propRetValue);
            }
            retValue = `{${values.join(", ")}}`
            break;
        case SchemaType.Array:
            const valuesArr = []
            for(const element of <ExampleValue[]>exampleValue.elements) {
                let propRetValueArr = getParameterAssignment(element);
                valuesArr.push(propRetValueArr);
            }
            retValue = `[${valuesArr.join(", ")}]`;
            break;
        default:
            break;   
    }
    return retValue;
}


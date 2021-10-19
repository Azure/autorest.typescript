import { CodeModel, ConstantSchema, Protocol, SchemaType } from "@autorest/codemodel";
import { ClientOptions } from "../models/clientDetails";
import { SampleDetails } from "../models/sampleDetails";
import { ExampleValue, TestCodeModel } from "@autorest/tests/dist/src/core/model"
import { getLanguageMetadata } from "../utils/languageHelpers";
import { getAutorestOptions } from "../autorestSession";
import { NameType, normalizeName } from "../utils/nameUtils";
import { transformOperation } from "./operationTransforms";
import { calculateMethodName } from "../generators/utils/operationsUtils";

export async function transformSamples(
    codeModel: CodeModel,
    options: ClientOptions
): Promise<SampleDetails[]> {
    return await getAllExamples(codeModel);
}

export async function getAllExamples(codeModel: TestCodeModel) {
    const { packageDetails } = getAutorestOptions();
    let examplesModels: SampleDetails[] = [];
    if (codeModel?.testModel?.mockTest?.exampleGroups !== undefined) {
        for(const exampleGroups of codeModel.testModel.mockTest.exampleGroups) {
            for(const example of exampleGroups.examples) {
                const clientName = getLanguageMetadata(codeModel.language).name;
                const opDetails = await transformOperation(example.operation, example.operationGroup, clientName);
                let methodName = calculateMethodName(opDetails);
                if (opDetails.isLro && opDetails.pagination === undefined) {
                    methodName = `${methodName}AndWait`;
                }
                const opGroupName = getLanguageMetadata(example.operationGroup.language).name;
                const sample: SampleDetails = {
                    operationDescription: getLanguageMetadata(example.operation.language).description,
                    operationName: methodName,
                    operationGroupName: normalizeName(opGroupName, NameType.Property),
                    clientClassName: clientName,
                    clientPackageName: packageDetails.name,
                    clientParameterNames: "",
                    methodParameterNames: "",
                    bodySchemaName: "",
                    hasBody: false,
                    sampleFunctionName: normalizeName(example.name.replace(/\//, " Or "), NameType.Operation),
                    methodParamAssignments: [],
                    clientParamAssignments: []
                }
                const clientParameterNames = ["credential"];
                for(const clientParameter of example.clientParameters) {
                    if (clientParameter.exampleValue.schema.type === SchemaType.Constant) {
                        continue;
                    }
                    const parameterName =  normalizeName(getLanguageMetadata(clientParameter.exampleValue.language).name, NameType.Parameter);
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
                const propName = normalizeName(prop, NameType.Property);
                let propRetValue: string;
                if (propName.indexOf('/') > -1) {
                    propRetValue = `"${propName}": ` + getParameterAssignment(exampleValue.properties[prop]);
                } else {
                    propRetValue = `${propName}: ` + getParameterAssignment(exampleValue.properties[prop]);
                }
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
        case SchemaType.Date:
        case SchemaType.DateTime:
            retValue =  `new Date("${rawValue}")`;
            break;
        default:
            break;   
    }
    return retValue;
}


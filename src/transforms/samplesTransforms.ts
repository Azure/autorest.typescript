import {
  CodeModel,
  ConstantSchema,
  Operation,
  OperationGroup,
  Protocol,
  SchemaType
} from "@autorest/codemodel";
import { ClientOptions } from "../models/clientDetails";
import { SampleDetails } from "../models/sampleDetails";
import { ExampleValue, TestCodeModel } from "@autorest/testmodeler";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { getAutorestOptions, getSession } from "../autorestSession";
import { getOperationFullName, NameType, normalizeName } from "../utils/nameUtils";
import {
  transformOperation,
  transformOperationGroup
} from "./operationTransforms";
import { calculateMethodName } from "../generators/utils/operationsUtils";
import { camelCase } from "@azure-tools/codegen";
import { OperationGroupDetails } from "../models/operationDetails";

export async function transformSamples(
  codeModel: CodeModel,
  operationsGroupDetails: OperationGroupDetails[],
  options: ClientOptions
): Promise<SampleDetails[]> {
  return await getAllExamples(codeModel as TestCodeModel, operationsGroupDetails);
}

function getTransformedOperationGroup(operationGroup: OperationGroup, operationGroupDetails: OperationGroupDetails[]) {
  return operationGroupDetails.filter(operationGroupDetail => operationGroup.$key === operationGroupDetail.key)[0];
}

function getTransformedOperation(operationGroup: OperationGroup, operation: Operation, operationGroupDetails: OperationGroupDetails, clientName: string) {
  return operationGroupDetails.operations.filter(operationDetail => operationDetail.fullName === getOperationFullName(operationGroup, operation, clientName))[0];
}

export async function getAllExamples(codeModel: TestCodeModel, operationGroupDetails: OperationGroupDetails[]) {
  const { packageDetails } = getAutorestOptions();
  const session = getSession();
  let examplesModels: SampleDetails[] = [];
  if (codeModel?.testModel?.mockTest?.exampleGroups !== undefined) {
    for (const exampleGroups of codeModel.testModel.mockTest.exampleGroups) {
      try {
        for (const example of exampleGroups.examples) {
          const clientName = getLanguageMetadata(codeModel.language).name;
          const ogDetails = getTransformedOperationGroup(example.operationGroup, operationGroupDetails);
          
          const opDetails = getTransformedOperation(
            example.operationGroup,
            example.operation,
            ogDetails,
            clientName
          );
          let methodName = calculateMethodName(opDetails);
          if (opDetails.isLro && opDetails.pagination === undefined) {
            methodName = `${methodName}AndWait`;
          }
          const opGroupName = ogDetails.name;
          const sample: SampleDetails = {
            operationDescription: getLanguageMetadata(
              example.operation.language
            ).description,
            operationName: methodName,
            operationGroupName: normalizeName(opGroupName, NameType.Property),
            clientClassName: clientName,
            clientPackageName: packageDetails.name,
            clientParameterNames: "",
            methodParameterNames: "",
            bodySchemaName: "",
            hasBody: false,
            hasOptional: false,
            sampleFunctionName: camelCase(example.name.replace(/\//g, " Or ").replace(/,|\.|\(|\)/g, " ")),
            methodParamAssignments: [],
            clientParamAssignments: [],
            isTopLevel: ogDetails.isTopLevel,
            isPaging: opDetails.pagination !== undefined
          };
          const clientParameterNames = ["credential"];
          for (const clientParameter of example.clientParameters) {
            if (
              clientParameter.exampleValue.schema.type === SchemaType.Constant
            ) {
              continue;
            }
            const parameterName = normalizeName(
              getLanguageMetadata(clientParameter.exampleValue.language).name,
              NameType.Parameter
            );
            const paramAssignment =
              `const ${parameterName} = ` +
              getParameterAssignment(clientParameter.exampleValue);
            sample.clientParamAssignments.push(paramAssignment);
            clientParameterNames.push(parameterName);
          }
          if (clientParameterNames.length > 0) {
            sample.clientParameterNames = clientParameterNames.join(", ");
          }
          const methodParameterNames = [];
          const optionalParams = [];
          for (const methodParameter of example.methodParameters) {
            if (
              methodParameter.exampleValue.schema.type === SchemaType.Constant
            ) {
              continue;
            }
            const parameterName = getLanguageMetadata(
              methodParameter.exampleValue.language
            ).name;
            let paramAssignment = "";
            if (methodParameter.parameter.protocol?.http?.["in"] === "body") {
              sample.hasBody = true;
              sample.bodySchemaName = getLanguageMetadata(
                methodParameter.exampleValue.schema.language
              ).name;
              paramAssignment =
                `const ${parameterName}: ${sample.bodySchemaName} = ` +
                getParameterAssignment(methodParameter.exampleValue);
            } else {
              paramAssignment =
                `const ${parameterName} = ` +
                getParameterAssignment(methodParameter.exampleValue);
            }
            if (!methodParameter.parameter.required) {
              optionalParams.push(parameterName);
            } else {
              methodParameterNames.push(parameterName);
            }
            sample.methodParamAssignments.push(paramAssignment);
          }
          if (optionalParams.length > 0) {
            const optionAssignment = `const options = {${optionalParams
              .map(item => {
                return item + ": " + item;
              })
              .join(", ")}}`;
            sample.methodParamAssignments.push(optionAssignment);
            methodParameterNames.push("options");
          }
          if (methodParameterNames.length > 0) {
            sample.methodParameterNames = methodParameterNames.join(", ");
          }
          examplesModels.push(sample);
        }
      } catch (error) {
        session.error("An error was encountered while transforming sample", [
          exampleGroups.operationId
        ]);
        throw error;
      }
    }
  }
  return examplesModels;
}

function getParameterAssignment(exampleValue: ExampleValue) {
  let schemaType = exampleValue.schema.type;
  const rawValue = exampleValue.rawValue;
  let retValue = rawValue;
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
    case SchemaType.Duration:
      retValue = `"${rawValue?.toString().replace(/"/g, '\\"')}"`;
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

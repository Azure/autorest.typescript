import {
  ChoiceSchema,
  CodeModel,
  ConstantSchema,
  ImplementationLocation,
  Operation,
  OperationGroup,
  Protocol,
  SchemaType
} from "@autorest/codemodel";
import { ClientDetails, ClientOptions } from "../models/clientDetails";
import { SampleDetails, SampleElement } from "../models/sampleDetails";
import { ExampleValue, TestCodeModel } from "@autorest/testmodeler";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { getAutorestOptions, getSession } from "../autorestSession";
import { getOperationFullName, NameType, normalizeName } from "../utils/nameUtils";
import { calculateMethodName } from "../generators/utils/operationsUtils";
import { camelCase } from "@azure-tools/codegen";
import { OperationGroupDetails } from "../models/operationDetails";
import { getPublicMethodName } from '../generators/utils/pagingOperations';

export async function transformSamples(
  codeModel: CodeModel,
  clientDetails: ClientDetails
): Promise<SampleDetails[]> {
  return await getAllExamples(codeModel as TestCodeModel, clientDetails);
}

function getTransformedOperationGroup(operationGroup: OperationGroup, operationGroupDetails: OperationGroupDetails[]) {
  return operationGroupDetails.filter(operationGroupDetail => operationGroup.$key === operationGroupDetail.originalKey)[0];
}

function getTransformedOperation(operationGroup: OperationGroup, operation: Operation, operationGroupDetails: OperationGroupDetails, clientName: string) {
  return operationGroupDetails.operations.filter(operationDetail => operationDetail.fullName === getOperationFullName(operationGroup, operation, clientName))[0];
}

export async function getAllExamples(codeModel: TestCodeModel, clientDetails: ClientDetails) {
  const operationGroupDetails = clientDetails.operationGroups;
  const { packageDetails } = getAutorestOptions();
  const session = getSession();
  let examplesModels: SampleDetails[] = [];
  if (codeModel?.testModel?.mockTest?.exampleGroups !== undefined) {
    for (const exampleGroup of codeModel.testModel.mockTest.exampleGroups) {
      const clientName = getLanguageMetadata(codeModel.language).name;
      const ogDetails = getTransformedOperationGroup(exampleGroup.operationGroup, operationGroupDetails);
      if (ogDetails === undefined) {
        session.error("An error was encountered while transforming sample", [
          exampleGroup.operationId
        ]);
        continue;
      }
      const opDetails = getTransformedOperation(
        exampleGroup.operationGroup,
        exampleGroup.operation,
        ogDetails,
        clientName
      );
      let methodName = calculateMethodName(opDetails);
      if (opDetails.isLro && opDetails.pagination === undefined) {
        methodName = `${methodName}AndWait`;
      } else if (opDetails.pagination) {
        methodName = getPublicMethodName(opDetails);
      }
      const opGroupName = ogDetails.name;
      const bodySchemaNameSet = new Set<string>();
      const sampleFile: SampleDetails = {
        sampleFileName: camelCase(exampleGroup.operationId.replace(/_/g, ' ').replace(/\//g, ' Or ').replace(/,|\.|\(|\)/g, ' ').replace('\'s ', ' ')),
        operationDescription: getLanguageMetadata(
          exampleGroup.operation.language
        ).description,
        operationName: methodName,
        operationGroupName: normalizeName(opGroupName, NameType.Property),
        clientClassName: clientName,
        clientPackageName: packageDetails.name,
        bodySchemaNames: [],
        hasBody: false,
        hasOptional: false,
        isTopLevel: ogDetails.isTopLevel,
        isPaging: opDetails.pagination !== undefined,
        samples: []
      };
      try {
        for (const example of exampleGroup.examples) {
          const sample: SampleElement = {
            sampleFunctionName: camelCase(example.name.replace(/\//g, " Or ").replace(/,|\.|\(|\)/g, " ").replace('\'s ', ' ')),
            clientParameterNames: "",
            methodParameterNames: "",
            clientParamAssignments: [],
            methodParamAssignments: [],
            originalFileLocation: example.originalFile,
          };
          const clientParameterNames = ["credential"];
          const requiredParams = clientDetails.parameters.filter(
            param =>
              param.required &&
              param.implementationLocation === ImplementationLocation.Client &&
              !param.defaultValue &&
              param.schemaType !== SchemaType.Constant
          );
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
          if (clientParameterNames.indexOf("subscriptionId") < 0 && requiredParams.find(param => param.name === 'subscriptionId')) {
            const subscriptionIdAssignment = `const subscriptionId = "00000000-0000-0000-0000-000000000000"`;
            sample.clientParamAssignments.push(subscriptionIdAssignment);
            clientParameterNames.push('subscriptionId');
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
              // if existing one parameter hasBody in sample file will be truthy
              sampleFile.hasBody = true;
              const bodySchemaName = getLanguageMetadata(
                methodParameter.exampleValue.schema.language
              ).name;
              bodySchemaNameSet.add(bodySchemaName);
              paramAssignment =
                `const ${parameterName}: ${bodySchemaName} = ` +
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
          sampleFile.samples.push(sample);
        }
      } catch (error) {
        session.error("An error was encountered while transforming sample", [
          exampleGroup.operationId
        ]);
        throw error;
      }
      // enrich the bodySchemaNames after all examples resolved
      sampleFile.bodySchemaNames = Array.from(bodySchemaNameSet);
      examplesModels.push(sampleFile);
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
      retValue = `"${rawValue?.toString().replace(/"/g, '\\"').replace(/\n/g, '\\n')}"`;
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

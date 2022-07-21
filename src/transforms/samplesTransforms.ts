import {
  CodeModel,
  ImplementationLocation,
  Operation,
  OperationGroup,
  SchemaType
} from "@autorest/codemodel";
import { ClientDetails } from "../models/clientDetails";
import { SampleGroup, SampleDetails } from "../models/sampleDetails";
import {
  TestCodeModel
} from "@autorest/testmodeler/dist/src/core/model";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { getAutorestOptions, getSession } from "../autorestSession";
import {
  getOperationFullName,
  NameType,
  normalizeName
} from "../utils/nameUtils";
import { calculateMethodName } from "../generators/utils/operationsUtils";
import { camelCase } from "@azure-tools/codegen";
import { OperationGroupDetails } from "../models/operationDetails";
import { getPublicMethodName } from "../generators/utils/pagingOperations";
import { getTypeForSchema } from "../utils/schemaHelpers";
import { getParameterAssignment } from "../utils/valueHelpers";

export async function transformSamples(
  codeModel: CodeModel,
  clientDetails: ClientDetails
): Promise<SampleGroup[]> {
  return await getAllExamples(codeModel as TestCodeModel, clientDetails);
}

function getTransformedOperationGroup(
  operationGroup: OperationGroup,
  operationGroupDetails: OperationGroupDetails[]
) {
  return operationGroupDetails.filter(
    operationGroupDetail =>
      operationGroup.$key === operationGroupDetail.originalKey
  )[0];
}

function getTransformedOperation(
  operationGroup: OperationGroup,
  operation: Operation,
  operationGroupDetails: OperationGroupDetails,
  clientName: string
) {
  return operationGroupDetails.operations.filter(
    operationDetail =>
      operationDetail.fullName ===
      getOperationFullName(operationGroup, operation, clientName)
  )[0];
}

export async function getAllExamples(
  codeModel: TestCodeModel,
  clientDetails: ClientDetails
) {
  const operationGroupDetails = clientDetails.operationGroups;
  const { packageDetails } = getAutorestOptions();
  const session = getSession();
  let examplesModels: SampleGroup[] = [];
  if (codeModel?.testModel?.mockTest?.exampleGroups !== undefined) {
    for (const exampleGroup of codeModel.testModel.mockTest.exampleGroups) {
      const clientName = getLanguageMetadata(codeModel.language).name;
      const ogDetails = getTransformedOperationGroup(
        exampleGroup.operationGroup,
        operationGroupDetails
      );
      if (ogDetails === undefined) {
        session.error("An error was encountered while transforming sample", [
          exampleGroup.operationId
        ]);
        continue;
      }
      if (!(exampleGroup?.examples?.length > 0)) {
        // Skip tranforming sample detail no given example in group
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
      const importedTypeSet = new Set<string>();
      const operatonConcante = `${exampleGroup?.operationGroup?.language?.default?.name}${exampleGroup?.operation?.language?.default?.name}`;
      const sampleGroup: SampleGroup = {
        sampleFileName: `${camelCase(
          _transformSpecialLetterToSpace(operatonConcante)
        )}Sample`,
        clientClassName: clientName,
        clientPackageName: packageDetails.name,
        samples: [],
        importedTypes: []
      };
      try {
        for (const example of exampleGroup.examples) {
          const sample: SampleDetails = {
            sampleFunctionName: camelCase(
              _transformSpecialLetterToSpace(example?.name)
            ),
            clientParameterNames: "",
            methodParameterNames: "",
            clientParamAssignments: [],
            methodParamAssignments: [],
            originalFileLocation: example.originalFile,
            isTopLevel: ogDetails.isTopLevel,
            isPaging: opDetails.pagination !== undefined,
            operationName: methodName,
            clientClassName: clientName,
            operationGroupName: normalizeName(
              opGroupName,
              NameType.Property,
              true
            ),
            operationDescription: getLanguageMetadata(
              exampleGroup.operation.language
            ).description
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
              NameType.Parameter,
              true
            );
            const paramAssignment =
              `const ${parameterName} = ` +
              getParameterAssignment(clientParameter.exampleValue);
            sample.clientParamAssignments.push(paramAssignment);
            clientParameterNames.push(parameterName);
          }
          if (
            clientParameterNames.indexOf("subscriptionId") < 0 &&
            requiredParams.find(param => param.name === "subscriptionId")
          ) {
            const subscriptionIdAssignment = `const subscriptionId = "00000000-0000-0000-0000-000000000000"`;
            sample.clientParamAssignments.push(subscriptionIdAssignment);
            clientParameterNames.push("subscriptionId");
          }
          if (clientParameterNames.length > 0) {
            sample.clientParameterNames = clientParameterNames.join(", ");
          }
          const methodParameterNames = [];
          const optionalParams: [string, string][] = [];
          for (const methodParameter of example.methodParameters) {
            if (
              methodParameter.exampleValue.schema.type === SchemaType.Constant
            ) {
              continue;
            }
            const parameterName = normalizeName(
              getLanguageMetadata(methodParameter.exampleValue.language).name,
              NameType.Parameter,
              true
            );
            const parameterTypeDetails = getTypeForSchema(
              methodParameter.exampleValue.schema
            );
            const parameterTypeName = parameterTypeDetails.typeName;
            let paramAssignment = "";
            if (methodParameter.parameter.protocol?.http?.["in"] === "body") {
              let bodySchemaName = parameterTypeName;
              if (
                methodParameter.exampleValue.schema.type ===
                SchemaType.AnyObject ||
                methodParameter.exampleValue.schema.type === SchemaType.Any
              ) {
                bodySchemaName = "Record<string, unknown>";
              } else if (
                methodParameter.exampleValue.schema.type !==
                SchemaType.Dictionary
              ) {
                if (parameterTypeName.endsWith("[]")) {
                  importedTypeSet.add(
                    parameterTypeName.substring(0, parameterTypeName.length - 2)
                  );
                } else {
                  importedTypeSet.add(parameterTypeName);
                }
              }
              paramAssignment =
                `const ${parameterName}: ${bodySchemaName} = ` +
                getParameterAssignment(methodParameter.exampleValue);
            } else {
              paramAssignment =
                `const ${parameterName} = ` +
                getParameterAssignment(methodParameter.exampleValue);
            }
            if (!methodParameter.parameter.required) {
              optionalParams.push([parameterName, parameterTypeName]);
            } else {
              methodParameterNames.push(parameterName);
            }
            sample.methodParamAssignments.push(paramAssignment);
          }
          if (optionalParams.length > 0) {
            const optionTypeName = `${opDetails.typeDetails.typeName}OptionalParams`;
            importedTypeSet.add(optionTypeName);
            const optionAssignment = `const options: ${optionTypeName} = {${optionalParams
              .map(item => {
                return item[0];
              })
              .join(", ")}}`;
            sample.methodParamAssignments.push(optionAssignment);
            methodParameterNames.push("options");
          }
          if (methodParameterNames.length > 0) {
            sample.methodParameterNames = methodParameterNames.join(", ");
          }
          sampleGroup.samples.push(sample);
        }
      } catch (error) {
        session.error("An error was encountered while transforming sample", [
          exampleGroup.operationId
        ]);
        throw error;
      }
      if (sampleGroup.samples.length > 0) {
        // enrich the importedTypes after all examples resolved
        sampleGroup.importedTypes = Array.from(importedTypeSet);
        examplesModels.push(sampleGroup);
      }
    }
  }
  return examplesModels;
}

function _transformSpecialLetterToSpace(str: string) {
  if (!str) {
    return str;
  }
  return str
    .replace(/_/g, " ")
    .replace(/\//g, " Or ")
    .replace(/,|\.|\(|\)/g, " ")
    .replace("'s ", " ");
}
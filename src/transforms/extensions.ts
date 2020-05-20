// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CodeModel,
  Operation,
  Parameter,
  StringSchema,
  Protocol,
  ParameterLocation,
  ImplementationLocation
} from "@azure-tools/codemodel";
import { cloneOperation } from "../utils/cloneOperation";
import { extractPaginationDetails } from "../utils/extractPaginationDetails";
import { getLanguageMetadata } from "../utils/languageHelpers";

/**
 * Normalizes the CodeModel based on available Azure extensions.
 * This may result in additional operations being inserted into the model.
 * @param codeModel The model that contains all the information required to generate a service API.
 */
export function normalizeModelWithExtensions(codeModel: CodeModel) {
  normalizeObjectPropertySerializedNames(codeModel);
  addPageableMethods(codeModel);
  normalizeMultipleContentTypes(codeModel);
}

/**
 * This normalizes object property serializedNames that contain periods.
 * This is necessary for properties with odata.
 * Example: `@odata.location` -> `@odata\\.location`
 * @param codeModel
 */
function normalizeObjectPropertySerializedNames(codeModel: CodeModel) {
  const schemas = codeModel.schemas;
  const objectSchemas = schemas.objects ?? [];
  for (const objectSchema of objectSchemas) {
    for (const property of objectSchema.properties ?? []) {
      if (property.serializedName) {
        property.serializedName = property.serializedName.replace(".", "\\.");
      }
    }
  }
}

/**
 * This updates the contentType parameter for operations
 * that support multiple media types to be required.
 * @param codeModel
 */
function normalizeMultipleContentTypes(codeModel: CodeModel) {
  const operationGroups = codeModel.operationGroups;
  for (const operationGroup of operationGroups) {
    const operations = operationGroup.operations.slice();

    for (const operation of operations) {
      const requests = operation.requests;
      if (!requests || (requests && requests.length > 1)) {
        continue;
      }

      for (const request of requests) {
        const parameters = request.parameters;
        if (!parameters) {
          continue;
        }

        for (const parameter of parameters) {
          const parameterMetadata = getLanguageMetadata(parameter.language);
          if (parameterMetadata.name.toLowerCase() === "contenttype") {
            parameter.required = false;
          }
        }
      }
    }
  }
}

/**
 * Adds the <operationName>Next method for each operation with an x-ms-pageable extension.
 * @param codeModel
 */
function addPageableMethods(codeModel: CodeModel) {
  const operationGroups = codeModel.operationGroups;

  for (const operationGroup of operationGroups) {
    const operationGroupMetadata = getLanguageMetadata(operationGroup.language);
    const operations = operationGroup.operations.slice();

    for (const operation of operations) {
      const paginationDetails = extractPaginationDetails(operation);
      const operationMetadata = getLanguageMetadata(operation.language);
      const operationName = operationMetadata.name;
      const operationDescription = operationMetadata.description;

      if (!paginationDetails || !paginationDetails.nextLinkName) {
        // The operation either doesn't support pagination or returns all items in a single page.
        // Therefore, it is not necessary to create a pageable method.
        continue;
      }

      const nextLinkOperationName = paginationDetails.nextLinkOperationName;
      if (!nextLinkOperationName) {
        // We don't know what the new operation name is.
        throw new Error(
          `Unable to determine the x-ms-pageable operationName for "${operationName}".`
        );
      }

      // Attempt to find the nextLinkOperationName in the code model.
      let nextLinkMethod = findOperation(
        codeModel,
        paginationDetails.group ?? operationGroupMetadata.name,
        nextLinkOperationName
      );

      if (nextLinkMethod) {
        // The operation to call to get subsequent pages already exists, so we don't need to create it.
        const metadata = getLanguageMetadata(nextLinkMethod.language);
        metadata.paging.isNextLinkMethod = true;
        continue;
      }

      // The "Next" operation doesn't exist, so we need to create it using current operation as a base.
      nextLinkMethod = cloneOperation(
        operation,
        nextLinkOperationName,
        operationDescription
      );

      const nextLinkMethodMetadata = getLanguageMetadata(
        nextLinkMethod.language
      );
      nextLinkMethodMetadata.paging.isNextLinkMethod = true;

      // Since this is a brand new operation, the nextLink will be a partial or absolute url.
      const nextLinkRequestProtocol =
        nextLinkMethod.requests?.[0].protocol.http ?? new Protocol();
      nextLinkRequestProtocol.path = "{nextLink}";
      nextLinkRequestProtocol.method = "GET";

      // Create the nextLink parameter.
      // This will appear as a required parameter to the "Next" operation.
      const httpProtocol = new Protocol();
      httpProtocol.in = ParameterLocation.Path;
      const nextLinkParameter = new Parameter(
        "nextLink",
        `The nextLink from the previous successful call to the ${operationName} method.`,
        new StringSchema("string", ""),
        {
          required: true,
          language: {
            default: {
              serializedName: "nextLink"
            }
          },
          extensions: {
            "x-ms-skip-url-encoding": true
          },
          protocol: {
            http: httpProtocol
          },
          implementation: ImplementationLocation.Method
        }
      );

      // Ensure all overloads support the nextLink parameter.
      for (const request of nextLinkMethod.requests ?? []) {
        const parameters = request.parameters ?? [];
        parameters.push(nextLinkParameter);
        request.parameters = parameters;
      }

      operationGroup.addOperation(nextLinkMethod);
    }
  }
}

function findOperation(
  codeModel: CodeModel,
  operationGroupName: string,
  operationName: string
): Operation | undefined {
  const operationGroup = codeModel.getOperationGroup(operationGroupName);
  return operationGroup?.operations.find(operation => {
    const languageMetadata = getLanguageMetadata(operation.language);
    return languageMetadata.name === operationName;
  });
}

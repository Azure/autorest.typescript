import {
  Operation,
  SchemaResponse,
  SchemaType,
  ObjectSchema
} from "@azure-tools/codemodel";
import { isEqual } from "lodash";
import { PaginationDetails } from "../models/operationDetails";
import { getLanguageMetadata, PaginationExtension } from "./languageHelpers";
import { getTypeForSchema, isSchemaResponse } from "./schemaHelpers";
import { TypeDetails } from "../models/modelDetails";

/**
 * Extract pagination details from the pagination extension for an operation.
 * @param operation
 */
export function extractPaginationDetails(
  operation: Operation
): PaginationDetails | undefined {
  const languageMetadata = getLanguageMetadata(operation.language);
  const paginationExtension = languageMetadata.paging;

  if (!paginationExtension || !paginationExtension.itemName) {
    return;
  }

  const nextLinkName =
    typeof paginationExtension.nextLinkName === "string"
      ? paginationExtension.nextLinkName
      : undefined;

  let nextLinkOperationName = "";
  if (paginationExtension.nextLinkOperation) {
    nextLinkOperationName = getLanguageMetadata(
      paginationExtension.nextLinkOperation.language
    ).name;
  }

  // When nextLinkOperation is not defined, but nextLinkName is, default to <operationName>Next as the operation name.
  // Otherwise, since nextLinkName is not defined, we all iterable results are returned in a single page.
  if (!nextLinkOperationName && nextLinkName) {
    nextLinkOperationName = `${languageMetadata.name}Next`;
  }

  const itemName = paginationExtension.itemName ?? "value";

  return {
    group: paginationExtension.group,
    member: paginationExtension.member,
    nextLinkName,
    itemName,
    itemTypes: getItemTypes(operation, itemName),
    nextLinkOperationName,
    isNextLinkMethod: Boolean(paginationExtension.isNextLinkMethod)
  };
}

function isPaginationExtension(ext: any): ext is PaginationExtension {
  if (!ext || typeof ext !== "object") {
    return false;
  }

  return "nextLinkName" in ext;
}

/**
 * Gets the types of the iterable field across all responses.
 */
function getItemTypes(operation: Operation, itemName: string): TypeDetails[] {
  const operationName = getLanguageMetadata(operation.language).name;
  const operationResponses = operation.responses ?? [];

  const itemTypes: TypeDetails[] = [];

  for (const response of operationResponses) {
    if (!isSchemaResponse(response)) {
      // If the response is not a SchemaResponse (e.g. an Error),
      // not enough information is known about its type.
      continue;
    }

    const status = response.protocol.http?.status;
    const typeDetails = getResponseItemType(
      response,
      operationName,
      status,
      itemName
    );

    const typeDetailsAlreadyFound = itemTypes.some(itemType => {
      return isEqual(itemType, typeDetails);
    });

    if (!typeDetailsAlreadyFound) {
      itemTypes.push({ ...typeDetails });
    }
  }

  return itemTypes;
}

/**
 * Gets the type of the iterable field.
 */
function getResponseItemType(
  response: SchemaResponse,
  operationName: string,
  status: string,
  itemName: string
): TypeDetails {
  const responseSchema = response.schema;
  if (!isObjectSchema(responseSchema)) {
    throw new Error(
      `Response for "${operationName}" and status ${status} has "x-ms-pageable" but is not of type "object".`
    );
  }

  // Find the 1st property containing the results to paginate over.
  const itemProperty = responseSchema.properties?.find(property => {
    const propertyName = property.serializedName;
    return propertyName === itemName;
  });

  if (!itemProperty) {
    throw new Error(
      `Possible malformed Swagger. Response for status "${status}" in Operation "${operationName}" doesn't have a(n) "${itemName}" property.`
    );
  }

  if (itemProperty.schema.type !== SchemaType.Array) {
    throw new Error(
      `Possible malformed Swagger. Response for status "${status}" in Operation "${operationName}", expected property "${itemName}" to be of type array.`
    );
  }

  return getTypeForSchema(itemProperty.schema);
}

function isObjectSchema(schema: any): schema is ObjectSchema {
  return schema && schema.type === SchemaType.Object;
}

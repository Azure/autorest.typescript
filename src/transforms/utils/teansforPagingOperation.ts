import {
  Operation,
  SchemaResponse,
  SchemaType,
  ObjectSchema
} from "@azure-tools/codemodel";
import { isEqual } from "lodash";
import { PagingDetails } from "../../models/operationDetails";
import { getLanguageMetadata } from "../../utils/languageHelpers";
import { isSchemaResponse, getTypeForSchema } from "../../utils/schemaHelpers";
import { TypeDetails } from "../../models/modelDetails";

interface PagingExtension {
  group: string;
  member: string;
  itemName?: string;
  nextLinkName: string;
  nextLinkOperation?: Operation;
}

/**
 * This transform is responsible for adding metadata to Operation Detail about the paging options.
 * The metadata this function adds is:
 *      - nextLink: specifies the full url to call for getting the next page
 *      - itemName(optional): specifies the name of the property containing the page results
 *      - operationName(optional): references an existing operation to call for getting the next result. By default the next operation is the original one
 */
export function transformPagingOperation(
  operation: Operation
): PagingDetails | undefined {
  const pagingExtension = getLanguageMetadata(operation.language)
    .paging as PagingExtension;

  if (!pagingExtension) {
    return undefined;
  }

  const { nextLinkOperation, ...pagingDetails } = pagingExtension;
  const nextLinkOperationName =
    nextLinkOperation && getLanguageMetadata(operation.language).name;

  const valuesName = pagingDetails.itemName || "value";
  const valueTypes = [...getValueType(operation, valuesName)];

  return {
    ...pagingDetails,
    ...(nextLinkOperation && { nextLinkOperationName }),
    valueTypes
  };
}

function getValueType(operation: Operation, valuesName: string) {
  const operationName = getLanguageMetadata(operation.language).name;
  return (operation.responses || []).reduce((acc, response) => {
    const status = response.protocol.http?.status;
    if (!isSchemaResponse(response)) {
      // When the response is not a SchemaResponse, we don't have enough information about its type
      // Most of the times this is the case for error responses
      return acc;
    }

    const typeDetails = getResponseValueType(
      <SchemaResponse>response,
      operationName,
      status,
      valuesName
    );

    if (acc.some(type => isEqual(typeDetails, type))) {
      return acc;
    }

    return [...acc, typeDetails];
  }, [] as TypeDetails[]);
}

function getResponseValueType(
  response: SchemaResponse,
  operationName: string,
  status: string,
  valuesName: string
) {
  const responseSchema = response.schema;
  if (responseSchema.type !== SchemaType.Object) {
    throw new Error(
      `Responses of operations using x-ms-pageable should be of type object containing a "nextLink" and "value" property. Response with status ${status} in ${operationName} doesn't `
    );
  }

  const objectSchema = <ObjectSchema>responseSchema;

  // Find the property containing the page results
  const valueProperty = objectSchema.properties?.find(property => {
    const propertyName = getLanguageMetadata(property.language).name;
    return propertyName === valuesName;
  });

  if (!valueProperty) {
    throw new Error(
      `Possible malformed Swagger. Response for status "${status}" in Operation "${operationName}" doesn't have a "${valuesName}" property`
    );
  }

  if (valueProperty.schema.type !== SchemaType.Array) {
    throw new Error(
      `Possible malformed Swagger. Response for status "${status}" in Operation "${operationName}", expected property "${valuesName}" to be of type array `
    );
  }

  return getTypeForSchema(valueProperty.schema);
}

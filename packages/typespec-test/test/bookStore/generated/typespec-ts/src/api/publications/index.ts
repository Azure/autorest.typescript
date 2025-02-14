// Licensed under the MIT License.

import {
  BookStoreContext as Client,
  PublicationsCreateOptionalParams,
  PublicationsGetOptionalParams,
  PublicationsListOptionalParams,
} from "../index.js";
import {
  publicationArrayDeserializer,
  Publication,
  publicationSerializer,
  publicationDeserializer,
  errorDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _createSend(
  context: Client,
  publication: Publication,
  options: PublicationsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/publications")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: publicationSerializer(publication),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<Publication> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return publicationDeserializer(result.body);
}

/** Create a new publication */
export async function create(
  context: Client,
  publication: Publication,
  options: PublicationsCreateOptionalParams = { requestOptions: {} },
): Promise<Publication> {
  const result = await _createSend(context, publication, options);
  return _createDeserialize(result);
}

export function _getSend(
  context: Client,
  id: string,
  options: PublicationsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/publications/{id}", id)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<Publication> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return publicationDeserializer(result.body);
}

/** Get a specific publication by ID */
export async function get(
  context: Client,
  id: string,
  options: PublicationsGetOptionalParams = { requestOptions: {} },
): Promise<Publication> {
  const result = await _getSend(context, id, options);
  return _getDeserialize(result);
}

export function _listSend(
  context: Client,
  options: PublicationsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/publications")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<Publication[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return publicationArrayDeserializer(result.body);
}

/** List all publications */
export async function list(
  context: Client,
  options: PublicationsListOptionalParams = { requestOptions: {} },
): Promise<Publication[]> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

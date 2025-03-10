// Licensed under the MIT License.

import { OpenAIContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  OpenAIFile,
  openAIFileDeserializer,
  ListFilesResponse,
  listFilesResponseDeserializer,
  CreateFileRequest,
  createFileRequestSerializer,
  DeleteFileResponse,
  deleteFileResponseDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";
import {
  FilesDownloadOptionalParams,
  FilesDeleteOptionalParams,
  FilesRetrieveOptionalParams,
  FilesCreateOptionalParams,
  FilesListOptionalParams,
} from "./options.js";

export function _downloadSend(
  context: Client,
  fileId: string,
  options: FilesDownloadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/files/files/{file_id}/content",
    {
      file_id: fileId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _downloadDeserialize(
  result: PathUncheckedResponse,
): Promise<string> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return result.body;
}

export async function download(
  context: Client,
  fileId: string,
  options: FilesDownloadOptionalParams = { requestOptions: {} },
): Promise<string> {
  const result = await _downloadSend(context, fileId, options);
  return _downloadDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  fileId: string,
  options: FilesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/files/files/{file_id}",
    {
      file_id: fileId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<DeleteFileResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return deleteFileResponseDeserializer(result.body);
}

/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  fileId: string,
  options: FilesDeleteOptionalParams = { requestOptions: {} },
): Promise<DeleteFileResponse> {
  const result = await _$deleteSend(context, fileId, options);
  return _$deleteDeserialize(result);
}

export function _retrieveSend(
  context: Client,
  fileId: string,
  options: FilesRetrieveOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/files/files/{file_id}",
    {
      file_id: fileId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _retrieveDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return openAIFileDeserializer(result.body);
}

export async function retrieve(
  context: Client,
  fileId: string,
  options: FilesRetrieveOptionalParams = { requestOptions: {} },
): Promise<OpenAIFile> {
  const result = await _retrieveSend(context, fileId, options);
  return _retrieveDeserialize(result);
}

export function _createSend(
  context: Client,
  file: CreateFileRequest,
  options: FilesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/files")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: createFileRequestSerializer(file),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return openAIFileDeserializer(result.body);
}

export async function create(
  context: Client,
  file: CreateFileRequest,
  options: FilesCreateOptionalParams = { requestOptions: {} },
): Promise<OpenAIFile> {
  const result = await _createSend(context, file, options);
  return _createDeserialize(result);
}

export function _listSend(
  context: Client,
  options: FilesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/files")
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
): Promise<ListFilesResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return listFilesResponseDeserializer(result.body);
}

export async function list(
  context: Client,
  options: FilesListOptionalParams = { requestOptions: {} },
): Promise<ListFilesResponse> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

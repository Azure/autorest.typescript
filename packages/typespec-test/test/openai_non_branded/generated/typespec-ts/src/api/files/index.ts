// Licensed under the MIT License.

import {
  OpenAIContext as Client,
  FilesCreateOptionalParams,
  FilesDeleteOptionalParams,
  FilesDownloadOptionalParams,
  FilesListOptionalParams,
  FilesRetrieveOptionalParams,
} from "../index.js";
import {
  OpenAIFile,
  openAIFileDeserializer,
  ListFilesResponse,
  listFilesResponseDeserializer,
  CreateFileRequest,
  createFileRequestSerializer,
  DeleteFileResponse,
  deleteFileResponseDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _listSend(
  context: Client,
  options: FilesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/files")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<ListFilesResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
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

export function _createSend(
  context: Client,
  file: CreateFileRequest,
  options: FilesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/files")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: createFileRequestSerializer(file),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
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

export function _retrieveSend(
  context: Client,
  fileId: string,
  options: FilesRetrieveOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/files/files/{file_id}", fileId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
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

export function _$deleteSend(
  context: Client,
  fileId: string,
  options: FilesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/files/files/{file_id}", fileId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<DeleteFileResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
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

export function _downloadSend(
  context: Client,
  fileId: string,
  options: FilesDownloadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/files/files/{file_id}/content", fileId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _downloadDeserialize(
  result: PathUncheckedResponse,
): Promise<string> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
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

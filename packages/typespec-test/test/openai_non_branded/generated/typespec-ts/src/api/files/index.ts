// Licensed under the MIT license.

import {
  ListFilesResponse,
  OpenAIFile,
  CreateFileRequest,
  DeleteFileResponse,
} from "../../models/models.js";
import {
  FilesCreate200Response,
  FilesCreateDefaultResponse,
  FilesDeleteOperation200Response,
  FilesDeleteOperationDefaultResponse,
  FilesDownload200Response,
  FilesDownloadDefaultResponse,
  FilesList200Response,
  FilesListDefaultResponse,
  FilesRetrieve200Response,
  FilesRetrieveDefaultResponse,
  isUnexpected,
  OpenAIContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@typespec/ts-http-runtime";
import { reshape } from "@azure/core-util";
import {
  FilesListOptions,
  FilesCreateOptions,
  FilesRetrieveOptions,
  FilesDeleteOperationOptions,
  FilesDownloadOptions,
} from "../../models/options.js";

export function _listSend(
  context: Client,
  options: FilesListOptions = { requestOptions: {} }
): StreamableMethod<FilesList200Response | FilesListDefaultResponse> {
  return context
    .path("/files")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result: FilesList200Response | FilesListDefaultResponse
): Promise<ListFilesResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].createdAt",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].status_details",
    "statusDetails"
  );
  return deserializedResponse as ListFilesResponse;
}

export async function list(
  context: Client,
  options: FilesListOptions = { requestOptions: {} }
): Promise<ListFilesResponse> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _createSend(
  context: Client,
  file: CreateFileRequest,
  options: FilesCreateOptions = { requestOptions: {} }
): StreamableMethod<FilesCreate200Response | FilesCreateDefaultResponse> {
  return context
    .path("/files")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: { file: file["file"], purpose: file["purpose"] },
    });
}

export async function _createDeserialize(
  result: FilesCreate200Response | FilesCreateDefaultResponse
): Promise<OpenAIFile> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  deserializedResponse = reshape(
    deserializedResponse,
    "createdAt",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "status_details",
    "statusDetails"
  );
  return deserializedResponse as OpenAIFile;
}

export async function create(
  context: Client,
  file: CreateFileRequest,
  options: FilesCreateOptions = { requestOptions: {} }
): Promise<OpenAIFile> {
  const result = await _createSend(context, file, options);
  return _createDeserialize(result);
}

export function _retrieveSend(
  context: Client,
  fileId: string,
  options: FilesRetrieveOptions = { requestOptions: {} }
): StreamableMethod<FilesRetrieve200Response | FilesRetrieveDefaultResponse> {
  return context
    .path("/files/files/{file_id}", fileId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveDeserialize(
  result: FilesRetrieve200Response | FilesRetrieveDefaultResponse
): Promise<OpenAIFile> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  deserializedResponse = reshape(
    deserializedResponse,
    "createdAt",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "status_details",
    "statusDetails"
  );
  return deserializedResponse as OpenAIFile;
}

export async function retrieve(
  context: Client,
  fileId: string,
  options: FilesRetrieveOptions = { requestOptions: {} }
): Promise<OpenAIFile> {
  const result = await _retrieveSend(context, fileId, options);
  return _retrieveDeserialize(result);
}

export function _deleteOperationSend(
  context: Client,
  fileId: string,
  options: FilesDeleteOperationOptions = { requestOptions: {} }
): StreamableMethod<
  FilesDeleteOperation200Response | FilesDeleteOperationDefaultResponse
> {
  return context
    .path("/files/files/{file_id}", fileId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteOperationDeserialize(
  result: FilesDeleteOperation200Response | FilesDeleteOperationDefaultResponse
): Promise<DeleteFileResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  return deserializedResponse as DeleteFileResponse;
}

export async function deleteOperation(
  context: Client,
  fileId: string,
  options: FilesDeleteOperationOptions = { requestOptions: {} }
): Promise<DeleteFileResponse> {
  const result = await _deleteOperationSend(context, fileId, options);
  return _deleteOperationDeserialize(result);
}

export function _downloadSend(
  context: Client,
  fileId: string,
  options: FilesDownloadOptions = { requestOptions: {} }
): StreamableMethod<FilesDownload200Response | FilesDownloadDefaultResponse> {
  return context
    .path("/files/files/{file_id}/content", fileId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _downloadDeserialize(
  result: FilesDownload200Response | FilesDownloadDefaultResponse
): Promise<string> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function download(
  context: Client,
  fileId: string,
  options: FilesDownloadOptions = { requestOptions: {} }
): Promise<string> {
  const result = await _downloadSend(context, fileId, options);
  return _downloadDeserialize(result);
}

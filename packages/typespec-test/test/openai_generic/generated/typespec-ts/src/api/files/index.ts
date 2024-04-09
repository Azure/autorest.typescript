// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OpenAIFile,
  ListFilesResponse,
  CreateFileRequest,
  DeleteFileResponse,
} from "../../models/models.js";
import {
  FilesCreate200Response,
  FilesCreateDefaultResponse,
  FilesDelete200Response,
  FilesDeleteDefaultResponse,
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
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";
import {
  FilesListOptionalParams,
  FilesCreateOptionalParams,
  FilesRetrieveOptionalParams,
  FilesDeleteOptionalParams,
  FilesDownloadOptionalParams,
} from "../../models/options.js";

export function _listSend(
  context: Client,
  options: FilesListOptionalParams = { requestOptions: {} },
): StreamableMethod<FilesList200Response | FilesListDefaultResponse> {
  return context
    .path("/files")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result: FilesList200Response | FilesListDefaultResponse,
): Promise<ListFilesResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    object: result.body["object"],
    data: result.body["data"].map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"],
      statusDetails: p["status_details"],
    })),
  };
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
): StreamableMethod<FilesCreate200Response | FilesCreateDefaultResponse> {
  return context
    .path("/files")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        file: uint8ArrayToString(file["file"], "base64"),
        purpose: file["purpose"],
      },
    });
}

export async function _createDeserialize(
  result: FilesCreate200Response | FilesCreateDefaultResponse,
): Promise<OpenAIFile> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    bytes: result.body["bytes"],
    createdAt: new Date(result.body["createdAt"]),
    filename: result.body["filename"],
    purpose: result.body["purpose"],
    status: result.body["status"],
    statusDetails: result.body["status_details"],
  };
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
): StreamableMethod<FilesRetrieve200Response | FilesRetrieveDefaultResponse> {
  return context
    .path("/files/files/{file_id}", fileId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveDeserialize(
  result: FilesRetrieve200Response | FilesRetrieveDefaultResponse,
): Promise<OpenAIFile> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    bytes: result.body["bytes"],
    createdAt: new Date(result.body["createdAt"]),
    filename: result.body["filename"],
    purpose: result.body["purpose"],
    status: result.body["status"],
    statusDetails: result.body["status_details"],
  };
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
): StreamableMethod<FilesDelete200Response | FilesDeleteDefaultResponse> {
  return context
    .path("/files/files/{file_id}", fileId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result: FilesDelete200Response | FilesDeleteDefaultResponse,
): Promise<DeleteFileResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    deleted: result.body["deleted"],
  };
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
): StreamableMethod<FilesDownload200Response | FilesDownloadDefaultResponse> {
  return context
    .path("/files/files/{file_id}/content", fileId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _downloadDeserialize(
  result: FilesDownload200Response | FilesDownloadDefaultResponse,
): Promise<string> {
  if (isUnexpected(result)) {
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

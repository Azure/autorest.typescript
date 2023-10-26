// Copyright (c) Microsoft Corporation.
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
} from "@azure-rest/core-client";
import {
  FilesListOptions,
  FilesCreateOptions,
  FilesRetrieveOptions,
  FilesDeleteOptions,
  FilesDownloadOptions,
} from "../../models/options.js";

export function _filesListSend(
  context: Client,
  options: FilesListOptions = { requestOptions: {} }
): StreamableMethod<FilesList200Response | FilesListDefaultResponse> {
  return context
    .path("/files")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _filesListDeserialize(
  result: FilesList200Response | FilesListDefaultResponse
): Promise<ListFilesResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    data: (result.body["data"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"] as any,
      statusDetails: p["status_details"],
    })),
  };
}

export async function filesList(
  context: Client,
  options: FilesListOptions = { requestOptions: {} }
): Promise<ListFilesResponse> {
  const result = await _filesListSend(context, options);
  return _filesListDeserialize(result);
}

export function _filesCreateSend(
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

export async function _filesCreateDeserialize(
  result: FilesCreate200Response | FilesCreateDefaultResponse
): Promise<OpenAIFile> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    bytes: result.body["bytes"],
    createdAt: new Date(result.body["createdAt"]),
    filename: result.body["filename"],
    purpose: result.body["purpose"],
    status: result.body["status"] as any,
    statusDetails: result.body["status_details"],
  };
}

export async function filesCreate(
  context: Client,
  file: CreateFileRequest,
  options: FilesCreateOptions = { requestOptions: {} }
): Promise<OpenAIFile> {
  const result = await _filesCreateSend(context, file, options);
  return _filesCreateDeserialize(result);
}

export function _filesRetrieveSend(
  context: Client,
  fileId: string,
  options: FilesRetrieveOptions = { requestOptions: {} }
): StreamableMethod<FilesRetrieve200Response | FilesRetrieveDefaultResponse> {
  return context
    .path("/files/files/{file_id}", fileId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _filesRetrieveDeserialize(
  result: FilesRetrieve200Response | FilesRetrieveDefaultResponse
): Promise<OpenAIFile> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    bytes: result.body["bytes"],
    createdAt: new Date(result.body["createdAt"]),
    filename: result.body["filename"],
    purpose: result.body["purpose"],
    status: result.body["status"] as any,
    statusDetails: result.body["status_details"],
  };
}

export async function filesRetrieve(
  context: Client,
  fileId: string,
  options: FilesRetrieveOptions = { requestOptions: {} }
): Promise<OpenAIFile> {
  const result = await _filesRetrieveSend(context, fileId, options);
  return _filesRetrieveDeserialize(result);
}

export function _filesDeleteSend(
  context: Client,
  fileId: string,
  options: FilesDeleteOptions = { requestOptions: {} }
): StreamableMethod<
  FilesDeleteOperation200Response | FilesDeleteOperationDefaultResponse
> {
  return context
    .path("/files/files/{file_id}", fileId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _filesDeleteDeserialize(
  result: FilesDeleteOperation200Response | FilesDeleteOperationDefaultResponse
): Promise<DeleteFileResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    deleted: result.body["deleted"],
  };
}

export async function filesDelete(
  context: Client,
  fileId: string,
  options: FilesDeleteOptions = { requestOptions: {} }
): Promise<DeleteFileResponse> {
  const result = await _filesDeleteSend(context, fileId, options);
  return _filesDeleteDeserialize(result);
}

export function _filesDownloadSend(
  context: Client,
  fileId: string,
  options: FilesDownloadOptions = { requestOptions: {} }
): StreamableMethod<FilesDownload200Response | FilesDownloadDefaultResponse> {
  return context
    .path("/files/files/{file_id}/content", fileId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _filesDownloadDeserialize(
  result: FilesDownload200Response | FilesDownloadDefaultResponse
): Promise<string> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return result.body;
}

export async function filesDownload(
  context: Client,
  fileId: string,
  options: FilesDownloadOptions = { requestOptions: {} }
): Promise<string> {
  const result = await _filesDownloadSend(context, fileId, options);
  return _filesDownloadDeserialize(result);
}

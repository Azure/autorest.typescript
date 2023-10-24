// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ListFilesResponse,
  OpenAIFile,
  CreateFileRequest,
  DeleteFileResponse,
} from "../../models/models.js";
import {
  CreateFile200Response,
  CreateFileDefaultResponse,
  DeleteFile200Response,
  DeleteFileDefaultResponse,
  DownloadFile200Response,
  DownloadFileDefaultResponse,
  isUnexpected,
  ListFiles200Response,
  ListFilesDefaultResponse,
  OpenAIContext as Client,
  RetrieveFile200Response,
  RetrieveFileDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  ListFilesOptions,
  CreateFileOptions,
  RetrieveFileOptions,
  DeleteFileOptions,
  DownloadFileOptions,
} from "../../models/options.js";

export function _listFilesSend(
  context: Client,
  options: ListFilesOptions = { requestOptions: {} }
): StreamableMethod<ListFiles200Response | ListFilesDefaultResponse> {
  return context
    .path("/files")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listFilesDeserialize(
  result: ListFiles200Response | ListFilesDefaultResponse
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

export async function listFiles(
  context: Client,
  options: ListFilesOptions = { requestOptions: {} }
): Promise<ListFilesResponse> {
  const result = await _listFilesSend(context, options);
  return _listFilesDeserialize(result);
}

export function _createFileSend(
  context: Client,
  file: CreateFileRequest,
  options: CreateFileOptions = { requestOptions: {} }
): StreamableMethod<CreateFile200Response | CreateFileDefaultResponse> {
  return context
    .path("/files")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: { file: file["file"], purpose: file["purpose"] },
    });
}

export async function _createFileDeserialize(
  result: CreateFile200Response | CreateFileDefaultResponse
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

export async function createFile(
  context: Client,
  file: CreateFileRequest,
  options: CreateFileOptions = { requestOptions: {} }
): Promise<OpenAIFile> {
  const result = await _createFileSend(context, file, options);
  return _createFileDeserialize(result);
}

export function _retrieveFileSend(
  context: Client,
  fileId: string,
  options: RetrieveFileOptions = { requestOptions: {} }
): StreamableMethod<RetrieveFile200Response | RetrieveFileDefaultResponse> {
  return context
    .path("/files/files/{file_id}", fileId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveFileDeserialize(
  result: RetrieveFile200Response | RetrieveFileDefaultResponse
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

export async function retrieveFile(
  context: Client,
  fileId: string,
  options: RetrieveFileOptions = { requestOptions: {} }
): Promise<OpenAIFile> {
  const result = await _retrieveFileSend(context, fileId, options);
  return _retrieveFileDeserialize(result);
}

export function _deleteFileSend(
  context: Client,
  fileId: string,
  options: DeleteFileOptions = { requestOptions: {} }
): StreamableMethod<DeleteFile200Response | DeleteFileDefaultResponse> {
  return context
    .path("/files/files/{file_id}", fileId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteFileDeserialize(
  result: DeleteFile200Response | DeleteFileDefaultResponse
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

export async function deleteFile(
  context: Client,
  fileId: string,
  options: DeleteFileOptions = { requestOptions: {} }
): Promise<DeleteFileResponse> {
  const result = await _deleteFileSend(context, fileId, options);
  return _deleteFileDeserialize(result);
}

export function _downloadFileSend(
  context: Client,
  fileId: string,
  options: DownloadFileOptions = { requestOptions: {} }
): StreamableMethod<DownloadFile200Response | DownloadFileDefaultResponse> {
  return context
    .path("/files/files/{file_id}/content", fileId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _downloadFileDeserialize(
  result: DownloadFile200Response | DownloadFileDefaultResponse
): Promise<string> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return result.body;
}

export async function downloadFile(
  context: Client,
  fileId: string,
  options: DownloadFileOptions = { requestOptions: {} }
): Promise<string> {
  const result = await _downloadFileSend(context, fileId, options);
  return _downloadFileDeserialize(result);
}

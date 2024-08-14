// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OpenAIFile,
  ListFilesResponse,
  CreateFileRequest,
  DeleteFileResponse,
} from "../../models/models.js";
import { OpenAIContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";
import {
  FilesListOptionalParams,
  FilesCreateOptionalParams,
  FilesRetrieveOptionalParams,
  FilesDeleteOptionalParams,
  FilesDownloadOptionalParams,
} from "../options.js";

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

  return {
    object: result.body["object"],
    data: result.body["data"].map((p: any) => {
      return {
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        statusDetails: p["status_details"],
      };
    }),
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
): StreamableMethod {
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
  result: PathUncheckedResponse,
): Promise<OpenAIFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
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

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CreateFileRequest, OpenAIFile } from "../models/models.js";
import {
  CreateFile200Response,
  DemoServiceContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { CreateFileOptions } from "../models/options.js";

export function _createFileSend(
  context: Client,
  file: CreateFileRequest,
  options: CreateFileOptions = { requestOptions: {} }
): StreamableMethod<CreateFile200Response> {
  return context
    .path("/files")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: { file: file["file"], purpose: file["purpose"] },
    });
}

export async function _createFileDeserialize(
  result: CreateFile200Response
): Promise<OpenAIFile> {
  if (result.status !== "200") {
    throw result.body;
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

export async function createFile(
  context: Client,
  file: CreateFileRequest,
  options: CreateFileOptions = { requestOptions: {} }
): Promise<OpenAIFile> {
  const result = await _createFileSend(context, file, options);
  return _createFileDeserialize(result);
}

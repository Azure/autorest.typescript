// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  MultiPartContext as Client,
  FormDataHttpPartsContentTypeImageJpegContentTypeOptionalParams,
  FormDataHttpPartsContentTypeOptionalContentTypeOptionalParams,
  FormDataHttpPartsContentTypeRequiredContentTypeOptionalParams,
} from "../../../index.js";
import {
  FileWithHttpPartSpecificContentTypeRequest,
  fileWithHttpPartSpecificContentTypeRequestSerializer,
  FileWithHttpPartRequiredContentTypeRequest,
  fileWithHttpPartRequiredContentTypeRequestSerializer,
  FileWithHttpPartOptionalContentTypeRequest,
  fileWithHttpPartOptionalContentTypeRequestSerializer,
} from "../../../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _optionalContentTypeSend(
  context: Client,
  body: FileWithHttpPartOptionalContentTypeRequest,
  options: FormDataHttpPartsContentTypeOptionalContentTypeOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/multipart/form-data/file-with-http-part-optional-content-type")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      body: fileWithHttpPartOptionalContentTypeRequestSerializer(body),
    });
}

export async function _optionalContentTypeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Test content-type: multipart/form-data for optional content type */
export async function optionalContentType(
  context: Client,
  body: FileWithHttpPartOptionalContentTypeRequest,
  options: FormDataHttpPartsContentTypeOptionalContentTypeOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _optionalContentTypeSend(context, body, options);
  return _optionalContentTypeDeserialize(result);
}

export function _requiredContentTypeSend(
  context: Client,
  body: FileWithHttpPartRequiredContentTypeRequest,
  options: FormDataHttpPartsContentTypeRequiredContentTypeOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/multipart/form-data/check-filename-and-required-content-type-with-httppart",
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      body: fileWithHttpPartRequiredContentTypeRequestSerializer(body),
    });
}

export async function _requiredContentTypeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Test content-type: multipart/form-data */
export async function requiredContentType(
  context: Client,
  body: FileWithHttpPartRequiredContentTypeRequest,
  options: FormDataHttpPartsContentTypeRequiredContentTypeOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _requiredContentTypeSend(context, body, options);
  return _requiredContentTypeDeserialize(result);
}

export function _imageJpegContentTypeSend(
  context: Client,
  body: FileWithHttpPartSpecificContentTypeRequest,
  options: FormDataHttpPartsContentTypeImageJpegContentTypeOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/multipart/form-data/check-filename-and-specific-content-type-with-httppart",
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      body: fileWithHttpPartSpecificContentTypeRequestSerializer(body),
    });
}

export async function _imageJpegContentTypeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Test content-type: multipart/form-data */
export async function imageJpegContentType(
  context: Client,
  body: FileWithHttpPartSpecificContentTypeRequest,
  options: FormDataHttpPartsContentTypeImageJpegContentTypeOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _imageJpegContentTypeSend(context, body, options);
  return _imageJpegContentTypeDeserialize(result);
}

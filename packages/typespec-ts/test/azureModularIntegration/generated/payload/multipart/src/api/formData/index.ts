// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  MultiPartContext as Client,
  FormDataAnonymousModelOptionalParams,
  FormDataBasicOptionalParams,
  FormDataBinaryArrayPartsOptionalParams,
  FormDataCheckFileNameAndContentTypeOptionalParams,
  FormDataFileArrayAndBasicOptionalParams,
  FormDataJsonPartOptionalParams,
  FormDataMultiBinaryPartsOptionalParams,
} from "../index.js";
import {
  MultiPartRequest,
  multiPartRequestSerializer,
  ComplexPartsRequest,
  complexPartsRequestSerializer,
  JsonPartRequest,
  jsonPartRequestSerializer,
  BinaryArrayPartsRequest,
  binaryArrayPartsRequestSerializer,
  MultiBinaryPartsRequest,
  multiBinaryPartsRequestSerializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";

export function _anonymousModelSend(
  context: Client,
  profileImage: Uint8Array,
  options: FormDataAnonymousModelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/multipart/form-data/anonymous-model")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      body: { profileImage: uint8ArrayToString(profileImage, "base64") },
    });
}

export async function _anonymousModelDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Test content-type: multipart/form-data */
export async function anonymousModel(
  context: Client,
  profileImage: Uint8Array,
  options: FormDataAnonymousModelOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _anonymousModelSend(context, profileImage, options);
  return _anonymousModelDeserialize(result);
}

export function _checkFileNameAndContentTypeSend(
  context: Client,
  body: MultiPartRequest,
  options: FormDataCheckFileNameAndContentTypeOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/multipart/form-data/check-filename-and-content-type")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      body: multiPartRequestSerializer(body),
    });
}

export async function _checkFileNameAndContentTypeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Test content-type: multipart/form-data */
export async function checkFileNameAndContentType(
  context: Client,
  body: MultiPartRequest,
  options: FormDataCheckFileNameAndContentTypeOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _checkFileNameAndContentTypeSend(context, body, options);
  return _checkFileNameAndContentTypeDeserialize(result);
}

export function _multiBinaryPartsSend(
  context: Client,
  body: MultiBinaryPartsRequest,
  options: FormDataMultiBinaryPartsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/multipart/form-data/multi-binary-parts")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      body: multiBinaryPartsRequestSerializer(body),
    });
}

export async function _multiBinaryPartsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Test content-type: multipart/form-data for scenario contains multi binary parts */
export async function multiBinaryParts(
  context: Client,
  body: MultiBinaryPartsRequest,
  options: FormDataMultiBinaryPartsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _multiBinaryPartsSend(context, body, options);
  return _multiBinaryPartsDeserialize(result);
}

export function _binaryArrayPartsSend(
  context: Client,
  body: BinaryArrayPartsRequest,
  options: FormDataBinaryArrayPartsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/multipart/form-data/binary-array-parts")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      body: binaryArrayPartsRequestSerializer(body),
    });
}

export async function _binaryArrayPartsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Test content-type: multipart/form-data for scenario contains multi binary parts */
export async function binaryArrayParts(
  context: Client,
  body: BinaryArrayPartsRequest,
  options: FormDataBinaryArrayPartsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _binaryArrayPartsSend(context, body, options);
  return _binaryArrayPartsDeserialize(result);
}

export function _jsonPartSend(
  context: Client,
  body: JsonPartRequest,
  options: FormDataJsonPartOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/multipart/form-data/json-part")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      body: jsonPartRequestSerializer(body),
    });
}

export async function _jsonPartDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Test content-type: multipart/form-data for scenario contains json part and binary part */
export async function jsonPart(
  context: Client,
  body: JsonPartRequest,
  options: FormDataJsonPartOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _jsonPartSend(context, body, options);
  return _jsonPartDeserialize(result);
}

export function _fileArrayAndBasicSend(
  context: Client,
  body: ComplexPartsRequest,
  options: FormDataFileArrayAndBasicOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/multipart/form-data/complex-parts")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      body: complexPartsRequestSerializer(body),
    });
}

export async function _fileArrayAndBasicDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Test content-type: multipart/form-data for mixed scenarios */
export async function fileArrayAndBasic(
  context: Client,
  body: ComplexPartsRequest,
  options: FormDataFileArrayAndBasicOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _fileArrayAndBasicSend(context, body, options);
  return _fileArrayAndBasicDeserialize(result);
}

export function _basicSend(
  context: Client,
  body: MultiPartRequest,
  options: FormDataBasicOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/multipart/form-data/mixed-parts")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      body: multiPartRequestSerializer(body),
    });
}

export async function _basicDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Test content-type: multipart/form-data */
export async function basic(
  context: Client,
  body: MultiPartRequest,
  options: FormDataBasicOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _basicSend(context, body, options);
  return _basicDeserialize(result);
}

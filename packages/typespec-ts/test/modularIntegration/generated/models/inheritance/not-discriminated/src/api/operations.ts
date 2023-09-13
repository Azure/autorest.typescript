// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Siamese } from "../models/models.js";
import {
  GetValid200Response,
  NotDiscriminatedContext as Client,
  PostValid204Response,
  PutValid200Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  PostValidOptions,
  GetValidOptions,
  PutValidOptions,
} from "../models/options.js";

export function _postValidSend(
  context: Client,
  name: string,
  age: number,
  smart: boolean,
  options: PostValidOptions = { requestOptions: {} }
): StreamableMethod<PostValid204Response> {
  return context
    .path("/type/model/inheritance/not-discriminated/valid")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: name, age: age, smart: smart },
    });
}

export async function _postValidDeserialize(
  result: PostValid204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function postValid(
  context: Client,
  name: string,
  age: number,
  smart: boolean,
  options: PostValidOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _postValidSend(context, name, age, smart, options);
  return _postValidDeserialize(result);
}

export function _getValidSend(
  context: Client,
  options: GetValidOptions = { requestOptions: {} }
): StreamableMethod<GetValid200Response> {
  return context
    .path("/type/model/inheritance/not-discriminated/valid")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getValidDeserialize(
  result: GetValid200Response
): Promise<Siamese> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    name: result.body["name"],
    age: result.body["age"],
    smart: result.body["smart"],
  };
}

export async function getValid(
  context: Client,
  options: GetValidOptions = { requestOptions: {} }
): Promise<Siamese> {
  const result = await _getValidSend(context, options);
  return _getValidDeserialize(result);
}

export function _putValidSend(
  context: Client,
  name: string,
  age: number,
  smart: boolean,
  options: PutValidOptions = { requestOptions: {} }
): StreamableMethod<PutValid200Response> {
  return context
    .path("/type/model/inheritance/not-discriminated/valid")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { name: name, age: age, smart: smart },
    });
}

export async function _putValidDeserialize(
  result: PutValid200Response
): Promise<Siamese> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    name: result.body["name"],
    age: result.body["age"],
    smart: result.body["smart"],
  };
}

export async function putValid(
  context: Client,
  name: string,
  age: number,
  smart: boolean,
  options: PutValidOptions = { requestOptions: {} }
): Promise<Siamese> {
  const result = await _putValidSend(context, name, age, smart, options);
  return _putValidDeserialize(result);
}

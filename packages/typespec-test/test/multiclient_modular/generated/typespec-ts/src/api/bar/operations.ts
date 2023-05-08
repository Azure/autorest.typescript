// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestOptions } from "../../common/interfaces.js";
import { BarContext as Client, isUnexpected } from "../../rest/bar/index.js";
import { Resource } from "./models.js";

export interface GetBinaryOptions extends RequestOptions {
  /** Accept header. */
  accept?: "application/json";
}

/** */
export async function getBinary(
  context: Client,
  options: GetBinaryOptions = { requestOptions: {} }
): Promise<void> {
  const result = await context
    .path("/cadl-bar/get-binary")
    .get({
      headers: {
        Accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

export interface GetArrayOptions extends RequestOptions {
  /** Accept header. */
  accept?: "application/json";
}

/** */
export async function getArray(
  context: Client,
  options: GetArrayOptions = { requestOptions: {} }
): Promise<void> {
  const result = await context
    .path("/cadl-bar")
    .get({
      headers: {
        Accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

export interface CreateWithHeadersOptions extends RequestOptions {
  /** Accept header. */
  accept?: "application/json";
}

/** */
export async function createWithHeaders(
  context: Client,
  options: CreateWithHeadersOptions = { requestOptions: {} }
): Promise<Resource> {
  const result = await context
    .path("/cadl-bar/create-with-headers")
    .put({
      headers: {
        Accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    description: result.body["description"],
    type: result.body["type"],
  };
}

export interface DeleteWithHeadersOptions extends RequestOptions {}

/** */
export async function deleteWithHeaders(
  context: Client,
  options: DeleteWithHeadersOptions = { requestOptions: {} }
): Promise<void> {
  const result = await context.path("/cadl-bar/delete-with-headers").delete({});
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestOptions } from "../../common/interfaces.js";
import { isUnexpected, Client } from "../../rest/foo/index.js";
import { Resource, CustomPage } from "./models.js";

export interface CreateOrUpdateOptions extends RequestOptions {
  /** */
  description?: string;
  /** Accept header. */
  accept?: "application/json";
  /** Body parameter Content-Type. Known values are: application/json. */
  content_type?: string;
}

/** Creates a new resource or updates an existing one. */
export async function createOrUpdate(
  context: Client.FooContext,
  name: string,
  type: string,
  name: string,
  options: CreateOrUpdateOptions = { requestOptions: {} }
): Promise<Resource> {
  const result = await context.path("/cadl-foo/resources/{name}", name).put({
    contentType: (options.content_type as any) ?? "application/json",
    headers: { Accept: "application/json", ...options.requestOptions?.headers },

    body: {
      ...(options.description && { description: options.description }),
      type: type,
    },
  });


  return {
    id: result.body["id"],
    name: result.body["name"],
    description: result.body["description"],
    type: result.body["type"],
  };
}

export interface GetOptions extends RequestOptions {
  /** Accept header. */
  accept?: "application/json";
}

/** Gets the details of a resource. */
export async function getOperation(
  context: Client.FooContext,
  name: string,
  options: GetOptions = { requestOptions: {} }
): Promise<Resource> {
  const result = await context
    .path("/cadl-foo/resources/{name}", name)
    .get({
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

export interface DeleteOptions extends RequestOptions {}

/** Deletes a resource. */
export async function deleteOperation(
  context: Client.FooContext,
  name: string,
  options: DeleteOptions = { requestOptions: {} }
): Promise<void> {
  const result = await context
    .path("/cadl-foo/resources/{name}", name)
    .delete({});
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

export interface ListOptions extends RequestOptions {
  /** Accept header. */
  accept?: "application/json";
}

/** Lists the existing resources. */
export async function list(
  context: Client.FooContext,
  options: ListOptions = { requestOptions: {} }
): Promise<CustomPage> {
  const result = await context
    .path("/cadl-foo/resources")
    .get({
      headers: {
        Accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    value: (result.body["value"] ?? []).map((p) => ({
      id: p["id"],
      name: p["name"],
      description: p["description"],
      type: p["type"],
    })),
    nextLink: result.body["nextLink"],
  };
}

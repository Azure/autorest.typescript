// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { userOrderSerializer, User, _PagedUser } from "../models/models.js";
import { BasicContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../static-helpers/pagingHelpers.js";
import { buildMultiCollection } from "../static-helpers/serialization/build-multi-collection.js";
import {
  CreateOrUpdateOptionalParams,
  CreateOrReplaceOptionalParams,
  GetOptionalParams,
  ListOptionalParams,
  DeleteOptionalParams,
  ExportOptionalParams,
} from "../models/options.js";

export function _createOrUpdateSend(
  context: Client,
  id: number,
  resource: User,
  options: CreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/core/basic/users/{id}", id)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        name: resource["name"],
        orders:
          resource["orders"] === undefined
            ? resource["orders"]
            : resource["orders"].map(userOrderSerializer),
      },
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<User> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    orders:
      result.body["orders"] === undefined
        ? result.body["orders"]
        : result.body["orders"].map((p: any) => {
            return { id: p["id"], userId: p["userId"], detail: p["detail"] };
          }),
    etag: result.body["etag"],
  };
}

/** Creates or updates a User */
export async function createOrUpdate(
  context: Client,
  id: number,
  resource: User,
  options: CreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<User> {
  const result = await _createOrUpdateSend(context, id, resource, options);
  return _createOrUpdateDeserialize(result);
}

export function _createOrReplaceSend(
  context: Client,
  id: number,
  resource: User,
  options: CreateOrReplaceOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/core/basic/users/{id}", id)
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        name: resource["name"],
        orders:
          resource["orders"] === undefined
            ? resource["orders"]
            : resource["orders"].map(userOrderSerializer),
      },
    });
}

export async function _createOrReplaceDeserialize(
  result: PathUncheckedResponse,
): Promise<User> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    orders:
      result.body["orders"] === undefined
        ? result.body["orders"]
        : result.body["orders"].map((p: any) => {
            return { id: p["id"], userId: p["userId"], detail: p["detail"] };
          }),
    etag: result.body["etag"],
  };
}

/** Creates or replaces a User */
export async function createOrReplace(
  context: Client,
  id: number,
  resource: User,
  options: CreateOrReplaceOptionalParams = { requestOptions: {} },
): Promise<User> {
  const result = await _createOrReplaceSend(context, id, resource, options);
  return _createOrReplaceDeserialize(result);
}

export function _getSend(
  context: Client,
  id: number,
  options: GetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/core/basic/users/{id}", id)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<User> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    orders:
      result.body["orders"] === undefined
        ? result.body["orders"]
        : result.body["orders"].map((p: any) => {
            return { id: p["id"], userId: p["userId"], detail: p["detail"] };
          }),
    etag: result.body["etag"],
  };
}

/** Gets a User */
export async function get(
  context: Client,
  id: number,
  options: GetOptionalParams = { requestOptions: {} },
): Promise<User> {
  const result = await _getSend(context, id, options);
  return _getDeserialize(result);
}

export function _listSend(
  context: Client,
  options: ListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/core/basic/users")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        top: options?.top,
        skip: options?.skip,
        maxpagesize: options?.maxpagesize,
        orderby:
          options?.orderby !== undefined
            ? buildMultiCollection(options?.orderby, "orderby")
            : undefined,
        filter: options?.filter,
        select:
          options?.select !== undefined
            ? buildMultiCollection(options?.select, "select")
            : undefined,
        expand:
          options?.expand !== undefined
            ? buildMultiCollection(options?.expand, "expand")
            : undefined,
      },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedUser> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        id: p["id"],
        name: p["name"],
        orders:
          p["orders"] === undefined
            ? p["orders"]
            : p["orders"].map((p: any) => {
                return {
                  id: p["id"],
                  userId: p["userId"],
                  detail: p["detail"],
                };
              }),
        etag: p["etag"],
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Lists all Users */
export function list(
  context: Client,
  options: ListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<User> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  id: number,
  options: DeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/core/basic/users/{id}", id)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes a User */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  id: number,
  options: DeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, id, options);
  return _$deleteDeserialize(result);
}

export function _$exportSend(
  context: Client,
  id: number,
  format: string,
  options: ExportOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/core/basic/users/{id}:export", id)
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { format: format },
    });
}

export async function _$exportDeserialize(
  result: PathUncheckedResponse,
): Promise<User> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    orders:
      result.body["orders"] === undefined
        ? result.body["orders"]
        : result.body["orders"].map((p: any) => {
            return { id: p["id"], userId: p["userId"], detail: p["detail"] };
          }),
    etag: result.body["etag"],
  };
}

/** Exports a User */
/**
 *  @fixme export is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $export(
  context: Client,
  id: number,
  format: string,
  options: ExportOptionalParams = { requestOptions: {} },
): Promise<User> {
  const result = await _$exportSend(context, id, format, options);
  return _$exportDeserialize(result);
}

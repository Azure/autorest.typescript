// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { User, UserListResults, PagedUser } from "../models/models.js";
import {
  isUnexpected,
  BasicContext as Client,
  buildMultiCollection,
  CreateOrReplace200Response,
  CreateOrReplace201Response,
  CreateOrReplaceDefaultResponse,
  CreateOrUpdate200Response,
  CreateOrUpdate201Response,
  CreateOrUpdateDefaultResponse,
  DeleteOperation204Response,
  DeleteOperationDefaultResponse,
  ExportOperation200Response,
  ExportOperationDefaultResponse,
  Get200Response,
  GetDefaultResponse,
  List200Response,
  ListDefaultResponse,
  ListWithCustomPageModel200Response,
  ListWithCustomPageModelDefaultResponse,
  ListWithPage200Response,
  ListWithPageDefaultResponse,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  CreateOrUpdateOptions,
  CreateOrReplaceOptions,
  GetOptions,
  ListOptions,
  ListWithPageOptions,
  ListWithCustomPageModelOptions,
  DeleteOperationOptions,
  ExportOperationOptions,
} from "../models/options.js";

export function _createOrUpdateSend(
  context: Client,
  id: number,
  resource: User,
  options: CreateOrUpdateOptions = { requestOptions: {} }
): StreamableMethod<
  | CreateOrUpdate200Response
  | CreateOrUpdate201Response
  | CreateOrUpdateDefaultResponse
> {
  return context
    .path("/azure/core/basic/users/{id}", id)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        name: resource["name"],
        orders: !resource["orders"]
          ? resource["orders"]
          : resource["orders"].map((p) => ({
              userId: p["userId"],
              detail: p["detail"],
            })),
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | CreateOrUpdate200Response
    | CreateOrUpdate201Response
    | CreateOrUpdateDefaultResponse
): Promise<User> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    orders: !result.body["orders"]
      ? result.body["orders"]
      : result.body["orders"].map((p) => ({
          id: p["id"],
          userId: p["userId"],
          detail: p["detail"],
        })),
    etag: result.body["etag"],
  };
}

/** Creates or updates a User */
export async function createOrUpdate(
  context: Client,
  id: number,
  resource: User,
  options: CreateOrUpdateOptions = { requestOptions: {} }
): Promise<User> {
  const result = await _createOrUpdateSend(context, id, resource, options);
  return _createOrUpdateDeserialize(result);
}

export function _createOrReplaceSend(
  context: Client,
  id: number,
  resource: User,
  options: CreateOrReplaceOptions = { requestOptions: {} }
): StreamableMethod<
  | CreateOrReplace200Response
  | CreateOrReplace201Response
  | CreateOrReplaceDefaultResponse
> {
  return context
    .path("/azure/core/basic/users/{id}", id)
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        name: resource["name"],
        orders: !resource["orders"]
          ? resource["orders"]
          : resource["orders"].map((p) => ({
              userId: p["userId"],
              detail: p["detail"],
            })),
      },
    });
}

export async function _createOrReplaceDeserialize(
  result:
    | CreateOrReplace200Response
    | CreateOrReplace201Response
    | CreateOrReplaceDefaultResponse
): Promise<User> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    orders: !result.body["orders"]
      ? result.body["orders"]
      : result.body["orders"].map((p) => ({
          id: p["id"],
          userId: p["userId"],
          detail: p["detail"],
        })),
    etag: result.body["etag"],
  };
}

/** Creates or replaces a User */
export async function createOrReplace(
  context: Client,
  id: number,
  resource: User,
  options: CreateOrReplaceOptions = { requestOptions: {} }
): Promise<User> {
  const result = await _createOrReplaceSend(context, id, resource, options);
  return _createOrReplaceDeserialize(result);
}

export function _getSend(
  context: Client,
  id: number,
  options: GetOptions = { requestOptions: {} }
): StreamableMethod<Get200Response | GetDefaultResponse> {
  return context
    .path("/azure/core/basic/users/{id}", id)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: Get200Response | GetDefaultResponse
): Promise<User> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    orders: !result.body["orders"]
      ? result.body["orders"]
      : result.body["orders"].map((p) => ({
          id: p["id"],
          userId: p["userId"],
          detail: p["detail"],
        })),
    etag: result.body["etag"],
  };
}

/** Gets a User */
export async function get(
  context: Client,
  id: number,
  options: GetOptions = { requestOptions: {} }
): Promise<User> {
  const result = await _getSend(context, id, options);
  return _getDeserialize(result);
}

export function _listSend(
  context: Client,
  options: ListOptions = { requestOptions: {} }
): StreamableMethod<List200Response | ListDefaultResponse> {
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
  result: List200Response | ListDefaultResponse
): Promise<PagedUser> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    value: result.body["value"].map((p) => ({
      id: p["id"],
      name: p["name"],
      orders: !p["orders"]
        ? p["orders"]
        : p["orders"].map((p) => ({
            id: p["id"],
            userId: p["userId"],
            detail: p["detail"],
          })),
      etag: p["etag"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists all Users */
export async function list(
  context: Client,
  options: ListOptions = { requestOptions: {} }
): Promise<PagedUser> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _listWithPageSend(
  context: Client,
  options: ListWithPageOptions = { requestOptions: {} }
): StreamableMethod<ListWithPage200Response | ListWithPageDefaultResponse> {
  return context
    .path("/azure/core/basic/page")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listWithPageDeserialize(
  result: ListWithPage200Response | ListWithPageDefaultResponse
): Promise<PagedUser> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    value: result.body["value"].map((p) => ({
      id: p["id"],
      name: p["name"],
      orders: !p["orders"]
        ? p["orders"]
        : p["orders"].map((p) => ({
            id: p["id"],
            userId: p["userId"],
            detail: p["detail"],
          })),
      etag: p["etag"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List with Azure.Core.Page<>. */
export async function listWithPage(
  context: Client,
  options: ListWithPageOptions = { requestOptions: {} }
): Promise<PagedUser> {
  const result = await _listWithPageSend(context, options);
  return _listWithPageDeserialize(result);
}

export function _listWithCustomPageModelSend(
  context: Client,
  options: ListWithCustomPageModelOptions = { requestOptions: {} }
): StreamableMethod<
  ListWithCustomPageModel200Response | ListWithCustomPageModelDefaultResponse
> {
  return context
    .path("/azure/core/basic/custom-page")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listWithCustomPageModelDeserialize(
  result:
    | ListWithCustomPageModel200Response
    | ListWithCustomPageModelDefaultResponse
): Promise<UserListResults> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    items: result.body["items"].map((p) => ({
      id: p["id"],
      name: p["name"],
      orders: !p["orders"]
        ? p["orders"]
        : p["orders"].map((p) => ({
            id: p["id"],
            userId: p["userId"],
            detail: p["detail"],
          })),
      etag: p["etag"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List with custom page model. */
export async function listWithCustomPageModel(
  context: Client,
  options: ListWithCustomPageModelOptions = { requestOptions: {} }
): Promise<UserListResults> {
  const result = await _listWithCustomPageModelSend(context, options);
  return _listWithCustomPageModelDeserialize(result);
}

export function _deleteOperationSend(
  context: Client,
  id: number,
  options: DeleteOperationOptions = { requestOptions: {} }
): StreamableMethod<
  DeleteOperation204Response | DeleteOperationDefaultResponse
> {
  return context
    .path("/azure/core/basic/users/{id}", id)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteOperationDeserialize(
  result: DeleteOperation204Response | DeleteOperationDefaultResponse
): Promise<void> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

/** Deletes a User */
export async function deleteOperation(
  context: Client,
  id: number,
  options: DeleteOperationOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _deleteOperationSend(context, id, options);
  return _deleteOperationDeserialize(result);
}

export function _exportOperationSend(
  context: Client,
  id: number,
  format: string,
  options: ExportOperationOptions = { requestOptions: {} }
): StreamableMethod<
  ExportOperation200Response | ExportOperationDefaultResponse
> {
  return context
    .path("/azure/core/basic/users/{id}:export", id)
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { format: format },
    });
}

export async function _exportOperationDeserialize(
  result: ExportOperation200Response | ExportOperationDefaultResponse
): Promise<User> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    orders: !result.body["orders"]
      ? result.body["orders"]
      : result.body["orders"].map((p) => ({
          id: p["id"],
          userId: p["userId"],
          detail: p["detail"],
        })),
    etag: result.body["etag"],
  };
}

/** Exports a User */
export async function exportOperation(
  context: Client,
  id: number,
  format: string,
  options: ExportOperationOptions = { requestOptions: {} }
): Promise<User> {
  const result = await _exportOperationSend(context, id, format, options);
  return _exportOperationDeserialize(result);
}

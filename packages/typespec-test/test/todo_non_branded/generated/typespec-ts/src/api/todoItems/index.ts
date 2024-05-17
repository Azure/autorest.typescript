// Licensed under the MIT license.

import {
  TodoPage,
  TodoItem,
  TodoItemPatch,
  TodoLabels,
} from "../../models/models.js";
import {
  TodoContext as Client,
  TodoItemsCreate200Response,
  TodoItemsCreate400Response,
  TodoItemsCreate422Response,
  TodoItemsCreate500Response,
  TodoItemsDelete204Response,
  TodoItemsDelete400Response,
  TodoItemsDelete404Response,
  TodoItemsDelete500Response,
  TodoItemsGet200Response,
  TodoItemsGet404Response,
  TodoItemsList200Response,
  TodoItemsList400Response,
  TodoItemsList500Response,
  TodoItemsUpdate200Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@typespec/ts-http-runtime";
import {
  TodoItemsListOptionalParams,
  TodoItemsCreateOptionalParams,
  TodoItemsGetOptionalParams,
  TodoItemsUpdateOptionalParams,
  TodoItemsDeleteOptionalParams,
} from "../../models/options.js";

export function _listSend(
  context: Client,
  options: TodoItemsListOptionalParams = { requestOptions: {} },
): StreamableMethod<
  TodoItemsList200Response | TodoItemsList400Response | TodoItemsList500Response
> {
  return context
    .path("/items")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { limit: options?.limit, offset: options?.offset },
    });
}

export async function _listDeserialize(
  result:
    | TodoItemsList200Response
    | TodoItemsList400Response
    | TodoItemsList500Response,
): Promise<TodoPage> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    items: result.body["items"].map((p) => ({
      id: p["id"],
      title: p["title"],
      createdBy: p["createdBy"],
      assignedTo: p["assignedTo"],
      description: p["description"],
      status: p["status"],
      createdAt: new Date(p["createdAt"]),
      updatedAt: new Date(p["updatedAt"]),
      completedAt:
        p["completedAt"] !== undefined ? new Date(p["completedAt"]) : undefined,
      labels: p["labels"],
      dummy: p["_dummy"],
    })),
    pagination: {
      pageSize: result.body.pagination["pageSize"],
      totalSize: result.body.pagination["totalSize"],
      prevLink: result.body.pagination["prevLink"],
      nextLink: result.body.pagination["nextLink"],
    },
  };
}

export async function list(
  context: Client,
  options: TodoItemsListOptionalParams = { requestOptions: {} },
): Promise<TodoPage> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _createSend(
  context: Client,
  item: TodoItem,
  options: TodoItemsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | TodoItemsCreate200Response
  | TodoItemsCreate400Response
  | TodoItemsCreate422Response
  | TodoItemsCreate500Response
> {
  return context
    .path("/items")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "application/json",
      body: {
        item: {
          title: item["title"],
          assignedTo: item["assignedTo"],
          description: item["description"],
          status: item["status"],
          labels: item["labels"],
          _dummy: item["dummy"],
        },
        attachments: options?.attachments,
      },
    });
}

export async function _createDeserialize(
  result:
    | TodoItemsCreate200Response
    | TodoItemsCreate400Response
    | TodoItemsCreate422Response
    | TodoItemsCreate500Response,
): Promise<{
  id: number;
  title: string;
  createdBy: number;
  assignedTo?: number;
  description?: string;
  status: "NotStarted" | "InProgress" | "Completed";
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  labels?: TodoLabels;
}> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    title: result.body["title"],
    createdBy: result.body["createdBy"],
    assignedTo: result.body["assignedTo"],
    description: result.body["description"],
    status: result.body["status"],
    createdAt: new Date(result.body["createdAt"]),
    updatedAt: new Date(result.body["updatedAt"]),
    completedAt:
      result.body["completedAt"] !== undefined
        ? new Date(result.body["completedAt"])
        : undefined,
    labels: result.body["labels"],
  };
}

export async function create(
  context: Client,
  item: TodoItem,
  options: TodoItemsCreateOptionalParams = { requestOptions: {} },
): Promise<{
  id: number;
  title: string;
  createdBy: number;
  assignedTo?: number;
  description?: string;
  status: "NotStarted" | "InProgress" | "Completed";
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  labels?: TodoLabels;
}> {
  const result = await _createSend(context, item, options);
  return _createDeserialize(result);
}

export function _getSend(
  context: Client,
  id: number,
  options: TodoItemsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<TodoItemsGet200Response | TodoItemsGet404Response> {
  return context
    .path("/items/{id}", id)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: TodoItemsGet200Response | TodoItemsGet404Response,
): Promise<{
  id: number;
  title: string;
  createdBy: number;
  assignedTo?: number;
  description?: string;
  status: "NotStarted" | "InProgress" | "Completed";
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  labels?: TodoLabels;
}> {
  if (result.status !== "200" && result.status !== "404") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    title: result.body["title"],
    createdBy: result.body["createdBy"],
    assignedTo: result.body["assignedTo"],
    description: result.body["description"],
    status: result.body["status"],
    createdAt: new Date(result.body["createdAt"]),
    updatedAt: new Date(result.body["updatedAt"]),
    completedAt:
      result.body["completedAt"] !== undefined
        ? new Date(result.body["completedAt"])
        : undefined,
    labels: result.body["labels"],
  };
}

export async function get(
  context: Client,
  id: number,
  options: TodoItemsGetOptionalParams = { requestOptions: {} },
): Promise<{
  id: number;
  title: string;
  createdBy: number;
  assignedTo?: number;
  description?: string;
  status: "NotStarted" | "InProgress" | "Completed";
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  labels?: TodoLabels;
}> {
  const result = await _getSend(context, id, options);
  return _getDeserialize(result);
}

export function _updateSend(
  context: Client,
  id: number,
  patch: TodoItemPatch,
  options: TodoItemsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<TodoItemsUpdate200Response> {
  return context
    .path("/items/{id}", id)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        title: patch["title"],
        assignedTo: patch["assignedTo"],
        description: patch["description"],
        status: patch["status"],
      },
    });
}

export async function _updateDeserialize(
  result: TodoItemsUpdate200Response,
): Promise<{
  id: number;
  title: string;
  createdBy: number;
  assignedTo?: number;
  description?: string;
  status: "NotStarted" | "InProgress" | "Completed";
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  labels?: TodoLabels;
}> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    title: result.body["title"],
    createdBy: result.body["createdBy"],
    assignedTo: result.body["assignedTo"],
    description: result.body["description"],
    status: result.body["status"],
    createdAt: new Date(result.body["createdAt"]),
    updatedAt: new Date(result.body["updatedAt"]),
    completedAt:
      result.body["completedAt"] !== undefined
        ? new Date(result.body["completedAt"])
        : undefined,
    labels: result.body["labels"],
  };
}

export async function update(
  context: Client,
  id: number,
  patch: TodoItemPatch,
  options: TodoItemsUpdateOptionalParams = { requestOptions: {} },
): Promise<{
  id: number;
  title: string;
  createdBy: number;
  assignedTo?: number;
  description?: string;
  status: "NotStarted" | "InProgress" | "Completed";
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  labels?: TodoLabels;
}> {
  const result = await _updateSend(context, id, patch, options);
  return _updateDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  id: number,
  options: TodoItemsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | TodoItemsDelete204Response
  | TodoItemsDelete400Response
  | TodoItemsDelete404Response
  | TodoItemsDelete500Response
> {
  return context
    .path("/items/{id}", id)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | TodoItemsDelete204Response
    | TodoItemsDelete400Response
    | TodoItemsDelete404Response
    | TodoItemsDelete500Response,
): Promise<void> {
  if (result.status !== "204" && result.status !== "404") {
    throw createRestError(result);
  }

  return;
}

/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  id: number,
  options: TodoItemsDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, id, options);
  return _$deleteDeserialize(result);
}

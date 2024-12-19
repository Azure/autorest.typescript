// Licensed under the MIT License.

import {
  TodoContext as Client,
  TodoItemsCreateOptionalParams,
  TodoItemsDeleteOptionalParams,
  TodoItemsGetOptionalParams,
  TodoItemsListOptionalParams,
  TodoItemsUpdateOptionalParams,
} from "../index.js";
import {
  TodoPage,
  todoPageDeserializer,
  TodoItem,
  TodoLabels,
  todoLabelsSerializer,
  todoAttachmentSerializer,
  _createResponseDeserializer,
  _getResponseDeserializer,
  TodoItemPatch,
  todoItemPatchSerializer,
  _updateResponseDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _listSend(
  context: Client,
  options: TodoItemsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/items")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { limit: options?.limit, offset: options?.offset },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<TodoPage> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return todoPageDeserializer(result.body);
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
): StreamableMethod {
  return context.path("/items").post({
    ...operationOptionsToRequestParameters(options),
    contentType: (options.contentType as any) ?? "application/json",
    body: {
      item: {
        title: item["title"],
        assignedTo: item["assignedTo"],
        description: item["description"],
        status: item["status"],
        labels: !item["labels"]
          ? item["labels"]
          : todoLabelsSerializer(item["labels"]),
        _dummy: item["dummy"],
      },
      attachments: !options?.attachments
        ? options?.attachments
        : options?.attachments.map((p: any) => {
            return todoAttachmentSerializer(p);
          }),
    },
  });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
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
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _createResponseDeserializer(result.body);
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
): StreamableMethod {
  return context
    .path("/items/{id}", id)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(result: PathUncheckedResponse): Promise<{
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
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _getResponseDeserializer(result.body);
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
): StreamableMethod {
  return context
    .path("/items/{id}", id)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: todoItemPatchSerializer(patch),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
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
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _updateResponseDeserializer(result.body);
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
): StreamableMethod {
  return context
    .path("/items/{id}", id)
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

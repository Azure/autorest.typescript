// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChaosManagementContext as Client } from "./index.js";
import {
  Capability,
  capabilitySerializer,
  capabilityDeserializer,
  errorResponseDeserializer,
  _CapabilityListResult,
  _capabilityListResultDeserializer,
  CapabilityType,
  capabilityTypeDeserializer,
  _CapabilityTypeListResult,
  _capabilityTypeListResultDeserializer,
  _OperationListResult,
  _operationListResultDeserializer,
  Operation,
  OperationStatusResult,
  operationStatusResultDeserializer,
  Target,
  targetSerializer,
  targetDeserializer,
  _TargetListResult,
  _targetListResultDeserializer,
  TargetType,
  targetTypeDeserializer,
  _TargetTypeListResult,
  _targetTypeListResultDeserializer,
} from "../models/models.js";
import {
  ListOptionalParams,
  GetOptionalParams,
  ListOptionalParams_1,
  DeleteOptionalParams,
  CreateOrUpdateOptionalParams,
  GetOptionalParams_1,
  GetOptionalParams_2,
  ListOptionalParams_2,
  ListOptionalParams_3,
  GetOptionalParams_3,
  ListOptionalParams_4,
  DeleteOptionalParams_1,
  CreateOrUpdateOptionalParams_1,
  GetOptionalParams_4,
} from "./options.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listSend(
  context: Client,
  location: string,
  options: ListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{location}/targetTypes{?api%2Dversion,continuationToken}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      "api%2Dversion": context.apiVersion,
      continuationToken: options?.continuationToken,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_TargetTypeListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _targetTypeListResultDeserializer(result.body);
}

/** Get a list of Target Type resources for given location. */
export function list(
  context: Client,
  location: string,
  options: ListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<TargetType> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, location, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSend(
  context: Client,
  location: string,
  targetTypeName: string,
  options: GetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{location}/targetTypes/{targetTypeName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      targetTypeName: targetTypeName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<TargetType> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return targetTypeDeserializer(result.body);
}

/** Get a Target Type resources for given location. */
export async function get(
  context: Client,
  location: string,
  targetTypeName: string,
  options: GetOptionalParams = { requestOptions: {} },
): Promise<TargetType> {
  const result = await _getSend(context, location, targetTypeName, options);
  return _getDeserialize(result);
}

export function _listSend(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  options: ListOptionalParams_1 = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets{?api%2Dversion,continuationToken}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      parentProviderNamespace: parentProviderNamespace,
      parentResourceType: parentResourceType,
      parentResourceName: parentResourceName,
      "api%2Dversion": context.apiVersion,
      continuationToken: options?.continuationToken,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_TargetListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _targetListResultDeserializer(result.body);
}

/** Get a list of Target resources that extend a tracked regional resource. */
export function list_1(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  options: ListOptionalParams_1 = { requestOptions: {} },
): PagedAsyncIterableIterator<Target> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listSend(
        context,
        resourceGroupName,
        parentProviderNamespace,
        parentResourceType,
        parentResourceName,
        options,
      ),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  options: DeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      parentProviderNamespace: parentProviderNamespace,
      parentResourceType: parentResourceType,
      parentResourceName: parentResourceName,
      targetName: targetName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a Target resource that extends a tracked regional resource. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  options: DeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(
    context,
    resourceGroupName,
    parentProviderNamespace,
    parentResourceType,
    parentResourceName,
    targetName,
    options,
  );
  return _$deleteDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  resource: Target,
  options: CreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      parentProviderNamespace: parentProviderNamespace,
      parentResourceType: parentResourceType,
      parentResourceName: parentResourceName,
      targetName: targetName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: targetSerializer(resource),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Target> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return targetDeserializer(result.body);
}

/** Create or update a Target resource that extends a tracked regional resource. */
export async function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  resource: Target,
  options: CreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<Target> {
  const result = await _createOrUpdateSend(
    context,
    resourceGroupName,
    parentProviderNamespace,
    parentResourceType,
    parentResourceName,
    targetName,
    resource,
    options,
  );
  return _createOrUpdateDeserialize(result);
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  options: GetOptionalParams_1 = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      parentProviderNamespace: parentProviderNamespace,
      parentResourceType: parentResourceType,
      parentResourceName: parentResourceName,
      targetName: targetName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<Target> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return targetDeserializer(result.body);
}

/** Get a Target resource that extends a tracked regional resource. */
export async function get_1(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  options: GetOptionalParams_1 = { requestOptions: {} },
): Promise<Target> {
  const result = await _getSend(
    context,
    resourceGroupName,
    parentProviderNamespace,
    parentResourceType,
    parentResourceName,
    targetName,
    options,
  );
  return _getDeserialize(result);
}

export function _getSend(
  context: Client,
  location: string,
  operationId: string,
  options: GetOptionalParams_2 = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{location}/operationStatuses/{operationId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      operationId: operationId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<OperationStatusResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return operationStatusResultDeserializer(result.body);
}

/** Returns the current status of an async operation. */
export async function get_2(
  context: Client,
  location: string,
  operationId: string,
  options: GetOptionalParams_2 = { requestOptions: {} },
): Promise<OperationStatusResult> {
  const result = await _getSend(context, location, operationId, options);
  return _getDeserialize(result);
}

export function _listSend(
  context: Client,
  options: ListOptionalParams_2 = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.Chaos/operations{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_OperationListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _operationListResultDeserializer(result.body);
}

/** List the operations for the provider */
export function list_2(
  context: Client,
  options: ListOptionalParams_2 = { requestOptions: {} },
): PagedAsyncIterableIterator<Operation> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listSend(
  context: Client,
  location: string,
  targetTypeName: string,
  options: ListOptionalParams_3 = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{location}/targetTypes/{targetTypeName}/capabilityTypes{?api%2Dversion,continuationToken}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      targetTypeName: targetTypeName,
      "api%2Dversion": context.apiVersion,
      continuationToken: options?.continuationToken,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_CapabilityTypeListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _capabilityTypeListResultDeserializer(result.body);
}

/** Get a list of Capability Type resources for given Target Type and location. */
export function list_3(
  context: Client,
  location: string,
  targetTypeName: string,
  options: ListOptionalParams_3 = { requestOptions: {} },
): PagedAsyncIterableIterator<CapabilityType> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, location, targetTypeName, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSend(
  context: Client,
  location: string,
  targetTypeName: string,
  capabilityTypeName: string,
  options: GetOptionalParams_3 = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{location}/targetTypes/{targetTypeName}/capabilityTypes/{capabilityTypeName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      targetTypeName: targetTypeName,
      capabilityTypeName: capabilityTypeName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<CapabilityType> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return capabilityTypeDeserializer(result.body);
}

/** Get a Capability Type resource for given Target Type and location. */
export async function get_3(
  context: Client,
  location: string,
  targetTypeName: string,
  capabilityTypeName: string,
  options: GetOptionalParams_3 = { requestOptions: {} },
): Promise<CapabilityType> {
  const result = await _getSend(
    context,
    location,
    targetTypeName,
    capabilityTypeName,
    options,
  );
  return _getDeserialize(result);
}

export function _listSend(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  options: ListOptionalParams_4 = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}/capabilities{?api%2Dversion,continuationToken}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      parentProviderNamespace: parentProviderNamespace,
      parentResourceType: parentResourceType,
      parentResourceName: parentResourceName,
      targetName: targetName,
      "api%2Dversion": context.apiVersion,
      continuationToken: options?.continuationToken,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_CapabilityListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _capabilityListResultDeserializer(result.body);
}

/** Get a list of Capability resources that extend a Target resource. */
export function list_4(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  options: ListOptionalParams_4 = { requestOptions: {} },
): PagedAsyncIterableIterator<Capability> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listSend(
        context,
        resourceGroupName,
        parentProviderNamespace,
        parentResourceType,
        parentResourceName,
        targetName,
        options,
      ),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  capabilityName: string,
  options: DeleteOptionalParams_1 = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}/capabilities/{capabilityName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      parentProviderNamespace: parentProviderNamespace,
      parentResourceType: parentResourceType,
      parentResourceName: parentResourceName,
      targetName: targetName,
      capabilityName: capabilityName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a Capability that extends a Target resource. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete_1(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  capabilityName: string,
  options: DeleteOptionalParams_1 = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(
    context,
    resourceGroupName,
    parentProviderNamespace,
    parentResourceType,
    parentResourceName,
    targetName,
    capabilityName,
    options,
  );
  return _$deleteDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  capabilityName: string,
  resource: Capability,
  options: CreateOrUpdateOptionalParams_1 = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}/capabilities/{capabilityName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      parentProviderNamespace: parentProviderNamespace,
      parentResourceType: parentResourceType,
      parentResourceName: parentResourceName,
      targetName: targetName,
      capabilityName: capabilityName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: capabilitySerializer(resource),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Capability> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return capabilityDeserializer(result.body);
}

/** Create or update a Capability resource that extends a Target resource. */
export async function createOrUpdate_1(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  capabilityName: string,
  resource: Capability,
  options: CreateOrUpdateOptionalParams_1 = { requestOptions: {} },
): Promise<Capability> {
  const result = await _createOrUpdateSend(
    context,
    resourceGroupName,
    parentProviderNamespace,
    parentResourceType,
    parentResourceName,
    targetName,
    capabilityName,
    resource,
    options,
  );
  return _createOrUpdateDeserialize(result);
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  capabilityName: string,
  options: GetOptionalParams_4 = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}/capabilities/{capabilityName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      parentProviderNamespace: parentProviderNamespace,
      parentResourceType: parentResourceType,
      parentResourceName: parentResourceName,
      targetName: targetName,
      capabilityName: capabilityName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<Capability> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return capabilityDeserializer(result.body);
}

/** Get a Capability resource that extends a Target resource. */
export async function get_4(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  capabilityName: string,
  options: GetOptionalParams_4 = { requestOptions: {} },
): Promise<Capability> {
  const result = await _getSend(
    context,
    resourceGroupName,
    parentProviderNamespace,
    parentResourceType,
    parentResourceName,
    targetName,
    capabilityName,
    options,
  );
  return _getDeserialize(result);
}

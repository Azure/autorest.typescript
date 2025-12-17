// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebContext as Client } from "../index.js";
import {
  defaultErrorResponseDeserializer,
  _CsmOperationCollection,
  _csmOperationCollectionDeserializer,
  CsmOperationDescription,
  _ApplicationStackCollection,
  _applicationStackCollectionDeserializer,
  ApplicationStackResource,
  _FunctionAppStackCollection,
  _functionAppStackCollectionDeserializer,
  FunctionAppStack,
  _WebAppStackCollection,
  _webAppStackCollectionDeserializer,
  WebAppStack,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  ProviderGetAvailableStacksOnPremOptionalParams,
  ProviderGetWebAppStacksOptionalParams,
  ProviderGetWebAppStacksForLocationOptionalParams,
  ProviderGetFunctionAppStacksForLocationOptionalParams,
  ProviderGetFunctionAppStacksOptionalParams,
  ProviderGetAvailableStacksOptionalParams,
  ProviderListOperationsOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getAvailableStacksOnPremSend(
  context: Client,
  options: ProviderGetAvailableStacksOnPremOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Web/availableStacks{?api%2Dversion,osTypeSelected}",
    {
      subscriptionId: context.subscriptionId,
      "api%2Dversion": context.apiVersion,
      osTypeSelected: options?.osTypeSelected,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getAvailableStacksOnPremDeserialize(
  result: PathUncheckedResponse,
): Promise<_ApplicationStackCollection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = defaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return _applicationStackCollectionDeserializer(result.body);
}

/** Description for Get available application frameworks and their versions */
export function getAvailableStacksOnPrem(
  context: Client,
  options: ProviderGetAvailableStacksOnPremOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ApplicationStackResource> {
  return buildPagedAsyncIterator(
    context,
    () => _getAvailableStacksOnPremSend(context, options),
    _getAvailableStacksOnPremDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getWebAppStacksSend(
  context: Client,
  options: ProviderGetWebAppStacksOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.Web/webAppStacks{?api%2Dversion,stackOsType}",
    {
      "api%2Dversion": context.apiVersion,
      stackOsType: options?.stackOsType,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getWebAppStacksDeserialize(
  result: PathUncheckedResponse,
): Promise<_WebAppStackCollection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = defaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return _webAppStackCollectionDeserializer(result.body);
}

/** Description for Get available Web app frameworks and their versions */
export function getWebAppStacks(
  context: Client,
  options: ProviderGetWebAppStacksOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WebAppStack> {
  return buildPagedAsyncIterator(
    context,
    () => _getWebAppStacksSend(context, options),
    _getWebAppStacksDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getWebAppStacksForLocationSend(
  context: Client,
  location: string,
  options: ProviderGetWebAppStacksForLocationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.Web/locations/{location}/webAppStacks{?api%2Dversion,stackOsType}",
    {
      location: location,
      "api%2Dversion": context.apiVersion,
      stackOsType: options?.stackOsType,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getWebAppStacksForLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_WebAppStackCollection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = defaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return _webAppStackCollectionDeserializer(result.body);
}

/** Description for Get available Web app frameworks and their versions for location */
export function getWebAppStacksForLocation(
  context: Client,
  location: string,
  options: ProviderGetWebAppStacksForLocationOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WebAppStack> {
  return buildPagedAsyncIterator(
    context,
    () => _getWebAppStacksForLocationSend(context, location, options),
    _getWebAppStacksForLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getFunctionAppStacksForLocationSend(
  context: Client,
  location: string,
  options: ProviderGetFunctionAppStacksForLocationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.Web/locations/{location}/functionAppStacks{?api%2Dversion,stackOsType}",
    {
      location: location,
      "api%2Dversion": context.apiVersion,
      stackOsType: options?.stackOsType,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getFunctionAppStacksForLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_FunctionAppStackCollection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = defaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return _functionAppStackCollectionDeserializer(result.body);
}

/** Description for Get available Function app frameworks and their versions for location */
export function getFunctionAppStacksForLocation(
  context: Client,
  location: string,
  options: ProviderGetFunctionAppStacksForLocationOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<FunctionAppStack> {
  return buildPagedAsyncIterator(
    context,
    () => _getFunctionAppStacksForLocationSend(context, location, options),
    _getFunctionAppStacksForLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getFunctionAppStacksSend(
  context: Client,
  options: ProviderGetFunctionAppStacksOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.Web/functionAppStacks{?api%2Dversion,stackOsType}",
    {
      "api%2Dversion": context.apiVersion,
      stackOsType: options?.stackOsType,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getFunctionAppStacksDeserialize(
  result: PathUncheckedResponse,
): Promise<_FunctionAppStackCollection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = defaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return _functionAppStackCollectionDeserializer(result.body);
}

/** Description for Get available Function app frameworks and their versions */
export function getFunctionAppStacks(
  context: Client,
  options: ProviderGetFunctionAppStacksOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<FunctionAppStack> {
  return buildPagedAsyncIterator(
    context,
    () => _getFunctionAppStacksSend(context, options),
    _getFunctionAppStacksDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getAvailableStacksSend(
  context: Client,
  options: ProviderGetAvailableStacksOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.Web/availableStacks{?api%2Dversion,osTypeSelected}",
    {
      "api%2Dversion": context.apiVersion,
      osTypeSelected: options?.osTypeSelected,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getAvailableStacksDeserialize(
  result: PathUncheckedResponse,
): Promise<_ApplicationStackCollection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = defaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return _applicationStackCollectionDeserializer(result.body);
}

/** Description for Get available application frameworks and their versions */
export function getAvailableStacks(
  context: Client,
  options: ProviderGetAvailableStacksOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ApplicationStackResource> {
  return buildPagedAsyncIterator(
    context,
    () => _getAvailableStacksSend(context, options),
    _getAvailableStacksDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listOperationsSend(
  context: Client,
  options: ProviderListOperationsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.Web/operations{?api%2Dversion}",
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
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _listOperationsDeserialize(
  result: PathUncheckedResponse,
): Promise<_CsmOperationCollection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = defaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return _csmOperationCollectionDeserializer(result.body);
}

/** Description for Gets all available operations for the Microsoft.Web resource provider. Also exposes resource metric definitions */
export function listOperations(
  context: Client,
  options: ProviderListOperationsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<CsmOperationDescription> {
  return buildPagedAsyncIterator(
    context,
    () => _listOperationsSend(context, options),
    _listOperationsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

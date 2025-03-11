// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  _ScriptPackagesList,
  _scriptPackagesListDeserializer,
  ScriptPackage,
  scriptPackageDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  ScriptPackagesGetOptionalParams,
  ScriptPackagesListOptionalParams,
} from "./options.js";

export function _scriptPackagesGetSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  scriptPackageName: string,
  options: ScriptPackagesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      scriptPackageName: scriptPackageName,
      "api-version": context.apiVersion,
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

export async function _scriptPackagesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ScriptPackage> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return scriptPackageDeserializer(result.body);
}

/** Get a ScriptPackage */
export async function scriptPackagesGet(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  scriptPackageName: string,
  options: ScriptPackagesGetOptionalParams = { requestOptions: {} },
): Promise<ScriptPackage> {
  const result = await _scriptPackagesGetSend(
    context,
    resourceGroupName,
    privateCloudName,
    scriptPackageName,
    options,
  );
  return _scriptPackagesGetDeserialize(result);
}

export function _scriptPackagesListSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: ScriptPackagesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      "api-version": context.apiVersion,
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

export async function _scriptPackagesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_ScriptPackagesList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _scriptPackagesListDeserializer(result.body);
}

/** List ScriptPackage resources by PrivateCloud */
export function scriptPackagesList(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: ScriptPackagesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ScriptPackage> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _scriptPackagesListSend(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _scriptPackagesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

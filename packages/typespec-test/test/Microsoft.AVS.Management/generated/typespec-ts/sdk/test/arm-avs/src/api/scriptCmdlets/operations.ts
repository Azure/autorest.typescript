// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  _ScriptCmdletsList,
  _scriptCmdletsListDeserializer,
  ScriptCmdlet,
  scriptCmdletDeserializer,
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
  ScriptCmdletsGetOptionalParams,
  ScriptCmdletsListOptionalParams,
} from "./options.js";

export function _scriptCmdletsGetSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  scriptPackageName: string,
  scriptCmdletName: string,
  options: ScriptCmdletsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}/scriptCmdlets/{scriptCmdletName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      scriptPackageName: scriptPackageName,
      scriptCmdletName: scriptCmdletName,
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

export async function _scriptCmdletsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ScriptCmdlet> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return scriptCmdletDeserializer(result.body);
}

/** Get a ScriptCmdlet */
export async function scriptCmdletsGet(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  scriptPackageName: string,
  scriptCmdletName: string,
  options: ScriptCmdletsGetOptionalParams = { requestOptions: {} },
): Promise<ScriptCmdlet> {
  const result = await _scriptCmdletsGetSend(
    context,
    resourceGroupName,
    privateCloudName,
    scriptPackageName,
    scriptCmdletName,
    options,
  );
  return _scriptCmdletsGetDeserialize(result);
}

export function _scriptCmdletsListSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  scriptPackageName: string,
  options: ScriptCmdletsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}/scriptCmdlets{?api-version}",
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

export async function _scriptCmdletsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_ScriptCmdletsList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _scriptCmdletsListDeserializer(result.body);
}

/** List ScriptCmdlet resources by ScriptPackage */
export function scriptCmdletsList(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  scriptPackageName: string,
  options: ScriptCmdletsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ScriptCmdlet> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _scriptCmdletsListSend(
        context,
        resourceGroupName,
        privateCloudName,
        scriptPackageName,
        options,
      ),
    _scriptCmdletsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

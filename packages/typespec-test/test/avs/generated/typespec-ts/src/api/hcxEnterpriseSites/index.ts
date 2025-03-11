// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AzureVMwareSolutionAPIContext as Client,
  HcxEnterpriseSitesCreateOrUpdateOptionalParams,
  HcxEnterpriseSitesDeleteOptionalParams,
  HcxEnterpriseSitesGetOptionalParams,
  HcxEnterpriseSitesListOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  _HcxEnterpriseSiteList,
  _hcxEnterpriseSiteListDeserializer,
  HcxEnterpriseSite,
  hcxEnterpriseSiteSerializer,
  hcxEnterpriseSiteDeserializer,
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

export function _hcxEnterpriseSitesDeleteSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  hcxEnterpriseSiteName: string,
  options: HcxEnterpriseSitesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      hcxEnterpriseSiteName: hcxEnterpriseSiteName,
      "api-version": context.apiVersion,
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

export async function _hcxEnterpriseSitesDeleteDeserialize(
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

/** Delete a HcxEnterpriseSite */
export async function hcxEnterpriseSitesDelete(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  hcxEnterpriseSiteName: string,
  options: HcxEnterpriseSitesDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _hcxEnterpriseSitesDeleteSend(
    context,
    resourceGroupName,
    privateCloudName,
    hcxEnterpriseSiteName,
    options,
  );
  return _hcxEnterpriseSitesDeleteDeserialize(result);
}

export function _hcxEnterpriseSitesCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  hcxEnterpriseSiteName: string,
  hcxEnterpriseSite: HcxEnterpriseSite,
  options: HcxEnterpriseSitesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      hcxEnterpriseSiteName: hcxEnterpriseSiteName,
      "api-version": context.apiVersion,
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
      body: hcxEnterpriseSiteSerializer(hcxEnterpriseSite),
    });
}

export async function _hcxEnterpriseSitesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<HcxEnterpriseSite> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return hcxEnterpriseSiteDeserializer(result.body);
}

/** Create a HcxEnterpriseSite */
export async function hcxEnterpriseSitesCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  hcxEnterpriseSiteName: string,
  hcxEnterpriseSite: HcxEnterpriseSite,
  options: HcxEnterpriseSitesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<HcxEnterpriseSite> {
  const result = await _hcxEnterpriseSitesCreateOrUpdateSend(
    context,
    resourceGroupName,
    privateCloudName,
    hcxEnterpriseSiteName,
    hcxEnterpriseSite,
    options,
  );
  return _hcxEnterpriseSitesCreateOrUpdateDeserialize(result);
}

export function _hcxEnterpriseSitesGetSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  hcxEnterpriseSiteName: string,
  options: HcxEnterpriseSitesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      hcxEnterpriseSiteName: hcxEnterpriseSiteName,
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

export async function _hcxEnterpriseSitesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<HcxEnterpriseSite> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return hcxEnterpriseSiteDeserializer(result.body);
}

/** Get a HcxEnterpriseSite */
export async function hcxEnterpriseSitesGet(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  hcxEnterpriseSiteName: string,
  options: HcxEnterpriseSitesGetOptionalParams = { requestOptions: {} },
): Promise<HcxEnterpriseSite> {
  const result = await _hcxEnterpriseSitesGetSend(
    context,
    resourceGroupName,
    privateCloudName,
    hcxEnterpriseSiteName,
    options,
  );
  return _hcxEnterpriseSitesGetDeserialize(result);
}

export function _hcxEnterpriseSitesListSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: HcxEnterpriseSitesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites{?api-version}",
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

export async function _hcxEnterpriseSitesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_HcxEnterpriseSiteList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _hcxEnterpriseSiteListDeserializer(result.body);
}

/** List HcxEnterpriseSite resources by PrivateCloud */
export function hcxEnterpriseSitesList(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: HcxEnterpriseSitesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<HcxEnterpriseSite> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _hcxEnterpriseSitesListSend(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _hcxEnterpriseSitesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreatedByType,
  ScriptPackage,
  _ScriptPackagesList,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AVSContext as Client,
  ScriptPackagesGet200Response,
  ScriptPackagesGetDefaultResponse,
  ScriptPackagesListByPrivateCloud200Response,
  ScriptPackagesListByPrivateCloudDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ScriptPackagesListByPrivateCloudOptionalParams,
  ScriptPackagesGetOptionalParams,
} from "../../models/options.js";

export function _listByPrivateCloudSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: ScriptPackagesListByPrivateCloudOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | ScriptPackagesListByPrivateCloud200Response
  | ScriptPackagesListByPrivateCloudDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByPrivateCloudDeserialize(
  result:
    | ScriptPackagesListByPrivateCloud200Response
    | ScriptPackagesListByPrivateCloudDefaultResponse,
): Promise<_ScriptPackagesList> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => {
      return {
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"] as CreatedByType,
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.[
                "lastModifiedByType"
              ] as CreatedByType,
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              provisioningState: p.properties?.["provisioningState"] as any,
              description: p.properties?.["description"],
              version: p.properties?.["version"],
              company: p.properties?.["company"],
              uri: p.properties?.["uri"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List ScriptPackage resources by PrivateCloud */
export function listByPrivateCloud(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: ScriptPackagesListByPrivateCloudOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ScriptPackage> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByPrivateCloudSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _listByPrivateCloudDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptPackageName: string,
  options: ScriptPackagesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ScriptPackagesGet200Response | ScriptPackagesGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      scriptPackageName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: ScriptPackagesGet200Response | ScriptPackagesGetDefaultResponse,
): Promise<ScriptPackage> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.[
            "createdByType"
          ] as CreatedByType,
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.[
            "lastModifiedByType"
          ] as CreatedByType,
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.[
            "provisioningState"
          ] as any,
          description: result.body.properties?.["description"],
          version: result.body.properties?.["version"],
          company: result.body.properties?.["company"],
          uri: result.body.properties?.["uri"],
        },
  };
}

/** Get a ScriptPackage */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptPackageName: string,
  options: ScriptPackagesGetOptionalParams = { requestOptions: {} },
): Promise<ScriptPackage> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    scriptPackageName,
    options,
  );
  return _getDeserialize(result);
}

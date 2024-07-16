// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  hcxEnterpriseSitePropertiesSerializer,
  CreatedByType,
  HcxEnterpriseSite,
  HcxEnterpriseSiteStatus,
  _HcxEnterpriseSiteList,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AVSContext as Client,
  HcxEnterpriseSitesCreateOrUpdate200Response,
  HcxEnterpriseSitesCreateOrUpdate201Response,
  HcxEnterpriseSitesCreateOrUpdateDefaultResponse,
  HcxEnterpriseSitesDelete200Response,
  HcxEnterpriseSitesDelete204Response,
  HcxEnterpriseSitesDeleteDefaultResponse,
  HcxEnterpriseSitesGet200Response,
  HcxEnterpriseSitesGetDefaultResponse,
  HcxEnterpriseSitesListByPrivateCloud200Response,
  HcxEnterpriseSitesListByPrivateCloudDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  HcxEnterpriseSitesListByPrivateCloudOptionalParams,
  HcxEnterpriseSitesGetOptionalParams,
  HcxEnterpriseSitesCreateOrUpdateOptionalParams,
  HcxEnterpriseSitesDeleteOptionalParams,
} from "../../models/options.js";

export function _listByPrivateCloudSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: HcxEnterpriseSitesListByPrivateCloudOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | HcxEnterpriseSitesListByPrivateCloud200Response
  | HcxEnterpriseSitesListByPrivateCloudDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByPrivateCloudDeserialize(
  result:
    | HcxEnterpriseSitesListByPrivateCloud200Response
    | HcxEnterpriseSitesListByPrivateCloudDefaultResponse,
): Promise<_HcxEnterpriseSiteList> {
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
              activationKey: p.properties?.["activationKey"],
              status: p.properties?.["status"] as HcxEnterpriseSiteStatus,
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List HcxEnterpriseSite resources by PrivateCloud */
export function listByPrivateCloud(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: HcxEnterpriseSitesListByPrivateCloudOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<HcxEnterpriseSite> {
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
  hcxEnterpriseSiteName: string,
  options: HcxEnterpriseSitesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  HcxEnterpriseSitesGet200Response | HcxEnterpriseSitesGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      hcxEnterpriseSiteName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | HcxEnterpriseSitesGet200Response
    | HcxEnterpriseSitesGetDefaultResponse,
): Promise<HcxEnterpriseSite> {
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
          activationKey: result.body.properties?.["activationKey"],
          status: result.body.properties?.["status"] as HcxEnterpriseSiteStatus,
        },
  };
}

/** Get a HcxEnterpriseSite */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  hcxEnterpriseSiteName: string,
  options: HcxEnterpriseSitesGetOptionalParams = { requestOptions: {} },
): Promise<HcxEnterpriseSite> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    hcxEnterpriseSiteName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  hcxEnterpriseSiteName: string,
  hcxEnterpriseSite: HcxEnterpriseSite,
  options: HcxEnterpriseSitesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | HcxEnterpriseSitesCreateOrUpdate200Response
  | HcxEnterpriseSitesCreateOrUpdate201Response
  | HcxEnterpriseSitesCreateOrUpdateDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      hcxEnterpriseSiteName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !hcxEnterpriseSite.properties
          ? hcxEnterpriseSite.properties
          : hcxEnterpriseSitePropertiesSerializer(hcxEnterpriseSite.properties),
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | HcxEnterpriseSitesCreateOrUpdate200Response
    | HcxEnterpriseSitesCreateOrUpdate201Response
    | HcxEnterpriseSitesCreateOrUpdateDefaultResponse,
): Promise<HcxEnterpriseSite> {
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
          activationKey: result.body.properties?.["activationKey"],
          status: result.body.properties?.["status"] as HcxEnterpriseSiteStatus,
        },
  };
}

/** Create a HcxEnterpriseSite */
export async function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  hcxEnterpriseSiteName: string,
  hcxEnterpriseSite: HcxEnterpriseSite,
  options: HcxEnterpriseSitesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<HcxEnterpriseSite> {
  const result = await _createOrUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    hcxEnterpriseSiteName,
    hcxEnterpriseSite,
    options,
  );
  return _createOrUpdateDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  hcxEnterpriseSiteName: string,
  options: HcxEnterpriseSitesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | HcxEnterpriseSitesDelete200Response
  | HcxEnterpriseSitesDelete204Response
  | HcxEnterpriseSitesDeleteDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      hcxEnterpriseSiteName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | HcxEnterpriseSitesDelete200Response
    | HcxEnterpriseSitesDelete204Response
    | HcxEnterpriseSitesDeleteDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a HcxEnterpriseSite */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  hcxEnterpriseSiteName: string,
  options: HcxEnterpriseSitesDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    hcxEnterpriseSiteName,
    options,
  );
  return _$deleteDeserialize(result);
}

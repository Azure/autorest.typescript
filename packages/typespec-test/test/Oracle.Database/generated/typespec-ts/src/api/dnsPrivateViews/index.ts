// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DnsPrivateView,
  DnsPrivateViewListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  DatabaseContext as Client,
  DnsPrivateViewsGet200Response,
  DnsPrivateViewsGetDefaultResponse,
  DnsPrivateViewsListByLocation200Response,
  DnsPrivateViewsListByLocationDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DnsPrivateViewsGetOptionalParams,
  DnsPrivateViewsListByLocationOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  location: string,
  dnsprivateviewocid: string,
  options: DnsPrivateViewsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DnsPrivateViewsGet200Response | DnsPrivateViewsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateViews/{dnsprivateviewocid}",
      subscriptionId,
      location,
      dnsprivateviewocid,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: DnsPrivateViewsGet200Response | DnsPrivateViewsGetDefaultResponse,
): Promise<DnsPrivateView> {
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
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          ocid: result.body.properties?.["ocid"],
          displayName: result.body.properties?.["displayName"],
          isProtected: result.body.properties?.["isProtected"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          self: result.body.properties?.["self"],
          timeCreated: new Date(result.body.properties?.["timeCreated"]),
          timeUpdated: new Date(result.body.properties?.["timeUpdated"]),
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a DnsPrivateView */
export async function get(
  context: Client,
  subscriptionId: string,
  location: string,
  dnsprivateviewocid: string,
  options: DnsPrivateViewsGetOptionalParams = { requestOptions: {} },
): Promise<DnsPrivateView> {
  const result = await _getSend(
    context,
    subscriptionId,
    location,
    dnsprivateviewocid,
    options,
  );
  return _getDeserialize(result);
}

export function _listByLocationSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: DnsPrivateViewsListByLocationOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DnsPrivateViewsListByLocation200Response
  | DnsPrivateViewsListByLocationDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateViews",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByLocationDeserialize(
  result:
    | DnsPrivateViewsListByLocation200Response
    | DnsPrivateViewsListByLocationDefaultResponse,
): Promise<DnsPrivateViewListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      id: p["id"],
      name: p["name"],
      type: p["type"],
      systemData: !p.systemData
        ? undefined
        : {
            createdBy: p.systemData?.["createdBy"],
            createdByType: p.systemData?.["createdByType"],
            createdAt:
              p.systemData?.["createdAt"] !== undefined
                ? new Date(p.systemData?.["createdAt"])
                : undefined,
            lastModifiedBy: p.systemData?.["lastModifiedBy"],
            lastModifiedByType: p.systemData?.["lastModifiedByType"],
            lastModifiedAt:
              p.systemData?.["lastModifiedAt"] !== undefined
                ? new Date(p.systemData?.["lastModifiedAt"])
                : undefined,
          },
      properties: !p.properties
        ? undefined
        : {
            ocid: p.properties?.["ocid"],
            displayName: p.properties?.["displayName"],
            isProtected: p.properties?.["isProtected"],
            lifecycleState: p.properties?.["lifecycleState"],
            self: p.properties?.["self"],
            timeCreated: new Date(p.properties?.["timeCreated"]),
            timeUpdated: new Date(p.properties?.["timeUpdated"]),
            provisioningState: p.properties?.["provisioningState"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List DnsPrivateView resources by Location */
export function listByLocation(
  context: Client,
  subscriptionId: string,
  location: string,
  options: DnsPrivateViewsListByLocationOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DnsPrivateView> {
  return buildPagedAsyncIterator(
    context,
    () => _listByLocationSend(context, subscriptionId, location, options),
    _listByLocationDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

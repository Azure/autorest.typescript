// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DnsPrivateZone,
  DnsPrivateZoneListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  DatabaseContext as Client,
  DnsPrivateZonesGet200Response,
  DnsPrivateZonesGetDefaultResponse,
  DnsPrivateZonesListByLocation200Response,
  DnsPrivateZonesListByLocationDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DnsPrivateZonesGetOptionalParams,
  DnsPrivateZonesListByLocationOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  location: string,
  dnsprivatezonename: string,
  options: DnsPrivateZonesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DnsPrivateZonesGet200Response | DnsPrivateZonesGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateZones/{dnsprivatezonename}",
      subscriptionId,
      location,
      dnsprivatezonename,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: DnsPrivateZonesGet200Response | DnsPrivateZonesGetDefaultResponse,
): Promise<DnsPrivateZone> {
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
          isProtected: result.body.properties?.["isProtected"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          self: result.body.properties?.["self"],
          serial: result.body.properties?.["serial"],
          version: result.body.properties?.["version"],
          viewId: result.body.properties?.["viewId"],
          zoneType: result.body.properties?.["zoneType"],
          timeCreated: new Date(result.body.properties?.["timeCreated"]),
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a DnsPrivateZone */
export async function get(
  context: Client,
  subscriptionId: string,
  location: string,
  dnsprivatezonename: string,
  options: DnsPrivateZonesGetOptionalParams = { requestOptions: {} },
): Promise<DnsPrivateZone> {
  const result = await _getSend(
    context,
    subscriptionId,
    location,
    dnsprivatezonename,
    options,
  );
  return _getDeserialize(result);
}

export function _listByLocationSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: DnsPrivateZonesListByLocationOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DnsPrivateZonesListByLocation200Response
  | DnsPrivateZonesListByLocationDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateZones",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByLocationDeserialize(
  result:
    | DnsPrivateZonesListByLocation200Response
    | DnsPrivateZonesListByLocationDefaultResponse,
): Promise<DnsPrivateZoneListResult> {
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
            isProtected: p.properties?.["isProtected"],
            lifecycleState: p.properties?.["lifecycleState"],
            self: p.properties?.["self"],
            serial: p.properties?.["serial"],
            version: p.properties?.["version"],
            viewId: p.properties?.["viewId"],
            zoneType: p.properties?.["zoneType"],
            timeCreated: new Date(p.properties?.["timeCreated"]),
            provisioningState: p.properties?.["provisioningState"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List DnsPrivateZone resources by Location */
export function listByLocation(
  context: Client,
  subscriptionId: string,
  location: string,
  options: DnsPrivateZonesListByLocationOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DnsPrivateZone> {
  return buildPagedAsyncIterator(
    context,
    () => _listByLocationSend(context, subscriptionId, location, options),
    _listByLocationDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SystemVersion, SystemVersionListResult } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  DatabaseContext as Client,
  SystemVersionsGet200Response,
  SystemVersionsGetDefaultResponse,
  SystemVersionsListByLocation200Response,
  SystemVersionsListByLocationDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  SystemVersionsGetOptionalParams,
  SystemVersionsListByLocationOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  location: string,
  systemversionname: string,
  options: SystemVersionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  SystemVersionsGet200Response | SystemVersionsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/systemVersions/{systemversionname}",
      subscriptionId,
      location,
      systemversionname,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: SystemVersionsGet200Response | SystemVersionsGetDefaultResponse,
): Promise<SystemVersion> {
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
      : { systemVersion: result.body.properties?.["systemVersion"] },
  };
}

/** Get a SystemVersion */
export async function get(
  context: Client,
  subscriptionId: string,
  location: string,
  systemversionname: string,
  options: SystemVersionsGetOptionalParams = { requestOptions: {} },
): Promise<SystemVersion> {
  const result = await _getSend(
    context,
    subscriptionId,
    location,
    systemversionname,
    options,
  );
  return _getDeserialize(result);
}

export function _listByLocationSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: SystemVersionsListByLocationOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | SystemVersionsListByLocation200Response
  | SystemVersionsListByLocationDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/systemVersions",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByLocationDeserialize(
  result:
    | SystemVersionsListByLocation200Response
    | SystemVersionsListByLocationDefaultResponse,
): Promise<SystemVersionListResult> {
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
        : { systemVersion: p.properties?.["systemVersion"] },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List SystemVersion resources by Location */
export function listByLocation(
  context: Client,
  subscriptionId: string,
  location: string,
  options: SystemVersionsListByLocationOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<SystemVersion> {
  return buildPagedAsyncIterator(
    context,
    () => _listByLocationSend(context, subscriptionId, location, options),
    _listByLocationDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

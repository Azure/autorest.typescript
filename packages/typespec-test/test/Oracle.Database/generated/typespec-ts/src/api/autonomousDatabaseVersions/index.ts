// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AutonomousDbVersion,
  AutonomousDbVersionListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  DatabaseContext as Client,
  AutonomousDatabaseVersionsGet200Response,
  AutonomousDatabaseVersionsGetDefaultResponse,
  AutonomousDatabaseVersionsListByLocation200Response,
  AutonomousDatabaseVersionsListByLocationDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  AutonomousDatabaseVersionsGetOptionalParams,
  AutonomousDatabaseVersionsListByLocationOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  location: string,
  autonomousdbversionsname: string,
  options: AutonomousDatabaseVersionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AutonomousDatabaseVersionsGet200Response
  | AutonomousDatabaseVersionsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDbVersions/{autonomousdbversionsname}",
      subscriptionId,
      location,
      autonomousdbversionsname,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | AutonomousDatabaseVersionsGet200Response
    | AutonomousDatabaseVersionsGetDefaultResponse,
): Promise<AutonomousDbVersion> {
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
          version: result.body.properties?.["version"],
          dbWorkload: result.body.properties?.["dbWorkload"],
          isDefaultForFree: result.body.properties?.["isDefaultForFree"],
          isDefaultForPaid: result.body.properties?.["isDefaultForPaid"],
          isFreeTierEnabled: result.body.properties?.["isFreeTierEnabled"],
          isPaidEnabled: result.body.properties?.["isPaidEnabled"],
        },
  };
}

/** Get a AutonomousDbVersion */
export async function get(
  context: Client,
  subscriptionId: string,
  location: string,
  autonomousdbversionsname: string,
  options: AutonomousDatabaseVersionsGetOptionalParams = { requestOptions: {} },
): Promise<AutonomousDbVersion> {
  const result = await _getSend(
    context,
    subscriptionId,
    location,
    autonomousdbversionsname,
    options,
  );
  return _getDeserialize(result);
}

export function _listByLocationSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: AutonomousDatabaseVersionsListByLocationOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | AutonomousDatabaseVersionsListByLocation200Response
  | AutonomousDatabaseVersionsListByLocationDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDbVersions",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByLocationDeserialize(
  result:
    | AutonomousDatabaseVersionsListByLocation200Response
    | AutonomousDatabaseVersionsListByLocationDefaultResponse,
): Promise<AutonomousDbVersionListResult> {
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
            version: p.properties?.["version"],
            dbWorkload: p.properties?.["dbWorkload"],
            isDefaultForFree: p.properties?.["isDefaultForFree"],
            isDefaultForPaid: p.properties?.["isDefaultForPaid"],
            isFreeTierEnabled: p.properties?.["isFreeTierEnabled"],
            isPaidEnabled: p.properties?.["isPaidEnabled"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List AutonomousDbVersion resources by Location */
export function listByLocation(
  context: Client,
  subscriptionId: string,
  location: string,
  options: AutonomousDatabaseVersionsListByLocationOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AutonomousDbVersion> {
  return buildPagedAsyncIterator(
    context,
    () => _listByLocationSend(context, subscriptionId, location, options),
    _listByLocationDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

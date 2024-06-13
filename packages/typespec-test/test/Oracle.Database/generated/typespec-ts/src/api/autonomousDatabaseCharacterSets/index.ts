// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AutonomousDatabaseCharacterSet,
  AutonomousDatabaseCharacterSetListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  DatabaseContext as Client,
  AutonomousDatabaseCharacterSetsGet200Response,
  AutonomousDatabaseCharacterSetsGetDefaultResponse,
  AutonomousDatabaseCharacterSetsListByLocation200Response,
  AutonomousDatabaseCharacterSetsListByLocationDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  AutonomousDatabaseCharacterSetsGetOptionalParams,
  AutonomousDatabaseCharacterSetsListByLocationOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  location: string,
  adbscharsetname: string,
  options: AutonomousDatabaseCharacterSetsGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | AutonomousDatabaseCharacterSetsGet200Response
  | AutonomousDatabaseCharacterSetsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDatabaseCharacterSets/{adbscharsetname}",
      subscriptionId,
      location,
      adbscharsetname,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | AutonomousDatabaseCharacterSetsGet200Response
    | AutonomousDatabaseCharacterSetsGetDefaultResponse,
): Promise<AutonomousDatabaseCharacterSet> {
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
      : { characterSet: result.body.properties?.["characterSet"] },
  };
}

/** Get a AutonomousDatabaseCharacterSet */
export async function get(
  context: Client,
  subscriptionId: string,
  location: string,
  adbscharsetname: string,
  options: AutonomousDatabaseCharacterSetsGetOptionalParams = {
    requestOptions: {},
  },
): Promise<AutonomousDatabaseCharacterSet> {
  const result = await _getSend(
    context,
    subscriptionId,
    location,
    adbscharsetname,
    options,
  );
  return _getDeserialize(result);
}

export function _listByLocationSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: AutonomousDatabaseCharacterSetsListByLocationOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | AutonomousDatabaseCharacterSetsListByLocation200Response
  | AutonomousDatabaseCharacterSetsListByLocationDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDatabaseCharacterSets",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByLocationDeserialize(
  result:
    | AutonomousDatabaseCharacterSetsListByLocation200Response
    | AutonomousDatabaseCharacterSetsListByLocationDefaultResponse,
): Promise<AutonomousDatabaseCharacterSetListResult> {
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
        : { characterSet: p.properties?.["characterSet"] },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List AutonomousDatabaseCharacterSet resources by Location */
export function listByLocation(
  context: Client,
  subscriptionId: string,
  location: string,
  options: AutonomousDatabaseCharacterSetsListByLocationOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AutonomousDatabaseCharacterSet> {
  return buildPagedAsyncIterator(
    context,
    () => _listByLocationSend(context, subscriptionId, location, options),
    _listByLocationDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

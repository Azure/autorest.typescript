// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AutonomousDatabaseBackup,
  AutonomousDatabaseBackupUpdate,
  AutonomousDatabaseBackupListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  DatabaseContext as Client,
  AutonomousDatabaseBackupsCreateOrUpdate200Response,
  AutonomousDatabaseBackupsCreateOrUpdate201Response,
  AutonomousDatabaseBackupsCreateOrUpdateDefaultResponse,
  AutonomousDatabaseBackupsCreateOrUpdateLogicalResponse,
  AutonomousDatabaseBackupsDelete202Response,
  AutonomousDatabaseBackupsDelete204Response,
  AutonomousDatabaseBackupsDeleteDefaultResponse,
  AutonomousDatabaseBackupsDeleteLogicalResponse,
  AutonomousDatabaseBackupsGet200Response,
  AutonomousDatabaseBackupsGetDefaultResponse,
  AutonomousDatabaseBackupsListByAutonomousDatabase200Response,
  AutonomousDatabaseBackupsListByAutonomousDatabaseDefaultResponse,
  AutonomousDatabaseBackupsUpdate200Response,
  AutonomousDatabaseBackupsUpdate202Response,
  AutonomousDatabaseBackupsUpdateDefaultResponse,
  AutonomousDatabaseBackupsUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  AutonomousDatabaseBackupsCreateOrUpdateOptionalParams,
  AutonomousDatabaseBackupsGetOptionalParams,
  AutonomousDatabaseBackupsDeleteOptionalParams,
  AutonomousDatabaseBackupsUpdateOptionalParams,
  AutonomousDatabaseBackupsListByAutonomousDatabaseOptionalParams,
} from "../../models/options.js";

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  adbbackupid: string,
  resource: AutonomousDatabaseBackup,
  options: AutonomousDatabaseBackupsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | AutonomousDatabaseBackupsCreateOrUpdate200Response
  | AutonomousDatabaseBackupsCreateOrUpdate201Response
  | AutonomousDatabaseBackupsCreateOrUpdateDefaultResponse
  | AutonomousDatabaseBackupsCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups/{adbbackupid}",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
      adbbackupid,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? undefined
          : {
              displayName: resource.properties?.["displayName"],
              retentionPeriodInDays:
                resource.properties?.["retentionPeriodInDays"],
            },
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | AutonomousDatabaseBackupsCreateOrUpdate200Response
    | AutonomousDatabaseBackupsCreateOrUpdate201Response
    | AutonomousDatabaseBackupsCreateOrUpdateDefaultResponse
    | AutonomousDatabaseBackupsCreateOrUpdateLogicalResponse,
): Promise<AutonomousDatabaseBackup> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as AutonomousDatabaseBackupsCreateOrUpdateLogicalResponse;
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
          autonomousDatabaseOcid:
            result.body.properties?.["autonomousDatabaseOcid"],
          databaseSizeInTbs: result.body.properties?.["databaseSizeInTbs"],
          dbVersion: result.body.properties?.["dbVersion"],
          displayName: result.body.properties?.["displayName"],
          ocid: result.body.properties?.["ocid"],
          isAutomatic: result.body.properties?.["isAutomatic"],
          isRestorable: result.body.properties?.["isRestorable"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          retentionPeriodInDays:
            result.body.properties?.["retentionPeriodInDays"],
          sizeInTbs: result.body.properties?.["sizeInTbs"],
          timeAvailableTil:
            result.body.properties?.["timeAvailableTil"] !== undefined
              ? new Date(result.body.properties?.["timeAvailableTil"])
              : undefined,
          timeStarted: result.body.properties?.["timeStarted"],
          timeEnded: result.body.properties?.["timeEnded"],
          backupType: result.body.properties?.["backupType"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a AutonomousDatabaseBackup */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  adbbackupid: string,
  resource: AutonomousDatabaseBackup,
  options: AutonomousDatabaseBackupsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<AutonomousDatabaseBackup>,
  AutonomousDatabaseBackup
> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        adbbackupid,
        resource,
        options,
      ),
  }) as PollerLike<
    OperationState<AutonomousDatabaseBackup>,
    AutonomousDatabaseBackup
  >;
}

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  adbbackupid: string,
  options: AutonomousDatabaseBackupsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AutonomousDatabaseBackupsGet200Response
  | AutonomousDatabaseBackupsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups/{adbbackupid}",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
      adbbackupid,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | AutonomousDatabaseBackupsGet200Response
    | AutonomousDatabaseBackupsGetDefaultResponse,
): Promise<AutonomousDatabaseBackup> {
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
          autonomousDatabaseOcid:
            result.body.properties?.["autonomousDatabaseOcid"],
          databaseSizeInTbs: result.body.properties?.["databaseSizeInTbs"],
          dbVersion: result.body.properties?.["dbVersion"],
          displayName: result.body.properties?.["displayName"],
          ocid: result.body.properties?.["ocid"],
          isAutomatic: result.body.properties?.["isAutomatic"],
          isRestorable: result.body.properties?.["isRestorable"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          retentionPeriodInDays:
            result.body.properties?.["retentionPeriodInDays"],
          sizeInTbs: result.body.properties?.["sizeInTbs"],
          timeAvailableTil:
            result.body.properties?.["timeAvailableTil"] !== undefined
              ? new Date(result.body.properties?.["timeAvailableTil"])
              : undefined,
          timeStarted: result.body.properties?.["timeStarted"],
          timeEnded: result.body.properties?.["timeEnded"],
          backupType: result.body.properties?.["backupType"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a AutonomousDatabaseBackup */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  adbbackupid: string,
  options: AutonomousDatabaseBackupsGetOptionalParams = { requestOptions: {} },
): Promise<AutonomousDatabaseBackup> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    autonomousdatabasename,
    adbbackupid,
    options,
  );
  return _getDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  adbbackupid: string,
  options: AutonomousDatabaseBackupsDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | AutonomousDatabaseBackupsDelete202Response
  | AutonomousDatabaseBackupsDelete204Response
  | AutonomousDatabaseBackupsDeleteDefaultResponse
  | AutonomousDatabaseBackupsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups/{adbbackupid}",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
      adbbackupid,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | AutonomousDatabaseBackupsDelete202Response
    | AutonomousDatabaseBackupsDelete204Response
    | AutonomousDatabaseBackupsDeleteDefaultResponse
    | AutonomousDatabaseBackupsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as AutonomousDatabaseBackupsDeleteLogicalResponse;
  return;
}

/** Delete a AutonomousDatabaseBackup */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  adbbackupid: string,
  options: AutonomousDatabaseBackupsDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        adbbackupid,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  adbbackupid: string,
  properties: AutonomousDatabaseBackupUpdate,
  options: AutonomousDatabaseBackupsUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | AutonomousDatabaseBackupsUpdate200Response
  | AutonomousDatabaseBackupsUpdate202Response
  | AutonomousDatabaseBackupsUpdateDefaultResponse
  | AutonomousDatabaseBackupsUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups/{adbbackupid}",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
      adbbackupid,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !properties.properties
          ? undefined
          : {
              retentionPeriodInDays:
                properties.properties?.["retentionPeriodInDays"],
            },
      },
    });
}

export async function _updateDeserialize(
  result:
    | AutonomousDatabaseBackupsUpdate200Response
    | AutonomousDatabaseBackupsUpdate202Response
    | AutonomousDatabaseBackupsUpdateDefaultResponse
    | AutonomousDatabaseBackupsUpdateLogicalResponse,
): Promise<AutonomousDatabaseBackup> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as AutonomousDatabaseBackupsUpdateLogicalResponse;
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
          autonomousDatabaseOcid:
            result.body.properties?.["autonomousDatabaseOcid"],
          databaseSizeInTbs: result.body.properties?.["databaseSizeInTbs"],
          dbVersion: result.body.properties?.["dbVersion"],
          displayName: result.body.properties?.["displayName"],
          ocid: result.body.properties?.["ocid"],
          isAutomatic: result.body.properties?.["isAutomatic"],
          isRestorable: result.body.properties?.["isRestorable"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          retentionPeriodInDays:
            result.body.properties?.["retentionPeriodInDays"],
          sizeInTbs: result.body.properties?.["sizeInTbs"],
          timeAvailableTil:
            result.body.properties?.["timeAvailableTil"] !== undefined
              ? new Date(result.body.properties?.["timeAvailableTil"])
              : undefined,
          timeStarted: result.body.properties?.["timeStarted"],
          timeEnded: result.body.properties?.["timeEnded"],
          backupType: result.body.properties?.["backupType"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Update a AutonomousDatabaseBackup */
export function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  adbbackupid: string,
  properties: AutonomousDatabaseBackupUpdate,
  options: AutonomousDatabaseBackupsUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<AutonomousDatabaseBackup>,
  AutonomousDatabaseBackup
> {
  return getLongRunningPoller(context, _updateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        adbbackupid,
        properties,
        options,
      ),
  }) as PollerLike<
    OperationState<AutonomousDatabaseBackup>,
    AutonomousDatabaseBackup
  >;
}

export function _listByAutonomousDatabaseSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabaseBackupsListByAutonomousDatabaseOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | AutonomousDatabaseBackupsListByAutonomousDatabase200Response
  | AutonomousDatabaseBackupsListByAutonomousDatabaseDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByAutonomousDatabaseDeserialize(
  result:
    | AutonomousDatabaseBackupsListByAutonomousDatabase200Response
    | AutonomousDatabaseBackupsListByAutonomousDatabaseDefaultResponse,
): Promise<AutonomousDatabaseBackupListResult> {
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
            autonomousDatabaseOcid: p.properties?.["autonomousDatabaseOcid"],
            databaseSizeInTbs: p.properties?.["databaseSizeInTbs"],
            dbVersion: p.properties?.["dbVersion"],
            displayName: p.properties?.["displayName"],
            ocid: p.properties?.["ocid"],
            isAutomatic: p.properties?.["isAutomatic"],
            isRestorable: p.properties?.["isRestorable"],
            lifecycleDetails: p.properties?.["lifecycleDetails"],
            lifecycleState: p.properties?.["lifecycleState"],
            retentionPeriodInDays: p.properties?.["retentionPeriodInDays"],
            sizeInTbs: p.properties?.["sizeInTbs"],
            timeAvailableTil:
              p.properties?.["timeAvailableTil"] !== undefined
                ? new Date(p.properties?.["timeAvailableTil"])
                : undefined,
            timeStarted: p.properties?.["timeStarted"],
            timeEnded: p.properties?.["timeEnded"],
            backupType: p.properties?.["backupType"],
            provisioningState: p.properties?.["provisioningState"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List AutonomousDatabaseBackup resources by AutonomousDatabase */
export function listByAutonomousDatabase(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabaseBackupsListByAutonomousDatabaseOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AutonomousDatabaseBackup> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByAutonomousDatabaseSend(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        options,
      ),
    _listByAutonomousDatabaseDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

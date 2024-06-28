// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "./pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  Pool,
  Schedule,
  DevBox,
  OperationState,
  RemoteConnection,
  DevBoxAction,
  DevBoxActionDelayResult,
  _ErrorResponseDevBoxActionPage,
  _PagedDevBox,
  _PagedDevBoxAction,
  _PagedPool,
  _PagedSchedule,
} from "../models/models.js";
import { PagedAsyncIterableIterator } from "../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "./pagingHelpers.js";
import {
  isUnexpected,
  DevCenterServiceContext as Client,
  DevBoxesCreateDevBox200Response,
  DevBoxesCreateDevBox201Response,
  DevBoxesCreateDevBoxDefaultResponse,
  DevBoxesCreateDevBoxLogicalResponse,
  DevBoxesDelayAction200Response,
  DevBoxesDelayActionDefaultResponse,
  DevBoxesDelayActions200Response,
  DevBoxesDelayActionsDefaultResponse,
  DevBoxesDeleteDevBox202Response,
  DevBoxesDeleteDevBox204Response,
  DevBoxesDeleteDevBoxDefaultResponse,
  DevBoxesDeleteDevBoxLogicalResponse,
  DevBoxesGetAction200Response,
  DevBoxesGetActionDefaultResponse,
  DevBoxesGetDevBoxByUser200Response,
  DevBoxesGetDevBoxByUserDefaultResponse,
  DevBoxesGetPool200Response,
  DevBoxesGetPoolDefaultResponse,
  DevBoxesGetRemoteConnection200Response,
  DevBoxesGetRemoteConnectionDefaultResponse,
  DevBoxesGetScheduleByPool200Response,
  DevBoxesGetScheduleByPoolDefaultResponse,
  DevBoxesListActions200Response,
  DevBoxesListActionsDefaultResponse,
  DevBoxesListAllDevBoxes200Response,
  DevBoxesListAllDevBoxesByUser200Response,
  DevBoxesListAllDevBoxesByUserDefaultResponse,
  DevBoxesListAllDevBoxesDefaultResponse,
  DevBoxesListDevBoxesByUser200Response,
  DevBoxesListDevBoxesByUserDefaultResponse,
  DevBoxesListPools200Response,
  DevBoxesListPoolsDefaultResponse,
  DevBoxesListSchedulesByPool200Response,
  DevBoxesListSchedulesByPoolDefaultResponse,
  DevBoxesRestartDevBox202Response,
  DevBoxesRestartDevBoxDefaultResponse,
  DevBoxesRestartDevBoxLogicalResponse,
  DevBoxesSkipAction204Response,
  DevBoxesSkipActionDefaultResponse,
  DevBoxesStartDevBox202Response,
  DevBoxesStartDevBoxDefaultResponse,
  DevBoxesStartDevBoxLogicalResponse,
  DevBoxesStopDevBox202Response,
  DevBoxesStopDevBoxDefaultResponse,
  DevBoxesStopDevBoxLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ListPoolsOptionalParams,
  GetPoolOptionalParams,
  ListSchedulesOptionalParams,
  GetScheduleOptionalParams,
  ListAllDevBoxesOptionalParams,
  ListAllDevBoxesByUserOptionalParams,
  ListDevBoxesOptionalParams,
  GetDevBoxOptionalParams,
  CreateDevBoxOptionalParams,
  DeleteDevBoxOptionalParams,
  StartDevBoxOptionalParams,
  StopDevBoxOptionalParams,
  RestartDevBoxOptionalParams,
  GetRemoteConnectionOptionalParams,
  ListDevBoxActionsOptionalParams,
  GetDevBoxActionOptionalParams,
  SkipActionOptionalParams,
  DelayActionOptionalParams,
  DelayAllActionsOptionalParams,
} from "../models/options.js";

export function _listPoolsSend(
  context: Client,
  projectName: string,
  options: ListPoolsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DevBoxesListPools200Response | DevBoxesListPoolsDefaultResponse
> {
  return context
    .path("/projects/{projectName}/pools", projectName)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listPoolsDeserialize(
  result: DevBoxesListPools200Response | DevBoxesListPoolsDefaultResponse,
): Promise<_PagedPool> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      uri: p["uri"],
      name: p["name"],
      location: p["location"],
      osType: p["osType"],
      hardwareProfile: !p.hardwareProfile
        ? undefined
        : {
            skuName: p.hardwareProfile?.["skuName"],
            vCPUs: p.hardwareProfile?.["vCPUs"],
            memoryGB: p.hardwareProfile?.["memoryGB"],
          },
      hibernateSupport: p["hibernateSupport"],
      storageProfile: !p.storageProfile
        ? undefined
        : {
            osDisk: !p.storageProfile?.osDisk
              ? undefined
              : { diskSizeGB: p.storageProfile?.osDisk?.["diskSizeGB"] },
          },
      imageReference: !p.imageReference
        ? undefined
        : {
            name: p.imageReference?.["name"],
            version: p.imageReference?.["version"],
            operatingSystem: p.imageReference?.["operatingSystem"],
            osBuildNumber: p.imageReference?.["osBuildNumber"],
            publishedDate:
              p.imageReference?.["publishedDate"] !== undefined
                ? new Date(p.imageReference?.["publishedDate"])
                : undefined,
          },
      localAdministrator: p["localAdministrator"],
      stopOnDisconnect: !p.stopOnDisconnect
        ? undefined
        : {
            status: p.stopOnDisconnect?.["status"],
            gracePeriodMinutes: p.stopOnDisconnect?.["gracePeriodMinutes"],
          },
      healthStatus: p["healthStatus"],
      displayName: p["displayName"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists available pools. */
export function listPools(
  context: Client,
  projectName: string,
  options: ListPoolsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Pool> {
  return buildPagedAsyncIterator(
    context,
    () => _listPoolsSend(context, projectName, options),
    _listPoolsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getPoolSend(
  context: Client,
  projectName: string,
  poolName: string,
  options: GetPoolOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DevBoxesGetPool200Response | DevBoxesGetPoolDefaultResponse
> {
  return context
    .path("/projects/{projectName}/pools/{poolName}", projectName, poolName)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getPoolDeserialize(
  result: DevBoxesGetPool200Response | DevBoxesGetPoolDefaultResponse,
): Promise<Pool> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    uri: result.body["uri"],
    name: result.body["name"],
    location: result.body["location"],
    osType: result.body["osType"],
    hardwareProfile: !result.body.hardwareProfile
      ? undefined
      : {
          skuName: result.body.hardwareProfile?.["skuName"],
          vCPUs: result.body.hardwareProfile?.["vCPUs"],
          memoryGB: result.body.hardwareProfile?.["memoryGB"],
        },
    hibernateSupport: result.body["hibernateSupport"],
    storageProfile: !result.body.storageProfile
      ? undefined
      : {
          osDisk: !result.body.storageProfile?.osDisk
            ? undefined
            : {
                diskSizeGB: result.body.storageProfile?.osDisk?.["diskSizeGB"],
              },
        },
    imageReference: !result.body.imageReference
      ? undefined
      : {
          name: result.body.imageReference?.["name"],
          version: result.body.imageReference?.["version"],
          operatingSystem: result.body.imageReference?.["operatingSystem"],
          osBuildNumber: result.body.imageReference?.["osBuildNumber"],
          publishedDate:
            result.body.imageReference?.["publishedDate"] !== undefined
              ? new Date(result.body.imageReference?.["publishedDate"])
              : undefined,
        },
    localAdministrator: result.body["localAdministrator"],
    stopOnDisconnect: !result.body.stopOnDisconnect
      ? undefined
      : {
          status: result.body.stopOnDisconnect?.["status"],
          gracePeriodMinutes:
            result.body.stopOnDisconnect?.["gracePeriodMinutes"],
        },
    healthStatus: result.body["healthStatus"],
    displayName: result.body["displayName"],
  };
}

/** Gets a pool. */
export async function getPool(
  context: Client,
  projectName: string,
  poolName: string,
  options: GetPoolOptionalParams = { requestOptions: {} },
): Promise<Pool> {
  const result = await _getPoolSend(context, projectName, poolName, options);
  return _getPoolDeserialize(result);
}

export function _listSchedulesSend(
  context: Client,
  projectName: string,
  poolName: string,
  options: ListSchedulesOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DevBoxesListSchedulesByPool200Response
  | DevBoxesListSchedulesByPoolDefaultResponse
> {
  return context
    .path(
      "/projects/{projectName}/pools/{poolName}/schedules",
      projectName,
      poolName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listSchedulesDeserialize(
  result:
    | DevBoxesListSchedulesByPool200Response
    | DevBoxesListSchedulesByPoolDefaultResponse,
): Promise<_PagedSchedule> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      uri: p["uri"],
      name: p["name"],
      sourceUri: p["sourceUri"],
      sourceType: p["sourceType"],
      type: p["type"],
      frequency: p["frequency"],
      time: p["time"],
      timeZone: p["timeZone"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists all schedules within a pool that are configured by your project administrator. */
export function listSchedules(
  context: Client,
  projectName: string,
  poolName: string,
  options: ListSchedulesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Schedule> {
  return buildPagedAsyncIterator(
    context,
    () => _listSchedulesSend(context, projectName, poolName, options),
    _listSchedulesDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getScheduleSend(
  context: Client,
  projectName: string,
  poolName: string,
  scheduleName: string,
  options: GetScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DevBoxesGetScheduleByPool200Response
  | DevBoxesGetScheduleByPoolDefaultResponse
> {
  return context
    .path(
      "/projects/{projectName}/pools/{poolName}/schedules/{scheduleName}",
      projectName,
      poolName,
      scheduleName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getScheduleDeserialize(
  result:
    | DevBoxesGetScheduleByPool200Response
    | DevBoxesGetScheduleByPoolDefaultResponse,
): Promise<Schedule> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    uri: result.body["uri"],
    name: result.body["name"],
    sourceUri: result.body["sourceUri"],
    sourceType: result.body["sourceType"],
    type: result.body["type"],
    frequency: result.body["frequency"],
    time: result.body["time"],
    timeZone: result.body["timeZone"],
  };
}

/** Gets a schedule. */
export async function getSchedule(
  context: Client,
  projectName: string,
  poolName: string,
  scheduleName: string,
  options: GetScheduleOptionalParams = { requestOptions: {} },
): Promise<Schedule> {
  const result = await _getScheduleSend(
    context,
    projectName,
    poolName,
    scheduleName,
    options,
  );
  return _getScheduleDeserialize(result);
}

export function _listAllDevBoxesSend(
  context: Client,
  options: ListAllDevBoxesOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DevBoxesListAllDevBoxes200Response | DevBoxesListAllDevBoxesDefaultResponse
> {
  return context
    .path("/devboxes")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listAllDevBoxesDeserialize(
  result:
    | DevBoxesListAllDevBoxes200Response
    | DevBoxesListAllDevBoxesDefaultResponse,
): Promise<_PagedDevBox> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      uri: p["uri"],
      name: p["name"],
      projectName: p["projectName"],
      poolName: p["poolName"],
      hibernateSupport: p["hibernateSupport"],
      provisioningState: p["provisioningState"],
      actionState: p["actionState"],
      powerState: p["powerState"],
      uniqueId: p["uniqueId"],
      error: !p.error ? undefined : p.error,
      location: p["location"],
      osType: p["osType"],
      user: p["user"],
      hardwareProfile: !p.hardwareProfile
        ? undefined
        : {
            skuName: p.hardwareProfile?.["skuName"],
            vCPUs: p.hardwareProfile?.["vCPUs"],
            memoryGB: p.hardwareProfile?.["memoryGB"],
          },
      storageProfile: !p.storageProfile
        ? undefined
        : {
            osDisk: !p.storageProfile?.osDisk
              ? undefined
              : { diskSizeGB: p.storageProfile?.osDisk?.["diskSizeGB"] },
          },
      imageReference: !p.imageReference
        ? undefined
        : {
            name: p.imageReference?.["name"],
            version: p.imageReference?.["version"],
            operatingSystem: p.imageReference?.["operatingSystem"],
            osBuildNumber: p.imageReference?.["osBuildNumber"],
            publishedDate:
              p.imageReference?.["publishedDate"] !== undefined
                ? new Date(p.imageReference?.["publishedDate"])
                : undefined,
          },
      createdTime:
        p["createdTime"] !== undefined ? new Date(p["createdTime"]) : undefined,
      localAdministrator: p["localAdministrator"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists Dev Boxes that the caller has access to in the DevCenter. */
export function listAllDevBoxes(
  context: Client,
  options: ListAllDevBoxesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DevBox> {
  return buildPagedAsyncIterator(
    context,
    () => _listAllDevBoxesSend(context, options),
    _listAllDevBoxesDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listAllDevBoxesByUserSend(
  context: Client,
  userId: string,
  options: ListAllDevBoxesByUserOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DevBoxesListAllDevBoxesByUser200Response
  | DevBoxesListAllDevBoxesByUserDefaultResponse
> {
  return context
    .path("/users/{userId}/devboxes", userId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listAllDevBoxesByUserDeserialize(
  result:
    | DevBoxesListAllDevBoxesByUser200Response
    | DevBoxesListAllDevBoxesByUserDefaultResponse,
): Promise<_PagedDevBox> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      uri: p["uri"],
      name: p["name"],
      projectName: p["projectName"],
      poolName: p["poolName"],
      hibernateSupport: p["hibernateSupport"],
      provisioningState: p["provisioningState"],
      actionState: p["actionState"],
      powerState: p["powerState"],
      uniqueId: p["uniqueId"],
      error: !p.error ? undefined : p.error,
      location: p["location"],
      osType: p["osType"],
      user: p["user"],
      hardwareProfile: !p.hardwareProfile
        ? undefined
        : {
            skuName: p.hardwareProfile?.["skuName"],
            vCPUs: p.hardwareProfile?.["vCPUs"],
            memoryGB: p.hardwareProfile?.["memoryGB"],
          },
      storageProfile: !p.storageProfile
        ? undefined
        : {
            osDisk: !p.storageProfile?.osDisk
              ? undefined
              : { diskSizeGB: p.storageProfile?.osDisk?.["diskSizeGB"] },
          },
      imageReference: !p.imageReference
        ? undefined
        : {
            name: p.imageReference?.["name"],
            version: p.imageReference?.["version"],
            operatingSystem: p.imageReference?.["operatingSystem"],
            osBuildNumber: p.imageReference?.["osBuildNumber"],
            publishedDate:
              p.imageReference?.["publishedDate"] !== undefined
                ? new Date(p.imageReference?.["publishedDate"])
                : undefined,
          },
      createdTime:
        p["createdTime"] !== undefined ? new Date(p["createdTime"]) : undefined,
      localAdministrator: p["localAdministrator"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists Dev Boxes in the Dev Center for a particular user. */
export function listAllDevBoxesByUser(
  context: Client,
  userId: string,
  options: ListAllDevBoxesByUserOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DevBox> {
  return buildPagedAsyncIterator(
    context,
    () => _listAllDevBoxesByUserSend(context, userId, options),
    _listAllDevBoxesByUserDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listDevBoxesSend(
  context: Client,
  projectName: string,
  userId: string,
  options: ListDevBoxesOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DevBoxesListDevBoxesByUser200Response
  | DevBoxesListDevBoxesByUserDefaultResponse
> {
  return context
    .path(
      "/projects/{projectName}/users/{userId}/devboxes",
      projectName,
      userId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDevBoxesDeserialize(
  result:
    | DevBoxesListDevBoxesByUser200Response
    | DevBoxesListDevBoxesByUserDefaultResponse,
): Promise<_PagedDevBox> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      uri: p["uri"],
      name: p["name"],
      projectName: p["projectName"],
      poolName: p["poolName"],
      hibernateSupport: p["hibernateSupport"],
      provisioningState: p["provisioningState"],
      actionState: p["actionState"],
      powerState: p["powerState"],
      uniqueId: p["uniqueId"],
      error: !p.error ? undefined : p.error,
      location: p["location"],
      osType: p["osType"],
      user: p["user"],
      hardwareProfile: !p.hardwareProfile
        ? undefined
        : {
            skuName: p.hardwareProfile?.["skuName"],
            vCPUs: p.hardwareProfile?.["vCPUs"],
            memoryGB: p.hardwareProfile?.["memoryGB"],
          },
      storageProfile: !p.storageProfile
        ? undefined
        : {
            osDisk: !p.storageProfile?.osDisk
              ? undefined
              : { diskSizeGB: p.storageProfile?.osDisk?.["diskSizeGB"] },
          },
      imageReference: !p.imageReference
        ? undefined
        : {
            name: p.imageReference?.["name"],
            version: p.imageReference?.["version"],
            operatingSystem: p.imageReference?.["operatingSystem"],
            osBuildNumber: p.imageReference?.["osBuildNumber"],
            publishedDate:
              p.imageReference?.["publishedDate"] !== undefined
                ? new Date(p.imageReference?.["publishedDate"])
                : undefined,
          },
      createdTime:
        p["createdTime"] !== undefined ? new Date(p["createdTime"]) : undefined,
      localAdministrator: p["localAdministrator"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists Dev Boxes in the project for a particular user. */
export function listDevBoxes(
  context: Client,
  projectName: string,
  userId: string,
  options: ListDevBoxesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DevBox> {
  return buildPagedAsyncIterator(
    context,
    () => _listDevBoxesSend(context, projectName, userId, options),
    _listDevBoxesDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getDevBoxSend(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  options: GetDevBoxOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DevBoxesGetDevBoxByUser200Response | DevBoxesGetDevBoxByUserDefaultResponse
> {
  return context
    .path(
      "/projects/{projectName}/users/{userId}/devboxes/{devBoxName}",
      projectName,
      userId,
      devBoxName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDevBoxDeserialize(
  result:
    | DevBoxesGetDevBoxByUser200Response
    | DevBoxesGetDevBoxByUserDefaultResponse,
): Promise<DevBox> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    uri: result.body["uri"],
    name: result.body["name"],
    projectName: result.body["projectName"],
    poolName: result.body["poolName"],
    hibernateSupport: result.body["hibernateSupport"],
    provisioningState: result.body["provisioningState"],
    actionState: result.body["actionState"],
    powerState: result.body["powerState"],
    uniqueId: result.body["uniqueId"],
    error: !result.body.error ? undefined : result.body.error,
    location: result.body["location"],
    osType: result.body["osType"],
    user: result.body["user"],
    hardwareProfile: !result.body.hardwareProfile
      ? undefined
      : {
          skuName: result.body.hardwareProfile?.["skuName"],
          vCPUs: result.body.hardwareProfile?.["vCPUs"],
          memoryGB: result.body.hardwareProfile?.["memoryGB"],
        },
    storageProfile: !result.body.storageProfile
      ? undefined
      : {
          osDisk: !result.body.storageProfile?.osDisk
            ? undefined
            : {
                diskSizeGB: result.body.storageProfile?.osDisk?.["diskSizeGB"],
              },
        },
    imageReference: !result.body.imageReference
      ? undefined
      : {
          name: result.body.imageReference?.["name"],
          version: result.body.imageReference?.["version"],
          operatingSystem: result.body.imageReference?.["operatingSystem"],
          osBuildNumber: result.body.imageReference?.["osBuildNumber"],
          publishedDate:
            result.body.imageReference?.["publishedDate"] !== undefined
              ? new Date(result.body.imageReference?.["publishedDate"])
              : undefined,
        },
    createdTime:
      result.body["createdTime"] !== undefined
        ? new Date(result.body["createdTime"])
        : undefined,
    localAdministrator: result.body["localAdministrator"],
  };
}

/** Gets a Dev Box. */
export async function getDevBox(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  options: GetDevBoxOptionalParams = { requestOptions: {} },
): Promise<DevBox> {
  const result = await _getDevBoxSend(
    context,
    projectName,
    userId,
    devBoxName,
    options,
  );
  return _getDevBoxDeserialize(result);
}

export function _createDevBoxSend(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  body: DevBox,
  options: CreateDevBoxOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DevBoxesCreateDevBox200Response
  | DevBoxesCreateDevBox201Response
  | DevBoxesCreateDevBoxDefaultResponse
  | DevBoxesCreateDevBoxLogicalResponse
> {
  return context
    .path(
      "/projects/{projectName}/users/{userId}/devboxes/{devBoxName}",
      projectName,
      userId,
      devBoxName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        poolName: body["poolName"],
        localAdministrator: body["localAdministrator"],
      },
    });
}

export async function _createDevBoxDeserialize(
  result:
    | DevBoxesCreateDevBox200Response
    | DevBoxesCreateDevBox201Response
    | DevBoxesCreateDevBoxDefaultResponse
    | DevBoxesCreateDevBoxLogicalResponse,
): Promise<DevBox> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as DevBoxesCreateDevBoxLogicalResponse;
  return {
    uri: result.body["uri"],
    name: result.body["name"],
    projectName: result.body["projectName"],
    poolName: result.body["poolName"],
    hibernateSupport: result.body["hibernateSupport"],
    provisioningState: result.body["provisioningState"],
    actionState: result.body["actionState"],
    powerState: result.body["powerState"],
    uniqueId: result.body["uniqueId"],
    error: !result.body.error ? undefined : result.body.error,
    location: result.body["location"],
    osType: result.body["osType"],
    user: result.body["user"],
    hardwareProfile: !result.body.hardwareProfile
      ? undefined
      : {
          skuName: result.body.hardwareProfile?.["skuName"],
          vCPUs: result.body.hardwareProfile?.["vCPUs"],
          memoryGB: result.body.hardwareProfile?.["memoryGB"],
        },
    storageProfile: !result.body.storageProfile
      ? undefined
      : {
          osDisk: !result.body.storageProfile?.osDisk
            ? undefined
            : {
                diskSizeGB: result.body.storageProfile?.osDisk?.["diskSizeGB"],
              },
        },
    imageReference: !result.body.imageReference
      ? undefined
      : {
          name: result.body.imageReference?.["name"],
          version: result.body.imageReference?.["version"],
          operatingSystem: result.body.imageReference?.["operatingSystem"],
          osBuildNumber: result.body.imageReference?.["osBuildNumber"],
          publishedDate:
            result.body.imageReference?.["publishedDate"] !== undefined
              ? new Date(result.body.imageReference?.["publishedDate"])
              : undefined,
        },
    createdTime:
      result.body["createdTime"] !== undefined
        ? new Date(result.body["createdTime"])
        : undefined,
    localAdministrator: result.body["localAdministrator"],
  };
}

/** Creates or replaces a Dev Box. */
export function createDevBox(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  body: DevBox,
  options: CreateDevBoxOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DevBox>, DevBox> {
  return getLongRunningPoller(context, _createDevBoxDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createDevBoxSend(
        context,
        projectName,
        userId,
        devBoxName,
        body,
        options,
      ),
  }) as PollerLike<OperationState<DevBox>, DevBox>;
}

export function _deleteDevBoxSend(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  options: DeleteDevBoxOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DevBoxesDeleteDevBox202Response
  | DevBoxesDeleteDevBox204Response
  | DevBoxesDeleteDevBoxDefaultResponse
  | DevBoxesDeleteDevBoxLogicalResponse
> {
  return context
    .path(
      "/projects/{projectName}/users/{userId}/devboxes/{devBoxName}",
      projectName,
      userId,
      devBoxName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteDevBoxDeserialize(
  result:
    | DevBoxesDeleteDevBox202Response
    | DevBoxesDeleteDevBox204Response
    | DevBoxesDeleteDevBoxDefaultResponse
    | DevBoxesDeleteDevBoxLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as DevBoxesDeleteDevBoxLogicalResponse;
  return;
}

/** Deletes a Dev Box. */
export function deleteDevBox(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  options: DeleteDevBoxOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _deleteDevBoxDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deleteDevBoxSend(context, projectName, userId, devBoxName, options),
  }) as PollerLike<OperationState<void>, void>;
}

export function _startDevBoxSend(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  options: StartDevBoxOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DevBoxesStartDevBox202Response
  | DevBoxesStartDevBoxDefaultResponse
  | DevBoxesStartDevBoxLogicalResponse
> {
  return context
    .path(
      "/projects/{projectName}/users/{userId}/devboxes/{devBoxName}:start",
      projectName,
      userId,
      devBoxName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _startDevBoxDeserialize(
  result:
    | DevBoxesStartDevBox202Response
    | DevBoxesStartDevBoxDefaultResponse
    | DevBoxesStartDevBoxLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as DevBoxesStartDevBoxLogicalResponse;
  return;
}

/** Starts a Dev Box. */
export function startDevBox(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  options: StartDevBoxOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _startDevBoxDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _startDevBoxSend(context, projectName, userId, devBoxName, options),
  }) as PollerLike<OperationState<void>, void>;
}

export function _stopDevBoxSend(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  options: StopDevBoxOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DevBoxesStopDevBox202Response
  | DevBoxesStopDevBoxDefaultResponse
  | DevBoxesStopDevBoxLogicalResponse
> {
  return context
    .path(
      "/projects/{projectName}/users/{userId}/devboxes/{devBoxName}:stop",
      projectName,
      userId,
      devBoxName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { hibernate: options?.hibernate },
    });
}

export async function _stopDevBoxDeserialize(
  result:
    | DevBoxesStopDevBox202Response
    | DevBoxesStopDevBoxDefaultResponse
    | DevBoxesStopDevBoxLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as DevBoxesStopDevBoxLogicalResponse;
  return;
}

/** Stops a Dev Box. */
export function stopDevBox(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  options: StopDevBoxOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _stopDevBoxDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _stopDevBoxSend(context, projectName, userId, devBoxName, options),
  }) as PollerLike<OperationState<void>, void>;
}

export function _restartDevBoxSend(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  options: RestartDevBoxOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DevBoxesRestartDevBox202Response
  | DevBoxesRestartDevBoxDefaultResponse
  | DevBoxesRestartDevBoxLogicalResponse
> {
  return context
    .path(
      "/projects/{projectName}/users/{userId}/devboxes/{devBoxName}:restart",
      projectName,
      userId,
      devBoxName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _restartDevBoxDeserialize(
  result:
    | DevBoxesRestartDevBox202Response
    | DevBoxesRestartDevBoxDefaultResponse
    | DevBoxesRestartDevBoxLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as DevBoxesRestartDevBoxLogicalResponse;
  return;
}

/** Restarts a Dev Box. */
export function restartDevBox(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  options: RestartDevBoxOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _restartDevBoxDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _restartDevBoxSend(context, projectName, userId, devBoxName, options),
  }) as PollerLike<OperationState<void>, void>;
}

export function _getRemoteConnectionSend(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  options: GetRemoteConnectionOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DevBoxesGetRemoteConnection200Response
  | DevBoxesGetRemoteConnectionDefaultResponse
> {
  return context
    .path(
      "/projects/{projectName}/users/{userId}/devboxes/{devBoxName}/remoteConnection",
      projectName,
      userId,
      devBoxName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getRemoteConnectionDeserialize(
  result:
    | DevBoxesGetRemoteConnection200Response
    | DevBoxesGetRemoteConnectionDefaultResponse,
): Promise<RemoteConnection> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    webUrl: result.body["webUrl"],
    rdpConnectionUrl: result.body["rdpConnectionUrl"],
    cloudPcConnectionUrl: result.body["cloudPcConnectionUrl"],
  };
}

/** Gets RDP Connection info. */
export async function getRemoteConnection(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  options: GetRemoteConnectionOptionalParams = { requestOptions: {} },
): Promise<RemoteConnection> {
  const result = await _getRemoteConnectionSend(
    context,
    projectName,
    userId,
    devBoxName,
    options,
  );
  return _getRemoteConnectionDeserialize(result);
}

export function _listDevBoxActionsSend(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  options: ListDevBoxActionsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DevBoxesListActions200Response | DevBoxesListActionsDefaultResponse
> {
  return context
    .path(
      "/projects/{projectName}/users/{userId}/devboxes/{devBoxName}/actions",
      projectName,
      userId,
      devBoxName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDevBoxActionsDeserialize(
  result: DevBoxesListActions200Response | DevBoxesListActionsDefaultResponse,
): Promise<_PagedDevBoxAction> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      uri: p["uri"],
      name: p["name"],
      actionType: p["actionType"],
      sourceId: p["sourceId"],
      sourceUri: p["sourceUri"],
      sourceType: p["sourceType"],
      suspendedUntil:
        p["suspendedUntil"] !== undefined
          ? new Date(p["suspendedUntil"])
          : undefined,
      next: !p.next
        ? undefined
        : { scheduledTime: new Date(p.next?.["scheduledTime"]) },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists actions on a Dev Box. */
export function listDevBoxActions(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  options: ListDevBoxActionsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DevBoxAction> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listDevBoxActionsSend(context, projectName, userId, devBoxName, options),
    _listDevBoxActionsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getDevBoxActionSend(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  actionName: string,
  options: GetDevBoxActionOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DevBoxesGetAction200Response | DevBoxesGetActionDefaultResponse
> {
  return context
    .path(
      "/projects/{projectName}/users/{userId}/devboxes/{devBoxName}/actions/{actionName}",
      projectName,
      userId,
      devBoxName,
      actionName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDevBoxActionDeserialize(
  result: DevBoxesGetAction200Response | DevBoxesGetActionDefaultResponse,
): Promise<DevBoxAction> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    uri: result.body["uri"],
    name: result.body["name"],
    actionType: result.body["actionType"],
    sourceId: result.body["sourceId"],
    sourceUri: result.body["sourceUri"],
    sourceType: result.body["sourceType"],
    suspendedUntil:
      result.body["suspendedUntil"] !== undefined
        ? new Date(result.body["suspendedUntil"])
        : undefined,
    next: !result.body.next
      ? undefined
      : { scheduledTime: new Date(result.body.next?.["scheduledTime"]) },
  };
}

/** Gets an action. */
export async function getDevBoxAction(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  actionName: string,
  options: GetDevBoxActionOptionalParams = { requestOptions: {} },
): Promise<DevBoxAction> {
  const result = await _getDevBoxActionSend(
    context,
    projectName,
    userId,
    devBoxName,
    actionName,
    options,
  );
  return _getDevBoxActionDeserialize(result);
}

export function _skipActionSend(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  actionName: string,
  options: SkipActionOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DevBoxesSkipAction204Response | DevBoxesSkipActionDefaultResponse
> {
  return context
    .path(
      "/projects/{projectName}/users/{userId}/devboxes/{devBoxName}/actions/{actionName}:skip",
      projectName,
      userId,
      devBoxName,
      actionName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _skipActionDeserialize(
  result: DevBoxesSkipAction204Response | DevBoxesSkipActionDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Skips an occurrence of an action. */
export async function skipAction(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  actionName: string,
  options: SkipActionOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _skipActionSend(
    context,
    projectName,
    userId,
    devBoxName,
    actionName,
    options,
  );
  return _skipActionDeserialize(result);
}

export function _delayActionSend(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  actionName: string,
  delayUntil: Date,
  options: DelayActionOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DevBoxesDelayAction200Response | DevBoxesDelayActionDefaultResponse
> {
  return context
    .path(
      "/projects/{projectName}/users/{userId}/devboxes/{devBoxName}/actions/{actionName}:delay",
      projectName,
      userId,
      devBoxName,
      actionName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { until: delayUntil.toISOString() },
    });
}

export async function _delayActionDeserialize(
  result: DevBoxesDelayAction200Response | DevBoxesDelayActionDefaultResponse,
): Promise<DevBoxAction> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    uri: result.body["uri"],
    name: result.body["name"],
    actionType: result.body["actionType"],
    sourceId: result.body["sourceId"],
    sourceUri: result.body["sourceUri"],
    sourceType: result.body["sourceType"],
    suspendedUntil:
      result.body["suspendedUntil"] !== undefined
        ? new Date(result.body["suspendedUntil"])
        : undefined,
    next: !result.body.next
      ? undefined
      : { scheduledTime: new Date(result.body.next?.["scheduledTime"]) },
  };
}

/** Delays the occurrence of an action. */
export async function delayAction(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  actionName: string,
  delayUntil: Date,
  options: DelayActionOptionalParams = { requestOptions: {} },
): Promise<DevBoxAction> {
  const result = await _delayActionSend(
    context,
    projectName,
    userId,
    devBoxName,
    actionName,
    delayUntil,
    options,
  );
  return _delayActionDeserialize(result);
}

export function _delayAllActionsSend(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  delayUntil: Date,
  options: DelayAllActionsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DevBoxesDelayActions200Response | DevBoxesDelayActionsDefaultResponse
> {
  return context
    .path(
      "/projects/{projectName}/users/{userId}/devboxes/{devBoxName}/actions:delay",
      projectName,
      userId,
      devBoxName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { until: delayUntil.toISOString() },
    });
}

export async function _delayAllActionsDeserialize(
  result: DevBoxesDelayActions200Response | DevBoxesDelayActionsDefaultResponse,
): Promise<_ErrorResponseDevBoxActionPage> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      uri: p["uri"],
      name: p["name"],
      delayStatus: p["result"],
      action: !p.action
        ? undefined
        : {
            uri: p.action?.["uri"],
            name: p.action?.["name"],
            actionType: p.action?.["actionType"],
            sourceId: p.action?.["sourceId"],
            sourceUri: p.action?.["sourceUri"],
            sourceType: p.action?.["sourceType"],
            suspendedUntil:
              p.action?.["suspendedUntil"] !== undefined
                ? new Date(p.action?.["suspendedUntil"])
                : undefined,
            next: !p.action?.next
              ? undefined
              : { scheduledTime: new Date(p.action?.next?.["scheduledTime"]) },
          },
      error: !p.error ? undefined : p.error,
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Delays all actions. */
export function delayAllActions(
  context: Client,
  projectName: string,
  userId: string,
  devBoxName: string,
  delayUntil: Date,
  options: DelayAllActionsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DevBoxActionDelayResult> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _delayAllActionsSend(
        context,
        projectName,
        userId,
        devBoxName,
        delayUntil,
        options,
      ),
    _delayAllActionsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

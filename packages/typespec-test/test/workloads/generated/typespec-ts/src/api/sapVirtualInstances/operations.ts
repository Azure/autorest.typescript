// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  startRequestSerializer,
  OperationStatusResult,
  operationStatusResultDeserializer,
  stopRequestSerializer,
  SAPVirtualInstance,
  sapVirtualInstanceSerializer,
  sapVirtualInstanceDeserializer,
  UpdateSAPVirtualInstanceRequest,
  updateSAPVirtualInstanceRequestSerializer,
  _SAPVirtualInstanceListResult,
  _sapVirtualInstanceListResultDeserializer,
  SAPSizingRecommendationRequest,
  sapSizingRecommendationRequestSerializer,
  sapSizingRecommendationResultUnionDeserializer,
  SAPSizingRecommendationResultUnion,
  SAPSupportedSkusRequest,
  sapSupportedSkusRequestSerializer,
  SAPSupportedResourceSkusResult,
  sapSupportedResourceSkusResultDeserializer,
  SAPDiskConfigurationsRequest,
  sapDiskConfigurationsRequestSerializer,
  SAPDiskConfigurationsResult,
  sapDiskConfigurationsResultDeserializer,
  SAPAvailabilityZoneDetailsRequest,
  sapAvailabilityZoneDetailsRequestSerializer,
  SAPAvailabilityZoneDetailsResult,
  sapAvailabilityZoneDetailsResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  SAPVirtualInstancesGetAvailabilityZoneDetailsOptionalParams,
  SAPVirtualInstancesGetDiskConfigurationsOptionalParams,
  SAPVirtualInstancesGetSapSupportedSkuOptionalParams,
  SAPVirtualInstancesGetSizingRecommendationsOptionalParams,
  SAPVirtualInstancesStopOptionalParams,
  SAPVirtualInstancesStartOptionalParams,
  SAPVirtualInstancesListBySubscriptionOptionalParams,
  SAPVirtualInstancesListByResourceGroupOptionalParams,
  SAPVirtualInstancesDeleteOptionalParams,
  SAPVirtualInstancesUpdateOptionalParams,
  SAPVirtualInstancesCreateOptionalParams,
  SAPVirtualInstancesGetOptionalParams,
} from "./options.js";

export function _sapVirtualInstancesGetAvailabilityZoneDetailsSend(
  context: Client,
  location: string,
  body: SAPAvailabilityZoneDetailsRequest,
  options: SAPVirtualInstancesGetAvailabilityZoneDetailsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/locations/{location}/sapVirtualInstanceMetadata/default/getAvailabilityZoneDetails{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: sapAvailabilityZoneDetailsRequestSerializer(body),
    });
}

export async function _sapVirtualInstancesGetAvailabilityZoneDetailsDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPAvailabilityZoneDetailsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapAvailabilityZoneDetailsResultDeserializer(result.body);
}

/** Get the recommended SAP Availability Zone Pair Details for your region. */
export async function sapVirtualInstancesGetAvailabilityZoneDetails(
  context: Client,
  location: string,
  body: SAPAvailabilityZoneDetailsRequest,
  options: SAPVirtualInstancesGetAvailabilityZoneDetailsOptionalParams = {
    requestOptions: {},
  },
): Promise<SAPAvailabilityZoneDetailsResult> {
  const result = await _sapVirtualInstancesGetAvailabilityZoneDetailsSend(
    context,
    location,
    body,
    options,
  );
  return _sapVirtualInstancesGetAvailabilityZoneDetailsDeserialize(result);
}

export function _sapVirtualInstancesGetDiskConfigurationsSend(
  context: Client,
  location: string,
  body: SAPDiskConfigurationsRequest,
  options: SAPVirtualInstancesGetDiskConfigurationsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/locations/{location}/sapVirtualInstanceMetadata/default/getDiskConfigurations{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: sapDiskConfigurationsRequestSerializer(body),
    });
}

export async function _sapVirtualInstancesGetDiskConfigurationsDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPDiskConfigurationsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapDiskConfigurationsResultDeserializer(result.body);
}

/** Get the SAP Disk Configuration Layout prod/non-prod SAP System. */
export async function sapVirtualInstancesGetDiskConfigurations(
  context: Client,
  location: string,
  body: SAPDiskConfigurationsRequest,
  options: SAPVirtualInstancesGetDiskConfigurationsOptionalParams = {
    requestOptions: {},
  },
): Promise<SAPDiskConfigurationsResult> {
  const result = await _sapVirtualInstancesGetDiskConfigurationsSend(
    context,
    location,
    body,
    options,
  );
  return _sapVirtualInstancesGetDiskConfigurationsDeserialize(result);
}

export function _sapVirtualInstancesGetSapSupportedSkuSend(
  context: Client,
  location: string,
  body: SAPSupportedSkusRequest,
  options: SAPVirtualInstancesGetSapSupportedSkuOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/locations/{location}/sapVirtualInstanceMetadata/default/getSapSupportedSku{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: sapSupportedSkusRequestSerializer(body),
    });
}

export async function _sapVirtualInstancesGetSapSupportedSkuDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPSupportedResourceSkusResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapSupportedResourceSkusResultDeserializer(result.body);
}

/** Get a list of SAP supported SKUs for ASCS, Application and Database tier. */
export async function sapVirtualInstancesGetSapSupportedSku(
  context: Client,
  location: string,
  body: SAPSupportedSkusRequest,
  options: SAPVirtualInstancesGetSapSupportedSkuOptionalParams = {
    requestOptions: {},
  },
): Promise<SAPSupportedResourceSkusResult> {
  const result = await _sapVirtualInstancesGetSapSupportedSkuSend(
    context,
    location,
    body,
    options,
  );
  return _sapVirtualInstancesGetSapSupportedSkuDeserialize(result);
}

export function _sapVirtualInstancesGetSizingRecommendationsSend(
  context: Client,
  location: string,
  body: SAPSizingRecommendationRequest,
  options: SAPVirtualInstancesGetSizingRecommendationsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/locations/{location}/sapVirtualInstanceMetadata/default/getSizingRecommendations{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: sapSizingRecommendationRequestSerializer(body),
    });
}

export async function _sapVirtualInstancesGetSizingRecommendationsDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPSizingRecommendationResultUnion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapSizingRecommendationResultUnionDeserializer(result.body);
}

/** Gets the sizing recommendations. */
export async function sapVirtualInstancesGetSizingRecommendations(
  context: Client,
  location: string,
  body: SAPSizingRecommendationRequest,
  options: SAPVirtualInstancesGetSizingRecommendationsOptionalParams = {
    requestOptions: {},
  },
): Promise<SAPSizingRecommendationResultUnion> {
  const result = await _sapVirtualInstancesGetSizingRecommendationsSend(
    context,
    location,
    body,
    options,
  );
  return _sapVirtualInstancesGetSizingRecommendationsDeserialize(result);
}

export function _sapVirtualInstancesStopSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPVirtualInstancesStopOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/stop{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: !options["body"]
        ? options["body"]
        : stopRequestSerializer(options["body"]),
    });
}

export async function _sapVirtualInstancesStopDeserialize(
  result: PathUncheckedResponse,
): Promise<OperationStatusResult> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return operationStatusResultDeserializer(result.body);
}

/** Stops the SAP Application, that is the Application server instances and Central Services instance. */
export function sapVirtualInstancesStop(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPVirtualInstancesStopOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OperationStatusResult>, OperationStatusResult> {
  return getLongRunningPoller(
    context,
    _sapVirtualInstancesStopDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sapVirtualInstancesStopSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
}

export function _sapVirtualInstancesStartSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPVirtualInstancesStartOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/start{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: !options["body"]
        ? options["body"]
        : startRequestSerializer(options["body"]),
    });
}

export async function _sapVirtualInstancesStartDeserialize(
  result: PathUncheckedResponse,
): Promise<OperationStatusResult> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return operationStatusResultDeserializer(result.body);
}

/** Starts the SAP application, that is the Central Services instance and Application server instances. */
export function sapVirtualInstancesStart(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPVirtualInstancesStartOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OperationStatusResult>, OperationStatusResult> {
  return getLongRunningPoller(
    context,
    _sapVirtualInstancesStartDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sapVirtualInstancesStartSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
}

export function _sapVirtualInstancesListBySubscriptionSend(
  context: Client,
  options: SAPVirtualInstancesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/sapVirtualInstances{?api-version}",
    {
      subscriptionId: context.subscriptionId,
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

export async function _sapVirtualInstancesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_SAPVirtualInstanceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _sapVirtualInstanceListResultDeserializer(result.body);
}

/** Gets all Virtual Instances for SAP solutions resources in a Subscription. */
export function sapVirtualInstancesListBySubscription(
  context: Client,
  options: SAPVirtualInstancesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SAPVirtualInstance> {
  return buildPagedAsyncIterator(
    context,
    () => _sapVirtualInstancesListBySubscriptionSend(context, options),
    _sapVirtualInstancesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _sapVirtualInstancesListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: SAPVirtualInstancesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
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

export async function _sapVirtualInstancesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_SAPVirtualInstanceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _sapVirtualInstanceListResultDeserializer(result.body);
}

/** Gets all Virtual Instances for SAP solutions resources in a Resource Group. */
export function sapVirtualInstancesListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: SAPVirtualInstancesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SAPVirtualInstance> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _sapVirtualInstancesListByResourceGroupSend(
        context,
        resourceGroupName,
        options,
      ),
    _sapVirtualInstancesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _sapVirtualInstancesDeleteSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPVirtualInstancesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
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

export async function _sapVirtualInstancesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes a Virtual Instance for SAP solutions resource and its child resources, that is the associated Central Services Instance, Application Server Instances and Database Instance. */
export function sapVirtualInstancesDelete(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPVirtualInstancesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _sapVirtualInstancesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sapVirtualInstancesDeleteSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _sapVirtualInstancesUpdateSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  properties: UpdateSAPVirtualInstanceRequest,
  options: SAPVirtualInstancesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: updateSAPVirtualInstanceRequestSerializer(properties),
    });
}

export async function _sapVirtualInstancesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPVirtualInstance> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapVirtualInstanceDeserializer(result.body);
}

/** Updates a Virtual Instance for SAP solutions resource */
export function sapVirtualInstancesUpdate(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  properties: UpdateSAPVirtualInstanceRequest,
  options: SAPVirtualInstancesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<SAPVirtualInstance>, SAPVirtualInstance> {
  return getLongRunningPoller(
    context,
    _sapVirtualInstancesUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sapVirtualInstancesUpdateSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<SAPVirtualInstance>, SAPVirtualInstance>;
}

export function _sapVirtualInstancesCreateSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  resource: SAPVirtualInstance,
  options: SAPVirtualInstancesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
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
      body: sapVirtualInstanceSerializer(resource),
    });
}

export async function _sapVirtualInstancesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPVirtualInstance> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapVirtualInstanceDeserializer(result.body);
}

/** Creates a Virtual Instance for SAP solutions (VIS) resource */
export function sapVirtualInstancesCreate(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  resource: SAPVirtualInstance,
  options: SAPVirtualInstancesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<SAPVirtualInstance>, SAPVirtualInstance> {
  return getLongRunningPoller(
    context,
    _sapVirtualInstancesCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sapVirtualInstancesCreateSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<SAPVirtualInstance>, SAPVirtualInstance>;
}

export function _sapVirtualInstancesGetSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPVirtualInstancesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
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

export async function _sapVirtualInstancesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPVirtualInstance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapVirtualInstanceDeserializer(result.body);
}

/** Gets a Virtual Instance for SAP solutions resource */
export async function sapVirtualInstancesGet(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPVirtualInstancesGetOptionalParams = { requestOptions: {} },
): Promise<SAPVirtualInstance> {
  const result = await _sapVirtualInstancesGetSend(
    context,
    resourceGroupName,
    sapVirtualInstanceName,
    options,
  );
  return _sapVirtualInstancesGetDeserialize(result);
}

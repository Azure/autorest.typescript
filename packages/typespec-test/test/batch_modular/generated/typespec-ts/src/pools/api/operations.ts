// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PoolsContext as Client } from "./index.js";
import {
  batchErrorDeserializer,
  _PoolListUsageMetricsResult,
  _poolListUsageMetricsResultDeserializer,
  PoolUsageMetrics,
  BatchPoolCreateOptions,
  batchPoolCreateOptionsSerializer,
  _BatchPoolListResult,
  _batchPoolListResultDeserializer,
  BatchPool,
  batchPoolDeserializer,
  AutoScaleRun,
  autoScaleRunDeserializer,
  BatchPoolUpdateOptions,
  batchPoolUpdateOptionsSerializer,
  BatchPoolEnableAutoScaleOptions,
  batchPoolEnableAutoScaleOptionsSerializer,
  BatchPoolEvaluateAutoScaleOptions,
  batchPoolEvaluateAutoScaleOptionsSerializer,
  BatchPoolResizeOptions,
  batchPoolResizeOptionsSerializer,
  BatchPoolReplaceOptions,
  batchPoolReplaceOptionsSerializer,
  NodeRemoveOptions,
  nodeRemoveOptionsSerializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  RemoveNodesOptionalParams,
  ReplacePoolPropertiesOptionalParams,
  StopPoolResizeOptionalParams,
  ResizePoolOptionalParams,
  EvaluatePoolAutoScaleOptionalParams,
  EnablePoolAutoScaleOptionalParams,
  DisablePoolAutoScaleOptionalParams,
  UpdatePoolOptionalParams,
  GetPoolOptionalParams,
  PoolExistsOptionalParams,
  DeletePoolOptionalParams,
  ListPoolsOptionalParams,
  CreatePoolOptionalParams,
  ListPoolUsageMetricsOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _removeNodesSend(
  context: Client,
  poolId: string,
  body: NodeRemoveOptions,
  options: RemoveNodesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/removenodes{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.ifMatch !== undefined ? { "if-match": options?.ifMatch } : {}),
        ...(options?.ifNoneMatch !== undefined ? { "if-none-match": options?.ifNoneMatch } : {}),
        ...(options?.ifModifiedSince !== undefined
          ? {
              "if-modified-since": !options?.ifModifiedSince
                ? options?.ifModifiedSince
                : options?.ifModifiedSince.toUTCString(),
            }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? {
              "if-unmodified-since": !options?.ifUnmodifiedSince
                ? options?.ifUnmodifiedSince
                : options?.ifUnmodifiedSince.toUTCString(),
            }
          : {}),
        ...options.requestOptions?.headers,
      },
      body: nodeRemoveOptionsSerializer(body),
    });
}

export async function _removeNodesDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/**
 * This operation can only run when the allocation state of the Pool is steady.
 * When this operation runs, the allocation state changes from steady to resizing.
 * Each request may remove up to 100 nodes.
 */
export async function removeNodes(
  context: Client,
  poolId: string,
  body: NodeRemoveOptions,
  options: RemoveNodesOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _removeNodesSend(context, poolId, body, options);
  return _removeNodesDeserialize(result);
}

export function _replacePoolPropertiesSend(
  context: Client,
  poolId: string,
  body: BatchPoolReplaceOptions,
  options: ReplacePoolPropertiesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/updateproperties{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...options.requestOptions?.headers,
      },
      body: batchPoolReplaceOptionsSerializer(body),
    });
}

export async function _replacePoolPropertiesDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/**
 * This fully replaces all the updatable properties of the Pool. For example, if
 * the Pool has a StartTask associated with it and if StartTask is not specified
 * with this request, then the Batch service will remove the existing StartTask.
 */
export async function replacePoolProperties(
  context: Client,
  poolId: string,
  body: BatchPoolReplaceOptions,
  options: ReplacePoolPropertiesOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _replacePoolPropertiesSend(context, poolId, body, options);
  return _replacePoolPropertiesDeserialize(result);
}

export function _stopPoolResizeSend(
  context: Client,
  poolId: string,
  options: StopPoolResizeOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/stopresize{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.ifMatch !== undefined ? { "if-match": options?.ifMatch } : {}),
        ...(options?.ifNoneMatch !== undefined ? { "if-none-match": options?.ifNoneMatch } : {}),
        ...(options?.ifModifiedSince !== undefined
          ? {
              "if-modified-since": !options?.ifModifiedSince
                ? options?.ifModifiedSince
                : options?.ifModifiedSince.toUTCString(),
            }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? {
              "if-unmodified-since": !options?.ifUnmodifiedSince
                ? options?.ifUnmodifiedSince
                : options?.ifUnmodifiedSince.toUTCString(),
            }
          : {}),
        ...options.requestOptions?.headers,
      },
    });
}

export async function _stopPoolResizeDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/**
 * This does not restore the Pool to its previous state before the resize
 * operation: it only stops any further changes being made, and the Pool maintains
 * its current state. After stopping, the Pool stabilizes at the number of Compute
 * Nodes it was at when the stop operation was done. During the stop operation,
 * the Pool allocation state changes first to stopping and then to steady. A
 * resize operation need not be an explicit resize Pool request; this API can also
 * be used to halt the initial sizing of the Pool when it is created.
 */
export async function stopPoolResize(
  context: Client,
  poolId: string,
  options: StopPoolResizeOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _stopPoolResizeSend(context, poolId, options);
  return _stopPoolResizeDeserialize(result);
}

export function _resizePoolSend(
  context: Client,
  poolId: string,
  body: BatchPoolResizeOptions,
  options: ResizePoolOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/resize{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.ifMatch !== undefined ? { "if-match": options?.ifMatch } : {}),
        ...(options?.ifNoneMatch !== undefined ? { "if-none-match": options?.ifNoneMatch } : {}),
        ...(options?.ifModifiedSince !== undefined
          ? {
              "if-modified-since": !options?.ifModifiedSince
                ? options?.ifModifiedSince
                : options?.ifModifiedSince.toUTCString(),
            }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? {
              "if-unmodified-since": !options?.ifUnmodifiedSince
                ? options?.ifUnmodifiedSince
                : options?.ifUnmodifiedSince.toUTCString(),
            }
          : {}),
        ...options.requestOptions?.headers,
      },
      body: batchPoolResizeOptionsSerializer(body),
    });
}

export async function _resizePoolDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/**
 * You can only resize a Pool when its allocation state is steady. If the Pool is
 * already resizing, the request fails with status code 409. When you resize a
 * Pool, the Pool's allocation state changes from steady to resizing. You cannot
 * resize Pools which are configured for automatic scaling. If you try to do this,
 * the Batch service returns an error 409. If you resize a Pool downwards, the
 * Batch service chooses which Compute Nodes to remove. To remove specific Compute
 * Nodes, use the Pool remove Compute Nodes API instead.
 */
export async function resizePool(
  context: Client,
  poolId: string,
  body: BatchPoolResizeOptions,
  options: ResizePoolOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _resizePoolSend(context, poolId, body, options);
  return _resizePoolDeserialize(result);
}

export function _evaluatePoolAutoScaleSend(
  context: Client,
  poolId: string,
  body: BatchPoolEvaluateAutoScaleOptions,
  options: EvaluatePoolAutoScaleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/evaluateautoscale{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: batchPoolEvaluateAutoScaleOptionsSerializer(body),
    });
}

export async function _evaluatePoolAutoScaleDeserialize(
  result: PathUncheckedResponse,
): Promise<AutoScaleRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return autoScaleRunDeserializer(result.body);
}

/**
 * This API is primarily for validating an autoscale formula, as it simply returns
 * the result without applying the formula to the Pool. The Pool must have auto
 * scaling enabled in order to evaluate a formula.
 */
export async function evaluatePoolAutoScale(
  context: Client,
  poolId: string,
  body: BatchPoolEvaluateAutoScaleOptions,
  options: EvaluatePoolAutoScaleOptionalParams = { requestOptions: {} },
): Promise<AutoScaleRun> {
  const result = await _evaluatePoolAutoScaleSend(context, poolId, body, options);
  return _evaluatePoolAutoScaleDeserialize(result);
}

export function _enablePoolAutoScaleSend(
  context: Client,
  poolId: string,
  body: BatchPoolEnableAutoScaleOptions,
  options: EnablePoolAutoScaleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/enableautoscale{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.ifMatch !== undefined ? { "if-match": options?.ifMatch } : {}),
        ...(options?.ifNoneMatch !== undefined ? { "if-none-match": options?.ifNoneMatch } : {}),
        ...(options?.ifModifiedSince !== undefined
          ? {
              "if-modified-since": !options?.ifModifiedSince
                ? options?.ifModifiedSince
                : options?.ifModifiedSince.toUTCString(),
            }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? {
              "if-unmodified-since": !options?.ifUnmodifiedSince
                ? options?.ifUnmodifiedSince
                : options?.ifUnmodifiedSince.toUTCString(),
            }
          : {}),
        ...options.requestOptions?.headers,
      },
      body: batchPoolEnableAutoScaleOptionsSerializer(body),
    });
}

export async function _enablePoolAutoScaleDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/**
 * You cannot enable automatic scaling on a Pool if a resize operation is in
 * progress on the Pool. If automatic scaling of the Pool is currently disabled,
 * you must specify a valid autoscale formula as part of the request. If automatic
 * scaling of the Pool is already enabled, you may specify a new autoscale formula
 * and/or a new evaluation interval. You cannot call this API for the same Pool
 * more than once every 30 seconds.
 */
export async function enablePoolAutoScale(
  context: Client,
  poolId: string,
  body: BatchPoolEnableAutoScaleOptions,
  options: EnablePoolAutoScaleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _enablePoolAutoScaleSend(context, poolId, body, options);
  return _enablePoolAutoScaleDeserialize(result);
}

export function _disablePoolAutoScaleSend(
  context: Client,
  poolId: string,
  options: DisablePoolAutoScaleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/disableautoscale{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...options.requestOptions?.headers,
      },
    });
}

export async function _disablePoolAutoScaleDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/** Disables automatic scaling for a Pool. */
export async function disablePoolAutoScale(
  context: Client,
  poolId: string,
  options: DisablePoolAutoScaleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _disablePoolAutoScaleSend(context, poolId, options);
  return _disablePoolAutoScaleDeserialize(result);
}

export function _updatePoolSend(
  context: Client,
  poolId: string,
  body: BatchPoolUpdateOptions,
  options: UpdatePoolOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.ifMatch !== undefined ? { "if-match": options?.ifMatch } : {}),
        ...(options?.ifNoneMatch !== undefined ? { "if-none-match": options?.ifNoneMatch } : {}),
        ...(options?.ifModifiedSince !== undefined
          ? {
              "if-modified-since": !options?.ifModifiedSince
                ? options?.ifModifiedSince
                : options?.ifModifiedSince.toUTCString(),
            }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? {
              "if-unmodified-since": !options?.ifUnmodifiedSince
                ? options?.ifUnmodifiedSince
                : options?.ifUnmodifiedSince.toUTCString(),
            }
          : {}),
        ...options.requestOptions?.headers,
      },
      body: batchPoolUpdateOptionsSerializer(body),
    });
}

export async function _updatePoolDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/**
 * This only replaces the Pool properties specified in the request. For example,
 * if the Pool has a StartTask associated with it, and a request does not specify
 * a StartTask element, then the Pool keeps the existing StartTask.
 */
export async function updatePool(
  context: Client,
  poolId: string,
  body: BatchPoolUpdateOptions,
  options: UpdatePoolOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _updatePoolSend(context, poolId, body, options);
  return _updatePoolDeserialize(result);
}

export function _getPoolSend(
  context: Client,
  poolId: string,
  options: GetPoolOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}{?api%2Dversion,timeOut,%24select,%24expand}",
    {
      poolId: poolId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
      "%24select": !options?.select
        ? options?.select
        : options?.select.map((p: any) => {
            return p;
          }),
      "%24expand": !options?.expand
        ? options?.expand
        : options?.expand.map((p: any) => {
            return p;
          }),
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
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.ifMatch !== undefined ? { "if-match": options?.ifMatch } : {}),
        ...(options?.ifNoneMatch !== undefined ? { "if-none-match": options?.ifNoneMatch } : {}),
        ...(options?.ifModifiedSince !== undefined
          ? {
              "if-modified-since": !options?.ifModifiedSince
                ? options?.ifModifiedSince
                : options?.ifModifiedSince.toUTCString(),
            }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? {
              "if-unmodified-since": !options?.ifUnmodifiedSince
                ? options?.ifUnmodifiedSince
                : options?.ifUnmodifiedSince.toUTCString(),
            }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getPoolDeserialize(result: PathUncheckedResponse): Promise<BatchPool> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return batchPoolDeserializer(result.body);
}

/** Gets information about the specified Pool. */
export async function getPool(
  context: Client,
  poolId: string,
  options: GetPoolOptionalParams = { requestOptions: {} },
): Promise<BatchPool> {
  const result = await _getPoolSend(context, poolId, options);
  return _getPoolDeserialize(result);
}

export function _poolExistsSend(
  context: Client,
  poolId: string,
  options: PoolExistsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .head({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.ifMatch !== undefined ? { "if-match": options?.ifMatch } : {}),
        ...(options?.ifNoneMatch !== undefined ? { "if-none-match": options?.ifNoneMatch } : {}),
        ...(options?.ifModifiedSince !== undefined
          ? {
              "if-modified-since": !options?.ifModifiedSince
                ? options?.ifModifiedSince
                : options?.ifModifiedSince.toUTCString(),
            }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? {
              "if-unmodified-since": !options?.ifUnmodifiedSince
                ? options?.ifUnmodifiedSince
                : options?.ifUnmodifiedSince.toUTCString(),
            }
          : {}),
        ...options.requestOptions?.headers,
      },
    });
}

export async function _poolExistsDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["404", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/** Gets basic properties of a Pool. */
export async function poolExists(
  context: Client,
  poolId: string,
  options: PoolExistsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _poolExistsSend(context, poolId, options);
  return _poolExistsDeserialize(result);
}

export function _deletePoolSend(
  context: Client,
  poolId: string,
  options: DeletePoolOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
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
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.ifMatch !== undefined ? { "if-match": options?.ifMatch } : {}),
        ...(options?.ifNoneMatch !== undefined ? { "if-none-match": options?.ifNoneMatch } : {}),
        ...(options?.ifModifiedSince !== undefined
          ? {
              "if-modified-since": !options?.ifModifiedSince
                ? options?.ifModifiedSince
                : options?.ifModifiedSince.toUTCString(),
            }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? {
              "if-unmodified-since": !options?.ifUnmodifiedSince
                ? options?.ifUnmodifiedSince
                : options?.ifUnmodifiedSince.toUTCString(),
            }
          : {}),
        ...options.requestOptions?.headers,
      },
    });
}

export async function _deletePoolDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/**
 * When you request that a Pool be deleted, the following actions occur: the Pool
 * state is set to deleting; any ongoing resize operation on the Pool are stopped;
 * the Batch service starts resizing the Pool to zero Compute Nodes; any Tasks
 * running on existing Compute Nodes are terminated and requeued (as if a resize
 * Pool operation had been requested with the default requeue option); finally,
 * the Pool is removed from the system. Because running Tasks are requeued, the
 * user can rerun these Tasks by updating their Job to target a different Pool.
 * The Tasks can then run on the new Pool. If you want to override the requeue
 * behavior, then you should call resize Pool explicitly to shrink the Pool to
 * zero size before deleting the Pool. If you call an Update, Patch or Delete API
 * on a Pool in the deleting state, it will fail with HTTP status code 409 with
 * error code PoolBeingDeleted.
 */
export async function deletePool(
  context: Client,
  poolId: string,
  options: DeletePoolOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deletePoolSend(context, poolId, options);
  return _deletePoolDeserialize(result);
}

export function _listPoolsSend(
  context: Client,
  options: ListPoolsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools{?api%2Dversion,maxresults,timeOut,%24filter,%24select,%24expand}",
    {
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      maxresults: options?.maxresults,
      timeOut: options?.timeOutInSeconds,
      "%24filter": options?.filter,
      "%24select": !options?.select
        ? options?.select
        : options?.select.map((p: any) => {
            return p;
          }),
      "%24expand": !options?.expand
        ? options?.expand
        : options?.expand.map((p: any) => {
            return p;
          }),
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
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listPoolsDeserialize(
  result: PathUncheckedResponse,
): Promise<_BatchPoolListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return _batchPoolListResultDeserializer(result.body);
}

/** Lists all of the Pools in the specified Account. */
export function listPools(
  context: Client,
  options: ListPoolsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchPool> {
  return buildPagedAsyncIterator(
    context,
    () => _listPoolsSend(context, options),
    _listPoolsDeserialize,
    ["200"],
    {
      itemName: "value",
      nextLinkName: "odata.nextLink",
      apiVersion: context.apiVersion ?? "2023-05-01.17.0",
    },
  );
}

export function _createPoolSend(
  context: Client,
  body: BatchPoolCreateOptions,
  options: CreatePoolOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools{?api%2Dversion,timeOut}",
    {
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...options.requestOptions?.headers,
      },
      body: batchPoolCreateOptionsSerializer(body),
    });
}

export async function _createPoolDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/**
 * When naming Pools, avoid including sensitive information such as user names or
 * secret project names. This information may appear in telemetry logs accessible
 * to Microsoft Support engineers.
 */
export async function createPool(
  context: Client,
  body: BatchPoolCreateOptions,
  options: CreatePoolOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _createPoolSend(context, body, options);
  return _createPoolDeserialize(result);
}

export function _listPoolUsageMetricsSend(
  context: Client,
  options: ListPoolUsageMetricsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/poolusagemetrics{?api%2Dversion,maxresults,timeOut,starttime,endtime,%24filter}",
    {
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      maxresults: options?.maxresults,
      timeOut: options?.timeOutInSeconds,
      starttime: !options?.starttime ? options?.starttime : options?.starttime.toISOString(),
      endtime: !options?.endtime ? options?.endtime : options?.endtime.toISOString(),
      "%24filter": options?.filter,
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
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listPoolUsageMetricsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PoolListUsageMetricsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return _poolListUsageMetricsResultDeserializer(result.body);
}

/**
 * If you do not specify a $filter clause including a poolId, the response
 * includes all Pools that existed in the Account in the time range of the
 * returned aggregation intervals. If you do not specify a $filter clause
 * including a startTime or endTime these filters default to the start and end
 * times of the last aggregation interval currently available; that is, only the
 * last aggregation interval is returned.
 */
export function listPoolUsageMetrics(
  context: Client,
  options: ListPoolUsageMetricsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<PoolUsageMetrics> {
  return buildPagedAsyncIterator(
    context,
    () => _listPoolUsageMetricsSend(context, options),
    _listPoolUsageMetricsDeserialize,
    ["200"],
    {
      itemName: "value",
      nextLinkName: "odata.nextLink",
      apiVersion: context.apiVersion ?? "2023-05-01.17.0",
    },
  );
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { User } from "../../models/models.js";
import {
  BudgetsCreateOrReplace200Response,
  BudgetsCreateOrReplace201Response,
  BudgetsCreateOrReplaceDefaultResponse,
  BudgetsCreateOrReplaceLogicalResponse,
  BudgetsCreateOrUpdate200Response,
  BudgetsCreateOrUpdate201Response,
  BudgetsCreateOrUpdateDefaultResponse,
  BudgetsCreateOrUpdateLogicalResponse,
  isUnexpected,
  WidgetServiceContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  BudgetsCreateOrReplaceOptionalParams,
  BudgetsCreateOrUpdateOptionalParams,
} from "../../models/options.js";

export function _createOrReplaceSend(
  context: Client,
  name: string,
  resource: User,
  options: BudgetsCreateOrReplaceOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | BudgetsCreateOrReplace200Response
  | BudgetsCreateOrReplace201Response
  | BudgetsCreateOrReplaceDefaultResponse
  | BudgetsCreateOrReplaceLogicalResponse
> {
  return context
    .path("/budgets/widgets/createOrReplace/users/{name}", name)
    .put({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { "api-version": options?.apiVersion ?? "1.0.0" },
      body: { role: resource["role"], id: resource["id"] },
    });
}

export async function _createOrReplaceDeserialize(
  result:
    | BudgetsCreateOrReplace200Response
    | BudgetsCreateOrReplace201Response
    | BudgetsCreateOrReplaceDefaultResponse
    | BudgetsCreateOrReplaceLogicalResponse,
): Promise<User> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as BudgetsCreateOrReplaceLogicalResponse;
  return {
    name: _result.body["name"],
    role: _result.body["role"],
    id: _result.body["id"],
  };
}

/** Long-running resource create or replace operation template. */
export function createOrReplace(
  context: Client,
  name: string,
  resource: User,
  options: BudgetsCreateOrReplaceOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<User>, User> {
  return getLongRunningPoller(context, _createOrReplaceDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrReplaceSend(context, name, resource, options),
  }) as PollerLike<OperationState<User>, User>;
}

export function _createOrUpdateSend(
  context: Client,
  name: string,
  resource: User,
  options: BudgetsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | BudgetsCreateOrUpdate200Response
  | BudgetsCreateOrUpdate201Response
  | BudgetsCreateOrUpdateDefaultResponse
  | BudgetsCreateOrUpdateLogicalResponse
> {
  return context
    .path("/budgets/widgets/createOrUpdate/users/{name}", name)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      queryParameters: { "api-version": options?.apiVersion ?? "1.0.0" },
      body: { role: resource["role"], id: resource["id"] },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | BudgetsCreateOrUpdate200Response
    | BudgetsCreateOrUpdate201Response
    | BudgetsCreateOrUpdateDefaultResponse
    | BudgetsCreateOrUpdateLogicalResponse,
): Promise<User> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as BudgetsCreateOrUpdateLogicalResponse;
  return {
    name: _result.body["name"],
    role: _result.body["role"],
    id: _result.body["id"],
  };
}

/** Long-running resource create or update operation template. */
export function createOrUpdate(
  context: Client,
  name: string,
  resource: User,
  options: BudgetsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<User>, User> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(context, name, resource, options),
  }) as PollerLike<OperationState<User>, User>;
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WidgetServiceContext as Client } from "../index.js";
import {
  User,
  userSerializer,
  userDeserializer,
  Widget,
  widgetErrorDeserializer,
  widgetArrayDeserializer,
} from "../../models/models.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  BudgetsGetBudgetsOptionalParams,
  BudgetsCreateOrReplaceOptionalParams,
} from "./options.js";

export function _getBudgetsSend(
  context: Client,
  name: string,
  options: BudgetsGetBudgetsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path("/budgets")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { name: name },
    });
}

export async function _getBudgetsDeserialize(
  result: PathUncheckedResponse,
): Promise<Widget[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = widgetErrorDeserializer(result.body);
    throw error;
  }

  return widgetArrayDeserializer(result.body);
}

export async function getBudgets(
  context: Client,
  name: string,
  options: BudgetsGetBudgetsOptionalParams = { requestOptions: {} },
): Promise<Widget[]> {
  const result = await _getBudgetsSend(context, name, options);
  return _getBudgetsDeserialize(result);
}

export function _createOrReplaceSend(
  context: Client,
  name: string,
  resource: User,
  options: BudgetsCreateOrReplaceOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/budgets/widgets/createOrReplace/users/{name}", name)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: userSerializer(resource),
    });
}

export async function _createOrReplaceDeserialize(
  result: PathUncheckedResponse,
): Promise<User> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return userDeserializer(result.body);
}

/** Long-running resource create or replace operation template. */
export function createOrReplace(
  context: Client,
  name: string,
  resource: User,
  options: BudgetsCreateOrReplaceOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<User>, User> {
  return getLongRunningPoller(
    context,
    _createOrReplaceDeserialize,
    ["201", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _createOrReplaceSend(context, name, resource, options),
      resourceLocationConfig: "original-uri",
    },
  ) as PollerLike<OperationState<User>, User>;
}

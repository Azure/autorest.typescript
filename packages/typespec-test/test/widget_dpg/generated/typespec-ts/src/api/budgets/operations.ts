// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SAPWidgetServiceContext as Client } from "../index.js";
import {
  Widget,
  widgetErrorDeserializer,
  widgetArrayDeserializer,
  SAPUser,
  sapUserSerializer,
  sapUserDeserializer,
} from "../../models/models.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  BudgetsContinueOptionalParams,
  BudgetsGetBudgetsOptionalParams,
  BudgetsCreateOrReplaceOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _$continueSend(
  context: Client,
  options: BudgetsContinueOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/budgets/widgets/continue")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _$continueDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 *  @fixme continue is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $continue(
  context: Client,
  options: BudgetsContinueOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$continueSend(context, options);
  return _$continueDeserialize(result);
}

export function _getBudgetsSend(
  context: Client,
  name: string,
  options: BudgetsGetBudgetsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/budgets{?name}",
    {
      name: name,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getBudgetsDeserialize(result: PathUncheckedResponse): Promise<Widget[]> {
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
  resource: SAPUser,
  options: BudgetsCreateOrReplaceOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/budgets/widgets/createOrReplace/users/{name}{?api%2Dversion}",
    {
      name: name,
      "api%2Dversion": context.apiVersion ?? "1.0.0",
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
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: sapUserSerializer(resource),
    });
}

export async function _createOrReplaceDeserialize(result: PathUncheckedResponse): Promise<SAPUser> {
  const expectedStatuses = ["201", "200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return sapUserDeserializer(result.body);
}

/** Long-running resource create or replace operation template. */
export function createOrReplace(
  context: Client,
  name: string,
  resource: SAPUser,
  options: BudgetsCreateOrReplaceOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<SAPUser>, SAPUser> {
  return getLongRunningPoller(context, _createOrReplaceDeserialize, ["201", "200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _createOrReplaceSend(context, name, resource, options),
    resourceLocationConfig: "original-uri",
    apiVersion: context.apiVersion ?? "1.0.0",
  }) as PollerLike<OperationState<SAPUser>, SAPUser>;
}

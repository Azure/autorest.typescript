// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WidgetServiceContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  User,
  userSerializer,
  userDeserializer,
  _ListWidgetsPagesResults,
} from "../../models/models.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";
import { BudgetsCreateOrReplaceOptionalParams } from "../../models/options.js";

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
      queryParameters: { "api-version": options?.apiVersion ?? "1.0.0" },
      body: userSerializer(resource),
    });
}

export async function _createOrReplaceDeserialize(
  result: PathUncheckedResponse,
): Promise<User> {
  const expectedStatuses = ["200", "201"];
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
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _createOrReplaceSend(context, name, resource, options),
    },
  ) as PollerLike<OperationState<User>, User>;
}

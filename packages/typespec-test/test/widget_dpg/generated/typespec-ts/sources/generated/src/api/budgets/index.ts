// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { Next } from "@azure/core-lro";
import { User } from "../../models/models.js";
import {
  BudgetsCreateOrReplace200Response,
  BudgetsCreateOrReplace201Response,
  BudgetsCreateOrReplaceDefaultResponse,
  BudgetsCreateOrReplaceLogicalResponse,
  isUnexpected,
  WidgetServiceContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { BudgetsCreateOrReplaceOptions } from "../../models/options.js";

export function _createOrReplaceSend(
  context: Client,
  name: string,
  resource: User,
  options: BudgetsCreateOrReplaceOptions = { requestOptions: {} },
): StreamableMethod<
  | BudgetsCreateOrReplace200Response
  | BudgetsCreateOrReplace201Response
  | BudgetsCreateOrReplaceDefaultResponse
  | BudgetsCreateOrReplaceLogicalResponse
> {
  return context
    .path("/budgets/widgets/createOrReplace/users/{name}", name)
    .post({
      ...operationOptionsToRequestParameters(options),
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

  return {
    name: result.body["name"],
    role: result.body["role"],
    id: result.body["id"],
  };
}

/** Long-running resource create or replace operation template. */
export function createOrReplace(
  context: Client,
  name: string,
  resource: User,
  options: BudgetsCreateOrReplaceOptions = { requestOptions: {} },
): Next.PollerLike<Next.OperationState<User>, User> {
  return getLongRunningPoller(context, _createOrReplaceDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrReplaceSend(context, name, resource, options),
  }) as Next.PollerLike<Next.OperationState<User>, User>;
}

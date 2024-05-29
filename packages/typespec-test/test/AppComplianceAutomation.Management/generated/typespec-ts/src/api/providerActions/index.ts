// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CheckNameAvailabilityRequest,
  CheckNameAvailabilityResponse,
  GetCollectionCountRequest,
  GetCollectionCountResponse,
  GetOverviewStatusRequest,
  GetOverviewStatusResponse,
  OnboardRequest,
  TriggerEvaluationRequest,
  ListInUseStorageAccountsRequest,
  ListInUseStorageAccountsResponse,
} from "../../models/models.js";
import {
  isUnexpected,
  AppComplianceAutomationContext as Client,
  ProviderActionsCheckNameAvailability200Response,
  ProviderActionsCheckNameAvailabilityDefaultResponse,
  ProviderActionsGetCollectionCount200Response,
  ProviderActionsGetCollectionCountDefaultResponse,
  ProviderActionsGetOverviewStatus200Response,
  ProviderActionsGetOverviewStatusDefaultResponse,
  ProviderActionsListInUseStorageAccounts200Response,
  ProviderActionsListInUseStorageAccountsDefaultResponse,
  ProviderActionsOnboard200Response,
  ProviderActionsOnboard202Response,
  ProviderActionsOnboardDefaultResponse,
  ProviderActionsOnboardLogicalResponse,
  ProviderActionsTriggerEvaluation200Response,
  ProviderActionsTriggerEvaluation202Response,
  ProviderActionsTriggerEvaluationDefaultResponse,
  ProviderActionsTriggerEvaluationLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ProviderActionsCheckNameAvailabilityOptionalParams,
  ProviderActionsGetCollectionCountOptionalParams,
  ProviderActionsGetOverviewStatusOptionalParams,
  ProviderActionsOnboardOptionalParams,
  ProviderActionsTriggerEvaluationOptionalParams,
  ProviderActionsListInUseStorageAccountsOptionalParams,
} from "../../models/options.js";

export function _checkNameAvailabilitySend(
  context: Client,
  body: CheckNameAvailabilityRequest,
  options: ProviderActionsCheckNameAvailabilityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | ProviderActionsCheckNameAvailability200Response
  | ProviderActionsCheckNameAvailabilityDefaultResponse
> {
  return context
    .path("/providers/Microsoft.AppComplianceAutomation/checkNameAvailability")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"], type: body["type"] },
    });
}

export async function _checkNameAvailabilityDeserialize(
  result:
    | ProviderActionsCheckNameAvailability200Response
    | ProviderActionsCheckNameAvailabilityDefaultResponse,
): Promise<CheckNameAvailabilityResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    nameAvailable: result.body["nameAvailable"],
    reason: result.body["reason"],
    message: result.body["message"],
  };
}

/** Check if the given name is available for a report. */
export async function checkNameAvailability(
  context: Client,
  body: CheckNameAvailabilityRequest,
  options: ProviderActionsCheckNameAvailabilityOptionalParams = {
    requestOptions: {},
  },
): Promise<CheckNameAvailabilityResponse> {
  const result = await _checkNameAvailabilitySend(context, body, options);
  return _checkNameAvailabilityDeserialize(result);
}

export function _getCollectionCountSend(
  context: Client,
  body: GetCollectionCountRequest,
  options: ProviderActionsGetCollectionCountOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | ProviderActionsGetCollectionCount200Response
  | ProviderActionsGetCollectionCountDefaultResponse
> {
  return context
    .path("/providers/Microsoft.AppComplianceAutomation/getCollectionCount")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { type: body["type"] },
    });
}

export async function _getCollectionCountDeserialize(
  result:
    | ProviderActionsGetCollectionCount200Response
    | ProviderActionsGetCollectionCountDefaultResponse,
): Promise<GetCollectionCountResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    count: result.body["count"],
  };
}

/** Get the count of reports. */
export async function getCollectionCount(
  context: Client,
  body: GetCollectionCountRequest,
  options: ProviderActionsGetCollectionCountOptionalParams = {
    requestOptions: {},
  },
): Promise<GetCollectionCountResponse> {
  const result = await _getCollectionCountSend(context, body, options);
  return _getCollectionCountDeserialize(result);
}

export function _getOverviewStatusSend(
  context: Client,
  body: GetOverviewStatusRequest,
  options: ProviderActionsGetOverviewStatusOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | ProviderActionsGetOverviewStatus200Response
  | ProviderActionsGetOverviewStatusDefaultResponse
> {
  return context
    .path("/providers/Microsoft.AppComplianceAutomation/getOverviewStatus")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { type: body["type"] },
    });
}

export async function _getOverviewStatusDeserialize(
  result:
    | ProviderActionsGetOverviewStatus200Response
    | ProviderActionsGetOverviewStatusDefaultResponse,
): Promise<GetOverviewStatusResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    statusList:
      result.body["statusList"] === undefined
        ? result.body["statusList"]
        : result.body["statusList"].map((p) => ({
            statusName: p["statusName"],
            statusValue: p["statusValue"],
          })),
  };
}

/** Get the resource overview status. */
export async function getOverviewStatus(
  context: Client,
  body: GetOverviewStatusRequest,
  options: ProviderActionsGetOverviewStatusOptionalParams = {
    requestOptions: {},
  },
): Promise<GetOverviewStatusResponse> {
  const result = await _getOverviewStatusSend(context, body, options);
  return _getOverviewStatusDeserialize(result);
}

export function _onboardSend(
  context: Client,
  body: OnboardRequest,
  options: ProviderActionsOnboardOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ProviderActionsOnboard200Response
  | ProviderActionsOnboard202Response
  | ProviderActionsOnboardDefaultResponse
  | ProviderActionsOnboardLogicalResponse
> {
  return context
    .path("/providers/Microsoft.AppComplianceAutomation/onboard")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { subscriptionIds: body["subscriptionIds"] },
    });
}

export async function _onboardDeserialize(
  result:
    | ProviderActionsOnboard200Response
    | ProviderActionsOnboard202Response
    | ProviderActionsOnboardDefaultResponse
    | ProviderActionsOnboardLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ProviderActionsOnboardLogicalResponse;
  return;
}

/** Onboard given subscriptions to Microsoft.AppComplianceAutomation provider. */
export function onboard(
  context: Client,
  body: OnboardRequest,
  options: ProviderActionsOnboardOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _onboardDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _onboardSend(context, body, options),
  }) as PollerLike<OperationState<void>, void>;
}

export function _triggerEvaluationSend(
  context: Client,
  body: TriggerEvaluationRequest,
  options: ProviderActionsTriggerEvaluationOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | ProviderActionsTriggerEvaluation200Response
  | ProviderActionsTriggerEvaluation202Response
  | ProviderActionsTriggerEvaluationDefaultResponse
  | ProviderActionsTriggerEvaluationLogicalResponse
> {
  return context
    .path("/providers/Microsoft.AppComplianceAutomation/triggerEvaluation")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { resourceIds: body["resourceIds"] },
    });
}

export async function _triggerEvaluationDeserialize(
  result:
    | ProviderActionsTriggerEvaluation200Response
    | ProviderActionsTriggerEvaluation202Response
    | ProviderActionsTriggerEvaluationDefaultResponse
    | ProviderActionsTriggerEvaluationLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ProviderActionsTriggerEvaluationLogicalResponse;
  return;
}

/** Trigger quick evaluation for the given subscriptions. */
export function triggerEvaluation(
  context: Client,
  body: TriggerEvaluationRequest,
  options: ProviderActionsTriggerEvaluationOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _triggerEvaluationDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _triggerEvaluationSend(context, body, options),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listInUseStorageAccountsSend(
  context: Client,
  body: ListInUseStorageAccountsRequest,
  options: ProviderActionsListInUseStorageAccountsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | ProviderActionsListInUseStorageAccounts200Response
  | ProviderActionsListInUseStorageAccountsDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/listInUseStorageAccounts",
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { subscriptionIds: body["subscriptionIds"] },
    });
}

export async function _listInUseStorageAccountsDeserialize(
  result:
    | ProviderActionsListInUseStorageAccounts200Response
    | ProviderActionsListInUseStorageAccountsDefaultResponse,
): Promise<ListInUseStorageAccountsResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    storageAccountList:
      result.body["storageAccountList"] === undefined
        ? result.body["storageAccountList"]
        : result.body["storageAccountList"].map((p) => ({
            subscriptionId: p["subscriptionId"],
            resourceGroup: p["resourceGroup"],
            accountName: p["accountName"],
            location: p["location"],
          })),
  };
}

/** List the storage accounts which are in use by related reports */
export async function listInUseStorageAccounts(
  context: Client,
  body: ListInUseStorageAccountsRequest,
  options: ProviderActionsListInUseStorageAccountsOptionalParams = {
    requestOptions: {},
  },
): Promise<ListInUseStorageAccountsResponse> {
  const result = await _listInUseStorageAccountsSend(context, body, options);
  return _listInUseStorageAccountsDeserialize(result);
}

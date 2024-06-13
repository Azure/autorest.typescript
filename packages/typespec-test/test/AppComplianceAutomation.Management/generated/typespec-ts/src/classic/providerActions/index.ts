// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
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
  providerActionsCheckNameAvailability,
  providerActionsGetCollectionCount,
  providerActionsGetOverviewStatus,
  providerActionsOnboard,
  providerActionsTriggerEvaluation,
  providerActionsListInUseStorageAccounts,
} from "../../api/providerActions/index.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ProviderActionsCheckNameAvailabilityOptionalParams,
  ProviderActionsGetCollectionCountOptionalParams,
  ProviderActionsGetOverviewStatusOptionalParams,
  ProviderActionsOnboardOptionalParams,
  ProviderActionsTriggerEvaluationOptionalParams,
  ProviderActionsListInUseStorageAccountsOptionalParams,
} from "../../models/options.js";

export interface ProviderActionsOperations {
  checkNameAvailability: (
    body: CheckNameAvailabilityRequest,
    options?: ProviderActionsCheckNameAvailabilityOptionalParams,
  ) => Promise<CheckNameAvailabilityResponse>;
  getCollectionCount: (
    body: GetCollectionCountRequest,
    options?: ProviderActionsGetCollectionCountOptionalParams,
  ) => Promise<GetCollectionCountResponse>;
  getOverviewStatus: (
    body: GetOverviewStatusRequest,
    options?: ProviderActionsGetOverviewStatusOptionalParams,
  ) => Promise<GetOverviewStatusResponse>;
  onboard: (
    body: OnboardRequest,
    options?: ProviderActionsOnboardOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  triggerEvaluation: (
    body: TriggerEvaluationRequest,
    options?: ProviderActionsTriggerEvaluationOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listInUseStorageAccounts: (
    body: ListInUseStorageAccountsRequest,
    options?: ProviderActionsListInUseStorageAccountsOptionalParams,
  ) => Promise<ListInUseStorageAccountsResponse>;
}

export function getProviderActions(context: AppComplianceAutomationContext) {
  return {
    checkNameAvailability: (
      body: CheckNameAvailabilityRequest,
      options?: ProviderActionsCheckNameAvailabilityOptionalParams,
    ) => providerActionsCheckNameAvailability(context, body, options),
    getCollectionCount: (
      body: GetCollectionCountRequest,
      options?: ProviderActionsGetCollectionCountOptionalParams,
    ) => providerActionsGetCollectionCount(context, body, options),
    getOverviewStatus: (
      body: GetOverviewStatusRequest,
      options?: ProviderActionsGetOverviewStatusOptionalParams,
    ) => providerActionsGetOverviewStatus(context, body, options),
    onboard: (
      body: OnboardRequest,
      options?: ProviderActionsOnboardOptionalParams,
    ) => providerActionsOnboard(context, body, options),
    triggerEvaluation: (
      body: TriggerEvaluationRequest,
      options?: ProviderActionsTriggerEvaluationOptionalParams,
    ) => providerActionsTriggerEvaluation(context, body, options),
    listInUseStorageAccounts: (
      body: ListInUseStorageAccountsRequest,
      options?: ProviderActionsListInUseStorageAccountsOptionalParams,
    ) => providerActionsListInUseStorageAccounts(context, body, options),
  };
}

export function getProviderActionsOperations(
  context: AppComplianceAutomationContext,
): ProviderActionsOperations {
  return {
    ...getProviderActions(context),
  };
}

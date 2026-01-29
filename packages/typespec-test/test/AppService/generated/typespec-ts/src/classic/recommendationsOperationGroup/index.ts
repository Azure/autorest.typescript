// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebSiteManagementContext } from "../../api/webSiteManagementContext.js";
import {
  disableRecommendationForSubscription,
  resetAllFilters,
  list,
} from "../../api/recommendationsOperationGroup/operations.js";
import {
  RecommendationsOperationGroupDisableRecommendationForSubscriptionOptionalParams,
  RecommendationsOperationGroupResetAllFiltersOptionalParams,
  RecommendationsOperationGroupListOptionalParams,
} from "../../api/recommendationsOperationGroup/options.js";
import { Recommendation } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a RecommendationsOperationGroup operations. */
export interface RecommendationsOperationGroupOperations {
  /** Description for Disables the specified rule so it will not apply to a subscription in the future. */
  disableRecommendationForSubscription: (
    name: string,
    options?: RecommendationsOperationGroupDisableRecommendationForSubscriptionOptionalParams,
  ) => Promise<void>;
  /** Description for Reset all recommendation opt-out settings for a subscription. */
  resetAllFilters: (
    options?: RecommendationsOperationGroupResetAllFiltersOptionalParams,
  ) => Promise<void>;
  /** Description for List all recommendations for a subscription. */
  list: (
    options?: RecommendationsOperationGroupListOptionalParams,
  ) => PagedAsyncIterableIterator<Recommendation>;
}

function _getRecommendationsOperationGroup(context: WebSiteManagementContext) {
  return {
    disableRecommendationForSubscription: (
      name: string,
      options?: RecommendationsOperationGroupDisableRecommendationForSubscriptionOptionalParams,
    ) => disableRecommendationForSubscription(context, name, options),
    resetAllFilters: (options?: RecommendationsOperationGroupResetAllFiltersOptionalParams) =>
      resetAllFilters(context, options),
    list: (options?: RecommendationsOperationGroupListOptionalParams) => list(context, options),
  };
}

export function _getRecommendationsOperationGroupOperations(
  context: WebSiteManagementContext,
): RecommendationsOperationGroupOperations {
  return {
    ..._getRecommendationsOperationGroup(context),
  };
}

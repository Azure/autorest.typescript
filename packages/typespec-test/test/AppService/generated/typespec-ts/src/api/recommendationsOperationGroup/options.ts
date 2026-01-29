// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface RecommendationsOperationGroupDisableRecommendationForSubscriptionOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface RecommendationsOperationGroupResetAllFiltersOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface RecommendationsOperationGroupListOptionalParams extends OperationOptions {
  /** Specify <code>true</code> to return only the most critical recommendations. The default is <code>false</code>, which returns all recommendations. */
  featured?: boolean;
  /** Filter is specified by using OData syntax. Example: $filter=channel eq 'Api' or channel eq 'Notification' and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[PT1H|PT1M|P1D] */
  filter?: string;
}

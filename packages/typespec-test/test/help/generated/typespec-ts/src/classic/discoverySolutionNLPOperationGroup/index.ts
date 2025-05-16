// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HelpContext } from "../../api/helpContext.js";
import {
  DiscoveryNlpRequest,
  DiscoveryNlpResponse,
} from "../../models/models.js";
import {
  DiscoverySolutionNLPOperationGroupDiscoverSolutionsBySubscriptionOptionalParams,
  DiscoverySolutionNLPOperationGroupDiscoverSolutionsOptionalParams,
} from "../../api/discoverySolutionNLPOperationGroup/options.js";
import {
  discoverSolutionsBySubscription,
  discoverSolutions,
} from "../../api/discoverySolutionNLPOperationGroup/operations.js";

/** Interface representing a DiscoverySolutionNLPOperationGroup operations. */
export interface DiscoverySolutionNLPOperationGroupOperations {
  /** Search for relevant Azure Diagnostics, Solutions and Troubleshooters using a natural language issue summary and subscription. */
  discoverSolutionsBySubscription: (
    discoverSolutionRequest: DiscoveryNlpRequest,
    options?: DiscoverySolutionNLPOperationGroupDiscoverSolutionsBySubscriptionOptionalParams,
  ) => Promise<DiscoveryNlpResponse>;
  /** Search for relevant Azure Diagnostics, Solutions and Troubleshooters using a natural language issue summary. */
  discoverSolutions: (
    discoverSolutionRequest: DiscoveryNlpRequest,
    options?: DiscoverySolutionNLPOperationGroupDiscoverSolutionsOptionalParams,
  ) => Promise<DiscoveryNlpResponse>;
}

function _getDiscoverySolutionNLPOperationGroup(context: HelpContext) {
  return {
    discoverSolutionsBySubscription: (
      discoverSolutionRequest: DiscoveryNlpRequest,
      options?: DiscoverySolutionNLPOperationGroupDiscoverSolutionsBySubscriptionOptionalParams,
    ) =>
      discoverSolutionsBySubscription(
        context,
        discoverSolutionRequest,
        options,
      ),
    discoverSolutions: (
      discoverSolutionRequest: DiscoveryNlpRequest,
      options?: DiscoverySolutionNLPOperationGroupDiscoverSolutionsOptionalParams,
    ) => discoverSolutions(context, discoverSolutionRequest, options),
  };
}

export function _getDiscoverySolutionNLPOperationGroupOperations(
  context: HelpContext,
): DiscoverySolutionNLPOperationGroupOperations {
  return {
    ..._getDiscoverySolutionNLPOperationGroup(context),
  };
}

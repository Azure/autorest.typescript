// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HelpContext } from "../../api/helpContext.js";
import { SolutionMetadataResource } from "../../models/models.js";
import { DiscoverySolutionOperationGroupListOptionalParams } from "../../api/discoverySolutionOperationGroup/options.js";
import { list } from "../../api/discoverySolutionOperationGroup/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a DiscoverySolutionOperationGroup operations. */
export interface DiscoverySolutionOperationGroupOperations {
  /** Lists the relevant Azure Diagnostics, Solutions and Troubleshooters using [problemClassification API](https://learn.microsoft.com/rest/api/support/problem-classifications/list?tabs=HTTP)) AND  resourceUri or resourceType.<br/> Discovery Solutions is the initial entry point within Help API, which identifies relevant Azure diagnostics and solutions. <br/><br/> Required Input :  problemClassificationId (Use the [problemClassification API](https://learn.microsoft.com/rest/api/support/problem-classifications/list?tabs=HTTP)) <br/>Optional input: resourceUri OR resource Type <br/><br/> <b>Note: </b>  ‘requiredInputs’ from Discovery solutions response must be passed via ‘additionalParameters’ as an input to Diagnostics and Solutions API. */
  list: (
    options?: DiscoverySolutionOperationGroupListOptionalParams,
  ) => PagedAsyncIterableIterator<SolutionMetadataResource>;
}

function _getDiscoverySolutionOperationGroup(context: HelpContext) {
  return {
    list: (options?: DiscoverySolutionOperationGroupListOptionalParams) =>
      list(context, options),
  };
}

export function _getDiscoverySolutionOperationGroupOperations(
  context: HelpContext,
): DiscoverySolutionOperationGroupOperations {
  return {
    ..._getDiscoverySolutionOperationGroup(context),
  };
}

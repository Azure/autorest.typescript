// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HelpContext } from "../../api/helpContext.js";
import { SimplifiedSolutionsResource } from "../../models/models.js";
import {
  SimplifiedSolutionsResourcesCreateOptionalParams,
  SimplifiedSolutionsResourcesGetOptionalParams,
} from "../../api/simplifiedSolutionsResources/options.js";
import {
  create,
  get,
} from "../../api/simplifiedSolutionsResources/operations.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a SimplifiedSolutionsResources operations. */
export interface SimplifiedSolutionsResourcesOperations {
  /** Creates Simplified Solutions for an Azure subscription using 'solutionId' from Discovery Solutions as the input. <br/><br/> Simplified Solutions API makes the consumption of solutions APIs easier while still providing access to the same powerful solutions rendered in Solutions API. With Simplified Solutions, users don't have to worry about stitching together the article using replacement maps and can use the content in the API response to directly render as HTML content.<br/> */
  create: (
    scope: string,
    simplifiedSolutionsResourceName: string,
    simplifiedSolutionsRequestBody: SimplifiedSolutionsResource,
    options?: SimplifiedSolutionsResourcesCreateOptionalParams,
  ) => PollerLike<
    OperationState<SimplifiedSolutionsResource>,
    SimplifiedSolutionsResource
  >;
  /** Get the simplified Solutions using the applicable solutionResourceName while creating the simplified Solutions. */
  get: (
    scope: string,
    simplifiedSolutionsResourceName: string,
    options?: SimplifiedSolutionsResourcesGetOptionalParams,
  ) => Promise<SimplifiedSolutionsResource>;
}

function _getSimplifiedSolutionsResources(context: HelpContext) {
  return {
    create: (
      scope: string,
      simplifiedSolutionsResourceName: string,
      simplifiedSolutionsRequestBody: SimplifiedSolutionsResource,
      options?: SimplifiedSolutionsResourcesCreateOptionalParams,
    ) =>
      create(
        context,
        scope,
        simplifiedSolutionsResourceName,
        simplifiedSolutionsRequestBody,
        options,
      ),
    get: (
      scope: string,
      simplifiedSolutionsResourceName: string,
      options?: SimplifiedSolutionsResourcesGetOptionalParams,
    ) => get(context, scope, simplifiedSolutionsResourceName, options),
  };
}

export function _getSimplifiedSolutionsResourcesOperations(
  context: HelpContext,
): SimplifiedSolutionsResourcesOperations {
  return {
    ..._getSimplifiedSolutionsResources(context),
  };
}

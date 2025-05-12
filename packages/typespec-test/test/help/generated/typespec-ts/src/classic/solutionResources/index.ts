// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HelpContext } from "../../api/helpContext.js";
import {
  SolutionResource,
  SolutionPatchRequestBody,
  SolutionWarmUpRequestBody,
} from "../../models/models.js";
import {
  SolutionResourcesWarmUpOptionalParams,
  SolutionResourcesUpdateOptionalParams,
  SolutionResourcesCreateOptionalParams,
  SolutionResourcesGetOptionalParams,
} from "../../api/solutionResources/options.js";
import {
  warmUp,
  update,
  create,
  get,
} from "../../api/solutionResources/operations.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a SolutionResources operations. */
export interface SolutionResourcesOperations {
  /** Warm up the solution resource by preloading asynchronous diagnostics results into cache */
  warmUp: (
    scope: string,
    solutionResourceName: string,
    body: {
      solutionWarmUpRequestBody?: SolutionWarmUpRequestBody;
    },
    options?: SolutionResourcesWarmUpOptionalParams,
  ) => Promise<void>;
  /** Update the requiredInputs or additional information needed to execute the solution */
  update: (
    scope: string,
    solutionResourceName: string,
    solutionPatchRequestBody: SolutionPatchRequestBody,
    options?: SolutionResourcesUpdateOptionalParams,
  ) => PollerLike<OperationState<SolutionResource>, SolutionResource>;
  /** Creates a solution for the specific Azure resource or subscription using the inputs ‘solutionId and requiredInputs’ from discovery solutions. <br/> Azure solutions comprise a comprehensive library of self-help resources that have been thoughtfully curated by Azure engineers to aid customers in resolving typical troubleshooting issues. These solutions encompass: <br/> (1.) Dynamic and context-aware diagnostics, guided troubleshooting wizards, and data visualizations. <br/> (2.) Rich instructional video tutorials and illustrative diagrams and images. <br/> (3.) Thoughtfully assembled textual troubleshooting instructions. <br/> All these components are seamlessly converged into unified solutions tailored to address a specific support problem area. */
  create: (
    scope: string,
    solutionResourceName: string,
    solutionRequestBody: SolutionResource,
    options?: SolutionResourcesCreateOptionalParams,
  ) => PollerLike<OperationState<SolutionResource>, SolutionResource>;
  /** Get the solution using the applicable solutionResourceName while creating the solution. */
  get: (
    scope: string,
    solutionResourceName: string,
    options?: SolutionResourcesGetOptionalParams,
  ) => Promise<SolutionResource>;
}

function _getSolutionResources(context: HelpContext) {
  return {
    warmUp: (
      scope: string,
      solutionResourceName: string,
      body: {
        solutionWarmUpRequestBody?: SolutionWarmUpRequestBody;
      },
      options?: SolutionResourcesWarmUpOptionalParams,
    ) => warmUp(context, scope, solutionResourceName, body, options),
    update: (
      scope: string,
      solutionResourceName: string,
      solutionPatchRequestBody: SolutionPatchRequestBody,
      options?: SolutionResourcesUpdateOptionalParams,
    ) =>
      update(
        context,
        scope,
        solutionResourceName,
        solutionPatchRequestBody,
        options,
      ),
    create: (
      scope: string,
      solutionResourceName: string,
      solutionRequestBody: SolutionResource,
      options?: SolutionResourcesCreateOptionalParams,
    ) =>
      create(
        context,
        scope,
        solutionResourceName,
        solutionRequestBody,
        options,
      ),
    get: (
      scope: string,
      solutionResourceName: string,
      options?: SolutionResourcesGetOptionalParams,
    ) => get(context, scope, solutionResourceName, options),
  };
}

export function _getSolutionResourcesOperations(
  context: HelpContext,
): SolutionResourcesOperations {
  return {
    ..._getSolutionResources(context),
  };
}

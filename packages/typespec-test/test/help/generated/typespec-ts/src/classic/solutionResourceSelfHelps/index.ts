// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HelpContext } from "../../api/helpContext.js";
import { SolutionResourceSelfHelp } from "../../models/models.js";
import { SolutionResourceSelfHelpsGetOptionalParams } from "../../api/solutionResourceSelfHelps/options.js";
import { get } from "../../api/solutionResourceSelfHelps/operations.js";

/** Interface representing a SolutionResourceSelfHelps operations. */
export interface SolutionResourceSelfHelpsOperations {
  /** Gets Self Help Solutions for a given solutionId. Self Help Solutions consist of rich instructional video tutorials, links and guides to public documentation related to a specific problem that enables users to troubleshoot Azure issues. */
  get: (
    solutionId: string,
    options?: SolutionResourceSelfHelpsGetOptionalParams,
  ) => Promise<SolutionResourceSelfHelp>;
}

function _getSolutionResourceSelfHelps(context: HelpContext) {
  return {
    get: (
      solutionId: string,
      options?: SolutionResourceSelfHelpsGetOptionalParams,
    ) => get(context, solutionId, options),
  };
}

export function _getSolutionResourceSelfHelpsOperations(
  context: HelpContext,
): SolutionResourceSelfHelpsOperations {
  return {
    ..._getSolutionResourceSelfHelps(context),
  };
}

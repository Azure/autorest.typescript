// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebContext } from "../../api/webContext.js";
import { suspend } from "../../api/sites/operations.js";
import { SitesSuspendOptionalParams } from "../../api/sites/options.js";
import { Site } from "../../models/models.js";

/** Interface representing a Sites operations. */
export interface SitesOperations {
  /** A long-running resource action. */
  suspend: (
    resourceGroupName: string,
    name: string,
    options?: SitesSuspendOptionalParams,
  ) => Promise<Site[]>;
}

function _getSites(context: WebContext) {
  return {
    suspend: (resourceGroupName: string, name: string, options?: SitesSuspendOptionalParams) =>
      suspend(context, resourceGroupName, name, options),
  };
}

export function _getSitesOperations(context: WebContext): SitesOperations {
  return {
    ..._getSites(context),
  };
}

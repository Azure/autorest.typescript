// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebSiteManagementContext } from "../../api/webSiteManagementContext.js";
import { previewWorkflow } from "../../api/staticSitesOperationGroup/operations.js";
import { StaticSitesOperationGroupPreviewWorkflowOptionalParams } from "../../api/staticSitesOperationGroup/options.js";
import {
  StaticSitesWorkflowPreviewRequest,
  StaticSitesWorkflowPreview,
} from "../../models/models.js";

/** Interface representing a StaticSitesOperationGroup operations. */
export interface StaticSitesOperationGroupOperations {
  /** Description for Generates a preview workflow file for the static site */
  previewWorkflow: (
    location: string,
    body: StaticSitesWorkflowPreviewRequest,
    options?: StaticSitesOperationGroupPreviewWorkflowOptionalParams,
  ) => Promise<StaticSitesWorkflowPreview>;
}

function _getStaticSitesOperationGroup(context: WebSiteManagementContext) {
  return {
    previewWorkflow: (
      location: string,
      body: StaticSitesWorkflowPreviewRequest,
      options?: StaticSitesOperationGroupPreviewWorkflowOptionalParams,
    ) => previewWorkflow(context, location, body, options),
  };
}

export function _getStaticSitesOperationGroupOperations(
  context: WebSiteManagementContext,
): StaticSitesOperationGroupOperations {
  return {
    ..._getStaticSitesOperationGroup(context),
  };
}

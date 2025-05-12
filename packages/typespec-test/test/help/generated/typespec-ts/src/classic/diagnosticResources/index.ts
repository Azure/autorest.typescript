// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HelpContext } from "../../api/helpContext.js";
import { DiagnosticResource } from "../../models/models.js";
import {
  DiagnosticResourcesCreateOptionalParams,
  DiagnosticResourcesGetOptionalParams,
} from "../../api/diagnosticResources/options.js";
import { create, get } from "../../api/diagnosticResources/operations.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a DiagnosticResources operations. */
export interface DiagnosticResourcesOperations {
  /** Creates a diagnostic for the specific resource using solutionId from discovery solutions. <br/>Diagnostics are powerful solutions that access product resources or other relevant data and provide the root cause of the issue and the steps to address the issue.<br/><br/> */
  create: (
    scope: string,
    diagnosticsResourceName: string,
    diagnosticResourceRequest: DiagnosticResource,
    options?: DiagnosticResourcesCreateOptionalParams,
  ) => PollerLike<OperationState<DiagnosticResource>, DiagnosticResource>;
  /** Get the diagnostics using the 'diagnosticsResourceName' you chose while creating the diagnostic. */
  get: (
    scope: string,
    diagnosticsResourceName: string,
    options?: DiagnosticResourcesGetOptionalParams,
  ) => Promise<DiagnosticResource>;
}

function _getDiagnosticResources(context: HelpContext) {
  return {
    create: (
      scope: string,
      diagnosticsResourceName: string,
      diagnosticResourceRequest: DiagnosticResource,
      options?: DiagnosticResourcesCreateOptionalParams,
    ) =>
      create(
        context,
        scope,
        diagnosticsResourceName,
        diagnosticResourceRequest,
        options,
      ),
    get: (
      scope: string,
      diagnosticsResourceName: string,
      options?: DiagnosticResourcesGetOptionalParams,
    ) => get(context, scope, diagnosticsResourceName, options),
  };
}

export function _getDiagnosticResourcesOperations(
  context: HelpContext,
): DiagnosticResourcesOperations {
  return {
    ..._getDiagnosticResources(context),
  };
}

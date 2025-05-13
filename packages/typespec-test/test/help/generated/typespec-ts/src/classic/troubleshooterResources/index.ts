// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HelpContext } from "../../api/helpContext.js";
import {
  TroubleshooterResource,
  ContinueRequestBody,
  RestartTroubleshooterResponse,
} from "../../models/models.js";
import {
  TroubleshooterResourcesRestartOptionalParams,
  TroubleshooterResourcesEndOptionalParams,
  TroubleshooterResourcesContinueOptionalParams,
  TroubleshooterResourcesCreateOptionalParams,
  TroubleshooterResourcesGetOptionalParams,
} from "../../api/troubleshooterResources/options.js";
import {
  restart,
  end,
  $continue,
  create,
  get,
} from "../../api/troubleshooterResources/operations.js";

/** Interface representing a TroubleshooterResources operations. */
export interface TroubleshooterResourcesOperations {
  /** Restarts the troubleshooter API using applicable troubleshooter resource name as the input.<br/> It returns new resource name which should be used in subsequent request. The old resource name is obsolete after this API is invoked. */
  restart: (
    scope: string,
    troubleshooterName: string,
    options?: TroubleshooterResourcesRestartOptionalParams,
  ) => Promise<RestartTroubleshooterResponse>;
  /** Ends the troubleshooter action */
  end: (
    scope: string,
    troubleshooterName: string,
    options?: TroubleshooterResourcesEndOptionalParams,
  ) => Promise<void>;
  /** Uses ‘stepId’ and ‘responses’ as the trigger to continue the troubleshooting steps for the respective troubleshooter resource name. <br/>Continue API is used to provide inputs that are required for the specific troubleshooter to progress into the next step in the process. This API is used after the Troubleshooter has been created using the Create API. */
  /**
   *  @fixme continue is a reserved word that cannot be used as a method name.
   *         Please add @methodName("methodName") or @methodName("<JS-Specific-Name>", "javascript")
   *         to the method to override the generated name.
   */
  continue: (
    scope: string,
    troubleshooterName: string,
    body: {
      continueRequestBody?: ContinueRequestBody;
    },
    options?: TroubleshooterResourcesContinueOptionalParams,
  ) => Promise<void>;
  /** Creates the specific troubleshooter action under a resource or subscription using the ‘solutionId’ and  ‘properties.parameters’ as the trigger. <br/> Azure Troubleshooters help with hard to classify issues, reducing the gap between customer observed problems and solutions by guiding the user effortlessly through the troubleshooting process. Each Troubleshooter flow represents a problem area within Azure and has a complex tree-like structure that addresses many root causes. These flows are prepared with the help of Subject Matter experts and customer support engineers by carefully considering previous support requests raised by customers. Troubleshooters terminate at a well curated solution based off of resource backend signals and customer manual selections. */
  create: (
    scope: string,
    troubleshooterName: string,
    createTroubleshooterRequestBody: TroubleshooterResource,
    options?: TroubleshooterResourcesCreateOptionalParams,
  ) => Promise<TroubleshooterResource>;
  /** Gets troubleshooter instance result which includes the step status/result of the troubleshooter resource name that is being executed.<br/> Get API is used to retrieve the result of a Troubleshooter instance, which includes the status and result of each step in the Troubleshooter workflow. This API requires the Troubleshooter resource name that was created using the Create API. */
  get: (
    scope: string,
    troubleshooterName: string,
    options?: TroubleshooterResourcesGetOptionalParams,
  ) => Promise<TroubleshooterResource>;
}

function _getTroubleshooterResources(context: HelpContext) {
  return {
    restart: (
      scope: string,
      troubleshooterName: string,
      options?: TroubleshooterResourcesRestartOptionalParams,
    ) => restart(context, scope, troubleshooterName, options),
    end: (
      scope: string,
      troubleshooterName: string,
      options?: TroubleshooterResourcesEndOptionalParams,
    ) => end(context, scope, troubleshooterName, options),
    continue: (
      scope: string,
      troubleshooterName: string,
      body: {
        continueRequestBody?: ContinueRequestBody;
      },
      options?: TroubleshooterResourcesContinueOptionalParams,
    ) => $continue(context, scope, troubleshooterName, body, options),
    create: (
      scope: string,
      troubleshooterName: string,
      createTroubleshooterRequestBody: TroubleshooterResource,
      options?: TroubleshooterResourcesCreateOptionalParams,
    ) =>
      create(
        context,
        scope,
        troubleshooterName,
        createTroubleshooterRequestBody,
        options,
      ),
    get: (
      scope: string,
      troubleshooterName: string,
      options?: TroubleshooterResourcesGetOptionalParams,
    ) => get(context, scope, troubleshooterName, options),
  };
}

export function _getTroubleshooterResourcesOperations(
  context: HelpContext,
): TroubleshooterResourcesOperations {
  return {
    ..._getTroubleshooterResources(context),
  };
}

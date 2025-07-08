// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ConfluentContext } from "../../api/confluentContext.js";
import { SCEnvironmentRecord } from "../../models/models.js";
import {
  EnvironmentDeleteOptionalParams,
  EnvironmentCreateOrUpdateOptionalParams,
} from "../../api/environment/options.js";
import { $delete, createOrUpdate } from "../../api/environment/operations.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Environment operations. */
export interface EnvironmentOperations {
  /** Delete confluent environment by id */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    organizationName: string,
    environmentId: string,
    options?: EnvironmentDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create confluent environment */
  createOrUpdate: (
    resourceGroupName: string,
    organizationName: string,
    environmentId: string,
    options?: EnvironmentCreateOrUpdateOptionalParams,
  ) => Promise<SCEnvironmentRecord>;
}

function _getEnvironment(context: ConfluentContext) {
  return {
    delete: (
      resourceGroupName: string,
      organizationName: string,
      environmentId: string,
      options?: EnvironmentDeleteOptionalParams,
    ) =>
      $delete(
        context,
        resourceGroupName,
        organizationName,
        environmentId,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      organizationName: string,
      environmentId: string,
      options?: EnvironmentCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        organizationName,
        environmentId,
        options,
      ),
  };
}

export function _getEnvironmentOperations(
  context: ConfluentContext,
): EnvironmentOperations {
  return {
    ..._getEnvironment(context),
  };
}

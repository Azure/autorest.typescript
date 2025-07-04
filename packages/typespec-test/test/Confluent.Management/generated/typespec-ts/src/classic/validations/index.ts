// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ConfluentContext } from "../../api/confluentContext.js";
import {
  OrganizationResource,
  ValidationResponse,
} from "../../models/models.js";
import {
  ValidationsValidateOrganizationV2OptionalParams,
  ValidationsValidateOrganizationOptionalParams,
} from "../../api/validations/options.js";
import {
  validateOrganizationV2,
  validateOrganization,
} from "../../api/validations/operations.js";

/** Interface representing a Validations operations. */
export interface ValidationsOperations {
  /** Organization Validate proxy resource */
  validateOrganizationV2: (
    resourceGroupName: string,
    organizationName: string,
    body: OrganizationResource,
    options?: ValidationsValidateOrganizationV2OptionalParams,
  ) => Promise<ValidationResponse>;
  /** Organization Validate proxy resource */
  validateOrganization: (
    resourceGroupName: string,
    organizationName: string,
    body: OrganizationResource,
    options?: ValidationsValidateOrganizationOptionalParams,
  ) => Promise<OrganizationResource>;
}

function _getValidations(context: ConfluentContext) {
  return {
    validateOrganizationV2: (
      resourceGroupName: string,
      organizationName: string,
      body: OrganizationResource,
      options?: ValidationsValidateOrganizationV2OptionalParams,
    ) =>
      validateOrganizationV2(
        context,
        resourceGroupName,
        organizationName,
        body,
        options,
      ),
    validateOrganization: (
      resourceGroupName: string,
      organizationName: string,
      body: OrganizationResource,
      options?: ValidationsValidateOrganizationOptionalParams,
    ) =>
      validateOrganization(
        context,
        resourceGroupName,
        organizationName,
        body,
        options,
      ),
  };
}

export function _getValidationsOperations(
  context: ConfluentContext,
): ValidationsOperations {
  return {
    ..._getValidations(context),
  };
}

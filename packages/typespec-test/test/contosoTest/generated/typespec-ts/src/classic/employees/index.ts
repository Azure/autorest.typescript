// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ContosoProviderHubContext } from "../../api/contosoProviderHubContext.js";
import { Employee } from "../../models/models.js";
import { EmployeesGetOptionalParams } from "../../api/employees/options.js";
import { get } from "../../api/employees/operations.js";

/** Interface representing a Employees operations. */
export interface EmployeesOperations {
  /** Get a Employee */
  get: (
    resourceGroupName: string,
    employeeName: string,
    options?: EmployeesGetOptionalParams,
  ) => Promise<Employee>;
}

function _getEmployees(context: ContosoProviderHubContext) {
  return {
    get: (
      resourceGroupName: string,
      employeeName: string,
      options?: EmployeesGetOptionalParams,
    ) => get(context, resourceGroupName, employeeName, options),
  };
}

export function _getEmployeesOperations(
  context: ContosoProviderHubContext,
): EmployeesOperations {
  return {
    ..._getEmployees(context),
  };
}

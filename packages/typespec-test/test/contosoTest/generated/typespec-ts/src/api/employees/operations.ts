// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ContosoProviderHubContext as Client } from "../index.js";
import {
  Employee,
  employeeDeserializer,
  armErrorResponseDeserializer,
} from "../../models/models.js";
import { EmployeesGetOptionalParams } from "./options.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getSend(
  context: Client,
  resourceGroupName: string,
  employeeName: string,
  options: EmployeesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContosoProviderHub/employees/{employeeName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      employeeName: employeeName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<Employee> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    const statusCode = Number.parseInt(result.status);
    if (statusCode === 404) {
      error.details = armErrorResponseDeserializer(result.body);
    } else {
      error.details = armErrorResponseDeserializer(result.body);
    }
    throw error;
  }

  return employeeDeserializer(result.body);
}

/** Get a Employee */
export async function get(
  context: Client,
  resourceGroupName: string,
  employeeName: string,
  options: EmployeesGetOptionalParams = { requestOptions: {} },
): Promise<Employee> {
  const result = await _getSend(
    context,
    resourceGroupName,
    employeeName,
    options,
  );
  return _getDeserialize(result);
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Operation } from "@azure-tools/codemodel";
import { cloneDeep } from "lodash";

/**
 * Clone an operation and overwrite the operation name and description.
 * @param operation
 * @param operationName
 * @param operationDescription
 */
export function cloneOperation(
  operation: Operation,
  operationName: string,
  operationDescription: string
) {
  const operationInitializer = cloneDeep(operation);
  // filter out methods
  for (const key of Object.keys(operationInitializer)) {
    if (typeof (operationInitializer as any)[key] === "function") {
      delete (operationInitializer as any)[key];
    }
  }
  const newOperation = new Operation(
    operationName,
    operationDescription,
    operationInitializer
  );
  newOperation.language.default.name = operationName;
  newOperation.language.default.description = operationName;
  return newOperation;
}

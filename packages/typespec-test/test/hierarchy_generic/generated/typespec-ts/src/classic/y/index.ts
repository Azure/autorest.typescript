// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../api/fooContext.js";
import {
  YTestOperationsOperations,
  _getYTestOperationsOperations,
} from "./testOperations/index.js";

/** Interface representing a Y operations. */
export interface YOperations {
  testOperations: YTestOperationsOperations;
}

export function _getYOperations(context: FooContext): YOperations {
  return {
    testOperations: _getYTestOperationsOperations(context),
  };
}

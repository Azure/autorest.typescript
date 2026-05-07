// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../../api/fooContext.js";
import { testDataverseV2, testDataverse } from "../../../api/y/testOperations/operations.js";
import {
  YTestOperationsTestDataverseV2OptionalParams,
  YTestOperationsTestDataverseOptionalParams,
} from "../../../api/y/testOperations/options.js";
import { YDataverseDataverseSourceConnectorProperties } from "../../../models/y/dataverse/models.js";
import { YDataverseV2DataverseSourceConnectorV2Properties } from "../../../models/y/dataverseV2/models.js";

/** Interface representing a YTestOperations operations. */
export interface YTestOperationsOperations {
  testDataverseV2: (
    options?: YTestOperationsTestDataverseV2OptionalParams,
  ) => Promise<YDataverseV2DataverseSourceConnectorV2Properties>;
  testDataverse: (
    options?: YTestOperationsTestDataverseOptionalParams,
  ) => Promise<YDataverseDataverseSourceConnectorProperties>;
}

function _getYTestOperations(context: FooContext) {
  return {
    testDataverseV2: (options?: YTestOperationsTestDataverseV2OptionalParams) =>
      testDataverseV2(context, options),
    testDataverse: (options?: YTestOperationsTestDataverseOptionalParams) =>
      testDataverse(context, options),
  };
}

export function _getYTestOperationsOperations(context: FooContext): YTestOperationsOperations {
  return {
    ..._getYTestOperations(context),
  };
}

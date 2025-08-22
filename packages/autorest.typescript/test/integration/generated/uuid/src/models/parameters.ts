// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationParameter, OperationURLParameter } from "@azure/core-client";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "text/plain, application/json, text/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const testUuid: OperationParameter = {
  parameterPath: "testUuid",
  mapper: {
    defaultValue: "df79f5ce-4bf7-4680-8552-2317893986ed",
    serializedName: "Test-Uuid",
    required: true,
    type: {
      name: "Uuid",
    },
  },
};

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationParameter, OperationURLParameter } from "@azure/core-client";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const accountName: OperationURLParameter = {
  parameterPath: "accountName",
  mapper: {
    serializedName: "accountName",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const host: OperationURLParameter = {
  parameterPath: "host",
  mapper: {
    serializedName: "host",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

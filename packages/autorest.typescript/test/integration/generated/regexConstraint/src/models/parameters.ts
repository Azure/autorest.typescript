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

export const serverName: OperationURLParameter = {
  parameterPath: "serverName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z][a-z0-9]*$"),
      MaxLength: 63,
      MinLength: 3,
    },
    serializedName: "serverName",
    required: true,
    type: {
      name: "String",
    },
  },
};

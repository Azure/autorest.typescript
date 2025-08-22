// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationParameter, OperationURLParameter } from "@azure/core-client";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const input: OperationParameter = {
  parameterPath: ["options", "input"],
  mapper: {
    serializedName: "input",
    type: {
      name: "Number",
    },
  },
};

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

export const input1: OperationParameter = {
  parameterPath: ["options", "input"],
  mapper: {
    serializedName: "input",
    type: {
      name: "Number",
    },
  },
};

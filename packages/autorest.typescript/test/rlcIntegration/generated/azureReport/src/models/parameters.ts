// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";

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

export const qualifier: OperationQueryParameter = {
  parameterPath: ["options", "qualifier"],
  mapper: {
    serializedName: "qualifier",
    type: {
      name: "String",
    },
  },
};

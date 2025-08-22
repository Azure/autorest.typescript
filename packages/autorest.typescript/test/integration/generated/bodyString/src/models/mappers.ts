// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as coreClient from "@azure/core-client";

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "Number",
        },
      },
      message: {
        serializedName: "message",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const RefColorConstant: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RefColorConstant",
    modelProperties: {
      colorConstant: {
        defaultValue: "green-color",
        isConstant: true,
        serializedName: "ColorConstant",
        type: {
          name: "String",
        },
      },
      field1: {
        serializedName: "field1",
        type: {
          name: "String",
        },
      },
    },
  },
};

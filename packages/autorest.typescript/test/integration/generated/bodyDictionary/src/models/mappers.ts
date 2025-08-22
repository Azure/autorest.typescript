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

export const Widget: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Widget",
    modelProperties: {
      integer: {
        serializedName: "integer",
        type: {
          name: "Number",
        },
      },
      string: {
        serializedName: "string",
        type: {
          name: "String",
        },
      },
    },
  },
};

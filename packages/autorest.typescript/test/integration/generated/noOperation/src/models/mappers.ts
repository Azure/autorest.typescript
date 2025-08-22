// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as coreClient from "@azure/core-client";

export const Product: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Product",
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

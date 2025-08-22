// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as coreClient from "@azure/core-client";

export const SourcePath: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SourcePath",
    modelProperties: {
      source: {
        constraints: {
          MaxLength: 2048,
        },
        serializedName: "source",
        type: {
          name: "String",
        },
      },
    },
  },
};

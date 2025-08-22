// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as coreClient from "@azure/core-client";

export const PetDef: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PetDef",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      daysOfWeek: {
        defaultValue: "Friday",
        serializedName: "DaysOfWeek",
        type: {
          name: "String",
        },
      },
      intEnum: {
        serializedName: "IntEnum",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

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

export const LroParametrizedEndpointsClientPollWithParameterizedEndpointsHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "LroParametrizedEndpointsClientPollWithParameterizedEndpointsHeaders",
      modelProperties: {
        location: {
          serializedName: "location",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const LroParametrizedEndpointsClientPollWithConstantParameterizedEndpointsHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "LroParametrizedEndpointsClientPollWithConstantParameterizedEndpointsHeaders",
      modelProperties: {
        location: {
          serializedName: "location",
          type: {
            name: "String",
          },
        },
      },
    },
  };

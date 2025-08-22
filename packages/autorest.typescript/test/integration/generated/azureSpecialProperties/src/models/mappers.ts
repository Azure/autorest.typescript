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
      constantId: {
        defaultValue: 1,
        isConstant: true,
        serializedName: "constantId",
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

export const OdataFilter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OdataFilter",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Number",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const HeaderCustomNamedRequestIdHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "HeaderCustomNamedRequestIdHeaders",
    modelProperties: {
      fooRequestId: {
        serializedName: "foo-request-id",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const HeaderCustomNamedRequestIdParamGroupingHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "HeaderCustomNamedRequestIdParamGroupingHeaders",
      modelProperties: {
        fooRequestId: {
          serializedName: "foo-request-id",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const HeaderCustomNamedRequestIdHeadHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "HeaderCustomNamedRequestIdHeadHeaders",
      modelProperties: {
        fooRequestId: {
          serializedName: "foo-request-id",
          type: {
            name: "String",
          },
        },
      },
    },
  };

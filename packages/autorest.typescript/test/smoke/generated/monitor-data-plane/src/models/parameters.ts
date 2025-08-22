// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationParameter, OperationURLParameter } from "@azure/core-client";
import { AzureMetricsDocument as AzureMetricsDocumentMapper } from "../models/mappers.js";

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: AzureMetricsDocumentMapper,
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

export const contentType: OperationParameter = {
  parameterPath: "contentType",
  mapper: {
    serializedName: "Content-Type",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const contentLength: OperationParameter = {
  parameterPath: "contentLength",
  mapper: {
    serializedName: "Content-Length",
    required: true,
    type: {
      name: "Number",
    },
  },
};

export const authorization: OperationParameter = {
  parameterPath: "authorization",
  mapper: {
    serializedName: "Authorization",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resourceProvider: OperationURLParameter = {
  parameterPath: "resourceProvider",
  mapper: {
    serializedName: "resourceProvider",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resourceTypeName: OperationURLParameter = {
  parameterPath: "resourceTypeName",
  mapper: {
    serializedName: "resourceTypeName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resourceName: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

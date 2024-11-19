import {
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";

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

export const searchText: OperationQueryParameter = {
  parameterPath: ["options", "searchText"],
  mapper: {
    serializedName: "search",
    type: {
      name: "String",
    },
  },
};

export const includeTotalResultCount: OperationQueryParameter = {
  parameterPath: ["options", "searchOptions", "includeTotalResultCount"],
  mapper: {
    serializedName: "$count",
    type: {
      name: "Boolean",
    },
  },
};

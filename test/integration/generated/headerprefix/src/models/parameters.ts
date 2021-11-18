import { OperationParameter, OperationURLParameter } from "@azure/core-client";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/xml",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    xmlName: "$host",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const requestId: OperationParameter = {
  parameterPath: ["options", "requestId"],
  mapper: {
    serializedName: "x-ms-client-request-id",
    xmlName: "x-ms-client-request-id",
    type: {
      name: "String"
    }
  }
};

export const metadata: OperationParameter = {
  parameterPath: ["options", "metadata"],
  mapper: {
    serializedName: "x-ms-meta",
    xmlName: "x-ms-meta",
    headerCollectionPrefix: "x-ms-meta-",
    type: {
      name: "Dictionary",
      value: { type: { name: "String" } }
    }
  }
};

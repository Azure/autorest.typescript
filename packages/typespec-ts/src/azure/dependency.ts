import { CoreDependencies } from "../framework/dependency.js";

export const AzureCoreDependencies: CoreDependencies = {
  Client: {
    kind: "externalDependency",
    module: "@azure-rest/core-client",
    name: "Client"
  },
  ClientOptions: {
    kind: "externalDependency",
    module: "@azure-rest/core-client",
    name: "ClientOptions"
  },
  Pipeline: {
    kind: "externalDependency",
    module: "@azure-rest/core-client",
    name: "Pipeline"
  },
  getClient: {
    kind: "externalDependency",
    module: "@azure-rest/core-client",
    name: "getClient"
  },
  RestError: {
    kind: "externalDependency",
    module: "@azure-rest/core-client",
    name: "RestError"
  },
  OperationOptions: {
    kind: "externalDependency",
    module: "@azure-rest/core-client",
    name: "OperationOptions"
  },
  PathUnckeckedResponse: {
    kind: "externalDependency",
    module: "@azure-rest/core-client",
    name: "PathUnckeckedResponse"
  },
  AbortSignalLike: {
    kind: "externalDependency",
    module: "@azure/abort-controller",
    name: "AbortSignalLike"
  },
  createRestError: {
    kind: "externalDependency",
    module: "@azure-rest/core-client",
    name: "createRestError"
  },
  operationOptionsToRequestParameters: {
    kind: "externalDependency",
    module: "@azure-rest/core-client",
    name: "operationOptionsToRequestParameters"
  },
  uint8ArrayToString: {
    kind: "externalDependency",
    module: "@azure/core-util",
    name: "uint8ArrayToString"
  }
};

import { CoreDependencies } from "../framework/dependency.js";

export const DefaultCoreDependencies: CoreDependencies = {
  Client: {
    kind: "externalDependency",
    name: "Client",
    module: "@typespec/ts-http-runtime"
  },
  ClientOptions: {
    kind: "externalDependency",
    name: "ClientOptions",
    module: "@typespec/ts-http-runtime"
  },
  Pipeline: {
    kind: "externalDependency",
    name: "Pipeline",
    module: "@typespec/ts-http-runtime"
  },
  getClient: {
    kind: "externalDependency",
    name: "getClient",
    module: "@typespec/ts-http-runtime"
  },
  RestError: {
    kind: "externalDependency",
    name: "RestError",
    module: "@typespec/ts-http-runtime"
  },
  OperationOptions: {
    kind: "externalDependency",
    name: "OperationOptions",
    module: "@typespec/ts-http-runtime"
  },
  PathUncheckedResponse: {
    kind: "externalDependency",
    name: "PathUncheckedResponse",
    module: "@typespec/ts-http-runtime"
  },
  AbortSignalLike: {
    kind: "externalDependency",
    name: "AbortSignalLike",
    module: "@typespec/ts-http-runtime"
  },
  createRestError: {
    kind: "externalDependency",
    name: "createRestError",
    module: "@typespec/ts-http-runtime"
  },
  operationOptionsToRequestParameters: {
    kind: "externalDependency",
    name: "operationOptionsToRequestParameters",
    module: "@typespec/ts-http-runtime"
  },
  uint8ArrayToString: {
    kind: "externalDependency",
    name: "uint8ArrayToString",
    module: "@typespec/ts-http-runtime"
  }
} as const;

export const AzurePollingDependencies = {
  PollerLike: {
    kind: "externalDependency",
    module: "@azure/core-lro",
    name: "PollerLike"
  },
  OperationState: {
    kind: "externalDependency",
    module: "@azure/core-lro",
    name: "OperationState"
  },
  DeserializeState: {
    kind: "externalDependency",
    module: "@azure/core-lro",
    name: "deserializeState"
  },
  ResourceLocationConfig: {
    kind: "externalDependency",
    module: "@azure/core-lro",
    name: "ResourceLocationConfig"
  }
};

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
  PathUncheckedResponse: {
    kind: "externalDependency",
    module: "@azure-rest/core-client",
    name: "PathUncheckedResponse"
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

export const AzureIdentityDependencies = {
  DefaultAzureCredential: {
    kind: "externalDependency",
    module: "@azure/identity",
    name: "DefaultAzureCredential"
  }
};

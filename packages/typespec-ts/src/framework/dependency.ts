export interface ReferenceableSymbol {
  kind: string;
  name: string;
  module: string;
}

export type ExternalDependencies = CoreDependencies &
  Record<string, ReferenceableSymbol>;

/**
 * This interface defines the well known Core dependencies that plugins can use to override and provide their own implementations if needed
 */
export interface CoreDependencies extends Record<string, ReferenceableSymbol> {
  Client: { kind: "externalDependency"; name: "Client"; module: string };
  ClientOptions: {
    kind: "externalDependency";
    name: "ClientOptions";
    module: string;
  };
  Pipeline: { kind: "externalDependency"; name: "Pipeline"; module: string };
  getClient: { kind: "externalDependency"; name: "getClient"; module: string };
  RestError: { kind: "externalDependency"; name: "RestError"; module: string };
  OperationOptions: {
    kind: "externalDependency";
    name: "OperationOptions";
    module: string;
  };
  PathUnckeckedResponse: {
    kind: "externalDependency";
    name: "PathUnckeckedResponse";
    module: string;
  };
  AbortSignalLike: {
    kind: "externalDependency";
    name: "AbortSignalLike";
    module: string;
  };
  createRestError: {
    kind: "externalDependency";
    name: "createRestError";
    module: string;
  };
  operationOptionsToRequestParameters: {
    kind: "externalDependency";
    name: "operationOptionsToRequestParameters";
    module: string;
  };
  uint8ArrayToString: {
    kind: "externalDependency";
    name: "uint8ArrayToString";
    module: string;
  };
}

const _CoreDependencies: CoreDependencies = {
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
  PathUnckeckedResponse: {
    kind: "externalDependency",
    name: "PathUnckeckedResponse",
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

export const DEFAULT_DEPENDENCIES = _CoreDependencies;

export type CoreDependency = keyof CoreDependencies;

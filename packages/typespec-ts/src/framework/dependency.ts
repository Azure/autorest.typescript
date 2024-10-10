export interface ReferenceableSymbol {
  kind: string;
  name: string;
  module: string;
  visibility?: "internal" | "public";
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
  StreamableMethod: {
    kind: "externalDependency";
    name: "StreamableMethod";
    module: string;
  };
  PathUncheckedResponse: {
    kind: "externalDependency";
    name: "PathUncheckedResponse";
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
  stringToUint8Array: {
    kind: "externalDependency";
    name: "stringToUint8Array";
    module: string;
  };
  isKeyCredential: {
    kind: "externalDependency";
    name: "isKeyCredential";
    module: string;
  };
  KeyCredential: {
    kind: "externalDependency";
    name: "KeyCredential";
    module: string;
  };
  TokenCredential: {
    kind: "externalDependency";
    name: "TokenCredential";
    module: string;
  };
  ErrorModel: {
    kind: "externalDependency";
    name: "ErrorModel";
    module: string;
  };
}

export type CoreDependency = keyof CoreDependencies;

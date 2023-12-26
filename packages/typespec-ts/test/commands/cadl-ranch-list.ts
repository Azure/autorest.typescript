export interface TypeSpecRanchConfig {
  outputPath: string;
  inputPath: string;
  debug?: boolean;
}

export const rlcTsps: TypeSpecRanchConfig[] = [
  {
    outputPath: "payload/multipart",
    inputPath: "payload/multipart"
  }
];
export const nonBrandedRlcTsps: TypeSpecRanchConfig[] = [
  {
    outputPath: "models/usage",
    inputPath: "type/model/usage"
  }
];

export const modularTsps: TypeSpecRanchConfig[] = [
  {
    outputPath: "models/usage",
    inputPath: "type/model/usage"
  },
  {
    outputPath: "client/structure/default",
    inputPath: "client/structure/default"
  },
  {
    outputPath: "client/structure/multi-client",
    inputPath: "client/structure/multi-client"
  },
  {
    outputPath: "client/structure/renamed-operation",
    inputPath: "client/structure/renamed-operation"
  },
  {
    outputPath: "client/structure/two-operation-group",
    inputPath: "client/structure/two-operation-group"
  },
  {
    outputPath: "headers/client-request-id",
    inputPath: "special-headers/client-request-id"
  },
  {
    outputPath: "parameters/collection-format",
    inputPath: "parameters/collection-format"
  },
  {
    outputPath: "azure/core",
    inputPath: "azure/core/basic"
  },
  {
    outputPath: "models/inheritance/nested-discriminator",
    inputPath: "type/model/inheritance/nested-discriminator"
  },
  {
    outputPath: "models/inheritance/not-discriminated",
    inputPath: "type/model/inheritance/not-discriminated"
  },
  {
    outputPath: "models/inheritance/enum-discriminator",
    inputPath: "type/model/inheritance/enum-discriminator"
  },
  {
    outputPath: "models/inheritance/single-discriminator",
    inputPath: "type/model/inheritance/single-discriminator"
  },
  {
    outputPath: "payload/pageable",
    inputPath: "payload/pageable"
  },
  {
    outputPath: "encode/bytes",
    inputPath: "encode/bytes"
  },
  {
    outputPath: "encode/duration",
    inputPath: "encode/duration"
  },
  {
    outputPath: "encode/datetime",
    inputPath: "encode/datetime"
  },
  {
    outputPath: "parameters/spread",
    inputPath: "parameters/spread"
  },
  {
    outputPath: "server/path/single",
    inputPath: "server/path/single"
  },
  {
    outputPath: "authentication/api-key",
    inputPath: "authentication/api-key"
  },
  {
    outputPath: "authentication/http-custom",
    inputPath: "authentication/http/custom"
  },
  {
    outputPath: "server/path/multiple",
    inputPath: "server/path/multiple"
  },
  {
    outputPath: "authentication/oauth2",
    inputPath: "authentication/oauth2"
  },
  {
    outputPath: "authentication/union",
    inputPath: "authentication/union"
  },
  {
    outputPath: "headers/repeatability",
    inputPath: "special-headers/repeatability"
  },
  {
    outputPath: "azure/core-traits",
    inputPath: "azure/core/traits"
  }
];

export const nonBrandedModularTsps: TypeSpecRanchConfig[] = [
  {
    outputPath: "models/usage",
    inputPath: "type/model/usage"
  }
];

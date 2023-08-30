export interface TypeSpecRanchConfig {
  outputPath: string;
  inputPath: string;
  debug?: boolean;
}

export const rlcTsps: TypeSpecRanchConfig[] = [
  {
    outputPath: "union-body",
    inputPath: "union-body"
  },
  {
    outputPath: "headers/clientRequestId",
    inputPath: "special-headers/client-request-id"
  },
  {
    outputPath: "headers/repeatability",
    inputPath: "special-headers/repeatability"
  },
  {
    outputPath: "parameters/body-optionality",
    inputPath: "parameters/body-optionality"
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
    outputPath: "sharedRoute",
    inputPath: "shared-route"
  },
  {
    outputPath: "mediaTypes",
    inputPath: "media-types"
  },
  {
    outputPath: "overload",
    inputPath: "overload"
  },
  {
    outputPath: "arrays/itemTypes",
    inputPath: "type/array"
  },
  {
    outputPath: "authentication/apiKey",
    inputPath: "authentication/api-key"
  },
  {
    outputPath: "authentication/http-custom",
    inputPath: "authentication/http/custom"
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
    outputPath: "dictionary",
    inputPath: "type/dictionary"
  },
  {
    outputPath: "enums/extensible",
    inputPath: "type/enum/extensible"
  },
  {
    outputPath: "enums/fixed",
    inputPath: "type/enum/fixed"
  },
  {
    outputPath: "lro/lroCore",
    inputPath: "azure/core/lro/standard"
  },
  {
    outputPath: "lro/lroRPC",
    inputPath: "azure/core/lro/rpc-legacy"
  },
  {
    outputPath: "models/inheritance",
    inputPath: "type/model/inheritance/nested-discriminator"
  },
  {
    outputPath: "models/propertyOptional",
    inputPath: "type/property/optional"
  },
  {
    outputPath: "models/propertyNullable",
    inputPath: "type/property/nullable"
  },
  {
    outputPath: "models/propertyTypes",
    inputPath: "type/property/value-types"
  },
  {
    outputPath: "models/visibility",
    inputPath: "type/model/visibility"
  },
  {
    outputPath: "models/usage",
    inputPath: "type/model/usage"
  },
  {
    outputPath: "models/empty",
    inputPath: "type/model/empty"
  },
  {
    outputPath: "resiliency/srvDriven1",
    inputPath: "resiliency/srv-driven/old.tsp"
  },
  {
    outputPath: "resiliency/srvDriven2",
    inputPath: "resiliency/srv-driven/main.tsp"
  },
  {
    outputPath: "specialWords",
    inputPath: "special-words"
  },
  {
    outputPath: "unions",
    inputPath: "type/union"
  },
  {
    outputPath: "parameters/collection-format",
    inputPath: "parameters/collection-format"
  },
  {
    outputPath: "parameters/spread",
    inputPath: "parameters/spread"
  },
  {
    outputPath: "projection",
    inputPath: "projection/projected-name"
  },
  {
    outputPath: "internal",
    inputPath: "azure/client-generator-core/internal"
  },
  {
    outputPath: "server/path/single",
    inputPath: "server/path/single"
  },
  {
    outputPath: "server/path/multiple",
    inputPath: "server/path/multiple"
  },
  {
    outputPath: "azure/core",
    inputPath: "azure/core/basic"
  },
  {
    outputPath: "azure/core-traits",
    inputPath: "azure/core/traits"
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
  }
];

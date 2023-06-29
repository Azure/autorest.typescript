export interface TypeSpecRanchConfig {
  outputPath: string;
  inputPath: string;
  tag?: "rlc" | "modular" | "all" | "debug";
}

export const tsps: TypeSpecRanchConfig[] = [
  {
    outputPath: "encode",
    inputPath: "encode/duration",
    tag: "rlc"
  },
  {
    outputPath: "sharedRoute",
    inputPath: "shared-route",
    tag: "rlc"
  },
  {
    outputPath: "mediaTypes",
    inputPath: "media-types",
    tag: "rlc"
  },
  {
    outputPath: "overload",
    inputPath: "overload",
    tag: "rlc"
  },
  {
    outputPath: "arrays/itemTypes",
    inputPath: "type/array",
    tag: "rlc"
  },
  {
    outputPath: "authentication/apiKey",
    inputPath: "authentication/api-key",
    tag: "rlc"
  },
  {
    outputPath: "authentication/oauth2",
    inputPath: "authentication/oauth2",
    tag: "rlc"
  },
  {
    outputPath: "authentication/union",
    inputPath: "authentication/union",
    tag: "rlc"
  },
  {
    outputPath: "dictionary",
    inputPath: "type/dictionary",
    tag: "rlc"
  },
  {
    outputPath: "enums/extensible",
    inputPath: "type/enum/extensible",
    tag: "rlc"
  },
  {
    outputPath: "enums/fixed",
    inputPath: "type/enum/fixed",
    tag: "rlc"
  },
  {
    outputPath: "lro/lroCore",
    inputPath: "azure/core/lro/standard",
    tag: "rlc"
  },
  {
    outputPath: "lro/lroRPC",
    inputPath: "azure/core/lro/rpc",
    tag: "rlc"
  },
  {
    outputPath: "models/inheritance",
    inputPath: "type/model/inheritance",
    tag: "rlc"
  },
  {
    outputPath: "models/propertyOptional",
    inputPath: "type/property/optional",
    tag: "rlc"
  },
  {
    outputPath: "models/propertyNullable",
    inputPath: "type/property/nullable",
    tag: "rlc"
  },
  {
    outputPath: "models/propertyTypes",
    inputPath: "type/property/value-types",
    tag: "rlc"
  },
  {
    outputPath: "models/visibility",
    inputPath: "type/model/visibility",
    tag: "rlc"
  },
  {
    outputPath: "models/usage",
    inputPath: "type/model/usage",
    tag: "rlc"
  },
  {
    outputPath: "models/empty",
    inputPath: "type/model/empty",
    tag: "rlc"
  },
  {
    outputPath: "resiliency/srvDriven1",
    inputPath: "resiliency/srv-driven/old.tsp",
    tag: "rlc"
  },
  {
    outputPath: "resiliency/srvDriven2",
    inputPath: "resiliency/srv-driven/main.tsp",
    tag: "rlc"
  },
  {
    outputPath: "specialWords",
    inputPath: "special-words",
    tag: "rlc"
  },
  {
    outputPath: "unions",
    inputPath: "type/union",
    tag: "rlc"
  },
  {
    outputPath: "parameters/collection-format",
    inputPath: "parameters/collection-format",
    tag: "rlc"
  },
  {
    outputPath: "parameters/spread",
    inputPath: "parameters/spread",
    tag: "rlc"
  },
  {
    outputPath: "projection",
    inputPath: "projection/projected-name",
    tag: "rlc"
  },
  {
    outputPath: "internal",
    inputPath: "azure/client-generator-core/internal",
    tag: "rlc"
  },
  {
    outputPath: "server/path/single",
    inputPath: "server/path/single",
    tag: "rlc"
  },
  {
    outputPath: "server/path/multiple",
    inputPath: "server/path/multiple",
    tag: "rlc"
  },
  {
    outputPath: "azure/core",
    inputPath: "azure/core/basic",
    tag: "rlc"
  },
  {
    outputPath: "azure/core-traits",
    inputPath: "azure/core/traits",
    tag: "rlc"
  },
  {
    outputPath: "lro_modular",
    inputPath: "azure/core/lro/standard",
    tag: "debug"
  }
];

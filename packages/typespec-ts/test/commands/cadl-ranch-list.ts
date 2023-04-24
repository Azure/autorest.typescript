export interface CadlRanchConfig {
  outputPath: string;
  inputPath: string;
}

export const cadls: CadlRanchConfig[] = [
  {
    outputPath: "arrays/itemTypes",
    inputPath: "type/array"
  },
  {
    outputPath: "authentication/apiKey",
    inputPath: "authentication/api-key"
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
  // {
  //   outputPath: "lro/lroBasic",
  //   inputPath: "lro/lro-basic"
  // },
  // {
  //   outputPath: "lro/lroCore",
  //   inputPath: "lro/lro-core"
  // },
  {
    outputPath: "models/inheritance",
    inputPath: "type/model/inheritance"
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
  // {
  //   outputPath: "resiliency/devDriven",
  //   inputPath: "resiliency/dev-driven"
  // },
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
  }
];

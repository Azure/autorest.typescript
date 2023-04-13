export interface CadlRanchConfig {
  outputPath: string;
  inputPath: string;
}

export const cadls: CadlRanchConfig[] = [
  {
    outputPath: "arrays/itemTypes",
    inputPath: "arrays/item-types"
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
    inputPath: "dictionary"
  },
  {
    outputPath: "enums/extensible",
    inputPath: "enums/extensible"
  },
  {
    outputPath: "enums/fixed",
    inputPath: "enums/fixed"
  },
  {
    outputPath: "hello",
    inputPath: "hello"
  },
  {
    outputPath: "lro/lroBasic",
    inputPath: "lro/lro-basic"
  },
  {
    outputPath: "lro/lroCore",
    inputPath: "lro/lro-core"
  },
  {
    outputPath: "models/inheritance",
    inputPath: "models/inheritance"
  },
  {
    outputPath: "models/propertyOptional",
    inputPath: "models/property-optional"
  },
  {
    outputPath: "models/propertyNullable",
    inputPath: "models/property-nullable"
  },
  {
    outputPath: "models/propertyTypes",
    inputPath: "models/property-types"
  },
  {
    outputPath: "models/visibility",
    inputPath: "models/visibility"
  },
  {
    outputPath: "models/usage",
    inputPath: "models/usage"
  },
  {
    outputPath: "resiliency/devDriven",
    inputPath: "resiliency/dev-driven"
  },
  {
    outputPath: "resiliency/srvDriven1",
    inputPath: "resiliency/srv-driven-1"
  },
  {
    outputPath: "resiliency/srvDriven2",
    inputPath: "resiliency/srv-driven-2"
  },
  {
    outputPath: "specialWords",
    inputPath: "special-words"
  },
  {
    outputPath: "unions",
    inputPath: "unions"
  },
  {
    outputPath: "parameters/collection-format",
    inputPath: "parameters/collection-format"
  },
  {
    outputPath: "projection",
    inputPath: "projection"
  },
  {
    outputPath: "internal",
    inputPath: "internal"
  },
  {
    outputPath: "server/path/single",
    inputPath: "server/path/single"
  },
  {
    outputPath: "server/path/multiple",
    inputPath: "server/path/multiple"
  }
];

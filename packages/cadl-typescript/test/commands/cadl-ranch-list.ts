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
    outputPath: "dictionary",
    inputPath: "dictionary"
  },
  {
    outputPath: "extensibleEnums",
    inputPath: "extensible-enums"
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
    outputPath: "models/inheritance",
    inputPath: "models/inheritance"
  },
  {
    outputPath: "models/propertyOptional",
    inputPath: "models/property-optional"
  },
  {
    outputPath: "models/propertyTypes",
    inputPath: "models/property-types"
  },
  {
    outputPath: "models/readonlyProperties",
    inputPath: "models/readonly-properties"
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
    outputPath: "special-words",
    inputPath: "specialWords"
  }
];

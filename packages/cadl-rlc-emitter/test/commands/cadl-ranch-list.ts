export interface CadlRanchConfig {
  outputPath: string;
  inputPath: string;
}

export const cadls: CadlRanchConfig[] = [
  {
    outputPath: "authentication/apiKey",
    inputPath: "authentication/api-key"
  },
  {
    outputPath: "authentication/oauth2",
    inputPath: "authentication/oauth2"
  },
  {
    outputPath: "clients/interfaces",
    inputPath: "clients/interfaces"
  },
  // TODO: support dict type
  // issue tracked https://github.com/Azure/autorest.typescript/issues/1579
  // {
  //   outputPath: "dictionary",
  //   inputPath: "dictionary"
  // },
  {
    outputPath: "extensibleEnums",
    inputPath: "extensible-enums"
  },
  {
    outputPath: "hello",
    inputPath: "hello"
  },
  {
    outputPath: "models/inheritance",
    inputPath: "models/inheritance"
  },
  {
    outputPath: "models/inputBasic",
    inputPath: "models/input-basic"
  },
  {
    outputPath: "models/nestedModels",
    inputPath: "models/nested-models"
  },
  {
    outputPath: "models/outputBasic",
    inputPath: "models/output-basic"
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
    outputPath: "models/roundtripBasic",
    inputPath: "models/roundtrip-basic"
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
  }
];

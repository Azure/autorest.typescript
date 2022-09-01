export interface CadlRanchConfig {
  outputPath: string;
  inputPath: string;
}

export const cadls: CadlRanchConfig[] = [
  {
    outputPath: "hello",
    inputPath: "hello"
  },
  {
    outputPath: "extensibleEnums",
    inputPath: "extensible-enums"
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
    outputPath: "models/optionalProperties",
    inputPath: "models/optional-properties"
  },
  {
    outputPath: "models/propertyTypes",
    inputPath: "models/property-types"
  },
  {
    outputPath: "models/outputBasic",
    inputPath: "models/output-basic"
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
    outputPath: "clients/interfaces",
    inputPath: "clients/interfaces"
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

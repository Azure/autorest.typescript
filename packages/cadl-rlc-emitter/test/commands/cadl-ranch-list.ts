export interface CadlRanchConfig {
  outputPath: string;
  inputPath: string;
}

export const cadls: CadlRanchConfig[] = [
  {
    outputPath: "hello",
    inputPath: "hello"
  },
  // TODO: remember to fix this case in emitter side
  // {
  //   outputPath: "extensibleEnums",
  //   inputPath: "extensible-enums"
  // },
  {
    outputPath: "models/collectionsBasic",
    inputPath: "models/collections-basic"
  },
  // {
  //   outputPath: "models/collectionsModels",
  //   inputPath: "models/collections-models"
  // },
  // {
  //   outputPath: "models/enumProperties",
  //   inputPath: "models/enum-properties"
  // },
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
    outputPath: "models/outputBasic",
    inputPath: "models/output-basic"
  },
  {
    outputPath: "models/primitiveProperties",
    inputPath: "models/primitive-properties"
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
  }
];

import {
  buildRuntimeImports,
  initInternalImports
} from "../../src/helpers/importsUtil";
import { PackageFlavor, RLCModel } from "../../src/interfaces";

export type TestModelConfig = {
  moduleKind?: "esm" | "cjs";
  description?: string;
  withTests?: boolean;
  withSamples?: boolean;
  isMonorepo?: boolean;
  libraryName?: string;
  version?: string;
  flavor?: PackageFlavor;
  srcPath?: string;
  source?: "TypeSpec" | "Swagger";
  monorepoPackageDirectory?: string;
  hasLro?: boolean;
  hasPaging?: boolean;
  isModularLibrary?: boolean;
};

export function createMockModel(config: TestModelConfig = {}): RLCModel {
  return {
    importInfo: {
      runtimeImports: buildRuntimeImports(config.flavor),
      internalImports: initInternalImports()
    },
    libraryName: config.libraryName ?? "@msinternal/test",
    // Package json file generation doesn't need paths information
    paths: {},
    // Package json file generation doesn't need schemas information
    schemas: [],
    srcPath: config.srcPath ?? "src",
    options: {
      azureOutputDirectory: config.monorepoPackageDirectory,
      packageDetails: {
        name: config.libraryName ?? "@msinternal/test",
        version: config.version ?? "1.0.0",
        description: config.description ?? "A test package",
        nameWithoutScope: "test",
        scopeName: "msinternal"
      },
      azureSdkForJs: config.isMonorepo ?? false,
      flavor: config.flavor,
      generateTest: config.withTests ?? false,
      generateSample: config.withSamples ?? false,
      moduleKind: config.moduleKind,
      sourceFrom: config.source ?? "TypeSpec",
      isModularLibrary: config.isModularLibrary ?? false
    },
    helperDetails: {
      hasPaging: config.hasPaging ?? false,
      hasLongRunning: config.hasLro ?? false
    }
  };
}

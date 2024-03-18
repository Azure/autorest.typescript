import { Project } from "ts-morph";
import { ModularCodeModel } from "./modularCodeModel.js";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { getClassicalLayerPrefix } from "./helpers/namingHelpers.js";

function buildExportsForMultiClient(
  codeModel: ModularCodeModel,
  packageInfo: any
) {
  if (codeModel.clients.length > 1) {
    delete packageInfo.exports["./api"];
    delete packageInfo.exports["./models"];
    for (const client of codeModel.clients) {
      const subfolder = normalizeName(
        client.name.replace("Client", ""),
        NameType.File
      );
      packageInfo.exports[`./${subfolder}`] = `./src/${subfolder}/index.ts`;

      packageInfo.exports[`./${subfolder}/api`] =
        `./src/${subfolder}/api/index.ts`;
      packageInfo.exports[`./${subfolder}/models`] =
        `./src/${subfolder}/models/index.ts`;
    }
  }
  if (codeModel.options.hierarchyClient) {
    for (const client of codeModel.clients) {
      for (const operationGroup of client.operationGroups) {
        if (operationGroup.namespaceHierarchies.length === 0) {
          continue;
        }
        const subfolder =
          codeModel.clients.length > 1
            ? normalizeName(client.name.replace("Client", ""), NameType.File)
            : undefined;
        const subApiPath = `api/${getClassicalLayerPrefix(
          operationGroup,
          NameType.File,
          "/"
        )}`;
        packageInfo.exports[
          `./${subfolder ? subfolder + "/" : ""}${subApiPath}`
        ] = `src/${subfolder ? subfolder + "/" : ""}${subApiPath}/index.ts`;
      }
    }
  }

  return packageInfo.exports;
}

export function getModuleExports(codeModel: ModularCodeModel) {
  const exports = {
    exports: {
      ".": "./src/index.ts",
      "./api": "./src/api/index.ts",
      "./models": "./src/models/index.ts"
    }
  };

  return buildExportsForMultiClient(codeModel, exports);
}

// =========== emit tsconfig.json =============
const modularTsConfigInSDKRepo: Record<string, any> = {
  extends: "../../../tsconfig.package",
  compilerOptions: {
    outDir: "./dist-esm",
    declarationDir: "./types",
    module: "NodeNext",
    moduleResolution: "NodeNext",
    lib: ["esnext", "dom"],
    rootDir: "."
  },
  "ts-node": { esm: true },
  include: ["src/**/*.ts"]
};

const modularTsConfigNotInSDKRepo: Record<string, any> = {
  compilerOptions: {
    target: "ES2017",
    module: "NodeNext",
    lib: ["esnext", "dom"],
    declaration: true,
    declarationMap: true,
    inlineSources: true,
    sourceMap: true,
    importHelpers: true,
    strict: true,
    alwaysStrict: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    noImplicitReturns: true,
    noFallthroughCasesInSwitch: true,
    forceConsistentCasingInFileNames: true,
    moduleResolution: "NodeNext",
    allowSyntheticDefaultImports: true,
    esModuleInterop: true,
    outDir: "./dist-esm",
    declarationDir: "./types",
    rootDir: "."
  },
  "ts-node": { esm: true },
  include: ["./src/**/*.ts"]
};

export function emitTsConfig(
  project: Project,
  srcPath: string,
  codeModel: ModularCodeModel
) {
  const tsConfigFile = project.createSourceFile(
    `${srcPath}/tsconfig.json`,
    "",
    {
      overwrite: true
    }
  );

  const { packageDetails, azureSdkForJs } = codeModel.options || {};
  const { generateTest, generateSample } = codeModel.options || {};
  const isAzureFlavor = codeModel.options?.flavor === "azure";
  // Take the undefined as true by default
  const clientPackageName = packageDetails!.name;
  const tsConfig = (
    !isAzureFlavor
      ? modularTsConfigNotInSDKRepo
      : azureSdkForJs
        ? modularTsConfigInSDKRepo
        : modularTsConfigNotInSDKRepo
  ) as any;

  if (generateTest && isAzureFlavor) {
    tsConfig.include.push("./test/**/*.ts");
  }
  if (generateSample && isAzureFlavor) {
    tsConfig.include.push("samples-dev/**/*.ts");
    tsConfig.compilerOptions["paths"] = {};
    tsConfig.compilerOptions["paths"][clientPackageName] = ["./src/index"];
  }

  tsConfigFile.addStatements(JSON.stringify(tsConfig));

  return tsConfigFile;
}

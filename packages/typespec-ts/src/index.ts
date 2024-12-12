// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as fsextra from "fs-extra";
import {
  AzureCoreDependencies,
  AzureIdentityDependencies,
  AzurePollingDependencies,
  DefaultCoreDependencies
} from "./modular/external-dependencies.js";
import { EmitContext, Program } from "@typespec/compiler";
import { GenerationDirDetail, SdkContext } from "./utils/interfaces.js";
import {
  PagingHelpers,
  PollingHelpers,
  SerializationHelpers
} from "./modular/static-helpers-metadata.js";
import {
  RLCModel,
  RLCOptions,
  buildApiExtractorConfig,
  buildClient,
  buildClientDefinitions,
  buildEsLintConfig,
  buildIndexFile,
  buildIsUnexpectedHelper,
  buildLicenseFile,
  buildLogger,
  buildPackageFile,
  buildParameterTypes,
  buildPollingHelper,
  buildPaginateHelper as buildRLCPaginateHelper,
  buildReadmeFile,
  buildRecordedClientFile,
  buildResponseTypes,
  buildRollupConfig,
  buildSampleTest,
  buildSamples,
  buildSerializeHelper,
  buildTopLevelIndex,
  buildTsConfig,
  buildTsTestBrowserConfig,
  buildVitestConfig,
  getClientName,
  hasUnexpectedHelper,
  isAzurePackage,
  updatePackageFile,
  buildSampleEnvFile
} from "@azure-tools/rlc-common";
import {
  buildRootIndex,
  buildSubClientIndexFile
} from "./modular/buildRootIndex.js";
import { emitContentByBuilder, emitModels } from "./utils/emitUtil.js";
import { provideContext, useContext } from "./contextManager.js";

import { EmitterOptions } from "./lib.js";
import { ModularCodeModel } from "./modular/modularCodeModel.js";
import { Project, SourceFile } from "ts-morph";
import { buildClassicOperationFiles } from "./modular/buildClassicalOperationGroups.js";
import { buildClassicalClient } from "./modular/buildClassicalClient.js";
import {
  getClientContextPath,
  buildClientContext
} from "./modular/buildClientContext.js";
import { buildApiOptions } from "./modular/emitModelsOptions.js";
import { buildOperationFiles } from "./modular/buildOperations.js";
import { buildRestorePoller } from "./modular/buildRestorePoller.js";
import { buildSubpathIndexFile } from "./modular/buildSubpathIndex.js";
import { createSdkContext } from "@azure-tools/typespec-client-generator-core";
import { emitCodeModel } from "./modular/buildCodeModel.js";
import { emitLoggerFile } from "./modular/emitLoggerFile.js";
import { emitSerializerHelpersFile } from "./modular/buildHelperSerializers.js";
import { emitTypes } from "./modular/emitModels.js";
import { existsSync } from "fs";
import { getModuleExports } from "./modular/buildProjectFiles.js";
import { getRLCClients } from "./utils/clientUtils.js";
import { join } from "path";
import { loadStaticHelpers } from "./framework/load-static-helpers.js";
import { provideBinder } from "./framework/hooks/binder.js";
import { provideSdkTypes } from "./framework/hooks/sdkTypes.js";
import { transformRLCModel } from "./transform/transform.js";
import { transformRLCOptions } from "./transform/transfromRLCOptions.js";
import { emitSamples } from "./modular/emitSamples.js";

export * from "./lib.js";

export async function $onEmit(context: EmitContext) {
  if (context.program.compilerOptions.noEmit || context.program.hasError()) {
    return;
  }
  /** Shared status */
  const outputProject = new Project();
  const program: Program = context.program;
  const emitterOptions: EmitterOptions = context.options;
  const dpgContext = await createContextWithDefaultOptions(context);
  // Enrich the dpg context with path detail and common options
  await enrichDpgContext();
  const rlcOptions = dpgContext.rlcOptions ?? {};

  const needUnexpectedHelper: Map<string, boolean> = new Map<string, boolean>();
  const serviceNameToRlcModelsMap: Map<string, RLCModel> = new Map<
    string,
    RLCModel
  >();
  provideContext("rlcMetaTree", new Map());
  provideContext("symbolMap", new Map());
  provideContext("modularMetaTree", new Map());
  provideContext("outputProject", outputProject);
  provideContext("emitContext", {
    compilerContext: context,
    tcgcContext: dpgContext
  });
  const staticHelpers = await loadStaticHelpers(
    outputProject,
    {
      ...SerializationHelpers,
      ...PagingHelpers,
      ...PollingHelpers
    },
    { sourcesDir: dpgContext.generationPathDetail?.modularSourcesDir }
  );
  const extraDependencies = isAzurePackage({ options: rlcOptions })
    ? {
        ...AzurePollingDependencies,
        ...AzureCoreDependencies,
        ...AzureIdentityDependencies
      }
    : { ...DefaultCoreDependencies };
  const binder = provideBinder(outputProject, {
    staticHelpers,
    dependencies: {
      ...extraDependencies
    }
  });
  provideSdkTypes(dpgContext);

  const rlcCodeModels: RLCModel[] = [];
  let modularCodeModel: ModularCodeModel;

  // 1. Clear sources folder
  await clearSrcFolder();
  // 2. Generate RLC code model
  // TODO: skip this step in modular once modular generator is sufficiently decoupled
  await buildRLCCodeModels();

  // 4. Generate sources
  if (emitterOptions.isModularLibrary) {
    await generateModularSources();
  } else {
    await generateRLCSources();
  }

  // 5. Generate metadata and test files
  await generateMetadataAndTest();

  async function enrichDpgContext() {
    const generationPathDetail: GenerationDirDetail =
      await calculateGenerationDir();
    dpgContext.generationPathDetail = generationPathDetail;
    const options: RLCOptions = transformRLCOptions(emitterOptions, dpgContext);
    // clear output folder if needed
    if (options.clearOutputFolder) {
      await fsextra.emptyDir(context.emitterOutputDir);
    }
    const hasTestFolder = await fsextra.pathExists(
      join(dpgContext.generationPathDetail?.metadataDir ?? "", "test")
    );
    options.generateTest =
      options.generateTest === true ||
      (options.generateTest === undefined &&
        !hasTestFolder &&
        isAzurePackage({ options: options }));
    dpgContext.rlcOptions = options;
  }

  async function calculateGenerationDir(): Promise<GenerationDirDetail> {
    const projectRoot = context.emitterOutputDir ?? "";
    const customizationFolder = join(projectRoot, "generated");
    // if customization folder exists, use it as sources root
    const sourcesRoot = (await fsextra.pathExists(customizationFolder))
      ? customizationFolder
      : join(projectRoot, "src");
    return {
      rootDir: projectRoot,
      metadataDir: projectRoot,
      rlcSourcesDir: join(
        sourcesRoot,
        emitterOptions.isModularLibrary ? "rest" : "" // When generating modular library, RLC has to go under rest folder
      ),
      modularSourcesDir: emitterOptions.isModularLibrary
        ? sourcesRoot
        : undefined
    };
  }

  async function clearSrcFolder() {
    await fsextra.emptyDir(
      dpgContext.generationPathDetail?.modularSourcesDir ??
        dpgContext.generationPathDetail?.rlcSourcesDir ??
        ""
    );
  }

  async function buildRLCCodeModels() {
    const clients = getRLCClients(dpgContext);
    for (const client of clients) {
      const rlcModels = await transformRLCModel(client, dpgContext);
      rlcCodeModels.push(rlcModels);
      serviceNameToRlcModelsMap.set(client.service.name, rlcModels);
      needUnexpectedHelper.set(
        getClientName(rlcModels),
        hasUnexpectedHelper(rlcModels)
      );
    }
  }

  async function generateRLCSources() {
    for (const rlcModels of rlcCodeModels) {
      await emitModels(rlcModels, program);
      await emitContentByBuilder(program, buildClientDefinitions, rlcModels);
      await emitContentByBuilder(program, buildResponseTypes, rlcModels);
      await emitContentByBuilder(program, buildClient, rlcModels);
      await emitContentByBuilder(program, buildParameterTypes, rlcModels);
      await emitContentByBuilder(program, buildIsUnexpectedHelper, rlcModels);
      await emitContentByBuilder(program, buildIndexFile, rlcModels);
      await emitContentByBuilder(program, buildLogger, rlcModels);
      await emitContentByBuilder(program, buildTopLevelIndex, rlcModels);
      await emitContentByBuilder(program, buildRLCPaginateHelper, rlcModels);
      await emitContentByBuilder(program, buildPollingHelper, rlcModels);
      await emitContentByBuilder(program, buildSerializeHelper, rlcModels);
      await emitContentByBuilder(
        program,
        buildSamples,
        rlcModels,
        dpgContext.generationPathDetail?.metadataDir
      );
    }
  }

  async function generateModularSources() {
    const modularSourcesRoot =
      dpgContext.generationPathDetail?.modularSourcesDir ?? "src";
    const project = useContext("outputProject");
    emitSerializerHelpersFile(project, modularSourcesRoot);
    modularCodeModel = emitCodeModel(
      dpgContext,
      serviceNameToRlcModelsMap,
      modularSourcesRoot,
      project,
      {
        casing: "camel"
      }
    );

    emitLoggerFile(modularCodeModel, project, modularSourcesRoot);

    const rootIndexFile = project.createSourceFile(
      `${modularSourcesRoot}/index.ts`,
      "",
      {
        overwrite: true
      }
    );

    const isMultiClients = modularCodeModel.clients.length > 1;

    emitTypes(dpgContext, { sourceRoot: modularSourcesRoot });
    buildSubpathIndexFile(modularCodeModel, "models");
    // Enable modular sample generation when explicitly set to true or MPG
    if (emitterOptions?.generateSample === true) {
      const samples = emitSamples(dpgContext);
      // Refine the rlc sample generation logic
      // TODO: remember to remove this out when RLC is splitted from Modular
      if (samples.length > 0) {
        dpgContext.rlcOptions!.generateSample = true;
      }
    }
    for (const subClient of modularCodeModel.clients) {
      buildApiOptions(dpgContext, subClient, modularCodeModel);
      buildOperationFiles(subClient, dpgContext, modularCodeModel);
      buildClientContext(subClient, dpgContext, modularCodeModel);
      buildRestorePoller(modularCodeModel, subClient);
      if (dpgContext.rlcOptions?.hierarchyClient) {
        buildSubpathIndexFile(modularCodeModel, "api", subClient);
      } else {
        buildSubpathIndexFile(modularCodeModel, "api", subClient, {
          exportIndex: true
        });
      }

      buildClassicalClient(subClient, dpgContext, modularCodeModel);
      buildClassicOperationFiles(dpgContext, modularCodeModel, subClient);
      buildSubpathIndexFile(modularCodeModel, "classic", subClient, {
        exportIndex: true,
        interfaceOnly: true
      });
      if (isMultiClients) {
        buildSubClientIndexFile(subClient, modularCodeModel);
      }
      buildRootIndex(subClient, modularCodeModel, rootIndexFile);
    }

    binder.resolveAllReferences(modularSourcesRoot);

    for (const file of project.getSourceFiles()) {
      file.fixMissingImports(
        {},
        {
          importModuleSpecifierEnding: "js",
          importModuleSpecifierPreference: "relative",
          includePackageJsonAutoImports: "off",
          excludeLibrarySymbolsInNavTo: true
        }
      );
      await removeUnusedImports(file);
      file.fixUnusedIdentifiers();
      await emitContentByBuilder(
        program,
        () => ({ content: file.getFullText(), path: file.getFilePath() }),
        modularCodeModel as any
      );
    }
  }

  async function generateMetadataAndTest() {
    const project = useContext("outputProject");
    if (rlcCodeModels.length === 0 || !rlcCodeModels[0]) {
      return;
    }
    const rlcClient: RLCModel = rlcCodeModels[0];
    const option = dpgContext.rlcOptions!;
    const isAzureFlavor = isAzurePackage({ options: option });
    // Generate metadata
    const existingPackageFilePath = join(
      dpgContext.generationPathDetail?.metadataDir ?? "",
      "package.json"
    );
    const hasPackageFile = await existsSync(existingPackageFilePath);
    const shouldGenerateMetadata =
      option.generateMetadata === true ||
      (option.generateMetadata === undefined && !hasPackageFile);
    if (shouldGenerateMetadata) {
      const commonBuilders = [
        buildRollupConfig,
        buildApiExtractorConfig,
        buildReadmeFile,
        buildLicenseFile,
        buildSampleEnvFile
      ];
      if (option.moduleKind === "esm") {
        commonBuilders.push((model) => buildVitestConfig(model, "node"));
        commonBuilders.push((model) => buildVitestConfig(model, "browser"));
        commonBuilders.push((model) => buildTsTestBrowserConfig(model));
      }
      if (isAzureFlavor) {
        commonBuilders.push(buildEsLintConfig);
      }
      let modularPackageInfo = {};
      if (option.isModularLibrary) {
        modularPackageInfo = {
          exports: getModuleExports(modularCodeModel)
        };
        if (isAzureFlavor) {
          modularPackageInfo = {
            ...modularPackageInfo,
            dependencies: {
              "@azure/core-util": "^1.9.2"
            },
            clientContextPaths: getRelativeContextPaths(modularCodeModel)
          };
        }
      }
      commonBuilders.push((model) =>
        buildPackageFile(model, modularPackageInfo)
      );
      commonBuilders.push(buildTsConfig);
      // build metadata relevant files
      await emitContentByBuilder(
        program,
        commonBuilders,
        rlcClient,
        dpgContext.generationPathDetail?.metadataDir
      );

      if (option.isModularLibrary) {
        for (const file of project.getSourceFiles()) {
          await emitContentByBuilder(
            program,
            () => ({ content: file.getFullText(), path: file.getFilePath() }),
            modularCodeModel as any
          );
        }
      }
    } else if (hasPackageFile) {
      // update existing package.json file with correct dependencies
      await emitContentByBuilder(
        program,
        (model) => updatePackageFile(model, existingPackageFilePath),
        rlcClient,
        dpgContext.generationPathDetail?.metadataDir
      );
    }

    // Generate test relevant files
    if (option.generateTest && isAzureFlavor) {
      await emitContentByBuilder(
        program,
        [buildRecordedClientFile, buildSampleTest],
        rlcClient,
        dpgContext.generationPathDetail?.metadataDir
      );
    }
  }

  function getRelativeContextPaths(codeModel: ModularCodeModel) {
    return codeModel.clients
      .map((subClient) => getClientContextPath(subClient, codeModel))
      .map((path) => path.substring(path.indexOf("src")));
  }
}

export async function removeUnusedImports(file: SourceFile) {
  file.getImportDeclarations().map((importDeclaration) => {
    importDeclaration.getFullText();
    importDeclaration.getNamedImports().map((namedImport) => {
      namedImport.getFullText();
      if (
        namedImport
          .getNameNode()
          .findReferencesAsNodes()
          .filter((n) => {
            return n.getSourceFile().getFilePath() === file.getFilePath();
          }).length === 1
      ) {
        namedImport.remove();
      }
    });
    if (importDeclaration.getNamedImports().length === 0) {
      importDeclaration.remove();
    }
  });
  file.getExportDeclarations().map((exportDeclaration) => {
    if (exportDeclaration.getNamedExports().length === 0) {
      exportDeclaration.remove();
    }
  });
}

export async function createContextWithDefaultOptions(
  context: EmitContext<Record<string, any>>
): Promise<SdkContext> {
  const flattenUnionAsEnum =
    context.options["experimentalExtensibleEnums"] === undefined
      ? isArm(context)
      : context.options["experimentalExtensibleEnums"];
  const tcgcSettings = {
    "generate-protocol-methods": true,
    "generate-convenience-methods": true,
    "flatten-union-as-enum": flattenUnionAsEnum,
    emitters: [
      {
        main: "@azure-tools/typespec-ts",
        metadata: { name: "@azure-tools/typespec-ts" }
      }
    ]
  };
  context.options = {
    ...context.options,
    ...tcgcSettings
  };

  return (await createSdkContext(
    context,
    context.program.emitters[0]?.metadata.name ?? "@azure-tools/typespec-ts"
  )) as SdkContext;
}

// TODO: should be removed once tcgc issue is resolved https://github.com/Azure/typespec-azure/issues/1794
function isArm(context: EmitContext<Record<string, any>>) {
  const packageName = (context?.options["packageDetails"] ?? {})["name"] ?? "";
  return packageName?.startsWith("@azure/arm-");
}

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
  MultipartHelpers,
  PagingHelpers,
  PollingHelpers,
  SerializationHelpers,
  UrlTemplateHelpers
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
  buildSampleEnvFile,
  buildSnippets,
  buildTsSrcConfig,
  buildTsSampleConfig,
  buildTsTestConfig
} from "@azure-tools/rlc-common";
import {
  buildRootIndex,
  buildSubClientIndexFile
} from "./modular/buildRootIndex.js";
import { emitContentByBuilder, emitModels } from "./utils/emitUtil.js";
import { provideContext, useContext } from "./contextManager.js";

import { EmitterOptions } from "./lib.js";
import { ModularEmitterOptions } from "./modular/interfaces.js";
import { Project } from "ts-morph";
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
import {
  createSdkContext,
  SdkClientType,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { transformModularEmitterOptions } from "./modular/buildModularOptions.js";
import { emitLoggerFile } from "./modular/emitLoggerFile.js";
import { emitTypes } from "./modular/emitModels.js";
import { existsSync } from "fs";
import { getModuleExports } from "./modular/buildProjectFiles.js";
import { getClientHierarchyMap, getRLCClients } from "./utils/clientUtils.js";
import { join } from "path";
import { loadStaticHelpers } from "./framework/load-static-helpers.js";
import { provideBinder } from "./framework/hooks/binder.js";
import { provideSdkTypes } from "./framework/hooks/sdkTypes.js";
import { transformRLCModel } from "./transform/transform.js";
import { transformRLCOptions } from "./transform/transfromRLCOptions.js";
import { emitSamples } from "./modular/emitSamples.js";

export * from "./lib.js";

export async function $onEmit(context: EmitContext) {
  console.time("onEmit");
  if (context.program.compilerOptions.noEmit || context.program.hasError()) {
    return;
  }
  /** Shared status */
  const outputProject = new Project();
  const program: Program = context.program;
  const emitterOptions: EmitterOptions = context.options;
  console.time("onEmit: create context");
  const dpgContext = await createContextWithDefaultOptions(context);
  console.timeEnd("onEmit: create context");
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
  provideContext("outputProject", outputProject);
  provideContext("emitContext", {
    compilerContext: context,
    tcgcContext: dpgContext
  });
  console.time("onEmit: load static helpers");
  const staticHelpers = await loadStaticHelpers(
    outputProject,
    {
      ...SerializationHelpers,
      ...PagingHelpers,
      ...PollingHelpers,
      ...UrlTemplateHelpers,
      ...MultipartHelpers
    },
    {
      sourcesDir: dpgContext.generationPathDetail?.modularSourcesDir,
      options: rlcOptions
    }
  );
  console.timeEnd("onEmit: load static helpers");
  const extraDependencies = isAzurePackage({ options: rlcOptions })
    ? {
        ...AzurePollingDependencies,
        ...AzureCoreDependencies,
        ...AzureIdentityDependencies
      }
    : { ...DefaultCoreDependencies };
  console.time("onEmit: provide binder");
  const binder = provideBinder(outputProject, {
    staticHelpers,
    dependencies: {
      ...extraDependencies
    }
  });
  provideSdkTypes(dpgContext);
  console.timeEnd("onEmit: provide binder");

  const rlcCodeModels: RLCModel[] = [];
  let modularEmitterOptions: ModularEmitterOptions;
  // 1. Clear sources folder
  await clearSrcFolder();
  // 2. Generate RLC code model
  // TODO: skip this step in modular once modular generator is sufficiently decoupled
  console.time("onEmit: build RLC code models");
  await buildRLCCodeModels();
  console.timeEnd("onEmit: build RLC code models");

  // 4. Generate sources
  if (emitterOptions["is-modular-library"]) {
    await generateModularSources();
  } else {
    await generateRLCSources();
  }

  // 5. Generate metadata and test files
  function getTypespecTsVersion(context: EmitContext): string | undefined {
    const emitterMetadata = context.program.emitters.find(
      (emitter) => emitter.metadata.name === "@azure-tools/typespec-ts"
    );
    return emitterMetadata?.metadata.version;
  }

  await generateMetadataAndTest(dpgContext);

  async function enrichDpgContext() {
    const generationPathDetail: GenerationDirDetail =
      await calculateGenerationDir();
    dpgContext.generationPathDetail = generationPathDetail;
    const options: RLCOptions = transformRLCOptions(emitterOptions, dpgContext);
    emitterOptions["is-modular-library"] = options.isModularLibrary;
    emitterOptions["generate-sample"] = options.generateSample;
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
        (!hasTestFolder || (options.azureSdkForJs && options.azureArm)) &&
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
      rlcSourcesDir: sourcesRoot,
      modularSourcesDir: sourcesRoot
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
    console.time("onEmit: generate modular sources");
    const modularSourcesRoot =
      dpgContext.generationPathDetail?.modularSourcesDir ?? "src";
    const project = useContext("outputProject");
    modularEmitterOptions = transformModularEmitterOptions(
      dpgContext,
      modularSourcesRoot,
      {
        casing: "camel"
      }
    );

    emitLoggerFile(modularEmitterOptions, modularSourcesRoot);

    const rootIndexFile = project.createSourceFile(
      `${modularSourcesRoot}/index.ts`,
      "",
      {
        overwrite: true
      }
    );

    const isMultiClients = dpgContext.sdkPackage.clients.length > 1;
    const clientMap = getClientHierarchyMap(dpgContext);
    const hasModularClients = clientMap.length > 0;
    console.time("onEmit: emit models");
    emitTypes(dpgContext, {
      sourceRoot: modularSourcesRoot,
      hasModularClients
    });
    console.timeEnd("onEmit: emit models");
    buildSubpathIndexFile(modularEmitterOptions, "models", undefined, {
      recursive: true
    });
    console.time("onEmit: emit source files");
    if (hasModularClients) {
      // If no clients, we still need to build the root index file
      buildRootIndex(dpgContext, modularEmitterOptions, rootIndexFile);
    }
    for (const subClient of clientMap) {
      await renameClientName(subClient[1], modularEmitterOptions);
      buildApiOptions(dpgContext, subClient, modularEmitterOptions);
      buildOperationFiles(dpgContext, subClient, modularEmitterOptions);
      buildClientContext(dpgContext, subClient, modularEmitterOptions);
      buildRestorePoller(dpgContext, subClient, modularEmitterOptions);
      if (dpgContext.rlcOptions?.hierarchyClient) {
        buildSubpathIndexFile(modularEmitterOptions, "api", subClient, {
          exportIndex: false,
          recursive: true
        });
      } else {
        buildSubpathIndexFile(modularEmitterOptions, "api", subClient, {
          recursive: true,
          exportIndex: true
        });
      }

      buildClassicalClient(dpgContext, subClient, modularEmitterOptions);
      buildClassicOperationFiles(dpgContext, subClient, modularEmitterOptions);
      buildSubpathIndexFile(modularEmitterOptions, "classic", subClient, {
        exportIndex: true,
        interfaceOnly: true
      });
      if (isMultiClients) {
        buildSubClientIndexFile(subClient, modularEmitterOptions);
      }
      buildRootIndex(
        dpgContext,
        modularEmitterOptions,
        rootIndexFile,
        subClient
      );
    }
    console.timeEnd("onEmit: emit source files");
    // Enable modular sample generation when explicitly set to true or MPG
    if (emitterOptions["generate-sample"] === true) {
      console.time("onEmit: emit samples");
      const samples = emitSamples(dpgContext);
      console.timeEnd("onEmit: emit samples");
      // Refine the rlc sample generation logic
      // TODO: remember to remove this out when RLC is splitted from Modular
      if (samples.length > 0) {
        dpgContext.rlcOptions!.generateSample = true;
      }
    }

    console.time("onEmit: resolve references");
    binder.resolveAllReferences(modularSourcesRoot);
    if (program.compilerOptions.noEmit || program.hasError()) {
      return;
    }
    console.timeEnd("onEmit: resolve references");

    console.time("onEmit: generate files");

    for (const file of project.getSourceFiles()) {
      await emitContentByBuilder(
        program,
        () => ({ content: file.getFullText(), path: file.getFilePath() }),
        modularEmitterOptions as any
      );
    }
    console.timeEnd("onEmit: generate files");
    console.timeEnd("onEmit: generate modular sources");
  }
  interface Metadata {
    apiVersion?: string;
    emitterVersion?: string;
  }

  function buildMetadataJson() {
    const apiVersion = dpgContext.sdkPackage.metadata.apiVersion;
    const emitterVersion = getTypespecTsVersion(context);
    if (apiVersion === undefined && emitterVersion === undefined) {
      return;
    }
    const content: Metadata = {};
    if (apiVersion !== undefined) {
      content.apiVersion = apiVersion;
    }
    if (emitterVersion !== undefined) {
      content.emitterVersion = emitterVersion;
    }
    return {
      path: "metadata.json",
      content: JSON.stringify(content, null, 2)
    };
  }
  async function generateMetadataAndTest(context: SdkContext) {
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
      option.generateMetadata === true || !hasPackageFile;
    const existingTestFolderPath = join(
      dpgContext.generationPathDetail?.metadataDir ?? "",
      "test"
    );
    const hasTestFolder = await existsSync(existingTestFolderPath);
    if (option.azureSdkForJs && option.generateTest === undefined) {
      if (hasTestFolder) {
        option.generateTest = false;
      } else {
        option.generateTest = true;
      }
    }

    //TODO Need consider multi-client cases
    if (option.isModularLibrary) {
      for (const subClient of dpgContext.sdkPackage.clients) {
        rlcClient.libraryName = subClient.name;
      }
    }

    if (shouldGenerateMetadata) {
      const commonBuilders = [
        buildRollupConfig,
        buildApiExtractorConfig,
        buildReadmeFile,
        buildLicenseFile,
        buildSampleEnvFile
      ];
      if (option.generateTest) {
        commonBuilders.push((model) => buildVitestConfig(model, "node"));
        commonBuilders.push((model) => buildVitestConfig(model, "esm"));
        commonBuilders.push((model) => buildVitestConfig(model, "browser"));
        commonBuilders.push((model) => buildTsTestBrowserConfig(model));
      }
      if (isAzureFlavor) {
        commonBuilders.push(buildEsLintConfig);
      }
      let modularPackageInfo = {};
      if (option.isModularLibrary) {
        modularPackageInfo = {
          exports: getModuleExports(context, modularEmitterOptions)
        };
        if (isAzureFlavor) {
          modularPackageInfo = {
            ...modularPackageInfo,
            dependencies: {
              "@azure/core-util": "^1.9.2"
            },
            clientContextPaths: getRelativeContextPaths(
              context,
              modularEmitterOptions
            )
          };
        }
      }
      commonBuilders.push((model) =>
        buildPackageFile(model, modularPackageInfo)
      );
      commonBuilders.push(buildTsConfig);
      if (option.azureSdkForJs) {
        commonBuilders.push(buildTsSrcConfig);
        if (option.generateSample) {
          commonBuilders.push(buildTsSampleConfig);
        }
        if (option.generateTest) {
          commonBuilders.push(buildTsTestConfig);
        }
      }

      // TODO: need support snippets generation for multi-client cases. https://github.com/Azure/autorest.typescript/issues/3048
      if (option.generateTest && isAzureFlavor) {
        for (const subClient of dpgContext.sdkPackage.clients) {
          commonBuilders.push((model) =>
            buildSnippets(model, subClient.name, option.azureSdkForJs)
          );
        }
      }

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
            modularEmitterOptions as any
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
    if (isAzureFlavor) {
      await emitContentByBuilder(
        program,
        buildMetadataJson,
        rlcClient,
        dpgContext.generationPathDetail?.metadataDir
      );
    }

    // Generate test relevant files
    if (option.generateTest && isAzureFlavor && !hasTestFolder) {
      await emitContentByBuilder(
        program,
        [buildRecordedClientFile, buildSampleTest],
        rlcClient,
        dpgContext.generationPathDetail?.metadataDir
      );
    }
  }

  function getRelativeContextPaths(
    context: SdkContext,
    options: ModularEmitterOptions
  ) {
    const clientMap = getClientHierarchyMap(context);
    return Array.from(clientMap)
      .map((subClient) => getClientContextPath(subClient, options))
      .map((path) => path.substring(path.indexOf("src")));
  }
  console.timeEnd("onEmit");
}

export async function createContextWithDefaultOptions(
  context: EmitContext<Record<string, any>>
): Promise<SdkContext> {
  const flattenUnionAsEnum =
    context.options["experimental-extensible-enums"] === undefined &&
    context.options["experimentalExtensibleEnums"] === undefined
      ? isArm(context)
      : (context.options["experimental-extensible-enums"] ??
        context.options["experimentalExtensibleEnums"]);
  const tcgcSettings = {
    "generate-protocol-methods": true,
    "generate-convenience-methods": true,
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
    context.program.emitters[0]?.metadata.name ?? "@azure-tools/typespec-ts",
    {
      flattenUnionAsEnum
    }
  )) as SdkContext;
}

// TODO: should be removed once tcgc issue is resolved https://github.com/Azure/typespec-azure/issues/1794
function isArm(context: EmitContext<Record<string, any>>) {
  const packageName =
    (context?.options["package-details"] ??
      context?.options["packageDetails"] ??
      {})["name"] ?? "";
  return packageName?.startsWith("@azure/arm-");
}

export async function renameClientName(
  client: SdkClientType<SdkServiceOperation>,
  emitterOptions: ModularEmitterOptions
) {
  if (
    emitterOptions.options.typespecTitleMap &&
    emitterOptions.options.typespecTitleMap[client.name]
  ) {
    client.name = emitterOptions.options.typespecTitleMap[client.name]!;
  }
}

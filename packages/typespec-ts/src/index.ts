// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as fsextra from "fs-extra";
import {
  AzureCoreDependencies,
  AzureIdentityDependencies,
  AzurePollingDependencies,
  DefaultCoreDependencies
} from "./modular/external-dependencies.js";
import { clearDirectory } from "./utils/fileSystemUtils.js";
import { EmitContext, Program } from "@typespec/compiler";
import { GenerationDirDetail, SdkContext } from "./utils/interfaces.js";
import {
  CloudSettingHelpers,
  MultipartHelpers,
  PagingHelpers,
  PollingHelpers,
  SerializationHelpers,
  SimplePollerHelpers,
  UrlTemplateHelpers,
  XmlHelpers
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
  updateReadmeFile,
  buildRecordedClientFile,
  buildResponseTypes,
  buildRollupConfig,
  buildSampleTest,
  buildSamples,
  buildSerializeHelper,
  buildTopLevelIndex,
  buildTsConfig,
  buildTsSnippetsConfig,
  buildTestBrowserTsConfig,
  buildTestNodeTsConfig,
  buildTestMainTsConfig,
  buildVitestConfig,
  getClientName,
  hasUnexpectedHelper,
  isAzurePackage,
  updatePackageFile,
  buildSampleEnvFile,
  buildSnippets,
  buildTsSrcConfig,
  buildTsSampleConfig
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
  listAllServiceNamespaces,
  SdkClientType,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { transformModularEmitterOptions } from "./modular/buildModularOptions.js";
import { emitLoggerFile } from "./modular/emitLoggerFile.js";
import { emitTypes } from "./modular/emitModels.js";
import { existsSync } from "fs";
import { getModuleExports } from "./modular/buildProjectFiles.js";
import {
  getClientHierarchyMap,
  getRLCClients,
  getModularClientOptions
} from "./utils/clientUtils.js";
import { join } from "path";
import { loadStaticHelpers } from "./framework/load-static-helpers.js";
import { packageUsesXmlSerialization } from "./modular/serialization/buildXmlSerializerFunction.js";
import { provideBinder } from "./framework/hooks/binder.js";
import { provideSdkTypes } from "./framework/hooks/sdkTypes.js";
import { transformRLCModel } from "./transform/transform.js";
import { transformRLCOptions } from "./transform/transfromRLCOptions.js";
import { emitSamples } from "./modular/emitSamples.js";
import { generateCrossLanguageDefinitionFile } from "./utils/crossLanguageDef.js";

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
      ...PollingHelpers,
      ...SimplePollerHelpers,
      ...UrlTemplateHelpers,
      ...MultipartHelpers,
      ...CloudSettingHelpers,
      ...XmlHelpers
    },
    {
      sourcesDir: dpgContext.generationPathDetail?.modularSourcesDir,
      options: rlcOptions,
      program
    }
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
  let modularEmitterOptions: ModularEmitterOptions;
  // 1. Clear sources folder
  await clearSrcFolder();
  // 2. Generate RLC code model
  // TODO: skip this step in modular once modular generator is sufficiently decoupled
  await buildRLCCodeModels();
  // 3. Clear samples-dev folder if generateSample is true
  await clearSamplesDevFolder();

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
    dpgContext.allServiceNamespaces = listAllServiceNamespaces(dpgContext);
    const options: RLCOptions = transformRLCOptions(emitterOptions, dpgContext);
    emitterOptions["is-modular-library"] = options.isModularLibrary;
    emitterOptions["generate-sample"] = options.generateSample;
    // clear output folder if needed
    if (options.clearOutputFolder) {
      // Clear output directory while preserving TempTypeSpecFiles
      await clearDirectory(
        context.emitterOutputDir,
        ["TempTypeSpecFiles"],
        program
      );
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
    const srcGeneratedFolder = join(projectRoot, "src", "generated");
    // if customization folder exists, use it as sources root
    const finalCustomizationFolder = (await fsextra.pathExists(
      srcGeneratedFolder
    ))
      ? srcGeneratedFolder
      : customizationFolder;
    const sourcesRoot = (await fsextra.pathExists(finalCustomizationFolder))
      ? finalCustomizationFolder
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

  async function clearSamplesDevFolder() {
    if (emitterOptions["generate-sample"] === true) {
      const samplesDevPath = join(
        dpgContext.generationPathDetail?.rootDir ?? "",
        "samples-dev"
      );
      if (await fsextra.pathExists(samplesDevPath)) {
        await fsextra.emptyDir(samplesDevPath);
      }
    }
  }

  async function buildRLCCodeModels() {
    const clients = getRLCClients(dpgContext);
    for (const client of clients) {
      const rlcModels = await transformRLCModel(client, dpgContext);
      rlcCodeModels.push(rlcModels);
      const serviceName = client.services[0]?.name ?? "Unknown";
      serviceNameToRlcModelsMap.set(serviceName, rlcModels);
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

    emitTypes(dpgContext, { sourceRoot: modularSourcesRoot });
    buildSubpathIndexFile(modularEmitterOptions, "models", undefined, {
      recursive: true
    });
    const clientMap = getClientHierarchyMap(dpgContext);
    if (clientMap.length === 0) {
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
      const { subfolder } = getModularClientOptions(subClient);
      // Generate index file for clients with subfolders (multi-client scenarios and nested clients)
      if (subfolder) {
        buildSubClientIndexFile(dpgContext, subClient, modularEmitterOptions);
      }
      buildRootIndex(
        dpgContext,
        modularEmitterOptions,
        rootIndexFile,
        subClient
      );
    }
    // Enable modular sample generation when explicitly set to true or MPG
    if (emitterOptions["generate-sample"] === true) {
      const samples = emitSamples(dpgContext);
      // Refine the rlc sample generation logic
      // TODO: remember to remove this out when RLC is splitted from Modular
      if (samples.length > 0) {
        dpgContext.rlcOptions!.generateSample = true;
      }
    }

    binder.resolveAllReferences(modularSourcesRoot);
    if (program.compilerOptions.noEmit || program.hasError()) {
      return;
    }

    for (const file of project.getSourceFiles()) {
      await emitContentByBuilder(
        program,
        () => ({ content: file.getFullText(), path: file.getFilePath() }),
        modularEmitterOptions as any
      );
    }
  }

  interface Metadata {
    apiVersions?: Record<string, string>;
    emitterVersion?: string;
    crossLanguageDefinitions?: {
      CrossLanguagePackageId: string;
      CrossLanguageDefinitionId: Record<string, string>;
    };
  }

  function buildMetadataJson() {
    const apiVersions = dpgContext.sdkPackage.metadata.apiVersions;
    const emitterVersion = getTypespecTsVersion(context);
    if (apiVersions === undefined && emitterVersion === undefined) {
      return;
    }
    const content: Metadata = {};
    if (apiVersions !== undefined && apiVersions.size > 0) {
      content.apiVersions = Object.fromEntries(apiVersions);
    }
    if (emitterVersion !== undefined) {
      content.emitterVersion = emitterVersion;
    }
    if (dpgContext.rlcOptions?.isModularLibrary) {
      content.crossLanguageDefinitions =
        generateCrossLanguageDefinitionFile(dpgContext);
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
    const existingReadmeFilePath = join(
      dpgContext.generationPathDetail?.metadataDir ?? "",
      "README.md"
    );
    const hasReadmeFile = await existsSync(existingReadmeFilePath);
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
        commonBuilders.push((model) => buildTestBrowserTsConfig(model));
        commonBuilders.push((model) => buildTestNodeTsConfig(model));
        commonBuilders.push((model) => buildTestMainTsConfig(model));
      }
      if (isAzureFlavor) {
        commonBuilders.push(buildEsLintConfig);
      }
      let modularPackageInfo = {};
      if (option.isModularLibrary) {
        modularPackageInfo = {
          exports: getModuleExports(context, modularEmitterOptions)
        };
        // Build dependencies
        const dependencies: Record<string, string> = {};
        if (isAzureFlavor) {
          dependencies["@azure/core-util"] = "^1.9.2";
        }
        // Add fast-xml-parser if XML serialization is used
        if (packageUsesXmlSerialization(dpgContext.sdkPackage)) {
          dependencies["fast-xml-parser"] = "^4.5.0";
        }
        if (isAzureFlavor) {
          modularPackageInfo = {
            ...modularPackageInfo,
            dependencies,
            clientContextPaths: getRelativeContextPaths(
              context,
              modularEmitterOptions
            )
          };
        } else if (Object.keys(dependencies).length > 0) {
          modularPackageInfo = {
            ...modularPackageInfo,
            dependencies
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
      }

      // TODO: need support snippets generation for multi-client cases. https://github.com/Azure/autorest.typescript/issues/3048
      if (option.generateTest && isAzureFlavor) {
        for (const subClient of dpgContext.sdkPackage.clients) {
          commonBuilders.push((model) =>
            buildSnippets(model, subClient.name, option.azureSdkForJs)
          );
        }
        commonBuilders.push(buildTsSnippetsConfig);
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
      let modularPackageInfo = {};
      if (option.isModularLibrary) {
        modularPackageInfo = {
          exports: getModuleExports(context, modularEmitterOptions)
        };
      }
      await emitContentByBuilder(
        program,
        (model) =>
          updatePackageFile(model, existingPackageFilePath, modularPackageInfo),
        rlcClient,
        dpgContext.generationPathDetail?.metadataDir
      );

      // update existing README.md file if it exists
      if (hasReadmeFile) {
        await emitContentByBuilder(
          program,
          (model) => updateReadmeFile(model, existingReadmeFilePath),
          rlcClient,
          dpgContext.generationPathDetail?.metadataDir
        );
      }
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
}

export async function createContextWithDefaultOptions(
  context: EmitContext<Record<string, any>>
): Promise<SdkContext> {
  const flattenUnionAsEnum =
    context.options["experimental-extensible-enums"] === undefined
      ? isArm(context)
      : context.options["experimental-extensible-enums"];
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
  const packageName = (context?.options["package-details"] ?? {})["name"] ?? "";
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

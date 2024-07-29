// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  buildApiExtractorConfig,
  buildClient,
  buildClientDefinitions,
  buildEsLintConfig,
  buildIndexFile,
  buildIsUnexpectedHelper,
  buildLogger,
  buildPackageFile,
  buildPaginateHelper as buildRLCPaginateHelper,
  buildParameterTypes,
  buildPollingHelper,
  buildReadmeFile,
  buildRecordedClientFile,
  buildResponseTypes,
  buildRollupConfig,
  buildSamples,
  buildSampleTest,
  buildSerializeHelper,
  buildTopLevelIndex,
  buildTsConfig,
  buildTsTestBrowserConfig,
  buildVitestConfig,
  getClientName,
  hasUnexpectedHelper,
  RLCModel,
  RLCOptions,
  buildLicenseFile
} from "@azure-tools/rlc-common";
import { createSdkContext } from "@azure-tools/typespec-client-generator-core";
import { EmitContext, Program } from "@typespec/compiler";
import { existsSync } from "fs";
import * as fsextra from "fs-extra";
import { join } from "path";
import { env } from "process";
import { Project } from "ts-morph";
import { EmitterOptions } from "./lib.js";
import { buildClassicalClient } from "./modular/buildClassicalClient.js";
import { buildClassicOperationFiles } from "./modular/buildClassicalOperationGroups.js";
import { buildClientContext } from "./modular/buildClientContext.js";
import { emitCodeModel } from "./modular/buildCodeModel.js";
import { buildOperationFiles } from "./modular/buildOperations.js";
import { getModuleExports } from "./modular/buildProjectFiles.js";
import {
  buildRootIndex,
  buildSubClientIndexFile
} from "./modular/buildRootIndex.js";
import { buildSerializeUtils } from "./modular/buildSerializeUtils.js";
import { buildSubpathIndexFile } from "./modular/buildSubpathIndex.js";
import { buildModels, buildModelsOptions } from "./modular/emitModels.js";
import { ModularCodeModel } from "./modular/modularCodeModel.js";
import { transformRLCModel } from "./transform/transform.js";
import { transformRLCOptions } from "./transform/transfromRLCOptions.js";
import { getRLCClients } from "./utils/clientUtils.js";
import { emitContentByBuilder, emitModels } from "./utils/emitUtil.js";
import { GenerationDirDetail, SdkContext } from "./utils/interfaces.js";
import { provideContext, useContext } from "./contextManager.js";
import { emitSerializerHelpersFile } from "./modular/buildHelperSerializers.js";
import { provideSdkTypes } from "./framework/hooks/sdkTypes.js";
import { provideBinder } from "./framework/hooks/binder.js";
import { loadStaticHelpers } from "./framework/load-static-helpers.js";
import {
  PagingHelpers,
  PollingHellpers,
  Utilities
} from "./modular/static-helpers-metadata.js";
import { AzurePollingDependencies } from "./modular/external-dependencies.js";

export * from "./lib.js";

export async function $onEmit(context: EmitContext) {
  /** Shared status */
  const outputProject = new Project();
  const program: Program = context.program;
  const emitterOptions: EmitterOptions = context.options;
  const dpgContext = createContextWithDefaultOptions(context);
  const rlcOptions: RLCOptions = transformRLCOptions(
    emitterOptions,
    dpgContext
  );

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
  provideSdkTypes(dpgContext.sdkPackage);
  const { modularSourcesDir } = await calculateGenerationDir();
  const staticHelpers = await loadStaticHelpers(
    outputProject,
    {
      ...Utilities,
      ...PagingHelpers,
      ...PollingHellpers
    },
    { sourcesDir: modularSourcesDir }
  );
  const extraDependencies =
    rlcOptions?.flavor === "azure" ? { ...AzurePollingDependencies } : {};
  const binder = provideBinder(outputProject, {
    staticHelpers,
    dependencies: {
      ...extraDependencies
    }
  });

  const rlcCodeModels: RLCModel[] = [];
  let modularCodeModel: ModularCodeModel;
  // 1. Enrich the dpg context with path detail and common options
  await enrichDpgContext();
  // 2. Clear sources folder
  await clearSrcFolder();
  // 3. Generate RLC sources
  await generateRLCSources();
  // 4. Generate Modular sources
  await generateModularSources();
  // 5. Generate metadata and test files
  await generateMetadataAndTest();

  async function enrichDpgContext() {
    const generationPathDetail: GenerationDirDetail =
      await calculateGenerationDir();
    dpgContext.generationPathDetail = generationPathDetail;
    const hasTestFolder = await fsextra.pathExists(
      join(dpgContext.generationPathDetail?.metadataDir ?? "", "test")
    );
    rlcOptions.generateTest =
      rlcOptions.generateTest === true ||
      (rlcOptions.generateTest === undefined &&
        !hasTestFolder &&
        rlcOptions.flavor === "azure");
    dpgContext.rlcOptions = rlcOptions;
  }

  async function calculateGenerationDir(): Promise<GenerationDirDetail> {
    const projectRoot = context.emitterOutputDir ?? "";
    let sourcesRoot = join(projectRoot, "src");
    const customizationFolder = join(projectRoot, "sources");
    if (await fsextra.pathExists(customizationFolder)) {
      sourcesRoot = join(customizationFolder, "generated", "src");
    }
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

  async function generateRLCSources() {
    const clients = getRLCClients(dpgContext);
    for (const client of clients) {
      const rlcModels = await transformRLCModel(client, dpgContext);
      rlcCodeModels.push(rlcModels);
      serviceNameToRlcModelsMap.set(client.service.name, rlcModels);
      needUnexpectedHelper.set(
        getClientName(rlcModels),
        hasUnexpectedHelper(rlcModels)
      );

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
    if (emitterOptions.isModularLibrary) {
      // TODO: Emit modular parts of the library
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
      const rootIndexFile = project.createSourceFile(
        `${modularSourcesRoot}/index.ts`,
        "",
        {
          overwrite: true
        }
      );

      const isMultiClients = modularCodeModel.clients.length > 1;
      for (const subClient of modularCodeModel.clients) {
        buildModels(subClient, modularCodeModel);
        buildModelsOptions(subClient, modularCodeModel);
        const hasClientUnexpectedHelper =
          needUnexpectedHelper.get(subClient.rlcClientName) ?? false;
        if (!env["EXPERIMENTAL_TYPESPEC_TS_SERIALIZATION"])
          buildSerializeUtils(modularCodeModel);
        // build operation files
        buildOperationFiles(
          subClient,
          dpgContext,
          modularCodeModel,
          hasClientUnexpectedHelper
        );
        buildClientContext(subClient, dpgContext, modularCodeModel);
        buildSubpathIndexFile(subClient, modularCodeModel, "models");
        if (dpgContext.rlcOptions?.hierarchyClient) {
          buildSubpathIndexFile(subClient, modularCodeModel, "api");
        } else {
          buildSubpathIndexFile(subClient, modularCodeModel, "api", {
            exportIndex: true
          });
        }

        buildClassicalClient(subClient, dpgContext, modularCodeModel);
        buildClassicOperationFiles(dpgContext, modularCodeModel, subClient);
        buildSubpathIndexFile(subClient, modularCodeModel, "classic", {
          exportIndex: true,
          interfaceOnly: true
        });
        if (isMultiClients) {
          buildSubClientIndexFile(subClient, modularCodeModel);
        }
        buildRootIndex(subClient, modularCodeModel, rootIndexFile);
      }

      binder.resolveAllReferences();

      for (const file of project.getSourceFiles()) {
        await emitContentByBuilder(
          program,
          () => ({ content: file.getFullText(), path: file.getFilePath() }),
          modularCodeModel as any
        );
        // emitFile(program, { content: hrlcClient.content, path: hrlcClient.path });
      }
    }
  }

  async function generateMetadataAndTest() {
    if (rlcCodeModels.length === 0 || !rlcCodeModels[0]) {
      return;
    }
    const rlcClient: RLCModel = rlcCodeModels[0];
    const option = dpgContext.rlcOptions!;
    const isAzureFlavor = option.flavor === "azure";
    // Generate metadata
    const hasPackageFile = await existsSync(
      join(dpgContext.generationPathDetail?.metadataDir ?? "", "package.json")
    );
    const shouldGenerateMetadata =
      option.generateMetadata === true ||
      (option.generateMetadata === undefined && !hasPackageFile);
    if (shouldGenerateMetadata) {
      const commonBuilders = [
        buildRollupConfig,
        buildApiExtractorConfig,
        buildReadmeFile,
        buildLicenseFile
      ];
      if (option.moduleKind === "esm") {
        commonBuilders.push((model) => buildVitestConfig(model, "node"));
        commonBuilders.push((model) => buildVitestConfig(model, "browser"));
        commonBuilders.push((model) => buildTsTestBrowserConfig(model));
      }
      if (isAzureFlavor) {
        commonBuilders.push(buildEsLintConfig);
      }
      let moduleExports = {};
      if (option.isModularLibrary) {
        moduleExports = getModuleExports(modularCodeModel);
      }
      commonBuilders.push((model) => buildPackageFile(model, moduleExports));
      commonBuilders.push(buildTsConfig);
      // build metadata relevant files
      await emitContentByBuilder(
        program,
        commonBuilders,
        rlcClient,
        dpgContext.generationPathDetail?.metadataDir
      );

      if (option.isModularLibrary) {
        const project = useContext("outputProject");
        for (const file of project.getSourceFiles()) {
          await emitContentByBuilder(
            program,
            () => ({ content: file.getFullText(), path: file.getFilePath() }),
            modularCodeModel as any
          );
        }
      }
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
}

export function createContextWithDefaultOptions(
  context: EmitContext<Record<string, any>>
): SdkContext {
  const tcgcSettings = {
    "generate-protocol-methods": true,
    "generate-convenience-methods": true,
    "flatten-union-as-enum": false,
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

  return createSdkContext(context) as SdkContext;
}

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
import { Project } from "ts-morph";
import { EmitterOptions } from "./lib.js";
import { getModuleExports } from "./modular/buildProjectFiles.js";
import { ModularCodeModel } from "./modular/modularCodeModel.js";
import { transformRLCModel } from "./transform/transform.js";
import { transformRLCOptions } from "./transform/transfromRLCOptions.js";
import { getRLCClients } from "./utils/clientUtils.js";
import { emitContentByBuilder, emitModels } from "./utils/emitUtil.js";
import { GenerationDirDetail, SdkContext } from "./utils/interfaces.js";
import { provideContext, useContext } from "./contextManager.js";
import { provideSdkTypes } from "./framework/hooks/sdkTypes.js";

import { $onEmit as modularOnEmit } from "./modular/index.js";

export * from "./lib.js";

export async function $onEmit(context: EmitContext) {
  if (context.options["isModularLibrary"] === true) {
    return modularOnEmit(context);
  }

  /** Shared status */
  const outputProject = new Project();
  const program: Program = context.program;
  const emitterOptions: EmitterOptions = context.options;
  const dpgContext = await createContextWithDefaultOptions(context);
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

  // TODO: Uncomment these lines if using Binder in RLC
  // const { modularSourcesDir } = await calculateGenerationDir();
  // const staticHelpers = await loadStaticHelpers(
  //   outputProject,
  //   {
  //     ...SerializationHelpers,
  //     ...PagingHelpers,
  //     ...PollingHelpers
  //   },
  //   { sourcesDir: modularSourcesDir }
  // );

  // const extraDependencies =
  //   rlcOptions?.flavor === "azure"
  //     ? { ...AzurePollingDependencies, ...AzureCoreDependencies }
  //     : {};

  // const binder = provideBinder(outputProject, {
  //   staticHelpers,
  //   dependencies: {
  //     ...extraDependencies
  //   }
  // });

  const rlcCodeModels: RLCModel[] = [];
  let modularCodeModel: ModularCodeModel;
  // 1. Enrich the dpg context with path detail and common options
  await enrichDpgContext();
  // 2. Clear sources folder
  await clearSrcFolder();
  // 3. Generate RLC code model
  // TODO: skip this step in modular once modular generator is sufficiently decoupled
  await buildRLCCodeModels();

  // 4. Generate sources
  await generateRLCSources();

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

export async function createContextWithDefaultOptions(
  context: EmitContext<Record<string, any>>
): Promise<SdkContext> {
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

  return (await createSdkContext(context)) as SdkContext;
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Program,
  EmitContext,
  listServices,
  Namespace,
  ProjectionApplication,
  getService,
  projectProgram,
  Service
} from "@typespec/compiler";
import * as fsextra from "fs-extra";
import { existsSync } from "fs";
import {
  buildClientDefinitions,
  buildResponseTypes,
  buildParameterTypes,
  buildIsUnexpectedHelper,
  buildClient,
  buildIndexFile,
  buildTopLevelIndex,
  buildRollupConfig,
  buildTsConfig,
  buildApiExtractorConfig,
  buildPackageFile,
  buildPollingHelper,
  buildPaginateHelper as buildRLCPaginateHelper,
  buildEsLintConfig,
  buildKarmaConfigFile,
  buildEnvFile,
  buildEnvBrowserFile,
  buildRecordedClientFile,
  buildSampleTest,
  buildReadmeFile,
  buildSerializeHelper,
  buildLogger,
  RLCOptions,
  hasUnexpectedHelper,
  RLCModel,
  buildSamples,
  buildVersionedIndexFile
} from "@azure-tools/rlc-common";
import { transformRLCModel } from "./transform/transform.js";
import { emitContentByBuilder, emitModels } from "./utils/emitUtil.js";
import { createSdkContext } from "@azure-tools/typespec-client-generator-core";
import { Project, SyntaxKind } from "ts-morph";
import { buildClientContext } from "./modular/buildClientContext.js";
import { emitCodeModel } from "./modular/buildCodeModel.js";
import {
  buildRootIndex,
  buildSubClientIndexFile
} from "./modular/buildRootIndex.js";
import { buildModels, buildModelsOptions } from "./modular/emitModels.js";
import { buildOperationFiles } from "./modular/buildOperations.js";
import { buildSubpathIndexFile } from "./modular/buildSubpathIndex.js";
import { buildClassicalClient } from "./modular/buildClassicalClient.js";
import { buildClassicOperationFiles } from "./modular/buildClassicalOperationGroups.js";
import { emitPackage, emitTsConfig } from "./modular/buildProjectFiles.js";
import { getRLCClients } from "./utils/clientUtils.js";
import { buildSerializeUtils } from "./modular/buildSerializeUtils.js";
import { join } from "path";
import { GenerationDirDetail, SdkContext } from "./utils/interfaces.js";
import { transformRLCOptions } from "./transform/transfromRLCOptions.js";
import { ModularCodeModel } from "./modular/modularCodeModel.js";
import { getClientName } from "@azure-tools/rlc-common";
import {
  buildPagingTypes,
  buildPagingHelpers as buildModularPagingHelpers
} from "./modular/buildPagingFiles.js";
import { buildVersionProjections } from "@typespec/versioning";

export * from "./lib.js";

type ProjectedVersions = Record<string, { service: Service; program: Program }>;

function projectVersions(context: EmitContext): ProjectedVersions {
  let program = context.program;
  const services = listServices(program);
  const projectedVersions: ProjectedVersions = {};

  if (services.length === 0) {
    services.push({ type: program.getGlobalNamespaceType() });
  }

  for (const service of services) {
    const commonProjections: ProjectionApplication[] = [
      {
        projectionName: "target",
        arguments: ["json"]
      }
    ];
    const originalProgram = program;
    const versions = buildVersionProjections(program, service.type);
    for (const record of versions) {
      const projectedProgram = (program = projectProgram(originalProgram, [
        ...commonProjections,
        ...record.projections
      ]));
      const projectedServiceNs: Namespace =
        projectedProgram.projector.projectedTypes.get(
          service.type
        ) as Namespace;

      const currentVersion = record.version ?? "default";
      if (projectedServiceNs === projectedProgram.getGlobalNamespaceType()) {
        projectedVersions[currentVersion] = {
          service: {
            type: projectedProgram.getGlobalNamespaceType()
          },
          program
        };
      } else {
        const svc = getService(program, projectedServiceNs);
        if (svc) {
          projectedVersions[currentVersion] = { service, program };
        }
      }
    }
  }

  return projectedVersions;
}

async function isMultiVersion(
  projectedVersions: ProjectedVersions,
  options: RLCOptions
) {
  // TODO: Support multi-version for modular
  return (
    !options.isModularLibrary &&
    options.experimental &&
    Object.keys(projectedVersions).length > 1
  );
}

export async function $onEmit(context: EmitContext) {
  const projectedVersions = projectVersions(context);

  if (projectedVersions === undefined) {
    throw new Error("projectedVersions is undefined");
  }

  /** Shared status */
  const program: Program = context.program;
  const emitterOptions: RLCOptions = context.options;
  const dpgContext = createSdkContext(
    context,
    "@azure-tools/typespec-ts"
  ) as SdkContext;

  const needUnexpectedHelper: Map<string, boolean> = new Map<string, boolean>();
  const serviceNameToRlcModelsMap: Map<string, RLCModel> = new Map<
    string,
    RLCModel
  >();
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
    const options: RLCOptions = transformRLCOptions(emitterOptions, dpgContext);
    dpgContext.rlcOptions = options;
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
    const multiVersion = await isMultiVersion(
      projectedVersions,
      emitterOptions
    );
    for (const version in projectedVersions) {
      let currentVersion: string | undefined;
      let versionedProgram = dpgContext.program;

      if (multiVersion) {
        currentVersion = version;
        versionedProgram = projectedVersions[currentVersion]!.program;
      }

      const clients = getRLCClients(versionedProgram);
      for (const client of clients) {
        const rlcModels = await transformRLCModel(
          client,
          { ...dpgContext, program: versionedProgram },
          currentVersion
        );
        rlcCodeModels.push(rlcModels);
        serviceNameToRlcModelsMap.set(client.service.name, rlcModels);
        needUnexpectedHelper.set(
          getClientName(rlcModels),
          hasUnexpectedHelper(rlcModels)
        );

        await emitModels(rlcModels, versionedProgram);
        await emitContentByBuilder(
          versionedProgram,
          buildClientDefinitions,
          rlcModels
        );
        await emitContentByBuilder(
          versionedProgram,
          buildResponseTypes,
          rlcModels
        );
        await emitContentByBuilder(versionedProgram, buildClient, rlcModels);
        await emitContentByBuilder(
          versionedProgram,
          buildParameterTypes,
          rlcModels
        );
        await emitContentByBuilder(
          versionedProgram,
          buildIsUnexpectedHelper,
          rlcModels
        );
        await emitContentByBuilder(versionedProgram, buildIndexFile, rlcModels);
        await emitContentByBuilder(versionedProgram, buildLogger, rlcModels);
        await emitContentByBuilder(
          versionedProgram,
          buildTopLevelIndex,
          rlcModels
        );
        await emitContentByBuilder(
          versionedProgram,
          buildRLCPaginateHelper,
          rlcModels
        );
        await emitContentByBuilder(
          versionedProgram,
          buildPollingHelper,
          rlcModels
        );
        await emitContentByBuilder(
          versionedProgram,
          buildSerializeHelper,
          rlcModels
        );
        await emitContentByBuilder(versionedProgram, buildSamples, rlcModels, {
          emitterOutputDir: dpgContext.generationPathDetail?.metadataDir
        });
      }

      if (!multiVersion) {
        break;
      }
    }

    if (multiVersion) {
      const client = getRLCClients(dpgContext.program)[0];
      if (!client) {
        throw new Error("No client found in the program");
      }

      const rlcModels = await transformRLCModel(client, dpgContext);
      const versions = Object.keys(projectedVersions);
      await emitContentByBuilder(program, buildVersionedIndexFile, rlcModels, {
        versions
      });
    }
  }

  async function generateModularSources() {
    if (emitterOptions.isModularLibrary) {
      // TODO: Emit modular parts of the library
      const modularSourcesRoot =
        dpgContext.generationPathDetail?.modularSourcesDir ?? "src";
      const project = new Project();
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
        buildModels(modularCodeModel, subClient);
        buildModelsOptions(modularCodeModel, subClient);
        const hasClientUnexpectedHelper =
          needUnexpectedHelper.get(subClient.rlcClientName) ?? false;
        buildSerializeUtils(modularCodeModel);
        buildPagingTypes(modularCodeModel, subClient);
        buildModularPagingHelpers(
          modularCodeModel,
          subClient,
          hasClientUnexpectedHelper,
          isMultiClients
        );
        buildOperationFiles(
          dpgContext,
          modularCodeModel,
          subClient,
          hasClientUnexpectedHelper
        );
        buildClientContext(dpgContext, modularCodeModel, subClient);
        buildSubpathIndexFile(modularCodeModel, subClient, "models");
        if (dpgContext.rlcOptions?.hierarchyClient) {
          buildSubpathIndexFile(modularCodeModel, subClient, "api");
        } else {
          buildSubpathIndexFile(modularCodeModel, subClient, "api", {
            exportIndex: true
          });
        }

        buildClassicalClient(dpgContext, modularCodeModel, subClient);
        buildClassicOperationFiles(modularCodeModel, subClient);
        buildSubpathIndexFile(modularCodeModel, subClient, "classic", {
          exportIndex: true,
          interfaceOnly: true
        });
        if (isMultiClients) {
          buildSubClientIndexFile(modularCodeModel, subClient);
        }
        buildRootIndex(modularCodeModel, subClient, rootIndexFile);
      }

      removeUnusedInterfaces(project);

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
    const isBranded = option.branded ?? true;
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
        buildReadmeFile
      ];
      if (isBranded) {
        commonBuilders.push(buildEsLintConfig);
      }
      if (!option.isModularLibrary) {
        commonBuilders.push(buildPackageFile);
        commonBuilders.push(buildTsConfig);
      }
      // build metadata relevant files
      await emitContentByBuilder(program, commonBuilders, rlcClient, {
        emitterOutputDir: dpgContext.generationPathDetail?.metadataDir,
        versions: []
      });

      if (option.isModularLibrary) {
        const project = new Project();
        emitPackage(
          project,
          dpgContext.generationPathDetail?.metadataDir ?? "",
          modularCodeModel
        );
        emitTsConfig(
          project,
          dpgContext.generationPathDetail?.metadataDir ?? "",
          modularCodeModel
        );
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
    const hasTestFolder = await fsextra.pathExists(
      join(dpgContext.generationPathDetail?.metadataDir ?? "", "test")
    );
    const shouldGenerateTest =
      option.generateTest === true ||
      (option.generateTest === undefined && !hasTestFolder);
    if (shouldGenerateTest && isBranded) {
      await emitContentByBuilder(
        program,
        [
          buildKarmaConfigFile,
          buildEnvFile,
          buildEnvBrowserFile,
          buildRecordedClientFile,
          buildSampleTest
        ],
        rlcClient,
        { emitterOutputDir: dpgContext.generationPathDetail?.metadataDir }
      );
    }
  }
}

/**
 * Removing this for now, as it has some problem when we have two models with the same name and only one of them is unused, this function will end up removing the other used models.
 */
export function removeUnusedInterfaces(project: Project) {
  const allInterfaces = project.getSourceFiles().flatMap((file) =>
    file.getInterfaces().map((interfaceDeclaration) => {
      return { interfaceDeclaration, filepath: file.getFilePath() };
    })
  );

  const unusedInterfaces = allInterfaces.filter((interfaceDeclaration) => {
    const references = interfaceDeclaration.interfaceDeclaration
      .findReferencesAsNodes()
      .filter((node) => {
        const kind = node.getParent()?.getKind();
        return (
          kind !== SyntaxKind.ExportSpecifier &&
          kind !== SyntaxKind.InterfaceDeclaration
        );
      });
    return references.length === 0;
  });

  unusedInterfaces.forEach((interfaceDeclaration) => {
    const references = interfaceDeclaration.interfaceDeclaration
      .findReferencesAsNodes()
      .filter((node) => {
        const kind = node.getParent()?.getKind();
        return kind === SyntaxKind.ExportSpecifier;
      });
    const map = new Map<string, string>();
    references.forEach((node) => {
      const exportPath = node.getSourceFile().getFilePath();
      map.set(exportPath, node.getText());
    });

    // Get the index.ts file
    const indexFiles = project.getSourceFiles().filter((file) => {
      return file.getFilePath().endsWith("index.ts");
    }); // Adjust the path to your index.ts file
    // to make sure the top level index file is in the last
    const sortedIndexFiles = indexFiles.sort((idx1, idx2) => {
      return (
        idx2.getFilePath().split("/").length -
        idx1.getFilePath().split("/").length
      );
    });

    const matchAliasNodes: string[] = [];
    for (const indexFile of sortedIndexFiles) {
      const filepath = indexFile.getFilePath();
      if (map.has(filepath)) {
        // Get all export declarations
        const exportDeclarations = indexFile.getExportDeclarations();

        // Iterate over each export declaration
        exportDeclarations.forEach((exportDeclaration) => {
          // Find named exports that match the unused interface
          const matchingExports = exportDeclaration
            .getNamedExports()
            .filter((ne) => {
              const aliasNode = ne.getAliasNode();
              if (
                aliasNode &&
                aliasNode.getText() !== map.get(filepath) &&
                ne.getName() === map.get(filepath)
              ) {
                matchAliasNodes.push(aliasNode.getText());
              }
              return (
                matchAliasNodes.indexOf(ne.getName()) > -1 ||
                ne.getName() === map.get(filepath) ||
                ne.getAliasNode()?.getText() === map.get(filepath)
              );
            });
          // Remove the matching exports
          matchingExports.forEach((me) => me.remove());
        });
      }
    }
    interfaceDeclaration.interfaceDeclaration.remove();
  });
}

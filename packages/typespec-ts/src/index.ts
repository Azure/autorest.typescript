// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Program, EmitContext } from "@typespec/compiler";
import * as fsextra from "fs-extra";
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
  buildPaginateHelper,
  buildEsLintConfig,
  buildKarmaConfigFile,
  buildEnvFile,
  buildEnvBrowserFile,
  buildRecordedClientFile,
  buildSampleTest,
  buildReadmeFile,
  buildSerializeHelper,
  buildLogger,
  RLCOptions
} from "@azure-tools/rlc-common";
import { transformRLCModel } from "./transform/transform.js";
import { emitContentByBuilder, emitModels } from "./emitUtil.js";
import {
  listClients,
  createSdkContext
} from "@azure-tools/typespec-client-generator-core";
import * as path from "path";
import { buildSharedTypes } from "./modular/buildSharedTypes.js";
import { Project, SyntaxKind } from "ts-morph";
import { buildClientContext } from "./modular/buildClientContext.js";
import { emitCodeModel } from "./modular/buildCodeModel.js";
import { buildRootIndex } from "./modular/buildRootIndex.js";
import { buildModels } from "./modular/emitModels.js";
import { buildOperationFiles } from "./modular/buildOperations.js";
import { buildApiIndexFile } from "./modular/buildApiIndex.js";
import { buildClassicalClient } from "./modular/buildClassicalClient.js";
import { emitPackage, emitTsConfig } from "./modular/buildProjectFiles.js";
// import { emitPackage, emitTsConfig } from "./modular/buildProjectFiles.js";

export async function $onEmit(context: EmitContext) {
  const program: Program = context.program;
  const options: RLCOptions = context.options;
  const dpgContext = createSdkContext(context);
  const clients = listClients(dpgContext);
  const rootPath: string = context.emitterOutputDir;
  let count = -1;
  for (const client of clients) {
    count++;
    const rlcModels = await transformRLCModel(
      program,
      options,
      client,
      context.emitterOutputDir,
      dpgContext
    );
    const pathToClear = options.isModularLibrary ? rootPath : rlcModels.srcPath;
    clearSrcFolder(pathToClear, count, rlcModels?.options?.multiClient);
    await emitModels(rlcModels, program);
    await emitContentByBuilder(program, buildClientDefinitions, rlcModels);
    await emitContentByBuilder(program, buildResponseTypes, rlcModels);
    await emitContentByBuilder(program, buildClient, rlcModels);
    await emitContentByBuilder(program, buildParameterTypes, rlcModels);
    await emitContentByBuilder(program, buildIsUnexpectedHelper, rlcModels);
    await emitContentByBuilder(program, buildIndexFile, rlcModels);
    await emitContentByBuilder(program, buildLogger, rlcModels);
    await emitContentByBuilder(program, buildTopLevelIndex, rlcModels);
    await emitContentByBuilder(program, buildPaginateHelper, rlcModels);
    await emitContentByBuilder(program, buildPollingHelper, rlcModels);
    // buildSerializeHelper
    await emitContentByBuilder(program, buildSerializeHelper, rlcModels);
    // build metadata relevant files
    await emitContentByBuilder(
      program,
      [
        buildEsLintConfig,
        buildRollupConfig,
        buildApiExtractorConfig,
        buildReadmeFile,
        buildPackageFile,
        buildTsConfig
      ],
      rlcModels,
      context.emitterOutputDir
    );
    // build test relevant files
    await emitContentByBuilder(
      program,
      [
        buildKarmaConfigFile,
        buildEnvFile,
        buildEnvBrowserFile,
        buildRecordedClientFile,
        buildSampleTest
      ],
      rlcModels,
      context.emitterOutputDir
    );
  }
  const srcPath = options.sourceOnly ? rootPath : path.join(rootPath, "src");
  if (options.isModularLibrary) {
    // TODO: Emit modular parts of the library
    const project = new Project();
    const modularCodeModel = emitCodeModel(context, { casing: "camel" });
    for (const client of modularCodeModel.clients) {
      buildSharedTypes(project, srcPath);
      buildClientContext(client, project, srcPath);
      buildModels(modularCodeModel, project, srcPath);
      buildOperationFiles(client, project, srcPath);
      buildApiIndexFile(project, srcPath);
      buildClassicalClient(client, project, srcPath);
      buildRootIndex(client, project, srcPath);
      if (!options.sourceOnly) {
        emitPackage(project, rootPath, modularCodeModel);
        emitTsConfig(project, rootPath, modularCodeModel);
      }
    }

    removeUnusedInterfaces(project);

    for (const file of project.getSourceFiles()) {
      await emitContentByBuilder(
        program,
        () => ({ content: file.getFullText(), path: file.getFilePath() }),
        modularCodeModel as any,
        srcPath
      );
      // emitFile(program, { content: hrlcClient.content, path: hrlcClient.path });
    }
  }
}

function removeUnusedInterfaces(project: Project) {
  const allInterfaces = project
    .getSourceFiles()
    .flatMap((file) => file.getInterfaces());

  const unusedInterfaces = allInterfaces.filter((interfaceDeclaration) => {
    const references = interfaceDeclaration
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
    const interfaceName = interfaceDeclaration.getName();

    // Get the index.ts file
    const indexFiles = project.getSourceFiles("**/index.ts"); // Adjust the path to your index.ts file

    for (const indexFile of indexFiles) {
      // Get all export declarations
      const exportDeclarations = indexFile.getExportDeclarations();

      // Iterate over each export declaration
      exportDeclarations.forEach((exportDeclaration) => {
        // Find named exports that match the unused interface
        const matchingExports = exportDeclaration
          .getNamedExports()
          .filter((ne) => ne.getName() === interfaceName);

        // Remove the matching exports
        matchingExports.forEach((me) => me.remove());
      });
    }

    interfaceDeclaration.remove();
  });
}

function clearSrcFolder(
  pkgPath: string,
  count: number,
  isMultiClient: boolean = false
) {
  fsextra.emptyDirSync(pkgPath);
  if (isMultiClient && count === 0) {
    const folderPath = path.join(
      pkgPath.substring(0, pkgPath.indexOf(path.sep + "src") + 4)
    );
    fsextra.emptyDirSync(folderPath);
  }
}

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
  RLCOptions,
  RLCModel
} from "@azure-tools/rlc-common";
import { transformRLCModel } from "./transform/transform.js";
import { emitContentByBuilder, emitModels } from "./emitUtil.js";
import {
  listClients,
  createDpgContext
} from "@azure-tools/typespec-client-generator-core";
import * as path from "path";
import { buildSharedTypes } from "./modular/buildSharedTypes.js";
import { Project } from "ts-morph";
import { buildClientContext } from "./modular/buildClientContext.js";
import { emitCodeModel } from "./modular/buildCodeModel.js";
import { buildRootIndex } from "./modular/buildRootIndex.js";
import { buildModels } from "./modular/emitModels.js";
// import { emitPackage, emitTsConfig } from "./modular/buildProjectFiles.js";

export async function $onEmit(context: EmitContext) {
  const program: Program = context.program;
  const options: RLCOptions = context.options;
  const dpgContext = createDpgContext(context);
  const clients = listClients(dpgContext);
  const srcPath: string = context.emitterOutputDir;
  fsextra.emptyDirSync(srcPath);
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
    clearSrcFolder(rlcModels, count);
    await emitModels(rlcModels, program);
    await emitContentByBuilder(program, buildClientDefinitions, rlcModels);
    await emitContentByBuilder(program, buildResponseTypes, rlcModels);
    await emitContentByBuilder(program, buildClient, rlcModels);
    await emitContentByBuilder(program, buildParameterTypes, rlcModels);
    await emitContentByBuilder(program, buildIsUnexpectedHelper, rlcModels);
    await emitContentByBuilder(program, buildIndexFile, rlcModels);
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

  if (options.isModularLibrary) {
    // TODO: Emit modular parts of the library
    const project = new Project();
    const modularCodeModel = emitCodeModel(context, { casing: "camel" });

    for (const client of modularCodeModel.clients) {
      buildSharedTypes(project, srcPath);
      buildClientContext(client, project, srcPath);
      buildRootIndex(project, srcPath);
      buildModels(modularCodeModel, project, srcPath);
      // emitPackage(project, srcPath, modularCodeModel);
      // emitTsConfig(project, srcPath, modularCodeModel);
    }

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

function clearSrcFolder(model: RLCModel, count: number) {
  const srcPath = model.srcPath;
  fsextra.emptyDirSync(srcPath);
  if (model?.options?.multiClient && count === 0) {
    const folderPath = path.join(
      srcPath.substring(0, srcPath.indexOf(path.sep + "src") + 4)
    );
    fsextra.emptyDirSync(folderPath);
  }
}

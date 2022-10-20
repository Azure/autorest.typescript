// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CodeModel, codeModelSchema } from "@autorest/codemodel";
import {
  AutoRestExtension,
  AutorestExtensionHost,
  Session,
  startSession,
} from "@autorest/extension-base";
import { existsSync, mkdirSync } from "fs";

import { join } from "path";
import { getModel } from "./model";
import { emitModels } from "./emiters/emitModels";
import { emitRoutes } from "./emiters/emitRoutes";
import { emitMain } from "./emiters/emitMain";
import { markPagination } from "./utils/paging";
import { markErrorModels } from "./utils/errors";
import { setSession } from "./autorestSession";
import { emitPackage } from "./emiters/emitPackage";

export async function processRequest(host: AutorestExtensionHost) {
  const session = await startSession<CodeModel>(host, codeModelSchema);
  setSession(session);
  const codeModel = session.model;
  markPagination(codeModel);
  markErrorModels(codeModel);
  const cadlProgramDetails = getModel(codeModel);
  createOutputFolder(getFilePath(session, ""));
  await emitModels(getFilePath(session, "models.cadl"), cadlProgramDetails);
  await emitRoutes(getFilePath(session, "routes.cadl"), cadlProgramDetails);
  await emitMain(getFilePath(session, "main.cadl"), cadlProgramDetails);
  await emitPackage(getFilePath(session, "package.json"), cadlProgramDetails);
}

function createOutputFolder(dir: string) {
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
}

function getOutuptDirectory(session: Session<CodeModel>) {
  const outputFolder = session.configuration["output-folder"];
  const srcPath = session.configuration["src-path"] ?? "cadl-output";
  return outputFolder ? join(outputFolder, srcPath) : srcPath;
}

function getFilePath(session: Session<CodeModel>, fileName: string) {
  return join(getOutuptDirectory(session), fileName);
}

async function main() {
  const pluginHost = new AutoRestExtension();
  pluginHost.add("cadl-init", processRequest);
  await pluginHost.run();
}

main();

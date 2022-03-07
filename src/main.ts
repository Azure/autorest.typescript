// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AutoRestExtension,
  AutorestExtensionHost
} from "@autorest/extension-base";
import { generateTypeScriptLibrary } from "./typescriptGenerator";
import { generateRestLevelClient } from "./restLevelClient/generateRestLevel";
import {
  getSession,
  initializeSession,
  getAutorestOptions
} from "./autorestSession";
import { serialize } from "@azure-tools/codegen";

export async function processRequest(host: AutorestExtensionHost) {
  await initializeSession(host);
  const session = getSession();
  const { restLevelClient } = getAutorestOptions();
  try {
    const start = Date.now();
    restLevelClient
      ? await generateRestLevelClient()
      : await generateTypeScriptLibrary(session.model, host);
    session.info(`Autorest.Typescript took ${Date.now() - start}ms`);
  } catch (err) {
    session.error("An error was encountered while handling a request:", err as string[]);
    throw err;
  }
}

async function main() {
  const pluginHost = new AutoRestExtension();
  pluginHost.add("typescript", processRequest);
  await pluginHost.run();
}

main();

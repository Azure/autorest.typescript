// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AutoRestExtension, Host } from "@autorest/extension-base";
import { generateTypeScriptLibrary } from "./typescriptGenerator";
import { generateRestLevelClient } from "./restLevelClient/generateRestLevel";
import {
  getSession,
  initializeSession,
  getAutorestOptions
} from "./autorestSession";
import { serialize } from "@azure-tools/codegen";

export async function processRequest(host: Host) {
  await initializeSession(host);
  const session = getSession();
  host.WriteFile("code-model-before.yaml", serialize(session.model));
  const { restLevelClient } = getAutorestOptions();
  try {
    const start = Date.now();
    restLevelClient
      ? await generateRestLevelClient()
      : await generateTypeScriptLibrary(session.model, host);
    session.log(`Autorest.Typescript took ${Date.now() - start}ms`, "");
    host.WriteFile("code-model-after.yaml", serialize(session.model));
  } catch (err) {
    session.error("An error was encountered while handling a request:", err);
    throw err;
  }
}

async function main() {
  const pluginHost = new AutoRestExtension();
  pluginHost.Add("typescript", processRequest);
  await pluginHost.Run();
}

main();

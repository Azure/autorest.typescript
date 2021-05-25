// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AutoRestExtension, Host } from "@autorest/extension-base";
import { generateTypeScriptLibrary } from "./typescriptGenerator";
import { getSession, initializeSession } from "./autorestSession";

export async function processRequest(host: Host) {
  await initializeSession(host);
  const session = getSession();
  try {
    const start = Date.now();
    await generateTypeScriptLibrary(session.model, host);
    session.log(`Autorest.Typescript took ${Date.now() - start}ms`, "");
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

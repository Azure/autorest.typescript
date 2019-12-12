// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AutoRestExtension,
  Host,
  startSession
} from "@azure-tools/autorest-extension-base";
import { generateTypeScriptLibrary } from "./typescriptGenerator";
import { CodeModel, codeModelSchema } from "@azure-tools/codemodel";

export async function processRequest(host: Host) {
  try {
    const session = await startSession<CodeModel>(
      host,
      undefined,
      codeModelSchema
    );

    await generateTypeScriptLibrary(session.model, host);
  } catch (err) {
    console.error("An error was encountered while handling a request:", err);
    throw err;
  }
}

async function main() {
  const pluginHost = new AutoRestExtension();
  pluginHost.Add("typescript", processRequest);
  await pluginHost.Run();
}

main();

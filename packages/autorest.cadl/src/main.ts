// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AutoRestExtension,
  AutorestExtensionHost
} from "@autorest/extension-base";

export async function processRequest(_host: AutorestExtensionHost) {
  throw new Error("Not implemented");
}

async function main() {
  const pluginHost = new AutoRestExtension();
  pluginHost.add("cadl-init", processRequest);
  await pluginHost.run();
}

main();

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { initializePlugins } from './autorest-extension';
import { AutoRestExtension } from '@azure-tools/autorest-extension-base';

async function main() {
  const pluginHost = new AutoRestExtension();
  await initializePlugins(pluginHost);
  await pluginHost.Run();
}

main();

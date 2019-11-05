import { AutoRestExtension, } from '@azure-tools/autorest-extension-base';
import { processRequest as typescript } from './plugin-typescript';

export async function initializePlugins(pluginHost: AutoRestExtension) {
  pluginHost.Add('typescript', typescript);
}
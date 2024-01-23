// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { DictionaryContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface DictionaryClientOptions extends ClientOptions {}

export { DictionaryContext } from "../rest/index.js";

/** Illustrates various of dictionaries. */
export function createDictionary(
  options: DictionaryClientOptions = {},
): DictionaryContext {
  const clientContext = getClient(options);
  return clientContext;
}

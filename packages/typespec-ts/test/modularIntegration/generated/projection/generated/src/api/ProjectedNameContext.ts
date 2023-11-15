// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { ProjectedNameContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface ProjectedNameClientOptions extends ClientOptions {}

export { ProjectedNameContext } from "../rest/index.js";

/** Projection */
export function createProjectedName(
  options: ProjectedNameClientOptions = {}
): ProjectedNameContext {
  const clientContext = getClient(options);
  return clientContext;
}

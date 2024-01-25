// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../../api/ServiceContext.js";
import { nine } from "../../../api/qux/bar/index.js";
import { QuxBarNineOptions } from "../../../models/options.js";

export interface QuxBarOperations {
  nine: (options?: QuxBarNineOptions) => Promise<void>;
}

export function getQuxBar(context: ServiceContext) {
  return {
    nine: (options?: QuxBarNineOptions) => nine(context, options),
  };
}

export function getQuxBarOperations(context: ServiceContext): QuxBarOperations {
  return {
    ...getQuxBar(context),
  };
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../../api/serviceContext.js";
import { nine } from "../../../api/qux/bar/index.js";
import { QuxBarNineOptionalParams } from "../../../models/options.js";

export interface QuxBarOperations {
  nine: (options?: QuxBarNineOptionalParams) => Promise<void>;
}

export function getQuxBar(context: ServiceContext) {
  return {
    nine: (options?: QuxBarNineOptionalParams) => nine(context, options),
  };
}

export function getQuxBarOperations(context: ServiceContext): QuxBarOperations {
  return {
    ...getQuxBar(context),
  };
}

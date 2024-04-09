// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../api/ServiceContext.js";
import { eight } from "../../api/qux/index.js";
import { QuxEightOptionalParams } from "../../models/options.js";
import { QuxBarOperations, getQuxBarOperations } from "./bar/index.js";

export interface QuxOperations {
  eight: (options?: QuxEightOptionalParams) => Promise<void>;
  bar: QuxBarOperations;
}

export function getQux(context: ServiceContext) {
  return {
    eight: (options?: QuxEightOptionalParams) => eight(context, options),
  };
}

export function getQuxOperations(context: ServiceContext): QuxOperations {
  return {
    ...getQux(context),
    bar: getQuxBarOperations(context),
  };
}

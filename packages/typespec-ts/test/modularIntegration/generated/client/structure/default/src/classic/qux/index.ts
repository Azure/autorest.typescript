// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../api/serviceContext.js";
import { eight } from "../../api/qux/index.js";
import { QuxEightOptionalParams } from "../../api/options.js";
import { QuxBarOperations, getQuxBarOperations } from "./bar/index.js";

/** Interface representing a Qux operations. */
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

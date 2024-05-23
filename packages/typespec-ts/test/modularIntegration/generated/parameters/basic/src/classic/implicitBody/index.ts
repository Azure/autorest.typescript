// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BasicContext } from "../../api/basicContext.js";
import { implicitBodySimple } from "../../api/implicitBody/index.js";
import { ImplicitBodySimpleOptionalParams } from "../../models/options.js";

export interface ImplicitBodyOperations {
  simple: (
    name: string,
    options?: ImplicitBodySimpleOptionalParams,
  ) => Promise<void>;
}

export function getImplicitBody(context: BasicContext) {
  return {
    simple: (name: string, options?: ImplicitBodySimpleOptionalParams) =>
      implicitBodySimple(context, name, options),
  };
}

export function getImplicitBodyOperations(
  context: BasicContext,
): ImplicitBodyOperations {
  return {
    ...getImplicitBody(context),
  };
}

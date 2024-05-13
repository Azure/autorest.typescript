// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BasicContext } from "../../api/basicContext.js";
import { User } from "../../models/models.js";
import { explicitBodySimple } from "../../api/explicitBody/index.js";
import { ExplicitBodySimpleOptionalParams } from "../../models/options.js";

export interface ExplicitBodyOperations {
  simple: (
    body: User,
    options?: ExplicitBodySimpleOptionalParams,
  ) => Promise<void>;
}

export function getExplicitBody(context: BasicContext) {
  return {
    simple: (body: User, options?: ExplicitBodySimpleOptionalParams) =>
      explicitBodySimple(context, body, options),
  };
}

export function getExplicitBodyOperations(
  context: BasicContext,
): ExplicitBodyOperations {
  return {
    ...getExplicitBody(context),
  };
}

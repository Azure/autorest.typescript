// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BodyOptionalityContext } from "../../api/bodyOptionalityContext.js";
import { BodyModel } from "../../models/models.js";
import { set, omit } from "../../api/optionalExplicit/index.js";
import {
  OptionalExplicitSetOptionalParams,
  OptionalExplicitOmitOptionalParams,
} from "../../models/options.js";

/** Interface representing a OptionalExplicit operations. */
export interface OptionalExplicitOperations {
  set: (
    body?: BodyModel,
    options?: OptionalExplicitSetOptionalParams,
  ) => Promise<void>;
  omit: (
    body?: BodyModel,
    options?: OptionalExplicitOmitOptionalParams,
  ) => Promise<void>;
}

export function getOptionalExplicit(context: BodyOptionalityContext) {
  return {
    set: (body?: BodyModel, options?: OptionalExplicitSetOptionalParams) =>
      set(context, body, options),
    omit: (body?: BodyModel, options?: OptionalExplicitOmitOptionalParams) =>
      omit(context, body, options),
  };
}

export function getOptionalExplicitOperations(
  context: BodyOptionalityContext,
): OptionalExplicitOperations {
  return {
    ...getOptionalExplicit(context),
  };
}

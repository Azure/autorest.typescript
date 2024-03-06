// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BodyOptionalityContext } from "../../api/BodyOptionalityContext.js";
import { BodyModel } from "../../models/models.js";
import { set, omit } from "../../api/optionalExplicit/index.js";
import {
  OptionalExplicitSetOptions,
  OptionalExplicitOmitOptions,
} from "../../models/options.js";

export interface OptionalExplicitOperations {
  set: (
    body?: BodyModel,
    options?: OptionalExplicitSetOptions,
  ) => Promise<void>;
  omit: (
    body?: BodyModel,
    options?: OptionalExplicitOmitOptions,
  ) => Promise<void>;
}

export function getOptionalExplicit(context: BodyOptionalityContext) {
  return {
    set: (body?: BodyModel, options?: OptionalExplicitSetOptions) =>
      set(context, body, options),
    omit: (body?: BodyModel, options?: OptionalExplicitOmitOptions) =>
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

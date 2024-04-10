// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/UnionContext.js";
import { MixedLiteralsCases } from "../../models/models.js";
import {
  mixedLiteralsGet,
  mixedLiteralsSend,
} from "../../api/mixedLiterals/index.js";
import {
  MixedLiteralsGetOptionalParams,
  MixedLiteralsSendOptionalParams,
} from "../../models/options.js";

export interface MixedLiteralsOperations {
  get: (
    options?: MixedLiteralsGetOptionalParams,
  ) => Promise<{ prop: MixedLiteralsCases }>;
  send: (
    prop: MixedLiteralsCases,
    options?: MixedLiteralsSendOptionalParams,
  ) => Promise<void>;
}

export function getMixedLiterals(context: UnionContext) {
  return {
    get: (options?: MixedLiteralsGetOptionalParams) =>
      mixedLiteralsGet(context, options),
    send: (
      prop: MixedLiteralsCases,
      options?: MixedLiteralsSendOptionalParams,
    ) => mixedLiteralsSend(context, prop, options),
  };
}

export function getMixedLiteralsOperations(
  context: UnionContext,
): MixedLiteralsOperations {
  return {
    ...getMixedLiterals(context),
  };
}

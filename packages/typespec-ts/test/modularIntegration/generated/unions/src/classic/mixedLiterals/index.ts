// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/UnionContext.js";
import { MixedLiteralsCases } from "../../models/models.js";
import {
  mixedLiteralsGet,
  mixedLiteralsSend,
} from "../../api/mixedLiterals/index.js";
import {
  MixedLiteralsGetOptions,
  MixedLiteralsSendOptions,
} from "../../models/options.js";

export interface MixedLiteralsOperations {
  get: (
    options?: MixedLiteralsGetOptions,
  ) => Promise<{ prop: MixedLiteralsCases }>;
  send: (
    prop: MixedLiteralsCases,
    options?: MixedLiteralsSendOptions,
  ) => Promise<void>;
}

export function getMixedLiterals(context: UnionContext) {
  return {
    get: (options?: MixedLiteralsGetOptions) =>
      mixedLiteralsGet(context, options),
    send: (prop: MixedLiteralsCases, options?: MixedLiteralsSendOptions) =>
      mixedLiteralsSend(context, prop, options),
  };
}

export function getMixedLiteralsOperations(
  context: UnionContext,
): MixedLiteralsOperations {
  return {
    ...getMixedLiterals(context),
  };
}

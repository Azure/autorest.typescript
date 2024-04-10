// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NamingContext } from "../../api/NamingContext.js";
import { ClientExtensibleEnum, ExtensibleEnum } from "../../models/models.js";
import {
  unionEnumName,
  unionEnumMemberName,
} from "../../api/unionEnum/index.js";
import {
  UnionEnumUnionEnumNameOptionalParams,
  UnionEnumUnionEnumMemberNameOptionalParams,
} from "../../models/options.js";

export interface UnionEnumOperations {
  unionEnumName: (
    body: ClientExtensibleEnum,
    options?: UnionEnumUnionEnumNameOptionalParams,
  ) => Promise<void>;
  unionEnumMemberName: (
    body: ExtensibleEnum,
    options?: UnionEnumUnionEnumMemberNameOptionalParams,
  ) => Promise<void>;
}

export function getUnionEnum(context: NamingContext) {
  return {
    unionEnumName: (
      body: ClientExtensibleEnum,
      options?: UnionEnumUnionEnumNameOptionalParams,
    ) => unionEnumName(context, body, options),
    unionEnumMemberName: (
      body: ExtensibleEnum,
      options?: UnionEnumUnionEnumMemberNameOptionalParams,
    ) => unionEnumMemberName(context, body, options),
  };
}

export function getUnionEnumOperations(
  context: NamingContext,
): UnionEnumOperations {
  return {
    ...getUnionEnum(context),
  };
}

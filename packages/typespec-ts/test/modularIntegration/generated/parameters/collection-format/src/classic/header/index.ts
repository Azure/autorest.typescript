// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CollectionFormatContext } from "../../api/CollectionFormatContext.js";
import { headerCsv } from "../../api/header/index.js";
import { HeaderCsvOptions } from "../../models/options.js";

export interface HeaderOperations {
  csv: (colors: string[], options?: HeaderCsvOptions) => Promise<void>;
}

export function getHeader(context: CollectionFormatContext) {
  return {
    csv: (colors: string[], options?: HeaderCsvOptions) =>
      headerCsv(context, colors, options),
  };
}

export function getHeaderOperations(
  context: CollectionFormatContext,
): HeaderOperations {
  return {
    ...getHeader(context),
  };
}

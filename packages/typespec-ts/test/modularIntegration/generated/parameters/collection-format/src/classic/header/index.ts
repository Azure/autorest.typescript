// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CollectionFormatContext } from "../../api/CollectionFormatContext.js";
import { headerCsv } from "../../api/header/index.js";
import { CsvOptions } from "../../models/options.js";

export interface HeaderOperations {
  csv: (colors: string[], options?: CsvOptions) => Promise<void>;
}

export function getHeader(context: CollectionFormatContext) {
  return {
    csv: (colors: string[], options?: CsvOptions) =>
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

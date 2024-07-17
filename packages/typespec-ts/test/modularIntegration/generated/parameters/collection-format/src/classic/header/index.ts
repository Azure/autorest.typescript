// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CollectionFormatContext } from "../../api/collectionFormatContext.js";
import { headerCsv } from "../../api/header/index.js";
import { HeaderCsvOptionalParams } from "../../api/options.js";

/** Interface representing a Header operations. */
export interface HeaderOperations {
  csv: (colors: string[], options?: HeaderCsvOptionalParams) => Promise<void>;
}

export function getHeader(context: CollectionFormatContext) {
  return {
    csv: (colors: string[], options?: HeaderCsvOptionalParams) =>
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

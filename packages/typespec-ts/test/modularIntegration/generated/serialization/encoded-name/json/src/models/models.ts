// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { JsonEncodedNameModel as JsonEncodedNameModelRest } from "../rest/index.js";

export interface JsonEncodedNameModel {
  /** Pass in true */
  defaultName: boolean;
}

export function jsonEncodedNameModelSerializer(
  item: JsonEncodedNameModel,
): JsonEncodedNameModelRest {
  return {
    wireName: item["defaultName"],
  };
}

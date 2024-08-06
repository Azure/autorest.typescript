// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface JsonEncodedNameModel {
  /** Pass in true */
  defaultName: boolean;
}

export function jsonEncodedNameModelSerializer(
  item: JsonEncodedNameModel,
): Record<string, unknown> {
  return {
    wireName: item["defaultName"],
  };
}

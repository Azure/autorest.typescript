// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { serializeRecord } from "../helpers/serializerHelpers.js";

/** Dictionary inner model */
export interface InnerModel {
  /** Required string property */
  property: string;
  children?: Record<string, InnerModel>;
}

export function innerModelSerializer(
  item: InnerModel,
): Record<string, unknown> {
  return {
    property: item["property"],
    children: !item.children
      ? item.children
      : (serializeRecord(item.children as any, innerModelSerializer) as any),
  };
}

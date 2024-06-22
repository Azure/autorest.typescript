// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { serializeRecord } from "../helpers/serializerHelpers.js";
import { InnerModel as InnerModelRest } from "../rest/index.js";

/** Dictionary inner model */
export interface InnerModel {
  /** Required string property */
  property: string;
  children?: Record<string, InnerModel>;
}

export function innerModelSerializer(item: InnerModel): InnerModelRest {
  return {
    property: item["property"],
    children: !item.children
      ? item.children
      : serializeRecord(item.children, innerModelSerializer),
  };
}

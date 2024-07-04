// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { InnerModel as InnerModelRest } from "../rest/index.js";

/** Array inner model */
export interface InnerModel {
  /** Required string property */
  property: string;
  children?: InnerModel[];
}

export function innerModelSerializer(item: InnerModel): InnerModelRest {
  return {
    property: item["property"],
    children:
      item["children"] === undefined
        ? item["children"]
        : item["children"].map(innerModelSerializer),
  };
}

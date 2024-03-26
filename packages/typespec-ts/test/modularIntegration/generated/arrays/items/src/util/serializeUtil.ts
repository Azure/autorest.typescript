// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { InnerModel } from "../models/models.js";
import { InnerModel as RestInnerModel } from "../rest/index.js";

export function serializeInnerModel(o: InnerModel): RestInnerModel {
  return {
    children:
      o["children"] === undefined
        ? o["children"]
        : o["children"].map((e) => MISSING_SERIALIZER(e)),
    property: o["property"],
  };
}

export function deserializeInnerModel(o: RestInnerModel): InnerModel {
  return {
    children:
      o["children"] === undefined
        ? o["children"]
        : o["children"].map((e) => MISSING_SERIALIZER(e)),
    property: o["property"],
  };
}

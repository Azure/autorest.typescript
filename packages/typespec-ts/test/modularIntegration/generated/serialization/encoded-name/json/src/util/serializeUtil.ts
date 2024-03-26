// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { JsonEncodedNameModel } from "../models/models.js";
import { JsonEncodedNameModel as RestJsonEncodedNameModel } from "../rest/index.js";

export function serializeJsonEncodedNameModel(
  o: JsonEncodedNameModel,
): RestJsonEncodedNameModel {
  return {
    wireName: o["defaultName"],
  };
}

export function deserializeJsonEncodedNameModel(
  o: RestJsonEncodedNameModel,
): JsonEncodedNameModel {
  return {
    defaultName: o["wireName"],
  };
}

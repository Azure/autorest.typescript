// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BodyModel } from "../models/models.js";
import { BodyModel as RestBodyModel } from "../rest/index.js";

export function serializeBodyModel(o: BodyModel): RestBodyModel {
  return {
    name: o["name"],
  };
}

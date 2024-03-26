// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BodyParameter } from "../models/models.js";
import { BodyParameter as RestBodyParameter } from "../rest/index.js";

export function serializeBodyParameter(o: BodyParameter): RestBodyParameter {
  return {
    name: o["name"],
  };
}

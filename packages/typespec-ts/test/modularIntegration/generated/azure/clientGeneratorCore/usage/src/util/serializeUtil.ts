// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OrphanModel, OutputModel, InputModel } from "../models/models.js";
import {
  OrphanModel as RestOrphanModel,
  OutputModel as RestOutputModel,
  InputModel as RestInputModel,
} from "../rest/index.js";

export function serializeOrphanModel(o: OrphanModel): RestOrphanModel {
  return {
    name: o["name"],
  };
}

export function serializeOutputModel(o: OutputModel): RestOutputModel {
  return {
    name: o["name"],
  };
}

export function deserializeOutputModel(o: RestOutputModel): OutputModel {
  return {
    name: o["name"],
  };
}

export function serializeInputModel(o: InputModel): RestInputModel {
  return {
    name: o["name"],
  };
}

export function deserializeInputModel(o: RestInputModel): InputModel {
  return {
    name: o["name"],
  };
}

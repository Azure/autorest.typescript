// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  generateClient as generateClientForRLC,
  RLCModel
} from "@azure-tools/rlc-codegen";
import { Project } from "ts-morph";

export function generateClient(rlcModels: RLCModel, project: Project) {
  generateClientForRLC(rlcModels, project);
}

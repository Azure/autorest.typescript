// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import {
  generateSchemaTypes as generateSchemaTypesForRLC,
  RLCModel
} from "@azure-tools/rlc-codegen";

/**
 * Generates types to represent schema definitions in the swagger
 */
export function generateSchemaTypes(rlcModels: RLCModel, project: Project) {
  generateSchemaTypesForRLC(rlcModels, project);
}

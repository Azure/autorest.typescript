// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  listTestProfiles,
  getTestProfile,
  deleteTestProfile,
  createOrUpdateTestProfile,
} from "./operations.js";
export type {
  ListTestProfilesOptionalParams,
  GetTestProfileOptionalParams,
  DeleteTestProfileOptionalParams,
  CreateOrUpdateTestProfileOptionalParams,
} from "./options.js";
export type {
  TestProfileAdministrationContext,
  TestProfileAdministrationClientOptionalParams,
} from "./testProfileAdministrationContext.js";
export { createTestProfileAdministration } from "./testProfileAdministrationContext.js";

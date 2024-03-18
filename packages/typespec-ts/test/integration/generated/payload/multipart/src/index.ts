// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import MultiPartClient from "./multiPartClient.js";

export * from "./multiPartClient.js";
export * from "./parameters.js";
export * from "./responses.js";
export * from "./clientDefinitions.js";
export * from "./models.js";
export {
  createFile,
  createFileFromStream,
  type CreateFileOptions,
  type CreateFileFromStreamOptions,
} from "@azure/core-rest-pipeline";

export default MultiPartClient;

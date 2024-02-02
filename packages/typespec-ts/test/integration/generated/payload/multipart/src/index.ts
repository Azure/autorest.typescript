// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import MultiPartClient from "./multiPartClient";

export * from "./multiPartClient";
export * from "./parameters";
export * from "./responses";
export * from "./clientDefinitions";
export * from "./models";
export {
  createFile,
  createFileFromStream,
  type CreateFileOptions,
  type CreateFileFromStreamOptions,
} from "@azure/core-rest-pipeline";

export default MultiPartClient;

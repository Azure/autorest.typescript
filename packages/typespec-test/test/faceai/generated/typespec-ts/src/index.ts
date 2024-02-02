// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import FaceClient from "./faceClient";

export * from "./faceClient";
export * from "./parameters";
export * from "./responses";
export * from "./clientDefinitions";
export * from "./isUnexpected";
export * from "./models";
export * from "./outputModels";
export { createFile, createFileFromStream } from "@azure/core-rest-pipeline";

export default FaceClient;

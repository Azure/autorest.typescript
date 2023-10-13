// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CreateFileParameters } from "./parameters.js";
import { CreateFile200Response } from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CreateFile {
  post(options: CreateFileParameters): StreamableMethod<CreateFile200Response>;
}

export interface Routes {
  /** Resource for '/files' has methods for the following verbs: post */
  (path: "/files"): CreateFile;
}

export type DemoServiceContext = Client & {
  path: Routes;
};

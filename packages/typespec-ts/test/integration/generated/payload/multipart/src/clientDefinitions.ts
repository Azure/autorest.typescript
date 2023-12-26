// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FormDataBasicParameters } from "./parameters";
import { FormDataBasic204Response } from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Basic {
  /** Test content-type: multipart/form-data */
  post(
    options: FormDataBasicParameters
  ): StreamableMethod<FormDataBasic204Response>;
}

export interface Routes {
  /** Resource for '/multipart/form-data/mixed-parts' has methods for the following verbs: post */
  (path: "/multipart/form-data/mixed-parts"): Basic;
}

export type MultiPartClient = Client & {
  path: Routes;
};

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ImmediateSuccessParameters } from "./parameters.js";
import { ImmediateSuccess204Response } from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ImmediateSuccess {
  /** Check we recognize Repeatability-Request-ID and Repeatability-First-Sent. */
  post(
    options: ImmediateSuccessParameters,
  ): StreamableMethod<ImmediateSuccess204Response>;
}

export interface Routes {
  /** Resource for '/special-headers/repeatability/immediateSuccess' has methods for the following verbs: post */
  (path: "/special-headers/repeatability/immediateSuccess"): ImmediateSuccess;
}

export type RepeatabilityContext = Client & {
  path: Routes;
};

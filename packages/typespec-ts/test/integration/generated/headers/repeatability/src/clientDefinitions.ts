// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ImmediateSuccessParameters } from "./parameters";
import { ImmediateSuccess204Response } from "./responses";
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

export type RepeatabilityClient = Client & {
  path: Routes;
};

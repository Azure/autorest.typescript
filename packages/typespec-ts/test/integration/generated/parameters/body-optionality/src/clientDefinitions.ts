// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OptionalExplicitSetModelParameters,
  OptionalExplicitOmitParameters,
  RequiredExplicitParameters,
  RequiredImplicitParameters,
} from "./parameters";
import {
  OptionalExplicitSetModel204Response,
  OptionalExplicitSetModelDefaultResponse,
  OptionalExplicitOmit204Response,
  OptionalExplicitOmitDefaultResponse,
  RequiredExplicit204Response,
  RequiredExplicitDefaultResponse,
  RequiredImplicit204Response,
  RequiredImplicitDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface SetModel {
  post(
    options?: OptionalExplicitSetModelParameters
  ): StreamableMethod<
    | OptionalExplicitSetModel204Response
    | OptionalExplicitSetModelDefaultResponse
  >;
}

export interface Omit {
  post(
    options?: OptionalExplicitOmitParameters
  ): StreamableMethod<
    OptionalExplicitOmit204Response | OptionalExplicitOmitDefaultResponse
  >;
}

export interface RequiredExplicit {
  post(
    options: RequiredExplicitParameters
  ): StreamableMethod<
    RequiredExplicit204Response | RequiredExplicitDefaultResponse
  >;
}

export interface RequiredImplicit {
  post(
    options?: RequiredImplicitParameters
  ): StreamableMethod<
    RequiredImplicit204Response | RequiredImplicitDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/parameters/body-optionality/optional-explicit/set' has methods for the following verbs: post */
  (path: "/parameters/body-optionality/optional-explicit/set"): SetModel;
  /** Resource for '/parameters/body-optionality/optional-explicit/omit' has methods for the following verbs: post */
  (path: "/parameters/body-optionality/optional-explicit/omit"): Omit;
  /** Resource for '/parameters/body-optionality/required-explicit' has methods for the following verbs: post */
  (path: "/parameters/body-optionality/required-explicit"): RequiredExplicit;
  /** Resource for '/parameters/body-optionality/required-implicit' has methods for the following verbs: post */
  (path: "/parameters/body-optionality/required-implicit"): RequiredImplicit;
}

export type BodyOptionalityClient = Client & {
  path: Routes;
};

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OveralodOperationsGetThingParameters,
  OveralodOperationsUploadParameters,
  OveralodOperationsProcessParameters,
  OverloadClientGetStringParameters,
  OverloadClientGetNumberParameters,
  OverloadClientUploadStringParameters,
  OverloadClientUploadBytesParameters,
  OverloadClientProcessStringParameters,
  OverloadClientProcessBytesParameters,
} from "./parameters";
import {
  OveralodOperationsGetThing200Response,
  OveralodOperationsUpload204Response,
  OveralodOperationsProcess204Response,
  OverloadClientGetString200Response,
  OverloadClientGetNumber200Response,
  OverloadClientUploadString204Response,
  OverloadClientUploadBytes204Response,
  OverloadClientProcessString204Response,
  OverloadClientProcessBytes204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface OveralodOperationsGetThing {
  /** Overload with same routes */
  post(
    options: OveralodOperationsGetThingParameters,
  ): StreamableMethod<OveralodOperationsGetThing200Response>;
}

export interface OveralodOperationsUpload {
  /** Overload with different routes */
  put(
    options: OveralodOperationsUploadParameters,
  ): StreamableMethod<OveralodOperationsUpload204Response>;
}

export interface OveralodOperationsProcess {
  /** Overloads with different actions */
  put(
    options: OveralodOperationsProcessParameters,
  ): StreamableMethod<OveralodOperationsProcess204Response>;
}

export interface OverloadClientGetString {
  post(
    options: OverloadClientGetStringParameters,
  ): StreamableMethod<OverloadClientGetString200Response>;
  post(
    options: OverloadClientGetNumberParameters,
  ): StreamableMethod<OverloadClientGetNumber200Response>;
}

export interface OverloadClientUploadString {
  put(
    options: OverloadClientUploadStringParameters,
  ): StreamableMethod<OverloadClientUploadString204Response>;
}

export interface OverloadClientUploadBytes {
  put(
    options: OverloadClientUploadBytesParameters,
  ): StreamableMethod<OverloadClientUploadBytes204Response>;
}

export interface OverloadClientProcessString {
  post(
    options: OverloadClientProcessStringParameters,
  ): StreamableMethod<OverloadClientProcessString204Response>;
  put(
    options: OverloadClientProcessBytesParameters,
  ): StreamableMethod<OverloadClientProcessBytes204Response>;
}

export interface Routes {
  /** Resource for '/get' has methods for the following verbs: post */
  (path: "/get"): OveralodOperationsGetThing;
  /** Resource for '/changed-routes' has methods for the following verbs: put */
  (path: "/changed-routes"): OveralodOperationsUpload;
  /** Resource for '/changed-actions' has methods for the following verbs: put */
  (path: "/changed-actions"): OveralodOperationsProcess;
  /** Resource for '/overload/get' has methods for the following verbs: post */
  (path: "/overload/get"): OverloadClientGetString;
  /** Resource for '/overload/toString' has methods for the following verbs: put */
  (path: "/overload/toString"): OverloadClientUploadString;
  /** Resource for '/overload/changed-routes' has methods for the following verbs: put */
  (path: "/overload/changed-routes"): OverloadClientUploadBytes;
  /** Resource for '/overload/changed-actions' has methods for the following verbs: post, put */
  (path: "/overload/changed-actions"): OverloadClientProcessString;
}

export type OveralodClient = Client & {
  path: Routes;
};

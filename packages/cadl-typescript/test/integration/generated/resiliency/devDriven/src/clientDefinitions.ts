// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DevDrivenGetModelParameters,
  DevDrivenPostModelParameters,
  DevDrivenGetPagesParameters,
  DevDrivenLroParameters,
} from "./parameters";
import {
  DevDrivenGetModel200Response,
  DevDrivenPostModel200Response,
  DevDrivenGetPages200Response,
  DevDrivenGetPagesDefaultResponse,
  DevDrivenLro200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetModel {
  /** Get models that you will either return to end users as a raw body, or with a model added during grow up. */
  get(
    options?: DevDrivenGetModelParameters
  ): StreamableMethod<DevDrivenGetModel200Response>;
  /** Post either raw response as a model and pass in 'raw' for mode, or grow up your operation to take a model instead, and put in 'model' as mode. */
  post(
    options: DevDrivenPostModelParameters
  ): StreamableMethod<DevDrivenPostModel200Response>;
}

export interface GetPages {
  /** Get pages that you will either return to users in pages of raw bodies, or pages of models following group. */
  get(
    options?: DevDrivenGetPagesParameters
  ): StreamableMethod<
    DevDrivenGetPages200Response | DevDrivenGetPagesDefaultResponse
  >;
}

export interface Lro {
  /** Long running put request that will either return to end users a final payload of a raw body, or a final payload of a model after the SDK has grown up. */
  put(
    options?: DevDrivenLroParameters
  ): StreamableMethod<DevDrivenLro200Response>;
}

export interface Routes {
  /** Resource for '/resiliency/devdriven/customization/model/\{mode\}' has methods for the following verbs: get, post */
  (
    path: "/resiliency/devdriven/customization/model/{mode}",
    mode: "raw" | "model"
  ): GetModel;
  /** Resource for '/resiliency/devdriven/products' has methods for the following verbs: get */
  (path: "/resiliency/devdriven/products"): GetPages;
  /** Resource for '/resiliency/devdriven/customization/lro/\{mode\}' has methods for the following verbs: put */
  (
    path: "/resiliency/devdriven/customization/lro/{mode}",
    mode: "raw" | "model"
  ): Lro;
}

export type ResiliencyDevDrivenClient = Client & {
  path: Routes;
};

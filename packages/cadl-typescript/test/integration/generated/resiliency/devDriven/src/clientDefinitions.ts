// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetModelParameters,
  PostModelParameters,
  GetProtocolPagesParameters,
  GetConveniencePagesParameters,
  LroParameters,
} from "./parameters";
import {
  GetModel200Response,
  PostModel200Response,
  GetProtocolPages200Response,
  GetProtocolPagesDefaultResponse,
  GetConveniencePages200Response,
  GetConveniencePagesDefaultResponse,
  Lro200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetModel {
  /** Get models that you will either return to end users as a raw body, or with a model added during grow up. */
  get(options?: GetModelParameters): StreamableMethod<GetModel200Response>;
  /** Post either raw response as a model and pass in 'raw' for mode, or grow up your operation to take a model instead, and put in 'model' as mode. */
  post(options: PostModelParameters): StreamableMethod<PostModel200Response>;
}

export interface GetProtocolPages {
  /** Get pages of protocol bodies. */
  get(
    options?: GetProtocolPagesParameters
  ): StreamableMethod<
    GetProtocolPages200Response | GetProtocolPagesDefaultResponse
  >;
}

export interface GetConveniencePages {
  /** Get pages of models. */
  get(
    options?: GetConveniencePagesParameters
  ): StreamableMethod<
    GetConveniencePages200Response | GetConveniencePagesDefaultResponse
  >;
}

export interface Lro {
  /** Long running put request that will either return to end users a final payload of a raw body, or a final payload of a model after the SDK has grown up. */
  put(options?: LroParameters): StreamableMethod<Lro200Response>;
}

export interface Routes {
  /** Resource for '/resiliency/devdriven/customization/model/\{mode\}' has methods for the following verbs: get, post */
  (
    path: "/resiliency/devdriven/customization/model/{mode}",
    mode: "raw" | "model"
  ): GetModel;
  /** Resource for '/resiliency/devdriven/customization/paging/protocol/products' has methods for the following verbs: get */
  (
    path: "/resiliency/devdriven/customization/paging/protocol/products"
  ): GetProtocolPages;
  /** Resource for '/resiliency/devdriven/customization/paging/convenience/products' has methods for the following verbs: get */
  (
    path: "/resiliency/devdriven/customization/paging/convenience/products"
  ): GetConveniencePages;
  /** Resource for '/resiliency/devdriven/customization/lro/\{mode\}' has methods for the following verbs: put */
  (
    path: "/resiliency/devdriven/customization/lro/{mode}",
    mode: "raw" | "model"
  ): Lro;
}

export type ResiliencyDevDrivenClient = Client & {
  path: Routes;
};

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetModelParameters,
  PostModelParameters,
  GetPagesParameters,
  LroParameters
} from "./parameters";
import {
  GetModel200Response,
  PostModel200Response,
  GetPages200Response,
  Lro200Response
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for Client operations */
export interface ClientOperations {
  /** Get models that you will either return to end users as a raw body, or with a model added during grow up. */
  getModel(
    mode: string,
    options?: GetModelParameters
  ): StreamableMethod<GetModel200Response>;
  /** Post either raw response as a model and pass in 'raw' for mode, or grow up your operation to take a model instead, and put in 'model' as mode. */
  postModel(
    mode: string,
    options: PostModelParameters
  ): StreamableMethod<PostModel200Response>;
  /** Get pages that you will either return to users in pages of raw bodies, or pages of models following growup. */
  getPages(
    mode: string,
    options?: GetPagesParameters
  ): StreamableMethod<GetPages200Response>;
  /** Long running put request that will either return to end users a final payload of a raw body, or a final payload of a model after the SDK has grown up. */
  lro(mode: string, options?: LroParameters): StreamableMethod<Lro200Response>;
}

export interface GetModel {
  /** Get models that you will either return to end users as a raw body, or with a model added during grow up. */
  get(options?: GetModelParameters): StreamableMethod<GetModel200Response>;
  /** Post either raw response as a model and pass in 'raw' for mode, or grow up your operation to take a model instead, and put in 'model' as mode. */
  post(options: PostModelParameters): StreamableMethod<PostModel200Response>;
}

export interface GetPages {
  /** Get pages that you will either return to users in pages of raw bodies, or pages of models following growup. */
  get(options?: GetPagesParameters): StreamableMethod<GetPages200Response>;
}

export interface Lro {
  /** Long running put request that will either return to end users a final payload of a raw body, or a final payload of a model after the SDK has grown up. */
  put(options?: LroParameters): StreamableMethod<Lro200Response>;
}

export interface Routes {
  /** Resource for '/customization/model/\{mode\}' has methods for the following verbs: get, post */
  (path: "/customization/model/{mode}", mode: string): GetModel;
  /** Resource for '/customization/paging/\{mode\}' has methods for the following verbs: get */
  (path: "/customization/paging/{mode}", mode: string): GetPages;
  /** Resource for '/customization/lro/\{mode\}' has methods for the following verbs: put */
  (path: "/customization/lro/{mode}", mode: string): Lro;
}

export type DPGCustomizationClient = Client & {
  path: Routes;
} & ClientOperations;

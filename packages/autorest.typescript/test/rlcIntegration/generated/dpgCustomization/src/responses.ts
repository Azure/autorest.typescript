// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  ProductOutput,
  ProductResultOutput,
  LROProductOutput,
} from "./outputModels";

/** Get models that you will either return to end users as a raw body, or with a model added during grow up. */
export interface GetModel200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Post either raw response as a model and pass in 'raw' for mode, or grow up your operation to take a model instead, and put in 'model' as mode. */
export interface PostModel200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Get pages that you will either return to users in pages of raw bodies, or pages of models following growup. */
export interface GetPages200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** Long running put request that will either return to end users a final payload of a raw body, or a final payload of a model after the SDK has grown up. */
export interface Lro200Response extends HttpResponse {
  status: "200";
  body: LROProductOutput;
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  ProductOutput,
  ProductListOutput,
  LroProductOutput,
} from "./outputModels";

/** Returns {'received': <mode>} */
export interface GetModel200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Returns {'received': <mode>} */
export interface PostModel200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** The request has succeeded. */
export interface GetPages200Response extends HttpResponse {
  status: "200";
  body: ProductListOutput;
}

export interface GetPagesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** Initial response with ProvisioningState='Succeeded' */
export interface Lro200Response extends HttpResponse {
  status: "200";
  body: LroProductOutput;
}

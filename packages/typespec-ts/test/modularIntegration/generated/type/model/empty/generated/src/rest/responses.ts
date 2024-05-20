// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** There is no content to send for this request, but the headers may be useful. */
export interface PutEmpty204Response extends HttpResponse {
  status: "204";
}

/** Empty model used in operation return type */
export interface GetEmpty200Response extends HttpResponse {
  status: "200";
}

/** Empty model used in both parameter and return type */
export interface PostRoundTripEmpty200Response extends HttpResponse {
  status: "200";
}

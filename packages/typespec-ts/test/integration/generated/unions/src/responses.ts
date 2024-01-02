// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  ModelWithSimpleUnionPropertyInResponseOutput,
  ModelWithNamedUnionPropertyInResponseOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface SendInt200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface SendIntArray200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface SendFirstNamedUnionValue200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface SendSecondNamedUnionValue200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface ReceiveString200Response extends HttpResponse {
  status: "200";
  body: ModelWithSimpleUnionPropertyInResponseOutput;
}

/** The request has succeeded. */
export interface ReceiveIntArray200Response extends HttpResponse {
  status: "200";
  body: ModelWithSimpleUnionPropertyInResponseOutput;
}

/** The request has succeeded. */
export interface ReceiveFirstNamedUnionValue200Response extends HttpResponse {
  status: "200";
  body: ModelWithNamedUnionPropertyInResponseOutput;
}

/** The request has succeeded. */
export interface ReceiveSecondNamedUnionValue200Response extends HttpResponse {
  status: "200";
  body: ModelWithNamedUnionPropertyInResponseOutput;
}

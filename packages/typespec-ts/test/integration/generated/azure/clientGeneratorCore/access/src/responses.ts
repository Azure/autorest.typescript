// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  NoDecoratorModelInPublicOutput,
  PublicDecoratorModelInPublicOutput,
  NoDecoratorModelInInternalOutput,
  InternalDecoratorModelInInternalOutput,
  PublicDecoratorModelInInternalOutput,
  SharedModelOutput,
  OuterModelOutput,
  AbstractModelOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface NoDecoratorInPublic200Response extends HttpResponse {
  status: "200";
  body: NoDecoratorModelInPublicOutput;
}

/** The request has succeeded. */
export interface PublicDecoratorInPublic200Response extends HttpResponse {
  status: "200";
  body: PublicDecoratorModelInPublicOutput;
}

/** The request has succeeded. */
export interface NoDecoratorInInternal200Response extends HttpResponse {
  status: "200";
  body: NoDecoratorModelInInternalOutput;
}

/** The request has succeeded. */
export interface InternalDecoratorInInternal200Response extends HttpResponse {
  status: "200";
  body: InternalDecoratorModelInInternalOutput;
}

/** The request has succeeded. */
export interface PublicDecoratorInInternal200Response extends HttpResponse {
  status: "200";
  body: PublicDecoratorModelInInternalOutput;
}

/** The request has succeeded. */
export interface Public200Response extends HttpResponse {
  status: "200";
  body: SharedModelOutput;
}

/** The request has succeeded. */
export interface Internal200Response extends HttpResponse {
  status: "200";
  body: SharedModelOutput;
}

/** The request has succeeded. */
export interface Operation200Response extends HttpResponse {
  status: "200";
  body: OuterModelOutput;
}

/** The request has succeeded. */
export interface Discriminator200Response extends HttpResponse {
  status: "200";
  body: AbstractModelOutput;
}

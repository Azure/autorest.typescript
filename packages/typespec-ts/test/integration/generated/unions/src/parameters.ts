// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  ModelWithSimpleUnionProperty,
  ModelWithNamedUnionProperty,
} from "./models";

export interface SendIntBodyParam {
  body: ModelWithSimpleUnionProperty;
}

export type SendIntParameters = SendIntBodyParam & RequestParameters;

export interface SendIntArrayBodyParam {
  body: ModelWithSimpleUnionProperty;
}

export type SendIntArrayParameters = SendIntArrayBodyParam & RequestParameters;

export interface SendFirstNamedUnionValueBodyParam {
  body: ModelWithNamedUnionProperty;
}

export type SendFirstNamedUnionValueParameters =
  SendFirstNamedUnionValueBodyParam & RequestParameters;

export interface SendSecondNamedUnionValueBodyParam {
  body: ModelWithNamedUnionProperty;
}

export type SendSecondNamedUnionValueParameters =
  SendSecondNamedUnionValueBodyParam & RequestParameters;
export type ReceiveStringParameters = RequestParameters;
export type ReceiveIntArrayParameters = RequestParameters;
export type ReceiveFirstNamedUnionValueParameters = RequestParameters;
export type ReceiveSecondNamedUnionValueParameters = RequestParameters;

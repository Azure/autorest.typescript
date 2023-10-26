// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { A, Ba, Bea } from "./models.js";

export interface Op1BodyParam {
  body: A;
}

export type Op1Parameters = Op1BodyParam & RequestParameters;

export interface BOp1BodyParam {
  body: Ba;
}

export type BOp1Parameters = BOp1BodyParam & RequestParameters;

export interface BecOp1BodyParam {
  body: Bea;
}

export type BecOp1Parameters = BecOp1BodyParam & RequestParameters;

export interface BcOp1BodyParam {
  body: Ba;
}

export type BcOp1Parameters = BcOp1BodyParam & RequestParameters;

export interface DOp1BodyParam {
  body: A;
}

export type DOp1Parameters = DOp1BodyParam & RequestParameters;

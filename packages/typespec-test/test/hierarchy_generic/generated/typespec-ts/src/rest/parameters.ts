// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { A0, A1, A2 } from "./models.js";

export interface Op1BodyParam {
  body: A0;
}

export type Op1Parameters = Op1BodyParam & RequestParameters;

export interface BOp1BodyParam {
  body: A1;
}

export type BOp1Parameters = BOp1BodyParam & RequestParameters;

export interface BecOp1BodyParam {
  body: A2;
}

export type BecOp1Parameters = BecOp1BodyParam & RequestParameters;

export interface BcOp1BodyParam {
  body: A1;
}

export type BcOp1Parameters = BcOp1BodyParam & RequestParameters;

export interface DOp1BodyParam {
  body: A0;
}

export type DOp1Parameters = DOp1BodyParam & RequestParameters;

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Test } from "./models.js";

export interface Test1BodyParam {
  body?: { a: string; b: string; c: string };
}

export type Test1Parameters = Test1BodyParam & RequestParameters;

export interface Test2BodyParam {
  body?: Test;
}

export type Test2Parameters = Test2BodyParam & RequestParameters;

export interface Test3BodyParam {
  body: { prop: string };
}

export type Test3Parameters = Test3BodyParam & RequestParameters;

export interface Test4BodyParam {
  body: Test;
}

export type Test4Parameters = Test4BodyParam & RequestParameters;

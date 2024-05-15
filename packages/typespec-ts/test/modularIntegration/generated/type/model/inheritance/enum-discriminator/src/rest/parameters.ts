// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Dog, Snake } from "./models.js";

export type GetExtensibleModelParameters = RequestParameters;

export interface PutExtensibleModelBodyParam {
  /** Dog to create */
  body: Dog;
}

export type PutExtensibleModelParameters = PutExtensibleModelBodyParam &
  RequestParameters;
export type GetExtensibleModelMissingDiscriminatorParameters =
  RequestParameters;
export type GetExtensibleModelWrongDiscriminatorParameters = RequestParameters;
export type GetFixedModelParameters = RequestParameters;

export interface PutFixedModelBodyParam {
  /** Snake to create */
  body: Snake;
}

export type PutFixedModelParameters = PutFixedModelBodyParam &
  RequestParameters;
export type GetFixedModelMissingDiscriminatorParameters = RequestParameters;
export type GetFixedModelWrongDiscriminatorParameters = RequestParameters;

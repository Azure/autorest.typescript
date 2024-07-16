// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpreadContext } from "../../api/spreadContext.js";
import { BodyParameter, CompositeRequestMix } from "../../models/models.js";
import {
  modelSpreadAsRequestBody,
  modelSpreadCompositeRequestOnlyWithBody,
  modelSpreadCompositeRequestWithoutBody,
  modelSpreadCompositeRequest,
  modelSpreadCompositeRequestMix,
} from "../../api/model/index.js";
import {
  ModelSpreadAsRequestBodyOptionalParams,
  ModelSpreadCompositeRequestOnlyWithBodyOptionalParams,
  ModelSpreadCompositeRequestWithoutBodyOptionalParams,
  ModelSpreadCompositeRequestOptionalParams,
  ModelSpreadCompositeRequestMixOptionalParams,
} from "../../models/options.js";

/** Interface representing a Model operations. */
export interface ModelOperations {
  spreadAsRequestBody: (
    body: BodyParameter,
    options?: ModelSpreadAsRequestBodyOptionalParams,
  ) => Promise<void>;
  spreadCompositeRequestOnlyWithBody: (
    body: BodyParameter,
    options?: ModelSpreadCompositeRequestOnlyWithBodyOptionalParams,
  ) => Promise<void>;
  spreadCompositeRequestWithoutBody: (
    name: string,
    testHeader: string,
    options?: ModelSpreadCompositeRequestWithoutBodyOptionalParams,
  ) => Promise<void>;
  spreadCompositeRequest: (
    name: string,
    testHeader: string,
    body: BodyParameter,
    options?: ModelSpreadCompositeRequestOptionalParams,
  ) => Promise<void>;
  spreadCompositeRequestMix: (
    name: string,
    testHeader: string,
    body: CompositeRequestMix,
    options?: ModelSpreadCompositeRequestMixOptionalParams,
  ) => Promise<void>;
}

export function getModel(context: SpreadContext) {
  return {
    spreadAsRequestBody: (
      body: BodyParameter,
      options?: ModelSpreadAsRequestBodyOptionalParams,
    ) => modelSpreadAsRequestBody(context, body, options),
    spreadCompositeRequestOnlyWithBody: (
      body: BodyParameter,
      options?: ModelSpreadCompositeRequestOnlyWithBodyOptionalParams,
    ) => modelSpreadCompositeRequestOnlyWithBody(context, body, options),
    spreadCompositeRequestWithoutBody: (
      name: string,
      testHeader: string,
      options?: ModelSpreadCompositeRequestWithoutBodyOptionalParams,
    ) =>
      modelSpreadCompositeRequestWithoutBody(
        context,
        name,
        testHeader,
        options,
      ),
    spreadCompositeRequest: (
      name: string,
      testHeader: string,
      body: BodyParameter,
      options?: ModelSpreadCompositeRequestOptionalParams,
    ) => modelSpreadCompositeRequest(context, name, testHeader, body, options),
    spreadCompositeRequestMix: (
      name: string,
      testHeader: string,
      body: CompositeRequestMix,
      options?: ModelSpreadCompositeRequestMixOptionalParams,
    ) =>
      modelSpreadCompositeRequestMix(context, name, testHeader, body, options),
  };
}

export function getModelOperations(context: SpreadContext): ModelOperations {
  return {
    ...getModel(context),
  };
}

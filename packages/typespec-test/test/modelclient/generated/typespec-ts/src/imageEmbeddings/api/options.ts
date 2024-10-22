// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";
import {
  UnknownParams,
  EmbeddingEncodingFormat,
  EmbeddingInputType,
} from "../../models/models.js";

/** Optional parameters. */
export interface EmbedOptionalParams extends OperationOptions {
  /**
   * Controls what happens if unknown parameters are passed in the JSON request payload.
   * This sets the HTTP request header `unknown-parameters`.
   */
  unknownParams?: UnknownParams;
  /**
   * Optional. The number of dimensions the resulting output embeddings should have.
   * Passing null causes the model to use its default value.
   * Returns a 422 error if the model doesn't support the value or parameter.
   */
  dimensions?: number;
  /**
   * Optional. The number of dimensions the resulting output embeddings should have.
   * Passing null causes the model to use its default value.
   * Returns a 422 error if the model doesn't support the value or parameter.
   */
  encodingFormat?: EmbeddingEncodingFormat;
  /**
   * Optional. The type of the input.
   * Returns a 422 error if the model doesn't support the value or parameter.
   */
  inputType?: EmbeddingInputType;
}

/** Optional parameters. */
export interface GetModelInfoOptionalParams extends OperationOptions {}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";
import {
  TextCategory,
  AnalyzeTextOutputType,
  ImageCategory,
  AnalyzeImageOutputType,
} from "./models.js";

export interface AnalyzeTextOptions extends OperationOptions {
  /** The categories will be analyzed. If not assigned, a default set of the categories' analysis results will be returned. */
  categories?: TextCategory[];
  /** The names of blocklists. */
  blocklistNames?: string[];
  /** When set to true, further analyses of harmful content will not be performed in cases where blocklists are hit. When set to false, all analyses of harmful content will be performed, whether or not blocklists are hit. */
  breakByBlocklists?: boolean;
  /** The type of text analysis output. If not assigned, the default value is "FourLevels". */
  outputType?: AnalyzeTextOutputType;
}

export interface AnalyzeImageOptions extends OperationOptions {
  /** The categories will be analyzed. If not assigned, a default set of the categories' analysis results will be returned. */
  categories?: ImageCategory[];
  /** The type of image analysis output. If not assigned, the default value is "FourLevels". */
  outputType?: AnalyzeImageOutputType;
}

export interface GetTextBlocklistOptions extends OperationOptions {}

export interface CreateOrUpdateTextBlocklistOptions extends OperationOptions {
  /** Text blocklist description. */
  description?: string;
  /** This request has a JSON Merge Patch body. */
  contentType?: string;
}

export interface DeleteTextBlocklistOptions extends OperationOptions {}

export interface ListTextBlocklistsOptions extends OperationOptions {}

export interface AddBlockItemsOptions extends OperationOptions {}

export interface AddOrUpdateBlockItemsOptions extends OperationOptions {}

export interface RemoveBlockItemsOptions extends OperationOptions {}

export interface GetTextBlocklistItemOptions extends OperationOptions {}

export interface ListTextBlocklistItemsOptions extends OperationOptions {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

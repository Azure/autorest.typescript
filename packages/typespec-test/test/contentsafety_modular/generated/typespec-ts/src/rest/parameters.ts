// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  AnalyzeText,
  AnalyzeImage,
  TextBlocklist,
  AddBlockItems,
  RemoveBlockItems,
} from "./models.js";

export interface AnalyzeTextBodyParam {
  /** The request of text analysis. */
  body: AnalyzeText;
}

export type AnalyzeTextParameters = AnalyzeTextBodyParam & RequestParameters;

export interface AnalyzeImageBodyParam {
  /** The analysis request of the image. */
  body: AnalyzeImage;
}

export type AnalyzeImageParameters = AnalyzeImageBodyParam & RequestParameters;
export type GetTextBlocklistParameters = RequestParameters;
/** The resource instance. */
export type TextBlocklistResourceMergeAndPatch = Partial<TextBlocklist>;

export interface CreateOrUpdateTextBlocklistBodyParam {
  /** The resource instance. */
  body: TextBlocklistResourceMergeAndPatch;
}

export interface CreateOrUpdateTextBlocklistMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type CreateOrUpdateTextBlocklistParameters =
  CreateOrUpdateTextBlocklistMediaTypesParam &
    CreateOrUpdateTextBlocklistBodyParam &
    RequestParameters;
export type DeleteTextBlocklistParameters = RequestParameters;
export type ListTextBlocklistsParameters = RequestParameters;

export interface AddBlockItemsBodyParam {
  body?: AddBlockItems;
}

export type AddBlockItemsParameters = AddBlockItemsBodyParam &
  RequestParameters;

export interface AddOrUpdateBlockItemsBodyParam {
  body?: AddBlockItems;
}

export type AddOrUpdateBlockItemsParameters = AddOrUpdateBlockItemsBodyParam &
  RequestParameters;

export interface RemoveBlockItemsBodyParam {
  body?: RemoveBlockItems;
}

export type RemoveBlockItemsParameters = RemoveBlockItemsBodyParam &
  RequestParameters;
export type GetTextBlocklistItemParameters = RequestParameters;

export interface ListTextBlocklistItemsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ListTextBlocklistItemsQueryParam {
  queryParameters?: ListTextBlocklistItemsQueryParamProperties;
}

export type ListTextBlocklistItemsParameters =
  ListTextBlocklistItemsQueryParam & RequestParameters;

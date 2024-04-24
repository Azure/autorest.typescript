// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";

/** The analysis response of the text */
export interface AnalyzeTextResultOutput {
  /** The details of blocklist match. */
  blocklistsMatchResults?: Array<TextBlocklistMatchResultOutput>;
  /** Analysis result for categories. */
  analyzeResults: Array<TextAnalyzeSeverityResultOutput>;
}

/** The result of blocklist match. */
export interface TextBlocklistMatchResultOutput {
  /** The name of matched blocklist. */
  blocklistName: string;
  /** The id of matched item. */
  blockItemId: string;
  /** The content of matched item. */
  blockItemText: string;
}

/** Text analysis result. */
export interface TextAnalyzeSeverityResultOutput {
  /** The text category. */
  category: TextCategoryOutput;
  /** This field is decided by outputType in request, if choose "FourLevels", the value could be 0,2,4,6. The higher the severity of input content, the larger this value is. */
  severity?: number;
}

/** The analysis response of the image. */
export interface AnalyzeImageResultOutput {
  /** Analysis result for categories. */
  analyzeResults: Array<ImageAnalyzeSeverityResultOutput>;
}

/** Image analysis result. */
export interface ImageAnalyzeSeverityResultOutput {
  /** The image category. */
  category: ImageCategoryOutput;
  /** This field is decided by outputType in request, if choose "FourLevels", the value could be 0,2,4,6. The higher the severity of input content, the larger this value is. */
  severity?: number;
}

/** Text Blocklist. */
export interface TextBlocklistOutput {
  /** Text blocklist name. */
  blocklistName: string;
  /** Text blocklist description. */
  description?: string;
}

/** The response of adding blockItems to text blocklist. */
export interface AddOrUpdateBlockItemsResultOutput {
  /** Array of blockItems added. */
  value?: Array<TextBlockItemOutput>;
}

/** Item in TextBlocklist. */
export interface TextBlockItemOutput {
  /** Block Item Id. It will be uuid. */
  blockItemId: string;
  /** Block item description. */
  description?: string;
  /** Block item content. */
  text: string;
}

/** Text analyze category */
export type TextCategoryOutput = "Hate" | "SelfHarm" | "Sexual" | "Violence";
/** Image analyze category */
export type ImageCategoryOutput = "Hate" | "SelfHarm" | "Sexual" | "Violence";
/** Paged collection of TextBlocklist items */
export type PagedTextBlocklistOutput = Paged<TextBlocklistOutput>;
/** Paged collection of TextBlockItem items */
export type PagedTextBlockItemOutput = Paged<TextBlockItemOutput>;

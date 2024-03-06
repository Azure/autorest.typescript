// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Text Blocklist. */
export interface TextBlocklist {
  /** Text blocklist name. */
  readonly blocklistName: string;
  /** Text blocklist description. */
  description?: string;
}

/** The request of adding blockItems to text blocklist. */
export interface AddOrUpdateBlockItemsOptions {
  /** Array of blockItemInfo to add. */
  blockItems: TextBlockItemInfo[];
}

/** Block item info in text blocklist. */
export interface TextBlockItemInfo {
  /** Block item description. */
  description?: string;
  /** Block item content. */
  text: string;
}

/** The response of adding blockItems to text blocklist. */
export interface AddOrUpdateBlockItemsResult {
  /** Array of blockItems added. */
  value?: TextBlockItem[];
}

/** Item in TextBlocklist. */
export interface TextBlockItem {
  /** Block Item Id. It will be uuid. */
  readonly blockItemId: string;
  /** Block item description. */
  description?: string;
  /** Block item content. */
  text: string;
}

/** The request of removing blockItems from text blocklist. */
export interface RemoveBlockItemsOptions {
  /** Array of blockItemIds to remove. */
  blockItemIds: string[];
}

/** The analysis request of the image. */
export interface AnalyzeImageOptions {
  /** The image needs to be analyzed. */
  image: ImageData;
  /** The categories will be analyzed. If not assigned, a default set of the categories' analysis results will be returned. */
  categories?: ImageCategory[];
  /** The type of image analysis output. If not assigned, the default value is "FourLevels". */
  outputType?: AnalyzeImageOutputType;
}

/** The content or blob url of image, could be base64 encoding bytes or blob url. You can choose only one of them. If both are given, the request will be refused. The maximum size of image is 2048 pixels * 2048 pixels, no larger than 4MB at the same time. The minimum size of image is 50 pixels * 50 pixels. */
export interface ImageData {
  /** Base64 encoding of image. */
  content?: Uint8Array;
  /** The blob url of image. */
  blobUrl?: string;
}

/** Image analyze category */
/** "Hate", "SelfHarm", "Sexual", "Violence" */
export type ImageCategory = string;
/** The type of image analysis output. */
/** "FourLevels" */
export type AnalyzeImageOutputType = string;

/** The analysis response of the image. */
export interface AnalyzeImageResult {
  /** Analysis result for categories. */
  analyzeResults: ImageAnalyzeSeverityResult[];
}

/** Image analysis result. */
export interface ImageAnalyzeSeverityResult {
  /** The image category. */
  category: ImageCategory;
  /** This field is decided by outputType in request, if choose "FourLevels", the value could be 0,2,4,6. The higher the severity of input content, the larger this value is. */
  severity?: number;
}

/** The analysis request of the text. */
export interface AnalyzeTextOptions {
  /** The text needs to be scanned. We support at most 10k Unicode characters (unicode code points) in text of one request. */
  text: string;
  /** The categories will be analyzed. If not assigned, a default set of the categories' analysis results will be returned. */
  categories?: TextCategory[];
  /** The names of blocklists. */
  blocklistNames?: string[];
  /** When set to true, further analyses of harmful content will not be performed in cases where blocklists are hit. When set to false, all analyses of harmful content will be performed, whether or not blocklists are hit. */
  breakByBlocklists?: boolean;
  /** The type of text analysis output. If not assigned, the default value is "FourLevels". */
  outputType?: AnalyzeTextOutputType;
}

/** Text analyze category */
/** "Hate", "SelfHarm", "Sexual", "Violence" */
export type TextCategory = string;
/** The type of text analysis output. */
/** "FourLevels", "EightLevels" */
export type AnalyzeTextOutputType = string;

/** The analysis response of the text */
export interface AnalyzeTextResult {
  /** The details of blocklist match. */
  blocklistsMatchResults?: TextBlocklistMatchResult[];
  /** Analysis result for categories. */
  analyzeResults: TextAnalyzeSeverityResult[];
}

/** The result of blocklist match. */
export interface TextBlocklistMatchResult {
  /** The name of matched blocklist. */
  blocklistName: string;
  /** The id of matched item. */
  blockItemId: string;
  /** The content of matched item. */
  blockItemText: string;
}

/** Text analysis result. */
export interface TextAnalyzeSeverityResult {
  /** The text category. */
  category: TextCategory;
  /** This field is decided by outputType in request, if choose "FourLevels", the value could be 0,2,4,6. The higher the severity of input content, the larger this value is. */
  severity?: number;
}

/** Paged collection of TextBlocklist items */
export interface PagedTextBlocklist {
  /** The TextBlocklist items on this page */
  value: TextBlocklist[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Paged collection of TextBlockItem items */
export interface PagedTextBlockItem {
  /** The TextBlockItem items on this page */
  value: TextBlockItem[];
  /** The link to the next page of items */
  nextLink?: string;
}

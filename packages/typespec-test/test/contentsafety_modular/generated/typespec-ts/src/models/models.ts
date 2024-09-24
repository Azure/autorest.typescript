// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";

/** Text Blocklist. */
export interface TextBlocklist {
  /** Text blocklist name. */
  blocklistName: string;
  /** Text blocklist description. */
  description?: string;
}

export function textBlocklistSerializer(item: TextBlocklist): any {
  return {
    blocklistName: item["blocklistName"],
    description: item["description"],
  };
}

export function textBlocklistDeserializer(item: any): TextBlocklist {
  return {
    blocklistName: item["blocklistName"],
    description: item["description"],
  };
}

/** The request of adding blockItems to text blocklist. */
export interface AddOrUpdateBlockItemsOptions {
  /** Array of blockItemInfo to add. */
  blockItems: TextBlockItemInfo[];
}

export function addOrUpdateBlockItemsOptionsSerializer(
  item: AddOrUpdateBlockItemsOptions,
): any {
  return { blockItems: textBlockItemInfoArraySerializer(item["blockItems"]) };
}

export function addOrUpdateBlockItemsOptionsDeserializer(
  item: any,
): AddOrUpdateBlockItemsOptions {
  return {
    blockItems: textBlockItemInfoArrayDeserializer(item["blockItems"]),
  };
}

/** Block item info in text blocklist. */
export interface TextBlockItemInfo {
  /** Block item description. */
  description?: string;
  /** Block item content. */
  text: string;
}

export function textBlockItemInfoSerializer(item: TextBlockItemInfo): any {
  return { description: item["description"], text: item["text"] };
}

export function textBlockItemInfoDeserializer(item: any): TextBlockItemInfo {
  return {
    description: item["description"],
    text: item["text"],
  };
}

export function textBlockItemInfoArraySerializer(
  result: Array<TextBlockItemInfo>,
): any[] {
  return result.map((item) => {
    textBlockItemInfoSerializer(item);
  });
}

export function textBlockItemInfoArrayDeserializer(
  result: Array<TextBlockItemInfo>,
): any[] {
  return result.map((item) => {
    textBlockItemInfoDeserializer(item);
  });
}

/** The response of adding blockItems to text blocklist. */
export interface AddOrUpdateBlockItemsResult {
  /** Array of blockItems added. */
  value?: TextBlockItem[];
}

export function addOrUpdateBlockItemsResultSerializer(
  item: AddOrUpdateBlockItemsResult,
): any {
  return {
    value: !item["value"]
      ? item["value"]
      : textBlockItemArraySerializer(item["value"]),
  };
}

export function addOrUpdateBlockItemsResultDeserializer(
  item: any,
): AddOrUpdateBlockItemsResult {
  return {
    value: !item["value"]
      ? item["value"]
      : textBlockItemArrayDeserializer(item["value"]),
  };
}

/** Item in TextBlocklist. */
export interface TextBlockItem {
  /** Block Item Id. It will be uuid. */
  blockItemId: string;
  /** Block item description. */
  description?: string;
  /** Block item content. */
  text: string;
}

export function textBlockItemSerializer(item: TextBlockItem): any {
  return {
    blockItemId: item["blockItemId"],
    description: item["description"],
    text: item["text"],
  };
}

export function textBlockItemDeserializer(item: any): TextBlockItem {
  return {
    blockItemId: item["blockItemId"],
    description: item["description"],
    text: item["text"],
  };
}

export function textBlockItemArraySerializer(
  result: Array<TextBlockItem>,
): any[] {
  return result.map((item) => {
    textBlockItemSerializer(item);
  });
}

export function textBlockItemArrayDeserializer(
  result: Array<TextBlockItem>,
): any[] {
  return result.map((item) => {
    textBlockItemDeserializer(item);
  });
}

/** The request of removing blockItems from text blocklist. */
export interface RemoveBlockItemsOptions {
  /** Array of blockItemIds to remove. */
  blockItemIds: string[];
}

export function removeBlockItemsOptionsSerializer(
  item: RemoveBlockItemsOptions,
): any {
  return {
    blockItemIds: item["blockItemIds"].map((p: any) => {
      return p;
    }),
  };
}

export function removeBlockItemsOptionsDeserializer(
  item: any,
): RemoveBlockItemsOptions {
  return {
    blockItemIds: item["blockItemIds"].map((p: any) => {
      return p;
    }),
  };
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

export function analyzeImageOptionsSerializer(item: AnalyzeImageOptions): any {
  return {
    image: imageDataSerializer(item["image"]),
    categories: !item["categories"]
      ? item["categories"]
      : imageCategoryArraySerializer(item["categories"]),
    outputType: !item["outputType"]
      ? item["outputType"]
      : analyzeImageOutputTypeSerializer(item["outputType"]),
  };
}

export function analyzeImageOptionsDeserializer(
  item: any,
): AnalyzeImageOptions {
  return {
    image: imageDataDeserializer(item["image"]),
    categories: !item["categories"]
      ? item["categories"]
      : imageCategoryArrayDeserializer(item["categories"]),
    outputType: !item["outputType"]
      ? item["outputType"]
      : analyzeImageOutputTypeDeserializer(item["outputType"]),
  };
}

/** The content or blob url of image, could be base64 encoding bytes or blob url. You can choose only one of them. If both are given, the request will be refused. The maximum size of image is 2048 pixels * 2048 pixels, no larger than 4MB at the same time. The minimum size of image is 50 pixels * 50 pixels. */
export interface ImageData {
  /** Base64 encoding of image. */
  content?: Uint8Array;
  /** The blob url of image. */
  blobUrl?: string;
}

export function imageDataSerializer(item: ImageData): any {
  return {
    content: !item["content"]
      ? item["content"]
      : uint8ArrayToString(item["content"], "base64"),
    blobUrl: item["blobUrl"],
  };
}

export function imageDataDeserializer(item: any): ImageData {
  return {
    content:
      typeof item["content"] === "string"
        ? stringToUint8Array(item["content"], "base64")
        : item["content"],
    blobUrl: item["blobUrl"],
  };
}

/** Image analyze category */
export type ImageCategory = "Hate" | "SelfHarm" | "Sexual" | "Violence";

export function imageCategorySerializer(item: ImageCategory): any {
  return item;
}

export function imageCategoryDeserializer(item: any): ImageCategory {
  return item;
}

export function imageCategoryArraySerializer(
  result: Array<ImageCategory>,
): any[] {
  return result.map((item) => {
    imageCategorySerializer(item);
  });
}

export function imageCategoryArrayDeserializer(
  result: Array<ImageCategory>,
): any[] {
  return result.map((item) => {
    imageCategoryDeserializer(item);
  });
}

/** The type of image analysis output. */
export type AnalyzeImageOutputType = "FourLevels";

export function analyzeImageOutputTypeSerializer(
  item: AnalyzeImageOutputType,
): any {
  return item;
}

export function analyzeImageOutputTypeDeserializer(
  item: any,
): AnalyzeImageOutputType {
  return item;
}

/** The analysis response of the image. */
export interface AnalyzeImageResult {
  /** Analysis result for categories. */
  analyzeResults: ImageAnalyzeSeverityResult[];
}

export function analyzeImageResultSerializer(item: AnalyzeImageResult): any {
  return {
    analyzeResults: imageAnalyzeSeverityResultArraySerializer(
      item["analyzeResults"],
    ),
  };
}

export function analyzeImageResultDeserializer(item: any): AnalyzeImageResult {
  return {
    analyzeResults: imageAnalyzeSeverityResultArrayDeserializer(
      item["analyzeResults"],
    ),
  };
}

/** Image analysis result. */
export interface ImageAnalyzeSeverityResult {
  /** The image category. */
  category: ImageCategory;
  /** This field is decided by outputType in request, if choose "FourLevels", the value could be 0,2,4,6. The higher the severity of input content, the larger this value is. */
  severity?: number;
}

export function imageAnalyzeSeverityResultSerializer(
  item: ImageAnalyzeSeverityResult,
): any {
  return {
    category: imageCategorySerializer(item["category"]),
    severity: item["severity"],
  };
}

export function imageAnalyzeSeverityResultDeserializer(
  item: any,
): ImageAnalyzeSeverityResult {
  return {
    category: imageCategoryDeserializer(item["category"]),
    severity: item["severity"],
  };
}

export function imageAnalyzeSeverityResultArraySerializer(
  result: Array<ImageAnalyzeSeverityResult>,
): any[] {
  return result.map((item) => {
    imageAnalyzeSeverityResultSerializer(item);
  });
}

export function imageAnalyzeSeverityResultArrayDeserializer(
  result: Array<ImageAnalyzeSeverityResult>,
): any[] {
  return result.map((item) => {
    imageAnalyzeSeverityResultDeserializer(item);
  });
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

export function analyzeTextOptionsSerializer(item: AnalyzeTextOptions): any {
  return {
    text: item["text"],
    categories: !item["categories"]
      ? item["categories"]
      : textCategoryArraySerializer(item["categories"]),
    blocklistNames: !item["blocklistNames"]
      ? item["blocklistNames"]
      : item["blocklistNames"].map((p: any) => {
          return p;
        }),
    breakByBlocklists: item["breakByBlocklists"],
    outputType: !item["outputType"]
      ? item["outputType"]
      : analyzeTextOutputTypeSerializer(item["outputType"]),
  };
}

export function analyzeTextOptionsDeserializer(item: any): AnalyzeTextOptions {
  return {
    text: item["text"],
    categories: !item["categories"]
      ? item["categories"]
      : textCategoryArrayDeserializer(item["categories"]),
    blocklistNames: item["blocklistNames"].map((p: any) => {
      return p;
    }),
    breakByBlocklists: item["breakByBlocklists"],
    outputType: !item["outputType"]
      ? item["outputType"]
      : analyzeTextOutputTypeDeserializer(item["outputType"]),
  };
}

/** Text analyze category */
export type TextCategory = "Hate" | "SelfHarm" | "Sexual" | "Violence";

export function textCategorySerializer(item: TextCategory): any {
  return item;
}

export function textCategoryDeserializer(item: any): TextCategory {
  return item;
}

export function textCategoryArraySerializer(
  result: Array<TextCategory>,
): any[] {
  return result.map((item) => {
    textCategorySerializer(item);
  });
}

export function textCategoryArrayDeserializer(
  result: Array<TextCategory>,
): any[] {
  return result.map((item) => {
    textCategoryDeserializer(item);
  });
}

/** The type of text analysis output. */
export type AnalyzeTextOutputType = "FourLevels" | "EightLevels";

export function analyzeTextOutputTypeSerializer(
  item: AnalyzeTextOutputType,
): any {
  return item;
}

export function analyzeTextOutputTypeDeserializer(
  item: any,
): AnalyzeTextOutputType {
  return item;
}

/** The analysis response of the text */
export interface AnalyzeTextResult {
  /** The details of blocklist match. */
  blocklistsMatchResults?: TextBlocklistMatchResult[];
  /** Analysis result for categories. */
  analyzeResults: TextAnalyzeSeverityResult[];
}

export function analyzeTextResultSerializer(item: AnalyzeTextResult): any {
  return {
    blocklistsMatchResults: !item["blocklistsMatchResults"]
      ? item["blocklistsMatchResults"]
      : textBlocklistMatchResultArraySerializer(item["blocklistsMatchResults"]),
    analyzeResults: textAnalyzeSeverityResultArraySerializer(
      item["analyzeResults"],
    ),
  };
}

export function analyzeTextResultDeserializer(item: any): AnalyzeTextResult {
  return {
    blocklistsMatchResults: !item["blocklistsMatchResults"]
      ? item["blocklistsMatchResults"]
      : textBlocklistMatchResultArrayDeserializer(
          item["blocklistsMatchResults"],
        ),
    analyzeResults: textAnalyzeSeverityResultArrayDeserializer(
      item["analyzeResults"],
    ),
  };
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

export function textBlocklistMatchResultSerializer(
  item: TextBlocklistMatchResult,
): any {
  return {
    blocklistName: item["blocklistName"],
    blockItemId: item["blockItemId"],
    blockItemText: item["blockItemText"],
  };
}

export function textBlocklistMatchResultDeserializer(
  item: any,
): TextBlocklistMatchResult {
  return {
    blocklistName: item["blocklistName"],
    blockItemId: item["blockItemId"],
    blockItemText: item["blockItemText"],
  };
}

export function textBlocklistMatchResultArraySerializer(
  result: Array<TextBlocklistMatchResult>,
): any[] {
  return result.map((item) => {
    textBlocklistMatchResultSerializer(item);
  });
}

export function textBlocklistMatchResultArrayDeserializer(
  result: Array<TextBlocklistMatchResult>,
): any[] {
  return result.map((item) => {
    textBlocklistMatchResultDeserializer(item);
  });
}

/** Text analysis result. */
export interface TextAnalyzeSeverityResult {
  /** The text category. */
  category: TextCategory;
  /** This field is decided by outputType in request, if choose "FourLevels", the value could be 0,2,4,6. The higher the severity of input content, the larger this value is. */
  severity?: number;
}

export function textAnalyzeSeverityResultSerializer(
  item: TextAnalyzeSeverityResult,
): any {
  return {
    category: textCategorySerializer(item["category"]),
    severity: item["severity"],
  };
}

export function textAnalyzeSeverityResultDeserializer(
  item: any,
): TextAnalyzeSeverityResult {
  return {
    category: textCategoryDeserializer(item["category"]),
    severity: item["severity"],
  };
}

export function textAnalyzeSeverityResultArraySerializer(
  result: Array<TextAnalyzeSeverityResult>,
): any[] {
  return result.map((item) => {
    textAnalyzeSeverityResultSerializer(item);
  });
}

export function textAnalyzeSeverityResultArrayDeserializer(
  result: Array<TextAnalyzeSeverityResult>,
): any[] {
  return result.map((item) => {
    textAnalyzeSeverityResultDeserializer(item);
  });
}

/** Type of Versions */
export type Versions = "2023-10-01";

export function versionsSerializer(item: Versions): any {
  return item;
}

export function versionsDeserializer(item: any): Versions {
  return item;
}

/** Paged collection of TextBlocklist items */
export interface _PagedTextBlocklist {
  /** The TextBlocklist items on this page */
  value: TextBlocklist[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedTextBlocklistSerializer(item: _PagedTextBlocklist): any {
  return {
    value: textBlocklistArraySerializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function _pagedTextBlocklistDeserializer(
  item: any,
): _PagedTextBlocklist {
  return {
    value: textBlocklistArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function textBlocklistArraySerializer(
  result: Array<TextBlocklist>,
): any[] {
  return result.map((item) => {
    textBlocklistSerializer(item);
  });
}

export function textBlocklistArrayDeserializer(
  result: Array<TextBlocklist>,
): any[] {
  return result.map((item) => {
    textBlocklistDeserializer(item);
  });
}

/** Paged collection of TextBlockItem items */
export interface _PagedTextBlockItem {
  /** The TextBlockItem items on this page */
  value: TextBlockItem[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedTextBlockItemSerializer(item: _PagedTextBlockItem): any {
  return {
    value: textBlockItemArraySerializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function _pagedTextBlockItemDeserializer(
  item: any,
): _PagedTextBlockItem {
  return {
    value: textBlockItemArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

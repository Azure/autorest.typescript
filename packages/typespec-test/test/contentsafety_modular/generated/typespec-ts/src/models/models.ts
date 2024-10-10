// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { uint8ArrayToString } from "@azure/core-util";

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

export function textBlockItemInfoArraySerializer(
  result: Array<TextBlockItemInfo>,
): any[] {
  return result.map((item) => {
    return textBlockItemInfoSerializer(item);
  });
}

/** The response of adding blockItems to text blocklist. */
export interface AddOrUpdateBlockItemsResult {
  /** Array of blockItems added. */
  value?: TextBlockItem[];
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

export function textBlockItemDeserializer(item: any): TextBlockItem {
  return {
    blockItemId: item["blockItemId"],
    description: item["description"],
    text: item["text"],
  };
}

export function textBlockItemArrayDeserializer(
  result: Array<TextBlockItem>,
): any[] {
  return result.map((item) => {
    return textBlockItemDeserializer(item);
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
      : item["categories"].map((p: any) => {
          return p;
        }),
    outputType: item["outputType"],
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

/** Image analyze category */
export type ImageCategory = "Hate" | "SelfHarm" | "Sexual" | "Violence";
/** The type of image analysis output. */
export type AnalyzeImageOutputType = "FourLevels";

/** The analysis response of the image. */
export interface AnalyzeImageResult {
  /** Analysis result for categories. */
  analyzeResults: ImageAnalyzeSeverityResult[];
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

export function imageAnalyzeSeverityResultDeserializer(
  item: any,
): ImageAnalyzeSeverityResult {
  return {
    category: item["category"],
    severity: item["severity"],
  };
}

export function imageAnalyzeSeverityResultArrayDeserializer(
  result: Array<ImageAnalyzeSeverityResult>,
): any[] {
  return result.map((item) => {
    return imageAnalyzeSeverityResultDeserializer(item);
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
      : item["categories"].map((p: any) => {
          return p;
        }),
    blocklistNames: !item["blocklistNames"]
      ? item["blocklistNames"]
      : item["blocklistNames"].map((p: any) => {
          return p;
        }),
    breakByBlocklists: item["breakByBlocklists"],
    outputType: item["outputType"],
  };
}

/** Text analyze category */
export type TextCategory = "Hate" | "SelfHarm" | "Sexual" | "Violence";
/** The type of text analysis output. */
export type AnalyzeTextOutputType = "FourLevels" | "EightLevels";

/** The analysis response of the text */
export interface AnalyzeTextResult {
  /** The details of blocklist match. */
  blocklistsMatchResults?: TextBlocklistMatchResult[];
  /** Analysis result for categories. */
  analyzeResults: TextAnalyzeSeverityResult[];
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

export function textBlocklistMatchResultDeserializer(
  item: any,
): TextBlocklistMatchResult {
  return {
    blocklistName: item["blocklistName"],
    blockItemId: item["blockItemId"],
    blockItemText: item["blockItemText"],
  };
}

export function textBlocklistMatchResultArrayDeserializer(
  result: Array<TextBlocklistMatchResult>,
): any[] {
  return result.map((item) => {
    return textBlocklistMatchResultDeserializer(item);
  });
}

/** Text analysis result. */
export interface TextAnalyzeSeverityResult {
  /** The text category. */
  category: TextCategory;
  /** This field is decided by outputType in request, if choose "FourLevels", the value could be 0,2,4,6. The higher the severity of input content, the larger this value is. */
  severity?: number;
}

export function textAnalyzeSeverityResultDeserializer(
  item: any,
): TextAnalyzeSeverityResult {
  return {
    category: item["category"],
    severity: item["severity"],
  };
}

export function textAnalyzeSeverityResultArrayDeserializer(
  result: Array<TextAnalyzeSeverityResult>,
): any[] {
  return result.map((item) => {
    return textAnalyzeSeverityResultDeserializer(item);
  });
}

/** Paged collection of TextBlocklist items */
export interface _PagedTextBlocklist {
  /** The TextBlocklist items on this page */
  value: TextBlocklist[];
  /** The link to the next page of items */
  nextLink?: string;
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
    return textBlocklistSerializer(item);
  });
}

export function textBlocklistArrayDeserializer(
  result: Array<TextBlocklist>,
): any[] {
  return result.map((item) => {
    return textBlocklistDeserializer(item);
  });
}

/** Paged collection of TextBlockItem items */
export interface _PagedTextBlockItem {
  /** The TextBlockItem items on this page */
  value: TextBlockItem[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedTextBlockItemDeserializer(
  item: any,
): _PagedTextBlockItem {
  return {
    value: textBlockItemArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { uint8ArrayToString } from "@azure/core-util";
import {
  AnalyzeTextOptions,
  ImageData,
  AnalyzeImageOptions,
  RemoveBlockItemsOptions,
  TextBlockItemInfo,
  AddOrUpdateBlockItemsOptions,
  TextBlocklist,
  PagedTextBlockItem,
  PagedTextBlocklist,
  TextAnalyzeSeverityResult,
  TextBlocklistMatchResult,
  AnalyzeTextResult,
  ImageAnalyzeSeverityResult,
  AnalyzeImageResult,
  TextBlockItem,
  AddOrUpdateBlockItemsResult,
} from "../models/models.js";
import {
  AnalyzeTextOptions as RestAnalyzeTextOptions,
  ImageData as RestImageData,
  AnalyzeImageOptions as RestAnalyzeImageOptions,
  RemoveBlockItemsOptions as RestRemoveBlockItemsOptions,
  TextBlockItemInfo as RestTextBlockItemInfo,
  AddOrUpdateBlockItemsOptions as RestAddOrUpdateBlockItemsOptions,
  TextBlocklist as RestTextBlocklist,
  PagedTextBlockItemOutput as RestPagedTextBlockItem,
  PagedTextBlocklistOutput as RestPagedTextBlocklist,
  TextAnalyzeSeverityResultOutput as RestTextAnalyzeSeverityResult,
  TextBlocklistMatchResultOutput as RestTextBlocklistMatchResult,
  AnalyzeTextResultOutput as RestAnalyzeTextResult,
  ImageAnalyzeSeverityResultOutput as RestImageAnalyzeSeverityResult,
  AnalyzeImageResultOutput as RestAnalyzeImageResult,
  TextBlockItemOutput as RestTextBlockItem,
  AddOrUpdateBlockItemsResultOutput as RestAddOrUpdateBlockItemsResult,
} from "../rest/index.js";

export function serializeAnalyzeTextOptions(
  o: AnalyzeTextOptions,
): RestAnalyzeTextOptions {
  return {
    outputType: o["outputType"],
    breakByBlocklists: o["breakByBlocklists"],
    blocklistNames: o["blocklistNames"],
    categories: o["categories"],
    text: o["text"],
  };
}

export function serializeImageData(o: ImageData): RestImageData {
  return {
    blobUrl: o["blobUrl"],
    content:
      o["content"] === undefined
        ? o["content"]
        : uint8ArrayToString(o["content"], "base64"),
  };
}

export function serializeAnalyzeImageOptions(
  o: AnalyzeImageOptions,
): RestAnalyzeImageOptions {
  return {
    outputType: o["outputType"],
    categories: o["categories"],
    image: MISSING_SERIALIZER(o["image"]),
  };
}

export function serializeRemoveBlockItemsOptions(
  o: RemoveBlockItemsOptions,
): RestRemoveBlockItemsOptions {
  return {
    blockItemIds: o["blockItemIds"],
  };
}

export function serializeTextBlockItemInfo(
  o: TextBlockItemInfo,
): RestTextBlockItemInfo {
  return {
    text: o["text"],
    description: o["description"],
  };
}

export function serializeAddOrUpdateBlockItemsOptions(
  o: AddOrUpdateBlockItemsOptions,
): RestAddOrUpdateBlockItemsOptions {
  return {
    blockItems: o["blockItems"].map((e) => MISSING_SERIALIZER(e)),
  };
}

export function serializeTextBlocklist(o: TextBlocklist): RestTextBlocklist {
  return {
    description: o["description"],
    blocklistName: o["blocklistName"],
  };
}

export function deserializeTextBlocklist(o: RestTextBlocklist): TextBlocklist {
  return {
    description: o["description"],
    blocklistName: o["blocklistName"],
  };
}

export function deserializePagedTextBlockItem(
  o: RestPagedTextBlockItem,
): PagedTextBlockItem {
  return {
    value: o["value"].map((e: RestTextBlockItem) => MISSING_SERIALIZER(e)),
  };
}

export function deserializePagedTextBlocklist(
  o: RestPagedTextBlocklist,
): PagedTextBlocklist {
  return {
    value: o["value"].map((e) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeTextAnalyzeSeverityResult(
  o: RestTextAnalyzeSeverityResult,
): TextAnalyzeSeverityResult {
  return {
    severity: o["severity"],
    category: o["category"],
  };
}

export function deserializeTextBlocklistMatchResult(
  o: RestTextBlocklistMatchResult,
): TextBlocklistMatchResult {
  return {
    blockItemText: o["blockItemText"],
    blockItemId: o["blockItemId"],
    blocklistName: o["blocklistName"],
  };
}

export function deserializeAnalyzeTextResult(
  o: RestAnalyzeTextResult,
): AnalyzeTextResult {
  return {
    analyzeResults: o["analyzeResults"].map(
      (e: RestTextAnalyzeSeverityResult) => MISSING_SERIALIZER(e),
    ),
    blocklistsMatchResults:
      o["blocklistsMatchResults"] === undefined
        ? o["blocklistsMatchResults"]
        : o["blocklistsMatchResults"].map((e: RestTextBlocklistMatchResult) =>
            MISSING_SERIALIZER(e),
          ),
  };
}

export function deserializeImageAnalyzeSeverityResult(
  o: RestImageAnalyzeSeverityResult,
): ImageAnalyzeSeverityResult {
  return {
    severity: o["severity"],
    category: o["category"],
  };
}

export function deserializeAnalyzeImageResult(
  o: RestAnalyzeImageResult,
): AnalyzeImageResult {
  return {
    analyzeResults: o["analyzeResults"].map(
      (e: RestImageAnalyzeSeverityResult) => MISSING_SERIALIZER(e),
    ),
  };
}

export function deserializeTextBlockItem(o: RestTextBlockItem): TextBlockItem {
  return {
    text: o["text"],
    description: o["description"],
    blockItemId: o["blockItemId"],
  };
}

export function deserializeAddOrUpdateBlockItemsResult(
  o: RestAddOrUpdateBlockItemsResult,
): AddOrUpdateBlockItemsResult {
  return {
    value:
      o["value"] === undefined
        ? o["value"]
        : o["value"].map((e: RestTextBlockItem) => MISSING_SERIALIZER(e)),
  };
}

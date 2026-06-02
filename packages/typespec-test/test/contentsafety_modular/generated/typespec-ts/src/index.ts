// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { ContentSafetyClient } from "./contentSafetyClient.js";
export type {
  AnalyzeTextOptions,
  AnalyzeTextResult,
  TextBlocklistMatch,
  TextCategoriesAnalysis,
  ShieldPromptOptions,
  ShieldPromptResult,
  UserPromptInjectionAnalysisResult,
  DocumentInjectionAnalysisResult,
  DetectTextProtectedMaterialOptions,
  DetectTextProtectedMaterialResult,
  TextProtectedMaterialAnalysisResult,
  AnalyzeImageOptions,
  ImageData,
  AnalyzeImageResult,
  ImageCategoriesAnalysis,
  TextBlocklist,
  AddOrUpdateTextBlocklistItemsOptions,
  TextBlocklistItem,
  AddOrUpdateTextBlocklistItemsResult,
  RemoveTextBlocklistItemsOptions,
  TextCategory,
  AnalyzeTextOutputType,
  ImageCategory,
  AnalyzeImageOutputType,
} from "./models/index.js";
export { KnownVersions } from "./models/index.js";
export type {
  ContentSafetyClientOptionalParams,
  ListTextBlocklistItemsOptionalParams,
  GetTextBlocklistItemOptionalParams,
  RemoveBlocklistItemsOptionalParams,
  AddOrUpdateBlocklistItemsOptionalParams,
  ListTextBlocklistsOptionalParams,
  DeleteTextBlocklistOptionalParams,
  CreateOrUpdateTextBlocklistOptionalParams,
  GetTextBlocklistOptionalParams,
  AnalyzeImageOptionalParams,
  DetectTextProtectedMaterialOptionalParams,
  ShieldPromptOptionalParams,
  AnalyzeTextOptionalParams,
} from "./api/index.js";
export type { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
export { RestError, isRestError } from "@azure/core-rest-pipeline";

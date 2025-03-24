// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { ContentSafetyClient } from "./contentSafetyClient.js";
export {
  TextBlocklist,
  AddOrUpdateTextBlocklistItemsOptions,
  TextBlocklistItem,
  AddOrUpdateTextBlocklistItemsResult,
  RemoveTextBlocklistItemsOptions,
  AnalyzeImageOptions,
  ImageData,
  ImageCategory,
  AnalyzeImageOutputType,
  AnalyzeImageResult,
  ImageCategoriesAnalysis,
  AnalyzeTextOptions,
  TextCategory,
  AnalyzeTextOutputType,
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
  KnownVersions,
} from "./models/contentSafety/index.js";
export {
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
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };

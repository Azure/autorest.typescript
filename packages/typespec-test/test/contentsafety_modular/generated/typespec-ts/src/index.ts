// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export {
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
  AnalyzeImageOptions,
  ImageData,
  ImageCategory,
  AnalyzeImageOutputType,
  AnalyzeImageResult,
  ImageCategoriesAnalysis,
  TextBlocklist,
  AddOrUpdateTextBlocklistItemsOptions,
  TextBlocklistItem,
  AddOrUpdateTextBlocklistItemsResult,
  RemoveTextBlocklistItemsOptions,
  KnownVersions,
} from "./models/index.js";
export { ContentSafetyClient } from "./contentSafetyClient.js";
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

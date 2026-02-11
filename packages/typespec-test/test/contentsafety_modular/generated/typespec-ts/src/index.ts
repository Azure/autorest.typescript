// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export { ContentSafetyClient } from "./contentSafetyClient.js";
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
export { ContentSafetyClientOptionalParams } from "./api/index.js";
export { TextOperations } from "./textOperations/textOperations.js";
export {
  DetectTextProtectedMaterialOptionalParams,
  ShieldPromptOptionalParams,
  AnalyzeTextOptionalParams,
  TextOperationsOptionalParams,
} from "./textOperations/api/index.js";
export { ImageOperations } from "./imageOperations/imageOperations.js";
export {
  ImageOperationsOptionalParams,
  AnalyzeImageOptionalParams,
} from "./imageOperations/api/index.js";
export { TextBlocklists } from "./textBlocklists/textBlocklists.js";
export {
  ListTextBlocklistItemsOptionalParams,
  GetTextBlocklistItemOptionalParams,
  RemoveBlocklistItemsOptionalParams,
  AddOrUpdateBlocklistItemsOptionalParams,
  ListTextBlocklistsOptionalParams,
  DeleteTextBlocklistOptionalParams,
  CreateOrUpdateTextBlocklistOptionalParams,
  GetTextBlocklistOptionalParams,
  TextBlocklistsOptionalParams,
} from "./textBlocklists/api/index.js";

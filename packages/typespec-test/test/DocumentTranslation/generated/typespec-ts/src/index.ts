// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FileContents } from "./static-helpers/multipartHelpers.js";
import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { DocumentTranslationClient } from "./documentTranslation/documentTranslationClient.js";
export { restorePoller, RestorePollerOptions } from "./documentTranslation/restorePollerHelpers.js";
export {
  StartTranslationDetails,
  BatchRequest,
  SourceInput,
  DocumentFilter,
  TranslationStorageSource,
  TargetInput,
  Glossary,
  StorageInputType,
  BatchOptions,
  TranslationStatus,
  Status,
  TranslationError,
  TranslationErrorCode,
  InnerTranslationError,
  TranslationStatusSummary,
  DocumentStatus,
  SupportedFileFormats,
  FileFormat,
  FileFormatType,
  DocumentTranslateContent,
  KnownVersions,
} from "./models/index.js";
export {
  DocumentTranslationClientOptionalParams,
  GetSupportedFormatsOptionalParams,
  GetDocumentsStatusOptionalParams,
  CancelTranslationOptionalParams,
  GetTranslationStatusOptionalParams,
  GetDocumentStatusOptionalParams,
  GetTranslationsStatusOptionalParams,
  StartTranslationOptionalParams,
} from "./documentTranslation/api/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
export { FileContents };
export { SingleDocumentTranslationClient } from "./singleDocumentTranslation/singleDocumentTranslationClient.js";
export {
  TranslateOptionalParams,
  SingleDocumentTranslationClientOptionalParams,
} from "./singleDocumentTranslation/api/index.js";

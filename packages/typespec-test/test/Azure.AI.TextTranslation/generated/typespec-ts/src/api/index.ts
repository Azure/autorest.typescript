// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  lookupDictionaryExamples,
  lookupDictionaryEntries,
  findSentenceBoundaries,
  transliterate,
  translate,
  getSupportedLanguages,
} from "./operations.js";
export {
  LookupDictionaryExamplesOptionalParams,
  LookupDictionaryEntriesOptionalParams,
  FindSentenceBoundariesOptionalParams,
  TransliterateOptionalParams,
  TranslateOptionalParams,
  GetSupportedLanguagesOptionalParams,
} from "./options.js";
export {
  createTextTranslation,
  TextTranslationContext,
  TextTranslationClientOptionalParams,
} from "./textTranslationContext.js";

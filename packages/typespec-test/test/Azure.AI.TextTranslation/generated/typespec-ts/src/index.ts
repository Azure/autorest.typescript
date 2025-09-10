// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export { TextTranslationClient } from "./textTranslationClient.js";
export {
  GetSupportedLanguagesResult,
  TranslationLanguage,
  LanguageDirectionality,
  TransliterationLanguage,
  TransliterableScript,
  LanguageScript,
  SourceDictionaryLanguage,
  TargetDictionaryLanguage,
  ErrorResponse,
  ErrorDetails,
  InputTextItem,
  TranslatedTextItem,
  DetectedLanguage,
  TranslationText,
  TransliteratedText,
  TranslatedTextAlignment,
  SentenceBoundaries,
  SourceText,
  BreakSentenceItem,
  DictionaryLookupItem,
  DictionaryTranslation,
  BackTranslation,
  DictionaryExampleTextItem,
  DictionaryExampleItem,
  DictionaryExample,
  TextType,
  ProfanityAction,
  ProfanityMarker,
  KnownAPIVersion,
} from "./models/index.js";
export {
  LookupDictionaryExamplesOptionalParams,
  LookupDictionaryEntriesOptionalParams,
  FindSentenceBoundariesOptionalParams,
  TransliterateOptionalParams,
  TranslateOptionalParams,
  GetSupportedLanguagesOptionalParams,
  TextTranslationClientOptionalParams,
} from "./api/index.js";

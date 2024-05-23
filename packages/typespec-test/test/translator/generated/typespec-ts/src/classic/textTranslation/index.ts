// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TranslatorContext } from "../../api/translatorContext.js";
import {
  GetLanguagesResult,
  InputTextElement,
  TranslatedTextElement,
  TransliteratedText,
  DetectedLanguageWithAlternatives,
  BreakSentenceElement,
  DictionaryLookupElement,
  DictionaryExampleTextElement,
  DictionaryExampleElement,
} from "../../models/models.js";
import {
  getLanguages,
  translate,
  transliterate,
  detect,
  breakSentence,
  dictionaryLookup,
  dictionaryExamples,
} from "../../api/textTranslation/index.js";
import {
  TextTranslationGetLanguagesOptionalParams,
  TextTranslationTranslateOptionalParams,
  TextTranslationTransliterateOptionalParams,
  TextTranslationDetectOptionalParams,
  TextTranslationBreakSentenceOptionalParams,
  TextTranslationDictionaryLookupOptionalParams,
  TextTranslationDictionaryExamplesOptionalParams,
} from "../../models/options.js";

export interface TextTranslationOperations {
  getLanguages: (
    options?: TextTranslationGetLanguagesOptionalParams,
  ) => Promise<GetLanguagesResult>;
  translate: (
    to: string[],
    content: InputTextElement[],
    options?: TextTranslationTranslateOptionalParams,
  ) => Promise<TranslatedTextElement[]>;
  transliterate: (
    language: string,
    fromScript: string,
    toScript: string,
    content: InputTextElement[],
    options?: TextTranslationTransliterateOptionalParams,
  ) => Promise<TransliteratedText[]>;
  detect: (
    content: InputTextElement[],
    options?: TextTranslationDetectOptionalParams,
  ) => Promise<DetectedLanguageWithAlternatives[]>;
  breakSentence: (
    content: InputTextElement[],
    options?: TextTranslationBreakSentenceOptionalParams,
  ) => Promise<BreakSentenceElement[]>;
  dictionaryLookup: (
    fromParam: string,
    to: string,
    content: InputTextElement[],
    options?: TextTranslationDictionaryLookupOptionalParams,
  ) => Promise<DictionaryLookupElement[]>;
  dictionaryExamples: (
    fromParam: string,
    to: string,
    content: DictionaryExampleTextElement[],
    options?: TextTranslationDictionaryExamplesOptionalParams,
  ) => Promise<DictionaryExampleElement[]>;
}

export function getTextTranslation(context: TranslatorContext) {
  return {
    getLanguages: (options?: TextTranslationGetLanguagesOptionalParams) =>
      getLanguages(context, options),
    translate: (
      to: string[],
      content: InputTextElement[],
      options?: TextTranslationTranslateOptionalParams,
    ) => translate(context, to, content, options),
    transliterate: (
      language: string,
      fromScript: string,
      toScript: string,
      content: InputTextElement[],
      options?: TextTranslationTransliterateOptionalParams,
    ) =>
      transliterate(context, language, fromScript, toScript, content, options),
    detect: (
      content: InputTextElement[],
      options?: TextTranslationDetectOptionalParams,
    ) => detect(context, content, options),
    breakSentence: (
      content: InputTextElement[],
      options?: TextTranslationBreakSentenceOptionalParams,
    ) => breakSentence(context, content, options),
    dictionaryLookup: (
      fromParam: string,
      to: string,
      content: InputTextElement[],
      options?: TextTranslationDictionaryLookupOptionalParams,
    ) => dictionaryLookup(context, fromParam, to, content, options),
    dictionaryExamples: (
      fromParam: string,
      to: string,
      content: DictionaryExampleTextElement[],
      options?: TextTranslationDictionaryExamplesOptionalParams,
    ) => dictionaryExamples(context, fromParam, to, content, options),
  };
}

export function getTextTranslationOperations(
  context: TranslatorContext,
): TextTranslationOperations {
  return {
    ...getTextTranslation(context),
  };
}

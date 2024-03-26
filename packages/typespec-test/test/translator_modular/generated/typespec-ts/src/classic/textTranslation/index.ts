// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TranslatorContext } from "../../api/TranslatorContext.js";
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
  TextTranslationGetLanguagesOptions,
  TextTranslationTranslateOptions,
  TextTranslationTransliterateOptions,
  TextTranslationDetectOptions,
  TextTranslationBreakSentenceOptions,
  TextTranslationDictionaryLookupOptions,
  TextTranslationDictionaryExamplesOptions,
} from "../../models/options.js";

export interface TextTranslationOperations {
  getLanguages: (
    options?: TextTranslationGetLanguagesOptions,
  ) => Promise<GetLanguagesResult>;
  translate: (
    to: string[],
    content: InputTextElement[],
    options?: TextTranslationTranslateOptions,
  ) => Promise<TranslatedTextElement[]>;
  transliterate: (
    language: string,
    fromScript: string,
    toScript: string,
    content: InputTextElement[],
    options?: TextTranslationTransliterateOptions,
  ) => Promise<TransliteratedText[]>;
  detect: (
    content: InputTextElement[],
    options?: TextTranslationDetectOptions,
  ) => Promise<DetectedLanguageWithAlternatives[]>;
  breakSentence: (
    content: InputTextElement[],
    options?: TextTranslationBreakSentenceOptions,
  ) => Promise<BreakSentenceElement[]>;
  dictionaryLookup: (
    from: string,
    to: string,
    content: InputTextElement[],
    options?: TextTranslationDictionaryLookupOptions,
  ) => Promise<DictionaryLookupElement[]>;
  dictionaryExamples: (
    from: string,
    to: string,
    content: DictionaryExampleTextElement[],
    options?: TextTranslationDictionaryExamplesOptions,
  ) => Promise<DictionaryExampleElement[]>;
}

export function getTextTranslation(context: TranslatorContext) {
  return {
    getLanguages: (options?: TextTranslationGetLanguagesOptions) =>
      getLanguages(context, options),
    translate: (
      to: string[],
      content: InputTextElement[],
      options?: TextTranslationTranslateOptions,
    ) => translate(context, to, content, options),
    transliterate: (
      language: string,
      fromScript: string,
      toScript: string,
      content: InputTextElement[],
      options?: TextTranslationTransliterateOptions,
    ) =>
      transliterate(context, language, fromScript, toScript, content, options),
    detect: (
      content: InputTextElement[],
      options?: TextTranslationDetectOptions,
    ) => detect(context, content, options),
    breakSentence: (
      content: InputTextElement[],
      options?: TextTranslationBreakSentenceOptions,
    ) => breakSentence(context, content, options),
    dictionaryLookup: (
      from: string,
      to: string,
      content: InputTextElement[],
      options?: TextTranslationDictionaryLookupOptions,
    ) => dictionaryLookup(context, from, to, content, options),
    dictionaryExamples: (
      from: string,
      to: string,
      content: DictionaryExampleTextElement[],
      options?: TextTranslationDictionaryExamplesOptions,
    ) => dictionaryExamples(context, from, to, content, options),
  };
}

export function getTextTranslationOperations(
  context: TranslatorContext,
): TextTranslationOperations {
  return {
    ...getTextTranslation(context),
  };
}

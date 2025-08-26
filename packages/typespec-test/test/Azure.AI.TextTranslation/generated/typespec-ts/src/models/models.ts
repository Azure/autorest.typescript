// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Response for the languages API. */
export interface GetSupportedLanguagesResult {
  /** Languages that support translate API. */
  translation?: Record<string, TranslationLanguage>;
  /** Languages that support transliteration API. */
  transliteration?: Record<string, TransliterationLanguage>;
  /** Languages that support dictionary API. */
  dictionary?: Record<string, SourceDictionaryLanguage>;
}

export function getSupportedLanguagesResultDeserializer(
  item: any,
): GetSupportedLanguagesResult {
  return {
    translation: !item["translation"]
      ? item["translation"]
      : translationLanguageRecordDeserializer(item["translation"]),
    transliteration: !item["transliteration"]
      ? item["transliteration"]
      : transliterationLanguageRecordDeserializer(item["transliteration"]),
    dictionary: !item["dictionary"]
      ? item["dictionary"]
      : sourceDictionaryLanguageRecordDeserializer(item["dictionary"]),
  };
}

export function translationLanguageRecordDeserializer(
  item: Record<string, any>,
): Record<string, TranslationLanguage> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : translationLanguageDeserializer(item[key]);
  });
  return result;
}

/**
 * The value of the translation property is a dictionary of (key, value) pairs. Each key is a BCP 47 language tag.
 * A key identifies a language for which text can be translated to or translated from.
 */
export interface TranslationLanguage {
  /** Display name of the language in the locale requested via Accept-Language header. */
  name: string;
  /** Display name of the language in the locale native for this language. */
  nativeName: string;
  /** Directionality, which is rtl for right-to-left languages or ltr for left-to-right languages. */
  dir: LanguageDirectionality;
}

export function translationLanguageDeserializer(
  item: any,
): TranslationLanguage {
  return {
    name: item["name"],
    nativeName: item["nativeName"],
    dir: item["dir"],
  };
}

/** Language Directionality */
export type LanguageDirectionality = "ltr" | "rtl";

export function transliterationLanguageRecordDeserializer(
  item: Record<string, any>,
): Record<string, TransliterationLanguage> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : transliterationLanguageDeserializer(item[key]);
  });
  return result;
}

/**
 * The value of the transliteration property is a dictionary of (key, value) pairs.
 * Each key is a BCP 47 language tag. A key identifies a language for which text can be converted from one script
 * to another script.
 */
export interface TransliterationLanguage {
  /** Display name of the language in the locale requested via Accept-Language header. */
  name: string;
  /** Display name of the language in the locale native for this language. */
  nativeName: string;
  /** List of scripts to convert from. */
  scripts: TransliterableScript[];
}

export function transliterationLanguageDeserializer(
  item: any,
): TransliterationLanguage {
  return {
    name: item["name"],
    nativeName: item["nativeName"],
    scripts: transliterableScriptArrayDeserializer(item["scripts"]),
  };
}

export function transliterableScriptArrayDeserializer(
  result: Array<TransliterableScript>,
): any[] {
  return result.map((item) => {
    return transliterableScriptDeserializer(item);
  });
}

/** Script definition with list of script into which given script can be translitered. */
export interface TransliterableScript extends LanguageScript {
  /** List of scripts available to convert text to. */
  toScripts: LanguageScript[];
}

export function transliterableScriptDeserializer(
  item: any,
): TransliterableScript {
  return {
    code: item["code"],
    name: item["name"],
    nativeName: item["nativeName"],
    dir: item["dir"],
    toScripts: languageScriptArrayDeserializer(item["toScripts"]),
  };
}

export function languageScriptArrayDeserializer(
  result: Array<LanguageScript>,
): any[] {
  return result.map((item) => {
    return languageScriptDeserializer(item);
  });
}

/** Common properties of language script */
export interface LanguageScript {
  /** Code identifying the script. */
  code: string;
  /** Display name of the script in the locale requested via Accept-Language header. */
  name: string;
  /** Display name of the language in the locale native for the language. */
  nativeName: string;
  /** Directionality, which is rtl for right-to-left languages or ltr for left-to-right languages. */
  dir: LanguageDirectionality;
}

export function languageScriptDeserializer(item: any): LanguageScript {
  return {
    code: item["code"],
    name: item["name"],
    nativeName: item["nativeName"],
    dir: item["dir"],
  };
}

export function sourceDictionaryLanguageRecordDeserializer(
  item: Record<string, any>,
): Record<string, SourceDictionaryLanguage> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : sourceDictionaryLanguageDeserializer(item[key]);
  });
  return result;
}

/** Properties ot the source dictionary language */
export interface SourceDictionaryLanguage {
  /** Display name of the language in the locale requested via Accept-Language header. */
  name: string;
  /** Display name of the language in the locale native for this language. */
  nativeName: string;
  /** Directionality, which is rtl for right-to-left languages or ltr for left-to-right languages. */
  dir: LanguageDirectionality;
  /** List of languages with alterative translations and examples for the query expressed in the source language. */
  translations: TargetDictionaryLanguage[];
}

export function sourceDictionaryLanguageDeserializer(
  item: any,
): SourceDictionaryLanguage {
  return {
    name: item["name"],
    nativeName: item["nativeName"],
    dir: item["dir"],
    translations: targetDictionaryLanguageArrayDeserializer(
      item["translations"],
    ),
  };
}

export function targetDictionaryLanguageArrayDeserializer(
  result: Array<TargetDictionaryLanguage>,
): any[] {
  return result.map((item) => {
    return targetDictionaryLanguageDeserializer(item);
  });
}

/** Properties of the target dictionary language */
export interface TargetDictionaryLanguage {
  /** Display name of the language in the locale requested via Accept-Language header. */
  name: string;
  /** Display name of the language in the locale native for this language. */
  nativeName: string;
  /** Directionality, which is rtl for right-to-left languages or ltr for left-to-right languages. */
  dir: LanguageDirectionality;
  /** Language code identifying the target language. */
  code: string;
}

export function targetDictionaryLanguageDeserializer(
  item: any,
): TargetDictionaryLanguage {
  return {
    name: item["name"],
    nativeName: item["nativeName"],
    dir: item["dir"],
    code: item["code"],
  };
}

/** Representation of the Error Response from Translator Service. */
export interface ErrorResponse {
  /** Error details. */
  error: ErrorDetails;
}

export function errorResponseDeserializer(item: any): ErrorResponse {
  return {
    error: errorDetailsDeserializer(item["error"]),
  };
}

/** Error details as returned by Translator Service. */
export interface ErrorDetails {
  /** Number identifier of the error. */
  code: number;
  /** Human readable error description. */
  message: string;
}

export function errorDetailsDeserializer(item: any): ErrorDetails {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/** Element containing the text for translation. */
export interface InputTextItem {
  /** Text to translate. */
  text: string;
}

export function inputTextItemSerializer(item: InputTextItem): any {
  return { text: item["text"] };
}

/** Element containing the translated text */
export interface TranslatedTextItem {
  /** The detectedLanguage property is only present in the result object when language auto-detection is requested. */
  detectedLanguage?: DetectedLanguage;
  /**
   * An array of translation results. The size of the array matches the number of target
   * languages specified through the to query parameter.
   */
  translations: TranslationText[];
  /**
   * Input text in the default script of the source language. sourceText property is present only when
   * the input is expressed in a script that's not the usual script for the language. For example,
   * if the input were Arabic written in Latin script, then sourceText.text would be the same Arabic text
   * converted into Arab script.
   */
  sourceText?: SourceText;
}

export function translatedTextItemDeserializer(item: any): TranslatedTextItem {
  return {
    detectedLanguage: !item["detectedLanguage"]
      ? item["detectedLanguage"]
      : detectedLanguageDeserializer(item["detectedLanguage"]),
    translations: translationTextArrayDeserializer(item["translations"]),
    sourceText: !item["sourceText"]
      ? item["sourceText"]
      : sourceTextDeserializer(item["sourceText"]),
  };
}

/** An object describing the detected language. */
export interface DetectedLanguage {
  /** A string representing the code of the detected language. */
  language: string;
  /**
   * A float value indicating the confidence in the result.
   * The score is between zero and one and a low score indicates a low confidence.
   */
  score: number;
}

export function detectedLanguageDeserializer(item: any): DetectedLanguage {
  return {
    language: item["language"],
    score: item["score"],
  };
}

export function translationTextArrayDeserializer(
  result: Array<TranslationText>,
): any[] {
  return result.map((item) => {
    return translationTextDeserializer(item);
  });
}

/** Translation result */
export interface TranslationText {
  /** A string representing the language code of the target language. */
  to: string;
  /** A string giving the translated text. */
  text: string;
  /** An object giving the translated text in the script specified by the toScript parameter. */
  transliteration?: TransliteratedText;
  /** Alignment information. */
  alignment?: TranslatedTextAlignment;
  /** Sentence boundaries in the input and output texts. */
  sentLen?: SentenceBoundaries;
}

export function translationTextDeserializer(item: any): TranslationText {
  return {
    to: item["to"],
    text: item["text"],
    transliteration: !item["transliteration"]
      ? item["transliteration"]
      : transliteratedTextDeserializer(item["transliteration"]),
    alignment: !item["alignment"]
      ? item["alignment"]
      : translatedTextAlignmentDeserializer(item["alignment"]),
    sentLen: !item["sentLen"]
      ? item["sentLen"]
      : sentenceBoundariesDeserializer(item["sentLen"]),
  };
}

/** Transliterated text element. */
export interface TransliteratedText {
  /** A string which is the result of converting the input string to the output script. */
  text: string;
  /** A string specifying the script used in the output. */
  script: string;
}

export function transliteratedTextDeserializer(item: any): TransliteratedText {
  return {
    text: item["text"],
    script: item["script"],
  };
}

/** Alignment information object. */
export interface TranslatedTextAlignment {
  /**
   * Maps input text to translated text. The alignment information is only provided when the request
   * parameter includeAlignment is true. Alignment is returned as a string value of the following
   * format: [[SourceTextStartIndex]:[SourceTextEndIndex]–[TgtTextStartIndex]:[TgtTextEndIndex]].
   * The colon separates start and end index, the dash separates the languages, and space separates the words.
   * One word may align with zero, one, or multiple words in the other language, and the aligned words may
   * be non-contiguous. When no alignment information is available, the alignment element will be empty.
   */
  proj: string;
}

export function translatedTextAlignmentDeserializer(
  item: any,
): TranslatedTextAlignment {
  return {
    proj: item["proj"],
  };
}

/** An object returning sentence boundaries in the input and output texts. */
export interface SentenceBoundaries {
  /**
   * An integer array representing the lengths of the sentences in the input text.
   * The length of the array is the number of sentences, and the values are the length of each sentence.
   */
  srcSentLen: number[];
  /**
   * An integer array representing the lengths of the sentences in the translated text.
   * The length of the array is the number of sentences, and the values are the length of each sentence.
   */
  transSentLen: number[];
}

export function sentenceBoundariesDeserializer(item: any): SentenceBoundaries {
  return {
    srcSentLen: item["srcSentLen"].map((p: any) => {
      return p;
    }),
    transSentLen: item["transSentLen"].map((p: any) => {
      return p;
    }),
  };
}

/** Input text in the default script of the source language. */
export interface SourceText {
  /** Input text in the default script of the source language. */
  text: string;
}

export function sourceTextDeserializer(item: any): SourceText {
  return {
    text: item["text"],
  };
}

/** Item containing break sentence result. */
export interface BreakSentenceItem {
  /** The detectedLanguage property is only present in the result object when language auto-detection is requested. */
  detectedLanguage?: DetectedLanguage;
  /**
   * An integer array representing the lengths of the sentences in the input text.
   * The length of the array is the number of sentences, and the values are the length of each sentence.
   */
  sentLen: number[];
}

export function breakSentenceItemDeserializer(item: any): BreakSentenceItem {
  return {
    detectedLanguage: !item["detectedLanguage"]
      ? item["detectedLanguage"]
      : detectedLanguageDeserializer(item["detectedLanguage"]),
    sentLen: item["sentLen"].map((p: any) => {
      return p;
    }),
  };
}

/** Dictionary Lookup Element */
export interface DictionaryLookupItem {
  /**
   * A string giving the normalized form of the source term.
   * For example, if the request is "JOHN", the normalized form will be "john".
   * The content of this field becomes the input to lookup examples.
   */
  normalizedSource: string;
  /**
   * A string giving the source term in a form best suited for end-user display.
   * For example, if the input is "JOHN", the display form will reflect the usual
   * spelling of the name: "John".
   */
  displaySource: string;
  /** A list of translations for the source term. */
  translations: DictionaryTranslation[];
}

export function dictionaryLookupItemDeserializer(
  item: any,
): DictionaryLookupItem {
  return {
    normalizedSource: item["normalizedSource"],
    displaySource: item["displaySource"],
    translations: dictionaryTranslationArrayDeserializer(item["translations"]),
  };
}

export function dictionaryTranslationArrayDeserializer(
  result: Array<DictionaryTranslation>,
): any[] {
  return result.map((item) => {
    return dictionaryTranslationDeserializer(item);
  });
}

/** Translation source term. */
export interface DictionaryTranslation {
  /**
   * A string giving the normalized form of this term in the target language.
   * This value should be used as input to lookup examples.
   */
  normalizedTarget: string;
  /**
   * A string giving the term in the target language and in a form best suited
   * for end-user display. Generally, this will only differ from the normalizedTarget
   * in terms of capitalization. For example, a proper noun like "Juan" will have
   * normalizedTarget = "juan" and displayTarget = "Juan".
   */
  displayTarget: string;
  /** A string associating this term with a part-of-speech tag. */
  posTag: string;
  /**
   * A value between 0.0 and 1.0 which represents the "confidence"
   * (or perhaps more accurately, "probability in the training data") of that translation pair.
   * The sum of confidence scores for one source word may or may not sum to 1.0.
   */
  confidence: number;
  /**
   * A string giving the word to display as a prefix of the translation. Currently,
   * this is the gendered determiner of nouns, in languages that have gendered determiners.
   * For example, the prefix of the Spanish word "mosca" is "la", since "mosca" is a feminine noun in Spanish.
   * This is only dependent on the translation, and not on the source.
   * If there is no prefix, it will be the empty string.
   */
  prefixWord: string;
  /**
   * A list of "back translations" of the target. For example, source words that the target can translate to.
   * The list is guaranteed to contain the source word that was requested (e.g., if the source word being
   * looked up is "fly", then it is guaranteed that "fly" will be in the backTranslations list).
   * However, it is not guaranteed to be in the first position, and often will not be.
   */
  backTranslations: BackTranslation[];
}

export function dictionaryTranslationDeserializer(
  item: any,
): DictionaryTranslation {
  return {
    normalizedTarget: item["normalizedTarget"],
    displayTarget: item["displayTarget"],
    posTag: item["posTag"],
    confidence: item["confidence"],
    prefixWord: item["prefixWord"],
    backTranslations: backTranslationArrayDeserializer(
      item["backTranslations"],
    ),
  };
}

export function backTranslationArrayDeserializer(
  result: Array<BackTranslation>,
): any[] {
  return result.map((item) => {
    return backTranslationDeserializer(item);
  });
}

/** Back Translation */
export interface BackTranslation {
  /**
   * A string giving the normalized form of the source term that is a back-translation of the target.
   * This value should be used as input to lookup examples.
   */
  normalizedText: string;
  /**
   * A string giving the source term that is a back-translation of the target in a form best
   * suited for end-user display.
   */
  displayText: string;
  /**
   * An integer representing the number of examples that are available for this translation pair.
   * Actual examples must be retrieved with a separate call to lookup examples. The number is mostly
   * intended to facilitate display in a UX. For example, a user interface may add a hyperlink
   * to the back-translation if the number of examples is greater than zero and show the back-translation
   * as plain text if there are no examples. Note that the actual number of examples returned
   * by a call to lookup examples may be less than numExamples, because additional filtering may be
   * applied on the fly to remove "bad" examples.
   */
  numExamples: number;
  /**
   * An integer representing the frequency of this translation pair in the data. The main purpose of this
   * field is to provide a user interface with a means to sort back-translations so the most frequent terms are first.
   */
  frequencyCount: number;
}

export function backTranslationDeserializer(item: any): BackTranslation {
  return {
    normalizedText: item["normalizedText"],
    displayText: item["displayText"],
    numExamples: item["numExamples"],
    frequencyCount: item["frequencyCount"],
  };
}

/** Element containing the text with translation. */
export interface DictionaryExampleTextItem extends InputTextItem {
  /**
   * A string specifying the translated text previously returned by the Dictionary lookup operation.
   * This should be the value from the normalizedTarget field in the translations list of the Dictionary
   * lookup response. The service will return examples for the specific source-target word-pair.
   */
  translation: string;
}

export function dictionaryExampleTextItemSerializer(
  item: DictionaryExampleTextItem,
): any {
  return { text: item["text"], translation: item["translation"] };
}

/** Dictionary Example element */
export interface DictionaryExampleItem {
  /**
   * A string giving the normalized form of the source term. Generally, this should be identical
   * to the value of the Text field at the matching list index in the body of the request.
   */
  normalizedSource: string;
  /**
   * A string giving the normalized form of the target term. Generally, this should be identical
   * to the value of the Translation field at the matching list index in the body of the request.
   */
  normalizedTarget: string;
  /** A list of examples for the (source term, target term) pair. */
  examples: DictionaryExample[];
}

export function dictionaryExampleItemDeserializer(
  item: any,
): DictionaryExampleItem {
  return {
    normalizedSource: item["normalizedSource"],
    normalizedTarget: item["normalizedTarget"],
    examples: dictionaryExampleArrayDeserializer(item["examples"]),
  };
}

export function dictionaryExampleArrayDeserializer(
  result: Array<DictionaryExample>,
): any[] {
  return result.map((item) => {
    return dictionaryExampleDeserializer(item);
  });
}

/** Dictionary Example */
export interface DictionaryExample {
  /**
   * The string to concatenate before the value of sourceTerm to form a complete example.
   * Do not add a space character, since it is already there when it should be.
   * This value may be an empty string.
   */
  sourcePrefix: string;
  /**
   * A string equal to the actual term looked up. The string is added with sourcePrefix
   * and sourceSuffix to form the complete example. Its value is separated so it can be
   * marked in a user interface, e.g., by bolding it.
   */
  sourceTerm: string;
  /**
   * The string to concatenate after the value of sourceTerm to form a complete example.
   * Do not add a space character, since it is already there when it should be.
   * This value may be an empty string.
   */
  sourceSuffix: string;
  /** A string similar to sourcePrefix but for the target. */
  targetPrefix: string;
  /** A string similar to sourceTerm but for the target. */
  targetTerm: string;
  /** A string similar to sourceSuffix but for the target. */
  targetSuffix: string;
}

export function dictionaryExampleDeserializer(item: any): DictionaryExample {
  return {
    sourcePrefix: item["sourcePrefix"],
    sourceTerm: item["sourceTerm"],
    sourceSuffix: item["sourceSuffix"],
    targetPrefix: item["targetPrefix"],
    targetTerm: item["targetTerm"],
    targetSuffix: item["targetSuffix"],
  };
}

/** Translation text type */
export type TextType = "Plain" | "Html";
/** Translator profanity actions */
export type ProfanityAction = "NoAction" | "Marked" | "Deleted";
/** Translator profanity markers */
export type ProfanityMarker = "Asterisk" | "Tag";

/** Text Translation supported versions */
export enum KnownAPIVersion {
  /** Version 3.0 */
  V30 = "3.0",
}

export function inputTextItemArraySerializer(
  result: Array<InputTextItem>,
): any[] {
  return result.map((item) => {
    return inputTextItemSerializer(item);
  });
}

export function translatedTextItemArrayDeserializer(
  result: Array<TranslatedTextItem>,
): any[] {
  return result.map((item) => {
    return translatedTextItemDeserializer(item);
  });
}

export function transliteratedTextArrayDeserializer(
  result: Array<TransliteratedText>,
): any[] {
  return result.map((item) => {
    return transliteratedTextDeserializer(item);
  });
}

export function breakSentenceItemArrayDeserializer(
  result: Array<BreakSentenceItem>,
): any[] {
  return result.map((item) => {
    return breakSentenceItemDeserializer(item);
  });
}

export function dictionaryLookupItemArrayDeserializer(
  result: Array<DictionaryLookupItem>,
): any[] {
  return result.map((item) => {
    return dictionaryLookupItemDeserializer(item);
  });
}

export function dictionaryExampleTextItemArraySerializer(
  result: Array<DictionaryExampleTextItem>,
): any[] {
  return result.map((item) => {
    return dictionaryExampleTextItemSerializer(item);
  });
}

export function dictionaryExampleItemArrayDeserializer(
  result: Array<DictionaryExampleItem>,
): any[] {
  return result.map((item) => {
    return dictionaryExampleItemDeserializer(item);
  });
}

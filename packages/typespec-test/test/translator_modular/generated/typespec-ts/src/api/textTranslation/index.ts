// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
  BreakSentence200Response,
  BreakSentenceDefaultResponse,
  buildMultiCollection,
  Detect200Response,
  DetectDefaultResponse,
  DictionaryExamples200Response,
  DictionaryExamplesDefaultResponse,
  DictionaryLookup200Response,
  DictionaryLookupDefaultResponse,
  GetLanguages200Response,
  GetLanguagesDefaultResponse,
  isUnexpected,
  Translate200Response,
  TranslateDefaultResponse,
  TranslatorContext as Client,
  Transliterate200Response,
  TransliterateDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  TextTranslationGetLanguagesOptions,
  TextTranslationTranslateOptions,
  TextTranslationTransliterateOptions,
  TextTranslationDetectOptions,
  TextTranslationBreakSentenceOptions,
  TextTranslationDictionaryLookupOptions,
  TextTranslationDictionaryExamplesOptions,
} from "../../models/options.js";

export function _getLanguagesSend(
  context: Client,
  options: TextTranslationGetLanguagesOptions = { requestOptions: {} },
): StreamableMethod<GetLanguages200Response | GetLanguagesDefaultResponse> {
  return context
    .path("/languages")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientTraceId !== undefined
          ? { "X-ClientTraceId": options?.clientTraceId }
          : {}),
        ...(options?.acceptLanguage !== undefined
          ? { "Accept-Language": options?.acceptLanguage }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "If-None-Match": options?.ifNoneMatch }
          : {}),
      },
      queryParameters: { scope: options?.scope },
    });
}

export async function _getLanguagesDeserialize(
  result: GetLanguages200Response | GetLanguagesDefaultResponse,
): Promise<GetLanguagesResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    translation: result.body["translation"],
    transliteration: result.body["transliteration"],
    dictionary: result.body["dictionary"],
  };
}

/** Gets the set of languages currently supported by other operations of the Translator. */
export async function getLanguages(
  context: Client,
  options: TextTranslationGetLanguagesOptions = { requestOptions: {} },
): Promise<GetLanguagesResult> {
  const result = await _getLanguagesSend(context, options);
  return _getLanguagesDeserialize(result);
}

export function _translateSend(
  context: Client,
  to: string[],
  content: InputTextElement[],
  options: TextTranslationTranslateOptions = { requestOptions: {} },
): StreamableMethod<Translate200Response | TranslateDefaultResponse> {
  return context.path("/translate").post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      ...(options?.clientTraceId !== undefined
        ? { "X-ClientTraceId": options?.clientTraceId }
        : {}),
    },
    queryParameters: {
      to: buildMultiCollection(to, "to"),
      from: options?.from,
      textType: options?.textType,
      category: options?.category,
      profanityAction: options?.profanityAction,
      profanityMarker: options?.profanityMarker,
      includeAlignment: options?.includeAlignment,
      includeSentenceLength: options?.includeSentenceLength,
      suggestedFrom: options?.suggestedFrom,
      fromScript: options?.fromScript,
      toScript: options?.toScript,
      allowFallback: options?.allowFallback,
    },
    body: (content ?? []).map((p) => {
      return {
        text: p["text"],
      };
    }),
  });
}

export async function _translateDeserialize(
  result: Translate200Response | TranslateDefaultResponse,
): Promise<TranslatedTextElement[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p) => ({
        detectedLanguage: !p.detectedLanguage
          ? undefined
          : {
              language: p.detectedLanguage?.["language"],
              score: p.detectedLanguage?.["score"],
            },
        translations: p["translations"].map((p) => ({
          to: p["to"],
          text: p["text"],
          transliteration: {
            script: p.transliteration["script"],
            text: p.transliteration["text"],
          },
          alignment: { proj: p.alignment["proj"] },
          sentLen: {
            srcSentLen: p.sentLen["srcSentLen"],
            transSentLen: p.sentLen["transSentLen"],
          },
        })),
        sourceText: { text: p.sourceText["text"] },
      }));
}

/** Translate Text */
export async function translate(
  context: Client,
  to: string[],
  content: InputTextElement[],
  options: TextTranslationTranslateOptions = { requestOptions: {} },
): Promise<TranslatedTextElement[]> {
  const result = await _translateSend(context, to, content, options);
  return _translateDeserialize(result);
}

export function _transliterateSend(
  context: Client,
  language: string,
  fromScript: string,
  toScript: string,
  content: InputTextElement[],
  options: TextTranslationTransliterateOptions = { requestOptions: {} },
): StreamableMethod<Transliterate200Response | TransliterateDefaultResponse> {
  return context.path("/transliterate").post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      ...(options?.clientTraceId !== undefined
        ? { "X-ClientTraceId": options?.clientTraceId }
        : {}),
    },
    queryParameters: {
      language: language,
      fromScript: fromScript,
      toScript: toScript,
    },
    body: (content ?? []).map((p) => {
      return {
        text: p["text"],
      };
    }),
  });
}

export async function _transliterateDeserialize(
  result: Transliterate200Response | TransliterateDefaultResponse,
): Promise<TransliteratedText[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p) => ({ text: p["text"], script: p["script"] }));
}

/** Transliterate Text */
export async function transliterate(
  context: Client,
  language: string,
  fromScript: string,
  toScript: string,
  content: InputTextElement[],
  options: TextTranslationTransliterateOptions = { requestOptions: {} },
): Promise<TransliteratedText[]> {
  const result = await _transliterateSend(
    context,
    language,
    fromScript,
    toScript,
    content,
    options,
  );
  return _transliterateDeserialize(result);
}

export function _detectSend(
  context: Client,
  content: InputTextElement[],
  options: TextTranslationDetectOptions = { requestOptions: {} },
): StreamableMethod<Detect200Response | DetectDefaultResponse> {
  return context.path("/detect").post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      ...(options?.clientTraceId !== undefined
        ? { "X-ClientTraceId": options?.clientTraceId }
        : {}),
    },
    body: (content ?? []).map((p) => {
      return {
        text: p["text"],
      };
    }),
  });
}

export async function _detectDeserialize(
  result: Detect200Response | DetectDefaultResponse,
): Promise<DetectedLanguageWithAlternatives[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p) => ({
        language: p["language"],
        score: p["score"],
        isTranslationSupported: p["isTranslationSupported"],
        isTransliterationSupported: p["isTransliterationSupported"],
        alternatives: p["alternatives"].map((p) => ({
          language: p["language"],
          score: p["score"],
        })),
      }));
}

/** Detect Languages */
export async function detect(
  context: Client,
  content: InputTextElement[],
  options: TextTranslationDetectOptions = { requestOptions: {} },
): Promise<DetectedLanguageWithAlternatives[]> {
  const result = await _detectSend(context, content, options);
  return _detectDeserialize(result);
}

export function _breakSentenceSend(
  context: Client,
  content: InputTextElement[],
  options: TextTranslationBreakSentenceOptions = { requestOptions: {} },
): StreamableMethod<BreakSentence200Response | BreakSentenceDefaultResponse> {
  return context.path("/breaksentence").post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      ...(options?.clientTraceId !== undefined
        ? { "X-ClientTraceId": options?.clientTraceId }
        : {}),
    },
    queryParameters: { language: options?.language, script: options?.script },
    body: (content ?? []).map((p) => {
      return {
        text: p["text"],
      };
    }),
  });
}

export async function _breakSentenceDeserialize(
  result: BreakSentence200Response | BreakSentenceDefaultResponse,
): Promise<BreakSentenceElement[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p) => ({
        detectedLanguage: !p.detectedLanguage
          ? undefined
          : {
              language: p.detectedLanguage?.["language"],
              score: p.detectedLanguage?.["score"],
            },
        sentLen: {
          srcSentLen: p.sentLen["srcSentLen"],
          transSentLen: p.sentLen["transSentLen"],
        },
      }));
}

/** Break Sentence */
export async function breakSentence(
  context: Client,
  content: InputTextElement[],
  options: TextTranslationBreakSentenceOptions = { requestOptions: {} },
): Promise<BreakSentenceElement[]> {
  const result = await _breakSentenceSend(context, content, options);
  return _breakSentenceDeserialize(result);
}

export function _dictionaryLookupSend(
  context: Client,
  from: string,
  to: string,
  content: InputTextElement[],
  options: TextTranslationDictionaryLookupOptions = { requestOptions: {} },
): StreamableMethod<
  DictionaryLookup200Response | DictionaryLookupDefaultResponse
> {
  return context.path("/dictionary/lookup").post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      ...(options?.clientTraceId !== undefined
        ? { "X-ClientTraceId": options?.clientTraceId }
        : {}),
    },
    queryParameters: { from: from, to: to },
    body: (content ?? []).map((p) => {
      return {
        text: p["text"],
      };
    }),
  });
}

export async function _dictionaryLookupDeserialize(
  result: DictionaryLookup200Response | DictionaryLookupDefaultResponse,
): Promise<DictionaryLookupElement[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p) => ({
        normalizedSource: p["normalizedSource"],
        displaySource: p["displaySource"],
        translations: p["translations"].map((p) => ({
          normalizedTarget: p["normalizedTarget"],
          displayTarget: p["displayTarget"],
          posTag: p["posTag"],
          confidence: p["confidence"],
          prefixWord: p["prefixWord"],
          backTranslations: p["backTranslations"].map((p) => ({
            normalizedText: p["normalizedText"],
            displayText: p["displayText"],
            numExamples: p["numExamples"],
            frequencyCount: p["frequencyCount"],
          })),
        })),
      }));
}

/** Dictionary Lookup */
export async function dictionaryLookup(
  context: Client,
  from: string,
  to: string,
  content: InputTextElement[],
  options: TextTranslationDictionaryLookupOptions = { requestOptions: {} },
): Promise<DictionaryLookupElement[]> {
  const result = await _dictionaryLookupSend(
    context,
    from,
    to,
    content,
    options,
  );
  return _dictionaryLookupDeserialize(result);
}

export function _dictionaryExamplesSend(
  context: Client,
  from: string,
  to: string,
  content: DictionaryExampleTextElement[],
  options: TextTranslationDictionaryExamplesOptions = { requestOptions: {} },
): StreamableMethod<
  DictionaryExamples200Response | DictionaryExamplesDefaultResponse
> {
  return context.path("/dictionary/examples").post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      ...(options?.clientTraceId !== undefined
        ? { "X-ClientTraceId": options?.clientTraceId }
        : {}),
    },
    queryParameters: { from: from, to: to },
    body: (content ?? []).map((p) => {
      return {
        text: p["text"],
        translation: p["translation"],
      };
    }),
  });
}

export async function _dictionaryExamplesDeserialize(
  result: DictionaryExamples200Response | DictionaryExamplesDefaultResponse,
): Promise<DictionaryExampleElement[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p) => ({
        normalizedSource: p["normalizedSource"],
        normalizedTarget: p["normalizedTarget"],
        examples: p["examples"].map((p) => ({
          sourcePrefix: p["sourcePrefix"],
          sourceTerm: p["sourceTerm"],
          sourceSuffix: p["sourceSuffix"],
          targetPrefix: p["targetPrefix"],
          targetTerm: p["targetTerm"],
          targetSuffix: p["targetSuffix"],
        })),
      }));
}

/** Dictionary Examples */
export async function dictionaryExamples(
  context: Client,
  from: string,
  to: string,
  content: DictionaryExampleTextElement[],
  options: TextTranslationDictionaryExamplesOptions = { requestOptions: {} },
): Promise<DictionaryExampleElement[]> {
  const result = await _dictionaryExamplesSend(
    context,
    from,
    to,
    content,
    options,
  );
  return _dictionaryExamplesDeserialize(result);
}

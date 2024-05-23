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
  deserializeGetLanguagesResult,
  serializeTextTypes,
  serializeProfanityActions,
  serializeProfanityMarkers,
  serializeInputTextElement,
  deserializeTranslatedTextElement,
  deserializeTransliteratedText,
  deserializeDetectedLanguageWithAlternatives,
  deserializeBreakSentenceElement,
  deserializeDictionaryLookupElement,
  serializeDictionaryExampleTextElement,
  deserializeDictionaryExampleElement,
} from "../../utils/serializeUtil.js";
import {
  BreakSentence200Response,
  BreakSentenceDefaultResponse,
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
  TextTranslationGetLanguagesOptionalParams,
  TextTranslationTranslateOptionalParams,
  TextTranslationTransliterateOptionalParams,
  TextTranslationDetectOptionalParams,
  TextTranslationBreakSentenceOptionalParams,
  TextTranslationDictionaryLookupOptionalParams,
  TextTranslationDictionaryExamplesOptionalParams,
} from "../../models/options.js";

export function _getLanguagesSend(
  context: Client,
  options: TextTranslationGetLanguagesOptionalParams = { requestOptions: {} },
): StreamableMethod<GetLanguages200Response | GetLanguagesDefaultResponse> {
  return context
    .path("/languages")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: options?.clientTraceId,
      headers: options?.acceptLanguage,
      headers: options?.ifNoneMatch,
      queryParameters: options?.scope,
    });
}

export async function _getLanguagesDeserialize(
  result: GetLanguages200Response | GetLanguagesDefaultResponse,
): Promise<GetLanguagesResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeGetLanguagesResult(result.body);
}

/** Gets the set of languages currently supported by other operations of the Translator. */
export async function getLanguages(
  context: Client,
  options: TextTranslationGetLanguagesOptionalParams = { requestOptions: {} },
): Promise<GetLanguagesResult> {
  const result = await _getLanguagesSend(context, options);
  return _getLanguagesDeserialize(result);
}

export function _translateSend(
  context: Client,
  to: string[],
  content: InputTextElement[],
  options: TextTranslationTranslateOptionalParams = { requestOptions: {} },
): StreamableMethod<Translate200Response | TranslateDefaultResponse> {
  return context
    .path("/translate")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: options?.clientTraceId,
      queryParameters: options?.to,
      queryParameters: options?.fromParam,
      queryParameters: serializeTextTypes(options?.textType),
      queryParameters: options?.category,
      queryParameters: serializeProfanityActions(options?.profanityAction),
      queryParameters: serializeProfanityMarkers(options?.profanityMarker),
      queryParameters: options?.includeAlignment,
      queryParameters: options?.includeSentenceLength,
      queryParameters: options?.suggestedFrom,
      queryParameters: options?.fromScript,
      queryParameters: options?.toScript,
      queryParameters: options?.allowFallback,
      body: content.map((e) => serializeInputTextElement(e)),
    });
}

export async function _translateDeserialize(
  result: Translate200Response | TranslateDefaultResponse,
): Promise<TranslatedTextElement[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body.map((e) => deserializeTranslatedTextElement(e));
}

/** Translate Text */
export async function translate(
  context: Client,
  to: string[],
  content: InputTextElement[],
  options: TextTranslationTranslateOptionalParams = { requestOptions: {} },
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
  options: TextTranslationTransliterateOptionalParams = { requestOptions: {} },
): StreamableMethod<Transliterate200Response | TransliterateDefaultResponse> {
  return context
    .path("/transliterate")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: options?.clientTraceId,
      queryParameters: options?.language,
      queryParameters: options?.fromScript,
      queryParameters: options?.toScript,
      body: content.map((e) => serializeInputTextElement(e)),
    });
}

export async function _transliterateDeserialize(
  result: Transliterate200Response | TransliterateDefaultResponse,
): Promise<TransliteratedText[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body.map((e) => deserializeTransliteratedText(e));
}

/** Transliterate Text */
export async function transliterate(
  context: Client,
  language: string,
  fromScript: string,
  toScript: string,
  content: InputTextElement[],
  options: TextTranslationTransliterateOptionalParams = { requestOptions: {} },
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
  options: TextTranslationDetectOptionalParams = { requestOptions: {} },
): StreamableMethod<Detect200Response | DetectDefaultResponse> {
  return context
    .path("/detect")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: options?.clientTraceId,
      body: content.map((e) => serializeInputTextElement(e)),
    });
}

export async function _detectDeserialize(
  result: Detect200Response | DetectDefaultResponse,
): Promise<DetectedLanguageWithAlternatives[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body.map((e) => deserializeDetectedLanguageWithAlternatives(e));
}

/** Detect Languages */
export async function detect(
  context: Client,
  content: InputTextElement[],
  options: TextTranslationDetectOptionalParams = { requestOptions: {} },
): Promise<DetectedLanguageWithAlternatives[]> {
  const result = await _detectSend(context, content, options);
  return _detectDeserialize(result);
}

export function _breakSentenceSend(
  context: Client,
  content: InputTextElement[],
  options: TextTranslationBreakSentenceOptionalParams = { requestOptions: {} },
): StreamableMethod<BreakSentence200Response | BreakSentenceDefaultResponse> {
  return context
    .path("/breaksentence")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: options?.clientTraceId,
      queryParameters: options?.language,
      queryParameters: options?.script,
      body: content.map((e) => serializeInputTextElement(e)),
    });
}

export async function _breakSentenceDeserialize(
  result: BreakSentence200Response | BreakSentenceDefaultResponse,
): Promise<BreakSentenceElement[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body.map((e) => deserializeBreakSentenceElement(e));
}

/** Break Sentence */
export async function breakSentence(
  context: Client,
  content: InputTextElement[],
  options: TextTranslationBreakSentenceOptionalParams = { requestOptions: {} },
): Promise<BreakSentenceElement[]> {
  const result = await _breakSentenceSend(context, content, options);
  return _breakSentenceDeserialize(result);
}

export function _dictionaryLookupSend(
  context: Client,
  fromParam: string,
  to: string,
  content: InputTextElement[],
  options: TextTranslationDictionaryLookupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  DictionaryLookup200Response | DictionaryLookupDefaultResponse
> {
  return context
    .path("/dictionary/lookup")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: options?.clientTraceId,
      queryParameters: options?.fromParam,
      queryParameters: options?.to,
      body: content.map((e) => serializeInputTextElement(e)),
    });
}

export async function _dictionaryLookupDeserialize(
  result: DictionaryLookup200Response | DictionaryLookupDefaultResponse,
): Promise<DictionaryLookupElement[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body.map((e) => deserializeDictionaryLookupElement(e));
}

/** Dictionary Lookup */
export async function dictionaryLookup(
  context: Client,
  fromParam: string,
  to: string,
  content: InputTextElement[],
  options: TextTranslationDictionaryLookupOptionalParams = {
    requestOptions: {},
  },
): Promise<DictionaryLookupElement[]> {
  const result = await _dictionaryLookupSend(
    context,
    fromParam,
    to,
    content,
    options,
  );
  return _dictionaryLookupDeserialize(result);
}

export function _dictionaryExamplesSend(
  context: Client,
  fromParam: string,
  to: string,
  content: DictionaryExampleTextElement[],
  options: TextTranslationDictionaryExamplesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  DictionaryExamples200Response | DictionaryExamplesDefaultResponse
> {
  return context
    .path("/dictionary/examples")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: options?.clientTraceId,
      queryParameters: options?.fromParam,
      queryParameters: options?.to,
      body: content.map((e) => serializeDictionaryExampleTextElement(e)),
    });
}

export async function _dictionaryExamplesDeserialize(
  result: DictionaryExamples200Response | DictionaryExamplesDefaultResponse,
): Promise<DictionaryExampleElement[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body.map((e) => deserializeDictionaryExampleElement(e));
}

/** Dictionary Examples */
export async function dictionaryExamples(
  context: Client,
  fromParam: string,
  to: string,
  content: DictionaryExampleTextElement[],
  options: TextTranslationDictionaryExamplesOptionalParams = {
    requestOptions: {},
  },
): Promise<DictionaryExampleElement[]> {
  const result = await _dictionaryExamplesSend(
    context,
    fromParam,
    to,
    content,
    options,
  );
  return _dictionaryExamplesDeserialize(result);
}

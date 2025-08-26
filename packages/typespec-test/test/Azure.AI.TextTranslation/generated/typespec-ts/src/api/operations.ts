// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TextTranslationContext as Client } from "./index.js";
import {
  GetSupportedLanguagesResult,
  getSupportedLanguagesResultDeserializer,
  errorResponseDeserializer,
  InputTextItem,
  TranslatedTextItem,
  TransliteratedText,
  BreakSentenceItem,
  DictionaryLookupItem,
  DictionaryExampleTextItem,
  DictionaryExampleItem,
  inputTextItemArraySerializer,
  translatedTextItemArrayDeserializer,
  transliteratedTextArrayDeserializer,
  breakSentenceItemArrayDeserializer,
  dictionaryLookupItemArrayDeserializer,
  dictionaryExampleTextItemArraySerializer,
  dictionaryExampleItemArrayDeserializer,
} from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import {
  LookupDictionaryExamplesOptionalParams,
  LookupDictionaryEntriesOptionalParams,
  FindSentenceBoundariesOptionalParams,
  TransliterateOptionalParams,
  TranslateOptionalParams,
  GetSupportedLanguagesOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _lookupDictionaryExamplesSend(
  context: Client,
  fromParam: string,
  to: string,
  body: DictionaryExampleTextItem[],
  options: LookupDictionaryExamplesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/dictionary/examples{?from,to,api%2Dversion}",
    {
      from: fromParam,
      to: to,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        ...(options?.clientTraceId !== undefined
          ? { "X-ClientTraceId": options?.clientTraceId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: dictionaryExampleTextItemArraySerializer(body),
    });
}

export async function _lookupDictionaryExamplesDeserialize(
  result: PathUncheckedResponse,
): Promise<DictionaryExampleItem[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return dictionaryExampleItemArrayDeserializer(result.body);
}

/** Lookup Dictionary Examples */
export async function lookupDictionaryExamples(
  context: Client,
  fromParam: string,
  to: string,
  body: DictionaryExampleTextItem[],
  options: LookupDictionaryExamplesOptionalParams = { requestOptions: {} },
): Promise<DictionaryExampleItem[]> {
  const result = await _lookupDictionaryExamplesSend(
    context,
    fromParam,
    to,
    body,
    options,
  );
  return _lookupDictionaryExamplesDeserialize(result);
}

export function _lookupDictionaryEntriesSend(
  context: Client,
  fromParam: string,
  to: string,
  body: InputTextItem[],
  options: LookupDictionaryEntriesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/dictionary/lookup{?from,to,api%2Dversion}",
    {
      from: fromParam,
      to: to,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        ...(options?.clientTraceId !== undefined
          ? { "X-ClientTraceId": options?.clientTraceId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: inputTextItemArraySerializer(body),
    });
}

export async function _lookupDictionaryEntriesDeserialize(
  result: PathUncheckedResponse,
): Promise<DictionaryLookupItem[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return dictionaryLookupItemArrayDeserializer(result.body);
}

/** Lookup Dictionary Entries */
export async function lookupDictionaryEntries(
  context: Client,
  fromParam: string,
  to: string,
  body: InputTextItem[],
  options: LookupDictionaryEntriesOptionalParams = { requestOptions: {} },
): Promise<DictionaryLookupItem[]> {
  const result = await _lookupDictionaryEntriesSend(
    context,
    fromParam,
    to,
    body,
    options,
  );
  return _lookupDictionaryEntriesDeserialize(result);
}

export function _findSentenceBoundariesSend(
  context: Client,
  body: InputTextItem[],
  options: FindSentenceBoundariesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/breaksentence{?language,script,api%2Dversion}",
    {
      language: options?.language,
      script: options?.script,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        ...(options?.clientTraceId !== undefined
          ? { "X-ClientTraceId": options?.clientTraceId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: inputTextItemArraySerializer(body),
    });
}

export async function _findSentenceBoundariesDeserialize(
  result: PathUncheckedResponse,
): Promise<BreakSentenceItem[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return breakSentenceItemArrayDeserializer(result.body);
}

/** Find Sentence Boundaries */
export async function findSentenceBoundaries(
  context: Client,
  body: InputTextItem[],
  options: FindSentenceBoundariesOptionalParams = { requestOptions: {} },
): Promise<BreakSentenceItem[]> {
  const result = await _findSentenceBoundariesSend(context, body, options);
  return _findSentenceBoundariesDeserialize(result);
}

export function _transliterateSend(
  context: Client,
  language: string,
  fromScript: string,
  toScript: string,
  body: InputTextItem[],
  options: TransliterateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/transliterate{?language,fromScript,toScript,api%2Dversion}",
    {
      language: language,
      fromScript: fromScript,
      toScript: toScript,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        ...(options?.clientTraceId !== undefined
          ? { "X-ClientTraceId": options?.clientTraceId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: inputTextItemArraySerializer(body),
    });
}

export async function _transliterateDeserialize(
  result: PathUncheckedResponse,
): Promise<TransliteratedText[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return transliteratedTextArrayDeserializer(result.body);
}

/** Transliterate Text */
export async function transliterate(
  context: Client,
  language: string,
  fromScript: string,
  toScript: string,
  body: InputTextItem[],
  options: TransliterateOptionalParams = { requestOptions: {} },
): Promise<TransliteratedText[]> {
  const result = await _transliterateSend(
    context,
    language,
    fromScript,
    toScript,
    body,
    options,
  );
  return _transliterateDeserialize(result);
}

export function _translateSend(
  context: Client,
  to: string[],
  body: InputTextItem[],
  options: TranslateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/translate{?to*,from,textType,category,profanityAction,profanityMarker,includeAlignment,includeSentenceLength,suggestedFrom,fromScript,toScript,allowFallback,api%2Dversion}",
    {
      to: to.map((p: any) => {
        return p;
      }),
      from: options?.fromParam,
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
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        ...(options?.clientTraceId !== undefined
          ? { "X-ClientTraceId": options?.clientTraceId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: inputTextItemArraySerializer(body),
    });
}

export async function _translateDeserialize(
  result: PathUncheckedResponse,
): Promise<TranslatedTextItem[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return translatedTextItemArrayDeserializer(result.body);
}

/** Translate Text */
export async function translate(
  context: Client,
  to: string[],
  body: InputTextItem[],
  options: TranslateOptionalParams = { requestOptions: {} },
): Promise<TranslatedTextItem[]> {
  const result = await _translateSend(context, to, body, options);
  return _translateDeserialize(result);
}

export function _getSupportedLanguagesSend(
  context: Client,
  options: GetSupportedLanguagesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/languages{?scope,api%2Dversion}",
    {
      scope: options?.scope,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
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
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getSupportedLanguagesDeserialize(
  result: PathUncheckedResponse,
): Promise<GetSupportedLanguagesResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return getSupportedLanguagesResultDeserializer(result.body);
}

/** Gets the set of languages currently supported by other operations of the Translator. */
export async function getSupportedLanguages(
  context: Client,
  options: GetSupportedLanguagesOptionalParams = { requestOptions: {} },
): Promise<GetSupportedLanguagesResult> {
  const result = await _getSupportedLanguagesSend(context, options);
  return _getSupportedLanguagesDeserialize(result);
}

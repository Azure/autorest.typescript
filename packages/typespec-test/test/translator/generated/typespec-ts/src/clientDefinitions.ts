// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  GetLanguagesParameters,
  TranslateParameters,
  TransliterateParameters,
  DetectParameters,
  BreakSentenceParameters,
  DictionaryLookupParameters,
  DictionaryExamplesParameters,
} from "./parameters.js";
import type {
  GetLanguages200Response,
  GetLanguagesDefaultResponse,
  Translate200Response,
  TranslateDefaultResponse,
  Transliterate200Response,
  TransliterateDefaultResponse,
  Detect200Response,
  DetectDefaultResponse,
  BreakSentence200Response,
  BreakSentenceDefaultResponse,
  DictionaryLookup200Response,
  DictionaryLookupDefaultResponse,
  DictionaryExamples200Response,
  DictionaryExamplesDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetLanguages {
  /** Gets the set of languages currently supported by other operations of the Translator. */
  get(
    options?: GetLanguagesParameters,
  ): StreamableMethod<GetLanguages200Response | GetLanguagesDefaultResponse>;
}

export interface Translate {
  /** Translate Text */
  post(
    options: TranslateParameters,
  ): StreamableMethod<Translate200Response | TranslateDefaultResponse>;
}

export interface Transliterate {
  /** Transliterate Text */
  post(
    options: TransliterateParameters,
  ): StreamableMethod<Transliterate200Response | TransliterateDefaultResponse>;
}

export interface Detect {
  /** Detect Languages */
  post(
    options: DetectParameters,
  ): StreamableMethod<Detect200Response | DetectDefaultResponse>;
}

export interface BreakSentence {
  /** Break Sentence */
  post(
    options: BreakSentenceParameters,
  ): StreamableMethod<BreakSentence200Response | BreakSentenceDefaultResponse>;
}

export interface DictionaryLookup {
  /** Dictionary Lookup */
  post(
    options: DictionaryLookupParameters,
  ): StreamableMethod<
    DictionaryLookup200Response | DictionaryLookupDefaultResponse
  >;
}

export interface DictionaryExamples {
  /** Dictionary Examples */
  post(
    options: DictionaryExamplesParameters,
  ): StreamableMethod<
    DictionaryExamples200Response | DictionaryExamplesDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/languages' has methods for the following verbs: get */
  (path: "/languages"): GetLanguages;
  /** Resource for '/translate' has methods for the following verbs: post */
  (path: "/translate"): Translate;
  /** Resource for '/transliterate' has methods for the following verbs: post */
  (path: "/transliterate"): Transliterate;
  /** Resource for '/detect' has methods for the following verbs: post */
  (path: "/detect"): Detect;
  /** Resource for '/breaksentence' has methods for the following verbs: post */
  (path: "/breaksentence"): BreakSentence;
  /** Resource for '/dictionary/lookup' has methods for the following verbs: post */
  (path: "/dictionary/lookup"): DictionaryLookup;
  /** Resource for '/dictionary/examples' has methods for the following verbs: post */
  (path: "/dictionary/examples"): DictionaryExamples;
}

export type TranslatorClient = Client & {
  path: Routes;
};

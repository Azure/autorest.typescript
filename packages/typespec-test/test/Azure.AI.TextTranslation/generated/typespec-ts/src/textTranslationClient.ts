// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createTextTranslation,
  TextTranslationContext,
  TextTranslationClientOptionalParams,
} from "./api/index.js";
import {
  lookupDictionaryExamples,
  lookupDictionaryEntries,
  findSentenceBoundaries,
  transliterate,
  translate,
  getSupportedLanguages,
} from "./api/operations.js";
import {
  LookupDictionaryExamplesOptionalParams,
  LookupDictionaryEntriesOptionalParams,
  FindSentenceBoundariesOptionalParams,
  TransliterateOptionalParams,
  TranslateOptionalParams,
  GetSupportedLanguagesOptionalParams,
} from "./api/options.js";
import {
  GetSupportedLanguagesResult,
  InputTextItem,
  TranslatedTextItem,
  TransliteratedText,
  BreakSentenceItem,
  DictionaryLookupItem,
  DictionaryExampleTextItem,
  DictionaryExampleItem,
} from "./models/models.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { TextTranslationClientOptionalParams } from "./api/textTranslationContext.js";

export class TextTranslationClient {
  private _client: TextTranslationContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /**
   * Text translation is a cloud-based REST API feature of the Translator service that uses neural
   * machine translation technology to enable quick and accurate source-to-target text translation
   * in real time across all supported languages.
   *
   * The following methods are supported by the Text Translation feature:
   *
   * Languages. Returns a list of languages supported by Translate, Transliterate, and Dictionary Lookup operations.
   *
   * Translate. Renders single source-language text to multiple target-language texts with a single request.
   *
   * Transliterate. Converts characters or letters of a source language to the corresponding characters or letters of a target language.
   *
   * Detect. Returns the source code language code and a boolean variable denoting whether the detected language is supported for text translation and transliteration.
   *
   * Dictionary lookup. Returns equivalent words for the source term in the target language.
   *
   * Dictionary example Returns grammatical structure and context examples for the source term and target term pair.
   */
  constructor(
    endpointParam: string,
    options: TextTranslationClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createTextTranslation(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Lookup Dictionary Examples */
  lookupDictionaryExamples(
    fromParam: string,
    to: string,
    body: DictionaryExampleTextItem[],
    options: LookupDictionaryExamplesOptionalParams = { requestOptions: {} },
  ): Promise<DictionaryExampleItem[]> {
    return lookupDictionaryExamples(this._client, fromParam, to, body, options);
  }

  /** Lookup Dictionary Entries */
  lookupDictionaryEntries(
    fromParam: string,
    to: string,
    body: InputTextItem[],
    options: LookupDictionaryEntriesOptionalParams = { requestOptions: {} },
  ): Promise<DictionaryLookupItem[]> {
    return lookupDictionaryEntries(this._client, fromParam, to, body, options);
  }

  /** Find Sentence Boundaries */
  findSentenceBoundaries(
    body: InputTextItem[],
    options: FindSentenceBoundariesOptionalParams = { requestOptions: {} },
  ): Promise<BreakSentenceItem[]> {
    return findSentenceBoundaries(this._client, body, options);
  }

  /** Transliterate Text */
  transliterate(
    language: string,
    fromScript: string,
    toScript: string,
    body: InputTextItem[],
    options: TransliterateOptionalParams = { requestOptions: {} },
  ): Promise<TransliteratedText[]> {
    return transliterate(
      this._client,
      language,
      fromScript,
      toScript,
      body,
      options,
    );
  }

  /** Translate Text */
  translate(
    to: string[],
    body: InputTextItem[],
    options: TranslateOptionalParams = { requestOptions: {} },
  ): Promise<TranslatedTextItem[]> {
    return translate(this._client, to, body, options);
  }

  /** Gets the set of languages currently supported by other operations of the Translator. */
  getSupportedLanguages(
    options: GetSupportedLanguagesOptionalParams = { requestOptions: {} },
  ): Promise<GetSupportedLanguagesResult> {
    return getSupportedLanguages(this._client, options);
  }
}

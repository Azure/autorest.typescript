// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  TextType,
  ProfanityAction,
  ProfanityMarker,
} from "../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface LookupDictionaryExamplesOptionalParams
  extends OperationOptions {
  /** A client-generated GUID to uniquely identify the request. */
  clientTraceId?: string;
}

/** Optional parameters. */
export interface LookupDictionaryEntriesOptionalParams
  extends OperationOptions {
  /** A client-generated GUID to uniquely identify the request. */
  clientTraceId?: string;
}

/** Optional parameters. */
export interface FindSentenceBoundariesOptionalParams extends OperationOptions {
  /** A client-generated GUID to uniquely identify the request. */
  clientTraceId?: string;
  /**
   * Language tag identifying the language of the input text.
   * If a code isn't specified, automatic language detection will be applied.
   */
  language?: string;
  /**
   * Script tag identifying the script used by the input text.
   * If a script isn't specified, the default script of the language will be assumed.
   */
  script?: string;
}

/** Optional parameters. */
export interface TransliterateOptionalParams extends OperationOptions {
  /** A client-generated GUID to uniquely identify the request. */
  clientTraceId?: string;
}

/** Optional parameters. */
export interface TranslateOptionalParams extends OperationOptions {
  /** A client-generated GUID to uniquely identify the request. */
  clientTraceId?: string;
  /**
   * Specifies the language of the input text. Find which languages are available to translate from by
   * looking up supported languages using the translation scope. If the from parameter isn't specified,
   * automatic language detection is applied to determine the source language.
   *
   * You must use the from parameter rather than autodetection when using the dynamic dictionary feature.
   * Note: the dynamic dictionary feature is case-sensitive.
   */
  fromParam?: string;
  /**
   * Defines whether the text being translated is plain text or HTML text. Any HTML needs to be a well-formed,
   * complete element. Possible values are: plain (default) or html.
   */
  textType?: TextType;
  /**
   * A string specifying the category (domain) of the translation. This parameter is used to get translations
   * from a customized system built with Custom Translator. Add the Category ID from your Custom Translator
   * project details to this parameter to use your deployed customized system. Default value is: general.
   */
  category?: string;
  /**
   * Specifies how profanities should be treated in translations.
   * Possible values are: NoAction (default), Marked or Deleted.
   */
  profanityAction?: ProfanityAction;
  /**
   * Specifies how profanities should be marked in translations.
   * Possible values are: Asterisk (default) or Tag.
   */
  profanityMarker?: ProfanityMarker;
  /**
   * Specifies whether to include alignment projection from source text to translated text.
   * Possible values are: true or false (default).
   */
  includeAlignment?: boolean;
  /**
   * Specifies whether to include sentence boundaries for the input text and the translated text.
   * Possible values are: true or false (default).
   */
  includeSentenceLength?: boolean;
  /**
   * Specifies a fallback language if the language of the input text can't be identified.
   * Language autodetection is applied when the from parameter is omitted. If detection fails,
   * the suggestedFrom language will be assumed.
   */
  suggestedFrom?: string;
  /** Specifies the script of the input text. */
  fromScript?: string;
  /** Specifies the script of the translated text. */
  toScript?: string;
  /**
   * Specifies that the service is allowed to fall back to a general system when a custom system doesn't exist.
   * Possible values are: true (default) or false.
   *
   * allowFallback=false specifies that the translation should only use systems trained for the category specified
   * by the request. If a translation for language X to language Y requires chaining through a pivot language E,
   * then all the systems in the chain (X → E and E → Y) will need to be custom and have the same category.
   * If no system is found with the specific category, the request will return a 400 status code. allowFallback=true
   * specifies that the service is allowed to fall back to a general system when a custom system doesn't exist.
   */
  allowFallback?: boolean;
}

/** Optional parameters. */
export interface GetSupportedLanguagesOptionalParams extends OperationOptions {
  /** A client-generated GUID to uniquely identify the request. */
  clientTraceId?: string;
  /**
   * A comma-separated list of names defining the group of languages to return.
   * Allowed group names are: `translation`, `transliteration` and `dictionary`.
   * If no scope is given, then all groups are returned, which is equivalent to passing
   * `scope=translation,transliteration,dictionary`. To decide which set of supported languages
   * is appropriate for your scenario, see the description of the [response object](#response-body).
   */
  scope?: string;
  /**
   * The language to use for user interface strings. Some of the fields in the response are names of languages or
   * names of regions. Use this parameter to define the language in which these names are returned.
   * The language is specified by providing a well-formed BCP 47 language tag. For instance, use the value `fr`
   * to request names in French or use the value `zh-Hant` to request names in Chinese Traditional.
   * Names are provided in the English language when a target language is not specified or when localization
   * is not available.
   */
  acceptLanguage?: string;
  /**
   * Passing the value of the ETag response header in an If-None-Match field will allow the service to optimize the response.
   * If the resource has not been modified, the service will return status code 304 and an empty response body.
   */
  ifNoneMatch?: string;
}

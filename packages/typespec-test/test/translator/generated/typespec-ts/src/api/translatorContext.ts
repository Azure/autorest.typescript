// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { TranslatorContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface TranslatorClientOptions extends ClientOptions {
  apiVersion?: string;
}

export { TranslatorContext } from "../rest/index.js";

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
export function createTranslator(
  endpointParam: string,
  options: TranslatorClientOptions = {},
): TranslatorContext {
  const clientContext = getClient(endpointParam, options);
  return clientContext;
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../logger.js";
import { KnownAPIVersion } from "../models/models.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";

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
export interface TextTranslationContext extends Client {
  /** Mandatory API version parameter */
  /** Known values of {@link KnownAPIVersion} that the service accepts. */
  apiVersion: string;
}

/** Optional parameters for the client. */
export interface TextTranslationClientOptionalParams extends ClientOptions {
  /** Mandatory API version parameter */
  /** Known values of {@link KnownAPIVersion} that the service accepts. */
  apiVersion?: string;
}

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
export function createTextTranslation(
  endpointParam: string,
  options: TextTranslationClientOptionalParams = {},
): TextTranslationContext {
  const endpointUrl = options.endpoint ?? String(endpointParam);
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-ai-translation-text/1.0.0-beta.1`;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api ${userAgentInfo}`
    : `azsdk-js-api ${userAgentInfo}`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
  };
  const clientContext = getClient(endpointUrl, undefined, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  const apiVersion = options.apiVersion ?? "3.0";
  clientContext.pipeline.addPolicy({
    name: "ClientApiVersionPolicy",
    sendRequest: (req, next) => {
      // Use the apiVersion defined in request url directly
      // Append one if there is no apiVersion and we have one at client options
      const url = new URL(req.url);
      if (!url.searchParams.get("api-version")) {
        req.url = `${req.url}${
          Array.from(url.searchParams.keys()).length > 0 ? "&" : "?"
        }api-version=${apiVersion}`;
      }

      return next(req);
    },
  });
  return { ...clientContext, apiVersion } as TextTranslationContext;
}

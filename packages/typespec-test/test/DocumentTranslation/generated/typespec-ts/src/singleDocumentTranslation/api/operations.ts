// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SingleDocumentTranslationContext as Client } from "./index.js";
import {
  DocumentTranslateContent,
  documentTranslateContentSerializer,
} from "../../models/models.js";
import { getBinaryResponse } from "../../static-helpers/serialization/get-binary-response.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { TranslateOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _translateSend(
  context: Client,
  targetLanguage: string,
  body: DocumentTranslateContent,
  options: TranslateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/document:translate{?api%2Dversion,sourceLanguage,targetLanguage,category,allowFallback,translateTextWithinImage}",
    {
      "api%2Dversion": context.apiVersion,
      sourceLanguage: options?.sourceLanguage,
      targetLanguage: targetLanguage,
      category: options?.category,
      allowFallback: options?.allowFallback,
      translateTextWithinImage: options?.translateTextWithinImage,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/octet-stream",
        ...options.requestOptions?.headers,
      },
      body: documentTranslateContentSerializer(body),
    });
}

export async function _translateDeserialize(result: PathUncheckedResponse): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Use this API to submit a single translation request to the Document Translation Service. */
export async function translate(
  context: Client,
  targetLanguage: string,
  body: DocumentTranslateContent,
  options: TranslateOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const streamableMethod = _translateSend(context, targetLanguage, body, options);
  const result = await getBinaryResponse(streamableMethod);
  return _translateDeserialize(result);
}

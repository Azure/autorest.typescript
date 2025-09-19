// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { KeyVaultContext as Client } from "./index.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { GetSecretOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getSecretSend(
  context: Client,
  secretName: string,
  secretVersion: string,
  options: GetSecretOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/secrets/{secret-name}/{secret-version}{?api%2Dversion}",
    {
      "secret-name": secretName,
      "secret-version": secretVersion,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getSecretDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** The most basic operation. */
export async function getSecret(
  context: Client,
  secretName: string,
  secretVersion: string,
  options: GetSecretOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _getSecretSend(
    context,
    secretName,
    secretVersion,
    options,
  );
  return _getSecretDeserialize(result);
}

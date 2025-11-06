// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CodeTransparencyContext as Client } from "./index.js";
import { JwksDocument, jwksDocumentDeserializer } from "../models/models.js";
import { getBinaryResponse } from "../static-helpers/serialization/get-binary-response.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import {
  GetEntryStatementOptionalParams,
  GetEntryOptionalParams,
  GetOperationOptionalParams,
  CreateEntryOptionalParams,
  GetPublicKeysOptionalParams,
  GetTransparencyConfigCborOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getEntryStatementSend(
  context: Client,
  entryId: string,
  options: GetEntryStatementOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/entries/{entryId}/statement{?api%2Dversion}",
    {
      entryId: entryId,
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
        accept: "application/cose",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getEntryStatementDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200", "400", "404", "429", "500", "503"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Get the transparent statement consisting of the signed statement and the receipt embedded in the header */
export async function getEntryStatement(
  context: Client,
  entryId: string,
  options: GetEntryStatementOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const streamableMethod = _getEntryStatementSend(context, entryId, options);
  const result = await getBinaryResponse(streamableMethod);
  return _getEntryStatementDeserialize(result);
}

export function _getEntrySend(
  context: Client,
  entryId: string,
  options: GetEntryOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/entries/{entryId}{?api%2Dversion}",
    {
      entryId: entryId,
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
        accept: "application/cose",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getEntryDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200", "400", "404", "429", "500", "503"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Get receipt */
export async function getEntry(
  context: Client,
  entryId: string,
  options: GetEntryOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const streamableMethod = _getEntrySend(context, entryId, options);
  const result = await getBinaryResponse(streamableMethod);
  return _getEntryDeserialize(result);
}

export function _getOperationSend(
  context: Client,
  operationId: string,
  options: GetOperationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/operations/{operationId}{?api%2Dversion}",
    {
      operationId: operationId,
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
        accept: "application/cbor",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getOperationDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200", "202", "400", "404", "429", "500", "503"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Get status of the long running registration operation, mandatory in IETF SCITT draft */
export async function getOperation(
  context: Client,
  operationId: string,
  options: GetOperationOptionalParams = { requestOptions: {} },
): Promise<Uint8Array | null> {
  const result = await _getOperationSend(context, operationId, options);
  return _getOperationDeserialize(result);
}

export function _createEntrySend(
  context: Client,
  body: Uint8Array,
  options: CreateEntryOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/entries{?api%2Dversion}",
    {
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
      contentType: "application/cose",
      headers: {
        accept: "application/cose; application/cbor",
        ...options.requestOptions?.headers,
      },
      body: body,
    });
}

export async function _createEntryDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["201", "202", "400", "404", "429", "500", "503"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Post an entry to be registered on the CodeTransparency instance, mandatory in IETF SCITT draft */
export async function createEntry(
  context: Client,
  body: Uint8Array,
  options: CreateEntryOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const streamableMethod = _createEntrySend(context, body, options);
  const result = await getBinaryResponse(streamableMethod);
  return _createEntryDeserialize(result);
}

export function _getPublicKeysSend(
  context: Client,
  options: GetPublicKeysOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jwks{?api%2Dversion}",
    {
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
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getPublicKeysDeserialize(
  result: PathUncheckedResponse,
): Promise<JwksDocument> {
  const expectedStatuses = ["200", "400", "404", "429", "500", "503"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return jwksDocumentDeserializer(result.body);
}

/** Get the public keys used by the service to sign receipts, mentioned in IETF SCITT draft as part of jwks_uri implementation */
export async function getPublicKeys(
  context: Client,
  options: GetPublicKeysOptionalParams = { requestOptions: {} },
): Promise<JwksDocument | Uint8Array> {
  const result = await _getPublicKeysSend(context, options);
  return _getPublicKeysDeserialize(result);
}

export function _getTransparencyConfigCborSend(
  context: Client,
  options: GetTransparencyConfigCborOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/.well-known/transparency-configuration{?api%2Dversion}",
    {
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
        accept: "application/cbor",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getTransparencyConfigCborDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200", "500", "503"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Get the transparency service configuration, mandatory in IETF SCITT draft */
export async function getTransparencyConfigCbor(
  context: Client,
  options: GetTransparencyConfigCborOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const streamableMethod = _getTransparencyConfigCborSend(context, options);
  const result = await getBinaryResponse(streamableMethod);
  return _getTransparencyConfigCborDeserialize(result);
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ParametrizedHostContext as Client } from "../index.js";
import {
  collectionDeserializer,
  ConfidentialLedgerListCollectionsResponse,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { ConfidentialLedgerListCollectionsOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listCollectionsSend(
  context: Client,
  options: ConfidentialLedgerListCollectionsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/app/collections{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion ?? "v1",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _listCollectionsDeserialize(
  result: PathUncheckedResponse,
): Promise<ConfidentialLedgerListCollectionsResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    body: result.body.map((p: any) => {
      return collectionDeserializer(p);
    }),
  };
}

/** Collection ids are user-created collections of ledger entries */
export async function listCollections(
  context: Client,
  options: ConfidentialLedgerListCollectionsOptionalParams = { requestOptions: {} },
): Promise<ConfidentialLedgerListCollectionsResponse> {
  const result = await _listCollectionsSend(context, options);
  return _listCollectionsDeserialize(result);
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ParametrizedHostContext as Client } from "../index.js";
import {
  Collection,
  collectionArrayDeserializer,
} from "../../models/models.js";
import { ConfidentialLedgerListCollectionsOptionalParams } from "./options.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listCollectionsSend(
  context: Client,
  options: ConfidentialLedgerListCollectionsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/app/collections{?api-version}",
    {
      "api-version": context.apiVersion,
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

export async function _listCollectionsDeserialize(
  result: PathUncheckedResponse,
): Promise<Collection[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return collectionArrayDeserializer(result.body);
}

/** Collection ids are user-created collections of ledger entries */
export async function listCollections(
  context: Client,
  options: ConfidentialLedgerListCollectionsOptionalParams = {
    requestOptions: {},
  },
): Promise<Collection[]> {
  const result = await _listCollectionsSend(context, options);
  return _listCollectionsDeserialize(result);
}

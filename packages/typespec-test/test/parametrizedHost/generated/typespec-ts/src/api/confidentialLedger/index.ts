// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Collection } from "../../models/models.js";
import {
  ParametrizedHostContext as Client,
  ConfidentialLedgerListCollectionsOptionalParams,
} from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";

export function _listCollectionsSend(
  context: Client,
  apiVersion: string,
  options: ConfidentialLedgerListCollectionsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/app/collections")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { "api-version": apiVersion },
    });
}

export async function _listCollectionsDeserialize(
  result: PathUncheckedResponse,
): Promise<Collection[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p: any) => {
        return { collectionId: p["collectionId"] };
      });
}

/** Collection ids are user-created collections of ledger entries */
export async function listCollections(
  context: Client,
  apiVersion: string,
  options: ConfidentialLedgerListCollectionsOptionalParams = {
    requestOptions: {},
  },
): Promise<Collection[]> {
  const result = await _listCollectionsSend(context, apiVersion, options);
  return _listCollectionsDeserialize(result);
}

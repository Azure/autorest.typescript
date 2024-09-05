// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ParametrizedHostContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { Collection } from "../../models/models.js";
import {
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { ConfidentialLedgerListCollectionsOptionalParams } from "../../models/options.js";

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

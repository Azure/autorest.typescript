// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Collection } from "../../models/models.js";
import {
  isUnexpected,
  ParametrizedHostContext as Client,
  ListCollections200Response,
  ListCollectionsDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { ConfidentialLedgerListCollectionsOptionalParams } from "../../models/options.js";

export function _listCollectionsSend(
  context: Client,
  apiVersion: string,
  options: ConfidentialLedgerListCollectionsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  ListCollections200Response | ListCollectionsDefaultResponse
> {
  return context
    .path("/app/collections")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { "api-version": apiVersion },
    });
}

export async function _listCollectionsDeserialize(
  result: ListCollections200Response | ListCollectionsDefaultResponse,
): Promise<Collection[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p) => {
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

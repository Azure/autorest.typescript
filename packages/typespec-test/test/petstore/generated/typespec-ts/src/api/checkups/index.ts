// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CheckupsCreateOrUpdateOptionalParams,
  CheckupsListOptionalParams,
  PetStoreContext as Client,
} from "../index.js";
import {
  CheckupUpdate,
  checkupUpdateSerializer,
  Checkup,
  checkupDeserializer,
  CheckupCollectionWithNextLink,
  checkupCollectionWithNextLinkDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createOrUpdateSend(
  context: Client,
  checkupId: number,
  resource: CheckupUpdate,
  options: CheckupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/checkups/{checkupId}", checkupId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: checkupUpdateSerializer(resource),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Checkup> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return checkupDeserializer(result.body);
}

/** Creates or update an instance of the resource. */
export async function createOrUpdate(
  context: Client,
  checkupId: number,
  resource: CheckupUpdate,
  options: CheckupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<Checkup> {
  const result = await _createOrUpdateSend(
    context,
    checkupId,
    resource,
    options,
  );
  return _createOrUpdateDeserialize(result);
}

export function _listSend(
  context: Client,
  options: CheckupsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/checkups")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<CheckupCollectionWithNextLink> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return checkupCollectionWithNextLinkDeserializer(result.body);
}

/** Lists all instances of the resource. */
export async function list(
  context: Client,
  options: CheckupsListOptionalParams = { requestOptions: {} },
): Promise<CheckupCollectionWithNextLink> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

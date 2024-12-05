// Licensed under the MIT License.

import {
  PetStoreContext as Client,
  OwnersCreateOptionalParams,
  OwnersDeleteOptionalParams,
  OwnersGetOptionalParams,
  OwnersListOptionalParams,
  OwnersUpdateOptionalParams,
} from "../index.js";
import {
  Owner,
  ownerDeserializer,
  OwnerUpdate,
  ownerUpdateSerializer,
  OwnerCreate,
  ownerCreateSerializer,
  OwnerCollectionWithNextLink,
  ownerCollectionWithNextLinkDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _getSend(
  context: Client,
  ownerId: number,
  options: OwnersGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/owners/{ownerId}", ownerId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<Owner> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return ownerDeserializer(result.body);
}

/** Gets an instance of the resource. */
export async function get(
  context: Client,
  ownerId: number,
  options: OwnersGetOptionalParams = { requestOptions: {} },
): Promise<Owner> {
  const result = await _getSend(context, ownerId, options);
  return _getDeserialize(result);
}

export function _updateSend(
  context: Client,
  ownerId: number,
  properties: OwnerUpdate,
  options: OwnersUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/owners/{ownerId}", ownerId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: ownerUpdateSerializer(properties),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<Owner> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return ownerDeserializer(result.body);
}

/** Updates an existing instance of the resource. */
export async function update(
  context: Client,
  ownerId: number,
  properties: OwnerUpdate,
  options: OwnersUpdateOptionalParams = { requestOptions: {} },
): Promise<Owner> {
  const result = await _updateSend(context, ownerId, properties, options);
  return _updateDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  ownerId: number,
  options: OwnersDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/owners/{ownerId}", ownerId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes an existing instance of the resource. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  ownerId: number,
  options: OwnersDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, ownerId, options);
  return _$deleteDeserialize(result);
}

export function _createSend(
  context: Client,
  resource: OwnerCreate,
  options: OwnersCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/owners")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: ownerCreateSerializer(resource),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<Owner> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return ownerDeserializer(result.body);
}

/** Creates a new instance of the resource. */
export async function create(
  context: Client,
  resource: OwnerCreate,
  options: OwnersCreateOptionalParams = { requestOptions: {} },
): Promise<Owner> {
  const result = await _createSend(context, resource, options);
  return _createDeserialize(result);
}

export function _listSend(
  context: Client,
  options: OwnersListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/owners")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<OwnerCollectionWithNextLink> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return ownerCollectionWithNextLinkDeserializer(result.body);
}

/** Lists all instances of the resource. */
export async function list(
  context: Client,
  options: OwnersListOptionalParams = { requestOptions: {} },
): Promise<OwnerCollectionWithNextLink> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PetStoreContext as Client,
  PetsCreateOptionalParams,
  PetsDeleteOptionalParams,
  PetsGetOptionalParams,
  PetsListOptionalParams,
  PetsUpdateOptionalParams,
} from "../index.js";
import {
  Pet,
  petDeserializer,
  PetUpdate,
  petUpdateSerializer,
  PetCreate,
  petCreateSerializer,
  PetCollectionWithNextLink,
  petCollectionWithNextLinkDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getSend(
  context: Client,
  petId: number,
  options: PetsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pets/{petId}", petId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<Pet> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return petDeserializer(result.body);
}

/** Gets an instance of the resource. */
export async function get(
  context: Client,
  petId: number,
  options: PetsGetOptionalParams = { requestOptions: {} },
): Promise<Pet> {
  const result = await _getSend(context, petId, options);
  return _getDeserialize(result);
}

export function _updateSend(
  context: Client,
  petId: number,
  properties: PetUpdate,
  options: PetsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pets/{petId}", petId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: petUpdateSerializer(properties),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<Pet> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return petDeserializer(result.body);
}

/** Updates an existing instance of the resource. */
export async function update(
  context: Client,
  petId: number,
  properties: PetUpdate,
  options: PetsUpdateOptionalParams = { requestOptions: {} },
): Promise<Pet> {
  const result = await _updateSend(context, petId, properties, options);
  return _updateDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  petId: number,
  options: PetsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pets/{petId}", petId)
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
  petId: number,
  options: PetsDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, petId, options);
  return _$deleteDeserialize(result);
}

export function _createSend(
  context: Client,
  resource: PetCreate,
  options: PetsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pets")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: petCreateSerializer(resource),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<Pet> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return petDeserializer(result.body);
}

/** Creates a new instance of the resource. */
export async function create(
  context: Client,
  resource: PetCreate,
  options: PetsCreateOptionalParams = { requestOptions: {} },
): Promise<Pet> {
  const result = await _createSend(context, resource, options);
  return _createDeserialize(result);
}

export function _listSend(
  context: Client,
  options: PetsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pets")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<PetCollectionWithNextLink> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return petCollectionWithNextLinkDeserializer(result.body);
}

/** Lists all instances of the resource. */
export async function list(
  context: Client,
  options: PetsListOptionalParams = { requestOptions: {} },
): Promise<PetCollectionWithNextLink> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

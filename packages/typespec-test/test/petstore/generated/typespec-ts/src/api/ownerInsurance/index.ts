// Licensed under the MIT License.

import {
  PetStoreContext as Client,
  OwnerInsuranceGetOptionalParams,
  OwnerInsuranceUpdateOptionalParams,
} from "../index.js";
import {
  Insurance,
  insuranceDeserializer,
  InsuranceUpdate,
  insuranceUpdateSerializer,
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
  options: OwnerInsuranceGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/owners/{ownerId}/insurance", ownerId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<Insurance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return insuranceDeserializer(result.body);
}

/** Gets the singleton resource. */
export async function get(
  context: Client,
  ownerId: number,
  options: OwnerInsuranceGetOptionalParams = { requestOptions: {} },
): Promise<Insurance> {
  const result = await _getSend(context, ownerId, options);
  return _getDeserialize(result);
}

export function _updateSend(
  context: Client,
  ownerId: number,
  properties: InsuranceUpdate,
  options: OwnerInsuranceUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/owners/{ownerId}/insurance", ownerId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: insuranceUpdateSerializer(properties),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<Insurance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return insuranceDeserializer(result.body);
}

/** Updates the singleton resource. */
export async function update(
  context: Client,
  ownerId: number,
  properties: InsuranceUpdate,
  options: OwnerInsuranceUpdateOptionalParams = { requestOptions: {} },
): Promise<Insurance> {
  const result = await _updateSend(context, ownerId, properties, options);
  return _updateDeserialize(result);
}

// Licensed under the MIT License.

import {
  ToyInsuranceGetOptionalParams,
  ToyInsuranceUpdateOptionalParams,
} from "../../api/options.js";
import { PetStoreContext } from "../../api/petStoreContext.js";
import { get, update } from "../../api/toyInsurance/index.js";
import { Insurance, InsuranceUpdate } from "../../models/models.js";

/** Interface representing a ToyInsurance operations. */
export interface ToyInsuranceOperations {
  /** Gets the singleton resource. */
  get: (
    petId: number,
    toyId: number,
    options?: ToyInsuranceGetOptionalParams,
  ) => Promise<Insurance>;
  /** Updates the singleton resource. */
  update: (
    petId: number,
    toyId: number,
    properties: InsuranceUpdate,
    options?: ToyInsuranceUpdateOptionalParams,
  ) => Promise<Insurance>;
}

export function getToyInsurance(context: PetStoreContext) {
  return {
    get: (
      petId: number,
      toyId: number,
      options?: ToyInsuranceGetOptionalParams,
    ) => get(context, petId, toyId, options),
    update: (
      petId: number,
      toyId: number,
      properties: InsuranceUpdate,
      options?: ToyInsuranceUpdateOptionalParams,
    ) => update(context, petId, toyId, properties, options),
  };
}

export function getToyInsuranceOperations(
  context: PetStoreContext,
): ToyInsuranceOperations {
  return {
    ...getToyInsurance(context),
  };
}

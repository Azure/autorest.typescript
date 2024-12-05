// Licensed under the MIT License.

import { PetStoreContext } from "../../api/petStoreContext.js";
import { get, update } from "../../api/petInsurance/index.js";
import { Insurance, InsuranceUpdate } from "../../models/models.js";
import {
  PetInsuranceGetOptionalParams,
  PetInsuranceUpdateOptionalParams,
} from "../../api/options.js";

/** Interface representing a PetInsurance operations. */
export interface PetInsuranceOperations {
  /** Gets the singleton resource. */
  get: (
    petId: number,
    options?: PetInsuranceGetOptionalParams,
  ) => Promise<Insurance>;
  /** Updates the singleton resource. */
  update: (
    petId: number,
    properties: InsuranceUpdate,
    options?: PetInsuranceUpdateOptionalParams,
  ) => Promise<Insurance>;
}

export function getPetInsurance(context: PetStoreContext) {
  return {
    get: (petId: number, options?: PetInsuranceGetOptionalParams) =>
      get(context, petId, options),
    update: (
      petId: number,
      properties: InsuranceUpdate,
      options?: PetInsuranceUpdateOptionalParams,
    ) => update(context, petId, properties, options),
  };
}

export function getPetInsuranceOperations(
  context: PetStoreContext,
): PetInsuranceOperations {
  return {
    ...getPetInsurance(context),
  };
}

// Licensed under the MIT License.

import { PetStoreContext } from "../../api/petStoreContext.js";
import { get, update } from "../../api/ownerInsurance/index.js";
import { Insurance, InsuranceUpdate } from "../../models/models.js";
import {
  OwnerInsuranceGetOptionalParams,
  OwnerInsuranceUpdateOptionalParams,
} from "../../api/options.js";

/** Interface representing a OwnerInsurance operations. */
export interface OwnerInsuranceOperations {
  /** Gets the singleton resource. */
  get: (
    ownerId: number,
    options?: OwnerInsuranceGetOptionalParams,
  ) => Promise<Insurance>;
  /** Updates the singleton resource. */
  update: (
    ownerId: number,
    properties: InsuranceUpdate,
    options?: OwnerInsuranceUpdateOptionalParams,
  ) => Promise<Insurance>;
}

export function getOwnerInsurance(context: PetStoreContext) {
  return {
    get: (ownerId: number, options?: OwnerInsuranceGetOptionalParams) =>
      get(context, ownerId, options),
    update: (
      ownerId: number,
      properties: InsuranceUpdate,
      options?: OwnerInsuranceUpdateOptionalParams,
    ) => update(context, ownerId, properties, options),
  };
}

export function getOwnerInsuranceOperations(
  context: PetStoreContext,
): OwnerInsuranceOperations {
  return {
    ...getOwnerInsurance(context),
  };
}

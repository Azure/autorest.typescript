// Licensed under the MIT License.

import {
  PetsGetOptionalParams,
  PetsUpdateOptionalParams,
  PetsDeleteOptionalParams,
  PetsCreateOptionalParams,
  PetsListOptionalParams,
} from "../../api/options.js";
import { PetStoreContext } from "../../api/petStoreContext.js";
import { get, update, $delete, create, list } from "../../api/pets/index.js";
import {
  Pet,
  PetUpdate,
  PetCreate,
  PetCollectionWithNextLink,
} from "../../models/models.js";

/** Interface representing a Pets operations. */
export interface PetsOperations {
  /** Gets an instance of the resource. */
  get: (petId: number, options?: PetsGetOptionalParams) => Promise<Pet>;
  /** Updates an existing instance of the resource. */
  update: (
    petId: number,
    properties: PetUpdate,
    options?: PetsUpdateOptionalParams,
  ) => Promise<Pet>;
  /** Deletes an existing instance of the resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (petId: number, options?: PetsDeleteOptionalParams) => Promise<void>;
  /** Creates a new instance of the resource. */
  create: (
    resource: PetCreate,
    options?: PetsCreateOptionalParams,
  ) => Promise<Pet>;
  /** Lists all instances of the resource. */
  list: (
    options?: PetsListOptionalParams,
  ) => Promise<PetCollectionWithNextLink>;
}

export function getPets(context: PetStoreContext) {
  return {
    get: (petId: number, options?: PetsGetOptionalParams) =>
      get(context, petId, options),
    update: (
      petId: number,
      properties: PetUpdate,
      options?: PetsUpdateOptionalParams,
    ) => update(context, petId, properties, options),
    delete: (petId: number, options?: PetsDeleteOptionalParams) =>
      $delete(context, petId, options),
    create: (resource: PetCreate, options?: PetsCreateOptionalParams) =>
      create(context, resource, options),
    list: (options?: PetsListOptionalParams) => list(context, options),
  };
}

export function getPetsOperations(context: PetStoreContext): PetsOperations {
  return {
    ...getPets(context),
  };
}

// Licensed under the MIT License.

import {
  ToysGetOptionalParams,
  ToysListOptionalParams,
} from "../../api/options.js";
import { PetStoreContext } from "../../api/petStoreContext.js";
import { get, list } from "../../api/toys/index.js";
import { Toy, ToyCollectionWithNextLink } from "../../models/models.js";

/** Interface representing a Toys operations. */
export interface ToysOperations {
  /** Gets an instance of the resource. */
  get: (
    petId: number,
    toyId: number,
    options?: ToysGetOptionalParams,
  ) => Promise<Toy>;
  list: (
    petId: number,
    nameFilter: string,
    options?: ToysListOptionalParams,
  ) => Promise<ToyCollectionWithNextLink>;
}

export function getToys(context: PetStoreContext) {
  return {
    get: (petId: number, toyId: number, options?: ToysGetOptionalParams) =>
      get(context, petId, toyId, options),
    list: (
      petId: number,
      nameFilter: string,
      options?: ToysListOptionalParams,
    ) => list(context, petId, nameFilter, options),
  };
}

export function getToysOperations(context: PetStoreContext): ToysOperations {
  return {
    ...getToys(context),
  };
}

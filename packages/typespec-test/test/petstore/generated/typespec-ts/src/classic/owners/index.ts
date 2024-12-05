// Licensed under the MIT License.

import { PetStoreContext } from "../../api/petStoreContext.js";
import { get, update, $delete, create, list } from "../../api/owners/index.js";
import {
  Owner,
  OwnerUpdate,
  OwnerCreate,
  OwnerCollectionWithNextLink,
} from "../../models/models.js";
import {
  OwnersGetOptionalParams,
  OwnersUpdateOptionalParams,
  OwnersDeleteOptionalParams,
  OwnersCreateOptionalParams,
  OwnersListOptionalParams,
} from "../../api/options.js";

/** Interface representing a Owners operations. */
export interface OwnersOperations {
  /** Gets an instance of the resource. */
  get: (ownerId: number, options?: OwnersGetOptionalParams) => Promise<Owner>;
  /** Updates an existing instance of the resource. */
  update: (
    ownerId: number,
    properties: OwnerUpdate,
    options?: OwnersUpdateOptionalParams,
  ) => Promise<Owner>;
  /** Deletes an existing instance of the resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    ownerId: number,
    options?: OwnersDeleteOptionalParams,
  ) => Promise<void>;
  /** Creates a new instance of the resource. */
  create: (
    resource: OwnerCreate,
    options?: OwnersCreateOptionalParams,
  ) => Promise<Owner>;
  /** Lists all instances of the resource. */
  list: (
    options?: OwnersListOptionalParams,
  ) => Promise<OwnerCollectionWithNextLink>;
}

export function getOwners(context: PetStoreContext) {
  return {
    get: (ownerId: number, options?: OwnersGetOptionalParams) =>
      get(context, ownerId, options),
    update: (
      ownerId: number,
      properties: OwnerUpdate,
      options?: OwnersUpdateOptionalParams,
    ) => update(context, ownerId, properties, options),
    delete: (ownerId: number, options?: OwnersDeleteOptionalParams) =>
      $delete(context, ownerId, options),
    create: (resource: OwnerCreate, options?: OwnersCreateOptionalParams) =>
      create(context, resource, options),
    list: (options?: OwnersListOptionalParams) => list(context, options),
  };
}

export function getOwnersOperations(
  context: PetStoreContext,
): OwnersOperations {
  return {
    ...getOwners(context),
  };
}

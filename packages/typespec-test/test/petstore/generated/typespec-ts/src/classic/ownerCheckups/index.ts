// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PetStoreContext } from "../../api/petStoreContext.js";
import { createOrUpdate, list } from "../../api/ownerCheckups/index.js";
import {
  CheckupUpdate,
  Checkup,
  CheckupCollectionWithNextLink,
} from "../../models/models.js";
import {
  OwnerCheckupsCreateOrUpdateOptionalParams,
  OwnerCheckupsListOptionalParams,
} from "../../api/options.js";

/** Interface representing a OwnerCheckups operations. */
export interface OwnerCheckupsOperations {
  /** Creates or update an instance of the extension resource. */
  createOrUpdate: (
    ownerId: number,
    checkupId: number,
    resource: CheckupUpdate,
    options?: OwnerCheckupsCreateOrUpdateOptionalParams,
  ) => Promise<Checkup>;
  /** Lists all instances of the extension resource. */
  list: (
    ownerId: number,
    options?: OwnerCheckupsListOptionalParams,
  ) => Promise<CheckupCollectionWithNextLink>;
}

export function getOwnerCheckups(context: PetStoreContext) {
  return {
    createOrUpdate: (
      ownerId: number,
      checkupId: number,
      resource: CheckupUpdate,
      options?: OwnerCheckupsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, ownerId, checkupId, resource, options),
    list: (ownerId: number, options?: OwnerCheckupsListOptionalParams) =>
      list(context, ownerId, options),
  };
}

export function getOwnerCheckupsOperations(
  context: PetStoreContext,
): OwnerCheckupsOperations {
  return {
    ...getOwnerCheckups(context),
  };
}

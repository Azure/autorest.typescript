// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PetStoreContext } from "../../api/petStoreContext.js";
import { createOrUpdate, list } from "../../api/petCheckups/index.js";
import {
  CheckupUpdate,
  Checkup,
  CheckupCollectionWithNextLink,
} from "../../models/models.js";
import {
  PetCheckupsCreateOrUpdateOptionalParams,
  PetCheckupsListOptionalParams,
} from "../../api/options.js";

/** Interface representing a PetCheckups operations. */
export interface PetCheckupsOperations {
  /** Creates or update an instance of the extension resource. */
  createOrUpdate: (
    petId: number,
    checkupId: number,
    resource: CheckupUpdate,
    options?: PetCheckupsCreateOrUpdateOptionalParams,
  ) => Promise<Checkup>;
  /** Lists all instances of the extension resource. */
  list: (
    petId: number,
    options?: PetCheckupsListOptionalParams,
  ) => Promise<CheckupCollectionWithNextLink>;
}

export function getPetCheckups(context: PetStoreContext) {
  return {
    createOrUpdate: (
      petId: number,
      checkupId: number,
      resource: CheckupUpdate,
      options?: PetCheckupsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, petId, checkupId, resource, options),
    list: (petId: number, options?: PetCheckupsListOptionalParams) =>
      list(context, petId, options),
  };
}

export function getPetCheckupsOperations(
  context: PetStoreContext,
): PetCheckupsOperations {
  return {
    ...getPetCheckups(context),
  };
}

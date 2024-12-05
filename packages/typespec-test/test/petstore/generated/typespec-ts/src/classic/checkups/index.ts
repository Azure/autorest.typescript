// Licensed under the MIT License.

import { PetStoreContext } from "../../api/petStoreContext.js";
import { createOrUpdate, list } from "../../api/checkups/index.js";
import {
  CheckupUpdate,
  Checkup,
  CheckupCollectionWithNextLink,
} from "../../models/models.js";
import {
  CheckupsCreateOrUpdateOptionalParams,
  CheckupsListOptionalParams,
} from "../../api/options.js";

/** Interface representing a Checkups operations. */
export interface CheckupsOperations {
  /** Creates or update an instance of the resource. */
  createOrUpdate: (
    checkupId: number,
    resource: CheckupUpdate,
    options?: CheckupsCreateOrUpdateOptionalParams,
  ) => Promise<Checkup>;
  /** Lists all instances of the resource. */
  list: (
    options?: CheckupsListOptionalParams,
  ) => Promise<CheckupCollectionWithNextLink>;
}

export function getCheckups(context: PetStoreContext) {
  return {
    createOrUpdate: (
      checkupId: number,
      resource: CheckupUpdate,
      options?: CheckupsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, checkupId, resource, options),
    list: (options?: CheckupsListOptionalParams) => list(context, options),
  };
}

export function getCheckupsOperations(
  context: PetStoreContext,
): CheckupsOperations {
  return {
    ...getCheckups(context),
  };
}

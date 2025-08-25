// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PetGetByPetIdOptionalParams,
  PetGetByPetIdResponse,
  PetAddPetOptionalParams,
  PetAddPetResponse,
} from "../models";

/** Interface representing a Pet. */
export interface Pet {
  /**
   * get pet by id
   * @param petId Pet id
   * @param options The options parameters.
   */
  getByPetId(
    petId: string,
    options?: PetGetByPetIdOptionalParams,
  ): Promise<PetGetByPetIdResponse>;
  /**
   * add pet
   * @param options The options parameters.
   */
  addPet(options?: PetAddPetOptionalParams): Promise<PetAddPetResponse>;
}

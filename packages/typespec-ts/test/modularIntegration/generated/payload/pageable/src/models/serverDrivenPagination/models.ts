// Licensed under the MIT License.

import { petArrayDeserializer, Pet } from "../models.js";

/** model interface _LinkResponse */
export interface _LinkResponse {
  pets: Pet[];
  next?: string;
}

export function _linkResponseDeserializer(item: any): _LinkResponse {
  return {
    pets: petArrayDeserializer(item["pets"]),
    next: item["next"],
  };
}

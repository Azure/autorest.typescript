import { PetUnion, Gold, DogUnion } from "../models/models.js";
import { PetOutput, GoldOutput, DogOutput } from "../rest/index.js";

/** deserialize function for PetOutput */
export function deserializePetUnion(obj: PetOutput): PetUnion {
  switch (obj.kind) {
    case "dog":
      return deserializeDogUnion(obj as DogUnion);
    default:
      return obj;
  }
}

/** deserialize function for Gold */
function deserializeGold(obj: GoldOutput): Gold {
  return {
    kind: obj["kind"],
    type: obj["type"],
    bark: obj["bark"],
    name: obj["name"],
    weight: obj["weight"],
    friends: obj["friends"].map((p: any) => deserializePetUnion(p)),
    birthDay: new Date(obj["birthDay"])
  };
}

/** deserialize function for DogOutput */
export function deserializeDogUnion(obj: DogOutput): DogUnion {
  switch (obj.type) {
    case "gold":
      return deserializeGold(obj as Gold);
    default:
      return obj;
  }
}

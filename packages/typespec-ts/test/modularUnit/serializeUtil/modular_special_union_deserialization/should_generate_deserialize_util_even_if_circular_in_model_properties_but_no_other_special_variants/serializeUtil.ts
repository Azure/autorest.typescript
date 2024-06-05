import { Pet, Cat, Dog, Gold } from "../models/models.js";
import {
  PetOutput as PetRest,
  CatOutput as CatRest,
  DogOutput as DogRest,
  GoldOutput as GoldRest
} from "../index.js";

export function serializePet(o: Pet): PetRest {
  return {
    ...o,
    ...(o["weight"] === undefined ? {} : { weight: o["weight"] })
  };
}

export function deserializePet(o: PetRest): Pet {
  return {
    ...o,
    ...(o["weight"] === undefined ? {} : { weight: o["weight"] })
  };
}

export function serializeCat(o: Cat): CatRest {
  return { ...o, ...serializePet(o), kind: o["kind"], meow: o["meow"] };
}

export function deserializeCat(o: CatRest): Cat {
  return { ...o, ...deserializePet(o), kind: o["kind"], meow: o["meow"] };
}

export function serializeDog(o: Dog): DogRest {
  return {
    ...o,
    ...serializePet(o),
    kind: o["kind"],
    type: o["type"],
    bark: o["bark"]
  };
}

export function deserializeDog(o: DogRest): Dog {
  return {
    ...o,
    ...deserializePet(o),
    kind: o["kind"],
    type: o["type"],
    bark: o["bark"]
  };
}

export function serializeGold(o: Gold): GoldRest {
  return {
    ...o,
    ...serializeDog(o),
    type: o["type"],
    friends: o["friends"].map(serializePet),
    birthDay: o["birthDay"].toISOString()
  };
}

export function deserializeGold(o: GoldRest): Gold {
  return {
    ...o,
    ...deserializeDog(o),
    type: o["type"],
    friends: o["friends"].map(deserializePet),
    birthDay: new Date(o["birthDay"])
  };
}

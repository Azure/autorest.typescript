// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationParameter, OperationURLParameter } from "@azure/core-client";
import {
  Horse as HorseMapper,
  Pet as PetMapper,
  Feline as FelineMapper,
  Cat as CatMapper,
  Kitten as KittenMapper,
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const horse: OperationParameter = {
  parameterPath: "horse",
  mapper: HorseMapper,
};

export const pet: OperationParameter = {
  parameterPath: "pet",
  mapper: PetMapper,
};

export const feline: OperationParameter = {
  parameterPath: "feline",
  mapper: FelineMapper,
};

export const cat: OperationParameter = {
  parameterPath: "cat",
  mapper: CatMapper,
};

export const kitten: OperationParameter = {
  parameterPath: "kitten",
  mapper: KittenMapper,
};

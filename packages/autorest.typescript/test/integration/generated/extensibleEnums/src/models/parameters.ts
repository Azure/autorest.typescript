// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationParameter, OperationURLParameter } from "@azure/core-client";
import { PetDef as PetDefMapper } from "../models/mappers";

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

export const petId: OperationURLParameter = {
  parameterPath: "petId",
  mapper: {
    serializedName: "petId",
    required: true,
    type: {
      name: "String",
    },
  },
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

export const petParam: OperationParameter = {
  parameterPath: ["options", "petParam"],
  mapper: PetDefMapper,
};

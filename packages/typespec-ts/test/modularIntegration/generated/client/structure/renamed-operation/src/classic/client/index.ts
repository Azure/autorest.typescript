// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../api/RenamedOperationContext.js";
import {
  ClientStructureOperations,
  getClientStructureOperations,
} from "./structure/index.js";

export interface ClientOperations {
  structure: ClientStructureOperations;
  structure: ClientStructureOperations;
}

export function getClientOperations(context: ServiceContext): ClientOperations {
  return {
    structure: getClientStructureOperations(context),
    structure: getClientStructureOperations(context),
  };
}

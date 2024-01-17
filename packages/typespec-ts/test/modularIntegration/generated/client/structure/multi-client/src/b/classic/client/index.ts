// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClientStructureOperations } from "../../../a/classic/client/structure/index.js";
import { ClientStructureOperations } from "../../../a/index.js";
import { ServiceContext } from "../../api/BContext.js";

export interface ClientOperations {
  structure: ClientStructureOperations;
}

export function getClientOperations(context: ServiceContext): ClientOperations {
  return {
    structure: getClientStructureOperations(context),
  };
}

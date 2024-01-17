// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../../../../api/BContext.js";
import {
  renamedTwo,
  renamedFour,
  renamedSix,
} from "../../../../../api/client/structure/multiClient/clientB/index.js";
import {
  ClientStructureMultiClientClientBRenamedTwoOptions,
  ClientStructureMultiClientClientBRenamedFourOptions,
  ClientStructureMultiClientClientBRenamedSixOptions,
} from "../../../../../models/options.js";

export interface ClientStructureMultiClientClientBOperations {
  renamedTwo: (
    options?: ClientStructureMultiClientClientBRenamedTwoOptions,
  ) => Promise<void>;
  renamedFour: (
    options?: ClientStructureMultiClientClientBRenamedFourOptions,
  ) => Promise<void>;
  renamedSix: (
    options?: ClientStructureMultiClientClientBRenamedSixOptions,
  ) => Promise<void>;
}

export function getClientStructureMultiClientClientB(context: ServiceContext) {
  return {
    renamedTwo: (
      options?: ClientStructureMultiClientClientBRenamedTwoOptions,
    ) => renamedTwo(context, options),
    renamedFour: (
      options?: ClientStructureMultiClientClientBRenamedFourOptions,
    ) => renamedFour(context, options),
    renamedSix: (
      options?: ClientStructureMultiClientClientBRenamedSixOptions,
    ) => renamedSix(context, options),
  };
}

export function getClientStructureMultiClientClientBOperations(
  context: ServiceContext,
): ClientStructureMultiClientClientBOperations {
  return {
    ...getClientStructureMultiClientClientB(context),
  };
}

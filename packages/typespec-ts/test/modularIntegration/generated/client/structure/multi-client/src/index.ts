// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export { AClient, AClientOptions } from "./a/AClient.js";
export {
  ClientType,
  ClientStructureMultiClientClientARenamedOneOptions,
  ClientStructureMultiClientClientARenamedThreeOptions,
  ClientStructureMultiClientClientARenamedFiveOptions,
} from "./a/models/index.js";
export {
  ClientOperations,
  ClientStructureOperations,
  ClientStructureMultiClientOperations,
  ClientStructureMultiClientClientAOperations,
} from "./a/classic/index.js";
export { BClient, BClientOptions } from "./b/BClient.js";
export {
  ClientType as BClientClientType,
  ClientStructureMultiClientClientBRenamedTwoOptions,
  ClientStructureMultiClientClientBRenamedFourOptions,
  ClientStructureMultiClientClientBRenamedSixOptions,
} from "./b/models/index.js";
export {
  ClientOperations as BClientClientOperations,
  ClientStructureOperations as BClientClientStructureOperations,
  ClientStructureMultiClientOperations as BClientClientStructureMultiClientOperations,
  ClientStructureMultiClientClientBOperations,
} from "./b/classic/index.js";

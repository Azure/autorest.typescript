// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export { FooClient } from "./fooClient.js";
export type { A } from "./models/index.js";
export type { BA } from "./models/b/index.js";
export type { BEA } from "./models/b/e/index.js";
export type {
  YDataSourceProperties,
  YDataSourcePropertiesUnion,
  YConnectorType,
} from "./models/y/index.js";
export type {
  YDataverseDataverseSourceConnectorProperties,
  YDataverseDataverseEventPosition,
} from "./models/y/dataverse/index.js";
export type {
  YDataverseV2DataverseSourceConnectorV2Properties,
  YDataverseV2DataverseEventPosition,
} from "./models/y/dataverseV2/index.js";
export type { FooClientOptionalParams, Op1OptionalParams } from "./api/index.js";
export type {
  BCOperations,
  BECOperations,
  BEOperations,
  BOperations,
  DOperations,
  YOperations,
  YTestOperationsOperations,
} from "./classic/index.js";
export { RestError, isRestError } from "@azure/core-rest-pipeline";

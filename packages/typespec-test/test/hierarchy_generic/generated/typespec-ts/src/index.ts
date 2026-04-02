// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export { FooClient } from "./fooClient.js";
export type { A } from "./models/index.js";
export type { BA } from "./models/b/index.js";
export type {
  YDataSourceProperties,
  YDataSourcePropertiesUnion,
  YConnectorType,
} from "./models/y/index.js";
export type { BEA } from "./models/b/e/index.js";
export type {
  YDataverseDataverseSourceConnectorProperties,
  YDataverseDataverseEventPosition,
} from "./models/y/dataverse/index.js";
export type {
  YDataverseV2DataverseSourceConnectorV2Properties,
  YDataverseV2DataverseEventPosition,
} from "./models/y/dataverseV2/index.js";
export type { FooClientOptionalParams, Op1OptionalParams } from "./api/index.js";
export type { BOp1OptionalParams } from "./api/b/index.js";
export type { DOp1OptionalParams } from "./api/d/index.js";
export type { BCOp1OptionalParams } from "./api/b/c/index.js";
export type {
  YTestOperationsTestDataverseV2OptionalParams,
  YTestOperationsTestDataverseOptionalParams,
} from "./api/y/testOperations/index.js";
export type { BECOp1OptionalParams } from "./api/b/e/c/index.js";
export type {
  BOperations,
  DOperations,
  YOperations,
  BCOperations,
  BEOperations,
  YTestOperationsOperations,
  BECOperations,
} from "./classic/index.js";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  removeNodes,
  replacePoolProperties,
  stopPoolResize,
  resizePool,
  evaluatePoolAutoScale,
  enablePoolAutoScale,
  disablePoolAutoScale,
  updatePool,
  getPool,
  poolExists,
  deletePool,
  listPools,
  createPool,
  listPoolUsageMetrics,
} from "./operations.js";
export {
  RemoveNodesOptionalParams,
  ReplacePoolPropertiesOptionalParams,
  StopPoolResizeOptionalParams,
  ResizePoolOptionalParams,
  EvaluatePoolAutoScaleOptionalParams,
  EnablePoolAutoScaleOptionalParams,
  DisablePoolAutoScaleOptionalParams,
  UpdatePoolOptionalParams,
  GetPoolOptionalParams,
  PoolExistsOptionalParams,
  DeletePoolOptionalParams,
  ListPoolsOptionalParams,
  CreatePoolOptionalParams,
  ListPoolUsageMetricsOptionalParams,
} from "./options.js";
export { createPools, PoolsContext, PoolsOptionalParams } from "./poolsContext.js";

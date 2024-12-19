// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RadiologyInsightsModelConfiguration } from "../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface InferRadiologyInsightsOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Configuration affecting the Radiology Insights model's inference. */
  configuration?: RadiologyInsightsModelConfiguration;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  repeatabilityRequestId?: string;
  /** Specifies the date and time at which the request was first created. */
  repeatabilityFirstSent?: Date;
  /** Body parameter's content type. Known values are application/json */
  contentType?: "application/json";
}

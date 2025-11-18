// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../logger.js";
import { APIVersion } from "../models/models.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";
import { KeyCredential } from "@azure/core-auth";

/**
 * The Anomaly Detector API detects anomalies automatically in time series data.
 * It supports both a stateless detection mode and a
 * stateful detection mode. In stateless mode, there are three functionalities. Entire
 * Detect is for detecting the whole series, with the model trained by the time series.
 * Last Detect is for detecting the last point, with the model trained by points before.
 * ChangePoint Detect is for detecting trend changes in the time series. In stateful
 * mode, the user can store time series. The stored time series will be used for
 * detection anomalies. In this mode, the user can still use the preceding three
 * functionalities by only giving a time range without preparing time series on the
 * client side. Besides the preceding three functionalities, the stateful model
 * provides group-based detection and labeling services. By using the labeling
 * service, the user can provide labels for each detection result. These labels will be
 * used for retuning or regenerating detection models. Inconsistency detection is
 * a kind of group-based detection that finds inconsistencies in
 * a set of time series. By using the anomaly detector service, business customers can
 * discover incidents and establish a logic flow for root cause analysis.
 */
export interface AnomalyDetectorContext extends Client {
  /** Api Version */
  apiVersion: APIVersion;
}

/** Optional parameters for the client. */
export interface AnomalyDetectorClientOptionalParams extends ClientOptions {
  /** Api Version */
  apiVersion?: string;
}

/**
 * The Anomaly Detector API detects anomalies automatically in time series data.
 * It supports both a stateless detection mode and a
 * stateful detection mode. In stateless mode, there are three functionalities. Entire
 * Detect is for detecting the whole series, with the model trained by the time series.
 * Last Detect is for detecting the last point, with the model trained by points before.
 * ChangePoint Detect is for detecting trend changes in the time series. In stateful
 * mode, the user can store time series. The stored time series will be used for
 * detection anomalies. In this mode, the user can still use the preceding three
 * functionalities by only giving a time range without preparing time series on the
 * client side. Besides the preceding three functionalities, the stateful model
 * provides group-based detection and labeling services. By using the labeling
 * service, the user can provide labels for each detection result. These labels will be
 * used for retuning or regenerating detection models. Inconsistency detection is
 * a kind of group-based detection that finds inconsistencies in
 * a set of time series. By using the anomaly detector service, business customers can
 * discover incidents and establish a logic flow for root cause analysis.
 */
export function createAnomalyDetector(
  endpointParam: string,
  credential: KeyCredential,
  options: AnomalyDetectorClientOptionalParams = {},
): AnomalyDetectorContext {
  const apiVersion = options.apiVersion ?? "v1.1";
  const endpointUrl = options.endpoint ?? `${endpointParam}/anomalydetector/${apiVersion}`;
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-ai-anomaly-detector/1.0.0-beta.1`;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api ${userAgentInfo}`
    : `azsdk-js-api ${userAgentInfo}`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
    credentials: {
      apiKeyHeaderName: options.credentials?.apiKeyHeaderName ?? "Ocp-Apim-Subscription-Key",
    },
  };
  const clientContext = getClient(endpointUrl, credential, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  return { ...clientContext, apiVersion } as AnomalyDetectorContext;
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createAnomalyDetector,
  AnomalyDetectorContext,
  AnomalyDetectorClientOptionalParams,
} from "./api/index.js";
import {
  MultivariateOperations,
  _getMultivariateOperations,
} from "./classic/multivariate/index.js";
import {
  UnivariateOperations,
  _getUnivariateOperations,
} from "./classic/univariate/index.js";
import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { AnomalyDetectorClientOptionalParams } from "./api/anomalyDetectorContext.js";

export class AnomalyDetectorClient {
  private _client: AnomalyDetectorContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

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
  constructor(
    endpointParam: string,
    credential: KeyCredential,
    options: AnomalyDetectorClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createAnomalyDetector(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.multivariate = _getMultivariateOperations(this._client);
    this.univariate = _getUnivariateOperations(this._client);
  }

  /** The operation groups for multivariate */
  public readonly multivariate: MultivariateOperations;
  /** The operation groups for univariate */
  public readonly univariate: UnivariateOperations;
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getUnivariateOperations,
  UnivariateOperations,
} from "./classic/univariate/index.js";
import {
  getMultivariateOperations,
  MultivariateOperations,
} from "./classic/multivariate/index.js";
import {
  createAnomalyDetector,
  AnomalyDetectorClientOptions,
  AnomalyDetectorContext,
} from "./api/index.js";

export { AnomalyDetectorClientOptions } from "./api/AnomalyDetectorContext.js";

export class AnomalyDetectorClient {
  private _client: AnomalyDetectorContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /**
   * The Anomaly Detector API detects anomalies automatically in time series data.
   * It supports two kinds of mode, one is for stateless using, another is for
   * stateful using. In stateless mode, there are three functionalities. Entire
   * Detect is for detecting the whole series with model trained by the time series,
   * Last Detect is detecting last point with model trained by points before.
   * ChangePoint Detect is for detecting trend changes in time series. In stateful
   * mode, user can store time series, the stored time series will be used for
   * detection anomalies. Under this mode, user can still use the above three
   * functionalities by only giving a time range without preparing time series in
   * client side. Besides the above three functionalities, stateful model also
   * provide group based detection and labeling service. By leveraging labeling
   * service user can provide labels for each detection result, these labels will be
   * used for retuning or regenerating detection models. Inconsistency detection is
   * a kind of group based detection, this detection will find inconsistency ones in
   * a set of time series. By using anomaly detector service, business customers can
   * discover incidents and establish a logic flow for root cause analysis.
   */
  constructor(
    endpoint: string,
    credential: KeyCredential,
    options: AnomalyDetectorClientOptions = {},
  ) {
    this._client = createAnomalyDetector(endpoint, credential, options);
    this.pipeline = this._client.pipeline;
    this.univariate = getUnivariateOperations(this._client);
    this.multivariate = getMultivariateOperations(this._client);
  }

  /** The operation groups for Univariate */
  public readonly univariate: UnivariateOperations;
  /** The operation groups for Multivariate */
  public readonly multivariate: MultivariateOperations;
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createUnivariate, UnivariateContext, UnivariateOptionalParams } from "./api/index.js";
import {
  UnivariateUnivariateDetectionOptions,
  UnivariateUnivariateEntireDetectionResult,
  UnivariateUnivariateLastDetectionResult,
  UnivariateUnivariateChangePointDetectionOptions,
  UnivariateUnivariateChangePointDetectionResult,
} from "../models/univariate/models.js";
import {
  detectUnivariateChangePoint,
  detectUnivariateLastPoint,
  detectUnivariateEntireSeries,
} from "./api/operations.js";
import {
  DetectUnivariateChangePointOptionalParams,
  DetectUnivariateLastPointOptionalParams,
  DetectUnivariateEntireSeriesOptionalParams,
} from "./api/options.js";
import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { UnivariateOptionalParams } from "./api/univariateContext.js";

export class Univariate {
  private _client: UnivariateContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential,
    options: UnivariateOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createUnivariate(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Evaluate change point score of every series point */
  detectUnivariateChangePoint(
    options: UnivariateUnivariateChangePointDetectionOptions,
    optionalParams: DetectUnivariateChangePointOptionalParams = { requestOptions: {} },
  ): Promise<UnivariateUnivariateChangePointDetectionResult> {
    return detectUnivariateChangePoint(this._client, options, optionalParams);
  }

  /**
   * This operation generates a model using the points that you sent into the API,
   * and based on all data to determine whether the last point is anomalous.
   */
  detectUnivariateLastPoint(
    options: UnivariateUnivariateDetectionOptions,
    optionalParams: DetectUnivariateLastPointOptionalParams = { requestOptions: {} },
  ): Promise<UnivariateUnivariateLastDetectionResult> {
    return detectUnivariateLastPoint(this._client, options, optionalParams);
  }

  /**
   * This operation generates a model with an entire series, each point is detected
   * with the same model. With this method, points before and after a certain point
   * are used to determine whether it is an anomaly. The entire detection can give
   * user an overall status of the time series.
   */
  detectUnivariateEntireSeries(
    options: UnivariateUnivariateDetectionOptions,
    optionalParams: DetectUnivariateEntireSeriesOptionalParams = { requestOptions: {} },
  ): Promise<UnivariateUnivariateEntireDetectionResult> {
    return detectUnivariateEntireSeries(this._client, options, optionalParams);
  }
}

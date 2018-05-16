// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { HttpOperationResponse } from "../httpOperationResponse";
import * as utils from "../util/utils";
import { WebResource } from "../webResource";
import { BaseRequestPolicy, RequestPolicyCreator, RequestPolicy, RequestPolicyOptions } from "./requestPolicy";

export interface RetryData {
  retryCount: number;
  retryInterval: number;
  error?: RetryError;
}

export interface RetryError extends Error {
  message: string;
  code?: string;
  innerError?: RetryError;
}

export function exponentialRetryPolicy(retryCount?: number, retryInterval?: number, minRetryInterval?: number, maxRetryInterval?: number): RequestPolicyCreator {
  return (nextPolicy: RequestPolicy, options: RequestPolicyOptions) => {
    return new ExponentialRetryPolicy(nextPolicy, options, retryCount, retryInterval, minRetryInterval, maxRetryInterval);
  };
}

/**
 * @class
 * Instantiates a new "ExponentialRetryPolicyFilter" instance.
 *
 * @constructor
 * @param {number} retryCount        The client retry count.
 * @param {number} retryInterval     The client retry interval, in milliseconds.
 * @param {number} minRetryInterval  The minimum retry interval, in milliseconds.
 * @param {number} maxRetryInterval  The maximum retry interval, in milliseconds.
 */
export class ExponentialRetryPolicy extends BaseRequestPolicy {

  retryCount: number;
  retryInterval: number;
  minRetryInterval: number;
  maxRetryInterval: number;
  DEFAULT_CLIENT_RETRY_INTERVAL = 1000 * 30;
  DEFAULT_CLIENT_RETRY_COUNT = 3;
  DEFAULT_CLIENT_MAX_RETRY_INTERVAL = 1000 * 90;
  DEFAULT_CLIENT_MIN_RETRY_INTERVAL = 1000 * 3;

  constructor(nextPolicy: RequestPolicy, options: RequestPolicyOptions, retryCount?: number, retryInterval?: number, minRetryInterval?: number, maxRetryInterval?: number) {
    super(nextPolicy, options);
    this.retryCount = typeof retryCount === "number" ? retryCount : this.DEFAULT_CLIENT_RETRY_COUNT;
    this.retryInterval = typeof retryInterval === "number" ? retryInterval : this.DEFAULT_CLIENT_RETRY_INTERVAL;
    this.minRetryInterval = typeof minRetryInterval === "number" ? minRetryInterval : this.DEFAULT_CLIENT_MIN_RETRY_INTERVAL;
    this.maxRetryInterval = typeof maxRetryInterval === "number" ? maxRetryInterval : this.DEFAULT_CLIENT_MAX_RETRY_INTERVAL;
  }

  /**
   * Determines if the operation should be retried and how long to wait until the next retry.
   *
   * @param {number} statusCode The HTTP status code.
   * @param {RetryData} retryData  The retry data.
   * @return {boolean} True if the operation qualifies for a retry; false otherwise.
   */
  shouldRetry(statusCode: number, retryData: RetryData): boolean {
    if ((statusCode < 500 && statusCode !== 408) || statusCode === 501 || statusCode === 505) {
      return false;
    }

    let currentCount: number;
    if (!retryData) {
      throw new Error("retryData for the ExponentialRetryPolicyFilter cannot be null.");
    } else {
      currentCount = (retryData && retryData.retryCount);
    }

    return (currentCount < this.retryCount);
  }

  /**
   * Updates the retry data for the next attempt.
   *
   * @param {RetryData} retryData  The retry data.
   * @param {object} err        The operation"s error, if any.
   */
  updateRetryData(retryData?: RetryData, err?: RetryError): RetryData {
    if (!retryData) {
      retryData = {
        retryCount: 0,
        retryInterval: 0
      };
    }

    if (err) {
      if (retryData.error) {
        err.innerError = retryData.error;
      }

      retryData.error = err;
    }

    // Adjust retry count
    retryData.retryCount++;

    // Adjust retry interval
    let incrementDelta = Math.pow(2, retryData.retryCount) - 1;
    const boundedRandDelta = this.retryInterval * 0.8 +
      Math.floor(Math.random() * (this.retryInterval * 1.2 - this.retryInterval * 0.8));
    incrementDelta *= boundedRandDelta;

    retryData.retryInterval = Math.min(this.minRetryInterval + incrementDelta, this.maxRetryInterval);

    return retryData;
  }

  async retry(response: HttpOperationResponse, retryData?: RetryData, err?: RetryError): Promise<HttpOperationResponse> {
    const self = this;
    retryData = self.updateRetryData(retryData, err);
    if (self.shouldRetry(response.status, retryData)) {
      try {
        await utils.delay(retryData.retryInterval);
        const res: HttpOperationResponse = await this._nextPolicy.sendRequest(response.request);
        return self.retry(res, retryData, err);
      } catch (err) {
        return self.retry(response, retryData, err);
      }
    } else {
      if (!utils.objectIsNull(err)) {
        // If the operation failed in the end, return all errors instead of just the last one
        err = retryData.error;
        return Promise.reject(err);
      }
      return Promise.resolve(response);
    }
  }

  public async sendRequest(request: WebResource): Promise<HttpOperationResponse> {
    const response: HttpOperationResponse = await this._nextPolicy.sendRequest(request);
    return this.retry(response);
  }
}

// Licensed under the MIT License.

import {
  createStatusCodeRange,
  StatusCodeRangeContext,
  StatusCodeRangeClientOptionalParams,
} from "./api/index.js";
import {
  ErrorResponseStatusCode404OptionalParams,
  ErrorResponseStatusCodeInRangeOptionalParams,
} from "./api/options.js";
import {
  errorResponseStatusCode404,
  errorResponseStatusCodeInRange,
} from "./api/operations.js";
import { Pipeline } from "@typespec/ts-http-runtime";

export { StatusCodeRangeClientOptionalParams } from "./api/statusCodeRangeContext.js";

export class StatusCodeRangeClient {
  private _client: StatusCodeRangeContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for range of status code. */
  constructor(options: StatusCodeRangeClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createStatusCodeRange({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  errorResponseStatusCode404(
    options: ErrorResponseStatusCode404OptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return errorResponseStatusCode404(this._client, options);
  }

  errorResponseStatusCodeInRange(
    options: ErrorResponseStatusCodeInRangeOptionalParams = {
      requestOptions: {},
    },
  ): Promise<void> {
    return errorResponseStatusCodeInRange(this._client, options);
  }
}

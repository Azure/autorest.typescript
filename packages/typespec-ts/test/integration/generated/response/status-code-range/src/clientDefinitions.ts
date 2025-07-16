// Licensed under the MIT License.

import type {
  ErrorResponseStatusCodeInRangeParameters,
  ErrorResponseStatusCode404Parameters,
} from "./parameters.js";
import type {
  ErrorResponseStatusCodeInRange204Response,
  ErrorResponseStatusCodeInRangeDefaultResponse,
  ErrorResponseStatusCode404204Response,
  ErrorResponseStatusCode404DefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@typespec/ts-http-runtime";

export interface ErrorResponseStatusCodeInRange {
  get(
    options?: ErrorResponseStatusCodeInRangeParameters,
  ): StreamableMethod<ErrorResponseStatusCodeInRange204Response | ErrorResponseStatusCodeInRangeDefaultResponse>;
}

export interface ErrorResponseStatusCode404 {
  get(
    options?: ErrorResponseStatusCode404Parameters,
  ): StreamableMethod<ErrorResponseStatusCode404204Response | ErrorResponseStatusCode404DefaultResponse>;
}

export interface Routes {
  /** Resource for '/response/status-code-range/error-response-status-code-in-range' has methods for the following verbs: get */
  (path: "/response/status-code-range/error-response-status-code-in-range"): ErrorResponseStatusCodeInRange;
  /** Resource for '/response/status-code-range/error-response-status-code-404' has methods for the following verbs: get */
  (path: "/response/status-code-range/error-response-status-code-404"): ErrorResponseStatusCode404;
}

export type StatusCodeRangeClient = Client & {
  path: Routes;
};
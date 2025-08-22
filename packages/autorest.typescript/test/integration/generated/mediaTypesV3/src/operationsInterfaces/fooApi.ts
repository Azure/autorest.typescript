// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  FooApiPostSendOnDefault$binaryOptionalParams,
  FooApiPostSendOnDefault$textOptionalParams,
  FooApiPostSendOnDefaultResponse,
  FooApiPostSend$binaryOptionalParams,
  FooApiPostSend$textOptionalParams,
  FooApiPostSendResponse,
} from "../models";

/** Interface representing a FooApi. */
export interface FooApi {
  /**
   * Send payload to Foo service.
   * @param args Includes all the parameters for this operation.
   */
  postSendOnDefault(
    ...args:
      | [
          "application/octet-stream",
          coreRestPipeline.RequestBodyType,
          FooApiPostSendOnDefault$binaryOptionalParams?,
        ]
      | ["text/plain", string, FooApiPostSendOnDefault$textOptionalParams?]
  ): Promise<FooApiPostSendOnDefaultResponse>;
  /**
   * Send payload to targetted thing in Foo service.
   * @param args Includes all the parameters for this operation.
   */
  postSend(
    ...args:
      | [
          string,
          "application/octet-stream",
          coreRestPipeline.RequestBodyType,
          FooApiPostSend$binaryOptionalParams?,
        ]
      | [string, "text/plain", string, FooApiPostSend$textOptionalParams?]
  ): Promise<FooApiPostSendResponse>;
}

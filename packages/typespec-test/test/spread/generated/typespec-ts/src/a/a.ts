// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createA, AContext, AOptionalParams } from "./api/index.js";
import { test4, test3, test2, test1 } from "./api/operations.js";
import {
  Test4OptionalParams,
  Test3OptionalParams,
  Test2OptionalParams,
  Test1OptionalParams,
} from "./api/options.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { AOptionalParams } from "./api/aContext.js";

export class A {
  private _client: AContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(endpointParam: string, options: AOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createA(endpointParam, { ...options, userAgentOptions: { userAgentPrefix } });
    this.pipeline = this._client.pipeline;
  }

  test4(
    body: {
      prop: string;
    },
    options: Test4OptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return test4(this._client, body, options);
  }

  test3(
    body: {
      prop: string;
    },
    options: Test3OptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return test3(this._client, body, options);
  }

  test2(prop: string, options: Test2OptionalParams = { requestOptions: {} }): Promise<void> {
    return test2(this._client, prop, options);
  }

  test1(
    a: string,
    b: string,
    c: string,
    options: Test1OptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return test1(this._client, a, b, c, options);
  }
}

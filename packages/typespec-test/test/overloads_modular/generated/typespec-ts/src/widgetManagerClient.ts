// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooOperations, FooOperationsOptionalParams } from "./fooOperations/fooOperations.js";
import {
  createWidgetManager,
  WidgetManagerContext,
  WidgetManagerClientOptionalParams,
} from "./api/index.js";
import { KeyCredential, TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { WidgetManagerClientOptionalParams } from "./api/widgetManagerContext.js";

export class WidgetManagerClient {
  private _client: WidgetManagerContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  /** The parent client parameters that are used in the constructors. */
  private _clientParams: {
    endpointParam: string;
    credential: KeyCredential | TokenCredential;
    options: WidgetManagerClientOptionalParams;
  };

  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: WidgetManagerClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createWidgetManager(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this._clientParams = { endpointParam, credential, options };
  }

  getFooOperations(options: FooOperationsOptionalParams = {}): FooOperations {
    return new FooOperations(
      this._clientParams.endpointParam,
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
  }
}

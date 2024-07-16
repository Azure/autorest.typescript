// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  FromNoneOptionalParams,
  FromOneRequiredOptionalParams,
  FromOneOptionalOptionalParams,
} from "./models/options.js";
import {
  fromNone,
  fromOneRequired,
  fromOneOptional,
  createServiceDriven,
  ServiceDrivenClientOptionalParams,
  ServiceDrivenContext,
} from "./api/index.js";

export { ServiceDrivenClientOptionalParams } from "./api/serviceDrivenContext.js";

export class ServiceDrivenClient {
  private _client: ServiceDrivenContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test that we can grow up a service spec and service deployment into a multi-versioned service with full client support. */
  constructor(
    endpointParam: string,
    serviceDeploymentVersion: string,
    options: ServiceDrivenClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createServiceDriven(
      endpointParam,
      serviceDeploymentVersion,
      { ...options, userAgentOptions: { userAgentPrefix } },
    );
    this.pipeline = this._client.pipeline;
  }

  /** Test that currently accepts no parameters, will be updated in next spec to accept a new optional parameter as well */
  fromNone(
    options: FromNoneOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return fromNone(this._client, options);
  }

  /** Test that currently accepts one required parameter, will be updated in next spec to accept a new optional parameter as well */
  fromOneRequired(
    parameter: string,
    options: FromOneRequiredOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return fromOneRequired(this._client, parameter, options);
  }

  /** Test that currently accepts one optional parameter, will be updated in next spec to accept a new optional parameter as well */
  fromOneOptional(
    options: FromOneOptionalOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return fromOneOptional(this._client, options);
  }
}

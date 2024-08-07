// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  AddOperationOptionalParams,
  FromNoneOptionalParams,
  FromOneRequiredOptionalParams,
  FromOneOptionalOptionalParams,
} from "./models/options.js";
import {
  addOperation,
  fromNone,
  fromOneRequired,
  fromOneOptional,
  createServiceDriven,
  ServiceDrivenContext,
  ServiceDrivenClientOptionalParams,
} from "./api/index.js";

export { ServiceDrivenClientOptionalParams } from "./api/serviceDrivenContext.js";

export class ServiceDrivenClient {
  private _client: ServiceDrivenContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /**
   * Test that we can grow up a service spec and service deployment into a multi-versioned service with full client support.
   *
   * There are three concepts that should be clarified:
   * 1. Client spec version: refers to the spec that the client is generated from. 'v1' is a client generated from old.tsp and 'v2' is a client generated from main.tsp.
   * 2. Service deployment version: refers to a deployment version of the service. 'v1' represents the initial deployment of the service with a single api version. 'v2' represents the new deployment of a service with multiple api versions
   * 3. Api version: The initial deployment of the service only supports api version 'v1'. The new deployment of the service supports api versions 'v1' and 'v2'.
   *
   * We test the following configurations from this service spec:
   * - A client generated from the second service spec can call the second deployment of a service with api version v1
   * - A client generated from the second service spec can call the second deployment of a service with api version v2
   */
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

  /** Added operation */
  addOperation(
    options: AddOperationOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return addOperation(this._client, options);
  }

  /** Test that grew up from accepting no parameters to an optional input parameter */
  fromNone(
    options: FromNoneOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return fromNone(this._client, options);
  }

  /** Operation that grew up from accepting one required parameter to accepting a required parameter and an optional parameter. */
  fromOneRequired(
    parameter: string,
    options: FromOneRequiredOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return fromOneRequired(this._client, parameter, options);
  }

  /** Tests that we can grow up an operation from accepting one optional parameter to accepting two optional parameters. */
  fromOneOptional(
    options: FromOneOptionalOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return fromOneOptional(this._client, options);
  }
}

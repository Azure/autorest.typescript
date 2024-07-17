// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { ClientType } from "./models/models.js";
import { getGroupOperations, GroupOperations } from "./classic/group/index.js";
import {
  renamedOne,
  renamedThree,
  renamedFive,
  RenamedOneOptionalParams,
  RenamedThreeOptionalParams,
  RenamedFiveOptionalParams,
  createRenamedOperation,
  RenamedOperationClientOptionalParams,
  ServiceContext,
} from "./api/index.js";

export class RenamedOperationClient {
  private _client: ServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    clientParam: ClientType,
    options: RenamedOperationClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createRenamedOperation(endpointParam, clientParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.group = getGroupOperations(this._client);
  }

  renamedOne(
    options: RenamedOneOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return renamedOne(this._client, options);
  }

  renamedThree(
    options: RenamedThreeOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return renamedThree(this._client, options);
  }

  renamedFive(
    options: RenamedFiveOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return renamedFive(this._client, options);
  }

  /** The operation groups for Group */
  public readonly group: GroupOperations;
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { ClientType } from "./models/models.js";
import {
  getGroup1Operations,
  Group1Operations,
} from "./classic/group1/index.js";
import {
  getGroup2Operations,
  Group2Operations,
} from "./classic/group2/index.js";
import {
  createTwoOperationGroup,
  ServiceContext,
  TwoOperationGroupClientOptionalParams,
} from "./api/index.js";

export { TwoOperationGroupClientOptionalParams } from "./api/twoOperationGroupContext.js";

export class TwoOperationGroupClient {
  private _client: ServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    clientParam: ClientType,
    options: TwoOperationGroupClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createTwoOperationGroup(endpointParam, clientParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.group1 = getGroup1Operations(this._client);
    this.group2 = getGroup2Operations(this._client);
  }

  /** The operation groups for Group1 */
  public readonly group1: Group1Operations;
  /** The operation groups for Group2 */
  public readonly group2: Group2Operations;
}

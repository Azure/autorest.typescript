// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createActionGroups,
  ActionGroupsContext,
  ActionGroupsOptionalParams,
} from "./api/index.js";
import { ComputeActionGroup } from "../models/compute/models.js";
import { ComputeDiskActionGroup } from "../models/computeDisk/models.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import { list, get } from "./api/operations.js";
import { ListOptionalParams, GetOptionalParams } from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { ActionGroupsOptionalParams } from "./api/actionGroupsContext.js";

export class ActionGroups {
  private _client: ActionGroupsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: ActionGroupsOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createActionGroups(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** List ActionGroup resources by subscription ID */
  list(
    options: ListOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<ComputeDiskActionGroup> {
    return list(this._client, options);
  }

  /** Get a ActionGroup */
  get(
    resourceGroupName: string,
    actionGroupName: string,
    options: GetOptionalParams = { requestOptions: {} },
  ): Promise<ComputeActionGroup> {
    return get(this._client, resourceGroupName, actionGroupName, options);
  }
}

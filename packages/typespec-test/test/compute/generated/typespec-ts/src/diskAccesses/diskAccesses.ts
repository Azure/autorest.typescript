// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createDiskAccesses,
  DiskAccessesContext,
  DiskAccessesOptionalParams,
} from "./api/index.js";
import { ComputeDiskDiskAccess } from "../models/computeDisk/models.js";
import { createOrUpdate, get } from "./api/operations.js";
import { CreateOrUpdateOptionalParams, GetOptionalParams } from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { PollerLike, OperationState } from "@azure/core-lro";
import { Pipeline } from "@azure/core-rest-pipeline";

export { DiskAccessesOptionalParams } from "./api/diskAccessesContext.js";

export class DiskAccesses {
  private _client: DiskAccessesContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: DiskAccessesOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createDiskAccesses(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Creates or updates a disk access resource */
  createOrUpdate(
    resourceGroupName: string,
    diskAccessName: string,
    resource: ComputeDiskDiskAccess,
    options: CreateOrUpdateOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<ComputeDiskDiskAccess>, ComputeDiskDiskAccess> {
    return createOrUpdate(this._client, resourceGroupName, diskAccessName, resource, options);
  }

  /** Gets information about a disk access resource. */
  get(
    resourceGroupName: string,
    diskAccessName: string,
    options: GetOptionalParams = { requestOptions: {} },
  ): Promise<ComputeDiskDiskAccess> {
    return get(this._client, resourceGroupName, diskAccessName, options);
  }
}

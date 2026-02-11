// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createDisks, DisksContext, DisksOptionalParams } from "./api/index.js";
import { ComputeDiskDisk } from "../models/computeDisk/models.js";
import { createOrUpdate, get } from "./api/operations.js";
import { CreateOrUpdateOptionalParams, GetOptionalParams } from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { PollerLike, OperationState } from "@azure/core-lro";
import { Pipeline } from "@azure/core-rest-pipeline";

export { DisksOptionalParams } from "./api/disksContext.js";

export class Disks {
  private _client: DisksContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: DisksOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createDisks(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Creates or updates a disk. */
  createOrUpdate(
    resourceGroupName: string,
    diskName: string,
    resource: ComputeDiskDisk,
    options: CreateOrUpdateOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<ComputeDiskDisk>, ComputeDiskDisk> {
    return createOrUpdate(this._client, resourceGroupName, diskName, resource, options);
  }

  /** Gets information about a disk. */
  get(
    resourceGroupName: string,
    diskName: string,
    options: GetOptionalParams = { requestOptions: {} },
  ): Promise<ComputeDiskDisk> {
    return get(this._client, resourceGroupName, diskName, options);
  }
}

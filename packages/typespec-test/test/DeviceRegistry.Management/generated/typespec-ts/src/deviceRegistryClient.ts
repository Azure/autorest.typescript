// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  getOperationStatusOperations,
  OperationStatusOperations,
} from "./classic/operationStatus/index.js";
import {
  getAssetsOperations,
  AssetsOperations,
} from "./classic/assets/index.js";
import {
  getAssetEndpointProfilesOperations,
  AssetEndpointProfilesOperations,
} from "./classic/assetEndpointProfiles/index.js";
import {
  createDeviceRegistry,
  DeviceRegistryClientOptions,
  DeviceRegistryContext,
} from "./api/index.js";

export { DeviceRegistryClientOptions } from "./api/deviceRegistryContext.js";

export class DeviceRegistryClient {
  private _client: DeviceRegistryContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Microsoft.DeviceRegistry Resource Provider management API. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: DeviceRegistryClientOptions = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createDeviceRegistry(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.operations = getOperationsOperations(this._client);
    this.operationStatus = getOperationStatusOperations(
      this._client,
      subscriptionId,
    );
    this.assets = getAssetsOperations(this._client, subscriptionId);
    this.assetEndpointProfiles = getAssetEndpointProfilesOperations(
      this._client,
      subscriptionId,
    );
  }

  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for OperationStatus */
  public readonly operationStatus: OperationStatusOperations;
  /** The operation groups for Assets */
  public readonly assets: AssetsOperations;
  /** The operation groups for AssetEndpointProfiles */
  public readonly assetEndpointProfiles: AssetEndpointProfilesOperations;
}

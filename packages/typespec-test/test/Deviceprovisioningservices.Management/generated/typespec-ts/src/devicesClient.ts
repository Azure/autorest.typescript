// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createDevices,
  DevicesContext,
  DevicesClientOptionalParams,
} from "./api/index.js";
import {
  IotDpsResourceOperations,
  _getIotDpsResourceOperations,
} from "./classic/iotDpsResource/index.js";
import {
  DpsCertificateOperations,
  _getDpsCertificateOperations,
} from "./classic/dpsCertificate/index.js";
import {
  OperationsOperations,
  _getOperationsOperations,
} from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { DevicesClientOptionalParams } from "./api/devicesContext.js";

export class DevicesClient {
  private _client: DevicesContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** API for using the Azure IoT Hub Device Provisioning Service features. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: DevicesClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createDevices(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.iotDpsResource = _getIotDpsResourceOperations(this._client);
    this.dpsCertificate = _getDpsCertificateOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for iotDpsResource */
  public readonly iotDpsResource: IotDpsResourceOperations;
  /** The operation groups for dpsCertificate */
  public readonly dpsCertificate: DpsCertificateOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}

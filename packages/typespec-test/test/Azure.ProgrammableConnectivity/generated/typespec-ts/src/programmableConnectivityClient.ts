// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createProgrammableConnectivity,
  ProgrammableConnectivityContext,
  ProgrammableConnectivityClientOptionalParams,
} from "./api/index.js";
import {
  DeviceLocationOperations,
  _getDeviceLocationOperations,
} from "./classic/deviceLocation/index.js";
import {
  DeviceNetworkOperations,
  _getDeviceNetworkOperations,
} from "./classic/deviceNetwork/index.js";
import {
  NumberVerificationOperations,
  _getNumberVerificationOperations,
} from "./classic/numberVerification/index.js";
import {
  SimSwapOperations,
  _getSimSwapOperations,
} from "./classic/simSwap/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { ProgrammableConnectivityClientOptionalParams } from "./api/programmableConnectivityContext.js";

export class ProgrammableConnectivityClient {
  private _client: ProgrammableConnectivityContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure Programmable Connectivity (APC) provides a unified interface to the Network APIs of multiple Telecom Operators. Note that Operators may deprecate a Network API with less advance notice than the Azure standard, in which case APC will also deprecate that Network API. */
  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: ProgrammableConnectivityClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createProgrammableConnectivity(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.simSwap = _getSimSwapOperations(this._client);
    this.numberVerification = _getNumberVerificationOperations(this._client);
    this.deviceNetwork = _getDeviceNetworkOperations(this._client);
    this.deviceLocation = _getDeviceLocationOperations(this._client);
  }

  /** The operation groups for simSwap */
  public readonly simSwap: SimSwapOperations;
  /** The operation groups for numberVerification */
  public readonly numberVerification: NumberVerificationOperations;
  /** The operation groups for deviceNetwork */
  public readonly deviceNetwork: DeviceNetworkOperations;
  /** The operation groups for deviceLocation */
  public readonly deviceLocation: DeviceLocationOperations;
}

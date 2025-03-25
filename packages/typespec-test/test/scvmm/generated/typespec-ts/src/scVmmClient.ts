// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createScVmm,
  ScVmmContext,
  ScVmmClientOptionalParams,
} from "./api/index.js";
import {
  GuestAgentsOperations,
  _getGuestAgentsOperations,
} from "./classic/guestAgents/index.js";
import {
  VmInstanceHybridIdentityMetadatasOperations,
  _getVmInstanceHybridIdentityMetadatasOperations,
} from "./classic/vmInstanceHybridIdentityMetadatas/index.js";
import {
  VirtualMachineInstancesOperations,
  _getVirtualMachineInstancesOperations,
} from "./classic/virtualMachineInstances/index.js";
import {
  InventoryItemsOperations,
  _getInventoryItemsOperations,
} from "./classic/inventoryItems/index.js";
import {
  AvailabilitySetsOperations,
  _getAvailabilitySetsOperations,
} from "./classic/availabilitySets/index.js";
import {
  VirtualMachineTemplatesOperations,
  _getVirtualMachineTemplatesOperations,
} from "./classic/virtualMachineTemplates/index.js";
import {
  VirtualNetworksOperations,
  _getVirtualNetworksOperations,
} from "./classic/virtualNetworks/index.js";
import {
  CloudsOperations,
  _getCloudsOperations,
} from "./classic/clouds/index.js";
import {
  VmmServersOperations,
  _getVmmServersOperations,
} from "./classic/vmmServers/index.js";
import {
  OperationsOperations,
  _getOperationsOperations,
} from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { ScVmmClientOptionalParams } from "./api/scVmmContext.js";

export class ScVmmClient {
  private _client: ScVmmContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** The Microsoft.ScVmm Rest API spec. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: ScVmmClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createScVmm(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.guestAgents = _getGuestAgentsOperations(this._client);
    this.vmInstanceHybridIdentityMetadatas =
      _getVmInstanceHybridIdentityMetadatasOperations(this._client);
    this.virtualMachineInstances = _getVirtualMachineInstancesOperations(
      this._client,
    );
    this.inventoryItems = _getInventoryItemsOperations(this._client);
    this.availabilitySets = _getAvailabilitySetsOperations(this._client);
    this.virtualMachineTemplates = _getVirtualMachineTemplatesOperations(
      this._client,
    );
    this.virtualNetworks = _getVirtualNetworksOperations(this._client);
    this.clouds = _getCloudsOperations(this._client);
    this.vmmServers = _getVmmServersOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for guestAgents */
  public readonly guestAgents: GuestAgentsOperations;
  /** The operation groups for vmInstanceHybridIdentityMetadatas */
  public readonly vmInstanceHybridIdentityMetadatas: VmInstanceHybridIdentityMetadatasOperations;
  /** The operation groups for virtualMachineInstances */
  public readonly virtualMachineInstances: VirtualMachineInstancesOperations;
  /** The operation groups for inventoryItems */
  public readonly inventoryItems: InventoryItemsOperations;
  /** The operation groups for availabilitySets */
  public readonly availabilitySets: AvailabilitySetsOperations;
  /** The operation groups for virtualMachineTemplates */
  public readonly virtualMachineTemplates: VirtualMachineTemplatesOperations;
  /** The operation groups for virtualNetworks */
  public readonly virtualNetworks: VirtualNetworksOperations;
  /** The operation groups for clouds */
  public readonly clouds: CloudsOperations;
  /** The operation groups for vmmServers */
  public readonly vmmServers: VmmServersOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  getVmmServersOperations,
  VmmServersOperations,
} from "./classic/vmmServers/index.js";
import {
  getCloudsOperations,
  CloudsOperations,
} from "./classic/clouds/index.js";
import {
  getVirtualNetworksOperations,
  VirtualNetworksOperations,
} from "./classic/virtualNetworks/index.js";
import {
  getVirtualMachineTemplatesOperations,
  VirtualMachineTemplatesOperations,
} from "./classic/virtualMachineTemplates/index.js";
import {
  getAvailabilitySetsOperations,
  AvailabilitySetsOperations,
} from "./classic/availabilitySets/index.js";
import {
  getInventoryItemsOperations,
  InventoryItemsOperations,
} from "./classic/inventoryItems/index.js";
import {
  getVirtualMachineInstancesOperations,
  VirtualMachineInstancesOperations,
} from "./classic/virtualMachineInstances/index.js";
import {
  getVmInstanceHybridIdentityMetadatasOperations,
  VmInstanceHybridIdentityMetadatasOperations,
} from "./classic/vmInstanceHybridIdentityMetadatas/index.js";
import {
  getGuestAgentsOperations,
  GuestAgentsOperations,
} from "./classic/guestAgents/index.js";
import { createScVmm, ScVmmClientOptions, ScVmmContext } from "./api/index.js";

export { ScVmmClientOptions } from "./api/scVmmContext.js";

export class ScVmmClient {
  private _client: ScVmmContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** The Microsoft.ScVmm Rest API spec. */
  constructor(credential: TokenCredential, options: ScVmmClientOptions = {}) {
    this._client = createScVmm(credential, options);
    this.pipeline = this._client.pipeline;
    this.operations = getOperationsOperations(this._client);
    this.vmmServers = getVmmServersOperations(this._client);
    this.clouds = getCloudsOperations(this._client);
    this.virtualNetworks = getVirtualNetworksOperations(this._client);
    this.virtualMachineTemplates = getVirtualMachineTemplatesOperations(
      this._client,
    );
    this.availabilitySets = getAvailabilitySetsOperations(this._client);
    this.inventoryItems = getInventoryItemsOperations(this._client);
    this.virtualMachineInstances = getVirtualMachineInstancesOperations(
      this._client,
    );
    this.vmInstanceHybridIdentityMetadatas =
      getVmInstanceHybridIdentityMetadatasOperations(this._client);
    this.guestAgents = getGuestAgentsOperations(this._client);
  }

  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for VmmServers */
  public readonly vmmServers: VmmServersOperations;
  /** The operation groups for Clouds */
  public readonly clouds: CloudsOperations;
  /** The operation groups for VirtualNetworks */
  public readonly virtualNetworks: VirtualNetworksOperations;
  /** The operation groups for VirtualMachineTemplates */
  public readonly virtualMachineTemplates: VirtualMachineTemplatesOperations;
  /** The operation groups for AvailabilitySets */
  public readonly availabilitySets: AvailabilitySetsOperations;
  /** The operation groups for InventoryItems */
  public readonly inventoryItems: InventoryItemsOperations;
  /** The operation groups for VirtualMachineInstances */
  public readonly virtualMachineInstances: VirtualMachineInstancesOperations;
  /** The operation groups for VmInstanceHybridIdentityMetadatas */
  public readonly vmInstanceHybridIdentityMetadatas: VmInstanceHybridIdentityMetadatasOperations;
  /** The operation groups for GuestAgents */
  public readonly guestAgents: GuestAgentsOperations;
}

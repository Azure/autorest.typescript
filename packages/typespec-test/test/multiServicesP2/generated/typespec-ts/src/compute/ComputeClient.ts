import { createCompute, ComputeContext, ComputeClientOptionalParams } from "./api/index.js";
import { 
  ActionGroupsOperations, 
  _getActionGroupsOperations 
} from "./classic/actionGroups/index.js";
import {
  RestorePointCollectionsOperations,
  _getRestorePointCollectionsOperations,
} from "./classic/restorePointCollections/index.js";
import {
  VirtualMachinesOperations,
  _getVirtualMachinesOperations,
} from "./classic/virtualMachines/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { ComputeClientOptionalParams } from "./api/computeContext.js";

export class ComputeClient {
  private _client: ComputeContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: ComputeClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createCompute(credential, subscriptionId ?? "", {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.actionGroups = _getActionGroupsOperations(this._client);
    this.restorePointCollections = _getRestorePointCollectionsOperations(this._client);
    this.virtualMachines = _getVirtualMachinesOperations(this._client);
}

  /** The operation groups for actionGroups */
  public readonly actionGroups: ActionGroupsOperations;
  /** The operation groups for restorePointCollections */
  public readonly restorePointCollections: RestorePointCollectionsOperations;
  /** The operation groups for virtualMachines */
  public readonly virtualMachines: VirtualMachinesOperations;
}
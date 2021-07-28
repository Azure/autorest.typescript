import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { RunCommandDocumentBase, VirtualMachineRunCommandsListOptionalParams, VirtualMachineRunCommandsGetOptionalParams, VirtualMachineRunCommandsGetResponse } from "../models";
/** Interface representing a VirtualMachineRunCommands. */
export interface VirtualMachineRunCommands {
    /**
     * Lists all available run commands for a subscription in a location.
     * @param location The location upon which run commands is queried.
     * @param options The options parameters.
     */
    list(location: string, options?: VirtualMachineRunCommandsListOptionalParams): PagedAsyncIterableIterator<RunCommandDocumentBase>;
    /**
     * Gets specific run command for a subscription in a location.
     * @param location The location upon which run commands is queried.
     * @param commandId The command id.
     * @param options The options parameters.
     */
    get(location: string, commandId: string, options?: VirtualMachineRunCommandsGetOptionalParams): Promise<VirtualMachineRunCommandsGetResponse>;
}
//# sourceMappingURL=virtualMachineRunCommands.d.ts.map
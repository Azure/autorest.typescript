import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { VirtualMachineRunCommands } from "../operationsInterfaces";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { RunCommandDocumentBase, VirtualMachineRunCommandsListOptionalParams, VirtualMachineRunCommandsGetOptionalParams, VirtualMachineRunCommandsGetResponse } from "../models";
/** Class representing a VirtualMachineRunCommands. */
export declare class VirtualMachineRunCommandsImpl implements VirtualMachineRunCommands {
    private readonly client;
    /**
     * Initialize a new instance of the class VirtualMachineRunCommands class.
     * @param client Reference to the service client
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * Lists all available run commands for a subscription in a location.
     * @param location The location upon which run commands is queried.
     * @param options The options parameters.
     */
    list(location: string, options?: VirtualMachineRunCommandsListOptionalParams): PagedAsyncIterableIterator<RunCommandDocumentBase>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Lists all available run commands for a subscription in a location.
     * @param location The location upon which run commands is queried.
     * @param options The options parameters.
     */
    private _list;
    /**
     * Gets specific run command for a subscription in a location.
     * @param location The location upon which run commands is queried.
     * @param commandId The command id.
     * @param options The options parameters.
     */
    get(location: string, commandId: string, options?: VirtualMachineRunCommandsGetOptionalParams): Promise<VirtualMachineRunCommandsGetResponse>;
    /**
     * ListNext
     * @param location The location upon which run commands is queried.
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
}
//# sourceMappingURL=virtualMachineRunCommands.d.ts.map
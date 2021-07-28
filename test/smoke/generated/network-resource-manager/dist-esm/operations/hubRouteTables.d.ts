import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { HubRouteTables } from "../operationsInterfaces";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { HubRouteTable, HubRouteTablesListOptionalParams, HubRouteTablesCreateOrUpdateOptionalParams, HubRouteTablesCreateOrUpdateResponse, HubRouteTablesGetOptionalParams, HubRouteTablesGetResponse, HubRouteTablesDeleteOptionalParams } from "../models";
/** Class representing a HubRouteTables. */
export declare class HubRouteTablesImpl implements HubRouteTables {
    private readonly client;
    /**
     * Initialize a new instance of the class HubRouteTables class.
     * @param client Reference to the service client
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Retrieves the details of all RouteTables.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, virtualHubName: string, options?: HubRouteTablesListOptionalParams): PagedAsyncIterableIterator<HubRouteTable>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Creates a RouteTable resource if it doesn't exist else updates the existing RouteTable.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param routeTableName The name of the RouteTable.
     * @param routeTableParameters Parameters supplied to create or update RouteTable.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, virtualHubName: string, routeTableName: string, routeTableParameters: HubRouteTable, options?: HubRouteTablesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<HubRouteTablesCreateOrUpdateResponse>, HubRouteTablesCreateOrUpdateResponse>>;
    /**
     * Creates a RouteTable resource if it doesn't exist else updates the existing RouteTable.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param routeTableName The name of the RouteTable.
     * @param routeTableParameters Parameters supplied to create or update RouteTable.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, virtualHubName: string, routeTableName: string, routeTableParameters: HubRouteTable, options?: HubRouteTablesCreateOrUpdateOptionalParams): Promise<HubRouteTablesCreateOrUpdateResponse>;
    /**
     * Retrieves the details of a RouteTable.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param routeTableName The name of the RouteTable.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, virtualHubName: string, routeTableName: string, options?: HubRouteTablesGetOptionalParams): Promise<HubRouteTablesGetResponse>;
    /**
     * Deletes a RouteTable.
     * @param resourceGroupName The resource group name of the RouteTable.
     * @param virtualHubName The name of the VirtualHub.
     * @param routeTableName The name of the RouteTable.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, virtualHubName: string, routeTableName: string, options?: HubRouteTablesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a RouteTable.
     * @param resourceGroupName The resource group name of the RouteTable.
     * @param virtualHubName The name of the VirtualHub.
     * @param routeTableName The name of the RouteTable.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, virtualHubName: string, routeTableName: string, options?: HubRouteTablesDeleteOptionalParams): Promise<void>;
    /**
     * Retrieves the details of all RouteTables.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param options The options parameters.
     */
    private _list;
    /**
     * ListNext
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
}
//# sourceMappingURL=hubRouteTables.d.ts.map
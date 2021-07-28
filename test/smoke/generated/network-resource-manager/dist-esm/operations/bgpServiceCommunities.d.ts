import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { BgpServiceCommunities } from "../operationsInterfaces";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { BgpServiceCommunity, BgpServiceCommunitiesListOptionalParams } from "../models";
/** Class representing a BgpServiceCommunities. */
export declare class BgpServiceCommunitiesImpl implements BgpServiceCommunities {
    private readonly client;
    /**
     * Initialize a new instance of the class BgpServiceCommunities class.
     * @param client Reference to the service client
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Gets all the available bgp service communities.
     * @param options The options parameters.
     */
    list(options?: BgpServiceCommunitiesListOptionalParams): PagedAsyncIterableIterator<BgpServiceCommunity>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Gets all the available bgp service communities.
     * @param options The options parameters.
     */
    private _list;
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
}
//# sourceMappingURL=bgpServiceCommunities.d.ts.map
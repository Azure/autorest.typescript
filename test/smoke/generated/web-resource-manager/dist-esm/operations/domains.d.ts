import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Domains } from "../operationsInterfaces";
import { WebSiteManagementClientContext } from "../webSiteManagementClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { Domain, DomainsListOptionalParams, NameIdentifier, DomainRecommendationSearchParameters, DomainsListRecommendationsOptionalParams, DomainsListByResourceGroupOptionalParams, DomainOwnershipIdentifier, DomainsListOwnershipIdentifiersOptionalParams, DomainsCheckAvailabilityOptionalParams, DomainsCheckAvailabilityResponse, DomainsGetControlCenterSsoRequestOptionalParams, DomainsGetControlCenterSsoRequestResponse, DomainsGetOptionalParams, DomainsGetResponse, DomainsCreateOrUpdateOptionalParams, DomainsCreateOrUpdateResponse, DomainsDeleteOptionalParams, DomainPatchResource, DomainsUpdateOptionalParams, DomainsUpdateResponse, DomainsGetOwnershipIdentifierOptionalParams, DomainsGetOwnershipIdentifierResponse, DomainsCreateOrUpdateOwnershipIdentifierOptionalParams, DomainsCreateOrUpdateOwnershipIdentifierResponse, DomainsDeleteOwnershipIdentifierOptionalParams, DomainsUpdateOwnershipIdentifierOptionalParams, DomainsUpdateOwnershipIdentifierResponse, DomainsRenewOptionalParams } from "../models";
/** Class representing a Domains. */
export declare class DomainsImpl implements Domains {
    private readonly client;
    /**
     * Initialize a new instance of the class Domains class.
     * @param client Reference to the service client
     */
    constructor(client: WebSiteManagementClientContext);
    /**
     * Description for Get all domains in a subscription.
     * @param options The options parameters.
     */
    list(options?: DomainsListOptionalParams): PagedAsyncIterableIterator<Domain>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Description for Get domain name recommendations based on keywords.
     * @param parameters Search parameters for domain name recommendations.
     * @param options The options parameters.
     */
    listRecommendations(parameters: DomainRecommendationSearchParameters, options?: DomainsListRecommendationsOptionalParams): PagedAsyncIterableIterator<NameIdentifier>;
    private listRecommendationsPagingPage;
    private listRecommendationsPagingAll;
    /**
     * Description for Get all domains in a resource group.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: DomainsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Domain>;
    private listByResourceGroupPagingPage;
    private listByResourceGroupPagingAll;
    /**
     * Description for Lists domain ownership identifiers.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of domain.
     * @param options The options parameters.
     */
    listOwnershipIdentifiers(resourceGroupName: string, domainName: string, options?: DomainsListOwnershipIdentifiersOptionalParams): PagedAsyncIterableIterator<DomainOwnershipIdentifier>;
    private listOwnershipIdentifiersPagingPage;
    private listOwnershipIdentifiersPagingAll;
    /**
     * Description for Check if a domain is available for registration.
     * @param identifier Name of the domain.
     * @param options The options parameters.
     */
    checkAvailability(identifier: NameIdentifier, options?: DomainsCheckAvailabilityOptionalParams): Promise<DomainsCheckAvailabilityResponse>;
    /**
     * Description for Get all domains in a subscription.
     * @param options The options parameters.
     */
    private _list;
    /**
     * Description for Generate a single sign-on request for the domain management portal.
     * @param options The options parameters.
     */
    getControlCenterSsoRequest(options?: DomainsGetControlCenterSsoRequestOptionalParams): Promise<DomainsGetControlCenterSsoRequestResponse>;
    /**
     * Description for Get domain name recommendations based on keywords.
     * @param parameters Search parameters for domain name recommendations.
     * @param options The options parameters.
     */
    private _listRecommendations;
    /**
     * Description for Get all domains in a resource group.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param options The options parameters.
     */
    private _listByResourceGroup;
    /**
     * Description for Get a domain.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of the domain.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, domainName: string, options?: DomainsGetOptionalParams): Promise<DomainsGetResponse>;
    /**
     * Description for Creates or updates a domain.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of the domain.
     * @param domain Domain registration information.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, domainName: string, domain: Domain, options?: DomainsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<DomainsCreateOrUpdateResponse>, DomainsCreateOrUpdateResponse>>;
    /**
     * Description for Creates or updates a domain.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of the domain.
     * @param domain Domain registration information.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, domainName: string, domain: Domain, options?: DomainsCreateOrUpdateOptionalParams): Promise<DomainsCreateOrUpdateResponse>;
    /**
     * Description for Delete a domain.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of the domain.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, domainName: string, options?: DomainsDeleteOptionalParams): Promise<void>;
    /**
     * Description for Creates or updates a domain.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of the domain.
     * @param domain Domain registration information.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, domainName: string, domain: DomainPatchResource, options?: DomainsUpdateOptionalParams): Promise<DomainsUpdateResponse>;
    /**
     * Description for Lists domain ownership identifiers.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of domain.
     * @param options The options parameters.
     */
    private _listOwnershipIdentifiers;
    /**
     * Description for Get ownership identifier for domain
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of domain.
     * @param name Name of identifier.
     * @param options The options parameters.
     */
    getOwnershipIdentifier(resourceGroupName: string, domainName: string, name: string, options?: DomainsGetOwnershipIdentifierOptionalParams): Promise<DomainsGetOwnershipIdentifierResponse>;
    /**
     * Description for Creates an ownership identifier for a domain or updates identifier details for an
     * existing identifer
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of domain.
     * @param name Name of identifier.
     * @param domainOwnershipIdentifier A JSON representation of the domain ownership properties.
     * @param options The options parameters.
     */
    createOrUpdateOwnershipIdentifier(resourceGroupName: string, domainName: string, name: string, domainOwnershipIdentifier: DomainOwnershipIdentifier, options?: DomainsCreateOrUpdateOwnershipIdentifierOptionalParams): Promise<DomainsCreateOrUpdateOwnershipIdentifierResponse>;
    /**
     * Description for Delete ownership identifier for domain
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of domain.
     * @param name Name of identifier.
     * @param options The options parameters.
     */
    deleteOwnershipIdentifier(resourceGroupName: string, domainName: string, name: string, options?: DomainsDeleteOwnershipIdentifierOptionalParams): Promise<void>;
    /**
     * Description for Creates an ownership identifier for a domain or updates identifier details for an
     * existing identifer
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of domain.
     * @param name Name of identifier.
     * @param domainOwnershipIdentifier A JSON representation of the domain ownership properties.
     * @param options The options parameters.
     */
    updateOwnershipIdentifier(resourceGroupName: string, domainName: string, name: string, domainOwnershipIdentifier: DomainOwnershipIdentifier, options?: DomainsUpdateOwnershipIdentifierOptionalParams): Promise<DomainsUpdateOwnershipIdentifierResponse>;
    /**
     * Description for Renew a domain.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of the domain.
     * @param options The options parameters.
     */
    renew(resourceGroupName: string, domainName: string, options?: DomainsRenewOptionalParams): Promise<void>;
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
    /**
     * ListRecommendationsNext
     * @param parameters Search parameters for domain name recommendations.
     * @param nextLink The nextLink from the previous successful call to the ListRecommendations method.
     * @param options The options parameters.
     */
    private _listRecommendationsNext;
    /**
     * ListByResourceGroupNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
     * @param options The options parameters.
     */
    private _listByResourceGroupNext;
    /**
     * ListOwnershipIdentifiersNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of domain.
     * @param nextLink The nextLink from the previous successful call to the ListOwnershipIdentifiers
     *                 method.
     * @param options The options parameters.
     */
    private _listOwnershipIdentifiersNext;
}
//# sourceMappingURL=domains.d.ts.map
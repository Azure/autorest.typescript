import * as coreAuth from "@azure/core-auth";
import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AppServiceCertificateOrders, CertificateRegistrationProvider, Domains, TopLevelDomains, DomainRegistrationProvider, Certificates, DeletedWebApps, Diagnostics, Provider, Recommendations, WebApps, StaticSites, AppServiceEnvironments, AppServicePlans, ResourceHealthMetadata } from "./operationsInterfaces";
import { WebSiteManagementClientContext } from "./webSiteManagementClientContext";
import { WebSiteManagementClientOptionalParams, SourceControl, WebSiteManagementClientListSourceControlsOptionalParams, BillingMeter, WebSiteManagementClientListBillingMetersOptionalParams, GeoRegion, WebSiteManagementClientListGeoRegionsOptionalParams, Identifier, NameIdentifier, WebSiteManagementClientListSiteIdentifiersAssignedToHostNameOptionalParams, PremierAddOnOffer, WebSiteManagementClientListPremierAddOnOffersOptionalParams, WebSiteManagementClientGetPublishingUserOptionalParams, WebSiteManagementClientGetPublishingUserResponse, User, WebSiteManagementClientUpdatePublishingUserOptionalParams, WebSiteManagementClientUpdatePublishingUserResponse, WebSiteManagementClientGetSourceControlOptionalParams, WebSiteManagementClientGetSourceControlResponse, WebSiteManagementClientUpdateSourceControlOptionalParams, WebSiteManagementClientUpdateSourceControlResponse, CheckNameResourceTypes, WebSiteManagementClientCheckNameAvailabilityOptionalParams, WebSiteManagementClientCheckNameAvailabilityResponse, WebSiteManagementClientGetSubscriptionDeploymentLocationsOptionalParams, WebSiteManagementClientGetSubscriptionDeploymentLocationsResponse, WebSiteManagementClientListSkusOptionalParams, WebSiteManagementClientListSkusResponse, VnetParameters, WebSiteManagementClientVerifyHostingEnvironmentVnetOptionalParams, WebSiteManagementClientVerifyHostingEnvironmentVnetResponse, CsmMoveResourceEnvelope, WebSiteManagementClientMoveOptionalParams, ValidateRequest, WebSiteManagementClientValidateOptionalParams, WebSiteManagementClientValidateResponse, WebSiteManagementClientValidateMoveOptionalParams } from "./models";
export declare class WebSiteManagementClient extends WebSiteManagementClientContext {
    /**
     * Initializes a new instance of the WebSiteManagementClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g.
     *                       00000000-0000-0000-0000-000000000000).
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: WebSiteManagementClientOptionalParams);
    /**
     * Description for Gets the source controls available for Azure websites.
     * @param options The options parameters.
     */
    listSourceControls(options?: WebSiteManagementClientListSourceControlsOptionalParams): PagedAsyncIterableIterator<SourceControl>;
    private listSourceControlsPagingPage;
    private listSourceControlsPagingAll;
    /**
     * Description for Gets a list of meters for a given location.
     * @param options The options parameters.
     */
    listBillingMeters(options?: WebSiteManagementClientListBillingMetersOptionalParams): PagedAsyncIterableIterator<BillingMeter>;
    private listBillingMetersPagingPage;
    private listBillingMetersPagingAll;
    /**
     * Description for Get a list of available geographical regions.
     * @param options The options parameters.
     */
    listGeoRegions(options?: WebSiteManagementClientListGeoRegionsOptionalParams): PagedAsyncIterableIterator<GeoRegion>;
    private listGeoRegionsPagingPage;
    private listGeoRegionsPagingAll;
    /**
     * Description for List all apps that are assigned to a hostname.
     * @param nameIdentifier Hostname information.
     * @param options The options parameters.
     */
    listSiteIdentifiersAssignedToHostName(nameIdentifier: NameIdentifier, options?: WebSiteManagementClientListSiteIdentifiersAssignedToHostNameOptionalParams): PagedAsyncIterableIterator<Identifier>;
    private listSiteIdentifiersAssignedToHostNamePagingPage;
    private listSiteIdentifiersAssignedToHostNamePagingAll;
    /**
     * Description for List all premier add-on offers.
     * @param options The options parameters.
     */
    listPremierAddOnOffers(options?: WebSiteManagementClientListPremierAddOnOffersOptionalParams): PagedAsyncIterableIterator<PremierAddOnOffer>;
    private listPremierAddOnOffersPagingPage;
    private listPremierAddOnOffersPagingAll;
    /**
     * Description for Gets publishing user
     * @param options The options parameters.
     */
    getPublishingUser(options?: WebSiteManagementClientGetPublishingUserOptionalParams): Promise<WebSiteManagementClientGetPublishingUserResponse>;
    /**
     * Description for Updates publishing user
     * @param userDetails Details of publishing user
     * @param options The options parameters.
     */
    updatePublishingUser(userDetails: User, options?: WebSiteManagementClientUpdatePublishingUserOptionalParams): Promise<WebSiteManagementClientUpdatePublishingUserResponse>;
    /**
     * Description for Gets the source controls available for Azure websites.
     * @param options The options parameters.
     */
    private _listSourceControls;
    /**
     * Description for Gets source control token
     * @param sourceControlType Type of source control
     * @param options The options parameters.
     */
    getSourceControl(sourceControlType: string, options?: WebSiteManagementClientGetSourceControlOptionalParams): Promise<WebSiteManagementClientGetSourceControlResponse>;
    /**
     * Description for Updates source control token
     * @param sourceControlType Type of source control
     * @param requestMessage Source control token information
     * @param options The options parameters.
     */
    updateSourceControl(sourceControlType: string, requestMessage: SourceControl, options?: WebSiteManagementClientUpdateSourceControlOptionalParams): Promise<WebSiteManagementClientUpdateSourceControlResponse>;
    /**
     * Description for Gets a list of meters for a given location.
     * @param options The options parameters.
     */
    private _listBillingMeters;
    /**
     * Description for Check if a resource name is available.
     * @param name Resource name to verify.
     * @param typeParam Resource type used for verification.
     * @param options The options parameters.
     */
    checkNameAvailability(name: string, typeParam: CheckNameResourceTypes, options?: WebSiteManagementClientCheckNameAvailabilityOptionalParams): Promise<WebSiteManagementClientCheckNameAvailabilityResponse>;
    /**
     * Description for Gets list of available geo regions plus ministamps
     * @param options The options parameters.
     */
    getSubscriptionDeploymentLocations(options?: WebSiteManagementClientGetSubscriptionDeploymentLocationsOptionalParams): Promise<WebSiteManagementClientGetSubscriptionDeploymentLocationsResponse>;
    /**
     * Description for Get a list of available geographical regions.
     * @param options The options parameters.
     */
    private _listGeoRegions;
    /**
     * Description for List all apps that are assigned to a hostname.
     * @param nameIdentifier Hostname information.
     * @param options The options parameters.
     */
    private _listSiteIdentifiersAssignedToHostName;
    /**
     * Description for List all premier add-on offers.
     * @param options The options parameters.
     */
    private _listPremierAddOnOffers;
    /**
     * Description for List all SKUs.
     * @param options The options parameters.
     */
    listSkus(options?: WebSiteManagementClientListSkusOptionalParams): Promise<WebSiteManagementClientListSkusResponse>;
    /**
     * Description for Verifies if this VNET is compatible with an App Service Environment by analyzing the
     * Network Security Group rules.
     * @param parameters VNET information
     * @param options The options parameters.
     */
    verifyHostingEnvironmentVnet(parameters: VnetParameters, options?: WebSiteManagementClientVerifyHostingEnvironmentVnetOptionalParams): Promise<WebSiteManagementClientVerifyHostingEnvironmentVnetResponse>;
    /**
     * Description for Move resources between resource groups.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param moveResourceEnvelope Object that represents the resource to move.
     * @param options The options parameters.
     */
    move(resourceGroupName: string, moveResourceEnvelope: CsmMoveResourceEnvelope, options?: WebSiteManagementClientMoveOptionalParams): Promise<void>;
    /**
     * Description for Validate if a resource can be created.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param validateRequest Request with the resources to validate.
     * @param options The options parameters.
     */
    validate(resourceGroupName: string, validateRequest: ValidateRequest, options?: WebSiteManagementClientValidateOptionalParams): Promise<WebSiteManagementClientValidateResponse>;
    /**
     * Description for Validate whether a resource can be moved.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param moveResourceEnvelope Object that represents the resource to move.
     * @param options The options parameters.
     */
    validateMove(resourceGroupName: string, moveResourceEnvelope: CsmMoveResourceEnvelope, options?: WebSiteManagementClientValidateMoveOptionalParams): Promise<void>;
    /**
     * ListSourceControlsNext
     * @param nextLink The nextLink from the previous successful call to the ListSourceControls method.
     * @param options The options parameters.
     */
    private _listSourceControlsNext;
    /**
     * ListBillingMetersNext
     * @param nextLink The nextLink from the previous successful call to the ListBillingMeters method.
     * @param options The options parameters.
     */
    private _listBillingMetersNext;
    /**
     * ListGeoRegionsNext
     * @param nextLink The nextLink from the previous successful call to the ListGeoRegions method.
     * @param options The options parameters.
     */
    private _listGeoRegionsNext;
    /**
     * ListSiteIdentifiersAssignedToHostNameNext
     * @param nameIdentifier Hostname information.
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListSiteIdentifiersAssignedToHostName method.
     * @param options The options parameters.
     */
    private _listSiteIdentifiersAssignedToHostNameNext;
    /**
     * ListPremierAddOnOffersNext
     * @param nextLink The nextLink from the previous successful call to the ListPremierAddOnOffers method.
     * @param options The options parameters.
     */
    private _listPremierAddOnOffersNext;
    appServiceCertificateOrders: AppServiceCertificateOrders;
    certificateRegistrationProvider: CertificateRegistrationProvider;
    domains: Domains;
    topLevelDomains: TopLevelDomains;
    domainRegistrationProvider: DomainRegistrationProvider;
    certificates: Certificates;
    deletedWebApps: DeletedWebApps;
    diagnostics: Diagnostics;
    provider: Provider;
    recommendations: Recommendations;
    webApps: WebApps;
    staticSites: StaticSites;
    appServiceEnvironments: AppServiceEnvironments;
    appServicePlans: AppServicePlans;
    resourceHealthMetadata: ResourceHealthMetadata;
}
//# sourceMappingURL=webSiteManagementClient.d.ts.map
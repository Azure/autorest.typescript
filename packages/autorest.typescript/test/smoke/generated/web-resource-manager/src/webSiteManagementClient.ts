/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest,
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "./pagingHelper.js";
import {
  AppServiceCertificateOrdersImpl,
  CertificateOrdersDiagnosticsImpl,
  CertificateRegistrationProviderImpl,
  DomainsImpl,
  TopLevelDomainsImpl,
  DomainRegistrationProviderImpl,
  AppServiceEnvironmentsImpl,
  AppServicePlansImpl,
  CertificatesImpl,
  DeletedWebAppsImpl,
  DiagnosticsImpl,
  GlobalImpl,
  KubeEnvironmentsImpl,
  ProviderImpl,
  RecommendationsImpl,
  ResourceHealthMetadataOperationsImpl,
  StaticSitesImpl,
  WebAppsImpl,
} from "./operations/index.js";
import {
  AppServiceCertificateOrders,
  CertificateOrdersDiagnostics,
  CertificateRegistrationProvider,
  Domains,
  TopLevelDomains,
  DomainRegistrationProvider,
  AppServiceEnvironments,
  AppServicePlans,
  Certificates,
  DeletedWebApps,
  Diagnostics,
  Global,
  KubeEnvironments,
  Provider,
  Recommendations,
  ResourceHealthMetadataOperations,
  StaticSites,
  WebApps,
} from "./operationsInterfaces/index.js";
import * as Parameters from "./models/parameters.js";
import * as Mappers from "./models/mappers.js";
import {
  WebSiteManagementClientOptionalParams,
  SourceControl,
  ListSourceControlsNextOptionalParams,
  ListSourceControlsOptionalParams,
  ListSourceControlsResponse,
  BillingMeter,
  ListBillingMetersNextOptionalParams,
  ListBillingMetersOptionalParams,
  ListBillingMetersResponse,
  GeoRegion,
  ListGeoRegionsNextOptionalParams,
  ListGeoRegionsOptionalParams,
  ListGeoRegionsResponse,
  Identifier,
  NameIdentifier,
  ListSiteIdentifiersAssignedToHostNameNextOptionalParams,
  ListSiteIdentifiersAssignedToHostNameOptionalParams,
  ListSiteIdentifiersAssignedToHostNameResponse,
  PremierAddOnOffer,
  ListPremierAddOnOffersNextOptionalParams,
  ListPremierAddOnOffersOptionalParams,
  ListPremierAddOnOffersResponse,
  GetPublishingUserOptionalParams,
  GetPublishingUserResponse,
  User,
  UpdatePublishingUserOptionalParams,
  UpdatePublishingUserResponse,
  GetSourceControlOptionalParams,
  GetSourceControlResponse,
  UpdateSourceControlOptionalParams,
  UpdateSourceControlResponse,
  CheckNameResourceTypes,
  CheckNameAvailabilityOptionalParams,
  CheckNameAvailabilityResponse,
  GetSubscriptionDeploymentLocationsOptionalParams,
  GetSubscriptionDeploymentLocationsResponse,
  ListSkusOptionalParams,
  ListSkusResponse,
  VnetParameters,
  VerifyHostingEnvironmentVnetOptionalParams,
  VerifyHostingEnvironmentVnetResponse,
  CsmMoveResourceEnvelope,
  MoveOptionalParams,
  ValidateRequest,
  ValidateOptionalParams,
  ValidateOperationResponse,
  ValidateMoveOptionalParams,
  ListSourceControlsNextResponse,
  ListBillingMetersNextResponse,
  ListGeoRegionsNextResponse,
  ListSiteIdentifiersAssignedToHostNameNextResponse,
  ListPremierAddOnOffersNextResponse,
} from "./models/index.js";

/// <reference lib="esnext.asynciterable" />
export class WebSiteManagementClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId?: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the WebSiteManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g.
   *                       00000000-0000-0000-0000-000000000000).
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: WebSiteManagementClientOptionalParams,
  );
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: WebSiteManagementClientOptionalParams,
  );
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionIdOrOptions?: WebSiteManagementClientOptionalParams | string,
    options?: WebSiteManagementClientOptionalParams,
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }

    let subscriptionId: string | undefined;

    if (typeof subscriptionIdOrOptions === "string") {
      subscriptionId = subscriptionIdOrOptions;
    } else if (typeof subscriptionIdOrOptions === "object") {
      options = subscriptionIdOrOptions;
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: WebSiteManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials,
    };

    const packageDetails = `azsdk-js-web-resource-manager/1.0.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix,
      },
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com",
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-02-01";
    this.appServiceCertificateOrders = new AppServiceCertificateOrdersImpl(
      this,
    );
    this.certificateOrdersDiagnostics = new CertificateOrdersDiagnosticsImpl(
      this,
    );
    this.certificateRegistrationProvider =
      new CertificateRegistrationProviderImpl(this);
    this.domains = new DomainsImpl(this);
    this.topLevelDomains = new TopLevelDomainsImpl(this);
    this.domainRegistrationProvider = new DomainRegistrationProviderImpl(this);
    this.appServiceEnvironments = new AppServiceEnvironmentsImpl(this);
    this.appServicePlans = new AppServicePlansImpl(this);
    this.certificates = new CertificatesImpl(this);
    this.deletedWebApps = new DeletedWebAppsImpl(this);
    this.diagnostics = new DiagnosticsImpl(this);
    this.global = new GlobalImpl(this);
    this.kubeEnvironments = new KubeEnvironmentsImpl(this);
    this.provider = new ProviderImpl(this);
    this.recommendations = new RecommendationsImpl(this);
    this.resourceHealthMetadataOperations =
      new ResourceHealthMetadataOperationsImpl(this);
    this.staticSites = new StaticSitesImpl(this);
    this.webApps = new WebAppsImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest,
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      },
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  /**
   * Description for Gets the source controls available for Azure websites.
   * @param options The options parameters.
   */
  public listSourceControls(
    options?: ListSourceControlsOptionalParams,
  ): PagedAsyncIterableIterator<SourceControl> {
    const iter = this.listSourceControlsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listSourceControlsPagingPage(options, settings);
      },
    };
  }

  private async *listSourceControlsPagingPage(
    options?: ListSourceControlsOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<SourceControl[]> {
    let result: ListSourceControlsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listSourceControls(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listSourceControlsNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listSourceControlsPagingAll(
    options?: ListSourceControlsOptionalParams,
  ): AsyncIterableIterator<SourceControl> {
    for await (const page of this.listSourceControlsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Description for Gets a list of meters for a given location.
   * @param options The options parameters.
   */
  public listBillingMeters(
    options?: ListBillingMetersOptionalParams,
  ): PagedAsyncIterableIterator<BillingMeter> {
    const iter = this.listBillingMetersPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listBillingMetersPagingPage(options, settings);
      },
    };
  }

  private async *listBillingMetersPagingPage(
    options?: ListBillingMetersOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<BillingMeter[]> {
    let result: ListBillingMetersResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBillingMeters(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBillingMetersNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBillingMetersPagingAll(
    options?: ListBillingMetersOptionalParams,
  ): AsyncIterableIterator<BillingMeter> {
    for await (const page of this.listBillingMetersPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Description for Get a list of available geographical regions.
   * @param options The options parameters.
   */
  public listGeoRegions(
    options?: ListGeoRegionsOptionalParams,
  ): PagedAsyncIterableIterator<GeoRegion> {
    const iter = this.listGeoRegionsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listGeoRegionsPagingPage(options, settings);
      },
    };
  }

  private async *listGeoRegionsPagingPage(
    options?: ListGeoRegionsOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<GeoRegion[]> {
    let result: ListGeoRegionsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listGeoRegions(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listGeoRegionsNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listGeoRegionsPagingAll(
    options?: ListGeoRegionsOptionalParams,
  ): AsyncIterableIterator<GeoRegion> {
    for await (const page of this.listGeoRegionsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Description for List all apps that are assigned to a hostname.
   * @param nameIdentifier Hostname information.
   * @param options The options parameters.
   */
  public listSiteIdentifiersAssignedToHostName(
    nameIdentifier: NameIdentifier,
    options?: ListSiteIdentifiersAssignedToHostNameOptionalParams,
  ): PagedAsyncIterableIterator<Identifier> {
    const iter = this.listSiteIdentifiersAssignedToHostNamePagingAll(
      nameIdentifier,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listSiteIdentifiersAssignedToHostNamePagingPage(
          nameIdentifier,
          options,
          settings,
        );
      },
    };
  }

  private async *listSiteIdentifiersAssignedToHostNamePagingPage(
    nameIdentifier: NameIdentifier,
    options?: ListSiteIdentifiersAssignedToHostNameOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Identifier[]> {
    let result: ListSiteIdentifiersAssignedToHostNameResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listSiteIdentifiersAssignedToHostName(
        nameIdentifier,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listSiteIdentifiersAssignedToHostNameNext(
        nameIdentifier,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listSiteIdentifiersAssignedToHostNamePagingAll(
    nameIdentifier: NameIdentifier,
    options?: ListSiteIdentifiersAssignedToHostNameOptionalParams,
  ): AsyncIterableIterator<Identifier> {
    for await (const page of this.listSiteIdentifiersAssignedToHostNamePagingPage(
      nameIdentifier,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Description for List all premier add-on offers.
   * @param options The options parameters.
   */
  public listPremierAddOnOffers(
    options?: ListPremierAddOnOffersOptionalParams,
  ): PagedAsyncIterableIterator<PremierAddOnOffer> {
    const iter = this.listPremierAddOnOffersPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPremierAddOnOffersPagingPage(options, settings);
      },
    };
  }

  private async *listPremierAddOnOffersPagingPage(
    options?: ListPremierAddOnOffersOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PremierAddOnOffer[]> {
    let result: ListPremierAddOnOffersResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listPremierAddOnOffers(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listPremierAddOnOffersNext(
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPremierAddOnOffersPagingAll(
    options?: ListPremierAddOnOffersOptionalParams,
  ): AsyncIterableIterator<PremierAddOnOffer> {
    for await (const page of this.listPremierAddOnOffersPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Description for Gets publishing user
   * @param options The options parameters.
   */
  getPublishingUser(
    options?: GetPublishingUserOptionalParams,
  ): Promise<GetPublishingUserResponse> {
    return this.sendOperationRequest(
      { options },
      getPublishingUserOperationSpec,
    );
  }

  /**
   * Description for Updates publishing user
   * @param userDetails Details of publishing user
   * @param options The options parameters.
   */
  updatePublishingUser(
    userDetails: User,
    options?: UpdatePublishingUserOptionalParams,
  ): Promise<UpdatePublishingUserResponse> {
    return this.sendOperationRequest(
      { userDetails, options },
      updatePublishingUserOperationSpec,
    );
  }

  /**
   * Description for Gets the source controls available for Azure websites.
   * @param options The options parameters.
   */
  private _listSourceControls(
    options?: ListSourceControlsOptionalParams,
  ): Promise<ListSourceControlsResponse> {
    return this.sendOperationRequest(
      { options },
      listSourceControlsOperationSpec,
    );
  }

  /**
   * Description for Gets source control token
   * @param sourceControlType Type of source control
   * @param options The options parameters.
   */
  getSourceControl(
    sourceControlType: string,
    options?: GetSourceControlOptionalParams,
  ): Promise<GetSourceControlResponse> {
    return this.sendOperationRequest(
      { sourceControlType, options },
      getSourceControlOperationSpec,
    );
  }

  /**
   * Description for Updates source control token
   * @param sourceControlType Type of source control
   * @param requestMessage Source control token information
   * @param options The options parameters.
   */
  updateSourceControl(
    sourceControlType: string,
    requestMessage: SourceControl,
    options?: UpdateSourceControlOptionalParams,
  ): Promise<UpdateSourceControlResponse> {
    return this.sendOperationRequest(
      { sourceControlType, requestMessage, options },
      updateSourceControlOperationSpec,
    );
  }

  /**
   * Description for Gets a list of meters for a given location.
   * @param options The options parameters.
   */
  private _listBillingMeters(
    options?: ListBillingMetersOptionalParams,
  ): Promise<ListBillingMetersResponse> {
    return this.sendOperationRequest(
      { options },
      listBillingMetersOperationSpec,
    );
  }

  /**
   * Description for Check if a resource name is available.
   * @param name Resource name to verify.
   * @param typeParam Resource type used for verification.
   * @param options The options parameters.
   */
  checkNameAvailability(
    name: string,
    typeParam: CheckNameResourceTypes,
    options?: CheckNameAvailabilityOptionalParams,
  ): Promise<CheckNameAvailabilityResponse> {
    return this.sendOperationRequest(
      { name, typeParam, options },
      checkNameAvailabilityOperationSpec,
    );
  }

  /**
   * Description for Gets list of available geo regions plus ministamps
   * @param options The options parameters.
   */
  getSubscriptionDeploymentLocations(
    options?: GetSubscriptionDeploymentLocationsOptionalParams,
  ): Promise<GetSubscriptionDeploymentLocationsResponse> {
    return this.sendOperationRequest(
      { options },
      getSubscriptionDeploymentLocationsOperationSpec,
    );
  }

  /**
   * Description for Get a list of available geographical regions.
   * @param options The options parameters.
   */
  private _listGeoRegions(
    options?: ListGeoRegionsOptionalParams,
  ): Promise<ListGeoRegionsResponse> {
    return this.sendOperationRequest({ options }, listGeoRegionsOperationSpec);
  }

  /**
   * Description for List all apps that are assigned to a hostname.
   * @param nameIdentifier Hostname information.
   * @param options The options parameters.
   */
  private _listSiteIdentifiersAssignedToHostName(
    nameIdentifier: NameIdentifier,
    options?: ListSiteIdentifiersAssignedToHostNameOptionalParams,
  ): Promise<ListSiteIdentifiersAssignedToHostNameResponse> {
    return this.sendOperationRequest(
      { nameIdentifier, options },
      listSiteIdentifiersAssignedToHostNameOperationSpec,
    );
  }

  /**
   * Description for List all premier add-on offers.
   * @param options The options parameters.
   */
  private _listPremierAddOnOffers(
    options?: ListPremierAddOnOffersOptionalParams,
  ): Promise<ListPremierAddOnOffersResponse> {
    return this.sendOperationRequest(
      { options },
      listPremierAddOnOffersOperationSpec,
    );
  }

  /**
   * Description for List all SKUs.
   * @param options The options parameters.
   */
  listSkus(options?: ListSkusOptionalParams): Promise<ListSkusResponse> {
    return this.sendOperationRequest({ options }, listSkusOperationSpec);
  }

  /**
   * Description for Verifies if this VNET is compatible with an App Service Environment by analyzing the
   * Network Security Group rules.
   * @param parameters VNET information
   * @param options The options parameters.
   */
  verifyHostingEnvironmentVnet(
    parameters: VnetParameters,
    options?: VerifyHostingEnvironmentVnetOptionalParams,
  ): Promise<VerifyHostingEnvironmentVnetResponse> {
    return this.sendOperationRequest(
      { parameters, options },
      verifyHostingEnvironmentVnetOperationSpec,
    );
  }

  /**
   * Description for Move resources between resource groups.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param moveResourceEnvelope Object that represents the resource to move.
   * @param options The options parameters.
   */
  move(
    resourceGroupName: string,
    moveResourceEnvelope: CsmMoveResourceEnvelope,
    options?: MoveOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { resourceGroupName, moveResourceEnvelope, options },
      moveOperationSpec,
    );
  }

  /**
   * Description for Validate if a resource can be created.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param validateRequest Request with the resources to validate.
   * @param options The options parameters.
   */
  validate(
    resourceGroupName: string,
    validateRequest: ValidateRequest,
    options?: ValidateOptionalParams,
  ): Promise<ValidateOperationResponse> {
    return this.sendOperationRequest(
      { resourceGroupName, validateRequest, options },
      validateOperationSpec,
    );
  }

  /**
   * Description for Validate whether a resource can be moved.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param moveResourceEnvelope Object that represents the resource to move.
   * @param options The options parameters.
   */
  validateMove(
    resourceGroupName: string,
    moveResourceEnvelope: CsmMoveResourceEnvelope,
    options?: ValidateMoveOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { resourceGroupName, moveResourceEnvelope, options },
      validateMoveOperationSpec,
    );
  }

  /**
   * ListSourceControlsNext
   * @param nextLink The nextLink from the previous successful call to the ListSourceControls method.
   * @param options The options parameters.
   */
  private _listSourceControlsNext(
    nextLink: string,
    options?: ListSourceControlsNextOptionalParams,
  ): Promise<ListSourceControlsNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      listSourceControlsNextOperationSpec,
    );
  }

  /**
   * ListBillingMetersNext
   * @param nextLink The nextLink from the previous successful call to the ListBillingMeters method.
   * @param options The options parameters.
   */
  private _listBillingMetersNext(
    nextLink: string,
    options?: ListBillingMetersNextOptionalParams,
  ): Promise<ListBillingMetersNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      listBillingMetersNextOperationSpec,
    );
  }

  /**
   * ListGeoRegionsNext
   * @param nextLink The nextLink from the previous successful call to the ListGeoRegions method.
   * @param options The options parameters.
   */
  private _listGeoRegionsNext(
    nextLink: string,
    options?: ListGeoRegionsNextOptionalParams,
  ): Promise<ListGeoRegionsNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      listGeoRegionsNextOperationSpec,
    );
  }

  /**
   * ListSiteIdentifiersAssignedToHostNameNext
   * @param nameIdentifier Hostname information.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListSiteIdentifiersAssignedToHostName method.
   * @param options The options parameters.
   */
  private _listSiteIdentifiersAssignedToHostNameNext(
    nameIdentifier: NameIdentifier,
    nextLink: string,
    options?: ListSiteIdentifiersAssignedToHostNameNextOptionalParams,
  ): Promise<ListSiteIdentifiersAssignedToHostNameNextResponse> {
    return this.sendOperationRequest(
      { nameIdentifier, nextLink, options },
      listSiteIdentifiersAssignedToHostNameNextOperationSpec,
    );
  }

  /**
   * ListPremierAddOnOffersNext
   * @param nextLink The nextLink from the previous successful call to the ListPremierAddOnOffers method.
   * @param options The options parameters.
   */
  private _listPremierAddOnOffersNext(
    nextLink: string,
    options?: ListPremierAddOnOffersNextOptionalParams,
  ): Promise<ListPremierAddOnOffersNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      listPremierAddOnOffersNextOperationSpec,
    );
  }

  appServiceCertificateOrders: AppServiceCertificateOrders;
  certificateOrdersDiagnostics: CertificateOrdersDiagnostics;
  certificateRegistrationProvider: CertificateRegistrationProvider;
  domains: Domains;
  topLevelDomains: TopLevelDomains;
  domainRegistrationProvider: DomainRegistrationProvider;
  appServiceEnvironments: AppServiceEnvironments;
  appServicePlans: AppServicePlans;
  certificates: Certificates;
  deletedWebApps: DeletedWebApps;
  diagnostics: Diagnostics;
  global: Global;
  kubeEnvironments: KubeEnvironments;
  provider: Provider;
  recommendations: Recommendations;
  resourceHealthMetadataOperations: ResourceHealthMetadataOperations;
  staticSites: StaticSites;
  webApps: WebApps;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getPublishingUserOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Web/publishingUsers/web",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.User,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const updatePublishingUserOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Web/publishingUsers/web",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.User,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  requestBody: Parameters.userDetails,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listSourceControlsOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Web/sourcecontrols",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SourceControlCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const getSourceControlOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Web/sourcecontrols/{sourceControlType}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SourceControl,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.sourceControlType],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateSourceControlOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Web/sourcecontrols/{sourceControlType}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SourceControl,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  requestBody: Parameters.requestMessage,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.sourceControlType],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listBillingMetersOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Web/billingMeters",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingMeterCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.billingLocation,
    Parameters.osType,
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Web/checknameavailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceNameAvailability,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  requestBody: {
    parameterPath: {
      name: ["name"],
      typeParam: ["typeParam"],
      isFqdn: ["options", "isFqdn"],
    },
    mapper: { ...Mappers.ResourceNameAvailabilityRequest, required: true },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getSubscriptionDeploymentLocationsOperationSpec: coreClient.OperationSpec =
  {
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Web/deploymentLocations",
    httpMethod: "GET",
    responses: {
      200: {
        bodyMapper: Mappers.DeploymentLocations,
      },
      default: {
        bodyMapper: Mappers.DefaultErrorResponse,
      },
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.$host, Parameters.subscriptionId],
    headerParameters: [Parameters.accept],
    serializer,
  };
const listGeoRegionsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Web/geoRegions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GeoRegionCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.sku,
    Parameters.linuxWorkersEnabled,
    Parameters.xenonWorkersEnabled,
    Parameters.linuxDynamicWorkersEnabled,
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listSiteIdentifiersAssignedToHostNameOperationSpec: coreClient.OperationSpec =
  {
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Web/listSitesAssignedToHostName",
    httpMethod: "POST",
    responses: {
      200: {
        bodyMapper: Mappers.IdentifierCollection,
      },
      default: {
        bodyMapper: Mappers.DefaultErrorResponse,
      },
    },
    requestBody: Parameters.nameIdentifier,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.$host, Parameters.subscriptionId],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer,
  };
const listPremierAddOnOffersOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Web/premieraddonoffers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PremierAddOnOfferCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listSkusOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Web/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SkuInfos,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const verifyHostingEnvironmentVnetOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Web/verifyHostingEnvironmentVnet",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.VnetValidationFailureDetails,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const moveOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/moveResources",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  requestBody: Parameters.moveResourceEnvelope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const validateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/validate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ValidateResponse,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  requestBody: Parameters.validateRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const validateMoveOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/validateMoveResources",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  requestBody: Parameters.moveResourceEnvelope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listSourceControlsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SourceControlCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBillingMetersNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingMeterCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listGeoRegionsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GeoRegionCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listSiteIdentifiersAssignedToHostNameNextOperationSpec: coreClient.OperationSpec =
  {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
      200: {
        bodyMapper: Mappers.IdentifierCollection,
      },
      default: {
        bodyMapper: Mappers.DefaultErrorResponse,
      },
    },
    urlParameters: [
      Parameters.$host,
      Parameters.subscriptionId,
      Parameters.nextLink,
    ],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer,
  };
const listPremierAddOnOffersNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PremierAddOnOfferCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};

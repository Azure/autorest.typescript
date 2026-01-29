// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createWebSiteManagement,
  WebSiteManagementContext,
  WebSiteManagementClientOptionalParams,
} from "./api/index.js";
import {
  move,
  verifyHostingEnvironmentVnet,
  listSkus,
  listPremierAddOnOffers,
  regionalCheckNameAvailability,
  listGeoRegions,
  listCustomHostNameSites,
  checkNameAvailability,
  listBillingMeters,
  listAseRegions,
  getSubscriptionDeploymentLocations,
  validate,
  validateMove,
} from "./api/operations.js";
import {
  MoveOptionalParams,
  VerifyHostingEnvironmentVnetOptionalParams,
  ListSkusOptionalParams,
  ListPremierAddOnOffersOptionalParams,
  RegionalCheckNameAvailabilityOptionalParams,
  ListGeoRegionsOptionalParams,
  ListCustomHostNameSitesOptionalParams,
  CheckNameAvailabilityOptionalParams,
  ListBillingMetersOptionalParams,
  ListAseRegionsOptionalParams,
  GetSubscriptionDeploymentLocationsOptionalParams,
  ValidateOptionalParams,
  ValidateMoveOptionalParams,
} from "./api/options.js";
import {
  AppServiceEnvironmentResourcesOperations,
  _getAppServiceEnvironmentResourcesOperations,
} from "./classic/appServiceEnvironmentResources/index.js";
import {
  GetUsagesInLocationOperationGroupOperations,
  _getGetUsagesInLocationOperationGroupOperations,
} from "./classic/getUsagesInLocationOperationGroup/index.js";
import {
  GlobalOperationGroupOperations,
  _getGlobalOperationGroupOperations,
} from "./classic/globalOperationGroup/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import {
  ProviderOperationGroupOperations,
  _getProviderOperationGroupOperations,
} from "./classic/providerOperationGroup/index.js";
import {
  RecommendationsOperationGroupOperations,
  _getRecommendationsOperationGroupOperations,
} from "./classic/recommendationsOperationGroup/index.js";
import {
  StaticSitesOperationGroupOperations,
  _getStaticSitesOperationGroupOperations,
} from "./classic/staticSitesOperationGroup/index.js";
import {
  CsmMoveResourceEnvelope,
  ValidateRequest,
  ValidateResponse,
  DeploymentLocations,
  GeoRegion,
  AseRegion,
  BillingMeter,
  ResourceNameAvailabilityRequest,
  ResourceNameAvailability,
  CustomHostnameSites,
  DnlResourceNameAvailabilityRequest,
  DnlResourceNameAvailability,
  PremierAddOnOffer,
  SkuInfos,
  VnetParameters,
  VnetValidationFailureDetails,
} from "./models/models.js";
import { PagedAsyncIterableIterator } from "./static-helpers/pagingHelpers.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { WebSiteManagementClientOptionalParams } from "./api/webSiteManagementContext.js";

export class WebSiteManagementClient {
  private _client: WebSiteManagementContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(credential: TokenCredential, options?: WebSiteManagementClientOptionalParams);
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options?: WebSiteManagementClientOptionalParams,
  );
  constructor(
    credential: TokenCredential,
    subscriptionIdOrOptions?: string | WebSiteManagementClientOptionalParams,
    options?: WebSiteManagementClientOptionalParams,
  ) {
    let subscriptionId: string | undefined;

    if (typeof subscriptionIdOrOptions === "string") {
      subscriptionId = subscriptionIdOrOptions;
    } else if (typeof subscriptionIdOrOptions === "object") {
      options = subscriptionIdOrOptions;
    }

    options = options ?? {};
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createWebSiteManagement(credential, subscriptionId ?? "", {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.staticSitesOperationGroup = _getStaticSitesOperationGroupOperations(this._client);
    this.getUsagesInLocationOperationGroup = _getGetUsagesInLocationOperationGroupOperations(
      this._client,
    );
    this.recommendationsOperationGroup = _getRecommendationsOperationGroupOperations(this._client);
    this.providerOperationGroup = _getProviderOperationGroupOperations(this._client);
    this.globalOperationGroup = _getGlobalOperationGroupOperations(this._client);
    this.appServiceEnvironmentResources = _getAppServiceEnvironmentResourcesOperations(
      this._client,
    );
    this.operations = _getOperationsOperations(this._client);
  }

  /** Description for Move resources between resource groups. */
  move(
    resourceGroupName: string,
    moveResourceEnvelope: CsmMoveResourceEnvelope,
    options: MoveOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return move(this._client, resourceGroupName, moveResourceEnvelope, options);
  }

  /** Description for Verifies if this VNET is compatible with an App Service Environment by analyzing the Network Security Group rules. */
  verifyHostingEnvironmentVnet(
    body: VnetParameters,
    options: VerifyHostingEnvironmentVnetOptionalParams = { requestOptions: {} },
  ): Promise<VnetValidationFailureDetails> {
    return verifyHostingEnvironmentVnet(this._client, body, options);
  }

  /** Description for List all SKUs. */
  listSkus(options: ListSkusOptionalParams = { requestOptions: {} }): Promise<SkuInfos> {
    return listSkus(this._client, options);
  }

  /** Description for List all premier add-on offers. */
  listPremierAddOnOffers(
    options: ListPremierAddOnOffersOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<PremierAddOnOffer> {
    return listPremierAddOnOffers(this._client, options);
  }

  /** Check if a resource name is available for DNL sites. */
  regionalCheckNameAvailability(
    location: string,
    body: DnlResourceNameAvailabilityRequest,
    options: RegionalCheckNameAvailabilityOptionalParams = { requestOptions: {} },
  ): Promise<DnlResourceNameAvailability> {
    return regionalCheckNameAvailability(this._client, location, body, options);
  }

  /** Description for Get a list of available geographical regions. */
  listGeoRegions(
    options: ListGeoRegionsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<GeoRegion> {
    return listGeoRegions(this._client, options);
  }

  /** Get custom hostnames under this subscription */
  listCustomHostNameSites(
    options: ListCustomHostNameSitesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<CustomHostnameSites> {
    return listCustomHostNameSites(this._client, options);
  }

  /** Description for Check if a resource name is available. */
  checkNameAvailability(
    body: ResourceNameAvailabilityRequest,
    options: CheckNameAvailabilityOptionalParams = { requestOptions: {} },
  ): Promise<ResourceNameAvailability> {
    return checkNameAvailability(this._client, body, options);
  }

  /** Description for Gets a list of meters for a given location. */
  listBillingMeters(
    options: ListBillingMetersOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<BillingMeter> {
    return listBillingMeters(this._client, options);
  }

  /** Description for get a list of available ASE regions and its supported Skus. */
  listAseRegions(
    options: ListAseRegionsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<AseRegion> {
    return listAseRegions(this._client, options);
  }

  /** Description for Gets list of available geo regions plus ministamps */
  getSubscriptionDeploymentLocations(
    options: GetSubscriptionDeploymentLocationsOptionalParams = { requestOptions: {} },
  ): Promise<DeploymentLocations> {
    return getSubscriptionDeploymentLocations(this._client, options);
  }

  /** Description for Validate if a resource can be created. */
  validate(
    resourceGroupName: string,
    validateRequest: ValidateRequest,
    options: ValidateOptionalParams = { requestOptions: {} },
  ): Promise<ValidateResponse> {
    return validate(this._client, resourceGroupName, validateRequest, options);
  }

  /** Description for Validate whether a resource can be moved. */
  validateMove(
    resourceGroupName: string,
    moveResourceEnvelope: CsmMoveResourceEnvelope,
    options: ValidateMoveOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return validateMove(this._client, resourceGroupName, moveResourceEnvelope, options);
  }

  /** The operation groups for staticSitesOperationGroup */
  public readonly staticSitesOperationGroup: StaticSitesOperationGroupOperations;
  /** The operation groups for getUsagesInLocationOperationGroup */
  public readonly getUsagesInLocationOperationGroup: GetUsagesInLocationOperationGroupOperations;
  /** The operation groups for recommendationsOperationGroup */
  public readonly recommendationsOperationGroup: RecommendationsOperationGroupOperations;
  /** The operation groups for providerOperationGroup */
  public readonly providerOperationGroup: ProviderOperationGroupOperations;
  /** The operation groups for globalOperationGroup */
  public readonly globalOperationGroup: GlobalOperationGroupOperations;
  /** The operation groups for appServiceEnvironmentResources */
  public readonly appServiceEnvironmentResources: AppServiceEnvironmentResourcesOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}

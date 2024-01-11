// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ApplicationDataListByFarmerIdParameters,
  ApplicationDataListParameters,
  ApplicationDataGetParameters,
  ApplicationDataCreateOrUpdateParameters,
  ApplicationDataDeleteParameters,
  AttachmentsListByFarmerIdParameters,
  AttachmentsGetParameters,
  AttachmentsCreateOrUpdateParameters,
  AttachmentsDeleteParameters,
  AttachmentsDownloadParameters,
  BoundariesListByFarmerIdParameters,
  BoundariesSearchByFarmerIdParameters,
  BoundariesListParameters,
  BoundariesSearchParameters,
  BoundariesGetCascadeDeleteJobDetailsParameters,
  BoundariesCreateCascadeDeleteJobParameters,
  BoundariesGetParameters,
  BoundariesCreateOrUpdateParameters,
  BoundariesDeleteParameters,
  BoundariesGetOverlapParameters,
  CropsListParameters,
  CropsGetParameters,
  CropsCreateOrUpdateParameters,
  CropsDeleteParameters,
  CropVarietiesListByCropIdParameters,
  CropVarietiesListParameters,
  CropVarietiesGetParameters,
  CropVarietiesCreateOrUpdateParameters,
  CropVarietiesDeleteParameters,
  FarmersListParameters,
  FarmersGetParameters,
  FarmersCreateOrUpdateParameters,
  FarmersDeleteParameters,
  FarmersGetCascadeDeleteJobDetailsParameters,
  FarmersCreateCascadeDeleteJobParameters,
  FarmOperationsCreateDataIngestionJobParameters,
  FarmOperationsGetDataIngestionJobDetailsParameters,
  FarmsListByFarmerIdParameters,
  FarmsListParameters,
  FarmsGetParameters,
  FarmsCreateOrUpdateParameters,
  FarmsDeleteParameters,
  FarmsGetCascadeDeleteJobDetailsParameters,
  FarmsCreateCascadeDeleteJobParameters,
  FieldsListByFarmerIdParameters,
  FieldsListParameters,
  FieldsGetParameters,
  FieldsCreateOrUpdateParameters,
  FieldsDeleteParameters,
  FieldsGetCascadeDeleteJobDetailsParameters,
  FieldsCreateCascadeDeleteJobParameters,
  HarvestDataListByFarmerIdParameters,
  HarvestDataListParameters,
  HarvestDataGetParameters,
  HarvestDataCreateOrUpdateParameters,
  HarvestDataDeleteParameters,
  ImageProcessingCreateRasterizeJobParameters,
  ImageProcessingGetRasterizeJobParameters,
  OAuthProvidersListParameters,
  OAuthProvidersGetParameters,
  OAuthProvidersCreateOrUpdateParameters,
  OAuthProvidersDeleteParameters,
  OAuthTokensListParameters,
  OAuthTokensGetOAuthConnectionLinkParameters,
  OAuthTokensGetCascadeDeleteJobDetailsParameters,
  OAuthTokensCreateCascadeDeleteJobParameters,
  PlantingDataListByFarmerIdParameters,
  PlantingDataListParameters,
  PlantingDataGetParameters,
  PlantingDataCreateOrUpdateParameters,
  PlantingDataDeleteParameters,
  ScenesListParameters,
  ScenesCreateSatelliteDataIngestionJobParameters,
  ScenesGetSatelliteDataIngestionJobDetailsParameters,
  ScenesDownloadParameters,
  SeasonalFieldsListByFarmerIdParameters,
  SeasonalFieldsListParameters,
  SeasonalFieldsGetParameters,
  SeasonalFieldsCreateOrUpdateParameters,
  SeasonalFieldsDeleteParameters,
  SeasonalFieldsGetCascadeDeleteJobDetailsParameters,
  SeasonalFieldsCreateCascadeDeleteJobParameters,
  SeasonsListParameters,
  SeasonsGetParameters,
  SeasonsCreateOrUpdateParameters,
  SeasonsDeleteParameters,
  TillageDataListByFarmerIdParameters,
  TillageDataListParameters,
  TillageDataGetParameters,
  TillageDataCreateOrUpdateParameters,
  TillageDataDeleteParameters,
  WeatherListParameters,
  WeatherGetDataIngestionJobDetailsParameters,
  WeatherCreateDataIngestionJobParameters,
  WeatherGetDataDeleteJobDetailsParameters,
  WeatherCreateDataDeleteJobParameters,
} from "./parameters";
import {
  ApplicationDataListByFarmerId200Response,
  ApplicationDataListByFarmerIdDefaultResponse,
  ApplicationDataList200Response,
  ApplicationDataListDefaultResponse,
  ApplicationDataGet200Response,
  ApplicationDataGetDefaultResponse,
  ApplicationDataCreateOrUpdate200Response,
  ApplicationDataCreateOrUpdate201Response,
  ApplicationDataCreateOrUpdateDefaultResponse,
  ApplicationDataDelete204Response,
  ApplicationDataDeleteDefaultResponse,
  AttachmentsListByFarmerId200Response,
  AttachmentsListByFarmerIdDefaultResponse,
  AttachmentsGet200Response,
  AttachmentsGetDefaultResponse,
  AttachmentsCreateOrUpdate200Response,
  AttachmentsCreateOrUpdate201Response,
  AttachmentsCreateOrUpdateDefaultResponse,
  AttachmentsDelete204Response,
  AttachmentsDeleteDefaultResponse,
  AttachmentsDownload200Response,
  AttachmentsDownloadDefaultResponse,
  BoundariesListByFarmerId200Response,
  BoundariesListByFarmerIdDefaultResponse,
  BoundariesSearchByFarmerId200Response,
  BoundariesSearchByFarmerIdDefaultResponse,
  BoundariesList200Response,
  BoundariesListDefaultResponse,
  BoundariesSearch200Response,
  BoundariesSearchDefaultResponse,
  BoundariesGetCascadeDeleteJobDetails200Response,
  BoundariesGetCascadeDeleteJobDetailsDefaultResponse,
  BoundariesCreateCascadeDeleteJob202Response,
  BoundariesCreateCascadeDeleteJobDefaultResponse,
  BoundariesGet200Response,
  BoundariesGetDefaultResponse,
  BoundariesCreateOrUpdate200Response,
  BoundariesCreateOrUpdate201Response,
  BoundariesCreateOrUpdateDefaultResponse,
  BoundariesDelete204Response,
  BoundariesDeleteDefaultResponse,
  BoundariesGetOverlap200Response,
  BoundariesGetOverlapDefaultResponse,
  CropsList200Response,
  CropsListDefaultResponse,
  CropsGet200Response,
  CropsGetDefaultResponse,
  CropsCreateOrUpdate200Response,
  CropsCreateOrUpdate201Response,
  CropsCreateOrUpdateDefaultResponse,
  CropsDelete204Response,
  CropsDeleteDefaultResponse,
  CropVarietiesListByCropId200Response,
  CropVarietiesListByCropIdDefaultResponse,
  CropVarietiesList200Response,
  CropVarietiesListDefaultResponse,
  CropVarietiesGet200Response,
  CropVarietiesGetDefaultResponse,
  CropVarietiesCreateOrUpdate200Response,
  CropVarietiesCreateOrUpdate201Response,
  CropVarietiesCreateOrUpdateDefaultResponse,
  CropVarietiesDelete204Response,
  CropVarietiesDeleteDefaultResponse,
  FarmersList200Response,
  FarmersListDefaultResponse,
  FarmersGet200Response,
  FarmersGetDefaultResponse,
  FarmersCreateOrUpdate200Response,
  FarmersCreateOrUpdate201Response,
  FarmersCreateOrUpdateDefaultResponse,
  FarmersDelete204Response,
  FarmersDeleteDefaultResponse,
  FarmersGetCascadeDeleteJobDetails200Response,
  FarmersGetCascadeDeleteJobDetailsDefaultResponse,
  FarmersCreateCascadeDeleteJob202Response,
  FarmersCreateCascadeDeleteJobDefaultResponse,
  FarmOperationsCreateDataIngestionJob202Response,
  FarmOperationsCreateDataIngestionJobDefaultResponse,
  FarmOperationsGetDataIngestionJobDetails200Response,
  FarmOperationsGetDataIngestionJobDetailsDefaultResponse,
  FarmsListByFarmerId200Response,
  FarmsListByFarmerIdDefaultResponse,
  FarmsList200Response,
  FarmsListDefaultResponse,
  FarmsGet200Response,
  FarmsGetDefaultResponse,
  FarmsCreateOrUpdate200Response,
  FarmsCreateOrUpdate201Response,
  FarmsCreateOrUpdateDefaultResponse,
  FarmsDelete204Response,
  FarmsDeleteDefaultResponse,
  FarmsGetCascadeDeleteJobDetails200Response,
  FarmsGetCascadeDeleteJobDetailsDefaultResponse,
  FarmsCreateCascadeDeleteJob202Response,
  FarmsCreateCascadeDeleteJobDefaultResponse,
  FieldsListByFarmerId200Response,
  FieldsListByFarmerIdDefaultResponse,
  FieldsList200Response,
  FieldsListDefaultResponse,
  FieldsGet200Response,
  FieldsGetDefaultResponse,
  FieldsCreateOrUpdate200Response,
  FieldsCreateOrUpdate201Response,
  FieldsCreateOrUpdateDefaultResponse,
  FieldsDelete204Response,
  FieldsDeleteDefaultResponse,
  FieldsGetCascadeDeleteJobDetails200Response,
  FieldsGetCascadeDeleteJobDetailsDefaultResponse,
  FieldsCreateCascadeDeleteJob202Response,
  FieldsCreateCascadeDeleteJobDefaultResponse,
  HarvestDataListByFarmerId200Response,
  HarvestDataListByFarmerIdDefaultResponse,
  HarvestDataList200Response,
  HarvestDataListDefaultResponse,
  HarvestDataGet200Response,
  HarvestDataGetDefaultResponse,
  HarvestDataCreateOrUpdate200Response,
  HarvestDataCreateOrUpdate201Response,
  HarvestDataCreateOrUpdateDefaultResponse,
  HarvestDataDelete204Response,
  HarvestDataDeleteDefaultResponse,
  ImageProcessingCreateRasterizeJob202Response,
  ImageProcessingCreateRasterizeJobDefaultResponse,
  ImageProcessingGetRasterizeJob200Response,
  OAuthProvidersList200Response,
  OAuthProvidersListDefaultResponse,
  OAuthProvidersGet200Response,
  OAuthProvidersGetDefaultResponse,
  OAuthProvidersCreateOrUpdate200Response,
  OAuthProvidersCreateOrUpdate201Response,
  OAuthProvidersCreateOrUpdateDefaultResponse,
  OAuthProvidersDelete204Response,
  OAuthProvidersDeleteDefaultResponse,
  OAuthTokensList200Response,
  OAuthTokensListDefaultResponse,
  OAuthTokensGetOAuthConnectionLink200Response,
  OAuthTokensGetOAuthConnectionLinkDefaultResponse,
  OAuthTokensGetCascadeDeleteJobDetails200Response,
  OAuthTokensGetCascadeDeleteJobDetailsDefaultResponse,
  OAuthTokensCreateCascadeDeleteJob202Response,
  OAuthTokensCreateCascadeDeleteJobDefaultResponse,
  PlantingDataListByFarmerId200Response,
  PlantingDataListByFarmerIdDefaultResponse,
  PlantingDataList200Response,
  PlantingDataListDefaultResponse,
  PlantingDataGet200Response,
  PlantingDataGetDefaultResponse,
  PlantingDataCreateOrUpdate200Response,
  PlantingDataCreateOrUpdate201Response,
  PlantingDataCreateOrUpdateDefaultResponse,
  PlantingDataDelete204Response,
  PlantingDataDeleteDefaultResponse,
  ScenesList200Response,
  ScenesListDefaultResponse,
  ScenesCreateSatelliteDataIngestionJob202Response,
  ScenesCreateSatelliteDataIngestionJobDefaultResponse,
  ScenesGetSatelliteDataIngestionJobDetails200Response,
  ScenesGetSatelliteDataIngestionJobDetailsDefaultResponse,
  ScenesDownload200Response,
  ScenesDownloadDefaultResponse,
  SeasonalFieldsListByFarmerId200Response,
  SeasonalFieldsListByFarmerIdDefaultResponse,
  SeasonalFieldsList200Response,
  SeasonalFieldsListDefaultResponse,
  SeasonalFieldsGet200Response,
  SeasonalFieldsGetDefaultResponse,
  SeasonalFieldsCreateOrUpdate200Response,
  SeasonalFieldsCreateOrUpdate201Response,
  SeasonalFieldsCreateOrUpdateDefaultResponse,
  SeasonalFieldsDelete204Response,
  SeasonalFieldsDeleteDefaultResponse,
  SeasonalFieldsGetCascadeDeleteJobDetails200Response,
  SeasonalFieldsGetCascadeDeleteJobDetailsDefaultResponse,
  SeasonalFieldsCreateCascadeDeleteJob202Response,
  SeasonalFieldsCreateCascadeDeleteJobDefaultResponse,
  SeasonsList200Response,
  SeasonsListDefaultResponse,
  SeasonsGet200Response,
  SeasonsGetDefaultResponse,
  SeasonsCreateOrUpdate200Response,
  SeasonsCreateOrUpdate201Response,
  SeasonsCreateOrUpdateDefaultResponse,
  SeasonsDelete204Response,
  SeasonsDeleteDefaultResponse,
  TillageDataListByFarmerId200Response,
  TillageDataListByFarmerIdDefaultResponse,
  TillageDataList200Response,
  TillageDataListDefaultResponse,
  TillageDataGet200Response,
  TillageDataGetDefaultResponse,
  TillageDataCreateOrUpdate200Response,
  TillageDataCreateOrUpdate201Response,
  TillageDataCreateOrUpdateDefaultResponse,
  TillageDataDelete204Response,
  TillageDataDeleteDefaultResponse,
  WeatherList200Response,
  WeatherListDefaultResponse,
  WeatherGetDataIngestionJobDetails200Response,
  WeatherGetDataIngestionJobDetailsDefaultResponse,
  WeatherCreateDataIngestionJob202Response,
  WeatherCreateDataIngestionJobDefaultResponse,
  WeatherGetDataDeleteJobDetails200Response,
  WeatherGetDataDeleteJobDetailsDefaultResponse,
  WeatherCreateDataDeleteJob202Response,
  WeatherCreateDataDeleteJobDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ApplicationDataListByFarmerId {
  /** Returns a paginated list of application data resources under a particular farm. */
  get(
    options?: ApplicationDataListByFarmerIdParameters,
  ): StreamableMethod<
    | ApplicationDataListByFarmerId200Response
    | ApplicationDataListByFarmerIdDefaultResponse
  >;
}

export interface ApplicationDataList {
  /** Returns a paginated list of application data resources across all farmers. */
  get(
    options?: ApplicationDataListParameters,
  ): StreamableMethod<
    ApplicationDataList200Response | ApplicationDataListDefaultResponse
  >;
}

export interface ApplicationDataGet {
  /** Get a specified application data resource under a particular farmer. */
  get(
    options?: ApplicationDataGetParameters,
  ): StreamableMethod<
    ApplicationDataGet200Response | ApplicationDataGetDefaultResponse
  >;
  /** Creates or updates an application data resource under a particular farmer. */
  patch(
    options?: ApplicationDataCreateOrUpdateParameters,
  ): StreamableMethod<
    | ApplicationDataCreateOrUpdate200Response
    | ApplicationDataCreateOrUpdate201Response
    | ApplicationDataCreateOrUpdateDefaultResponse
  >;
  /** Deletes a specified application data resource under a particular farmer. */
  delete(
    options?: ApplicationDataDeleteParameters,
  ): StreamableMethod<
    ApplicationDataDelete204Response | ApplicationDataDeleteDefaultResponse
  >;
}

export interface AttachmentsListByFarmerId {
  /** Returns a paginated list of attachment resources under a particular farmer. */
  get(
    options?: AttachmentsListByFarmerIdParameters,
  ): StreamableMethod<
    | AttachmentsListByFarmerId200Response
    | AttachmentsListByFarmerIdDefaultResponse
  >;
}

export interface AttachmentsGet {
  /** Gets a specified attachment resource under a particular farmer. */
  get(
    options?: AttachmentsGetParameters,
  ): StreamableMethod<
    AttachmentsGet200Response | AttachmentsGetDefaultResponse
  >;
  /** Creates or updates an attachment resource under a particular farmer. */
  patch(
    options?: AttachmentsCreateOrUpdateParameters,
  ): StreamableMethod<
    | AttachmentsCreateOrUpdate200Response
    | AttachmentsCreateOrUpdate201Response
    | AttachmentsCreateOrUpdateDefaultResponse
  >;
  /** Deletes a specified attachment resource under a particular farmer. */
  delete(
    options?: AttachmentsDeleteParameters,
  ): StreamableMethod<
    AttachmentsDelete204Response | AttachmentsDeleteDefaultResponse
  >;
}

export interface AttachmentsDownload {
  /** Downloads and returns attachment as response for the given input filePath. */
  get(
    options?: AttachmentsDownloadParameters,
  ): StreamableMethod<
    AttachmentsDownload200Response | AttachmentsDownloadDefaultResponse
  >;
}

export interface BoundariesListByFarmerId {
  /** Returns a paginated list of boundary resources under a particular farmer. */
  get(
    options?: BoundariesListByFarmerIdParameters,
  ): StreamableMethod<
    | BoundariesListByFarmerId200Response
    | BoundariesListByFarmerIdDefaultResponse
  >;
  /** Search for boundaries by fields and intersecting geometry. */
  post(
    options?: BoundariesSearchByFarmerIdParameters,
  ): StreamableMethod<
    | BoundariesSearchByFarmerId200Response
    | BoundariesSearchByFarmerIdDefaultResponse
  >;
}

export interface BoundariesList {
  /** Returns a paginated list of boundary resources across all farmers. */
  get(
    options?: BoundariesListParameters,
  ): StreamableMethod<
    BoundariesList200Response | BoundariesListDefaultResponse
  >;
  /** Search for boundaries across all farmers by fields and intersecting geometry. */
  post(
    options?: BoundariesSearchParameters,
  ): StreamableMethod<
    BoundariesSearch200Response | BoundariesSearchDefaultResponse
  >;
}

export interface BoundariesGetCascadeDeleteJobDetails {
  /** Get cascade delete job for specified boundary. */
  get(
    options?: BoundariesGetCascadeDeleteJobDetailsParameters,
  ): StreamableMethod<
    | BoundariesGetCascadeDeleteJobDetails200Response
    | BoundariesGetCascadeDeleteJobDetailsDefaultResponse
  >;
  /** Create a cascade delete job for specified boundary. */
  put(
    options: BoundariesCreateCascadeDeleteJobParameters,
  ): StreamableMethod<
    | BoundariesCreateCascadeDeleteJob202Response
    | BoundariesCreateCascadeDeleteJobDefaultResponse
  >;
}

export interface BoundariesGet {
  /** Gets a specified boundary resource under a particular farmer. */
  get(
    options?: BoundariesGetParameters,
  ): StreamableMethod<BoundariesGet200Response | BoundariesGetDefaultResponse>;
  /** Creates or updates a boundary resource. */
  patch(
    options?: BoundariesCreateOrUpdateParameters,
  ): StreamableMethod<
    | BoundariesCreateOrUpdate200Response
    | BoundariesCreateOrUpdate201Response
    | BoundariesCreateOrUpdateDefaultResponse
  >;
  /** Deletes a specified boundary resource under a particular farmer. */
  delete(
    options?: BoundariesDeleteParameters,
  ): StreamableMethod<
    BoundariesDelete204Response | BoundariesDeleteDefaultResponse
  >;
}

export interface BoundariesGetOverlap {
  /** Returns overlapping acreage between two boundary Ids. */
  get(
    options: BoundariesGetOverlapParameters,
  ): StreamableMethod<
    BoundariesGetOverlap200Response | BoundariesGetOverlapDefaultResponse
  >;
}

export interface CropsList {
  /** Returns a paginated list of crop resources. */
  get(
    options?: CropsListParameters,
  ): StreamableMethod<CropsList200Response | CropsListDefaultResponse>;
}

export interface CropsGet {
  /** Gets a specified crop resource. */
  get(
    options?: CropsGetParameters,
  ): StreamableMethod<CropsGet200Response | CropsGetDefaultResponse>;
  /** Creates or updates a crop resource. */
  patch(
    options?: CropsCreateOrUpdateParameters,
  ): StreamableMethod<
    | CropsCreateOrUpdate200Response
    | CropsCreateOrUpdate201Response
    | CropsCreateOrUpdateDefaultResponse
  >;
  /** Deletes Crop for given crop id. */
  delete(
    options?: CropsDeleteParameters,
  ): StreamableMethod<CropsDelete204Response | CropsDeleteDefaultResponse>;
}

export interface CropVarietiesListByCropId {
  /** Returns a paginated list of crop variety resources under a particular crop. */
  get(
    options?: CropVarietiesListByCropIdParameters,
  ): StreamableMethod<
    | CropVarietiesListByCropId200Response
    | CropVarietiesListByCropIdDefaultResponse
  >;
}

export interface CropVarietiesList {
  /** Returns a paginated list of crop variety resources across all crops. */
  get(
    options?: CropVarietiesListParameters,
  ): StreamableMethod<
    CropVarietiesList200Response | CropVarietiesListDefaultResponse
  >;
}

export interface CropVarietiesGet {
  /** Gets a specified crop variety resource under a particular crop. */
  get(
    options?: CropVarietiesGetParameters,
  ): StreamableMethod<
    CropVarietiesGet200Response | CropVarietiesGetDefaultResponse
  >;
  /** Creates or updates a crop variety resource. */
  patch(
    options?: CropVarietiesCreateOrUpdateParameters,
  ): StreamableMethod<
    | CropVarietiesCreateOrUpdate200Response
    | CropVarietiesCreateOrUpdate201Response
    | CropVarietiesCreateOrUpdateDefaultResponse
  >;
  /** Deletes a specified crop variety resource under a particular crop. */
  delete(
    options?: CropVarietiesDeleteParameters,
  ): StreamableMethod<
    CropVarietiesDelete204Response | CropVarietiesDeleteDefaultResponse
  >;
}

export interface FarmersList {
  /** Returns a paginated list of farmer resources. */
  get(
    options?: FarmersListParameters,
  ): StreamableMethod<FarmersList200Response | FarmersListDefaultResponse>;
}

export interface FarmersGet {
  /** Gets a specified farmer resource. */
  get(
    options?: FarmersGetParameters,
  ): StreamableMethod<FarmersGet200Response | FarmersGetDefaultResponse>;
  /** Creates or updates a farmer resource. */
  patch(
    options?: FarmersCreateOrUpdateParameters,
  ): StreamableMethod<
    | FarmersCreateOrUpdate200Response
    | FarmersCreateOrUpdate201Response
    | FarmersCreateOrUpdateDefaultResponse
  >;
  /** Deletes a specified farmer resource. */
  delete(
    options?: FarmersDeleteParameters,
  ): StreamableMethod<FarmersDelete204Response | FarmersDeleteDefaultResponse>;
}

export interface FarmersGetCascadeDeleteJobDetails {
  /** Get a cascade delete job for specified farmer. */
  get(
    options?: FarmersGetCascadeDeleteJobDetailsParameters,
  ): StreamableMethod<
    | FarmersGetCascadeDeleteJobDetails200Response
    | FarmersGetCascadeDeleteJobDetailsDefaultResponse
  >;
  /** Create a cascade delete job for specified farmer. */
  put(
    options: FarmersCreateCascadeDeleteJobParameters,
  ): StreamableMethod<
    | FarmersCreateCascadeDeleteJob202Response
    | FarmersCreateCascadeDeleteJobDefaultResponse
  >;
}

export interface FarmOperationsCreateDataIngestionJob {
  /** Create a farm operation data ingestion job. */
  put(
    options?: FarmOperationsCreateDataIngestionJobParameters,
  ): StreamableMethod<
    | FarmOperationsCreateDataIngestionJob202Response
    | FarmOperationsCreateDataIngestionJobDefaultResponse
  >;
  /** Get a farm operation data ingestion job. */
  get(
    options?: FarmOperationsGetDataIngestionJobDetailsParameters,
  ): StreamableMethod<
    | FarmOperationsGetDataIngestionJobDetails200Response
    | FarmOperationsGetDataIngestionJobDetailsDefaultResponse
  >;
}

export interface FarmsListByFarmerId {
  /** Returns a paginated list of farm resources under a particular farmer. */
  get(
    options?: FarmsListByFarmerIdParameters,
  ): StreamableMethod<
    FarmsListByFarmerId200Response | FarmsListByFarmerIdDefaultResponse
  >;
}

export interface FarmsList {
  /** Returns a paginated list of farm resources across all farmers. */
  get(
    options?: FarmsListParameters,
  ): StreamableMethod<FarmsList200Response | FarmsListDefaultResponse>;
}

export interface FarmsGet {
  /** Gets a specified farm resource under a particular farmer. */
  get(
    options?: FarmsGetParameters,
  ): StreamableMethod<FarmsGet200Response | FarmsGetDefaultResponse>;
  /** Creates or updates a farm resource under a particular farmer. */
  patch(
    options?: FarmsCreateOrUpdateParameters,
  ): StreamableMethod<
    | FarmsCreateOrUpdate200Response
    | FarmsCreateOrUpdate201Response
    | FarmsCreateOrUpdateDefaultResponse
  >;
  /** Deletes a specified farm resource under a particular farmer. */
  delete(
    options?: FarmsDeleteParameters,
  ): StreamableMethod<FarmsDelete204Response | FarmsDeleteDefaultResponse>;
}

export interface FarmsGetCascadeDeleteJobDetails {
  /** Get a cascade delete job for specified farm. */
  get(
    options?: FarmsGetCascadeDeleteJobDetailsParameters,
  ): StreamableMethod<
    | FarmsGetCascadeDeleteJobDetails200Response
    | FarmsGetCascadeDeleteJobDetailsDefaultResponse
  >;
  /** Create a cascade delete job for specified farm. */
  put(
    options: FarmsCreateCascadeDeleteJobParameters,
  ): StreamableMethod<
    | FarmsCreateCascadeDeleteJob202Response
    | FarmsCreateCascadeDeleteJobDefaultResponse
  >;
}

export interface FieldsListByFarmerId {
  /** Returns a paginated list of field resources under a particular farmer. */
  get(
    options?: FieldsListByFarmerIdParameters,
  ): StreamableMethod<
    FieldsListByFarmerId200Response | FieldsListByFarmerIdDefaultResponse
  >;
}

export interface FieldsList {
  /** Returns a paginated list of field resources across all farmers. */
  get(
    options?: FieldsListParameters,
  ): StreamableMethod<FieldsList200Response | FieldsListDefaultResponse>;
}

export interface FieldsGet {
  /** Gets a specified field resource under a particular farmer. */
  get(
    options?: FieldsGetParameters,
  ): StreamableMethod<FieldsGet200Response | FieldsGetDefaultResponse>;
  /** Creates or Updates a field resource under a particular farmer. */
  patch(
    options?: FieldsCreateOrUpdateParameters,
  ): StreamableMethod<
    | FieldsCreateOrUpdate200Response
    | FieldsCreateOrUpdate201Response
    | FieldsCreateOrUpdateDefaultResponse
  >;
  /** Deletes a specified field resource under a particular farmer. */
  delete(
    options?: FieldsDeleteParameters,
  ): StreamableMethod<FieldsDelete204Response | FieldsDeleteDefaultResponse>;
}

export interface FieldsGetCascadeDeleteJobDetails {
  /** Get a cascade delete job for specified field. */
  get(
    options?: FieldsGetCascadeDeleteJobDetailsParameters,
  ): StreamableMethod<
    | FieldsGetCascadeDeleteJobDetails200Response
    | FieldsGetCascadeDeleteJobDetailsDefaultResponse
  >;
  /** Create a cascade delete job for specified field. */
  put(
    options: FieldsCreateCascadeDeleteJobParameters,
  ): StreamableMethod<
    | FieldsCreateCascadeDeleteJob202Response
    | FieldsCreateCascadeDeleteJobDefaultResponse
  >;
}

export interface HarvestDataListByFarmerId {
  /** Returns a paginated list of harvest data resources under a particular farm. */
  get(
    options?: HarvestDataListByFarmerIdParameters,
  ): StreamableMethod<
    | HarvestDataListByFarmerId200Response
    | HarvestDataListByFarmerIdDefaultResponse
  >;
}

export interface HarvestDataList {
  /** Returns a paginated list of harvest data resources across all farmers. */
  get(
    options?: HarvestDataListParameters,
  ): StreamableMethod<
    HarvestDataList200Response | HarvestDataListDefaultResponse
  >;
}

export interface HarvestDataGet {
  /** Get a specified harvest data resource under a particular farmer. */
  get(
    options?: HarvestDataGetParameters,
  ): StreamableMethod<
    HarvestDataGet200Response | HarvestDataGetDefaultResponse
  >;
  /** Creates or updates harvest data resource under a particular farmer. */
  patch(
    options?: HarvestDataCreateOrUpdateParameters,
  ): StreamableMethod<
    | HarvestDataCreateOrUpdate200Response
    | HarvestDataCreateOrUpdate201Response
    | HarvestDataCreateOrUpdateDefaultResponse
  >;
  /** Deletes a specified harvest data resource under a particular farmer. */
  delete(
    options?: HarvestDataDeleteParameters,
  ): StreamableMethod<
    HarvestDataDelete204Response | HarvestDataDeleteDefaultResponse
  >;
}

export interface ImageProcessingCreateRasterizeJob {
  /** Create a ImageProcessing Rasterize job. */
  put(
    options?: ImageProcessingCreateRasterizeJobParameters,
  ): StreamableMethod<
    | ImageProcessingCreateRasterizeJob202Response
    | ImageProcessingCreateRasterizeJobDefaultResponse
  >;
  /** Get ImageProcessing Rasterize job's details. */
  get(
    options?: ImageProcessingGetRasterizeJobParameters,
  ): StreamableMethod<ImageProcessingGetRasterizeJob200Response>;
}

export interface OAuthProvidersList {
  /** Returns a paginated list of oauthProvider resources. */
  get(
    options?: OAuthProvidersListParameters,
  ): StreamableMethod<
    OAuthProvidersList200Response | OAuthProvidersListDefaultResponse
  >;
}

export interface OAuthProvidersGet {
  /** Get a specified oauthProvider resource. */
  get(
    options?: OAuthProvidersGetParameters,
  ): StreamableMethod<
    OAuthProvidersGet200Response | OAuthProvidersGetDefaultResponse
  >;
  /** Creates or updates an oauthProvider resource. */
  patch(
    options?: OAuthProvidersCreateOrUpdateParameters,
  ): StreamableMethod<
    | OAuthProvidersCreateOrUpdate200Response
    | OAuthProvidersCreateOrUpdate201Response
    | OAuthProvidersCreateOrUpdateDefaultResponse
  >;
  /** Deletes an specified oauthProvider resource. */
  delete(
    options?: OAuthProvidersDeleteParameters,
  ): StreamableMethod<
    OAuthProvidersDelete204Response | OAuthProvidersDeleteDefaultResponse
  >;
}

export interface OAuthTokensList {
  /** Returns a list of OAuthToken documents. */
  get(
    options?: OAuthTokensListParameters,
  ): StreamableMethod<
    OAuthTokensList200Response | OAuthTokensListDefaultResponse
  >;
}

export interface OAuthTokensGetOAuthConnectionLink {
  /** Returns Connection link needed in the OAuth flow. */
  post(
    options?: OAuthTokensGetOAuthConnectionLinkParameters,
  ): StreamableMethod<
    | OAuthTokensGetOAuthConnectionLink200Response
    | OAuthTokensGetOAuthConnectionLinkDefaultResponse
  >;
}

export interface OAuthTokensGetCascadeDeleteJobDetails {
  /** Get cascade delete job details for OAuth tokens for specified job ID. */
  get(
    options?: OAuthTokensGetCascadeDeleteJobDetailsParameters,
  ): StreamableMethod<
    | OAuthTokensGetCascadeDeleteJobDetails200Response
    | OAuthTokensGetCascadeDeleteJobDetailsDefaultResponse
  >;
  /** Create a cascade delete job for OAuth tokens. */
  put(
    options: OAuthTokensCreateCascadeDeleteJobParameters,
  ): StreamableMethod<
    | OAuthTokensCreateCascadeDeleteJob202Response
    | OAuthTokensCreateCascadeDeleteJobDefaultResponse
  >;
}

export interface PlantingDataListByFarmerId {
  /** Returns a paginated list of planting data resources under a particular farm. */
  get(
    options?: PlantingDataListByFarmerIdParameters,
  ): StreamableMethod<
    | PlantingDataListByFarmerId200Response
    | PlantingDataListByFarmerIdDefaultResponse
  >;
}

export interface PlantingDataList {
  /** Returns a paginated list of planting data resources across all farmers. */
  get(
    options?: PlantingDataListParameters,
  ): StreamableMethod<
    PlantingDataList200Response | PlantingDataListDefaultResponse
  >;
}

export interface PlantingDataGet {
  /** Get a specified planting data resource under a particular farmer. */
  get(
    options?: PlantingDataGetParameters,
  ): StreamableMethod<
    PlantingDataGet200Response | PlantingDataGetDefaultResponse
  >;
  /** Creates or updates an planting data resource under a particular farmer. */
  patch(
    options?: PlantingDataCreateOrUpdateParameters,
  ): StreamableMethod<
    | PlantingDataCreateOrUpdate200Response
    | PlantingDataCreateOrUpdate201Response
    | PlantingDataCreateOrUpdateDefaultResponse
  >;
  /** Deletes a specified planting data resource under a particular farmer. */
  delete(
    options?: PlantingDataDeleteParameters,
  ): StreamableMethod<
    PlantingDataDelete204Response | PlantingDataDeleteDefaultResponse
  >;
}

export interface ScenesList {
  /** Returns a paginated list of scene resources. */
  get(
    options: ScenesListParameters,
  ): StreamableMethod<ScenesList200Response | ScenesListDefaultResponse>;
}

export interface ScenesCreateSatelliteDataIngestionJob {
  /** Create a satellite data ingestion job. */
  put(
    options?: ScenesCreateSatelliteDataIngestionJobParameters,
  ): StreamableMethod<
    | ScenesCreateSatelliteDataIngestionJob202Response
    | ScenesCreateSatelliteDataIngestionJobDefaultResponse
  >;
  /** Get a satellite data ingestion job. */
  get(
    options?: ScenesGetSatelliteDataIngestionJobDetailsParameters,
  ): StreamableMethod<
    | ScenesGetSatelliteDataIngestionJobDetails200Response
    | ScenesGetSatelliteDataIngestionJobDetailsDefaultResponse
  >;
}

export interface ScenesDownload {
  /** Downloads and returns file stream as response for the given input filePath. */
  get(
    options: ScenesDownloadParameters,
  ): StreamableMethod<
    ScenesDownload200Response | ScenesDownloadDefaultResponse
  >;
}

export interface SeasonalFieldsListByFarmerId {
  /** Returns a paginated list of seasonal field resources under a particular farmer. */
  get(
    options?: SeasonalFieldsListByFarmerIdParameters,
  ): StreamableMethod<
    | SeasonalFieldsListByFarmerId200Response
    | SeasonalFieldsListByFarmerIdDefaultResponse
  >;
}

export interface SeasonalFieldsList {
  /** Returns a paginated list of seasonal field resources across all farmers. */
  get(
    options?: SeasonalFieldsListParameters,
  ): StreamableMethod<
    SeasonalFieldsList200Response | SeasonalFieldsListDefaultResponse
  >;
}

export interface SeasonalFieldsGet {
  /** Gets a specified seasonal field resource under a particular farmer. */
  get(
    options?: SeasonalFieldsGetParameters,
  ): StreamableMethod<
    SeasonalFieldsGet200Response | SeasonalFieldsGetDefaultResponse
  >;
  /** Creates or Updates a seasonal field resource under a particular farmer. */
  patch(
    options?: SeasonalFieldsCreateOrUpdateParameters,
  ): StreamableMethod<
    | SeasonalFieldsCreateOrUpdate200Response
    | SeasonalFieldsCreateOrUpdate201Response
    | SeasonalFieldsCreateOrUpdateDefaultResponse
  >;
  /** Deletes a specified seasonal-field resource under a particular farmer. */
  delete(
    options?: SeasonalFieldsDeleteParameters,
  ): StreamableMethod<
    SeasonalFieldsDelete204Response | SeasonalFieldsDeleteDefaultResponse
  >;
}

export interface SeasonalFieldsGetCascadeDeleteJobDetails {
  /** Get cascade delete job for specified seasonal field. */
  get(
    options?: SeasonalFieldsGetCascadeDeleteJobDetailsParameters,
  ): StreamableMethod<
    | SeasonalFieldsGetCascadeDeleteJobDetails200Response
    | SeasonalFieldsGetCascadeDeleteJobDetailsDefaultResponse
  >;
  /** Create a cascade delete job for specified seasonal field. */
  put(
    options: SeasonalFieldsCreateCascadeDeleteJobParameters,
  ): StreamableMethod<
    | SeasonalFieldsCreateCascadeDeleteJob202Response
    | SeasonalFieldsCreateCascadeDeleteJobDefaultResponse
  >;
}

export interface SeasonsList {
  /** Returns a paginated list of season resources. */
  get(
    options?: SeasonsListParameters,
  ): StreamableMethod<SeasonsList200Response | SeasonsListDefaultResponse>;
}

export interface SeasonsGet {
  /** Gets a specified season resource. */
  get(
    options?: SeasonsGetParameters,
  ): StreamableMethod<SeasonsGet200Response | SeasonsGetDefaultResponse>;
  /** Creates or updates a season resource. */
  patch(
    options?: SeasonsCreateOrUpdateParameters,
  ): StreamableMethod<
    | SeasonsCreateOrUpdate200Response
    | SeasonsCreateOrUpdate201Response
    | SeasonsCreateOrUpdateDefaultResponse
  >;
  /** Deletes a specified season resource. */
  delete(
    options?: SeasonsDeleteParameters,
  ): StreamableMethod<SeasonsDelete204Response | SeasonsDeleteDefaultResponse>;
}

export interface TillageDataListByFarmerId {
  /** Returns a paginated list of tillage data resources under a particular farm. */
  get(
    options?: TillageDataListByFarmerIdParameters,
  ): StreamableMethod<
    | TillageDataListByFarmerId200Response
    | TillageDataListByFarmerIdDefaultResponse
  >;
}

export interface TillageDataList {
  /** Returns a paginated list of tillage data resources across all farmers. */
  get(
    options?: TillageDataListParameters,
  ): StreamableMethod<
    TillageDataList200Response | TillageDataListDefaultResponse
  >;
}

export interface TillageDataGet {
  /** Get a specified tillage data resource under a particular farmer. */
  get(
    options?: TillageDataGetParameters,
  ): StreamableMethod<
    TillageDataGet200Response | TillageDataGetDefaultResponse
  >;
  /** Creates or updates an tillage data resource under a particular farmer. */
  patch(
    options?: TillageDataCreateOrUpdateParameters,
  ): StreamableMethod<
    | TillageDataCreateOrUpdate200Response
    | TillageDataCreateOrUpdate201Response
    | TillageDataCreateOrUpdateDefaultResponse
  >;
  /** Deletes a specified tillage data resource under a particular farmer. */
  delete(
    options?: TillageDataDeleteParameters,
  ): StreamableMethod<
    TillageDataDelete204Response | TillageDataDeleteDefaultResponse
  >;
}

export interface WeatherList {
  /** Returns a paginated list of weather data. */
  get(
    options: WeatherListParameters,
  ): StreamableMethod<WeatherList200Response | WeatherListDefaultResponse>;
}

export interface WeatherGetDataIngestionJobDetails {
  /** Get weather ingestion job. */
  get(
    options?: WeatherGetDataIngestionJobDetailsParameters,
  ): StreamableMethod<
    | WeatherGetDataIngestionJobDetails200Response
    | WeatherGetDataIngestionJobDetailsDefaultResponse
  >;
  /** Create a weather data ingestion job. */
  put(
    options?: WeatherCreateDataIngestionJobParameters,
  ): StreamableMethod<
    | WeatherCreateDataIngestionJob202Response
    | WeatherCreateDataIngestionJobDefaultResponse
  >;
}

export interface WeatherGetDataDeleteJobDetails {
  /** Get weather data delete job. */
  get(
    options?: WeatherGetDataDeleteJobDetailsParameters,
  ): StreamableMethod<
    | WeatherGetDataDeleteJobDetails200Response
    | WeatherGetDataDeleteJobDetailsDefaultResponse
  >;
  /** Create a weather data delete job. */
  put(
    options?: WeatherCreateDataDeleteJobParameters,
  ): StreamableMethod<
    | WeatherCreateDataDeleteJob202Response
    | WeatherCreateDataDeleteJobDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/farmers/\{farmerId\}/application-data' has methods for the following verbs: get */
  (
    path: "/farmers/{farmerId}/application-data",
    farmerId: string,
  ): ApplicationDataListByFarmerId;
  /** Resource for '/application-data' has methods for the following verbs: get */
  (path: "/application-data"): ApplicationDataList;
  /** Resource for '/farmers/\{farmerId\}/application-data/\{applicationDataId\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/farmers/{farmerId}/application-data/{applicationDataId}",
    farmerId: string,
    applicationDataId: string,
  ): ApplicationDataGet;
  /** Resource for '/farmers/\{farmerId\}/attachments' has methods for the following verbs: get */
  (
    path: "/farmers/{farmerId}/attachments",
    farmerId: string,
  ): AttachmentsListByFarmerId;
  /** Resource for '/farmers/\{farmerId\}/attachments/\{attachmentId\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/farmers/{farmerId}/attachments/{attachmentId}",
    farmerId: string,
    attachmentId: string,
  ): AttachmentsGet;
  /** Resource for '/farmers/\{farmerId\}/attachments/\{attachmentId\}/file' has methods for the following verbs: get */
  (
    path: "/farmers/{farmerId}/attachments/{attachmentId}/file",
    farmerId: string,
    attachmentId: string,
  ): AttachmentsDownload;
  /** Resource for '/farmers/\{farmerId\}/boundaries' has methods for the following verbs: get, post */
  (
    path: "/farmers/{farmerId}/boundaries",
    farmerId: string,
  ): BoundariesListByFarmerId;
  /** Resource for '/boundaries' has methods for the following verbs: get, post */
  (path: "/boundaries"): BoundariesList;
  /** Resource for '/boundaries/cascade-delete/\{jobId\}' has methods for the following verbs: get, put */
  (
    path: "/boundaries/cascade-delete/{jobId}",
    jobId: string,
  ): BoundariesGetCascadeDeleteJobDetails;
  /** Resource for '/farmers/\{farmerId\}/boundaries/\{boundaryId\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/farmers/{farmerId}/boundaries/{boundaryId}",
    farmerId: string,
    boundaryId: string,
  ): BoundariesGet;
  /** Resource for '/farmers/\{farmerId\}/boundaries/\{boundaryId\}/overlap' has methods for the following verbs: get */
  (
    path: "/farmers/{farmerId}/boundaries/{boundaryId}/overlap",
    farmerId: string,
    boundaryId: string,
  ): BoundariesGetOverlap;
  /** Resource for '/crops' has methods for the following verbs: get */
  (path: "/crops"): CropsList;
  /** Resource for '/crops/\{cropId\}' has methods for the following verbs: get, patch, delete */
  (path: "/crops/{cropId}", cropId: string): CropsGet;
  /** Resource for '/crops/\{cropId\}/crop-varieties' has methods for the following verbs: get */
  (
    path: "/crops/{cropId}/crop-varieties",
    cropId: string,
  ): CropVarietiesListByCropId;
  /** Resource for '/crop-varieties' has methods for the following verbs: get */
  (path: "/crop-varieties"): CropVarietiesList;
  /** Resource for '/crops/\{cropId\}/crop-varieties/\{cropVarietyId\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/crops/{cropId}/crop-varieties/{cropVarietyId}",
    cropId: string,
    cropVarietyId: string,
  ): CropVarietiesGet;
  /** Resource for '/farmers' has methods for the following verbs: get */
  (path: "/farmers"): FarmersList;
  /** Resource for '/farmers/\{farmerId\}' has methods for the following verbs: get, patch, delete */
  (path: "/farmers/{farmerId}", farmerId: string): FarmersGet;
  /** Resource for '/farmers/cascade-delete/\{jobId\}' has methods for the following verbs: get, put */
  (
    path: "/farmers/cascade-delete/{jobId}",
    jobId: string,
  ): FarmersGetCascadeDeleteJobDetails;
  /** Resource for '/farm-operations/ingest-data/\{jobId\}' has methods for the following verbs: put, get */
  (
    path: "/farm-operations/ingest-data/{jobId}",
    jobId: string,
  ): FarmOperationsCreateDataIngestionJob;
  /** Resource for '/farmers/\{farmerId\}/farms' has methods for the following verbs: get */
  (path: "/farmers/{farmerId}/farms", farmerId: string): FarmsListByFarmerId;
  /** Resource for '/farms' has methods for the following verbs: get */
  (path: "/farms"): FarmsList;
  /** Resource for '/farmers/\{farmerId\}/farms/\{farmId\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/farmers/{farmerId}/farms/{farmId}",
    farmerId: string,
    farmId: string,
  ): FarmsGet;
  /** Resource for '/farms/cascade-delete/\{jobId\}' has methods for the following verbs: get, put */
  (
    path: "/farms/cascade-delete/{jobId}",
    jobId: string,
  ): FarmsGetCascadeDeleteJobDetails;
  /** Resource for '/farmers/\{farmerId\}/fields' has methods for the following verbs: get */
  (path: "/farmers/{farmerId}/fields", farmerId: string): FieldsListByFarmerId;
  /** Resource for '/fields' has methods for the following verbs: get */
  (path: "/fields"): FieldsList;
  /** Resource for '/farmers/\{farmerId\}/fields/\{fieldId\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/farmers/{farmerId}/fields/{fieldId}",
    farmerId: string,
    fieldId: string,
  ): FieldsGet;
  /** Resource for '/fields/cascade-delete/\{jobId\}' has methods for the following verbs: get, put */
  (
    path: "/fields/cascade-delete/{jobId}",
    jobId: string,
  ): FieldsGetCascadeDeleteJobDetails;
  /** Resource for '/farmers/\{farmerId\}/harvest-data' has methods for the following verbs: get */
  (
    path: "/farmers/{farmerId}/harvest-data",
    farmerId: string,
  ): HarvestDataListByFarmerId;
  /** Resource for '/harvest-data' has methods for the following verbs: get */
  (path: "/harvest-data"): HarvestDataList;
  /** Resource for '/farmers/\{farmerId\}/harvest-data/\{harvestDataId\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/farmers/{farmerId}/harvest-data/{harvestDataId}",
    farmerId: string,
    harvestDataId: string,
  ): HarvestDataGet;
  /** Resource for '/image-processing/rasterize/\{jobId\}' has methods for the following verbs: put, get */
  (
    path: "/image-processing/rasterize/{jobId}",
    jobId: string,
  ): ImageProcessingCreateRasterizeJob;
  /** Resource for '/oauth/providers' has methods for the following verbs: get */
  (path: "/oauth/providers"): OAuthProvidersList;
  /** Resource for '/oauth/providers/\{oauthProviderId\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/oauth/providers/{oauthProviderId}",
    oauthProviderId: string,
  ): OAuthProvidersGet;
  /** Resource for '/oauth/tokens' has methods for the following verbs: get */
  (path: "/oauth/tokens"): OAuthTokensList;
  /** Resource for '/oauth/tokens/:connect' has methods for the following verbs: post */
  (path: "/oauth/tokens/:connect"): OAuthTokensGetOAuthConnectionLink;
  /** Resource for '/oauth/tokens/remove/\{jobId\}' has methods for the following verbs: get, put */
  (
    path: "/oauth/tokens/remove/{jobId}",
    jobId: string,
  ): OAuthTokensGetCascadeDeleteJobDetails;
  /** Resource for '/farmers/\{farmerId\}/planting-data' has methods for the following verbs: get */
  (
    path: "/farmers/{farmerId}/planting-data",
    farmerId: string,
  ): PlantingDataListByFarmerId;
  /** Resource for '/planting-data' has methods for the following verbs: get */
  (path: "/planting-data"): PlantingDataList;
  /** Resource for '/farmers/\{farmerId\}/planting-data/\{plantingDataId\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/farmers/{farmerId}/planting-data/{plantingDataId}",
    farmerId: string,
    plantingDataId: string,
  ): PlantingDataGet;
  /** Resource for '/scenes' has methods for the following verbs: get */
  (path: "/scenes"): ScenesList;
  /** Resource for '/scenes/satellite/ingest-data/\{jobId\}' has methods for the following verbs: put, get */
  (
    path: "/scenes/satellite/ingest-data/{jobId}",
    jobId: string,
  ): ScenesCreateSatelliteDataIngestionJob;
  /** Resource for '/scenes/downloadFiles' has methods for the following verbs: get */
  (path: "/scenes/downloadFiles"): ScenesDownload;
  /** Resource for '/farmers/\{farmerId\}/seasonal-fields' has methods for the following verbs: get */
  (
    path: "/farmers/{farmerId}/seasonal-fields",
    farmerId: string,
  ): SeasonalFieldsListByFarmerId;
  /** Resource for '/seasonal-fields' has methods for the following verbs: get */
  (path: "/seasonal-fields"): SeasonalFieldsList;
  /** Resource for '/farmers/\{farmerId\}/seasonal-fields/\{seasonalFieldId\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/farmers/{farmerId}/seasonal-fields/{seasonalFieldId}",
    farmerId: string,
    seasonalFieldId: string,
  ): SeasonalFieldsGet;
  /** Resource for '/seasonal-fields/cascade-delete/\{jobId\}' has methods for the following verbs: get, put */
  (
    path: "/seasonal-fields/cascade-delete/{jobId}",
    jobId: string,
  ): SeasonalFieldsGetCascadeDeleteJobDetails;
  /** Resource for '/seasons' has methods for the following verbs: get */
  (path: "/seasons"): SeasonsList;
  /** Resource for '/seasons/\{seasonId\}' has methods for the following verbs: get, patch, delete */
  (path: "/seasons/{seasonId}", seasonId: string): SeasonsGet;
  /** Resource for '/farmers/\{farmerId\}/tillage-data' has methods for the following verbs: get */
  (
    path: "/farmers/{farmerId}/tillage-data",
    farmerId: string,
  ): TillageDataListByFarmerId;
  /** Resource for '/tillage-data' has methods for the following verbs: get */
  (path: "/tillage-data"): TillageDataList;
  /** Resource for '/farmers/\{farmerId\}/tillage-data/\{tillageDataId\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/farmers/{farmerId}/tillage-data/{tillageDataId}",
    farmerId: string,
    tillageDataId: string,
  ): TillageDataGet;
  /** Resource for '/weather' has methods for the following verbs: get */
  (path: "/weather"): WeatherList;
  /** Resource for '/weather/ingest-data/\{jobId\}' has methods for the following verbs: get, put */
  (
    path: "/weather/ingest-data/{jobId}",
    jobId: string,
  ): WeatherGetDataIngestionJobDetails;
  /** Resource for '/weather/delete-data/\{jobId\}' has methods for the following verbs: get, put */
  (
    path: "/weather/delete-data/{jobId}",
    jobId: string,
  ): WeatherGetDataDeleteJobDetails;
}

export type AzureAgriFoodPlatformDataPlaneServiceClient = Client & {
  path: Routes;
};

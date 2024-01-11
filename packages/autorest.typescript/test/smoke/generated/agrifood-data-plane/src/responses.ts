// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  ApplicationDataListResponseOutput,
  ErrorResponseOutput,
  ApplicationDataOutput,
  AttachmentListResponseOutput,
  AttachmentOutput,
  BoundaryListResponseOutput,
  CascadeDeleteJobOutput,
  BoundaryOutput,
  BoundaryOverlapResponseOutput,
  CropListResponseOutput,
  CropOutput,
  CropVarietyListResponseOutput,
  CropVarietyOutput,
  FarmerListResponseOutput,
  FarmerOutput,
  FarmOperationDataIngestionJobOutput,
  FarmListResponseOutput,
  FarmOutput,
  FieldListResponseOutput,
  FieldOutput,
  HarvestDataListResponseOutput,
  HarvestDataOutput,
  ImageProcessingRasterizeJobOutput,
  OAuthProviderListResponseOutput,
  OAuthProviderOutput,
  OAuthTokenListResponseOutput,
  PlantingDataListResponseOutput,
  PlantingDataOutput,
  SceneListResponseOutput,
  SatelliteDataIngestionJobOutput,
  SeasonalFieldListResponseOutput,
  SeasonalFieldOutput,
  SeasonListResponseOutput,
  SeasonOutput,
  TillageDataListResponseOutput,
  TillageDataOutput,
  WeatherDataListResponseOutput,
  WeatherDataIngestionJobOutput,
  WeatherDataDeleteJobOutput,
} from "./outputModels";

/** Returns a paginated list of application data resources under a particular farm. */
export interface ApplicationDataListByFarmerId200Response extends HttpResponse {
  status: "200";
  body: ApplicationDataListResponseOutput;
}

/** Returns a paginated list of application data resources under a particular farm. */
export interface ApplicationDataListByFarmerIdDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of application data resources across all farmers. */
export interface ApplicationDataList200Response extends HttpResponse {
  status: "200";
  body: ApplicationDataListResponseOutput;
}

/** Returns a paginated list of application data resources across all farmers. */
export interface ApplicationDataListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Get a specified application data resource under a particular farmer. */
export interface ApplicationDataGet200Response extends HttpResponse {
  status: "200";
  body: ApplicationDataOutput;
}

/** Get a specified application data resource under a particular farmer. */
export interface ApplicationDataGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Creates or updates an application data resource under a particular farmer. */
export interface ApplicationDataCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: ApplicationDataOutput;
}

/** Creates or updates an application data resource under a particular farmer. */
export interface ApplicationDataCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: ApplicationDataOutput;
}

/** Creates or updates an application data resource under a particular farmer. */
export interface ApplicationDataCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Deletes a specified application data resource under a particular farmer. */
export interface ApplicationDataDelete204Response extends HttpResponse {
  status: "204";
}

/** Deletes a specified application data resource under a particular farmer. */
export interface ApplicationDataDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of attachment resources under a particular farmer. */
export interface AttachmentsListByFarmerId200Response extends HttpResponse {
  status: "200";
  body: AttachmentListResponseOutput;
}

/** Returns a paginated list of attachment resources under a particular farmer. */
export interface AttachmentsListByFarmerIdDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Gets a specified attachment resource under a particular farmer. */
export interface AttachmentsGet200Response extends HttpResponse {
  status: "200";
  body: AttachmentOutput;
}

/** Gets a specified attachment resource under a particular farmer. */
export interface AttachmentsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Creates or updates an attachment resource under a particular farmer. */
export interface AttachmentsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: AttachmentOutput;
}

/** Creates or updates an attachment resource under a particular farmer. */
export interface AttachmentsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: AttachmentOutput;
}

/** Creates or updates an attachment resource under a particular farmer. */
export interface AttachmentsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Deletes a specified attachment resource under a particular farmer. */
export interface AttachmentsDelete204Response extends HttpResponse {
  status: "204";
}

/** Deletes a specified attachment resource under a particular farmer. */
export interface AttachmentsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Downloads and returns attachment as response for the given input filePath. */
export interface AttachmentsDownload200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** Downloads and returns attachment as response for the given input filePath. */
export interface AttachmentsDownloadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of boundary resources under a particular farmer. */
export interface BoundariesListByFarmerId200Response extends HttpResponse {
  status: "200";
  body: BoundaryListResponseOutput;
}

/** Returns a paginated list of boundary resources under a particular farmer. */
export interface BoundariesListByFarmerIdDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Search for boundaries by fields and intersecting geometry. */
export interface BoundariesSearchByFarmerId200Response extends HttpResponse {
  status: "200";
  body: BoundaryListResponseOutput;
}

/** Search for boundaries by fields and intersecting geometry. */
export interface BoundariesSearchByFarmerIdDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of boundary resources across all farmers. */
export interface BoundariesList200Response extends HttpResponse {
  status: "200";
  body: BoundaryListResponseOutput;
}

/** Returns a paginated list of boundary resources across all farmers. */
export interface BoundariesListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Search for boundaries across all farmers by fields and intersecting geometry. */
export interface BoundariesSearch200Response extends HttpResponse {
  status: "200";
  body: BoundaryListResponseOutput;
}

/** Search for boundaries across all farmers by fields and intersecting geometry. */
export interface BoundariesSearchDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Get cascade delete job for specified boundary. */
export interface BoundariesGetCascadeDeleteJobDetails200Response
  extends HttpResponse {
  status: "200";
  body: CascadeDeleteJobOutput;
}

/** Get cascade delete job for specified boundary. */
export interface BoundariesGetCascadeDeleteJobDetailsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Create a cascade delete job for specified boundary. */
export interface BoundariesCreateCascadeDeleteJob202Response
  extends HttpResponse {
  status: "202";
  body: CascadeDeleteJobOutput;
}

/** Create a cascade delete job for specified boundary. */
export interface BoundariesCreateCascadeDeleteJobDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Gets a specified boundary resource under a particular farmer. */
export interface BoundariesGet200Response extends HttpResponse {
  status: "200";
  body: BoundaryOutput;
}

/** Gets a specified boundary resource under a particular farmer. */
export interface BoundariesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Creates or updates a boundary resource. */
export interface BoundariesCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: BoundaryOutput;
}

/** Creates or updates a boundary resource. */
export interface BoundariesCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: BoundaryOutput;
}

/** Creates or updates a boundary resource. */
export interface BoundariesCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Deletes a specified boundary resource under a particular farmer. */
export interface BoundariesDelete204Response extends HttpResponse {
  status: "204";
}

/** Deletes a specified boundary resource under a particular farmer. */
export interface BoundariesDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns overlapping acreage between two boundary Ids. */
export interface BoundariesGetOverlap200Response extends HttpResponse {
  status: "200";
  body: BoundaryOverlapResponseOutput;
}

/** Returns overlapping acreage between two boundary Ids. */
export interface BoundariesGetOverlapDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of crop resources. */
export interface CropsList200Response extends HttpResponse {
  status: "200";
  body: CropListResponseOutput;
}

/** Returns a paginated list of crop resources. */
export interface CropsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Gets a specified crop resource. */
export interface CropsGet200Response extends HttpResponse {
  status: "200";
  body: CropOutput;
}

/** Gets a specified crop resource. */
export interface CropsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Creates or updates a crop resource. */
export interface CropsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: CropOutput;
}

/** Creates or updates a crop resource. */
export interface CropsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: CropOutput;
}

/** Creates or updates a crop resource. */
export interface CropsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Deletes Crop for given crop id. */
export interface CropsDelete204Response extends HttpResponse {
  status: "204";
}

/** Deletes Crop for given crop id. */
export interface CropsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of crop variety resources under a particular crop. */
export interface CropVarietiesListByCropId200Response extends HttpResponse {
  status: "200";
  body: CropVarietyListResponseOutput;
}

/** Returns a paginated list of crop variety resources under a particular crop. */
export interface CropVarietiesListByCropIdDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of crop variety resources across all crops. */
export interface CropVarietiesList200Response extends HttpResponse {
  status: "200";
  body: CropVarietyListResponseOutput;
}

/** Returns a paginated list of crop variety resources across all crops. */
export interface CropVarietiesListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Gets a specified crop variety resource under a particular crop. */
export interface CropVarietiesGet200Response extends HttpResponse {
  status: "200";
  body: CropVarietyOutput;
}

/** Gets a specified crop variety resource under a particular crop. */
export interface CropVarietiesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Creates or updates a crop variety resource. */
export interface CropVarietiesCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: CropVarietyOutput;
}

/** Creates or updates a crop variety resource. */
export interface CropVarietiesCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: CropVarietyOutput;
}

/** Creates or updates a crop variety resource. */
export interface CropVarietiesCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Deletes a specified crop variety resource under a particular crop. */
export interface CropVarietiesDelete204Response extends HttpResponse {
  status: "204";
}

/** Deletes a specified crop variety resource under a particular crop. */
export interface CropVarietiesDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of farmer resources. */
export interface FarmersList200Response extends HttpResponse {
  status: "200";
  body: FarmerListResponseOutput;
}

/** Returns a paginated list of farmer resources. */
export interface FarmersListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Gets a specified farmer resource. */
export interface FarmersGet200Response extends HttpResponse {
  status: "200";
  body: FarmerOutput;
}

/** Gets a specified farmer resource. */
export interface FarmersGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Creates or updates a farmer resource. */
export interface FarmersCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: FarmerOutput;
}

/** Creates or updates a farmer resource. */
export interface FarmersCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: FarmerOutput;
}

/** Creates or updates a farmer resource. */
export interface FarmersCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Deletes a specified farmer resource. */
export interface FarmersDelete204Response extends HttpResponse {
  status: "204";
}

/** Deletes a specified farmer resource. */
export interface FarmersDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Get a cascade delete job for specified farmer. */
export interface FarmersGetCascadeDeleteJobDetails200Response
  extends HttpResponse {
  status: "200";
  body: CascadeDeleteJobOutput;
}

/** Get a cascade delete job for specified farmer. */
export interface FarmersGetCascadeDeleteJobDetailsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Create a cascade delete job for specified farmer. */
export interface FarmersCreateCascadeDeleteJob202Response extends HttpResponse {
  status: "202";
  body: CascadeDeleteJobOutput;
}

/** Create a cascade delete job for specified farmer. */
export interface FarmersCreateCascadeDeleteJobDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Create a farm operation data ingestion job. */
export interface FarmOperationsCreateDataIngestionJob202Response
  extends HttpResponse {
  status: "202";
  body: FarmOperationDataIngestionJobOutput;
}

/** Create a farm operation data ingestion job. */
export interface FarmOperationsCreateDataIngestionJobDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Get a farm operation data ingestion job. */
export interface FarmOperationsGetDataIngestionJobDetails200Response
  extends HttpResponse {
  status: "200";
  body: FarmOperationDataIngestionJobOutput;
}

/** Get a farm operation data ingestion job. */
export interface FarmOperationsGetDataIngestionJobDetailsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of farm resources under a particular farmer. */
export interface FarmsListByFarmerId200Response extends HttpResponse {
  status: "200";
  body: FarmListResponseOutput;
}

/** Returns a paginated list of farm resources under a particular farmer. */
export interface FarmsListByFarmerIdDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of farm resources across all farmers. */
export interface FarmsList200Response extends HttpResponse {
  status: "200";
  body: FarmListResponseOutput;
}

/** Returns a paginated list of farm resources across all farmers. */
export interface FarmsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Gets a specified farm resource under a particular farmer. */
export interface FarmsGet200Response extends HttpResponse {
  status: "200";
  body: FarmOutput;
}

/** Gets a specified farm resource under a particular farmer. */
export interface FarmsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Creates or updates a farm resource under a particular farmer. */
export interface FarmsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: FarmOutput;
}

/** Creates or updates a farm resource under a particular farmer. */
export interface FarmsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: FarmOutput;
}

/** Creates or updates a farm resource under a particular farmer. */
export interface FarmsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Deletes a specified farm resource under a particular farmer. */
export interface FarmsDelete204Response extends HttpResponse {
  status: "204";
}

/** Deletes a specified farm resource under a particular farmer. */
export interface FarmsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Get a cascade delete job for specified farm. */
export interface FarmsGetCascadeDeleteJobDetails200Response
  extends HttpResponse {
  status: "200";
  body: CascadeDeleteJobOutput;
}

/** Get a cascade delete job for specified farm. */
export interface FarmsGetCascadeDeleteJobDetailsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Create a cascade delete job for specified farm. */
export interface FarmsCreateCascadeDeleteJob202Response extends HttpResponse {
  status: "202";
  body: CascadeDeleteJobOutput;
}

/** Create a cascade delete job for specified farm. */
export interface FarmsCreateCascadeDeleteJobDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of field resources under a particular farmer. */
export interface FieldsListByFarmerId200Response extends HttpResponse {
  status: "200";
  body: FieldListResponseOutput;
}

/** Returns a paginated list of field resources under a particular farmer. */
export interface FieldsListByFarmerIdDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of field resources across all farmers. */
export interface FieldsList200Response extends HttpResponse {
  status: "200";
  body: FieldListResponseOutput;
}

/** Returns a paginated list of field resources across all farmers. */
export interface FieldsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Gets a specified field resource under a particular farmer. */
export interface FieldsGet200Response extends HttpResponse {
  status: "200";
  body: FieldOutput;
}

/** Gets a specified field resource under a particular farmer. */
export interface FieldsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Creates or Updates a field resource under a particular farmer. */
export interface FieldsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: FieldOutput;
}

/** Creates or Updates a field resource under a particular farmer. */
export interface FieldsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: FieldOutput;
}

/** Creates or Updates a field resource under a particular farmer. */
export interface FieldsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Deletes a specified field resource under a particular farmer. */
export interface FieldsDelete204Response extends HttpResponse {
  status: "204";
}

/** Deletes a specified field resource under a particular farmer. */
export interface FieldsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Get a cascade delete job for specified field. */
export interface FieldsGetCascadeDeleteJobDetails200Response
  extends HttpResponse {
  status: "200";
  body: CascadeDeleteJobOutput;
}

/** Get a cascade delete job for specified field. */
export interface FieldsGetCascadeDeleteJobDetailsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Create a cascade delete job for specified field. */
export interface FieldsCreateCascadeDeleteJob202Response extends HttpResponse {
  status: "202";
  body: CascadeDeleteJobOutput;
}

/** Create a cascade delete job for specified field. */
export interface FieldsCreateCascadeDeleteJobDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of harvest data resources under a particular farm. */
export interface HarvestDataListByFarmerId200Response extends HttpResponse {
  status: "200";
  body: HarvestDataListResponseOutput;
}

/** Returns a paginated list of harvest data resources under a particular farm. */
export interface HarvestDataListByFarmerIdDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of harvest data resources across all farmers. */
export interface HarvestDataList200Response extends HttpResponse {
  status: "200";
  body: HarvestDataListResponseOutput;
}

/** Returns a paginated list of harvest data resources across all farmers. */
export interface HarvestDataListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Get a specified harvest data resource under a particular farmer. */
export interface HarvestDataGet200Response extends HttpResponse {
  status: "200";
  body: HarvestDataOutput;
}

/** Get a specified harvest data resource under a particular farmer. */
export interface HarvestDataGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Creates or updates harvest data resource under a particular farmer. */
export interface HarvestDataCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: HarvestDataOutput;
}

/** Creates or updates harvest data resource under a particular farmer. */
export interface HarvestDataCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: HarvestDataOutput;
}

/** Creates or updates harvest data resource under a particular farmer. */
export interface HarvestDataCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Deletes a specified harvest data resource under a particular farmer. */
export interface HarvestDataDelete204Response extends HttpResponse {
  status: "204";
}

/** Deletes a specified harvest data resource under a particular farmer. */
export interface HarvestDataDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Create a ImageProcessing Rasterize job. */
export interface ImageProcessingCreateRasterizeJob202Response
  extends HttpResponse {
  status: "202";
  body: ImageProcessingRasterizeJobOutput;
}

/** Create a ImageProcessing Rasterize job. */
export interface ImageProcessingCreateRasterizeJobDefaultResponse
  extends HttpResponse {
  status: string;
}

/** Get ImageProcessing Rasterize job's details. */
export interface ImageProcessingGetRasterizeJob200Response
  extends HttpResponse {
  status: "200";
  body: ImageProcessingRasterizeJobOutput;
}

/** Returns a paginated list of oauthProvider resources. */
export interface OAuthProvidersList200Response extends HttpResponse {
  status: "200";
  body: OAuthProviderListResponseOutput;
}

/** Returns a paginated list of oauthProvider resources. */
export interface OAuthProvidersListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Get a specified oauthProvider resource. */
export interface OAuthProvidersGet200Response extends HttpResponse {
  status: "200";
  body: OAuthProviderOutput;
}

/** Get a specified oauthProvider resource. */
export interface OAuthProvidersGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Creates or updates an oauthProvider resource. */
export interface OAuthProvidersCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: OAuthProviderOutput;
}

/** Creates or updates an oauthProvider resource. */
export interface OAuthProvidersCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: OAuthProviderOutput;
}

/** Creates or updates an oauthProvider resource. */
export interface OAuthProvidersCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Deletes an specified oauthProvider resource. */
export interface OAuthProvidersDelete204Response extends HttpResponse {
  status: "204";
}

/** Deletes an specified oauthProvider resource. */
export interface OAuthProvidersDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a list of OAuthToken documents. */
export interface OAuthTokensList200Response extends HttpResponse {
  status: "200";
  body: OAuthTokenListResponseOutput;
}

/** Returns a list of OAuthToken documents. */
export interface OAuthTokensListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns Connection link needed in the OAuth flow. */
export interface OAuthTokensGetOAuthConnectionLink200Response
  extends HttpResponse {
  status: "200";
  body: string;
}

/** Returns Connection link needed in the OAuth flow. */
export interface OAuthTokensGetOAuthConnectionLinkDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Get cascade delete job details for OAuth tokens for specified job ID. */
export interface OAuthTokensGetCascadeDeleteJobDetails200Response
  extends HttpResponse {
  status: "200";
  body: CascadeDeleteJobOutput;
}

/** Get cascade delete job details for OAuth tokens for specified job ID. */
export interface OAuthTokensGetCascadeDeleteJobDetailsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Create a cascade delete job for OAuth tokens. */
export interface OAuthTokensCreateCascadeDeleteJob202Response
  extends HttpResponse {
  status: "202";
  body: CascadeDeleteJobOutput;
}

/** Create a cascade delete job for OAuth tokens. */
export interface OAuthTokensCreateCascadeDeleteJobDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of planting data resources under a particular farm. */
export interface PlantingDataListByFarmerId200Response extends HttpResponse {
  status: "200";
  body: PlantingDataListResponseOutput;
}

/** Returns a paginated list of planting data resources under a particular farm. */
export interface PlantingDataListByFarmerIdDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of planting data resources across all farmers. */
export interface PlantingDataList200Response extends HttpResponse {
  status: "200";
  body: PlantingDataListResponseOutput;
}

/** Returns a paginated list of planting data resources across all farmers. */
export interface PlantingDataListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Get a specified planting data resource under a particular farmer. */
export interface PlantingDataGet200Response extends HttpResponse {
  status: "200";
  body: PlantingDataOutput;
}

/** Get a specified planting data resource under a particular farmer. */
export interface PlantingDataGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Creates or updates an planting data resource under a particular farmer. */
export interface PlantingDataCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: PlantingDataOutput;
}

/** Creates or updates an planting data resource under a particular farmer. */
export interface PlantingDataCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: PlantingDataOutput;
}

/** Creates or updates an planting data resource under a particular farmer. */
export interface PlantingDataCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Deletes a specified planting data resource under a particular farmer. */
export interface PlantingDataDelete204Response extends HttpResponse {
  status: "204";
}

/** Deletes a specified planting data resource under a particular farmer. */
export interface PlantingDataDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of scene resources. */
export interface ScenesList200Response extends HttpResponse {
  status: "200";
  body: SceneListResponseOutput;
}

/** Returns a paginated list of scene resources. */
export interface ScenesListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Create a satellite data ingestion job. */
export interface ScenesCreateSatelliteDataIngestionJob202Response
  extends HttpResponse {
  status: "202";
  body: SatelliteDataIngestionJobOutput;
}

/** Create a satellite data ingestion job. */
export interface ScenesCreateSatelliteDataIngestionJobDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Get a satellite data ingestion job. */
export interface ScenesGetSatelliteDataIngestionJobDetails200Response
  extends HttpResponse {
  status: "200";
  body: SatelliteDataIngestionJobOutput;
}

/** Get a satellite data ingestion job. */
export interface ScenesGetSatelliteDataIngestionJobDetailsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Downloads and returns file stream as response for the given input filePath. */
export interface ScenesDownload200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** Downloads and returns file stream as response for the given input filePath. */
export interface ScenesDownloadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of seasonal field resources under a particular farmer. */
export interface SeasonalFieldsListByFarmerId200Response extends HttpResponse {
  status: "200";
  body: SeasonalFieldListResponseOutput;
}

/** Returns a paginated list of seasonal field resources under a particular farmer. */
export interface SeasonalFieldsListByFarmerIdDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of seasonal field resources across all farmers. */
export interface SeasonalFieldsList200Response extends HttpResponse {
  status: "200";
  body: SeasonalFieldListResponseOutput;
}

/** Returns a paginated list of seasonal field resources across all farmers. */
export interface SeasonalFieldsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Gets a specified seasonal field resource under a particular farmer. */
export interface SeasonalFieldsGet200Response extends HttpResponse {
  status: "200";
  body: SeasonalFieldOutput;
}

/** Gets a specified seasonal field resource under a particular farmer. */
export interface SeasonalFieldsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Creates or Updates a seasonal field resource under a particular farmer. */
export interface SeasonalFieldsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: SeasonalFieldOutput;
}

/** Creates or Updates a seasonal field resource under a particular farmer. */
export interface SeasonalFieldsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: SeasonalFieldOutput;
}

/** Creates or Updates a seasonal field resource under a particular farmer. */
export interface SeasonalFieldsCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Deletes a specified seasonal-field resource under a particular farmer. */
export interface SeasonalFieldsDelete204Response extends HttpResponse {
  status: "204";
}

/** Deletes a specified seasonal-field resource under a particular farmer. */
export interface SeasonalFieldsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Get cascade delete job for specified seasonal field. */
export interface SeasonalFieldsGetCascadeDeleteJobDetails200Response
  extends HttpResponse {
  status: "200";
  body: CascadeDeleteJobOutput;
}

/** Get cascade delete job for specified seasonal field. */
export interface SeasonalFieldsGetCascadeDeleteJobDetailsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Create a cascade delete job for specified seasonal field. */
export interface SeasonalFieldsCreateCascadeDeleteJob202Response
  extends HttpResponse {
  status: "202";
  body: CascadeDeleteJobOutput;
}

/** Create a cascade delete job for specified seasonal field. */
export interface SeasonalFieldsCreateCascadeDeleteJobDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of season resources. */
export interface SeasonsList200Response extends HttpResponse {
  status: "200";
  body: SeasonListResponseOutput;
}

/** Returns a paginated list of season resources. */
export interface SeasonsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Gets a specified season resource. */
export interface SeasonsGet200Response extends HttpResponse {
  status: "200";
  body: SeasonOutput;
}

/** Gets a specified season resource. */
export interface SeasonsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Creates or updates a season resource. */
export interface SeasonsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: SeasonOutput;
}

/** Creates or updates a season resource. */
export interface SeasonsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: SeasonOutput;
}

/** Creates or updates a season resource. */
export interface SeasonsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Deletes a specified season resource. */
export interface SeasonsDelete204Response extends HttpResponse {
  status: "204";
}

/** Deletes a specified season resource. */
export interface SeasonsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of tillage data resources under a particular farm. */
export interface TillageDataListByFarmerId200Response extends HttpResponse {
  status: "200";
  body: TillageDataListResponseOutput;
}

/** Returns a paginated list of tillage data resources under a particular farm. */
export interface TillageDataListByFarmerIdDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of tillage data resources across all farmers. */
export interface TillageDataList200Response extends HttpResponse {
  status: "200";
  body: TillageDataListResponseOutput;
}

/** Returns a paginated list of tillage data resources across all farmers. */
export interface TillageDataListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Get a specified tillage data resource under a particular farmer. */
export interface TillageDataGet200Response extends HttpResponse {
  status: "200";
  body: TillageDataOutput;
}

/** Get a specified tillage data resource under a particular farmer. */
export interface TillageDataGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Creates or updates an tillage data resource under a particular farmer. */
export interface TillageDataCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: TillageDataOutput;
}

/** Creates or updates an tillage data resource under a particular farmer. */
export interface TillageDataCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: TillageDataOutput;
}

/** Creates or updates an tillage data resource under a particular farmer. */
export interface TillageDataCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Deletes a specified tillage data resource under a particular farmer. */
export interface TillageDataDelete204Response extends HttpResponse {
  status: "204";
}

/** Deletes a specified tillage data resource under a particular farmer. */
export interface TillageDataDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Returns a paginated list of weather data. */
export interface WeatherList200Response extends HttpResponse {
  status: "200";
  body: WeatherDataListResponseOutput;
}

/** Returns a paginated list of weather data. */
export interface WeatherListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Get weather ingestion job. */
export interface WeatherGetDataIngestionJobDetails200Response
  extends HttpResponse {
  status: "200";
  body: WeatherDataIngestionJobOutput;
}

/** Get weather ingestion job. */
export interface WeatherGetDataIngestionJobDetailsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Create a weather data ingestion job. */
export interface WeatherCreateDataIngestionJob202Response extends HttpResponse {
  status: "202";
  body: WeatherDataIngestionJobOutput;
}

/** Create a weather data ingestion job. */
export interface WeatherCreateDataIngestionJobDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Get weather data delete job. */
export interface WeatherGetDataDeleteJobDetails200Response
  extends HttpResponse {
  status: "200";
  body: WeatherDataDeleteJobOutput;
}

/** Get weather data delete job. */
export interface WeatherGetDataDeleteJobDetailsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Create a weather data delete job. */
export interface WeatherCreateDataDeleteJob202Response extends HttpResponse {
  status: "202";
  body: WeatherDataDeleteJobOutput;
}

/** Create a weather data delete job. */
export interface WeatherCreateDataDeleteJobDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

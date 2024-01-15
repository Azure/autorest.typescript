// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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

const responseMap: Record<string, string[]> = {
  "GET /farmers/{farmerId}/application-data": ["200"],
  "GET /application-data": ["200"],
  "GET /farmers/{farmerId}/application-data/{applicationDataId}": ["200"],
  "PATCH /farmers/{farmerId}/application-data/{applicationDataId}": [
    "200",
    "201",
  ],
  "DELETE /farmers/{farmerId}/application-data/{applicationDataId}": ["204"],
  "GET /farmers/{farmerId}/attachments": ["200"],
  "GET /farmers/{farmerId}/attachments/{attachmentId}": ["200"],
  "PATCH /farmers/{farmerId}/attachments/{attachmentId}": ["200", "201"],
  "DELETE /farmers/{farmerId}/attachments/{attachmentId}": ["204"],
  "GET /farmers/{farmerId}/attachments/{attachmentId}/file": ["200"],
  "GET /farmers/{farmerId}/boundaries": ["200"],
  "POST /farmers/{farmerId}/boundaries": ["200"],
  "GET /boundaries": ["200"],
  "POST /boundaries": ["200"],
  "GET /boundaries/cascade-delete/{jobId}": ["200"],
  "PUT /boundaries/cascade-delete/{jobId}": ["202"],
  "GET /farmers/{farmerId}/boundaries/{boundaryId}": ["200"],
  "PATCH /farmers/{farmerId}/boundaries/{boundaryId}": ["200", "201"],
  "DELETE /farmers/{farmerId}/boundaries/{boundaryId}": ["204"],
  "GET /farmers/{farmerId}/boundaries/{boundaryId}/overlap": ["200"],
  "GET /crops": ["200"],
  "GET /crops/{cropId}": ["200"],
  "PATCH /crops/{cropId}": ["200", "201"],
  "DELETE /crops/{cropId}": ["204"],
  "GET /crops/{cropId}/crop-varieties": ["200"],
  "GET /crop-varieties": ["200"],
  "GET /crops/{cropId}/crop-varieties/{cropVarietyId}": ["200"],
  "PATCH /crops/{cropId}/crop-varieties/{cropVarietyId}": ["200", "201"],
  "DELETE /crops/{cropId}/crop-varieties/{cropVarietyId}": ["204"],
  "GET /farmers": ["200"],
  "GET /farmers/{farmerId}": ["200"],
  "PATCH /farmers/{farmerId}": ["200", "201"],
  "DELETE /farmers/{farmerId}": ["204"],
  "GET /farmers/cascade-delete/{jobId}": ["200"],
  "PUT /farmers/cascade-delete/{jobId}": ["202"],
  "PUT /farm-operations/ingest-data/{jobId}": ["202"],
  "GET /farm-operations/ingest-data/{jobId}": ["200"],
  "GET /farmers/{farmerId}/farms": ["200"],
  "GET /farms": ["200"],
  "GET /farmers/{farmerId}/farms/{farmId}": ["200"],
  "PATCH /farmers/{farmerId}/farms/{farmId}": ["200", "201"],
  "DELETE /farmers/{farmerId}/farms/{farmId}": ["204"],
  "GET /farms/cascade-delete/{jobId}": ["200"],
  "PUT /farms/cascade-delete/{jobId}": ["202"],
  "GET /farmers/{farmerId}/fields": ["200"],
  "GET /fields": ["200"],
  "GET /farmers/{farmerId}/fields/{fieldId}": ["200"],
  "PATCH /farmers/{farmerId}/fields/{fieldId}": ["200", "201"],
  "DELETE /farmers/{farmerId}/fields/{fieldId}": ["204"],
  "GET /fields/cascade-delete/{jobId}": ["200"],
  "PUT /fields/cascade-delete/{jobId}": ["202"],
  "GET /farmers/{farmerId}/harvest-data": ["200"],
  "GET /harvest-data": ["200"],
  "GET /farmers/{farmerId}/harvest-data/{harvestDataId}": ["200"],
  "PATCH /farmers/{farmerId}/harvest-data/{harvestDataId}": ["200", "201"],
  "DELETE /farmers/{farmerId}/harvest-data/{harvestDataId}": ["204"],
  "PUT /image-processing/rasterize/{jobId}": ["202"],
  "GET /image-processing/rasterize/{jobId}": ["200"],
  "GET /oauth/providers": ["200"],
  "GET /oauth/providers/{oauthProviderId}": ["200"],
  "PATCH /oauth/providers/{oauthProviderId}": ["200", "201"],
  "DELETE /oauth/providers/{oauthProviderId}": ["204"],
  "GET /oauth/tokens": ["200"],
  "POST /oauth/tokens/:connect": ["200"],
  "GET /oauth/tokens/remove/{jobId}": ["200"],
  "PUT /oauth/tokens/remove/{jobId}": ["202"],
  "GET /farmers/{farmerId}/planting-data": ["200"],
  "GET /planting-data": ["200"],
  "GET /farmers/{farmerId}/planting-data/{plantingDataId}": ["200"],
  "PATCH /farmers/{farmerId}/planting-data/{plantingDataId}": ["200", "201"],
  "DELETE /farmers/{farmerId}/planting-data/{plantingDataId}": ["204"],
  "GET /scenes": ["200"],
  "PUT /scenes/satellite/ingest-data/{jobId}": ["202"],
  "GET /scenes/satellite/ingest-data/{jobId}": ["200"],
  "GET /scenes/downloadFiles": ["200"],
  "GET /farmers/{farmerId}/seasonal-fields": ["200"],
  "GET /seasonal-fields": ["200"],
  "GET /farmers/{farmerId}/seasonal-fields/{seasonalFieldId}": ["200"],
  "PATCH /farmers/{farmerId}/seasonal-fields/{seasonalFieldId}": ["200", "201"],
  "DELETE /farmers/{farmerId}/seasonal-fields/{seasonalFieldId}": ["204"],
  "GET /seasonal-fields/cascade-delete/{jobId}": ["200"],
  "PUT /seasonal-fields/cascade-delete/{jobId}": ["202"],
  "GET /seasons": ["200"],
  "GET /seasons/{seasonId}": ["200"],
  "PATCH /seasons/{seasonId}": ["200", "201"],
  "DELETE /seasons/{seasonId}": ["204"],
  "GET /farmers/{farmerId}/tillage-data": ["200"],
  "GET /tillage-data": ["200"],
  "GET /farmers/{farmerId}/tillage-data/{tillageDataId}": ["200"],
  "PATCH /farmers/{farmerId}/tillage-data/{tillageDataId}": ["200", "201"],
  "DELETE /farmers/{farmerId}/tillage-data/{tillageDataId}": ["204"],
  "GET /weather": ["200"],
  "GET /weather/ingest-data/{jobId}": ["200"],
  "PUT /weather/ingest-data/{jobId}": ["202"],
  "GET /weather/delete-data/{jobId}": ["200"],
  "PUT /weather/delete-data/{jobId}": ["202"],
};

export function isUnexpected(
  response:
    | ApplicationDataListByFarmerId200Response
    | ApplicationDataListByFarmerIdDefaultResponse,
): response is ApplicationDataListByFarmerIdDefaultResponse;
export function isUnexpected(
  response: ApplicationDataList200Response | ApplicationDataListDefaultResponse,
): response is ApplicationDataListDefaultResponse;
export function isUnexpected(
  response: ApplicationDataGet200Response | ApplicationDataGetDefaultResponse,
): response is ApplicationDataGetDefaultResponse;
export function isUnexpected(
  response:
    | ApplicationDataCreateOrUpdate200Response
    | ApplicationDataCreateOrUpdate201Response
    | ApplicationDataCreateOrUpdateDefaultResponse,
): response is ApplicationDataCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | ApplicationDataDelete204Response
    | ApplicationDataDeleteDefaultResponse,
): response is ApplicationDataDeleteDefaultResponse;
export function isUnexpected(
  response:
    | AttachmentsListByFarmerId200Response
    | AttachmentsListByFarmerIdDefaultResponse,
): response is AttachmentsListByFarmerIdDefaultResponse;
export function isUnexpected(
  response: AttachmentsGet200Response | AttachmentsGetDefaultResponse,
): response is AttachmentsGetDefaultResponse;
export function isUnexpected(
  response:
    | AttachmentsCreateOrUpdate200Response
    | AttachmentsCreateOrUpdate201Response
    | AttachmentsCreateOrUpdateDefaultResponse,
): response is AttachmentsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: AttachmentsDelete204Response | AttachmentsDeleteDefaultResponse,
): response is AttachmentsDeleteDefaultResponse;
export function isUnexpected(
  response: AttachmentsDownload200Response | AttachmentsDownloadDefaultResponse,
): response is AttachmentsDownloadDefaultResponse;
export function isUnexpected(
  response:
    | BoundariesListByFarmerId200Response
    | BoundariesListByFarmerIdDefaultResponse,
): response is BoundariesListByFarmerIdDefaultResponse;
export function isUnexpected(
  response:
    | BoundariesSearchByFarmerId200Response
    | BoundariesSearchByFarmerIdDefaultResponse,
): response is BoundariesSearchByFarmerIdDefaultResponse;
export function isUnexpected(
  response: BoundariesList200Response | BoundariesListDefaultResponse,
): response is BoundariesListDefaultResponse;
export function isUnexpected(
  response: BoundariesSearch200Response | BoundariesSearchDefaultResponse,
): response is BoundariesSearchDefaultResponse;
export function isUnexpected(
  response:
    | BoundariesGetCascadeDeleteJobDetails200Response
    | BoundariesGetCascadeDeleteJobDetailsDefaultResponse,
): response is BoundariesGetCascadeDeleteJobDetailsDefaultResponse;
export function isUnexpected(
  response:
    | BoundariesCreateCascadeDeleteJob202Response
    | BoundariesCreateCascadeDeleteJobDefaultResponse,
): response is BoundariesCreateCascadeDeleteJobDefaultResponse;
export function isUnexpected(
  response: BoundariesGet200Response | BoundariesGetDefaultResponse,
): response is BoundariesGetDefaultResponse;
export function isUnexpected(
  response:
    | BoundariesCreateOrUpdate200Response
    | BoundariesCreateOrUpdate201Response
    | BoundariesCreateOrUpdateDefaultResponse,
): response is BoundariesCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: BoundariesDelete204Response | BoundariesDeleteDefaultResponse,
): response is BoundariesDeleteDefaultResponse;
export function isUnexpected(
  response:
    | BoundariesGetOverlap200Response
    | BoundariesGetOverlapDefaultResponse,
): response is BoundariesGetOverlapDefaultResponse;
export function isUnexpected(
  response: CropsList200Response | CropsListDefaultResponse,
): response is CropsListDefaultResponse;
export function isUnexpected(
  response: CropsGet200Response | CropsGetDefaultResponse,
): response is CropsGetDefaultResponse;
export function isUnexpected(
  response:
    | CropsCreateOrUpdate200Response
    | CropsCreateOrUpdate201Response
    | CropsCreateOrUpdateDefaultResponse,
): response is CropsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: CropsDelete204Response | CropsDeleteDefaultResponse,
): response is CropsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | CropVarietiesListByCropId200Response
    | CropVarietiesListByCropIdDefaultResponse,
): response is CropVarietiesListByCropIdDefaultResponse;
export function isUnexpected(
  response: CropVarietiesList200Response | CropVarietiesListDefaultResponse,
): response is CropVarietiesListDefaultResponse;
export function isUnexpected(
  response: CropVarietiesGet200Response | CropVarietiesGetDefaultResponse,
): response is CropVarietiesGetDefaultResponse;
export function isUnexpected(
  response:
    | CropVarietiesCreateOrUpdate200Response
    | CropVarietiesCreateOrUpdate201Response
    | CropVarietiesCreateOrUpdateDefaultResponse,
): response is CropVarietiesCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: CropVarietiesDelete204Response | CropVarietiesDeleteDefaultResponse,
): response is CropVarietiesDeleteDefaultResponse;
export function isUnexpected(
  response: FarmersList200Response | FarmersListDefaultResponse,
): response is FarmersListDefaultResponse;
export function isUnexpected(
  response: FarmersGet200Response | FarmersGetDefaultResponse,
): response is FarmersGetDefaultResponse;
export function isUnexpected(
  response:
    | FarmersCreateOrUpdate200Response
    | FarmersCreateOrUpdate201Response
    | FarmersCreateOrUpdateDefaultResponse,
): response is FarmersCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: FarmersDelete204Response | FarmersDeleteDefaultResponse,
): response is FarmersDeleteDefaultResponse;
export function isUnexpected(
  response:
    | FarmersGetCascadeDeleteJobDetails200Response
    | FarmersGetCascadeDeleteJobDetailsDefaultResponse,
): response is FarmersGetCascadeDeleteJobDetailsDefaultResponse;
export function isUnexpected(
  response:
    | FarmersCreateCascadeDeleteJob202Response
    | FarmersCreateCascadeDeleteJobDefaultResponse,
): response is FarmersCreateCascadeDeleteJobDefaultResponse;
export function isUnexpected(
  response:
    | FarmOperationsCreateDataIngestionJob202Response
    | FarmOperationsCreateDataIngestionJobDefaultResponse,
): response is FarmOperationsCreateDataIngestionJobDefaultResponse;
export function isUnexpected(
  response:
    | FarmOperationsGetDataIngestionJobDetails200Response
    | FarmOperationsGetDataIngestionJobDetailsDefaultResponse,
): response is FarmOperationsGetDataIngestionJobDetailsDefaultResponse;
export function isUnexpected(
  response: FarmsListByFarmerId200Response | FarmsListByFarmerIdDefaultResponse,
): response is FarmsListByFarmerIdDefaultResponse;
export function isUnexpected(
  response: FarmsList200Response | FarmsListDefaultResponse,
): response is FarmsListDefaultResponse;
export function isUnexpected(
  response: FarmsGet200Response | FarmsGetDefaultResponse,
): response is FarmsGetDefaultResponse;
export function isUnexpected(
  response:
    | FarmsCreateOrUpdate200Response
    | FarmsCreateOrUpdate201Response
    | FarmsCreateOrUpdateDefaultResponse,
): response is FarmsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: FarmsDelete204Response | FarmsDeleteDefaultResponse,
): response is FarmsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | FarmsGetCascadeDeleteJobDetails200Response
    | FarmsGetCascadeDeleteJobDetailsDefaultResponse,
): response is FarmsGetCascadeDeleteJobDetailsDefaultResponse;
export function isUnexpected(
  response:
    | FarmsCreateCascadeDeleteJob202Response
    | FarmsCreateCascadeDeleteJobDefaultResponse,
): response is FarmsCreateCascadeDeleteJobDefaultResponse;
export function isUnexpected(
  response:
    | FieldsListByFarmerId200Response
    | FieldsListByFarmerIdDefaultResponse,
): response is FieldsListByFarmerIdDefaultResponse;
export function isUnexpected(
  response: FieldsList200Response | FieldsListDefaultResponse,
): response is FieldsListDefaultResponse;
export function isUnexpected(
  response: FieldsGet200Response | FieldsGetDefaultResponse,
): response is FieldsGetDefaultResponse;
export function isUnexpected(
  response:
    | FieldsCreateOrUpdate200Response
    | FieldsCreateOrUpdate201Response
    | FieldsCreateOrUpdateDefaultResponse,
): response is FieldsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: FieldsDelete204Response | FieldsDeleteDefaultResponse,
): response is FieldsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | FieldsGetCascadeDeleteJobDetails200Response
    | FieldsGetCascadeDeleteJobDetailsDefaultResponse,
): response is FieldsGetCascadeDeleteJobDetailsDefaultResponse;
export function isUnexpected(
  response:
    | FieldsCreateCascadeDeleteJob202Response
    | FieldsCreateCascadeDeleteJobDefaultResponse,
): response is FieldsCreateCascadeDeleteJobDefaultResponse;
export function isUnexpected(
  response:
    | HarvestDataListByFarmerId200Response
    | HarvestDataListByFarmerIdDefaultResponse,
): response is HarvestDataListByFarmerIdDefaultResponse;
export function isUnexpected(
  response: HarvestDataList200Response | HarvestDataListDefaultResponse,
): response is HarvestDataListDefaultResponse;
export function isUnexpected(
  response: HarvestDataGet200Response | HarvestDataGetDefaultResponse,
): response is HarvestDataGetDefaultResponse;
export function isUnexpected(
  response:
    | HarvestDataCreateOrUpdate200Response
    | HarvestDataCreateOrUpdate201Response
    | HarvestDataCreateOrUpdateDefaultResponse,
): response is HarvestDataCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: HarvestDataDelete204Response | HarvestDataDeleteDefaultResponse,
): response is HarvestDataDeleteDefaultResponse;
export function isUnexpected(
  response:
    | ImageProcessingCreateRasterizeJob202Response
    | ImageProcessingCreateRasterizeJobDefaultResponse,
): response is ImageProcessingCreateRasterizeJobDefaultResponse;
export function isUnexpected(
  response: OAuthProvidersList200Response | OAuthProvidersListDefaultResponse,
): response is OAuthProvidersListDefaultResponse;
export function isUnexpected(
  response: OAuthProvidersGet200Response | OAuthProvidersGetDefaultResponse,
): response is OAuthProvidersGetDefaultResponse;
export function isUnexpected(
  response:
    | OAuthProvidersCreateOrUpdate200Response
    | OAuthProvidersCreateOrUpdate201Response
    | OAuthProvidersCreateOrUpdateDefaultResponse,
): response is OAuthProvidersCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | OAuthProvidersDelete204Response
    | OAuthProvidersDeleteDefaultResponse,
): response is OAuthProvidersDeleteDefaultResponse;
export function isUnexpected(
  response: OAuthTokensList200Response | OAuthTokensListDefaultResponse,
): response is OAuthTokensListDefaultResponse;
export function isUnexpected(
  response:
    | OAuthTokensGetOAuthConnectionLink200Response
    | OAuthTokensGetOAuthConnectionLinkDefaultResponse,
): response is OAuthTokensGetOAuthConnectionLinkDefaultResponse;
export function isUnexpected(
  response:
    | OAuthTokensGetCascadeDeleteJobDetails200Response
    | OAuthTokensGetCascadeDeleteJobDetailsDefaultResponse,
): response is OAuthTokensGetCascadeDeleteJobDetailsDefaultResponse;
export function isUnexpected(
  response:
    | OAuthTokensCreateCascadeDeleteJob202Response
    | OAuthTokensCreateCascadeDeleteJobDefaultResponse,
): response is OAuthTokensCreateCascadeDeleteJobDefaultResponse;
export function isUnexpected(
  response:
    | PlantingDataListByFarmerId200Response
    | PlantingDataListByFarmerIdDefaultResponse,
): response is PlantingDataListByFarmerIdDefaultResponse;
export function isUnexpected(
  response: PlantingDataList200Response | PlantingDataListDefaultResponse,
): response is PlantingDataListDefaultResponse;
export function isUnexpected(
  response: PlantingDataGet200Response | PlantingDataGetDefaultResponse,
): response is PlantingDataGetDefaultResponse;
export function isUnexpected(
  response:
    | PlantingDataCreateOrUpdate200Response
    | PlantingDataCreateOrUpdate201Response
    | PlantingDataCreateOrUpdateDefaultResponse,
): response is PlantingDataCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: PlantingDataDelete204Response | PlantingDataDeleteDefaultResponse,
): response is PlantingDataDeleteDefaultResponse;
export function isUnexpected(
  response: ScenesList200Response | ScenesListDefaultResponse,
): response is ScenesListDefaultResponse;
export function isUnexpected(
  response:
    | ScenesCreateSatelliteDataIngestionJob202Response
    | ScenesCreateSatelliteDataIngestionJobDefaultResponse,
): response is ScenesCreateSatelliteDataIngestionJobDefaultResponse;
export function isUnexpected(
  response:
    | ScenesGetSatelliteDataIngestionJobDetails200Response
    | ScenesGetSatelliteDataIngestionJobDetailsDefaultResponse,
): response is ScenesGetSatelliteDataIngestionJobDetailsDefaultResponse;
export function isUnexpected(
  response: ScenesDownload200Response | ScenesDownloadDefaultResponse,
): response is ScenesDownloadDefaultResponse;
export function isUnexpected(
  response:
    | SeasonalFieldsListByFarmerId200Response
    | SeasonalFieldsListByFarmerIdDefaultResponse,
): response is SeasonalFieldsListByFarmerIdDefaultResponse;
export function isUnexpected(
  response: SeasonalFieldsList200Response | SeasonalFieldsListDefaultResponse,
): response is SeasonalFieldsListDefaultResponse;
export function isUnexpected(
  response: SeasonalFieldsGet200Response | SeasonalFieldsGetDefaultResponse,
): response is SeasonalFieldsGetDefaultResponse;
export function isUnexpected(
  response:
    | SeasonalFieldsCreateOrUpdate200Response
    | SeasonalFieldsCreateOrUpdate201Response
    | SeasonalFieldsCreateOrUpdateDefaultResponse,
): response is SeasonalFieldsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | SeasonalFieldsDelete204Response
    | SeasonalFieldsDeleteDefaultResponse,
): response is SeasonalFieldsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | SeasonalFieldsGetCascadeDeleteJobDetails200Response
    | SeasonalFieldsGetCascadeDeleteJobDetailsDefaultResponse,
): response is SeasonalFieldsGetCascadeDeleteJobDetailsDefaultResponse;
export function isUnexpected(
  response:
    | SeasonalFieldsCreateCascadeDeleteJob202Response
    | SeasonalFieldsCreateCascadeDeleteJobDefaultResponse,
): response is SeasonalFieldsCreateCascadeDeleteJobDefaultResponse;
export function isUnexpected(
  response: SeasonsList200Response | SeasonsListDefaultResponse,
): response is SeasonsListDefaultResponse;
export function isUnexpected(
  response: SeasonsGet200Response | SeasonsGetDefaultResponse,
): response is SeasonsGetDefaultResponse;
export function isUnexpected(
  response:
    | SeasonsCreateOrUpdate200Response
    | SeasonsCreateOrUpdate201Response
    | SeasonsCreateOrUpdateDefaultResponse,
): response is SeasonsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: SeasonsDelete204Response | SeasonsDeleteDefaultResponse,
): response is SeasonsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | TillageDataListByFarmerId200Response
    | TillageDataListByFarmerIdDefaultResponse,
): response is TillageDataListByFarmerIdDefaultResponse;
export function isUnexpected(
  response: TillageDataList200Response | TillageDataListDefaultResponse,
): response is TillageDataListDefaultResponse;
export function isUnexpected(
  response: TillageDataGet200Response | TillageDataGetDefaultResponse,
): response is TillageDataGetDefaultResponse;
export function isUnexpected(
  response:
    | TillageDataCreateOrUpdate200Response
    | TillageDataCreateOrUpdate201Response
    | TillageDataCreateOrUpdateDefaultResponse,
): response is TillageDataCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: TillageDataDelete204Response | TillageDataDeleteDefaultResponse,
): response is TillageDataDeleteDefaultResponse;
export function isUnexpected(
  response: WeatherList200Response | WeatherListDefaultResponse,
): response is WeatherListDefaultResponse;
export function isUnexpected(
  response:
    | WeatherGetDataIngestionJobDetails200Response
    | WeatherGetDataIngestionJobDetailsDefaultResponse,
): response is WeatherGetDataIngestionJobDetailsDefaultResponse;
export function isUnexpected(
  response:
    | WeatherCreateDataIngestionJob202Response
    | WeatherCreateDataIngestionJobDefaultResponse,
): response is WeatherCreateDataIngestionJobDefaultResponse;
export function isUnexpected(
  response:
    | WeatherGetDataDeleteJobDetails200Response
    | WeatherGetDataDeleteJobDetailsDefaultResponse,
): response is WeatherGetDataDeleteJobDetailsDefaultResponse;
export function isUnexpected(
  response:
    | WeatherCreateDataDeleteJob202Response
    | WeatherCreateDataDeleteJobDefaultResponse,
): response is WeatherCreateDataDeleteJobDefaultResponse;
export function isUnexpected(
  response:
    | ApplicationDataListByFarmerId200Response
    | ApplicationDataListByFarmerIdDefaultResponse
    | ApplicationDataList200Response
    | ApplicationDataListDefaultResponse
    | ApplicationDataGet200Response
    | ApplicationDataGetDefaultResponse
    | ApplicationDataCreateOrUpdate200Response
    | ApplicationDataCreateOrUpdate201Response
    | ApplicationDataCreateOrUpdateDefaultResponse
    | ApplicationDataDelete204Response
    | ApplicationDataDeleteDefaultResponse
    | AttachmentsListByFarmerId200Response
    | AttachmentsListByFarmerIdDefaultResponse
    | AttachmentsGet200Response
    | AttachmentsGetDefaultResponse
    | AttachmentsCreateOrUpdate200Response
    | AttachmentsCreateOrUpdate201Response
    | AttachmentsCreateOrUpdateDefaultResponse
    | AttachmentsDelete204Response
    | AttachmentsDeleteDefaultResponse
    | AttachmentsDownload200Response
    | AttachmentsDownloadDefaultResponse
    | BoundariesListByFarmerId200Response
    | BoundariesListByFarmerIdDefaultResponse
    | BoundariesSearchByFarmerId200Response
    | BoundariesSearchByFarmerIdDefaultResponse
    | BoundariesList200Response
    | BoundariesListDefaultResponse
    | BoundariesSearch200Response
    | BoundariesSearchDefaultResponse
    | BoundariesGetCascadeDeleteJobDetails200Response
    | BoundariesGetCascadeDeleteJobDetailsDefaultResponse
    | BoundariesCreateCascadeDeleteJob202Response
    | BoundariesCreateCascadeDeleteJobDefaultResponse
    | BoundariesGet200Response
    | BoundariesGetDefaultResponse
    | BoundariesCreateOrUpdate200Response
    | BoundariesCreateOrUpdate201Response
    | BoundariesCreateOrUpdateDefaultResponse
    | BoundariesDelete204Response
    | BoundariesDeleteDefaultResponse
    | BoundariesGetOverlap200Response
    | BoundariesGetOverlapDefaultResponse
    | CropsList200Response
    | CropsListDefaultResponse
    | CropsGet200Response
    | CropsGetDefaultResponse
    | CropsCreateOrUpdate200Response
    | CropsCreateOrUpdate201Response
    | CropsCreateOrUpdateDefaultResponse
    | CropsDelete204Response
    | CropsDeleteDefaultResponse
    | CropVarietiesListByCropId200Response
    | CropVarietiesListByCropIdDefaultResponse
    | CropVarietiesList200Response
    | CropVarietiesListDefaultResponse
    | CropVarietiesGet200Response
    | CropVarietiesGetDefaultResponse
    | CropVarietiesCreateOrUpdate200Response
    | CropVarietiesCreateOrUpdate201Response
    | CropVarietiesCreateOrUpdateDefaultResponse
    | CropVarietiesDelete204Response
    | CropVarietiesDeleteDefaultResponse
    | FarmersList200Response
    | FarmersListDefaultResponse
    | FarmersGet200Response
    | FarmersGetDefaultResponse
    | FarmersCreateOrUpdate200Response
    | FarmersCreateOrUpdate201Response
    | FarmersCreateOrUpdateDefaultResponse
    | FarmersDelete204Response
    | FarmersDeleteDefaultResponse
    | FarmersGetCascadeDeleteJobDetails200Response
    | FarmersGetCascadeDeleteJobDetailsDefaultResponse
    | FarmersCreateCascadeDeleteJob202Response
    | FarmersCreateCascadeDeleteJobDefaultResponse
    | FarmOperationsCreateDataIngestionJob202Response
    | FarmOperationsCreateDataIngestionJobDefaultResponse
    | FarmOperationsGetDataIngestionJobDetails200Response
    | FarmOperationsGetDataIngestionJobDetailsDefaultResponse
    | FarmsListByFarmerId200Response
    | FarmsListByFarmerIdDefaultResponse
    | FarmsList200Response
    | FarmsListDefaultResponse
    | FarmsGet200Response
    | FarmsGetDefaultResponse
    | FarmsCreateOrUpdate200Response
    | FarmsCreateOrUpdate201Response
    | FarmsCreateOrUpdateDefaultResponse
    | FarmsDelete204Response
    | FarmsDeleteDefaultResponse
    | FarmsGetCascadeDeleteJobDetails200Response
    | FarmsGetCascadeDeleteJobDetailsDefaultResponse
    | FarmsCreateCascadeDeleteJob202Response
    | FarmsCreateCascadeDeleteJobDefaultResponse
    | FieldsListByFarmerId200Response
    | FieldsListByFarmerIdDefaultResponse
    | FieldsList200Response
    | FieldsListDefaultResponse
    | FieldsGet200Response
    | FieldsGetDefaultResponse
    | FieldsCreateOrUpdate200Response
    | FieldsCreateOrUpdate201Response
    | FieldsCreateOrUpdateDefaultResponse
    | FieldsDelete204Response
    | FieldsDeleteDefaultResponse
    | FieldsGetCascadeDeleteJobDetails200Response
    | FieldsGetCascadeDeleteJobDetailsDefaultResponse
    | FieldsCreateCascadeDeleteJob202Response
    | FieldsCreateCascadeDeleteJobDefaultResponse
    | HarvestDataListByFarmerId200Response
    | HarvestDataListByFarmerIdDefaultResponse
    | HarvestDataList200Response
    | HarvestDataListDefaultResponse
    | HarvestDataGet200Response
    | HarvestDataGetDefaultResponse
    | HarvestDataCreateOrUpdate200Response
    | HarvestDataCreateOrUpdate201Response
    | HarvestDataCreateOrUpdateDefaultResponse
    | HarvestDataDelete204Response
    | HarvestDataDeleteDefaultResponse
    | ImageProcessingCreateRasterizeJob202Response
    | ImageProcessingCreateRasterizeJobDefaultResponse
    | OAuthProvidersList200Response
    | OAuthProvidersListDefaultResponse
    | OAuthProvidersGet200Response
    | OAuthProvidersGetDefaultResponse
    | OAuthProvidersCreateOrUpdate200Response
    | OAuthProvidersCreateOrUpdate201Response
    | OAuthProvidersCreateOrUpdateDefaultResponse
    | OAuthProvidersDelete204Response
    | OAuthProvidersDeleteDefaultResponse
    | OAuthTokensList200Response
    | OAuthTokensListDefaultResponse
    | OAuthTokensGetOAuthConnectionLink200Response
    | OAuthTokensGetOAuthConnectionLinkDefaultResponse
    | OAuthTokensGetCascadeDeleteJobDetails200Response
    | OAuthTokensGetCascadeDeleteJobDetailsDefaultResponse
    | OAuthTokensCreateCascadeDeleteJob202Response
    | OAuthTokensCreateCascadeDeleteJobDefaultResponse
    | PlantingDataListByFarmerId200Response
    | PlantingDataListByFarmerIdDefaultResponse
    | PlantingDataList200Response
    | PlantingDataListDefaultResponse
    | PlantingDataGet200Response
    | PlantingDataGetDefaultResponse
    | PlantingDataCreateOrUpdate200Response
    | PlantingDataCreateOrUpdate201Response
    | PlantingDataCreateOrUpdateDefaultResponse
    | PlantingDataDelete204Response
    | PlantingDataDeleteDefaultResponse
    | ScenesList200Response
    | ScenesListDefaultResponse
    | ScenesCreateSatelliteDataIngestionJob202Response
    | ScenesCreateSatelliteDataIngestionJobDefaultResponse
    | ScenesGetSatelliteDataIngestionJobDetails200Response
    | ScenesGetSatelliteDataIngestionJobDetailsDefaultResponse
    | ScenesDownload200Response
    | ScenesDownloadDefaultResponse
    | SeasonalFieldsListByFarmerId200Response
    | SeasonalFieldsListByFarmerIdDefaultResponse
    | SeasonalFieldsList200Response
    | SeasonalFieldsListDefaultResponse
    | SeasonalFieldsGet200Response
    | SeasonalFieldsGetDefaultResponse
    | SeasonalFieldsCreateOrUpdate200Response
    | SeasonalFieldsCreateOrUpdate201Response
    | SeasonalFieldsCreateOrUpdateDefaultResponse
    | SeasonalFieldsDelete204Response
    | SeasonalFieldsDeleteDefaultResponse
    | SeasonalFieldsGetCascadeDeleteJobDetails200Response
    | SeasonalFieldsGetCascadeDeleteJobDetailsDefaultResponse
    | SeasonalFieldsCreateCascadeDeleteJob202Response
    | SeasonalFieldsCreateCascadeDeleteJobDefaultResponse
    | SeasonsList200Response
    | SeasonsListDefaultResponse
    | SeasonsGet200Response
    | SeasonsGetDefaultResponse
    | SeasonsCreateOrUpdate200Response
    | SeasonsCreateOrUpdate201Response
    | SeasonsCreateOrUpdateDefaultResponse
    | SeasonsDelete204Response
    | SeasonsDeleteDefaultResponse
    | TillageDataListByFarmerId200Response
    | TillageDataListByFarmerIdDefaultResponse
    | TillageDataList200Response
    | TillageDataListDefaultResponse
    | TillageDataGet200Response
    | TillageDataGetDefaultResponse
    | TillageDataCreateOrUpdate200Response
    | TillageDataCreateOrUpdate201Response
    | TillageDataCreateOrUpdateDefaultResponse
    | TillageDataDelete204Response
    | TillageDataDeleteDefaultResponse
    | WeatherList200Response
    | WeatherListDefaultResponse
    | WeatherGetDataIngestionJobDetails200Response
    | WeatherGetDataIngestionJobDetailsDefaultResponse
    | WeatherCreateDataIngestionJob202Response
    | WeatherCreateDataIngestionJobDefaultResponse
    | WeatherGetDataDeleteJobDetails200Response
    | WeatherGetDataDeleteJobDetailsDefaultResponse
    | WeatherCreateDataDeleteJob202Response
    | WeatherCreateDataDeleteJobDefaultResponse,
): response is
  | ApplicationDataListByFarmerIdDefaultResponse
  | ApplicationDataListDefaultResponse
  | ApplicationDataGetDefaultResponse
  | ApplicationDataCreateOrUpdateDefaultResponse
  | ApplicationDataDeleteDefaultResponse
  | AttachmentsListByFarmerIdDefaultResponse
  | AttachmentsGetDefaultResponse
  | AttachmentsCreateOrUpdateDefaultResponse
  | AttachmentsDeleteDefaultResponse
  | AttachmentsDownloadDefaultResponse
  | BoundariesListByFarmerIdDefaultResponse
  | BoundariesSearchByFarmerIdDefaultResponse
  | BoundariesListDefaultResponse
  | BoundariesSearchDefaultResponse
  | BoundariesGetCascadeDeleteJobDetailsDefaultResponse
  | BoundariesCreateCascadeDeleteJobDefaultResponse
  | BoundariesGetDefaultResponse
  | BoundariesCreateOrUpdateDefaultResponse
  | BoundariesDeleteDefaultResponse
  | BoundariesGetOverlapDefaultResponse
  | CropsListDefaultResponse
  | CropsGetDefaultResponse
  | CropsCreateOrUpdateDefaultResponse
  | CropsDeleteDefaultResponse
  | CropVarietiesListByCropIdDefaultResponse
  | CropVarietiesListDefaultResponse
  | CropVarietiesGetDefaultResponse
  | CropVarietiesCreateOrUpdateDefaultResponse
  | CropVarietiesDeleteDefaultResponse
  | FarmersListDefaultResponse
  | FarmersGetDefaultResponse
  | FarmersCreateOrUpdateDefaultResponse
  | FarmersDeleteDefaultResponse
  | FarmersGetCascadeDeleteJobDetailsDefaultResponse
  | FarmersCreateCascadeDeleteJobDefaultResponse
  | FarmOperationsCreateDataIngestionJobDefaultResponse
  | FarmOperationsGetDataIngestionJobDetailsDefaultResponse
  | FarmsListByFarmerIdDefaultResponse
  | FarmsListDefaultResponse
  | FarmsGetDefaultResponse
  | FarmsCreateOrUpdateDefaultResponse
  | FarmsDeleteDefaultResponse
  | FarmsGetCascadeDeleteJobDetailsDefaultResponse
  | FarmsCreateCascadeDeleteJobDefaultResponse
  | FieldsListByFarmerIdDefaultResponse
  | FieldsListDefaultResponse
  | FieldsGetDefaultResponse
  | FieldsCreateOrUpdateDefaultResponse
  | FieldsDeleteDefaultResponse
  | FieldsGetCascadeDeleteJobDetailsDefaultResponse
  | FieldsCreateCascadeDeleteJobDefaultResponse
  | HarvestDataListByFarmerIdDefaultResponse
  | HarvestDataListDefaultResponse
  | HarvestDataGetDefaultResponse
  | HarvestDataCreateOrUpdateDefaultResponse
  | HarvestDataDeleteDefaultResponse
  | ImageProcessingCreateRasterizeJobDefaultResponse
  | OAuthProvidersListDefaultResponse
  | OAuthProvidersGetDefaultResponse
  | OAuthProvidersCreateOrUpdateDefaultResponse
  | OAuthProvidersDeleteDefaultResponse
  | OAuthTokensListDefaultResponse
  | OAuthTokensGetOAuthConnectionLinkDefaultResponse
  | OAuthTokensGetCascadeDeleteJobDetailsDefaultResponse
  | OAuthTokensCreateCascadeDeleteJobDefaultResponse
  | PlantingDataListByFarmerIdDefaultResponse
  | PlantingDataListDefaultResponse
  | PlantingDataGetDefaultResponse
  | PlantingDataCreateOrUpdateDefaultResponse
  | PlantingDataDeleteDefaultResponse
  | ScenesListDefaultResponse
  | ScenesCreateSatelliteDataIngestionJobDefaultResponse
  | ScenesGetSatelliteDataIngestionJobDetailsDefaultResponse
  | ScenesDownloadDefaultResponse
  | SeasonalFieldsListByFarmerIdDefaultResponse
  | SeasonalFieldsListDefaultResponse
  | SeasonalFieldsGetDefaultResponse
  | SeasonalFieldsCreateOrUpdateDefaultResponse
  | SeasonalFieldsDeleteDefaultResponse
  | SeasonalFieldsGetCascadeDeleteJobDetailsDefaultResponse
  | SeasonalFieldsCreateCascadeDeleteJobDefaultResponse
  | SeasonsListDefaultResponse
  | SeasonsGetDefaultResponse
  | SeasonsCreateOrUpdateDefaultResponse
  | SeasonsDeleteDefaultResponse
  | TillageDataListByFarmerIdDefaultResponse
  | TillageDataListDefaultResponse
  | TillageDataGetDefaultResponse
  | TillageDataCreateOrUpdateDefaultResponse
  | TillageDataDeleteDefaultResponse
  | WeatherListDefaultResponse
  | WeatherGetDataIngestionJobDetailsDefaultResponse
  | WeatherCreateDataIngestionJobDefaultResponse
  | WeatherGetDataDeleteJobDetailsDefaultResponse
  | WeatherCreateDataDeleteJobDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}

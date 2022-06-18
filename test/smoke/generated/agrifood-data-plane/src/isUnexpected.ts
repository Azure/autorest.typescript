// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ApplicationDataListByFarmerId200Response,
  ApplicationDataListByFarmerIddefaultResponse,
  ApplicationDataList200Response,
  ApplicationDataListdefaultResponse,
  ApplicationDataGet200Response,
  ApplicationDataGetdefaultResponse,
  ApplicationDataCreateOrUpdate200Response,
  ApplicationDataCreateOrUpdate201Response,
  ApplicationDataCreateOrUpdatedefaultResponse,
  ApplicationDataDelete204Response,
  ApplicationDataDeletedefaultResponse,
  AttachmentsListByFarmerId200Response,
  AttachmentsListByFarmerIddefaultResponse,
  AttachmentsGet200Response,
  AttachmentsGetdefaultResponse,
  AttachmentsCreateOrUpdate200Response,
  AttachmentsCreateOrUpdate201Response,
  AttachmentsCreateOrUpdatedefaultResponse,
  AttachmentsDelete204Response,
  AttachmentsDeletedefaultResponse,
  AttachmentsDownload200Response,
  AttachmentsDownloaddefaultResponse,
  BoundariesListByFarmerId200Response,
  BoundariesListByFarmerIddefaultResponse,
  BoundariesSearchByFarmerId200Response,
  BoundariesSearchByFarmerIddefaultResponse,
  BoundariesList200Response,
  BoundariesListdefaultResponse,
  BoundariesSearch200Response,
  BoundariesSearchdefaultResponse,
  BoundariesGetCascadeDeleteJobDetails200Response,
  BoundariesGetCascadeDeleteJobDetailsdefaultResponse,
  BoundariesCreateCascadeDeleteJob202Response,
  BoundariesCreateCascadeDeleteJobdefaultResponse,
  BoundariesGet200Response,
  BoundariesGetdefaultResponse,
  BoundariesCreateOrUpdate200Response,
  BoundariesCreateOrUpdate201Response,
  BoundariesCreateOrUpdatedefaultResponse,
  BoundariesDelete204Response,
  BoundariesDeletedefaultResponse,
  BoundariesGetOverlap200Response,
  BoundariesGetOverlapdefaultResponse,
  CropsList200Response,
  CropsListdefaultResponse,
  CropsGet200Response,
  CropsGetdefaultResponse,
  CropsCreateOrUpdate200Response,
  CropsCreateOrUpdate201Response,
  CropsCreateOrUpdatedefaultResponse,
  CropsDelete204Response,
  CropsDeletedefaultResponse,
  CropVarietiesListByCropId200Response,
  CropVarietiesListByCropIddefaultResponse,
  CropVarietiesList200Response,
  CropVarietiesListdefaultResponse,
  CropVarietiesGet200Response,
  CropVarietiesGetdefaultResponse,
  CropVarietiesCreateOrUpdate200Response,
  CropVarietiesCreateOrUpdate201Response,
  CropVarietiesCreateOrUpdatedefaultResponse,
  CropVarietiesDelete204Response,
  CropVarietiesDeletedefaultResponse,
  FarmersList200Response,
  FarmersListdefaultResponse,
  FarmersGet200Response,
  FarmersGetdefaultResponse,
  FarmersCreateOrUpdate200Response,
  FarmersCreateOrUpdate201Response,
  FarmersCreateOrUpdatedefaultResponse,
  FarmersDelete204Response,
  FarmersDeletedefaultResponse,
  FarmersGetCascadeDeleteJobDetails200Response,
  FarmersGetCascadeDeleteJobDetailsdefaultResponse,
  FarmersCreateCascadeDeleteJob202Response,
  FarmersCreateCascadeDeleteJobdefaultResponse,
  FarmOperationsCreateDataIngestionJob202Response,
  FarmOperationsCreateDataIngestionJobdefaultResponse,
  FarmOperationsGetDataIngestionJobDetails200Response,
  FarmOperationsGetDataIngestionJobDetailsdefaultResponse,
  FarmsListByFarmerId200Response,
  FarmsListByFarmerIddefaultResponse,
  FarmsList200Response,
  FarmsListdefaultResponse,
  FarmsGet200Response,
  FarmsGetdefaultResponse,
  FarmsCreateOrUpdate200Response,
  FarmsCreateOrUpdate201Response,
  FarmsCreateOrUpdatedefaultResponse,
  FarmsDelete204Response,
  FarmsDeletedefaultResponse,
  FarmsGetCascadeDeleteJobDetails200Response,
  FarmsGetCascadeDeleteJobDetailsdefaultResponse,
  FarmsCreateCascadeDeleteJob202Response,
  FarmsCreateCascadeDeleteJobdefaultResponse,
  FieldsListByFarmerId200Response,
  FieldsListByFarmerIddefaultResponse,
  FieldsList200Response,
  FieldsListdefaultResponse,
  FieldsGet200Response,
  FieldsGetdefaultResponse,
  FieldsCreateOrUpdate200Response,
  FieldsCreateOrUpdate201Response,
  FieldsCreateOrUpdatedefaultResponse,
  FieldsDelete204Response,
  FieldsDeletedefaultResponse,
  FieldsGetCascadeDeleteJobDetails200Response,
  FieldsGetCascadeDeleteJobDetailsdefaultResponse,
  FieldsCreateCascadeDeleteJob202Response,
  FieldsCreateCascadeDeleteJobdefaultResponse,
  HarvestDataListByFarmerId200Response,
  HarvestDataListByFarmerIddefaultResponse,
  HarvestDataList200Response,
  HarvestDataListdefaultResponse,
  HarvestDataGet200Response,
  HarvestDataGetdefaultResponse,
  HarvestDataCreateOrUpdate200Response,
  HarvestDataCreateOrUpdate201Response,
  HarvestDataCreateOrUpdatedefaultResponse,
  HarvestDataDelete204Response,
  HarvestDataDeletedefaultResponse,
  ImageProcessingCreateRasterizeJob202Response,
  ImageProcessingCreateRasterizeJobdefaultResponse,
  OAuthProvidersList200Response,
  OAuthProvidersListdefaultResponse,
  OAuthProvidersGet200Response,
  OAuthProvidersGetdefaultResponse,
  OAuthProvidersCreateOrUpdate200Response,
  OAuthProvidersCreateOrUpdate201Response,
  OAuthProvidersCreateOrUpdatedefaultResponse,
  OAuthProvidersDelete204Response,
  OAuthProvidersDeletedefaultResponse,
  OAuthTokensList200Response,
  OAuthTokensListdefaultResponse,
  OAuthTokensGetOAuthConnectionLink200Response,
  OAuthTokensGetOAuthConnectionLinkdefaultResponse,
  OAuthTokensGetCascadeDeleteJobDetails200Response,
  OAuthTokensGetCascadeDeleteJobDetailsdefaultResponse,
  OAuthTokensCreateCascadeDeleteJob202Response,
  OAuthTokensCreateCascadeDeleteJobdefaultResponse,
  PlantingDataListByFarmerId200Response,
  PlantingDataListByFarmerIddefaultResponse,
  PlantingDataList200Response,
  PlantingDataListdefaultResponse,
  PlantingDataGet200Response,
  PlantingDataGetdefaultResponse,
  PlantingDataCreateOrUpdate200Response,
  PlantingDataCreateOrUpdate201Response,
  PlantingDataCreateOrUpdatedefaultResponse,
  PlantingDataDelete204Response,
  PlantingDataDeletedefaultResponse,
  ScenesList200Response,
  ScenesListdefaultResponse,
  ScenesCreateSatelliteDataIngestionJob202Response,
  ScenesCreateSatelliteDataIngestionJobdefaultResponse,
  ScenesGetSatelliteDataIngestionJobDetails200Response,
  ScenesGetSatelliteDataIngestionJobDetailsdefaultResponse,
  ScenesDownload200Response,
  ScenesDownloaddefaultResponse,
  SeasonalFieldsListByFarmerId200Response,
  SeasonalFieldsListByFarmerIddefaultResponse,
  SeasonalFieldsList200Response,
  SeasonalFieldsListdefaultResponse,
  SeasonalFieldsGet200Response,
  SeasonalFieldsGetdefaultResponse,
  SeasonalFieldsCreateOrUpdate200Response,
  SeasonalFieldsCreateOrUpdate201Response,
  SeasonalFieldsCreateOrUpdatedefaultResponse,
  SeasonalFieldsDelete204Response,
  SeasonalFieldsDeletedefaultResponse,
  SeasonalFieldsGetCascadeDeleteJobDetails200Response,
  SeasonalFieldsGetCascadeDeleteJobDetailsdefaultResponse,
  SeasonalFieldsCreateCascadeDeleteJob202Response,
  SeasonalFieldsCreateCascadeDeleteJobdefaultResponse,
  SeasonsList200Response,
  SeasonsListdefaultResponse,
  SeasonsGet200Response,
  SeasonsGetdefaultResponse,
  SeasonsCreateOrUpdate200Response,
  SeasonsCreateOrUpdate201Response,
  SeasonsCreateOrUpdatedefaultResponse,
  SeasonsDelete204Response,
  SeasonsDeletedefaultResponse,
  TillageDataListByFarmerId200Response,
  TillageDataListByFarmerIddefaultResponse,
  TillageDataList200Response,
  TillageDataListdefaultResponse,
  TillageDataGet200Response,
  TillageDataGetdefaultResponse,
  TillageDataCreateOrUpdate200Response,
  TillageDataCreateOrUpdate201Response,
  TillageDataCreateOrUpdatedefaultResponse,
  TillageDataDelete204Response,
  TillageDataDeletedefaultResponse,
  WeatherList200Response,
  WeatherListdefaultResponse,
  WeatherGetDataIngestionJobDetails200Response,
  WeatherGetDataIngestionJobDetailsdefaultResponse,
  WeatherCreateDataIngestionJob202Response,
  WeatherCreateDataIngestionJobdefaultResponse,
  WeatherGetDataDeleteJobDetails200Response,
  WeatherGetDataDeleteJobDetailsdefaultResponse,
  WeatherCreateDataDeleteJob202Response,
  WeatherCreateDataDeleteJobdefaultResponse
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /farmers/{farmerId}/application-data": ["200"],
  "GET /application-data": ["200"],
  "GET /farmers/{farmerId}/application-data/{applicationDataId}": ["200"],
  "PATCH /farmers/{farmerId}/application-data/{applicationDataId}": [
    "200",
    "201"
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
  "PUT /weather/delete-data/{jobId}": ["202"]
};

export function isUnexpected(
  response:
    | ApplicationDataListByFarmerId200Response
    | ApplicationDataListByFarmerIddefaultResponse
): response is ApplicationDataListByFarmerIddefaultResponse;
export function isUnexpected(
  response: ApplicationDataList200Response | ApplicationDataListdefaultResponse
): response is ApplicationDataListdefaultResponse;
export function isUnexpected(
  response: ApplicationDataGet200Response | ApplicationDataGetdefaultResponse
): response is ApplicationDataGetdefaultResponse;
export function isUnexpected(
  response:
    | ApplicationDataCreateOrUpdate200Response
    | ApplicationDataCreateOrUpdate201Response
    | ApplicationDataCreateOrUpdatedefaultResponse
): response is ApplicationDataCreateOrUpdatedefaultResponse;
export function isUnexpected(
  response:
    | ApplicationDataDelete204Response
    | ApplicationDataDeletedefaultResponse
): response is ApplicationDataDeletedefaultResponse;
export function isUnexpected(
  response:
    | AttachmentsListByFarmerId200Response
    | AttachmentsListByFarmerIddefaultResponse
): response is AttachmentsListByFarmerIddefaultResponse;
export function isUnexpected(
  response: AttachmentsGet200Response | AttachmentsGetdefaultResponse
): response is AttachmentsGetdefaultResponse;
export function isUnexpected(
  response:
    | AttachmentsCreateOrUpdate200Response
    | AttachmentsCreateOrUpdate201Response
    | AttachmentsCreateOrUpdatedefaultResponse
): response is AttachmentsCreateOrUpdatedefaultResponse;
export function isUnexpected(
  response: AttachmentsDelete204Response | AttachmentsDeletedefaultResponse
): response is AttachmentsDeletedefaultResponse;
export function isUnexpected(
  response: AttachmentsDownload200Response | AttachmentsDownloaddefaultResponse
): response is AttachmentsDownloaddefaultResponse;
export function isUnexpected(
  response:
    | BoundariesListByFarmerId200Response
    | BoundariesListByFarmerIddefaultResponse
): response is BoundariesListByFarmerIddefaultResponse;
export function isUnexpected(
  response:
    | BoundariesSearchByFarmerId200Response
    | BoundariesSearchByFarmerIddefaultResponse
): response is BoundariesSearchByFarmerIddefaultResponse;
export function isUnexpected(
  response: BoundariesList200Response | BoundariesListdefaultResponse
): response is BoundariesListdefaultResponse;
export function isUnexpected(
  response: BoundariesSearch200Response | BoundariesSearchdefaultResponse
): response is BoundariesSearchdefaultResponse;
export function isUnexpected(
  response:
    | BoundariesGetCascadeDeleteJobDetails200Response
    | BoundariesGetCascadeDeleteJobDetailsdefaultResponse
): response is BoundariesGetCascadeDeleteJobDetailsdefaultResponse;
export function isUnexpected(
  response:
    | BoundariesCreateCascadeDeleteJob202Response
    | BoundariesCreateCascadeDeleteJobdefaultResponse
): response is BoundariesCreateCascadeDeleteJobdefaultResponse;
export function isUnexpected(
  response: BoundariesGet200Response | BoundariesGetdefaultResponse
): response is BoundariesGetdefaultResponse;
export function isUnexpected(
  response:
    | BoundariesCreateOrUpdate200Response
    | BoundariesCreateOrUpdate201Response
    | BoundariesCreateOrUpdatedefaultResponse
): response is BoundariesCreateOrUpdatedefaultResponse;
export function isUnexpected(
  response: BoundariesDelete204Response | BoundariesDeletedefaultResponse
): response is BoundariesDeletedefaultResponse;
export function isUnexpected(
  response:
    | BoundariesGetOverlap200Response
    | BoundariesGetOverlapdefaultResponse
): response is BoundariesGetOverlapdefaultResponse;
export function isUnexpected(
  response: CropsList200Response | CropsListdefaultResponse
): response is CropsListdefaultResponse;
export function isUnexpected(
  response: CropsGet200Response | CropsGetdefaultResponse
): response is CropsGetdefaultResponse;
export function isUnexpected(
  response:
    | CropsCreateOrUpdate200Response
    | CropsCreateOrUpdate201Response
    | CropsCreateOrUpdatedefaultResponse
): response is CropsCreateOrUpdatedefaultResponse;
export function isUnexpected(
  response: CropsDelete204Response | CropsDeletedefaultResponse
): response is CropsDeletedefaultResponse;
export function isUnexpected(
  response:
    | CropVarietiesListByCropId200Response
    | CropVarietiesListByCropIddefaultResponse
): response is CropVarietiesListByCropIddefaultResponse;
export function isUnexpected(
  response: CropVarietiesList200Response | CropVarietiesListdefaultResponse
): response is CropVarietiesListdefaultResponse;
export function isUnexpected(
  response: CropVarietiesGet200Response | CropVarietiesGetdefaultResponse
): response is CropVarietiesGetdefaultResponse;
export function isUnexpected(
  response:
    | CropVarietiesCreateOrUpdate200Response
    | CropVarietiesCreateOrUpdate201Response
    | CropVarietiesCreateOrUpdatedefaultResponse
): response is CropVarietiesCreateOrUpdatedefaultResponse;
export function isUnexpected(
  response: CropVarietiesDelete204Response | CropVarietiesDeletedefaultResponse
): response is CropVarietiesDeletedefaultResponse;
export function isUnexpected(
  response: FarmersList200Response | FarmersListdefaultResponse
): response is FarmersListdefaultResponse;
export function isUnexpected(
  response: FarmersGet200Response | FarmersGetdefaultResponse
): response is FarmersGetdefaultResponse;
export function isUnexpected(
  response:
    | FarmersCreateOrUpdate200Response
    | FarmersCreateOrUpdate201Response
    | FarmersCreateOrUpdatedefaultResponse
): response is FarmersCreateOrUpdatedefaultResponse;
export function isUnexpected(
  response: FarmersDelete204Response | FarmersDeletedefaultResponse
): response is FarmersDeletedefaultResponse;
export function isUnexpected(
  response:
    | FarmersGetCascadeDeleteJobDetails200Response
    | FarmersGetCascadeDeleteJobDetailsdefaultResponse
): response is FarmersGetCascadeDeleteJobDetailsdefaultResponse;
export function isUnexpected(
  response:
    | FarmersCreateCascadeDeleteJob202Response
    | FarmersCreateCascadeDeleteJobdefaultResponse
): response is FarmersCreateCascadeDeleteJobdefaultResponse;
export function isUnexpected(
  response:
    | FarmOperationsCreateDataIngestionJob202Response
    | FarmOperationsCreateDataIngestionJobdefaultResponse
): response is FarmOperationsCreateDataIngestionJobdefaultResponse;
export function isUnexpected(
  response:
    | FarmOperationsGetDataIngestionJobDetails200Response
    | FarmOperationsGetDataIngestionJobDetailsdefaultResponse
): response is FarmOperationsGetDataIngestionJobDetailsdefaultResponse;
export function isUnexpected(
  response: FarmsListByFarmerId200Response | FarmsListByFarmerIddefaultResponse
): response is FarmsListByFarmerIddefaultResponse;
export function isUnexpected(
  response: FarmsList200Response | FarmsListdefaultResponse
): response is FarmsListdefaultResponse;
export function isUnexpected(
  response: FarmsGet200Response | FarmsGetdefaultResponse
): response is FarmsGetdefaultResponse;
export function isUnexpected(
  response:
    | FarmsCreateOrUpdate200Response
    | FarmsCreateOrUpdate201Response
    | FarmsCreateOrUpdatedefaultResponse
): response is FarmsCreateOrUpdatedefaultResponse;
export function isUnexpected(
  response: FarmsDelete204Response | FarmsDeletedefaultResponse
): response is FarmsDeletedefaultResponse;
export function isUnexpected(
  response:
    | FarmsGetCascadeDeleteJobDetails200Response
    | FarmsGetCascadeDeleteJobDetailsdefaultResponse
): response is FarmsGetCascadeDeleteJobDetailsdefaultResponse;
export function isUnexpected(
  response:
    | FarmsCreateCascadeDeleteJob202Response
    | FarmsCreateCascadeDeleteJobdefaultResponse
): response is FarmsCreateCascadeDeleteJobdefaultResponse;
export function isUnexpected(
  response:
    | FieldsListByFarmerId200Response
    | FieldsListByFarmerIddefaultResponse
): response is FieldsListByFarmerIddefaultResponse;
export function isUnexpected(
  response: FieldsList200Response | FieldsListdefaultResponse
): response is FieldsListdefaultResponse;
export function isUnexpected(
  response: FieldsGet200Response | FieldsGetdefaultResponse
): response is FieldsGetdefaultResponse;
export function isUnexpected(
  response:
    | FieldsCreateOrUpdate200Response
    | FieldsCreateOrUpdate201Response
    | FieldsCreateOrUpdatedefaultResponse
): response is FieldsCreateOrUpdatedefaultResponse;
export function isUnexpected(
  response: FieldsDelete204Response | FieldsDeletedefaultResponse
): response is FieldsDeletedefaultResponse;
export function isUnexpected(
  response:
    | FieldsGetCascadeDeleteJobDetails200Response
    | FieldsGetCascadeDeleteJobDetailsdefaultResponse
): response is FieldsGetCascadeDeleteJobDetailsdefaultResponse;
export function isUnexpected(
  response:
    | FieldsCreateCascadeDeleteJob202Response
    | FieldsCreateCascadeDeleteJobdefaultResponse
): response is FieldsCreateCascadeDeleteJobdefaultResponse;
export function isUnexpected(
  response:
    | HarvestDataListByFarmerId200Response
    | HarvestDataListByFarmerIddefaultResponse
): response is HarvestDataListByFarmerIddefaultResponse;
export function isUnexpected(
  response: HarvestDataList200Response | HarvestDataListdefaultResponse
): response is HarvestDataListdefaultResponse;
export function isUnexpected(
  response: HarvestDataGet200Response | HarvestDataGetdefaultResponse
): response is HarvestDataGetdefaultResponse;
export function isUnexpected(
  response:
    | HarvestDataCreateOrUpdate200Response
    | HarvestDataCreateOrUpdate201Response
    | HarvestDataCreateOrUpdatedefaultResponse
): response is HarvestDataCreateOrUpdatedefaultResponse;
export function isUnexpected(
  response: HarvestDataDelete204Response | HarvestDataDeletedefaultResponse
): response is HarvestDataDeletedefaultResponse;
export function isUnexpected(
  response:
    | ImageProcessingCreateRasterizeJob202Response
    | ImageProcessingCreateRasterizeJobdefaultResponse
): response is ImageProcessingCreateRasterizeJobdefaultResponse;
export function isUnexpected(
  response: OAuthProvidersList200Response | OAuthProvidersListdefaultResponse
): response is OAuthProvidersListdefaultResponse;
export function isUnexpected(
  response: OAuthProvidersGet200Response | OAuthProvidersGetdefaultResponse
): response is OAuthProvidersGetdefaultResponse;
export function isUnexpected(
  response:
    | OAuthProvidersCreateOrUpdate200Response
    | OAuthProvidersCreateOrUpdate201Response
    | OAuthProvidersCreateOrUpdatedefaultResponse
): response is OAuthProvidersCreateOrUpdatedefaultResponse;
export function isUnexpected(
  response:
    | OAuthProvidersDelete204Response
    | OAuthProvidersDeletedefaultResponse
): response is OAuthProvidersDeletedefaultResponse;
export function isUnexpected(
  response: OAuthTokensList200Response | OAuthTokensListdefaultResponse
): response is OAuthTokensListdefaultResponse;
export function isUnexpected(
  response:
    | OAuthTokensGetOAuthConnectionLink200Response
    | OAuthTokensGetOAuthConnectionLinkdefaultResponse
): response is OAuthTokensGetOAuthConnectionLinkdefaultResponse;
export function isUnexpected(
  response:
    | OAuthTokensGetCascadeDeleteJobDetails200Response
    | OAuthTokensGetCascadeDeleteJobDetailsdefaultResponse
): response is OAuthTokensGetCascadeDeleteJobDetailsdefaultResponse;
export function isUnexpected(
  response:
    | OAuthTokensCreateCascadeDeleteJob202Response
    | OAuthTokensCreateCascadeDeleteJobdefaultResponse
): response is OAuthTokensCreateCascadeDeleteJobdefaultResponse;
export function isUnexpected(
  response:
    | PlantingDataListByFarmerId200Response
    | PlantingDataListByFarmerIddefaultResponse
): response is PlantingDataListByFarmerIddefaultResponse;
export function isUnexpected(
  response: PlantingDataList200Response | PlantingDataListdefaultResponse
): response is PlantingDataListdefaultResponse;
export function isUnexpected(
  response: PlantingDataGet200Response | PlantingDataGetdefaultResponse
): response is PlantingDataGetdefaultResponse;
export function isUnexpected(
  response:
    | PlantingDataCreateOrUpdate200Response
    | PlantingDataCreateOrUpdate201Response
    | PlantingDataCreateOrUpdatedefaultResponse
): response is PlantingDataCreateOrUpdatedefaultResponse;
export function isUnexpected(
  response: PlantingDataDelete204Response | PlantingDataDeletedefaultResponse
): response is PlantingDataDeletedefaultResponse;
export function isUnexpected(
  response: ScenesList200Response | ScenesListdefaultResponse
): response is ScenesListdefaultResponse;
export function isUnexpected(
  response:
    | ScenesCreateSatelliteDataIngestionJob202Response
    | ScenesCreateSatelliteDataIngestionJobdefaultResponse
): response is ScenesCreateSatelliteDataIngestionJobdefaultResponse;
export function isUnexpected(
  response:
    | ScenesGetSatelliteDataIngestionJobDetails200Response
    | ScenesGetSatelliteDataIngestionJobDetailsdefaultResponse
): response is ScenesGetSatelliteDataIngestionJobDetailsdefaultResponse;
export function isUnexpected(
  response: ScenesDownload200Response | ScenesDownloaddefaultResponse
): response is ScenesDownloaddefaultResponse;
export function isUnexpected(
  response:
    | SeasonalFieldsListByFarmerId200Response
    | SeasonalFieldsListByFarmerIddefaultResponse
): response is SeasonalFieldsListByFarmerIddefaultResponse;
export function isUnexpected(
  response: SeasonalFieldsList200Response | SeasonalFieldsListdefaultResponse
): response is SeasonalFieldsListdefaultResponse;
export function isUnexpected(
  response: SeasonalFieldsGet200Response | SeasonalFieldsGetdefaultResponse
): response is SeasonalFieldsGetdefaultResponse;
export function isUnexpected(
  response:
    | SeasonalFieldsCreateOrUpdate200Response
    | SeasonalFieldsCreateOrUpdate201Response
    | SeasonalFieldsCreateOrUpdatedefaultResponse
): response is SeasonalFieldsCreateOrUpdatedefaultResponse;
export function isUnexpected(
  response:
    | SeasonalFieldsDelete204Response
    | SeasonalFieldsDeletedefaultResponse
): response is SeasonalFieldsDeletedefaultResponse;
export function isUnexpected(
  response:
    | SeasonalFieldsGetCascadeDeleteJobDetails200Response
    | SeasonalFieldsGetCascadeDeleteJobDetailsdefaultResponse
): response is SeasonalFieldsGetCascadeDeleteJobDetailsdefaultResponse;
export function isUnexpected(
  response:
    | SeasonalFieldsCreateCascadeDeleteJob202Response
    | SeasonalFieldsCreateCascadeDeleteJobdefaultResponse
): response is SeasonalFieldsCreateCascadeDeleteJobdefaultResponse;
export function isUnexpected(
  response: SeasonsList200Response | SeasonsListdefaultResponse
): response is SeasonsListdefaultResponse;
export function isUnexpected(
  response: SeasonsGet200Response | SeasonsGetdefaultResponse
): response is SeasonsGetdefaultResponse;
export function isUnexpected(
  response:
    | SeasonsCreateOrUpdate200Response
    | SeasonsCreateOrUpdate201Response
    | SeasonsCreateOrUpdatedefaultResponse
): response is SeasonsCreateOrUpdatedefaultResponse;
export function isUnexpected(
  response: SeasonsDelete204Response | SeasonsDeletedefaultResponse
): response is SeasonsDeletedefaultResponse;
export function isUnexpected(
  response:
    | TillageDataListByFarmerId200Response
    | TillageDataListByFarmerIddefaultResponse
): response is TillageDataListByFarmerIddefaultResponse;
export function isUnexpected(
  response: TillageDataList200Response | TillageDataListdefaultResponse
): response is TillageDataListdefaultResponse;
export function isUnexpected(
  response: TillageDataGet200Response | TillageDataGetdefaultResponse
): response is TillageDataGetdefaultResponse;
export function isUnexpected(
  response:
    | TillageDataCreateOrUpdate200Response
    | TillageDataCreateOrUpdate201Response
    | TillageDataCreateOrUpdatedefaultResponse
): response is TillageDataCreateOrUpdatedefaultResponse;
export function isUnexpected(
  response: TillageDataDelete204Response | TillageDataDeletedefaultResponse
): response is TillageDataDeletedefaultResponse;
export function isUnexpected(
  response: WeatherList200Response | WeatherListdefaultResponse
): response is WeatherListdefaultResponse;
export function isUnexpected(
  response:
    | WeatherGetDataIngestionJobDetails200Response
    | WeatherGetDataIngestionJobDetailsdefaultResponse
): response is WeatherGetDataIngestionJobDetailsdefaultResponse;
export function isUnexpected(
  response:
    | WeatherCreateDataIngestionJob202Response
    | WeatherCreateDataIngestionJobdefaultResponse
): response is WeatherCreateDataIngestionJobdefaultResponse;
export function isUnexpected(
  response:
    | WeatherGetDataDeleteJobDetails200Response
    | WeatherGetDataDeleteJobDetailsdefaultResponse
): response is WeatherGetDataDeleteJobDetailsdefaultResponse;
export function isUnexpected(
  response:
    | WeatherCreateDataDeleteJob202Response
    | WeatherCreateDataDeleteJobdefaultResponse
): response is WeatherCreateDataDeleteJobdefaultResponse;
export function isUnexpected(
  response:
    | ApplicationDataListByFarmerId200Response
    | ApplicationDataListByFarmerIddefaultResponse
    | ApplicationDataList200Response
    | ApplicationDataListdefaultResponse
    | ApplicationDataGet200Response
    | ApplicationDataGetdefaultResponse
    | ApplicationDataCreateOrUpdate200Response
    | ApplicationDataCreateOrUpdate201Response
    | ApplicationDataCreateOrUpdatedefaultResponse
    | ApplicationDataDelete204Response
    | ApplicationDataDeletedefaultResponse
    | AttachmentsListByFarmerId200Response
    | AttachmentsListByFarmerIddefaultResponse
    | AttachmentsGet200Response
    | AttachmentsGetdefaultResponse
    | AttachmentsCreateOrUpdate200Response
    | AttachmentsCreateOrUpdate201Response
    | AttachmentsCreateOrUpdatedefaultResponse
    | AttachmentsDelete204Response
    | AttachmentsDeletedefaultResponse
    | AttachmentsDownload200Response
    | AttachmentsDownloaddefaultResponse
    | BoundariesListByFarmerId200Response
    | BoundariesListByFarmerIddefaultResponse
    | BoundariesSearchByFarmerId200Response
    | BoundariesSearchByFarmerIddefaultResponse
    | BoundariesList200Response
    | BoundariesListdefaultResponse
    | BoundariesSearch200Response
    | BoundariesSearchdefaultResponse
    | BoundariesGetCascadeDeleteJobDetails200Response
    | BoundariesGetCascadeDeleteJobDetailsdefaultResponse
    | BoundariesCreateCascadeDeleteJob202Response
    | BoundariesCreateCascadeDeleteJobdefaultResponse
    | BoundariesGet200Response
    | BoundariesGetdefaultResponse
    | BoundariesCreateOrUpdate200Response
    | BoundariesCreateOrUpdate201Response
    | BoundariesCreateOrUpdatedefaultResponse
    | BoundariesDelete204Response
    | BoundariesDeletedefaultResponse
    | BoundariesGetOverlap200Response
    | BoundariesGetOverlapdefaultResponse
    | CropsList200Response
    | CropsListdefaultResponse
    | CropsGet200Response
    | CropsGetdefaultResponse
    | CropsCreateOrUpdate200Response
    | CropsCreateOrUpdate201Response
    | CropsCreateOrUpdatedefaultResponse
    | CropsDelete204Response
    | CropsDeletedefaultResponse
    | CropVarietiesListByCropId200Response
    | CropVarietiesListByCropIddefaultResponse
    | CropVarietiesList200Response
    | CropVarietiesListdefaultResponse
    | CropVarietiesGet200Response
    | CropVarietiesGetdefaultResponse
    | CropVarietiesCreateOrUpdate200Response
    | CropVarietiesCreateOrUpdate201Response
    | CropVarietiesCreateOrUpdatedefaultResponse
    | CropVarietiesDelete204Response
    | CropVarietiesDeletedefaultResponse
    | FarmersList200Response
    | FarmersListdefaultResponse
    | FarmersGet200Response
    | FarmersGetdefaultResponse
    | FarmersCreateOrUpdate200Response
    | FarmersCreateOrUpdate201Response
    | FarmersCreateOrUpdatedefaultResponse
    | FarmersDelete204Response
    | FarmersDeletedefaultResponse
    | FarmersGetCascadeDeleteJobDetails200Response
    | FarmersGetCascadeDeleteJobDetailsdefaultResponse
    | FarmersCreateCascadeDeleteJob202Response
    | FarmersCreateCascadeDeleteJobdefaultResponse
    | FarmOperationsCreateDataIngestionJob202Response
    | FarmOperationsCreateDataIngestionJobdefaultResponse
    | FarmOperationsGetDataIngestionJobDetails200Response
    | FarmOperationsGetDataIngestionJobDetailsdefaultResponse
    | FarmsListByFarmerId200Response
    | FarmsListByFarmerIddefaultResponse
    | FarmsList200Response
    | FarmsListdefaultResponse
    | FarmsGet200Response
    | FarmsGetdefaultResponse
    | FarmsCreateOrUpdate200Response
    | FarmsCreateOrUpdate201Response
    | FarmsCreateOrUpdatedefaultResponse
    | FarmsDelete204Response
    | FarmsDeletedefaultResponse
    | FarmsGetCascadeDeleteJobDetails200Response
    | FarmsGetCascadeDeleteJobDetailsdefaultResponse
    | FarmsCreateCascadeDeleteJob202Response
    | FarmsCreateCascadeDeleteJobdefaultResponse
    | FieldsListByFarmerId200Response
    | FieldsListByFarmerIddefaultResponse
    | FieldsList200Response
    | FieldsListdefaultResponse
    | FieldsGet200Response
    | FieldsGetdefaultResponse
    | FieldsCreateOrUpdate200Response
    | FieldsCreateOrUpdate201Response
    | FieldsCreateOrUpdatedefaultResponse
    | FieldsDelete204Response
    | FieldsDeletedefaultResponse
    | FieldsGetCascadeDeleteJobDetails200Response
    | FieldsGetCascadeDeleteJobDetailsdefaultResponse
    | FieldsCreateCascadeDeleteJob202Response
    | FieldsCreateCascadeDeleteJobdefaultResponse
    | HarvestDataListByFarmerId200Response
    | HarvestDataListByFarmerIddefaultResponse
    | HarvestDataList200Response
    | HarvestDataListdefaultResponse
    | HarvestDataGet200Response
    | HarvestDataGetdefaultResponse
    | HarvestDataCreateOrUpdate200Response
    | HarvestDataCreateOrUpdate201Response
    | HarvestDataCreateOrUpdatedefaultResponse
    | HarvestDataDelete204Response
    | HarvestDataDeletedefaultResponse
    | ImageProcessingCreateRasterizeJob202Response
    | ImageProcessingCreateRasterizeJobdefaultResponse
    | OAuthProvidersList200Response
    | OAuthProvidersListdefaultResponse
    | OAuthProvidersGet200Response
    | OAuthProvidersGetdefaultResponse
    | OAuthProvidersCreateOrUpdate200Response
    | OAuthProvidersCreateOrUpdate201Response
    | OAuthProvidersCreateOrUpdatedefaultResponse
    | OAuthProvidersDelete204Response
    | OAuthProvidersDeletedefaultResponse
    | OAuthTokensList200Response
    | OAuthTokensListdefaultResponse
    | OAuthTokensGetOAuthConnectionLink200Response
    | OAuthTokensGetOAuthConnectionLinkdefaultResponse
    | OAuthTokensGetCascadeDeleteJobDetails200Response
    | OAuthTokensGetCascadeDeleteJobDetailsdefaultResponse
    | OAuthTokensCreateCascadeDeleteJob202Response
    | OAuthTokensCreateCascadeDeleteJobdefaultResponse
    | PlantingDataListByFarmerId200Response
    | PlantingDataListByFarmerIddefaultResponse
    | PlantingDataList200Response
    | PlantingDataListdefaultResponse
    | PlantingDataGet200Response
    | PlantingDataGetdefaultResponse
    | PlantingDataCreateOrUpdate200Response
    | PlantingDataCreateOrUpdate201Response
    | PlantingDataCreateOrUpdatedefaultResponse
    | PlantingDataDelete204Response
    | PlantingDataDeletedefaultResponse
    | ScenesList200Response
    | ScenesListdefaultResponse
    | ScenesCreateSatelliteDataIngestionJob202Response
    | ScenesCreateSatelliteDataIngestionJobdefaultResponse
    | ScenesGetSatelliteDataIngestionJobDetails200Response
    | ScenesGetSatelliteDataIngestionJobDetailsdefaultResponse
    | ScenesDownload200Response
    | ScenesDownloaddefaultResponse
    | SeasonalFieldsListByFarmerId200Response
    | SeasonalFieldsListByFarmerIddefaultResponse
    | SeasonalFieldsList200Response
    | SeasonalFieldsListdefaultResponse
    | SeasonalFieldsGet200Response
    | SeasonalFieldsGetdefaultResponse
    | SeasonalFieldsCreateOrUpdate200Response
    | SeasonalFieldsCreateOrUpdate201Response
    | SeasonalFieldsCreateOrUpdatedefaultResponse
    | SeasonalFieldsDelete204Response
    | SeasonalFieldsDeletedefaultResponse
    | SeasonalFieldsGetCascadeDeleteJobDetails200Response
    | SeasonalFieldsGetCascadeDeleteJobDetailsdefaultResponse
    | SeasonalFieldsCreateCascadeDeleteJob202Response
    | SeasonalFieldsCreateCascadeDeleteJobdefaultResponse
    | SeasonsList200Response
    | SeasonsListdefaultResponse
    | SeasonsGet200Response
    | SeasonsGetdefaultResponse
    | SeasonsCreateOrUpdate200Response
    | SeasonsCreateOrUpdate201Response
    | SeasonsCreateOrUpdatedefaultResponse
    | SeasonsDelete204Response
    | SeasonsDeletedefaultResponse
    | TillageDataListByFarmerId200Response
    | TillageDataListByFarmerIddefaultResponse
    | TillageDataList200Response
    | TillageDataListdefaultResponse
    | TillageDataGet200Response
    | TillageDataGetdefaultResponse
    | TillageDataCreateOrUpdate200Response
    | TillageDataCreateOrUpdate201Response
    | TillageDataCreateOrUpdatedefaultResponse
    | TillageDataDelete204Response
    | TillageDataDeletedefaultResponse
    | WeatherList200Response
    | WeatherListdefaultResponse
    | WeatherGetDataIngestionJobDetails200Response
    | WeatherGetDataIngestionJobDetailsdefaultResponse
    | WeatherCreateDataIngestionJob202Response
    | WeatherCreateDataIngestionJobdefaultResponse
    | WeatherGetDataDeleteJobDetails200Response
    | WeatherGetDataDeleteJobDetailsdefaultResponse
    | WeatherCreateDataDeleteJob202Response
    | WeatherCreateDataDeleteJobdefaultResponse
): response is
  | ApplicationDataListByFarmerIddefaultResponse
  | ApplicationDataListdefaultResponse
  | ApplicationDataGetdefaultResponse
  | ApplicationDataCreateOrUpdatedefaultResponse
  | ApplicationDataDeletedefaultResponse
  | AttachmentsListByFarmerIddefaultResponse
  | AttachmentsGetdefaultResponse
  | AttachmentsCreateOrUpdatedefaultResponse
  | AttachmentsDeletedefaultResponse
  | AttachmentsDownloaddefaultResponse
  | BoundariesListByFarmerIddefaultResponse
  | BoundariesSearchByFarmerIddefaultResponse
  | BoundariesListdefaultResponse
  | BoundariesSearchdefaultResponse
  | BoundariesGetCascadeDeleteJobDetailsdefaultResponse
  | BoundariesCreateCascadeDeleteJobdefaultResponse
  | BoundariesGetdefaultResponse
  | BoundariesCreateOrUpdatedefaultResponse
  | BoundariesDeletedefaultResponse
  | BoundariesGetOverlapdefaultResponse
  | CropsListdefaultResponse
  | CropsGetdefaultResponse
  | CropsCreateOrUpdatedefaultResponse
  | CropsDeletedefaultResponse
  | CropVarietiesListByCropIddefaultResponse
  | CropVarietiesListdefaultResponse
  | CropVarietiesGetdefaultResponse
  | CropVarietiesCreateOrUpdatedefaultResponse
  | CropVarietiesDeletedefaultResponse
  | FarmersListdefaultResponse
  | FarmersGetdefaultResponse
  | FarmersCreateOrUpdatedefaultResponse
  | FarmersDeletedefaultResponse
  | FarmersGetCascadeDeleteJobDetailsdefaultResponse
  | FarmersCreateCascadeDeleteJobdefaultResponse
  | FarmOperationsCreateDataIngestionJobdefaultResponse
  | FarmOperationsGetDataIngestionJobDetailsdefaultResponse
  | FarmsListByFarmerIddefaultResponse
  | FarmsListdefaultResponse
  | FarmsGetdefaultResponse
  | FarmsCreateOrUpdatedefaultResponse
  | FarmsDeletedefaultResponse
  | FarmsGetCascadeDeleteJobDetailsdefaultResponse
  | FarmsCreateCascadeDeleteJobdefaultResponse
  | FieldsListByFarmerIddefaultResponse
  | FieldsListdefaultResponse
  | FieldsGetdefaultResponse
  | FieldsCreateOrUpdatedefaultResponse
  | FieldsDeletedefaultResponse
  | FieldsGetCascadeDeleteJobDetailsdefaultResponse
  | FieldsCreateCascadeDeleteJobdefaultResponse
  | HarvestDataListByFarmerIddefaultResponse
  | HarvestDataListdefaultResponse
  | HarvestDataGetdefaultResponse
  | HarvestDataCreateOrUpdatedefaultResponse
  | HarvestDataDeletedefaultResponse
  | ImageProcessingCreateRasterizeJobdefaultResponse
  | OAuthProvidersListdefaultResponse
  | OAuthProvidersGetdefaultResponse
  | OAuthProvidersCreateOrUpdatedefaultResponse
  | OAuthProvidersDeletedefaultResponse
  | OAuthTokensListdefaultResponse
  | OAuthTokensGetOAuthConnectionLinkdefaultResponse
  | OAuthTokensGetCascadeDeleteJobDetailsdefaultResponse
  | OAuthTokensCreateCascadeDeleteJobdefaultResponse
  | PlantingDataListByFarmerIddefaultResponse
  | PlantingDataListdefaultResponse
  | PlantingDataGetdefaultResponse
  | PlantingDataCreateOrUpdatedefaultResponse
  | PlantingDataDeletedefaultResponse
  | ScenesListdefaultResponse
  | ScenesCreateSatelliteDataIngestionJobdefaultResponse
  | ScenesGetSatelliteDataIngestionJobDetailsdefaultResponse
  | ScenesDownloaddefaultResponse
  | SeasonalFieldsListByFarmerIddefaultResponse
  | SeasonalFieldsListdefaultResponse
  | SeasonalFieldsGetdefaultResponse
  | SeasonalFieldsCreateOrUpdatedefaultResponse
  | SeasonalFieldsDeletedefaultResponse
  | SeasonalFieldsGetCascadeDeleteJobDetailsdefaultResponse
  | SeasonalFieldsCreateCascadeDeleteJobdefaultResponse
  | SeasonsListdefaultResponse
  | SeasonsGetdefaultResponse
  | SeasonsCreateOrUpdatedefaultResponse
  | SeasonsDeletedefaultResponse
  | TillageDataListByFarmerIddefaultResponse
  | TillageDataListdefaultResponse
  | TillageDataGetdefaultResponse
  | TillageDataCreateOrUpdatedefaultResponse
  | TillageDataDeletedefaultResponse
  | WeatherListdefaultResponse
  | WeatherGetDataIngestionJobDetailsdefaultResponse
  | WeatherCreateDataIngestionJobdefaultResponse
  | WeatherGetDataDeleteJobDetailsdefaultResponse
  | WeatherCreateDataDeleteJobdefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = geParametrizedPathSuccess(url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function geParametrizedPathSuccess(path: string): string[] {
  const pathParts = path.split("/");

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // If the candidate and actual paths don't match in size
    // we move on to the next candidate path
    if (
      candidateParts.length === pathParts.length &&
      hasParametrizedPath(key)
    ) {
      // track if we have found a match to return the values found.
      let found = true;
      for (let i = 0; i < candidateParts.length; i++) {
        if (
          candidateParts[i].startsWith("{") &&
          candidateParts[i].endsWith("}")
        ) {
          // If the current part of the candidate is a "template" part
          // it is a match with the actual path part on hand
          // skip as the parameterized part can match anything
          continue;
        }

        // If the candidate part is not a template and
        // the parts don't match mark the candidate as not found
        // to move on with the next candidate path.
        if (candidateParts[i] !== pathParts[i]) {
          found = false;
          break;
        }
      }

      // We finished evaluating the current candidate parts
      // if all parts matched we return the success values form
      // the path mapping.
      if (found) {
        return value;
      }
    }
  }

  // No match was found, return an empty array.
  return [];
}

function hasParametrizedPath(path: string): boolean {
  return path.includes("/{");
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}

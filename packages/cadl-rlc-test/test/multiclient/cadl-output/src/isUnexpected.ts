import {
  WidgetsGetWidgetOperationStatus200Response,
  WidgetsGetWidgetOperationStatusDefaultResponse,
  WidgetsCreateOrUpdateWidget200Response,
  WidgetsCreateOrUpdateWidget201Response,
  WidgetsCreateOrUpdateWidgetDefaultResponse,
  WidgetsGetWidget200Response,
  WidgetsGetWidgetDefaultResponse,
  WidgetsDeleteWidget202Response,
  WidgetsDeleteWidgetDefaultResponse,
  WidgetsListWidgets200Response,
  WidgetsListWidgetsDefaultResponse,
  WidgetsGetAnalytics200Response,
  WidgetsGetAnalyticsDefaultResponse,
  WidgetsUpdateAnalytics200Response,
  WidgetsUpdateAnalytics201Response,
  WidgetsUpdateAnalyticsDefaultResponse,
  WidgetsGetRepairStatus200Response,
  WidgetsGetRepairStatusDefaultResponse,
  WidgetsScheduleRepairs200Response,
  WidgetsScheduleRepairsDefaultResponse,
  WidgetPartsGetWidgetPartOperationStatus200Response,
  WidgetPartsGetWidgetPartOperationStatusDefaultResponse,
  WidgetPartsCreateWidgetPart201Response,
  WidgetPartsCreateWidgetPartDefaultResponse,
  WidgetPartsListWidgetParts200Response,
  WidgetPartsListWidgetPartsDefaultResponse,
  WidgetPartsGetWidgetPart200Response,
  WidgetPartsGetWidgetPartDefaultResponse,
  WidgetPartsDeleteWidgetPart204Response,
  WidgetPartsDeleteWidgetPartDefaultResponse,
  WidgetPartsReorderParts202Response,
  WidgetPartsReorderPartsDefaultResponse,
  ManufacturersGetManufacturerOperationStatus200Response,
  ManufacturersGetManufacturerOperationStatusDefaultResponse,
  ManufacturersCreateManufacturer200Response,
  ManufacturersCreateManufacturer201Response,
  ManufacturersCreateManufacturerDefaultResponse,
  ManufacturersGetManufacturer200Response,
  ManufacturersGetManufacturerDefaultResponse,
  ManufacturersDeleteManufacturer202Response,
  ManufacturersDeleteManufacturerDefaultResponse,
  ManufacturersListManufacturers200Response,
  ManufacturersListManufacturersDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /widgets/{widgetName}/operations/{operationId}": ["200"],
  "PATCH /widgets/{widgetName}": ["200", "201"],
  "GET /widgets/{widgetName}": ["200"],
  "DELETE /widgets/{widgetName}": ["202"],
  "GET /widgets": ["200"],
  "GET /widgets/{widgetName}/analytics/current": ["200"],
  "PATCH /widgets/{widgetName}/analytics/current": ["200", "201"],
  "GET /widgets/{widgetId}/repairs/{operationId}": ["200"],
  "POST /widgets/{widgetName}:scheduleRepairs": ["200"],
  "GET /widgets/{widgetName}:scheduleRepairs": ["200"],
  "GET /widgets/{widgetName}/parts/{widgetPartName}/operations/{operationId}": [
    "200",
  ],
  "POST /widgets/{widgetName}/parts": ["201"],
  "GET /widgets/{widgetName}/parts": ["200"],
  "GET /widgets/{widgetName}/parts/{widgetPartName}": ["200"],
  "DELETE /widgets/{widgetName}/parts/{widgetPartName}": ["204"],
  "POST /widgets/{widgetName}/parts:reorderParts": ["202"],
  "GET /widgets/{widgetName}/parts:reorderParts": ["202"],
  "GET /manufacturers/{manufacturerId}/operations/{operationId}": ["200"],
  "PUT /manufacturers/{manufacturerId}": ["200", "201"],
  "GET /manufacturers/{manufacturerId}": ["200"],
  "DELETE /manufacturers/{manufacturerId}": ["202"],
  "GET /manufacturers": ["200"],
};

export function isUnexpected(
  response:
    | WidgetsGetWidgetOperationStatus200Response
    | WidgetsGetWidgetOperationStatusDefaultResponse
): response is WidgetsGetWidgetOperationStatusDefaultResponse;
export function isUnexpected(
  response:
    | WidgetsCreateOrUpdateWidget200Response
    | WidgetsCreateOrUpdateWidget201Response
    | WidgetsCreateOrUpdateWidgetDefaultResponse
): response is WidgetsCreateOrUpdateWidgetDefaultResponse;
export function isUnexpected(
  response: WidgetsGetWidget200Response | WidgetsGetWidgetDefaultResponse
): response is WidgetsGetWidgetDefaultResponse;
export function isUnexpected(
  response: WidgetsDeleteWidget202Response | WidgetsDeleteWidgetDefaultResponse
): response is WidgetsDeleteWidgetDefaultResponse;
export function isUnexpected(
  response: WidgetsListWidgets200Response | WidgetsListWidgetsDefaultResponse
): response is WidgetsListWidgetsDefaultResponse;
export function isUnexpected(
  response: WidgetsGetAnalytics200Response | WidgetsGetAnalyticsDefaultResponse
): response is WidgetsGetAnalyticsDefaultResponse;
export function isUnexpected(
  response:
    | WidgetsUpdateAnalytics200Response
    | WidgetsUpdateAnalytics201Response
    | WidgetsUpdateAnalyticsDefaultResponse
): response is WidgetsUpdateAnalyticsDefaultResponse;
export function isUnexpected(
  response:
    | WidgetsGetRepairStatus200Response
    | WidgetsGetRepairStatusDefaultResponse
): response is WidgetsGetRepairStatusDefaultResponse;
export function isUnexpected(
  response:
    | WidgetsScheduleRepairs200Response
    | WidgetsScheduleRepairsDefaultResponse
): response is WidgetsScheduleRepairsDefaultResponse;
export function isUnexpected(
  response:
    | WidgetPartsGetWidgetPartOperationStatus200Response
    | WidgetPartsGetWidgetPartOperationStatusDefaultResponse
): response is WidgetPartsGetWidgetPartOperationStatusDefaultResponse;
export function isUnexpected(
  response:
    | WidgetPartsCreateWidgetPart201Response
    | WidgetPartsCreateWidgetPartDefaultResponse
): response is WidgetPartsCreateWidgetPartDefaultResponse;
export function isUnexpected(
  response:
    | WidgetPartsListWidgetParts200Response
    | WidgetPartsListWidgetPartsDefaultResponse
): response is WidgetPartsListWidgetPartsDefaultResponse;
export function isUnexpected(
  response:
    | WidgetPartsGetWidgetPart200Response
    | WidgetPartsGetWidgetPartDefaultResponse
): response is WidgetPartsGetWidgetPartDefaultResponse;
export function isUnexpected(
  response:
    | WidgetPartsDeleteWidgetPart204Response
    | WidgetPartsDeleteWidgetPartDefaultResponse
): response is WidgetPartsDeleteWidgetPartDefaultResponse;
export function isUnexpected(
  response:
    | WidgetPartsReorderParts202Response
    | WidgetPartsReorderPartsDefaultResponse
): response is WidgetPartsReorderPartsDefaultResponse;
export function isUnexpected(
  response:
    | ManufacturersGetManufacturerOperationStatus200Response
    | ManufacturersGetManufacturerOperationStatusDefaultResponse
): response is ManufacturersGetManufacturerOperationStatusDefaultResponse;
export function isUnexpected(
  response:
    | ManufacturersCreateManufacturer200Response
    | ManufacturersCreateManufacturer201Response
    | ManufacturersCreateManufacturerDefaultResponse
): response is ManufacturersCreateManufacturerDefaultResponse;
export function isUnexpected(
  response:
    | ManufacturersGetManufacturer200Response
    | ManufacturersGetManufacturerDefaultResponse
): response is ManufacturersGetManufacturerDefaultResponse;
export function isUnexpected(
  response:
    | ManufacturersDeleteManufacturer202Response
    | ManufacturersDeleteManufacturerDefaultResponse
): response is ManufacturersDeleteManufacturerDefaultResponse;
export function isUnexpected(
  response:
    | ManufacturersListManufacturers200Response
    | ManufacturersListManufacturersDefaultResponse
): response is ManufacturersListManufacturersDefaultResponse;
export function isUnexpected(
  response:
    | WidgetsGetWidgetOperationStatus200Response
    | WidgetsGetWidgetOperationStatusDefaultResponse
    | WidgetsCreateOrUpdateWidget200Response
    | WidgetsCreateOrUpdateWidget201Response
    | WidgetsCreateOrUpdateWidgetDefaultResponse
    | WidgetsGetWidget200Response
    | WidgetsGetWidgetDefaultResponse
    | WidgetsDeleteWidget202Response
    | WidgetsDeleteWidgetDefaultResponse
    | WidgetsListWidgets200Response
    | WidgetsListWidgetsDefaultResponse
    | WidgetsGetAnalytics200Response
    | WidgetsGetAnalyticsDefaultResponse
    | WidgetsUpdateAnalytics200Response
    | WidgetsUpdateAnalytics201Response
    | WidgetsUpdateAnalyticsDefaultResponse
    | WidgetsGetRepairStatus200Response
    | WidgetsGetRepairStatusDefaultResponse
    | WidgetsScheduleRepairs200Response
    | WidgetsScheduleRepairsDefaultResponse
    | WidgetPartsGetWidgetPartOperationStatus200Response
    | WidgetPartsGetWidgetPartOperationStatusDefaultResponse
    | WidgetPartsCreateWidgetPart201Response
    | WidgetPartsCreateWidgetPartDefaultResponse
    | WidgetPartsListWidgetParts200Response
    | WidgetPartsListWidgetPartsDefaultResponse
    | WidgetPartsGetWidgetPart200Response
    | WidgetPartsGetWidgetPartDefaultResponse
    | WidgetPartsDeleteWidgetPart204Response
    | WidgetPartsDeleteWidgetPartDefaultResponse
    | WidgetPartsReorderParts202Response
    | WidgetPartsReorderPartsDefaultResponse
    | ManufacturersGetManufacturerOperationStatus200Response
    | ManufacturersGetManufacturerOperationStatusDefaultResponse
    | ManufacturersCreateManufacturer200Response
    | ManufacturersCreateManufacturer201Response
    | ManufacturersCreateManufacturerDefaultResponse
    | ManufacturersGetManufacturer200Response
    | ManufacturersGetManufacturerDefaultResponse
    | ManufacturersDeleteManufacturer202Response
    | ManufacturersDeleteManufacturerDefaultResponse
    | ManufacturersListManufacturers200Response
    | ManufacturersListManufacturersDefaultResponse
): response is
  | WidgetsGetWidgetOperationStatusDefaultResponse
  | WidgetsCreateOrUpdateWidgetDefaultResponse
  | WidgetsGetWidgetDefaultResponse
  | WidgetsDeleteWidgetDefaultResponse
  | WidgetsListWidgetsDefaultResponse
  | WidgetsGetAnalyticsDefaultResponse
  | WidgetsUpdateAnalyticsDefaultResponse
  | WidgetsGetRepairStatusDefaultResponse
  | WidgetsScheduleRepairsDefaultResponse
  | WidgetPartsGetWidgetPartOperationStatusDefaultResponse
  | WidgetPartsCreateWidgetPartDefaultResponse
  | WidgetPartsListWidgetPartsDefaultResponse
  | WidgetPartsGetWidgetPartDefaultResponse
  | WidgetPartsDeleteWidgetPartDefaultResponse
  | WidgetPartsReorderPartsDefaultResponse
  | ManufacturersGetManufacturerOperationStatusDefaultResponse
  | ManufacturersCreateManufacturerDefaultResponse
  | ManufacturersGetManufacturerDefaultResponse
  | ManufacturersDeleteManufacturerDefaultResponse
  | ManufacturersListManufacturersDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = geParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function geParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

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
          candidateParts[i]?.startsWith("{") &&
          candidateParts[i]?.endsWith("}")
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

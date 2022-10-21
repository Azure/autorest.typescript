import {
  WidgetsGetWidgetOperationStatusParameters,
  WidgetsCreateOrUpdateWidgetParameters,
  WidgetsGetWidgetParameters,
  WidgetsDeleteWidgetParameters,
  WidgetsListWidgetsParameters,
  WidgetsGetAnalyticsParameters,
  WidgetsUpdateAnalyticsParameters,
  WidgetsGetRepairStatusParameters,
  WidgetsScheduleRepairsParameters,
  WidgetPartsGetWidgetPartOperationStatusParameters,
  WidgetPartsCreateWidgetPartParameters,
  WidgetPartsListWidgetPartsParameters,
  WidgetPartsGetWidgetPartParameters,
  WidgetPartsDeleteWidgetPartParameters,
  WidgetPartsReorderPartsParameters,
  ManufacturersGetManufacturerOperationStatusParameters,
  ManufacturersCreateManufacturerParameters,
  ManufacturersGetManufacturerParameters,
  ManufacturersDeleteManufacturerParameters,
  ManufacturersListManufacturersParameters,
} from "./parameters";
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
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for Widgets operations */
export interface WidgetsOperations {
  /** Gets status of a Widget operation. */
  getWidgetOperationStatus(
    widgetName: string,
    operationId: string,
    options?: WidgetsGetWidgetOperationStatusParameters
  ): StreamableMethod<
    | WidgetsGetWidgetOperationStatus200Response
    | WidgetsGetWidgetOperationStatusDefaultResponse
  >;
  /** Creates or updates a Widget asynchronously */
  createOrUpdateWidget(
    widgetName: string,
    options: WidgetsCreateOrUpdateWidgetParameters
  ): StreamableMethod<
    | WidgetsCreateOrUpdateWidget200Response
    | WidgetsCreateOrUpdateWidget201Response
    | WidgetsCreateOrUpdateWidgetDefaultResponse
  >;
  /** Get a Widget */
  getWidget(
    widgetName: string,
    options?: WidgetsGetWidgetParameters
  ): StreamableMethod<
    WidgetsGetWidget200Response | WidgetsGetWidgetDefaultResponse
  >;
  /** Delete a Widget asynchronously. */
  deleteWidget(
    widgetName: string,
    options?: WidgetsDeleteWidgetParameters
  ): StreamableMethod<
    WidgetsDeleteWidget202Response | WidgetsDeleteWidgetDefaultResponse
  >;
  /** List Widget resources */
  listWidgets(
    options?: WidgetsListWidgetsParameters
  ): StreamableMethod<
    WidgetsListWidgets200Response | WidgetsListWidgetsDefaultResponse
  >;
  /** Get a WidgetAnalytics */
  getAnalytics(
    widgetName: string,
    options?: WidgetsGetAnalyticsParameters
  ): StreamableMethod<
    WidgetsGetAnalytics200Response | WidgetsGetAnalyticsDefaultResponse
  >;
  /** Creates or updates a WidgetAnalytics */
  updateAnalytics(
    widgetName: string,
    options: WidgetsUpdateAnalyticsParameters
  ): StreamableMethod<
    | WidgetsUpdateAnalytics200Response
    | WidgetsUpdateAnalytics201Response
    | WidgetsUpdateAnalyticsDefaultResponse
  >;
  /** Get the status of a WidgetRepairRequest. */
  getRepairStatus(
    operationId: string,
    widgetId: string,
    options?: WidgetsGetRepairStatusParameters
  ): StreamableMethod<
    WidgetsGetRepairStatus200Response | WidgetsGetRepairStatusDefaultResponse
  >;
  /** Schedule a widget for repairs. */
  scheduleRepairs(
    widgetName: string,
    options?: WidgetsScheduleRepairsParameters
  ): StreamableMethod<
    WidgetsScheduleRepairs200Response | WidgetsScheduleRepairsDefaultResponse
  >;
}

/** Contains operations for WidgetParts operations */
export interface WidgetPartsOperations {
  /** Gets status of a WidgetPart operation. */
  getWidgetPartOperationStatus(
    widgetName: string,
    widgetPartName: string,
    operationId: string,
    options?: WidgetPartsGetWidgetPartOperationStatusParameters
  ): StreamableMethod<
    | WidgetPartsGetWidgetPartOperationStatus200Response
    | WidgetPartsGetWidgetPartOperationStatusDefaultResponse
  >;
  /** Creates a WidgetPart */
  createWidgetPart(
    widgetName: string,
    options?: WidgetPartsCreateWidgetPartParameters
  ): StreamableMethod<
    | WidgetPartsCreateWidgetPart201Response
    | WidgetPartsCreateWidgetPartDefaultResponse
  >;
  /** List WidgetPart resources */
  listWidgetParts(
    widgetName: string,
    options?: WidgetPartsListWidgetPartsParameters
  ): StreamableMethod<
    | WidgetPartsListWidgetParts200Response
    | WidgetPartsListWidgetPartsDefaultResponse
  >;
  /** Get a WidgetPart */
  getWidgetPart(
    widgetName: string,
    widgetPartName: string,
    options?: WidgetPartsGetWidgetPartParameters
  ): StreamableMethod<
    | WidgetPartsGetWidgetPart200Response
    | WidgetPartsGetWidgetPartDefaultResponse
  >;
  /** Delete a WidgetPart */
  deleteWidgetPart(
    widgetName: string,
    widgetPartName: string,
    options?: WidgetPartsDeleteWidgetPartParameters
  ): StreamableMethod<
    | WidgetPartsDeleteWidgetPart204Response
    | WidgetPartsDeleteWidgetPartDefaultResponse
  >;
  /** Reorder all parts for the widget. */
  reorderParts(
    widgetName: string,
    options?: WidgetPartsReorderPartsParameters
  ): StreamableMethod<
    WidgetPartsReorderParts202Response | WidgetPartsReorderPartsDefaultResponse
  >;
}

/** Contains operations for Manufacturers operations */
export interface ManufacturersOperations {
  /** Gets status of a Manufacturer operation. */
  getManufacturerOperationStatus(
    manufacturerId: string,
    operationId: string,
    options?: ManufacturersGetManufacturerOperationStatusParameters
  ): StreamableMethod<
    | ManufacturersGetManufacturerOperationStatus200Response
    | ManufacturersGetManufacturerOperationStatusDefaultResponse
  >;
  /** Creates or replaces a Manufacturer */
  createManufacturer(
    manufacturerId: string,
    options?: ManufacturersCreateManufacturerParameters
  ): StreamableMethod<
    | ManufacturersCreateManufacturer200Response
    | ManufacturersCreateManufacturer201Response
    | ManufacturersCreateManufacturerDefaultResponse
  >;
  /** Get a Manufacturer */
  getManufacturer(
    manufacturerId: string,
    options?: ManufacturersGetManufacturerParameters
  ): StreamableMethod<
    | ManufacturersGetManufacturer200Response
    | ManufacturersGetManufacturerDefaultResponse
  >;
  /** Delete a Manufacturer asynchronously. */
  deleteManufacturer(
    manufacturerId: string,
    options?: ManufacturersDeleteManufacturerParameters
  ): StreamableMethod<
    | ManufacturersDeleteManufacturer202Response
    | ManufacturersDeleteManufacturerDefaultResponse
  >;
  /** List Manufacturer resources */
  listManufacturers(
    options?: ManufacturersListManufacturersParameters
  ): StreamableMethod<
    | ManufacturersListManufacturers200Response
    | ManufacturersListManufacturersDefaultResponse
  >;
}

export interface WidgetsGetWidgetOperationStatus {
  /** Gets status of a Widget operation. */
  get(
    options?: WidgetsGetWidgetOperationStatusParameters
  ): StreamableMethod<
    | WidgetsGetWidgetOperationStatus200Response
    | WidgetsGetWidgetOperationStatusDefaultResponse
  >;
}

export interface WidgetsCreateOrUpdateWidget {
  /** Creates or updates a Widget asynchronously */
  patch(
    options: WidgetsCreateOrUpdateWidgetParameters
  ): StreamableMethod<
    | WidgetsCreateOrUpdateWidget200Response
    | WidgetsCreateOrUpdateWidget201Response
    | WidgetsCreateOrUpdateWidgetDefaultResponse
  >;
  /** Get a Widget */
  get(
    options?: WidgetsGetWidgetParameters
  ): StreamableMethod<
    WidgetsGetWidget200Response | WidgetsGetWidgetDefaultResponse
  >;
  /** Delete a Widget asynchronously. */
  delete(
    options?: WidgetsDeleteWidgetParameters
  ): StreamableMethod<
    WidgetsDeleteWidget202Response | WidgetsDeleteWidgetDefaultResponse
  >;
}

export interface WidgetsListWidgets {
  /** List Widget resources */
  get(
    options?: WidgetsListWidgetsParameters
  ): StreamableMethod<
    WidgetsListWidgets200Response | WidgetsListWidgetsDefaultResponse
  >;
}

export interface WidgetsGetAnalytics {
  /** Get a WidgetAnalytics */
  get(
    options?: WidgetsGetAnalyticsParameters
  ): StreamableMethod<
    WidgetsGetAnalytics200Response | WidgetsGetAnalyticsDefaultResponse
  >;
  /** Creates or updates a WidgetAnalytics */
  patch(
    options: WidgetsUpdateAnalyticsParameters
  ): StreamableMethod<
    | WidgetsUpdateAnalytics200Response
    | WidgetsUpdateAnalytics201Response
    | WidgetsUpdateAnalyticsDefaultResponse
  >;
}

export interface WidgetsGetRepairStatus {
  /** Get the status of a WidgetRepairRequest. */
  get(
    options?: WidgetsGetRepairStatusParameters
  ): StreamableMethod<
    WidgetsGetRepairStatus200Response | WidgetsGetRepairStatusDefaultResponse
  >;
}

export interface WidgetsScheduleRepairs {
  /** Schedule a widget for repairs. */
  post(
    options?: WidgetsScheduleRepairsParameters
  ): StreamableMethod<
    WidgetsScheduleRepairs200Response | WidgetsScheduleRepairsDefaultResponse
  >;
}

export interface WidgetPartsGetWidgetPartOperationStatus {
  /** Gets status of a WidgetPart operation. */
  get(
    options?: WidgetPartsGetWidgetPartOperationStatusParameters
  ): StreamableMethod<
    | WidgetPartsGetWidgetPartOperationStatus200Response
    | WidgetPartsGetWidgetPartOperationStatusDefaultResponse
  >;
}

export interface WidgetPartsCreateWidgetPart {
  /** Creates a WidgetPart */
  post(
    options?: WidgetPartsCreateWidgetPartParameters
  ): StreamableMethod<
    | WidgetPartsCreateWidgetPart201Response
    | WidgetPartsCreateWidgetPartDefaultResponse
  >;
  /** List WidgetPart resources */
  get(
    options?: WidgetPartsListWidgetPartsParameters
  ): StreamableMethod<
    | WidgetPartsListWidgetParts200Response
    | WidgetPartsListWidgetPartsDefaultResponse
  >;
}

export interface WidgetPartsGetWidgetPart {
  /** Get a WidgetPart */
  get(
    options?: WidgetPartsGetWidgetPartParameters
  ): StreamableMethod<
    | WidgetPartsGetWidgetPart200Response
    | WidgetPartsGetWidgetPartDefaultResponse
  >;
  /** Delete a WidgetPart */
  delete(
    options?: WidgetPartsDeleteWidgetPartParameters
  ): StreamableMethod<
    | WidgetPartsDeleteWidgetPart204Response
    | WidgetPartsDeleteWidgetPartDefaultResponse
  >;
}

export interface WidgetPartsReorderParts {
  /** Reorder all parts for the widget. */
  post(
    options?: WidgetPartsReorderPartsParameters
  ): StreamableMethod<
    WidgetPartsReorderParts202Response | WidgetPartsReorderPartsDefaultResponse
  >;
}

export interface ManufacturersGetManufacturerOperationStatus {
  /** Gets status of a Manufacturer operation. */
  get(
    options?: ManufacturersGetManufacturerOperationStatusParameters
  ): StreamableMethod<
    | ManufacturersGetManufacturerOperationStatus200Response
    | ManufacturersGetManufacturerOperationStatusDefaultResponse
  >;
}

export interface ManufacturersCreateManufacturer {
  /** Creates or replaces a Manufacturer */
  put(
    options?: ManufacturersCreateManufacturerParameters
  ): StreamableMethod<
    | ManufacturersCreateManufacturer200Response
    | ManufacturersCreateManufacturer201Response
    | ManufacturersCreateManufacturerDefaultResponse
  >;
  /** Get a Manufacturer */
  get(
    options?: ManufacturersGetManufacturerParameters
  ): StreamableMethod<
    | ManufacturersGetManufacturer200Response
    | ManufacturersGetManufacturerDefaultResponse
  >;
  /** Delete a Manufacturer asynchronously. */
  delete(
    options?: ManufacturersDeleteManufacturerParameters
  ): StreamableMethod<
    | ManufacturersDeleteManufacturer202Response
    | ManufacturersDeleteManufacturerDefaultResponse
  >;
}

export interface ManufacturersListManufacturers {
  /** List Manufacturer resources */
  get(
    options?: ManufacturersListManufacturersParameters
  ): StreamableMethod<
    | ManufacturersListManufacturers200Response
    | ManufacturersListManufacturersDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/widgets/\{widgetName\}/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/widgets/{widgetName}/operations/{operationId}",
    widgetName: string,
    operationId: string
  ): WidgetsGetWidgetOperationStatus;
  /** Resource for '/widgets/\{widgetName\}' has methods for the following verbs: patch, get, delete */
  (
    path: "/widgets/{widgetName}",
    widgetName: string
  ): WidgetsCreateOrUpdateWidget;
  /** Resource for '/widgets' has methods for the following verbs: get */
  (path: "/widgets"): WidgetsListWidgets;
  /** Resource for '/widgets/\{widgetName\}/analytics/current' has methods for the following verbs: get, patch */
  (
    path: "/widgets/{widgetName}/analytics/current",
    widgetName: string
  ): WidgetsGetAnalytics;
  /** Resource for '/widgets/\{widgetId\}/repairs/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/widgets/{widgetId}/repairs/{operationId}",
    operationId: string,
    widgetId: string
  ): WidgetsGetRepairStatus;
  /** Resource for '/widgets/\{widgetName\}:scheduleRepairs' has methods for the following verbs: post */
  (
    path: "/widgets/{widgetName}:scheduleRepairs",
    widgetName: string
  ): WidgetsScheduleRepairs;
  /** Resource for '/widgets/\{widgetName\}/parts/\{widgetPartName\}/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/widgets/{widgetName}/parts/{widgetPartName}/operations/{operationId}",
    widgetName: string,
    widgetPartName: string,
    operationId: string
  ): WidgetPartsGetWidgetPartOperationStatus;
  /** Resource for '/widgets/\{widgetName\}/parts' has methods for the following verbs: post, get */
  (
    path: "/widgets/{widgetName}/parts",
    widgetName: string
  ): WidgetPartsCreateWidgetPart;
  /** Resource for '/widgets/\{widgetName\}/parts/\{widgetPartName\}' has methods for the following verbs: get, delete */
  (
    path: "/widgets/{widgetName}/parts/{widgetPartName}",
    widgetName: string,
    widgetPartName: string
  ): WidgetPartsGetWidgetPart;
  /** Resource for '/widgets/\{widgetName\}/parts:reorderParts' has methods for the following verbs: post */
  (
    path: "/widgets/{widgetName}/parts:reorderParts",
    widgetName: string
  ): WidgetPartsReorderParts;
  /** Resource for '/manufacturers/\{manufacturerId\}/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/manufacturers/{manufacturerId}/operations/{operationId}",
    manufacturerId: string,
    operationId: string
  ): ManufacturersGetManufacturerOperationStatus;
  /** Resource for '/manufacturers/\{manufacturerId\}' has methods for the following verbs: put, get, delete */
  (
    path: "/manufacturers/{manufacturerId}",
    manufacturerId: string
  ): ManufacturersCreateManufacturer;
  /** Resource for '/manufacturers' has methods for the following verbs: get */
  (path: "/manufacturers"): ManufacturersListManufacturers;
}

export type ContosoWidgetManagerClient = Client & {
  path: Routes;
  widgets: WidgetsOperations;
  widgetParts: WidgetPartsOperations;
  manufacturers: ManufacturersOperations;
};

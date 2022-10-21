import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  ResourceOperationStatusOutput,
  ErrorResponseOutput,
  WidgetOutput,
  OperationStatusOutput,
  WidgetListOutput,
  WidgetAnalyticsOutput,
  WidgetRepairRequestOutput,
  WidgetPartOutput,
  WidgetPartListOutput,
  ManufacturerOutput,
  ManufacturerListOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface WidgetsGetWidgetOperationStatus200Response
  extends HttpResponse {
  status: "200";
  body: ResourceOperationStatusOutput;
}

export interface WidgetsGetWidgetOperationStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface WidgetsCreateOrUpdateWidget200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: "accepted" | "rejected";
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded. */
export interface WidgetsCreateOrUpdateWidget200Response extends HttpResponse {
  status: "200";
  body: WidgetOutput;
  headers: RawHttpHeaders & WidgetsCreateOrUpdateWidget200Headers;
}

export interface WidgetsCreateOrUpdateWidget201Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: "accepted" | "rejected";
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface WidgetsCreateOrUpdateWidget201Response extends HttpResponse {
  status: "201";
  body: WidgetOutput;
  headers: RawHttpHeaders & WidgetsCreateOrUpdateWidget201Headers;
}

export interface WidgetsCreateOrUpdateWidgetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface WidgetsGetWidget200Headers {
  /** The entity tag for the response. */
  etag?: string;
}

/** The request has succeeded. */
export interface WidgetsGetWidget200Response extends HttpResponse {
  status: "200";
  body: WidgetOutput;
  headers: RawHttpHeaders & WidgetsGetWidget200Headers;
}

export interface WidgetsGetWidgetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface WidgetsDeleteWidget202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: "accepted" | "rejected";
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface WidgetsDeleteWidget202Response extends HttpResponse {
  status: "202";
  body: OperationStatusOutput;
  headers: RawHttpHeaders & WidgetsDeleteWidget202Headers;
}

export interface WidgetsDeleteWidgetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface WidgetsListWidgets200Response extends HttpResponse {
  status: "200";
  body: WidgetListOutput;
}

export interface WidgetsListWidgetsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface WidgetsGetAnalytics200Response extends HttpResponse {
  status: "200";
  body: WidgetAnalyticsOutput;
}

export interface WidgetsGetAnalyticsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface WidgetsUpdateAnalytics200Response extends HttpResponse {
  status: "200";
  body: WidgetAnalyticsOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface WidgetsUpdateAnalytics201Response extends HttpResponse {
  status: "201";
  body: WidgetAnalyticsOutput;
}

export interface WidgetsUpdateAnalyticsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface WidgetsGetRepairStatus200Response extends HttpResponse {
  status: "200";
  body: OperationStatusOutput;
}

export interface WidgetsGetRepairStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface WidgetsScheduleRepairs200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: "accepted" | "rejected";
}

/** The request has succeeded. */
export interface WidgetsScheduleRepairs200Response extends HttpResponse {
  status: "200";
  body: WidgetRepairRequestOutput;
  headers: RawHttpHeaders & WidgetsScheduleRepairs200Headers;
}

export interface WidgetsScheduleRepairsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface WidgetPartsGetWidgetPartOperationStatus200Response
  extends HttpResponse {
  status: "200";
  body: ResourceOperationStatusOutput;
}

export interface WidgetPartsGetWidgetPartOperationStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface WidgetPartsCreateWidgetPart201Headers {
  location: string;
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: "accepted" | "rejected";
}

/** The request has succeeded and a new resource has been created as a result. */
export interface WidgetPartsCreateWidgetPart201Response extends HttpResponse {
  status: "201";
  headers: RawHttpHeaders & WidgetPartsCreateWidgetPart201Headers;
}

export interface WidgetPartsCreateWidgetPartDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface WidgetPartsGetWidgetPart200Headers {
  /** The entity tag for the response. */
  etag?: string;
}

/** The request has succeeded. */
export interface WidgetPartsGetWidgetPart200Response extends HttpResponse {
  status: "200";
  body: WidgetPartOutput;
  headers: RawHttpHeaders & WidgetPartsGetWidgetPart200Headers;
}

export interface WidgetPartsGetWidgetPartDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface WidgetPartsDeleteWidgetPart204Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: "accepted" | "rejected";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface WidgetPartsDeleteWidgetPart204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & WidgetPartsDeleteWidgetPart204Headers;
}

export interface WidgetPartsDeleteWidgetPartDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface WidgetPartsListWidgetParts200Response extends HttpResponse {
  status: "200";
  body: WidgetPartListOutput;
}

export interface WidgetPartsListWidgetPartsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface WidgetPartsReorderParts202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface WidgetPartsReorderParts202Response extends HttpResponse {
  status: "202";
  body: ResourceOperationStatusOutput;
  headers: RawHttpHeaders & WidgetPartsReorderParts202Headers;
}

export interface WidgetPartsReorderPartsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ManufacturersGetManufacturerOperationStatus200Response
  extends HttpResponse {
  status: "200";
  body: ResourceOperationStatusOutput;
}

export interface ManufacturersGetManufacturerOperationStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ManufacturersCreateManufacturer200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: "accepted" | "rejected";
}

/** The request has succeeded. */
export interface ManufacturersCreateManufacturer200Response
  extends HttpResponse {
  status: "200";
  body: ManufacturerOutput;
  headers: RawHttpHeaders & ManufacturersCreateManufacturer200Headers;
}

export interface ManufacturersCreateManufacturer201Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: "accepted" | "rejected";
}

/** The request has succeeded and a new resource has been created as a result. */
export interface ManufacturersCreateManufacturer201Response
  extends HttpResponse {
  status: "201";
  body: ManufacturerOutput;
  headers: RawHttpHeaders & ManufacturersCreateManufacturer201Headers;
}

export interface ManufacturersCreateManufacturerDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ManufacturersGetManufacturer200Headers {
  /** The entity tag for the response. */
  etag?: string;
}

/** The request has succeeded. */
export interface ManufacturersGetManufacturer200Response extends HttpResponse {
  status: "200";
  body: ManufacturerOutput;
  headers: RawHttpHeaders & ManufacturersGetManufacturer200Headers;
}

export interface ManufacturersGetManufacturerDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ManufacturersDeleteManufacturer202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: "accepted" | "rejected";
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface ManufacturersDeleteManufacturer202Response
  extends HttpResponse {
  status: "202";
  body: OperationStatusOutput;
  headers: RawHttpHeaders & ManufacturersDeleteManufacturer202Headers;
}

export interface ManufacturersDeleteManufacturerDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ManufacturersListManufacturers200Response
  extends HttpResponse {
  status: "200";
  body: ManufacturerListOutput;
}

export interface ManufacturersListManufacturersDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

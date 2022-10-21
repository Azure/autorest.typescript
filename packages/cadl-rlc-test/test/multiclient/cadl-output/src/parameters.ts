import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import {
  Widget,
  WidgetAnalytics,
  WidgetRepairRequest,
  WidgetPart,
  WidgetPartReorderRequest,
  Manufacturer,
} from "./models";

export type WidgetsGetWidgetOperationStatusParameters = RequestParameters;

export interface WidgetsCreateOrUpdateWidgetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
}

export interface WidgetsCreateOrUpdateWidgetBodyParam {
  body?: Widget;
}

export interface WidgetsCreateOrUpdateWidgetHeaderParam {
  headers?: RawHttpHeadersInput & WidgetsCreateOrUpdateWidgetHeaders;
}

export interface WidgetsCreateOrUpdateWidgetMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type WidgetsCreateOrUpdateWidgetParameters =
  WidgetsCreateOrUpdateWidgetHeaderParam &
    WidgetsCreateOrUpdateWidgetMediaTypesParam &
    WidgetsCreateOrUpdateWidgetBodyParam &
    RequestParameters;

export interface WidgetsGetWidgetHeaders {
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
}

export interface WidgetsGetWidgetHeaderParam {
  headers?: RawHttpHeadersInput & WidgetsGetWidgetHeaders;
}

export type WidgetsGetWidgetParameters = WidgetsGetWidgetHeaderParam &
  RequestParameters;

export interface WidgetsDeleteWidgetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
}

export interface WidgetsDeleteWidgetHeaderParam {
  headers?: RawHttpHeadersInput & WidgetsDeleteWidgetHeaders;
}

export type WidgetsDeleteWidgetParameters = WidgetsDeleteWidgetHeaderParam &
  RequestParameters;

export interface WidgetsListWidgetsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Select the specified fields to be included in the response. */
  select?: string[];
}

export interface WidgetsListWidgetsQueryParam {
  queryParameters?: WidgetsListWidgetsQueryParamProperties;
}

export type WidgetsListWidgetsParameters = WidgetsListWidgetsQueryParam &
  RequestParameters;
export type WidgetsGetAnalyticsParameters = RequestParameters;

export interface WidgetsUpdateAnalyticsBodyParam {
  body?: WidgetAnalytics;
}

export interface WidgetsUpdateAnalyticsMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type WidgetsUpdateAnalyticsParameters =
  WidgetsUpdateAnalyticsMediaTypesParam &
    WidgetsUpdateAnalyticsBodyParam &
    RequestParameters;
export type WidgetsGetRepairStatusParameters = RequestParameters;

export interface WidgetsScheduleRepairsHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
}

export interface WidgetsScheduleRepairsBodyParam {
  body?: WidgetRepairRequest;
}

export interface WidgetsScheduleRepairsHeaderParam {
  headers?: RawHttpHeadersInput & WidgetsScheduleRepairsHeaders;
}

export type WidgetsScheduleRepairsParameters =
  WidgetsScheduleRepairsHeaderParam &
    WidgetsScheduleRepairsBodyParam &
    RequestParameters;
export type WidgetPartsGetWidgetPartOperationStatusParameters =
  RequestParameters;

export interface WidgetPartsCreateWidgetPartHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
}

export interface WidgetPartsCreateWidgetPartBodyParam {
  body?: WidgetPart;
}

export interface WidgetPartsCreateWidgetPartHeaderParam {
  headers?: RawHttpHeadersInput & WidgetPartsCreateWidgetPartHeaders;
}

export type WidgetPartsCreateWidgetPartParameters =
  WidgetPartsCreateWidgetPartHeaderParam &
    WidgetPartsCreateWidgetPartBodyParam &
    RequestParameters;

export interface WidgetPartsGetWidgetPartHeaders {
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
}

export interface WidgetPartsGetWidgetPartHeaderParam {
  headers?: RawHttpHeadersInput & WidgetPartsGetWidgetPartHeaders;
}

export type WidgetPartsGetWidgetPartParameters =
  WidgetPartsGetWidgetPartHeaderParam & RequestParameters;

export interface WidgetPartsDeleteWidgetPartHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
}

export interface WidgetPartsDeleteWidgetPartHeaderParam {
  headers?: RawHttpHeadersInput & WidgetPartsDeleteWidgetPartHeaders;
}

export type WidgetPartsDeleteWidgetPartParameters =
  WidgetPartsDeleteWidgetPartHeaderParam & RequestParameters;
export type WidgetPartsListWidgetPartsParameters = RequestParameters;

export interface WidgetPartsReorderPartsBodyParam {
  body?: WidgetPartReorderRequest;
}

export type WidgetPartsReorderPartsParameters =
  WidgetPartsReorderPartsBodyParam & RequestParameters;
export type ManufacturersGetManufacturerOperationStatusParameters =
  RequestParameters;

export interface ManufacturersCreateManufacturerHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
}

export interface ManufacturersCreateManufacturerBodyParam {
  body?: Manufacturer;
}

export interface ManufacturersCreateManufacturerHeaderParam {
  headers?: RawHttpHeadersInput & ManufacturersCreateManufacturerHeaders;
}

export type ManufacturersCreateManufacturerParameters =
  ManufacturersCreateManufacturerHeaderParam &
    ManufacturersCreateManufacturerBodyParam &
    RequestParameters;

export interface ManufacturersGetManufacturerHeaders {
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
}

export interface ManufacturersGetManufacturerHeaderParam {
  headers?: RawHttpHeadersInput & ManufacturersGetManufacturerHeaders;
}

export type ManufacturersGetManufacturerParameters =
  ManufacturersGetManufacturerHeaderParam & RequestParameters;

export interface ManufacturersDeleteManufacturerHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
}

export interface ManufacturersDeleteManufacturerHeaderParam {
  headers?: RawHttpHeadersInput & ManufacturersDeleteManufacturerHeaders;
}

export type ManufacturersDeleteManufacturerParameters =
  ManufacturersDeleteManufacturerHeaderParam & RequestParameters;
export type ManufacturersListManufacturersParameters = RequestParameters;

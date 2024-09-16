// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Details about a user. */
export interface User {
  /** The name of user. */
  readonly name: string;
  /** The role of user */
  role: string;
  /** The UUID of this widget. This is generated automatically by the service. */
  id: string;
}

export function userSerializer(item: User): any {
  return { role: item["role"], id: item["id"] };
}

export function userDeserializer(item: any): User {
  return {
    name: item["name"],
    role: item["role"],
    id: item["id"],
  };
}

/** model interface Widget */
export interface Widget {
  /** The UUID of this widget. This is generated automatically by the service. */
  id: string;
  /** The weight of the widget. This is an int32, but must be greater than zero. */
  weight: number;
  /** The color of the widget. */
  color: "red" | "blue";
}

export function widgetSerializer(item: Widget): any {
  return {
    id: item["id"],
    weight: item["weight"],
    color: widgetColorSerializer(item["color"]),
  };
}

export function widgetDeserializer(item: any): Widget {
  return {
    id: item["id"],
    weight: item["weight"],
    color: widgetColorDeserializer(item["color"]),
  };
}

/** Type of WidgetColor */
export type WidgetColor = "red" | "blue";

export function widgetColorSerializer(item: WidgetColor): any {
  return item;
}

export function widgetColorDeserializer(item: any): WidgetColor {
  return item;
}

/** model interface WidgetError */
export interface WidgetError {
  /** The HTTP error code. */
  code: number;
  /** A human-readable message describing the error. */
  message: string;
}

export function widgetErrorSerializer(item: WidgetError): any {
  return { code: item["code"], message: item["message"] };
}

export function widgetErrorDeserializer(item: any): WidgetError {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/** model interface _ListWidgetsPagesResults */
export interface _ListWidgetsPagesResults {
  /** The current page of results. */
  results: Widget[];
  /** The URL to get the next set of results. */
  "odata.nextLink"?: string;
}

export function _listWidgetsPagesResultsSerializer(
  item: _ListWidgetsPagesResults,
): any {
  return {
    results: widgetArraySerializer(item["results"]),
    "odata.nextLink": item["odata.nextLink"],
  };
}

export function _listWidgetsPagesResultsDeserializer(
  item: any,
): _ListWidgetsPagesResults {
  return {
    results: widgetArrayDeserializer(item["results"]),
    "odata.nextLink": item["odata.nextLink"],
  };
}

export function widgetArraySerializer(result: Array<Widget>): any[] {
  return result.map((item) => {
    widgetSerializer(item);
  });
}

export function widgetArrayDeserializer(result: Array<Widget>): any[] {
  return result.map((item) => {
    widgetDeserializer(item);
  });
}

/** model interface CreateWidgetRequest */
export interface CreateWidgetRequest {
  /** The weight of the widget. This is an int32, but must be greater than zero. */
  weight: number;
  /** The color of the widget. */
  color: "red" | "blue";
}

export function createWidgetRequestSerializer(item: CreateWidgetRequest): any {
  return {
    weight: item["weight"],
    color: createWidgetRequestColorSerializer(item["color"]),
  };
}

export function createWidgetRequestDeserializer(
  item: any,
): CreateWidgetRequest {
  return {
    weight: item["weight"],
    color: createWidgetRequestColorDeserializer(item["color"]),
  };
}

/** Type of CreateWidgetRequestColor */
export type CreateWidgetRequestColor = "red" | "blue";

export function createWidgetRequestColorSerializer(
  item: CreateWidgetRequestColor,
): any {
  return item;
}

export function createWidgetRequestColorDeserializer(
  item: any,
): CreateWidgetRequestColor {
  return item;
}

/** model interface UpdateWidgetRequest */
export interface UpdateWidgetRequest {
  /** The weight of the widget. This is an int32, but must be greater than zero. */
  weight?: number;
  /** The color of the widget. */
  color?: "red" | "blue";
}

export function updateWidgetRequestSerializer(item: UpdateWidgetRequest): any {
  return {
    weight: item["weight"],
    color: !item["color"]
      ? item["color"]
      : updateWidgetRequestColorSerializer(item["color"]),
  };
}

export function updateWidgetRequestDeserializer(
  item: any,
): UpdateWidgetRequest {
  return {
    weight: item["weight"],
    color: !item["color"]
      ? item["color"]
      : updateWidgetRequestColorDeserializer(item["color"]),
  };
}

/** Type of UpdateWidgetRequestColor */
export type UpdateWidgetRequestColor = "red" | "blue";

export function updateWidgetRequestColorSerializer(
  item: UpdateWidgetRequestColor,
): any {
  return item;
}

export function updateWidgetRequestColorDeserializer(
  item: any,
): UpdateWidgetRequestColor {
  return item;
}

/** model interface AnalyzeResult */
export interface AnalyzeResult {
  summary: string;
}

export function analyzeResultSerializer(item: AnalyzeResult): any {
  return { summary: item["summary"] };
}

export function analyzeResultDeserializer(item: any): AnalyzeResult {
  return {
    summary: item["summary"],
  };
}

/** model interface NonReferencedModel */
export interface NonReferencedModel {
  /** The weight of the widget. This is an int32, but must be greater than zero. */
  prop1: number;
  /** The color of the widget. */
  prop2: string;
}

export function nonReferencedModelSerializer(item: NonReferencedModel): any {
  return { prop1: item["prop1"], prop2: item["prop2"] };
}

export function nonReferencedModelDeserializer(item: any): NonReferencedModel {
  return {
    prop1: item["prop1"],
    prop2: item["prop2"],
  };
}

/** The Contoso Widget Manager service version. */
export type Versions = "1.0.0";

export function versionsSerializer(item: Versions): any {
  return item;
}

export function versionsDeserializer(item: any): Versions {
  return item;
}

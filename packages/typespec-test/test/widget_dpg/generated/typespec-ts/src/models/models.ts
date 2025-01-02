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

export function widgetDeserializer(item: any): Widget {
  return {
    id: item["id"],
    weight: item["weight"],
    color: item["color"],
  };
}

/** model interface _ListWidgetsPagesResults */
export interface _ListWidgetsPagesResults {
  /** The current page of results. */
  results: Widget[];
  /** The URL to get the next set of results. */
  odataNextLink?: string;
}

export function _listWidgetsPagesResultsDeserializer(
  item: any,
): _ListWidgetsPagesResults {
  return {
    results: widgetArrayDeserializer(item["results"]),
    odataNextLink: item["odata.nextLink"],
  };
}

export function widgetArrayDeserializer(result: Array<Widget>): any[] {
  return result.map((item) => {
    return widgetDeserializer(item);
  });
}

/** model interface AnalyzeResult */
export interface AnalyzeResult {
  summary: string;
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
export enum KnownVersions {
  /** Version 2022-08-31 */
  "1.0.0" = "1.0.0",
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** model interface Widget */
export interface Widget {
  /** The UUID of this widget. This is generated automatically by the service. */
  id: string;
  /** The weight of the widget. This is an int32, but must be greater than zero. */
  weight: number;
  /** The color of the widget. */
  color: "red" | "blue";
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function widgetDeserializer(item: any): Widget {
  return {
    id: item["id"],
    weight: item["weight"],
    color: item["color"],
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
/** model interface WidgetError */
export interface WidgetError {
  /** The HTTP error code. */
  code: number;
  /** A human-readable message describing the error. */
  message: string;
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function widgetErrorDeserializer(item: any): WidgetError {
  return {
    code: item["code"],
    message: item["message"],
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/naming-convention */
/** model interface _ListWidgetsPagesResults */
export interface _ListWidgetsPagesResults {
  /** The current page of results. */
  results: Widget[];
  /** The URL to get the next set of results. */
  odataNextLink?: string;
}
/* eslint-enable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function _listWidgetsPagesResultsDeserializer(
  item: any,
): _ListWidgetsPagesResults {
  return {
    results: widgetArrayDeserializer(item["results"]),
    odataNextLink: item["odata.nextLink"],
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
export function widgetArrayDeserializer(result: Array<Widget>): any[] {
  return result.map((item) => {
    return widgetDeserializer(item);
  });
}

/** Details about a user. */
export interface SAPUser {
  /** The name of user. */
  readonly name: string;
  /** The role of user */
  role: string;
  /** The UUID of this widget. This is generated automatically by the service. */
  id: string;
}

export function sapUserSerializer(item: SAPUser): any {
  return { role: item["role"], id: item["id"] };
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function sapUserDeserializer(item: any): SAPUser {
  return {
    name: item["name"],
    role: item["role"],
    id: item["id"],
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
/** model interface AnalyzeResult */
export interface AnalyzeResult {
  summary: string;
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function analyzeResultDeserializer(item: any): AnalyzeResult {
  return {
    summary: item["summary"],
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
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

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function nonReferencedModelDeserializer(item: any): NonReferencedModel {
  return {
    prop1: item["prop1"],
    prop2: item["prop2"],
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
/** The Contoso Widget Manager service version. */
export enum KnownVersions {
  /** Version 2022-08-31 */
  _100 = "1.0.0",
}

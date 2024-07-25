// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { User as UserRest } from "../rest/index.js";

/** Details about a user. */
export interface User {
  /** The name of user. */
  readonly name: string;
  /** The role of user */
  role: string;
  /** The UUID of this widget. This is generated automatically by the service. */
  id: string;
}

export function userSerializer(item: User): UserRest {
  return {
    role: item["role"],
    id: item["id"],
  };
}

export interface Widget {
  /** The UUID of this widget. This is generated automatically by the service. */
  id: string;
  /** The weight of the widget. This is an int32, but must be greater than zero. */
  weight: number;
  /** The color of the widget. */
  color: "red" | "blue";
}

export interface WidgetError {
  /** The HTTP error code. */
  code: number;
  /** A human-readable message describing the error. */
  message: string;
}

export interface _ListWidgetsPagesResults {
  /** The current page of results. */
  results: Widget[];
  /** The URL to get the next set of results. */
  "odata.nextLink"?: string;
}

export interface CreateWidget {
  /** The weight of the widget. This is an int32, but must be greater than zero. */
  weight: number;
  /** The color of the widget. */
  color: "red" | "blue";
}

export interface UpdateWidget {
  /** The weight of the widget. This is an int32, but must be greater than zero. */
  weight?: number;
  /** The color of the widget. */
  color?: "red" | "blue";
}

export interface AnalyzeResult {
  summary: string;
}

export interface NonReferencedModel {
  /** The weight of the widget. This is an int32, but must be greater than zero. */
  prop1: number;
  /** The color of the widget. */
  prop2: string;
}

export function nonReferencedModelSerializer(item: NonReferencedModel) {
  return {
    prop1: item["prop1"],
    prop2: item["prop2"],
  };
}

/** The Contoso Widget Manager service version. */
export type Versions = "1.0.0";

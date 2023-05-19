// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** */
export interface Widget {
  /** */
  id: string;
  /** */
  weight: number;
  /** */
  color: ColorType;
}

/** Type of ColorType */
/** */
export type ColorType = "red" | "blue";

/** */
export interface WidgetError {
  /** */
  code: number;
  /** */
  message: string;
}

/** */
export interface CreateWidget {
  /** */
  weight: number;
  /** */
  color: ColorType;
}

/** */
export interface UpdateWidget {
  /** */
  id: string;
  /** */
  weight?: number;
  /** */
  color?: ColorType;
}

/** */
export interface AnalyzeResult {
  /** */
  summary: string;
}

/** */
export interface CreateWidget {
  /** */
  weight: number;
  /** */
  color: ColorType;
}

/** */
export interface UpdateWidget {
  /** */
  weight?: number;
  /** */
  color?: ColorType;
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface Widget {}

export interface CreateWidget {}

export interface UpdateWidget {
  /** The UUID of this widget. This is generated automatically by the service. */
  id: string;
}

export interface AnalyzeResult {}

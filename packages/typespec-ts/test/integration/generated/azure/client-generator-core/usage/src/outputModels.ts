// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Usage override to roundtrip. */
export interface OutputModelOutput {
  name: string;
}

export interface RoundTripModelOutput {
  readonly result: ResultModelOutput;
}

export interface ResultModelOutput {
  name: string;
}

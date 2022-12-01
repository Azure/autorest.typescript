// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Output model with readonly properties. */
export interface OutputModelOutput {
  /** Required string, illustrating a readonly reference type property. */
  readonly requiredReadonlyString: string;
  /** Required int, illustrating a readonly value type property. */
  readonly requiredReadonlyInt: number;
  /** Optional string, illustrating a readonly reference type property. */
  readonly optionalReadonlyString?: string;
  /** Optional int, illustrating a readonly value type property. */
  readonly optionalReadonlyInt?: number;
  /** Required readonly model. */
  readonly requiredReadonlyModel: ReadonlyModelOutput;
  /** Optional readonly model. */
  readonly optionalReadonlyModel?: ReadonlyModelOutput;
  /** Required readonly string collection. */
  readonly requiredReadonlyStringList: string[];
  /** Required readonly int collection. */
  readonly requiredReadonlyIntList: number[];
  /** Optional readonly string collection. */
  readonly optionalReadonlyStringList?: string[];
  /** Optional readonly int collection. */
  readonly optionalReadonlyIntList?: number[];
}

/** Readonly model */
export interface ReadonlyModelOutput {
  /** Required string */
  requiredString: string;
}

/** Round-trip model with readonly properties. */
export interface RoundTripModelOutput {
  /** Required string, illustrating a readonly reference type property. */
  readonly requiredReadonlyString: string;
  /** Required int, illustrating a readonly value type property. */
  readonly requiredReadonlyInt: number;
  /** Optional string, illustrating a readonly reference type property. */
  readonly optionalReadonlyString?: string;
  /** Optional int, illustrating a readonly value type property. */
  readonly optionalReadonlyInt?: number;
  /** Required readonly model. */
  readonly requiredReadonlyModel: ReadonlyModelOutput;
  /** Optional readonly model. */
  readonly optionalReadonlyModel?: ReadonlyModelOutput;
  /** Required readonly string collection. */
  readonly requiredReadonlyStringList: string[];
  /** Required readonly int collection. */
  readonly requiredReadonlyIntList: number[];
  /** Optional readonly string collection. */
  readonly optionalReadonlyStringList?: string[];
  /** Optional readonly int collection. */
  readonly optionalReadonlyIntList?: number[];
}

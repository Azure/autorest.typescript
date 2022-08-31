/** Input model with optional properties. */
export interface InputModel {
  /** Optional string, illustrating an optional reference type property. */
  optionalString?: string;
  optionalInt?: number;
  optionalStringList?: string[];
  optionalIntList?: number[];
}

/** Round-trip model with optional properties. */
export interface RoundTripModel {
  /** Optional string, illustrating an optional reference type property. */
  optionalString?: string;
  optionalInt?: number;
  optionalStringList?: string[];
  optionalIntList?: number[];
}

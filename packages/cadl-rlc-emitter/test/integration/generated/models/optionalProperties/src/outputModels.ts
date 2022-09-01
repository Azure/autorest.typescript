/** Output model with optional properties. */
export interface OutputModelOutput {
  /** Optional string, illustrating an optional reference type property. */
  optionalString?: string;
  /** Optional int, illustrating an optional value type property. */
  optionalInt?: number;
  /** Optional string collection. */
  optionalStringList?: string[];
  /** Optional int collection. */
  optionalIntList?: number[];
}

/** Round-trip model with optional properties. */
export interface RoundTripModelOutput {
  /** Optional string, illustrating an optional reference type property. */
  optionalString?: string;
  /** Optional int, illustrating an optional value type property. */
  optionalInt?: number;
  /** Optional string collection. */
  optionalStringList?: string[];
  /** Optional int collection. */
  optionalIntList?: number[];
}

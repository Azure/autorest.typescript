/** Input model with collection properties */
export interface InputModel {
  /** Required collection of strings, illustrating a collection of reference types. */
  requiredStringList: string[];
  /** Required collection of ints, illustrating a collection of value types. */
  requiredIntList: number[];
}

/** Round-trip model with collection properties */
export interface RoundTripModel {
  /** Required collection of strings, illustrating a collection of reference types. */
  requiredStringList: string[];
  /** Required collection of ints, illustrating a collection of value types. */
  requiredIntList: number[];
}

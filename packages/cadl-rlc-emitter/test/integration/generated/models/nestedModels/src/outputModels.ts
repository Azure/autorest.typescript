/** Model to illustrate a nested model that appears as a nested model on input, output, and round-trip models. */
export interface NestedRoundTripSharedModelOutput {
  /** Required string, illustrating a reference type property. */
  requiredString: string;
  /** Required int, illustrating a value type property. */
  requiredInt: number;
  /** Required collection of strings, illustrating a collection of reference types. */
  requiredStringList: string[];
  /** Required collection of ints, illustrating a collection of value types. */
  requiredIntList: number[];
}

/** Output model with nested model properties */
export interface OutputModelOutput {
  /** Required nested output model. */
  NestedOutputModel: NestedOutputOnlyModelOutput;
  /** Required nested shared model. */
  NestedSharedModel: NestedRoundTripSharedModelOutput;
}

/** Model to illustrate a nested model that only appears on an output model. */
export interface NestedOutputOnlyModelOutput {
  /** Required string, illustrating a reference type property. */
  requiredString: string;
  /** Required int, illustrating a value type property. */
  requiredInt: number;
  /** Required collection of strings, illustrating a collection of reference types. */
  requiredStringList: string[];
  /** Required collection of ints, illustrating a collection of value types. */
  requiredIntList: number[];
}

/** Round-trip model with nested model properties */
export interface RoundTripModelOutput {
  /** Required nested round-trip model. */
  NestedRoundTripModel: NestedRoundTripOnlyModelOutput;
  /** Required nested shared model. */
  NestedSharedModel: NestedRoundTripSharedModelOutput;
}

/** Model to illustrate a nested model that only appears on a nested model. */
export interface NestedRoundTripOnlyModelOutput {
  /** Required string, illustrating a reference type property. */
  requiredString: string;
  /** Required int, illustrating a value type property. */
  requiredInt: number;
  /** Required collection of strings, illustrating a collection of reference types. */
  requiredStringList: string[];
  /** Required collection of ints, illustrating a collection of value types. */
  requiredIntList: number[];
}

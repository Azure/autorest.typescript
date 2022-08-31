/** Input model with nested model properties. */
export interface InputModel {
  /** Required nested input model. */
  NestedInputModel: object;
  /** Required nested shared model. */
  NestedSharedModel: object;
}

/** Model to illustrate a nested model that only appears on an input model. */
export interface NestedInputOnlyModel {
  /** Required string, illustrating a reference type property. */
  requiredString: string;
  /** Required int, illustrating a value type property. */
  requiredInt: number;
  /** Required collection of strings, illustrating a collection of reference types. */
  requiredStringList: string[];
  /** Required collection of ints, illustrating a collection of value types. */
  requiredIntList: number[];
}

/** Model to illustrate a nested model that appears as a nested model on input, output, and round-trip models. */
export interface NestedRoundTripSharedModel {
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
export interface RoundTripModel {
  /** Required nested round-trip model. */
  NestedRoundTripModel: NestedRoundTripOnlyModel;
  /** Required nested shared model. */
  NestedSharedModel: NestedRoundTripSharedModel;
}

/** Model to illustrate a nested model that only appears on a nested model. */
export interface NestedRoundTripOnlyModel {
  /** Required string, illustrating a reference type property. */
  requiredString: string;
  /** Required int, illustrating a value type property. */
  requiredInt: number;
  /** Required collection of strings, illustrating a collection of reference types. */
  requiredStringList: string[];
  /** Required collection of ints, illustrating a collection of value types. */
  requiredIntList: number[];
}

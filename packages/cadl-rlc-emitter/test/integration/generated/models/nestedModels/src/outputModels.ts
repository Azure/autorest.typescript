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

/** A response containing error details. */
export interface ErrorResponseOutput {
  /** The error object. */
  error: ErrorModelOutput;
}

/** The error object. */
export interface ErrorModelOutput {
  /** One of a server-defined set of error codes. */
  code: string;
  /** A human-readable representation of the error. */
  message: string;
  /** The target of the error. */
  target?: string;
  /** An array of details about specific errors that led to this reported error. */
  details: Array<ErrorModelOutput>;
  /** An object containing more specific information than the current object about the error. */
  innererror?: InnerErrorOutput;
}

/** An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses. */
export interface InnerErrorOutput {
  /** One of a server-defined set of error codes. */
  code: string;
  /** Inner error. */
  innererror?: InnerErrorOutput;
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

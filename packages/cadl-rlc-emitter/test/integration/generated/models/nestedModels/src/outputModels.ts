/** Model to illustrate a nested model that appears as a nested model on input, output, and round-trip models. */
export interface NestedRoundTripSharedModelOutput {
  /** Required string, illustrating a reference type property. */
  requiredString: string;
  requiredInt: number;
  requiredStringList: string[];
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
  details: Array<ErrorModelOutput>;
  /** An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses. */
  innererror?: InnerErrorOutput;
}

/** An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses. */
export interface InnerErrorOutput {
  /** One of a server-defined set of error codes. */
  code: string;
  /** An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses. */
  innererror?: InnerErrorOutput;
}

/** Output model with nested model properties */
export interface OutputModelOutput {
  /** Model to illustrate a nested model that only appears on an output model. */
  NestedOutputModel: NestedOutputOnlyModelOutput;
  /** Model to illustrate a nested model that appears as a nested model on input, output, and round-trip models. */
  NestedSharedModel: NestedRoundTripSharedModelOutput;
}

/** Model to illustrate a nested model that only appears on an output model. */
export interface NestedOutputOnlyModelOutput {
  /** Required string, illustrating a reference type property. */
  requiredString: string;
  requiredInt: number;
  requiredStringList: string[];
  requiredIntList: number[];
}

/** Round-trip model with nested model properties */
export interface RoundTripModelOutput {
  /** Model to illustrate a nested model that only appears on a nested model. */
  NestedRoundTripModel: NestedRoundTripOnlyModelOutput;
  /** Model to illustrate a nested model that appears as a nested model on input, output, and round-trip models. */
  NestedSharedModel: NestedRoundTripSharedModelOutput;
}

/** Model to illustrate a nested model that only appears on a nested model. */
export interface NestedRoundTripOnlyModelOutput {
  /** Required string, illustrating a reference type property. */
  requiredString: string;
  requiredInt: number;
  requiredStringList: string[];
  requiredIntList: number[];
}

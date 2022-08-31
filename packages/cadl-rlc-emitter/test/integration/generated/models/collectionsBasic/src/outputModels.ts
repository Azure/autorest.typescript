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

/** Output model with collection properties */
export interface OutputModelOutput {
  /** Required collection of strings, illustrating a collection of reference types. */
  requiredStringList: string[];
  /** Required collection of ints, illustrating a collection of value types. */
  requiredIntList: number[];
}

/** Round-trip model with collection properties */
export interface RoundTripModelOutput {
  /** Required collection of strings, illustrating a collection of reference types. */
  requiredStringList: string[];
  /** Required collection of ints, illustrating a collection of value types. */
  requiredIntList: number[];
}

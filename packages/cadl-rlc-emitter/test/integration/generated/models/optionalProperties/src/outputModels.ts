export interface ErrorResponseOutput {
  /** The error object. */
  error: ErrorModelOutput;
}

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

export interface InnerErrorOutput {
  /** One of a server-defined set of error codes. */
  code: string;
  /** An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses. */
  innererror?: InnerErrorOutput;
}

export interface OutputModelOutput {
  /** Optional string, illustrating an optional reference type property. */
  optionalString?: string;
  optionalInt?: number;
  optionalStringList?: string[];
  optionalIntList?: number[];
}

export interface RoundTripModelOutput {
  /** Optional string, illustrating an optional reference type property. */
  optionalString?: string;
  optionalInt?: number;
  optionalStringList?: string[];
  optionalIntList?: number[];
}

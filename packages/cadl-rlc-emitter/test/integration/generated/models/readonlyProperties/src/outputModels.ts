/** Output model with readonly properties. */
export interface OutputModelOutput {
  /** Required string, illustrating a readonly reference type property. */
  requiredReadonlyString: string;
  /** Required int, illustrating a readonly value type property. */
  requiredReadonlyInt: number;
  /** Optional string, illustrating a readonly reference type property. */
  optionalReadonlyString?: string;
  /** Optional int, illustrating a readonly value type property. */
  optionalReadonlyInt?: number;
  /** Required readonly model. */
  requiredReadonlyModel: ReadonlyModelOutput;
  /** Optional readonly model. */
  optionalReadonlyModel?: ReadonlyModelOutput;
  /** Required readonly string collection. */
  requiredReadonlyStringList: string[];
  /** Required readonly int collection. */
  requiredReadonlyIntList: number[];
  /** Optional readonly string collection. */
  optionalReadonlyStringList?: string[];
  /** Optional readonly int collection. */
  optionalReadonlyIntList?: number[];
}

/** Readonly model */
export interface ReadonlyModelOutput {
  /** Required string */
  requiredString: string;
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

/** Round-trip model with readonly properties. */
export interface RoundTripModelOutput {
  /** Required string, illustrating a readonly reference type property. */
  requiredReadonlyString: string;
  /** Required int, illustrating a readonly value type property. */
  requiredReadonlyInt: number;
  /** Optional string, illustrating a readonly reference type property. */
  optionalReadonlyString?: string;
  /** Optional int, illustrating a readonly value type property. */
  optionalReadonlyInt?: number;
  /** Required readonly model. */
  requiredReadonlyModel: ReadonlyModelOutput;
  /** Optional readonly model. */
  optionalReadonlyModel?: ReadonlyModelOutput;
  /** Required readonly string collection. */
  requiredReadonlyStringList: string[];
  /** Required readonly int collection. */
  requiredReadonlyIntList: number[];
  /** Optional readonly string collection. */
  optionalReadonlyStringList?: string[];
  /** Optional readonly int collection. */
  optionalReadonlyIntList?: number[];
}

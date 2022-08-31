/** Output model with readonly properties. */
export interface OutputModelOutput {
  /** Required string, illustrating a readonly reference type property. */
  requiredReadonlyString: string;
  requiredReadonlyInt: number;
  /** Optional string, illustrating a readonly reference type property. */
  optionalReadonlyString?: string;
  optionalReadonlyInt?: number;
  /** Readonly model */
  requiredReadonlyModel: ReadonlyModelOutput;
  /** Readonly model */
  optionalReadonlyModel?: ReadonlyModelOutput;
  requiredReadonlyStringList: string[];
  requiredReadonlyIntList: number[];
  optionalReadonlyStringList?: string[];
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

/** Round-trip model with readonly properties. */
export interface RoundTripModelOutput {
  /** Required string, illustrating a readonly reference type property. */
  requiredReadonlyString: string;
  requiredReadonlyInt: number;
  /** Optional string, illustrating a readonly reference type property. */
  optionalReadonlyString?: string;
  optionalReadonlyInt?: number;
  /** Readonly model */
  requiredReadonlyModel: ReadonlyModelOutput;
  /** Readonly model */
  optionalReadonlyModel?: ReadonlyModelOutput;
  requiredReadonlyStringList: string[];
  requiredReadonlyIntList: number[];
  optionalReadonlyStringList?: string[];
  optionalReadonlyIntList?: number[];
}

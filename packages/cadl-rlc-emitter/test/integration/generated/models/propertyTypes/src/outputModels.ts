/** Model with a boolean property */
export interface BooleanPropertyOutput {
  /** Property */
  property: boolean;
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

/** Model with a string property */
export interface StringPropertyOutput {
  /** Property */
  property: string;
}

/** Model with a bytes property */
export interface BytesPropertyOutput {
  /** Property */
  property: string;
}

/** Model with a int property */
export interface IntPropertyOutput {
  /** Property */
  property: number;
}

/** Model with a float property */
export interface FloatPropertyOutput {
  /** Property */
  property: number;
}

/** Model with a datetime property */
export interface DatetimePropertyOutput {
  /** Property */
  property: string;
}

/** Model with a duration property */
export interface DurationPropertyOutput {
  /** Property */
  property: string;
}

/** Model with enum properties */
export interface EnumPropertyOutput {
  /** Property */
  property: "ValueOne" | "ValueTwo";
}

/** Model with extensible enum properties */
export interface ExtensibleEnumPropertyOutput {
  /** Property */
  property: "ValueOne" | "ValueTwo";
}

/** Model with model properties */
export interface ModelPropertyOutput {
  /** Property */
  property: InnerModelOutput;
}

/** Inner model. Will be a property type for ModelWithModelProperties */
export interface InnerModelOutput {
  /** Required string property */
  property: string;
}

/** Model with collection string properties */
export interface CollectionsStringPropertyOutput {
  /** Property */
  property: string[];
}

/** Model with collection int properties */
export interface CollectionsIntPropertyOutput {
  /** Property */
  property: number[];
}

/** Model with collection model properties */
export interface CollectionsModelPropertyOutput {
  /** Property */
  property: Array<InnerModelOutput>;
}

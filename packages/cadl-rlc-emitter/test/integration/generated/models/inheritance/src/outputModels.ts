/** Example base type. */
export interface BaseClassOutput {
  /** An example property. */
  baseClassProperty: string;
}

export interface DerivedFromBaseClassAOutput extends BaseClassOutput {
  /** An example property on a derived type */
  derivedClassAProperty: string;
}

export interface DerivedFromBaseClassBOutput extends BaseClassOutput {
  /** An example property on a derived type */
  derivedClassBProperty: string;
}

/** Example base class that has a discriminator property. */
export interface BaseClassWithDiscriminatorOutput extends BaseClassOutput {
  discriminatorProperty: "BaseClassWithDiscriminator" | "A" | "B";
}

export interface DerivedFromBaseClassWithDiscriminatorAOutput
  extends BaseClassWithDiscriminatorOutput {
  discriminatorProperty: "A";
}

export interface DerivedFromBaseClassWithDiscriminatorBOutput
  extends BaseClassWithDiscriminatorOutput {
  discriminatorProperty: "B";
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

/** Illustrates case where a basic model has polymorphic properties. */
export interface ModelWithPolymorphicPropertyOutput {
  /** Example base class that has a discriminator property. */
  polymorphicProperty: BaseClassWithDiscriminatorOutput;
}

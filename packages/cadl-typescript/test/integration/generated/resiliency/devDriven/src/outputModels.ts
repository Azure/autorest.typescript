/** Product resource */
export interface ProductOutput {
  /** key of product */
  key: string;
  /** received mode */
  received: "raw" | "model";
}

/** Final response from LRO call */
export interface LROProductOutput extends ProductOutput {
  /** Provisioning state returned by the service */
  provisioningState: string;
}

/** Paged collection of Product items */
export interface ProductListOutput {
  /** The Product items on this page */
  value: Array<ProductOutput>;
  /** The link to the next page of items */
  nextLink?: string;
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

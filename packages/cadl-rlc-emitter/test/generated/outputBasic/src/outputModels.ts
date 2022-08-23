export interface OutputModelOutput {
  /** Required string, illustrating a reference type property. */
  requiredString: string;
  requiredInt: number;
}

export interface ErrorResponseOutput {
  /** The error object. */
  error: ErrorModelOutput;
}

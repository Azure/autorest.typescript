// Licensed under the MIT License.

/** model interface ErrorInRangeOutput */
export interface ErrorInRangeOutput {
  code: string;
  message: string;
}

/** model interface DefaultErrorOutput */
export interface DefaultErrorOutput {
  code: string;
}

/** model interface NotFoundErrorOutput */
export interface NotFoundErrorOutput {
  code: string;
  resourceId: string;
}

/** model interface Standard4XXErrorOutput */
export interface Standard4XXErrorOutput {
  code: string;
}
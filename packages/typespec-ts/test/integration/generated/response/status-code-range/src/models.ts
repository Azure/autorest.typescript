// Licensed under the MIT License.

/** model interface ErrorInRange */
export interface ErrorInRange {
  code: string;
  message: string;
}

/** model interface DefaultError */
export interface DefaultError {
  code: string;
}

/** model interface NotFoundError */
export interface NotFoundError {
  code: string;
  resourceId: string;
}

/** model interface Standard4XXError */
export interface Standard4XXError {
  code: string;
}
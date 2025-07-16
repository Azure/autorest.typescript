// Licensed under the MIT License.

/** model interface ErrorInRange */
export interface ErrorInRange {
  code: string;
  message: string;
}

export function errorInRangeDeserializer(item: any): ErrorInRange {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/** model interface DefaultError */
export interface DefaultError {
  code: string;
}

export function defaultErrorDeserializer(item: any): DefaultError {
  return {
    code: item["code"],
  };
}

/** model interface NotFoundError */
export interface NotFoundError {
  code: string;
  resourceId: string;
}

export function notFoundErrorDeserializer(item: any): NotFoundError {
  return {
    code: item["code"],
    resourceId: item["resourceId"],
  };
}

/** model interface Standard4XXError */
export interface Standard4XXError {
  code: string;
}

export function standard4XXErrorDeserializer(item: any): Standard4XXError {
  return {
    code: item["code"],
  };
}

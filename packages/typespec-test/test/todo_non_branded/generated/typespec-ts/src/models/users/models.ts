// Licensed under the MIT License.

import { ApiError } from "../models.js";

/** The user already exists */
export interface UserExistsResponse extends ApiError {
  code: "user-exists";
}

export function userExistsResponseDeserializer(item: any): UserExistsResponse {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/** The user is invalid (e.g. forgot to enter email address) */
export interface InvalidUserResponse extends ApiError {
  code: "invalid-user";
}

export function invalidUserResponseDeserializer(
  item: any,
): InvalidUserResponse {
  return {
    code: item["code"],
    message: item["message"],
  };
}

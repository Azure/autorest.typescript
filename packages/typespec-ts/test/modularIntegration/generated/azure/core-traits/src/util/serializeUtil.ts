// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UserActionParam, UserActionResponse, User } from "../models/models.js";
import {
  UserActionParam as RestUserActionParam,
  UserActionResponseOutput as RestUserActionResponse,
  UserOutput as RestUser,
} from "../rest/index.js";

export function serializeUserActionParam(
  o: UserActionParam,
): RestUserActionParam {
  return {
    userActionValue: o["userActionValue"],
  };
}

export function deserializeUserActionResponse(
  o: RestUserActionResponse,
): UserActionResponse {
  return {
    userActionResult: o["userActionResult"],
  };
}

export function deserializeUser(o: RestUser): User {
  return {
    name: o["name"],
  };
}

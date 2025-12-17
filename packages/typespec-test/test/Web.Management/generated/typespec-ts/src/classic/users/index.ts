// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebContext } from "../../api/webContext.js";
import { updatePublishingUser, getPublishingUser } from "../../api/users/operations.js";
import {
  UsersUpdatePublishingUserOptionalParams,
  UsersGetPublishingUserOptionalParams,
} from "../../api/users/options.js";
import { User } from "../../models/models.js";

/** Interface representing a Users operations. */
export interface UsersOperations {
  /** Description for Updates publishing user */
  updatePublishingUser: (
    userDetails: User,
    options?: UsersUpdatePublishingUserOptionalParams,
  ) => Promise<User>;
  /** Description for Gets publishing user */
  getPublishingUser: (options?: UsersGetPublishingUserOptionalParams) => Promise<User>;
}

function _getUsers(context: WebContext) {
  return {
    updatePublishingUser: (userDetails: User, options?: UsersUpdatePublishingUserOptionalParams) =>
      updatePublishingUser(context, userDetails, options),
    getPublishingUser: (options?: UsersGetPublishingUserOptionalParams) =>
      getPublishingUser(context, options),
  };
}

export function _getUsersOperations(context: WebContext): UsersOperations {
  return {
    ..._getUsers(context),
  };
}

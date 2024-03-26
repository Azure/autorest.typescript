// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { User, PagedUser } from "../models/models.js";
import {
  UserOutput as RestUser,
  PagedUserOutput as RestPagedUser,
} from "../rest/index.js";

export function deserializeUser(o: RestUser): User {
  return {
    name: o["name"],
  };
}

export function deserializePagedUser(o: RestPagedUser): PagedUser {
  return {
    value: o["value"].map((e: RestUser) => MISSING_SERIALIZER(e)),
  };
}

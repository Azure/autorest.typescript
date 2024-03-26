// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ListItemInputBody,
  UserOrder,
  User,
  SecondItem,
  PagedSecondItem,
  FirstItem,
  PagedFirstItem,
  PagedUser,
  UserListResults,
} from "../models/models.js";
import {
  ListItemInputBody as RestListItemInputBody,
  UserOrder as RestUserOrder,
  User as RestUser,
  SecondItemOutput as RestSecondItem,
  PagedSecondItemOutput as RestPagedSecondItem,
  FirstItemOutput as RestFirstItem,
  PagedFirstItemOutput as RestPagedFirstItem,
  PagedUserOutput as RestPagedUser,
  UserListResultsOutput as RestUserListResults,
} from "../rest/index.js";

export function serializeListItemInputBody(
  o: ListItemInputBody,
): RestListItemInputBody {
  return {
    inputName: o["inputName"],
  };
}

export function serializeUserOrder(o: UserOrder): RestUserOrder {
  return {
    detail: o["detail"],
    userId: o["userId"],
  };
}

export function deserializeUserOrder(o: RestUserOrder): UserOrder {
  return {
    detail: o["detail"],
    userId: o["userId"],
  };
}

export function serializeUser(o: User): RestUser {
  return {
    orders:
      o["orders"] === undefined
        ? o["orders"]
        : o["orders"].map((e) => MISSING_SERIALIZER(e)),
    name: o["name"],
  };
}

export function deserializeUser(o: RestUser): User {
  return {
    orders:
      o["orders"] === undefined
        ? o["orders"]
        : o["orders"].map((e) => MISSING_SERIALIZER(e)),
    name: o["name"],
  };
}

export function deserializeSecondItem(o: RestSecondItem): SecondItem {
  return {};
}

export function deserializePagedSecondItem(
  o: RestPagedSecondItem,
): PagedSecondItem {
  return {
    value: o["value"].map((e: RestSecondItem) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeFirstItem(o: RestFirstItem): FirstItem {
  return {};
}

export function deserializePagedFirstItem(
  o: RestPagedFirstItem,
): PagedFirstItem {
  return {
    value: o["value"].map((e: RestFirstItem) => MISSING_SERIALIZER(e)),
  };
}

export function deserializePagedUser(o: RestPagedUser): PagedUser {
  return {
    value: o["value"].map((e) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeUserListResults(
  o: RestUserListResults,
): UserListResults {
  return {
    nextLink: o["nextLink"],
    items: o["items"].map((e) => MISSING_SERIALIZER(e)),
  };
}

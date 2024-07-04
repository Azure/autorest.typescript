// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { User as UserRest } from "../rest/index.js";

/** This is a simple model. */
export interface User {
  name: string;
}

export function userSerializer(item: User): UserRest {
  return {
    name: item["name"],
  };
}

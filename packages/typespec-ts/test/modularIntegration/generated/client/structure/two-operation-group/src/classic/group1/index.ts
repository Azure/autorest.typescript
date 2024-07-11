// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../api/twoOperationGroupContext.js";
import { one, three, four } from "../../api/group1/index.js";
import {
  Group1OneOptionalParams,
  Group1ThreeOptionalParams,
  Group1FourOptionalParams,
} from "../../api/options.js";

/** Interface representing a Group1 operations. */
export interface Group1Operations {
  one: (options?: Group1OneOptionalParams) => Promise<void>;
  three: (options?: Group1ThreeOptionalParams) => Promise<void>;
  four: (options?: Group1FourOptionalParams) => Promise<void>;
}

export function getGroup1(context: ServiceContext) {
  return {
    one: (options?: Group1OneOptionalParams) => one(context, options),
    three: (options?: Group1ThreeOptionalParams) => three(context, options),
    four: (options?: Group1FourOptionalParams) => four(context, options),
  };
}

export function getGroup1Operations(context: ServiceContext): Group1Operations {
  return {
    ...getGroup1(context),
  };
}

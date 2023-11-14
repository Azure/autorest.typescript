// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../api/TwoOperationGroupContext.js";
import { one, three, four } from "../../api/group1/index.js";
import {
  Group1OneOptions,
  Group1ThreeOptions,
  Group1FourOptions,
} from "../../models/options.js";

export interface Group1Operations {
  one: (options?: Group1OneOptions) => Promise<void>;
  three: (options?: Group1ThreeOptions) => Promise<void>;
  four: (options?: Group1FourOptions) => Promise<void>;
}

export function getGroup1(context: ServiceContext) {
  return {
    one: (options?: Group1OneOptions) => one(context, options),
    three: (options?: Group1ThreeOptions) => three(context, options),
    four: (options?: Group1FourOptions) => four(context, options),
  };
}

export function getGroup1Operations(context: ServiceContext): Group1Operations {
  return {
    ...getGroup1(context),
  };
}

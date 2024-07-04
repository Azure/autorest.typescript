// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BodyParameter as BodyParameterRest } from "../rest/index.js";

/** This is a simple model. */
export interface BodyParameter {
  name: string;
}

export function bodyParameterSerializer(
  item: BodyParameter,
): BodyParameterRest {
  return {
    name: item["name"],
  };
}

/** This is a model with non-body http request decorator. */
export interface CompositeRequestMix {
  prop: string;
}

export function compositeRequestMixSerializer(item: CompositeRequestMix) {
  return {
    prop: item["prop"],
  };
}

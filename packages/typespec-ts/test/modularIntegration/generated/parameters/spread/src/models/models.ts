// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  BodyParameter as BodyParameterRest,
  CompositeRequestMix as CompositeRequestMixRest,
} from "../rest/index.js";

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

export interface CompositeRequestMix {
  prop: string;
}

export function compositeRequestMixSerializer(
  item: CompositeRequestMix,
): CompositeRequestMixRest {
  return {
    prop: item["prop"],
  };
}

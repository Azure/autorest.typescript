// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { serializeRecord } from "../helpers/serializerHelpers.js";
import {
  ActionRequest as ActionRequestRest,
  Model as ModelRest,
} from "../rest/index.js";

export interface ActionRequest {
  stringProperty: string;
  modelProperty?: Model;
  arrayProperty?: string[];
  recordProperty?: Record<string, string>;
}

export function actionRequestSerializer(
  item: ActionRequest,
): ActionRequestRest {
  return {
    stringProperty: item["stringProperty"],
    modelProperty: !item.modelProperty
      ? item.modelProperty
      : modelSerializer(item.modelProperty),
    arrayProperty: item["arrayProperty"],
    recordProperty: !item.recordProperty
      ? item.recordProperty
      : (serializeRecord(item.recordProperty as any) as any),
  };
}

export interface Model {
  int32Property?: number;
  float32Property?: number;
  enumProperty?: Enum;
}

export function modelSerializer(item: Model): ModelRest {
  return {
    int32Property: item["int32Property"],
    float32Property: item["float32Property"],
    enumProperty: item["enumProperty"],
  };
}

/** Type of Enum */
export type Enum = "EnumValue1";

export interface ActionResponse {
  stringProperty: string;
  modelProperty?: Model;
  arrayProperty?: string[];
  recordProperty?: Record<string, string>;
}

/** Type of Versions */
export type Versions = "2022-12-01-preview";

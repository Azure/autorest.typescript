// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  BooleanProperty,
  StringProperty,
  BytesProperty,
  IntProperty,
  FloatProperty,
  DatetimeProperty,
  DurationProperty,
  EnumProperty,
  ExtensibleEnumProperty,
  ModelProperty,
  CollectionsStringProperty,
  CollectionsIntProperty,
  CollectionsModelProperty,
  DictionaryStringProperty,
  NeverProperty,
} from "./models";

export type GetParameters = RequestParameters;

export interface PutBodyParam {
  body: BooleanProperty;
}

export type PutParameters = PutBodyParam & RequestParameters;
export type GetParameters = RequestParameters;

export interface PutBodyParam {
  body: StringProperty;
}

export type PutParameters = PutBodyParam & RequestParameters;
export type GetParameters = RequestParameters;

export interface PutBodyParam {
  body: BytesProperty;
}

export type PutParameters = PutBodyParam & RequestParameters;
export type GetParameters = RequestParameters;

export interface PutBodyParam {
  body: IntProperty;
}

export type PutParameters = PutBodyParam & RequestParameters;
export type GetParameters = RequestParameters;

export interface PutBodyParam {
  body: FloatProperty;
}

export type PutParameters = PutBodyParam & RequestParameters;
export type GetParameters = RequestParameters;

export interface PutBodyParam {
  body: DatetimeProperty;
}

export type PutParameters = PutBodyParam & RequestParameters;
export type GetParameters = RequestParameters;

export interface PutBodyParam {
  body: DurationProperty;
}

export type PutParameters = PutBodyParam & RequestParameters;
export type GetParameters = RequestParameters;

export interface PutBodyParam {
  body: EnumProperty;
}

export type PutParameters = PutBodyParam & RequestParameters;
export type GetParameters = RequestParameters;

export interface PutBodyParam {
  body: ExtensibleEnumProperty;
}

export type PutParameters = PutBodyParam & RequestParameters;
export type GetParameters = RequestParameters;

export interface PutBodyParam {
  body: ModelProperty;
}

export type PutParameters = PutBodyParam & RequestParameters;
export type GetParameters = RequestParameters;

export interface PutBodyParam {
  body: CollectionsStringProperty;
}

export type PutParameters = PutBodyParam & RequestParameters;
export type GetParameters = RequestParameters;

export interface PutBodyParam {
  body: CollectionsIntProperty;
}

export type PutParameters = PutBodyParam & RequestParameters;
export type GetParameters = RequestParameters;

export interface PutBodyParam {
  body: CollectionsModelProperty;
}

export type PutParameters = PutBodyParam & RequestParameters;
export type GetParameters = RequestParameters;

export interface PutBodyParam {
  body: DictionaryStringProperty;
}

export type PutParameters = PutBodyParam & RequestParameters;
export type GetParameters = RequestParameters;

export interface PutBodyParam {
  body: NeverProperty;
}

export type PutParameters = PutBodyParam & RequestParameters;

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { InputModel as InputModelRest } from "../rest/index.js";

/** Usage override to roundtrip. */
export interface InputModel {
  name: string;
}

export function inputModelSerializer(item: InputModel): InputModelRest {
  return {
    name: item["name"],
  };
}

/** Usage override to roundtrip. */
export interface OutputModel {
  name: string;
}

export function outputModelSerializer(item: OutputModel) {
  return {
    name: item["name"],
  };
}

/** Not used anywhere, but access is override to public so still need to be generated and exported with serialization. */
export interface OrphanModel {
  name: string;
}

export function orphanModelSerializer(item: OrphanModel) {
  return {
    name: item["name"],
  };
}

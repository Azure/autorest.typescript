// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Usage override to roundtrip. */
export interface InputModel {
  name: string;
}

/** Usage override to roundtrip. */
export interface OutputModel {
  name: string;
}

/** Not used anywhere, but access is override to public so still need to be generated and exported with serialization. */
export interface OrphanModel {
  name: string;
}

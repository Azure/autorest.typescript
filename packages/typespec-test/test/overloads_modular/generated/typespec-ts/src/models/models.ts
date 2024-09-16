// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** The Contoso Widget Manager service version. */
export type Versions = "2022-08-30";

export function versionsSerializer(item: Versions): any {
  return item;
}

export function versionsDeserializer(item: any): Versions {
  return item;
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Schema Group resource. */
export interface SchemaGroup {
  /** Name of schema group. */
  readonly groupName: string;
}

/** Schema versions resource. */
export interface Version {
  /** Version number of specific schema. */
  readonly schemaVersion: number;
}

/** Type of SchemaContentTypeValues */
/** */
export type SchemaContentTypeValues =
  | "application/json; serialization=Avro"
  | "application/json; serialization=json"
  | "text/plain; charset=utf-8"
  | "text/vnd.ms.protobuf";
/** Represents the Schema Registry API version to use for requests. */
/** */
export type ServiceApiVersions = "2021-10" | "2022-10" | "2023-07-01";

/** Paged collection of SchemaGroup items */
export interface PagedSchemaGroup {
  /** The SchemaGroup items on this page */
  value: SchemaGroup[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Paged collection of Version items */
export interface PagedVersion {
  /** The Version items on this page */
  value: Version[];
  /** The link to the next page of items */
  nextLink?: string;
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Meta properties of a schema. */
export interface SchemaProperties {
  /** References a specific schema in the registry namespace. */
  id: string;
  /** Format for the schema being stored. */
  format: SchemaFormat;
  /** Schema group under which schema is stored. */
  groupName: string;
  /** Name of schema. */
  name: string;
  /** Version of schema. */
  version: number;
}

/** Represents the format of the schema to be stored by the Schema Registry service. */
/** "Avro", "Json", "Custom", "Protobuf" */
export type SchemaFormat = string;
/** The content type for the schema. */
/** "application/octet-stream", "application/json; serialization=Avro", "application/json; serialization=json", "text/vnd.ms.protobuf" */
export type ContentTypeEnum = string;

/** Paged collection of SchemaGroup items */
export interface PagedSchemaGroup {
  /** The SchemaGroup items on this page */
  value: SchemaGroup[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Schema Group resource. */
export interface SchemaGroup {
  /** Name of schema group. */
  readonly groupName: string;
}

/** Paged collection of Version items */
export interface PagedVersion {
  /** The Version items on this page */
  value: SchemaVersion[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Schema versions resource. */
export interface SchemaVersion {
  /** Version number of specific schema. */
  readonly schemaVersion: number;
}

/** Alias for SchemaContentTypeValues */
export type SchemaContentTypeValues =
  | "application/json; serialization=Avro"
  | "application/json; serialization=json"
  | "text/plain; charset=utf-8"
  | "text/vnd.ms.protobuf";

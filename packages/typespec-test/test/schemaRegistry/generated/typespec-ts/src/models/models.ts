// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Paged collection of SchemaGroup items */
export interface _PagedSchemaGroup {
  /** The SchemaGroup items on this page */
  value: SchemaGroup[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedSchemaGroupDeserializer(item: any): _PagedSchemaGroup {
  return {
    value: schemaGroupArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function schemaGroupArrayDeserializer(result: Array<SchemaGroup>): any[] {
  return result.map((item) => {
    return schemaGroupDeserializer(item);
  });
}

/** Schema Group resource. */
export interface SchemaGroup {
  /** Name of schema group. */
  readonly groupName: string;
}

export function schemaGroupDeserializer(item: any): SchemaGroup {
  return {
    groupName: item["groupName"],
  };
}

/** Paged collection of Version items */
export interface _PagedVersion {
  /** The Version items on this page */
  value: SchemaVersion[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedVersionDeserializer(item: any): _PagedVersion {
  return {
    value: schemaVersionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function schemaVersionArrayDeserializer(result: Array<SchemaVersion>): any[] {
  return result.map((item) => {
    return schemaVersionDeserializer(item);
  });
}

/** Schema versions resource. */
export interface SchemaVersion {
  /** Version number of specific schema. */
  readonly schemaVersion: number;
}

export function schemaVersionDeserializer(item: any): SchemaVersion {
  return {
    schemaVersion: item["schemaVersion"],
  };
}

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

export function schemaPropertiesSerializer(item: SchemaProperties): any {
  return {
    id: item["id"],
    format: item["format"],
    groupName: item["groupName"],
    name: item["name"],
    version: item["version"],
  };
}

export function schemaPropertiesDeserializer(item: any): SchemaProperties {
  return {
    id: item["id"],
    format: item["format"],
    groupName: item["groupName"],
    name: item["name"],
    version: item["version"],
  };
}

/** Represents the format of the schema to be stored by the Schema Registry service. */
export type SchemaFormat = "Avro" | "Json" | "Custom" | "Protobuf";

/** The schema content of a schema, along with id and meta properties. */
export interface Schema {
  /** The content of the schema. */
  definition: string;
  /** The properties of the schema. */
  properties: SchemaProperties;
}

export function schemaSerializer(item: Schema): any {
  return {
    definition: item["definition"],
    properties: schemaPropertiesSerializer(item["properties"]),
  };
}

export function schemaDeserializer(item: any): Schema {
  return {
    definition: item["definition"],
    properties: schemaPropertiesDeserializer(item["properties"]),
  };
}

/** Type of SchemaContentTypeValues */
export type SchemaContentTypeValues =
  | "application/json; serialization=Avro"
  | "application/json; serialization=json"
  | "text/plain; charset=utf-8"
  | "text/vnd.ms.protobuf";

/** Represents the Schema Registry API version to use for requests. */
export enum KnownServiceApiVersions {
  /** Azure Schema Registry 2021-10 Version */
  V202110 = "2021-10",
  /** Azure Schema Registry 2022-10 Version */
  V202210 = "2022-10",
  /** Azure Schema Registry 2023-07-01 Version. This is the default version. */
  V20230701 = "2023-07-01",
}

/** The content type for the schema. */
export type ContentTypeEnum =
  | "application/octet-stream"
  | "application/json; serialization=Avro"
  | "application/json; serialization=json"
  | "text/vnd.ms.protobuf";

/** Defines headers for operation response. */
export interface GetSchemaIdByContentResponse {
  location: string;
  schemaId: string;
  schemaIdLocation: string;
  schemaGroupName: string;
  schemaName: string;
  schemaVersion: number;
}

/** Defines headers for operation response. */
export interface RegisterSchemaResponse {
  location: string;
  schemaId: string;
  schemaIdLocation: string;
  schemaGroupName: string;
  schemaName: string;
  schemaVersion: number;
}

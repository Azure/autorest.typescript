// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ErrorModel } from "@azure-rest/core-client";

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
    format: schemaFormatDeserializer(item["format"]),
    groupName: item["groupName"],
    name: item["name"],
    version: item["version"],
  };
}

/** Represents the format of the schema to be stored by the Schema Registry service. */
export type SchemaFormat = "Avro" | "Json" | "Custom" | "Protobuf";

export function schemaFormatSerializer(item: SchemaFormat): any {
  return item;
}

export function schemaFormatDeserializer(item: any): SchemaFormat {
  return item;
}

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
    properties: schemaPropertiesSerializer(item.properties),
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

export function schemaContentTypeValuesSerializer(
  item: SchemaContentTypeValues,
): any {
  return item;
}

export function schemaContentTypeValuesDeserializer(
  item: any,
): SchemaContentTypeValues {
  return item;
}

/** Represents the Schema Registry API version to use for requests. */
export type ServiceApiVersions = "2021-10" | "2022-10" | "2023-07-01";

export function serviceApiVersionsSerializer(item: ServiceApiVersions): any {
  return item;
}

export function serviceApiVersionsDeserializer(item: any): ServiceApiVersions {
  return item;
}

/** The content type for the schema. */
export type ContentTypeEnum =
  | "application/octet-stream"
  | "application/json; serialization=Avro"
  | "application/json; serialization=json"
  | "text/vnd.ms.protobuf";

export function contentTypeEnumSerializer(item: ContentTypeEnum): any {
  return item;
}

export function contentTypeEnumDeserializer(item: any): ContentTypeEnum {
  return item;
}

export function schemaGroupArrayDeserializer(
  result: Array<SchemaGroup>,
): any[] {
  return result.map((item) => {
    schemaGroupDeserializer(item);
  });
}

/** A response containing error details. */
export interface ErrorResponse {
  /** The error object. */
  error: ErrorModel;
}

/** Paged collection of SchemaGroup items */
export interface _PagedSchemaGroup {
  /** The SchemaGroup items on this page */
  value: SchemaGroup[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function schemaVersionArrayDeserializer(
  result: Array<SchemaVersion>,
): any[] {
  return result.map((item) => {
    schemaVersionDeserializer(item);
  });
}

/** Paged collection of Version items */
export interface _PagedVersion {
  /** The Version items on this page */
  value: SchemaVersion[];
  /** The link to the next page of items */
  nextLink?: string;
}

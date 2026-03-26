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
  value: Version[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedVersionDeserializer(item: any): _PagedVersion {
  return {
    value: versionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function versionArrayDeserializer(result: Array<Version>): any[] {
  return result.map((item) => {
    return versionDeserializer(item);
  });
}

/** Schema versions resource. */
export interface Version {
  /** Version number of specific schema. */
  readonly schemaVersion: number;
}

export function versionDeserializer(item: any): Version {
  return {
    schemaVersion: item["schemaVersion"],
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

export type SchemaOperationsGetSchemaByVersionResponse = { body: Uint8Array };

export type SchemaOperationsGetSchemaByIdResponse = { body: Uint8Array };

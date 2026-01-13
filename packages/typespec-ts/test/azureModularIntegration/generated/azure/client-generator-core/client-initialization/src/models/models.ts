// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Input */
export interface Input {
  name: string;
}

export function inputSerializer(item: Input): any {
  return { name: item["name"] };
}

/** model interface _WithBodyRequest */
export interface _WithBodyRequest {
  name: string;
}

export function _withBodyRequestSerializer(item: _WithBodyRequest): any {
  return { name: item["name"] };
}

/** Properties of a blob */
export interface BlobProperties {
  name: string;
  size: number;
  contentType: string;
  createdOn: Date;
}

export function blobPropertiesDeserializer(item: any): BlobProperties {
  return {
    name: item["name"],
    size: item["size"],
    contentType: item["contentType"],
    createdOn: new Date(item["createdOn"]),
  };
}

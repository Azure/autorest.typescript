// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Schema,
  SchemaProperties,
  SchemaVersion,
  PagedVersion,
  SchemaGroup,
  PagedSchemaGroup,
} from "../models/models.js";
import {
  Schema as RestSchema,
  SchemaProperties as RestSchemaProperties,
  VersionOutput as RestSchemaVersion,
  PagedVersionOutput as RestPagedVersion,
  SchemaGroupOutput as RestSchemaGroup,
  PagedSchemaGroupOutput as RestPagedSchemaGroup,
} from "../rest/index.js";

export function serializeSchema(o: Schema): RestSchema {
  return {
    properties: MISSING_SERIALIZER(o["properties"]),
    definition: o["definition"],
  };
}

export function deserializeSchema(o: RestSchema): Schema {
  return {
    properties: MISSING_SERIALIZER(o["properties"]),
    definition: o["definition"],
  };
}

export function serializeSchemaProperties(
  o: SchemaProperties,
): RestSchemaProperties {
  return {
    version: o["version"],
    name: o["name"],
    groupName: o["groupName"],
    format: o["format"],
    id: o["id"],
  };
}

export function deserializeSchemaProperties(
  o: RestSchemaProperties,
): SchemaProperties {
  return {
    version: o["version"],
    name: o["name"],
    groupName: o["groupName"],
    format: o["format"],
    id: o["id"],
  };
}

export function deserializeSchemaVersion(o: RestSchemaVersion): SchemaVersion {
  return {};
}

export function deserializePagedVersion(o: RestPagedVersion): PagedVersion {
  return {
    value: o["value"].map((e: RestSchemaVersion) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeSchemaGroup(o: RestSchemaGroup): SchemaGroup {
  return {};
}

export function deserializePagedSchemaGroup(
  o: RestPagedSchemaGroup,
): PagedSchemaGroup {
  return {
    value: o["value"].map((e: RestSchemaGroup) => MISSING_SERIALIZER(e)),
  };
}

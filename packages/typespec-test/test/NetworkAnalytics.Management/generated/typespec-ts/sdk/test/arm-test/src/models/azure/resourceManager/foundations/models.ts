// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ControlState, DataTypeState } from "../../../models.js";
import {
  ManagedServiceIdentityV4,
  managedServiceIdentityV4Serializer,
} from "../legacy/models.js";

/** The type used for update operations of the DataProduct. */
export interface DataProductUpdate {
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentityV4;
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: DataProductUpdateProperties;
}

export function dataProductUpdateSerializer(item: DataProductUpdate): any {
  return {
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentityV4Serializer(item["identity"]),
    tags: item["tags"],
    properties: !item["properties"]
      ? item["properties"]
      : dataProductUpdatePropertiesSerializer(item["properties"]),
  };
}

/** The updatable properties of the DataProduct. */
export interface DataProductUpdateProperties {
  /** List of name or email associated with data product resource deployment. */
  owners?: string[];
  /** Purview account url for data product to connect to. */
  purviewAccount?: string;
  /** Purview collection url for data product to connect to. */
  purviewCollection?: string;
  /** Flag to enable or disable private link for data product resource. */
  privateLinksEnabled?: ControlState;
  /** Current configured minor version of the data product resource. */
  currentMinorVersion?: string;
}

export function dataProductUpdatePropertiesSerializer(
  item: DataProductUpdateProperties,
): any {
  return {
    owners: !item["owners"]
      ? item["owners"]
      : item["owners"].map((p: any) => {
          return p;
        }),
    purviewAccount: item["purviewAccount"],
    purviewCollection: item["purviewCollection"],
    privateLinksEnabled: item["privateLinksEnabled"],
    currentMinorVersion: item["currentMinorVersion"],
  };
}

/** The type used for update operations of the DataType. */
export interface DataTypeUpdate {
  /** The resource-specific properties for this resource. */
  properties?: DataTypeUpdateProperties;
}

export function dataTypeUpdateSerializer(item: DataTypeUpdate): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : dataTypeUpdatePropertiesSerializer(item["properties"]),
  };
}

/** The updatable properties of the DataType. */
export interface DataTypeUpdateProperties {
  /** State of data type. */
  state?: DataTypeState;
  /** Field for storage output retention in days. */
  storageOutputRetention?: number;
  /** Field for database cache retention in days. */
  databaseCacheRetention?: number;
  /** Field for database data retention in days. */
  databaseRetention?: number;
}

export function dataTypeUpdatePropertiesSerializer(
  item: DataTypeUpdateProperties,
): any {
  return {
    state: item["state"],
    storageOutputRetention: item["storageOutputRetention"],
    databaseCacheRetention: item["databaseCacheRetention"],
    databaseRetention: item["databaseRetention"],
  };
}

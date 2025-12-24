// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  YDataverseDataverseSourceConnectorProperties,
  yDataverseDataverseSourceConnectorPropertiesDeserializer,
} from "./dataverse/models.js";
import {
  YDataverseV2DataverseSourceConnectorV2Properties,
  yDataverseV2DataverseSourceConnectorV2PropertiesDeserializer,
} from "./dataverseV2/models.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface YDataSourceProperties */
export interface YDataSourceProperties {
  connectorType: YConnectorType;
}

export function yDataSourcePropertiesDeserializer(item: any): YDataSourceProperties {
  return {
    connectorType: item["connectorType"],
  };
}

/** Alias for YDataSourcePropertiesUnion */
export type YDataSourcePropertiesUnion =
  | YDataverseDataverseSourceConnectorProperties
  | YDataverseV2DataverseSourceConnectorV2Properties
  | YDataSourceProperties;

export function yDataSourcePropertiesUnionDeserializer(item: any): YDataSourcePropertiesUnion {
  switch (item.connectorType) {
    case "EventHubSource":
      return yDataverseDataverseSourceConnectorPropertiesDeserializer(
        item as YDataverseDataverseSourceConnectorProperties,
      );

    case "IoTHubSource":
      return yDataverseV2DataverseSourceConnectorV2PropertiesDeserializer(
        item as YDataverseV2DataverseSourceConnectorV2Properties,
      );

    default:
      return yDataSourcePropertiesDeserializer(item);
  }
}

/** Type of YConnectorType */
export type YConnectorType = "EventHubSource" | "IoTHubSource";

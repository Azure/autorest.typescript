// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { YDataSourceProperties } from "../models.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface YDataverseV2DataverseSourceConnectorV2Properties */
export interface YDataverseV2DataverseSourceConnectorV2Properties extends YDataSourceProperties {
  connectorType: "IoTHubSource";
  startEventPosition: YDataverseV2DataverseEventPosition;
}

export function yDataverseV2DataverseSourceConnectorV2PropertiesDeserializer(
  item: any,
): YDataverseV2DataverseSourceConnectorV2Properties {
  return {
    connectorType: item["connectorType"],
    startEventPosition: item["startEventPosition"],
  };
}

/** Type of YDataverseV2DataverseEventPosition */
export type YDataverseV2DataverseEventPosition = "Earliest" | "Latest";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { YDataSourceProperties } from "../models.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface YDataverseDataverseSourceConnectorProperties */
export interface YDataverseDataverseSourceConnectorProperties extends YDataSourceProperties {
  connectorType: "EventHubSource";
  startEventPosition: YDataverseDataverseEventPosition;
}

export function yDataverseDataverseSourceConnectorPropertiesDeserializer(
  item: any,
): YDataverseDataverseSourceConnectorProperties {
  return {
    connectorType: item["connectorType"],
    startEventPosition: item["startEventPosition"],
  };
}

/** Type of YDataverseDataverseEventPosition */
export type YDataverseDataverseEventPosition = "Earliest" | "Latest";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext as Client } from "../../index.js";
import {
  YDataverseDataverseSourceConnectorProperties,
  yDataverseDataverseSourceConnectorPropertiesDeserializer,
} from "../../../models/y/dataverse/models.js";
import {
  YDataverseV2DataverseSourceConnectorV2Properties,
  yDataverseV2DataverseSourceConnectorV2PropertiesDeserializer,
} from "../../../models/y/dataverseV2/models.js";
import {
  YTestOperationsTestDataverseV2OptionalParams,
  YTestOperationsTestDataverseOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _testDataverseV2Send(
  context: Client,
  options: YTestOperationsTestDataverseV2OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _testDataverseV2Deserialize(
  result: PathUncheckedResponse,
): Promise<YDataverseV2DataverseSourceConnectorV2Properties> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return yDataverseV2DataverseSourceConnectorV2PropertiesDeserializer(result.body);
}

export async function testDataverseV2(
  context: Client,
  options: YTestOperationsTestDataverseV2OptionalParams = { requestOptions: {} },
): Promise<YDataverseV2DataverseSourceConnectorV2Properties> {
  const result = await _testDataverseV2Send(context, options);
  return _testDataverseV2Deserialize(result);
}

export function _testDataverseSend(
  context: Client,
  options: YTestOperationsTestDataverseOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _testDataverseDeserialize(
  result: PathUncheckedResponse,
): Promise<YDataverseDataverseSourceConnectorProperties> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return yDataverseDataverseSourceConnectorPropertiesDeserializer(result.body);
}

export async function testDataverse(
  context: Client,
  options: YTestOperationsTestDataverseOptionalParams = { requestOptions: {} },
): Promise<YDataverseDataverseSourceConnectorProperties> {
  const result = await _testDataverseSend(context, options);
  return _testDataverseDeserialize(result);
}

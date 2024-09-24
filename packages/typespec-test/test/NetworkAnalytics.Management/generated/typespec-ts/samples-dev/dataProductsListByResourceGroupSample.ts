// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsClient } from "@azure/arm-networkanalytics";
import {
  _DataProductListResult,
  _dataProductListResultSerializer,
  _dataProductListResultDeserializer,
  _DataTypeListResult,
  _dataTypeListResultSerializer,
  _dataTypeListResultDeserializer,
  _DataProductsCatalogListResult,
  _dataProductsCatalogListResultSerializer,
  _dataProductsCatalogListResultDeserializer,
  _OperationListResult,
  _operationListResultSerializer,
  _operationListResultDeserializer,
} from "../src/models/models.js";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list data products by resource group.
 *
 * @summary list data products by resource group.
 * x-ms-original-file: 2023-11-15/DataProducts_ListByResourceGroup_MinimumSet_Gen.json
 */
async function dataProductsListByResourceGroupMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.dataProducts.listByResourceGroup(
    "aoiresourceGroupName",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  dataProductsListByResourceGroupMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { assert } from "chai";
import { AzureCloud, getArmEndpoint } from "../../src/utils/azureCloud";

describe("AzureCloud", () => {
  it("should define all major cloud environments", () => {
    assert.isDefined(AzureCloud.AzurePublicCloud);
    assert.isDefined(AzureCloud.AzureChinaCloud);
    assert.isDefined(AzureCloud.AzureUSGovernment);
    assert.isDefined(AzureCloud.AzureGermanCloud);
  });

  it("should return the correct endpoint for the public cloud", () => {
    assert.equal(getArmEndpoint(AzureCloud.AzurePublicCloud), "https://management.azure.com");
  });

  it("should return the correct endpoint for the china cloud", () => {
    assert.equal(getArmEndpoint(AzureCloud.AzureChinaCloud), "https://management.chinacloudapi.cn");
  });

  it("should return the correct endpoint for the US government cloud", () => {
    assert.equal(getArmEndpoint(AzureCloud.AzureUSGovernment), "https://management.usgovcloudapi.net");
  });

  it("should return the correct endpoint for the german cloud", () => {
    assert.equal(getArmEndpoint(AzureCloud.AzureGermanCloud), "https://management.microsoftazure.de");
  });

  it("should default to the public cloud when no cloud is specified", () => {
    assert.equal(getArmEndpoint(), "https://management.azure.com");
  });
});
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Enum defining different Azure cloud environments.
 */
export enum AzureCloud {
  /**
   * Azure Public Cloud
   */
  AzurePublicCloud = "AZURE_PUBLIC_CLOUD",
  
  /**
   * Azure China Cloud
   */
  AzureChinaCloud = "AZURE_CHINA_CLOUD",
  
  /**
   * Azure US Government Cloud
   */
  AzureUSGovernment = "AZURE_US_GOVERNMENT",
  
  /**
   * Azure German Cloud
   */
  AzureGermanCloud = "AZURE_GERMAN_CLOUD"
}

/**
 * Gets the ARM endpoint URL for the specified Azure cloud environment.
 * @param cloudSetting - The Azure cloud environment
 * @returns The ARM endpoint URL for the specified cloud
 */
export function getArmEndpoint(cloudSetting: string = AzureCloud.AzurePublicCloud): string {
  switch (cloudSetting) {
    case AzureCloud.AzureChinaCloud:
      return "https://management.chinacloudapi.cn";
    case AzureCloud.AzureUSGovernment:
      return "https://management.usgovcloudapi.net";
    case AzureCloud.AzureGermanCloud:
      return "https://management.microsoftazure.de";
    case AzureCloud.AzurePublicCloud:
    default:
      return "https://management.azure.com";
  }
}
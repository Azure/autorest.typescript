// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface _OperationListResult {
  /** The Operation items on this page */
  value: Operation[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _operationListResultDeserializer(
  item: any,
): _OperationListResult {
  return {
    value: operationArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function operationArrayDeserializer(result: Array<Operation>): any[] {
  return result.map((item) => {
    return operationDeserializer(item);
  });
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /** The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action" */
  readonly name?: string;
  /** Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for Azure Resource Manager/control-plane operations. */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplay;
  /** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
  readonly origin?: Origin;
  /** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
  readonly actionType?: ActionType;
}

export function operationDeserializer(item: any): Operation {
  return {
    name: item["name"],
    isDataAction: item["isDataAction"],
    display: !item["display"]
      ? item["display"]
      : operationDisplayDeserializer(item["display"]),
    origin: item["origin"],
    actionType: item["actionType"],
  };
}

/** Localized display information for and operation. */
export interface OperationDisplay {
  /** The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute". */
  readonly provider?: string;
  /** The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections". */
  readonly resource?: string;
  /** The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine". */
  readonly operation?: string;
  /** The short, localized friendly description of the operation; suitable for tool tips and detailed views. */
  readonly description?: string;
}

export function operationDisplayDeserializer(item: any): OperationDisplay {
  return {
    provider: item["provider"],
    resource: item["resource"],
    operation: item["operation"],
    description: item["description"],
  };
}

/** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
export enum KnownOrigin {
  /** Indicates the operation is initiated by a user. */
  User = "user",
  /** Indicates the operation is initiated by a system. */
  System = "system",
  /** Indicates the operation is initiated by a user or system. */
  UserSystem = "user,system",
}

/**
 * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user**: Indicates the operation is initiated by a user. \
 * **system**: Indicates the operation is initiated by a system. \
 * **user,system**: Indicates the operation is initiated by a user or system.
 */
export type Origin = string;

/** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
export enum KnownActionType {
  /** Actions are for internal-only APIs. */
  Internal = "Internal",
}

/**
 * Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**: Actions are for internal-only APIs.
 */
export type ActionType = string;

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

export function errorResponseDeserializer(item: any): ErrorResponse {
  return {
    error: !item["error"]
      ? item["error"]
      : errorDetailDeserializer(item["error"]),
  };
}

/** The error detail. */
export interface ErrorDetail {
  /** The error code. */
  readonly code?: string;
  /** The error message. */
  readonly message?: string;
  /** The error target. */
  readonly target?: string;
  /** The error details. */
  readonly details?: ErrorDetail[];
  /** The error additional info. */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

export function errorDetailDeserializer(item: any): ErrorDetail {
  return {
    code: item["code"],
    message: item["message"],
    target: item["target"],
    details: !item["details"]
      ? item["details"]
      : errorDetailArrayDeserializer(item["details"]),
    additionalInfo: !item["additionalInfo"]
      ? item["additionalInfo"]
      : errorAdditionalInfoArrayDeserializer(item["additionalInfo"]),
  };
}

export function errorDetailArrayDeserializer(
  result: Array<ErrorDetail>,
): any[] {
  return result.map((item) => {
    return errorDetailDeserializer(item);
  });
}

export function errorAdditionalInfoArrayDeserializer(
  result: Array<ErrorAdditionalInfo>,
): any[] {
  return result.map((item) => {
    return errorAdditionalInfoDeserializer(item);
  });
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /** The additional info type. */
  readonly type?: string;
  /** The additional info. */
  readonly info?: any;
}

export function errorAdditionalInfoDeserializer(
  item: any,
): ErrorAdditionalInfo {
  return {
    type: item["type"],
    info: item["info"],
  };
}

/** Business case resource. */
export interface BusinessCase extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: BusinessCaseProperties;
}

export function businessCaseSerializer(item: BusinessCase): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : businessCasePropertiesSerializer(item["properties"]),
  };
}

export function businessCaseDeserializer(item: any): BusinessCase {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : businessCasePropertiesDeserializer(item["properties"]),
  };
}

/**
 * Property bag for an
 * Microsoft.Azure.Migrate.BusinessCaseService.Api.V20220202_preview.Resources.BusinessCase
 * resource.
 */
export interface BusinessCaseProperties {
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
  /** Business case settings. */
  settings?: Settings;
  /** Business case state. */
  readonly state?: BusinessCaseState;
  /** Gets the state of business case reports. */
  readonly reportStatusDetails?: ReportDetails[];
  /** Gets the business case scope. */
  readonly businessCaseScope?: BusinessCaseScope;
}

export function businessCasePropertiesSerializer(
  item: BusinessCaseProperties,
): any {
  return {
    settings: !item["settings"]
      ? item["settings"]
      : settingsSerializer(item["settings"]),
  };
}

export function businessCasePropertiesDeserializer(
  item: any,
): BusinessCaseProperties {
  return {
    provisioningState: item["provisioningState"],
    settings: !item["settings"]
      ? item["settings"]
      : settingsDeserializer(item["settings"]),
    state: item["state"],
    reportStatusDetails: !item["reportStatusDetails"]
      ? item["reportStatusDetails"]
      : reportDetailsArrayDeserializer(item["reportStatusDetails"]),
    businessCaseScope: !item["businessCaseScope"]
      ? item["businessCaseScope"]
      : businessCaseScopeDeserializer(item["businessCaseScope"]),
  };
}

/** The status of the current operation. */
export enum KnownProvisioningState {
  /** Resource provisioning Successful. */
  Succeeded = "Succeeded",
  /** Resource provisioning Failed. */
  Failed = "Failed",
  /** Resource provisioning Canceled. */
  Canceled = "Canceled",
  /** Resource is being Provisioned. */
  Provisioning = "Provisioning",
  /** Resource is being Updated. */
  Updating = "Updating",
  /** Resource is being Deleted. */
  Deleting = "Deleting",
  /** Resource is being Accepted. */
  Accepted = "Accepted",
}

/**
 * The status of the current operation. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource provisioning Successful. \
 * **Failed**: Resource provisioning Failed. \
 * **Canceled**: Resource provisioning Canceled. \
 * **Provisioning**: Resource is being Provisioned. \
 * **Updating**: Resource is being Updated. \
 * **Deleting**: Resource is being Deleted. \
 * **Accepted**: Resource is being Accepted.
 */
export type ProvisioningState = string;

/** Business case settings. */
export interface Settings {
  /** Azure settings for a business case. */
  azureSettings: AzureSettings;
  /** On-premise settings. */
  onPremiseSettings?: OnPremiseSettings;
  /** Azure arc settings. */
  azureArcSettings?: AzureArcSettings;
}

export function settingsSerializer(item: Settings): any {
  return {
    azureSettings: azureSettingsSerializer(item["azureSettings"]),
    onPremiseSettings: !item["onPremiseSettings"]
      ? item["onPremiseSettings"]
      : onPremiseSettingsSerializer(item["onPremiseSettings"]),
    azureArcSettings: !item["azureArcSettings"]
      ? item["azureArcSettings"]
      : azureArcSettingsSerializer(item["azureArcSettings"]),
  };
}

export function settingsDeserializer(item: any): Settings {
  return {
    azureSettings: azureSettingsDeserializer(item["azureSettings"]),
    onPremiseSettings: !item["onPremiseSettings"]
      ? item["onPremiseSettings"]
      : onPremiseSettingsDeserializer(item["onPremiseSettings"]),
    azureArcSettings: !item["azureArcSettings"]
      ? item["azureArcSettings"]
      : azureArcSettingsDeserializer(item["azureArcSettings"]),
  };
}

/** Azure settings for a business case. */
export interface AzureSettings {
  /** Gets or sets azure location. */
  targetLocation: string;
  /** Gets azure Discount percentage. */
  discountPercentage?: number;
  /** Business case Currency. */
  currency: BusinessCaseCurrency;
  /** Migration Strategy. */
  businessCaseType?: MigrationStrategy;
  /** Workload discovery source. */
  workloadDiscoverySource?: DiscoverySource;
  /** Gets start time to use for performance. */
  performanceDataStartTime?: Date;
  /** Gets end time to use for performance. */
  performanceDataEndTime?: Date;
  /** Gets comfort factor. */
  comfortFactor?: number;
  /** Gets utilization percentile for performance. */
  performanceUtilizationPercentile?: number;
  /** Gets migration completion percentage per year. */
  perYearMigrationCompletionPercentage?: NameValuePair[];
  /** Gets infrastructure growth rate. */
  infrastructureGrowthRate?: number;
  /** Gets wACC percentage. */
  wacc?: number;
  /** Gets network cost percentage. */
  networkCostPercentage?: number;
  /** Gets IaaS labour cost percentage. */
  iaasLaborCostPercentage?: number;
  /** Gets PaaS labour cost percentage. */
  paasLaborCostPercentage?: number;
  /** Gets Avs labour cost percentage. */
  avsLaborCostPercentage?: number;
  /** Gets the business case savings option type. */
  savingsOption?: SavingsOption;
}

export function azureSettingsSerializer(item: AzureSettings): any {
  return {
    targetLocation: item["targetLocation"],
    discountPercentage: item["discountPercentage"],
    currency: item["currency"],
    businessCaseType: item["businessCaseType"],
    workloadDiscoverySource: item["workloadDiscoverySource"],
    performanceDataStartTime: !item["performanceDataStartTime"]
      ? item["performanceDataStartTime"]
      : item["performanceDataStartTime"].toISOString(),
    performanceDataEndTime: !item["performanceDataEndTime"]
      ? item["performanceDataEndTime"]
      : item["performanceDataEndTime"].toISOString(),
    comfortFactor: item["comfortFactor"],
    performanceUtilizationPercentile: item["performanceUtilizationPercentile"],
    perYearMigrationCompletionPercentage: !item[
      "perYearMigrationCompletionPercentage"
    ]
      ? item["perYearMigrationCompletionPercentage"]
      : nameValuePairArraySerializer(
          item["perYearMigrationCompletionPercentage"],
        ),
    infrastructureGrowthRate: item["infrastructureGrowthRate"],
    wacc: item["wacc"],
    networkCostPercentage: item["networkCostPercentage"],
    iaasLaborCostPercentage: item["iaasLaborCostPercentage"],
    paasLaborCostPercentage: item["paasLaborCostPercentage"],
    avsLaborCostPercentage: item["avsLaborCostPercentage"],
    savingsOption: item["savingsOption"],
  };
}

export function azureSettingsDeserializer(item: any): AzureSettings {
  return {
    targetLocation: item["targetLocation"],
    discountPercentage: item["discountPercentage"],
    currency: item["currency"],
    businessCaseType: item["businessCaseType"],
    workloadDiscoverySource: item["workloadDiscoverySource"],
    performanceDataStartTime: !item["performanceDataStartTime"]
      ? item["performanceDataStartTime"]
      : new Date(item["performanceDataStartTime"]),
    performanceDataEndTime: !item["performanceDataEndTime"]
      ? item["performanceDataEndTime"]
      : new Date(item["performanceDataEndTime"]),
    comfortFactor: item["comfortFactor"],
    performanceUtilizationPercentile: item["performanceUtilizationPercentile"],
    perYearMigrationCompletionPercentage: !item[
      "perYearMigrationCompletionPercentage"
    ]
      ? item["perYearMigrationCompletionPercentage"]
      : nameValuePairArrayDeserializer(
          item["perYearMigrationCompletionPercentage"],
        ),
    infrastructureGrowthRate: item["infrastructureGrowthRate"],
    wacc: item["wacc"],
    networkCostPercentage: item["networkCostPercentage"],
    iaasLaborCostPercentage: item["iaasLaborCostPercentage"],
    paasLaborCostPercentage: item["paasLaborCostPercentage"],
    avsLaborCostPercentage: item["avsLaborCostPercentage"],
    savingsOption: item["savingsOption"],
  };
}

/** Business case supported currency types. */
export enum KnownBusinessCaseCurrency {
  /** Currency Unknown. */
  Unknown = "Unknown",
  /** Currency USD. */
  USD = "USD",
  /** Currency DKK. */
  DKK = "DKK",
  /** Currency CAD. */
  CAD = "CAD",
  /** Currency IDR. */
  IDR = "IDR",
  /** Currency JPY. */
  JPY = "JPY",
  /** Currency KRW. */
  KRW = "KRW",
  /** Currency NZD. */
  NZD = "NZD",
  /** Currency NOK. */
  NOK = "NOK",
  /** Currency RUB. */
  RUB = "RUB",
  /** Currency SAR. */
  SAR = "SAR",
  /** Currency ZAR. */
  ZAR = "ZAR",
  /** Currency SEK. */
  SEK = "SEK",
  /** Currency TRY. */
  TRY = "TRY",
  /** Currency GBP. */
  GBP = "GBP",
  /** Currency MXN. */
  MXN = "MXN",
  /** Currency MYR. */
  MYR = "MYR",
  /** Currency INR. */
  INR = "INR",
  /** Currency HKD. */
  HKD = "HKD",
  /** Currency BRL. */
  BRL = "BRL",
  /** Currency TWD. */
  TWD = "TWD",
  /** Currency EUR. */
  EUR = "EUR",
  /** Currency CHF. */
  CHF = "CHF",
  /** Currency ARS. */
  ARS = "ARS",
  /** Currency AUD. */
  AUD = "AUD",
  /** Currency CNY. */
  CNY = "CNY",
}

/**
 * Business case supported currency types. \
 * {@link KnownBusinessCaseCurrency} can be used interchangeably with BusinessCaseCurrency,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Currency Unknown. \
 * **USD**: Currency USD. \
 * **DKK**: Currency DKK. \
 * **CAD**: Currency CAD. \
 * **IDR**: Currency IDR. \
 * **JPY**: Currency JPY. \
 * **KRW**: Currency KRW. \
 * **NZD**: Currency NZD. \
 * **NOK**: Currency NOK. \
 * **RUB**: Currency RUB. \
 * **SAR**: Currency SAR. \
 * **ZAR**: Currency ZAR. \
 * **SEK**: Currency SEK. \
 * **TRY**: Currency TRY. \
 * **GBP**: Currency GBP. \
 * **MXN**: Currency MXN. \
 * **MYR**: Currency MYR. \
 * **INR**: Currency INR. \
 * **HKD**: Currency HKD. \
 * **BRL**: Currency BRL. \
 * **TWD**: Currency TWD. \
 * **EUR**: Currency EUR. \
 * **CHF**: Currency CHF. \
 * **ARS**: Currency ARS. \
 * **AUD**: Currency AUD. \
 * **CNY**: Currency CNY.
 */
export type BusinessCaseCurrency = string;

/** Business case supported migration strategy types. */
export enum KnownMigrationStrategy {
  /** Unknown Migration Strategy. */
  Unknown = "Unknown",
  /** Optimize for cost. */
  OptimizeForCost = "OptimizeForCost",
  /** IaaS only. */
  IaaSOnly = "IaaSOnly",
  /** Optimize for PaaS. */
  OptimizeForPaas = "OptimizeForPaas",
  /** Avs only. */
  AVSOnly = "AVSOnly",
}

/**
 * Business case supported migration strategy types. \
 * {@link KnownMigrationStrategy} can be used interchangeably with MigrationStrategy,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown Migration Strategy. \
 * **OptimizeForCost**: Optimize for cost. \
 * **IaaSOnly**: IaaS only. \
 * **OptimizeForPaas**: Optimize for PaaS. \
 * **AVSOnly**: Avs only.
 */
export type MigrationStrategy = string;

/** Business case supported Discovery source types. */
export enum KnownDiscoverySource {
  /** Unknown Discovery Source. */
  Unknown = "Unknown",
  /** Appliance Discovery Source. */
  Appliance = "Appliance",
  /** Import Discovery Source. */
  Import = "Import",
}

/**
 * Business case supported Discovery source types. \
 * {@link KnownDiscoverySource} can be used interchangeably with DiscoverySource,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown Discovery Source. \
 * **Appliance**: Appliance Discovery Source. \
 * **Import**: Import Discovery Source.
 */
export type DiscoverySource = string;

export function nameValuePairArraySerializer(
  result: Array<NameValuePair>,
): any[] {
  return result.map((item) => {
    return nameValuePairSerializer(item);
  });
}

export function nameValuePairArrayDeserializer(
  result: Array<NameValuePair>,
): any[] {
  return result.map((item) => {
    return nameValuePairDeserializer(item);
  });
}

/** The generic name value pair. */
export interface NameValuePair {
  /** The name. */
  name?: string;
  /** The value. */
  value?: number;
}

export function nameValuePairSerializer(item: NameValuePair): any {
  return { name: item["name"], value: item["value"] };
}

export function nameValuePairDeserializer(item: any): NameValuePair {
  return {
    name: item["name"],
    value: item["value"],
  };
}

/** Business case supported Savings Option types. */
export enum KnownSavingsOption {
  /** Unknown Savings Option. */
  Unknown = "Unknown",
  /** Reserved Instance 3 Year. */
  RI3Year = "RI3Year",
  /** Azure Savings Plan 3 Year. */
  SavingsPlan3Year = "SavingsPlan3Year",
}

/**
 * Business case supported Savings Option types. \
 * {@link KnownSavingsOption} can be used interchangeably with SavingsOption,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown Savings Option. \
 * **RI3Year**: Reserved Instance 3 Year. \
 * **SavingsPlan3Year**: Azure Savings Plan 3 Year.
 */
export type SavingsOption = string;

/** On-premise settings. */
export interface OnPremiseSettings {
  /** Compute settings. */
  computeSettings: ComputeSettings;
  /** Storage settings. */
  storageSettings: StorageSettings;
  /** Network settings. */
  networkSettings: NetworkSettings;
  /** Facility settings. */
  facilitySettings: FacilitySettings;
  /** Labour settings. */
  laborSettings: LaborSettings;
  /** Security settings. */
  securitySettings: SecuritySettings;
  /** Management settings. */
  managementSettings?: ManagementSettings;
}

export function onPremiseSettingsSerializer(item: OnPremiseSettings): any {
  return {
    computeSettings: computeSettingsSerializer(item["computeSettings"]),
    storageSettings: storageSettingsSerializer(item["storageSettings"]),
    networkSettings: networkSettingsSerializer(item["networkSettings"]),
    facilitySettings: facilitySettingsSerializer(item["facilitySettings"]),
    laborSettings: laborSettingsSerializer(item["laborSettings"]),
    securitySettings: securitySettingsSerializer(item["securitySettings"]),
    managementSettings: !item["managementSettings"]
      ? item["managementSettings"]
      : managementSettingsSerializer(item["managementSettings"]),
  };
}

export function onPremiseSettingsDeserializer(item: any): OnPremiseSettings {
  return {
    computeSettings: computeSettingsDeserializer(item["computeSettings"]),
    storageSettings: storageSettingsDeserializer(item["storageSettings"]),
    networkSettings: networkSettingsDeserializer(item["networkSettings"]),
    facilitySettings: facilitySettingsDeserializer(item["facilitySettings"]),
    laborSettings: laborSettingsDeserializer(item["laborSettings"]),
    securitySettings: securitySettingsDeserializer(item["securitySettings"]),
    managementSettings: !item["managementSettings"]
      ? item["managementSettings"]
      : managementSettingsDeserializer(item["managementSettings"]),
  };
}

/** Compute settings. */
export interface ComputeSettings {
  /** Hyperthread core to memory ratio. */
  hyperthreadCoreToMemoryRatio: number;
  /** Compute Price. */
  price: number;
  /** Compute Hardware Maintenance Cost. */
  computeHardwareMaintenanceCost: number;
  /** VM Oversubscription Ratio. */
  vmOversubscriptionRatio: number;
  /** CPU Oversubscription Ratio. */
  cpuOversubscriptionRatio: number;
  /** SQL Server licensing settings. */
  sqlServerLicensing: SqlServerLicensingSettings[];
  /** Windows Server licensing settings. */
  windowsServerLicensing: WindowsServerLicensingSettings;
  /** Linux Rhel Server licensing settings. */
  rhelLinuxServerLicensing: LinuxServerLicensingSettings;
  /** Linux Suse Server licensing settings. */
  suseLinuxServerLicensing: LinuxServerLicensingSettings;
  /** Virtualization software settings. */
  virtualizationSoftwareSettings: VirtualizationSoftwareSettings;
}

export function computeSettingsSerializer(item: ComputeSettings): any {
  return {
    hyperthreadCoreToMemoryRatio: item["hyperthreadCoreToMemoryRatio"],
    price: item["price"],
    computeHardwareMaintenanceCost: item["computeHardwareMaintenanceCost"],
    vmOversubscriptionRatio: item["vmOversubscriptionRatio"],
    cpuOversubscriptionRatio: item["cpuOversubscriptionRatio"],
    sqlServerLicensing: sqlServerLicensingSettingsArraySerializer(
      item["sqlServerLicensing"],
    ),
    windowsServerLicensing: windowsServerLicensingSettingsSerializer(
      item["windowsServerLicensing"],
    ),
    rhelLinuxServerLicensing: linuxServerLicensingSettingsSerializer(
      item["rhelLinuxServerLicensing"],
    ),
    suseLinuxServerLicensing: linuxServerLicensingSettingsSerializer(
      item["suseLinuxServerLicensing"],
    ),
    virtualizationSoftwareSettings: virtualizationSoftwareSettingsSerializer(
      item["virtualizationSoftwareSettings"],
    ),
  };
}

export function computeSettingsDeserializer(item: any): ComputeSettings {
  return {
    hyperthreadCoreToMemoryRatio: item["hyperthreadCoreToMemoryRatio"],
    price: item["price"],
    computeHardwareMaintenanceCost: item["computeHardwareMaintenanceCost"],
    vmOversubscriptionRatio: item["vmOversubscriptionRatio"],
    cpuOversubscriptionRatio: item["cpuOversubscriptionRatio"],
    sqlServerLicensing: sqlServerLicensingSettingsArrayDeserializer(
      item["sqlServerLicensing"],
    ),
    windowsServerLicensing: windowsServerLicensingSettingsDeserializer(
      item["windowsServerLicensing"],
    ),
    rhelLinuxServerLicensing: linuxServerLicensingSettingsDeserializer(
      item["rhelLinuxServerLicensing"],
    ),
    suseLinuxServerLicensing: linuxServerLicensingSettingsDeserializer(
      item["suseLinuxServerLicensing"],
    ),
    virtualizationSoftwareSettings: virtualizationSoftwareSettingsDeserializer(
      item["virtualizationSoftwareSettings"],
    ),
  };
}

export function sqlServerLicensingSettingsArraySerializer(
  result: Array<SqlServerLicensingSettings>,
): any[] {
  return result.map((item) => {
    return sqlServerLicensingSettingsSerializer(item);
  });
}

export function sqlServerLicensingSettingsArrayDeserializer(
  result: Array<SqlServerLicensingSettings>,
): any[] {
  return result.map((item) => {
    return sqlServerLicensingSettingsDeserializer(item);
  });
}

/** SQL Server licensing settings. */
export interface SqlServerLicensingSettings {
  /** SQL Server version. */
  version: SqlServerLicenseType;
  /** Licence cost. */
  licenseCost: number;
  /** Software assurance (SA) cost. */
  softwareAssuranceCost: number;
}

export function sqlServerLicensingSettingsSerializer(
  item: SqlServerLicensingSettings,
): any {
  return {
    version: item["version"],
    licenseCost: item["licenseCost"],
    softwareAssuranceCost: item["softwareAssuranceCost"],
  };
}

export function sqlServerLicensingSettingsDeserializer(
  item: any,
): SqlServerLicensingSettings {
  return {
    version: item["version"],
    licenseCost: item["licenseCost"],
    softwareAssuranceCost: item["softwareAssuranceCost"],
  };
}

/** Business case supported SQL Server License types. */
export enum KnownSqlServerLicenseType {
  /** Unknown Sql Server License. */
  Unknown = "Unknown",
  /** Enterprise Sql Server License. */
  Enterprise = "Enterprise",
  /** Standard Sql Server License. */
  Standard = "Standard",
}

/**
 * Business case supported SQL Server License types. \
 * {@link KnownSqlServerLicenseType} can be used interchangeably with SqlServerLicenseType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown Sql Server License. \
 * **Enterprise**: Enterprise Sql Server License. \
 * **Standard**: Standard Sql Server License.
 */
export type SqlServerLicenseType = string;

/** Windows Server licensing settings. */
export interface WindowsServerLicensingSettings {
  /** Licence Cost. */
  licenseCost: number;
  /** Software assurance (SA) cost. */
  softwareAssuranceCost: number;
  /** Licenses per core. */
  licensesPerCore: number;
}

export function windowsServerLicensingSettingsSerializer(
  item: WindowsServerLicensingSettings,
): any {
  return {
    licenseCost: item["licenseCost"],
    softwareAssuranceCost: item["softwareAssuranceCost"],
    licensesPerCore: item["licensesPerCore"],
  };
}

export function windowsServerLicensingSettingsDeserializer(
  item: any,
): WindowsServerLicensingSettings {
  return {
    licenseCost: item["licenseCost"],
    softwareAssuranceCost: item["softwareAssuranceCost"],
    licensesPerCore: item["licensesPerCore"],
  };
}

/** Linux Server licensing settings. */
export interface LinuxServerLicensingSettings {
  /** Licence Cost. */
  licenseCost: number;
}

export function linuxServerLicensingSettingsSerializer(
  item: LinuxServerLicensingSettings,
): any {
  return { licenseCost: item["licenseCost"] };
}

export function linuxServerLicensingSettingsDeserializer(
  item: any,
): LinuxServerLicensingSettings {
  return {
    licenseCost: item["licenseCost"],
  };
}

/** Virtualization software settings. */
export interface VirtualizationSoftwareSettings {
  /** VMware cloud foundation license cost. */
  vMwareCloudFoundationLicenseCost: number;
}

export function virtualizationSoftwareSettingsSerializer(
  item: VirtualizationSoftwareSettings,
): any {
  return {
    vMwareCloudFoundationLicenseCost: item["vMwareCloudFoundationLicenseCost"],
  };
}

export function virtualizationSoftwareSettingsDeserializer(
  item: any,
): VirtualizationSoftwareSettings {
  return {
    vMwareCloudFoundationLicenseCost: item["vMwareCloudFoundationLicenseCost"],
  };
}

/** Storage settings. */
export interface StorageSettings {
  /** Cost per gigabyte per year. */
  costPerGbPerYear: number;
  /** Maintenance cost percentage. */
  maintainanceCostPercentageToAcquisitionCost: number;
}

export function storageSettingsSerializer(item: StorageSettings): any {
  return {
    costPerGbPerYear: item["costPerGbPerYear"],
    maintainanceCostPercentageToAcquisitionCost:
      item["maintainanceCostPercentageToAcquisitionCost"],
  };
}

export function storageSettingsDeserializer(item: any): StorageSettings {
  return {
    costPerGbPerYear: item["costPerGbPerYear"],
    maintainanceCostPercentageToAcquisitionCost:
      item["maintainanceCostPercentageToAcquisitionCost"],
  };
}

/** Network settings. */
export interface NetworkSettings {
  /** Network maintenance cost percentage. */
  maintenanceCostPercentage: number;
  /** Number of physical servers per cabinet */
  physicalServersPerCabinet: number;
  /** Average cost per cabinet */
  averageCostPerCabinet: number;
}

export function networkSettingsSerializer(item: NetworkSettings): any {
  return {
    maintenanceCostPercentage: item["maintenanceCostPercentage"],
    physicalServersPerCabinet: item["physicalServersPerCabinet"],
    averageCostPerCabinet: item["averageCostPerCabinet"],
  };
}

export function networkSettingsDeserializer(item: any): NetworkSettings {
  return {
    maintenanceCostPercentage: item["maintenanceCostPercentage"],
    physicalServersPerCabinet: item["physicalServersPerCabinet"],
    averageCostPerCabinet: item["averageCostPerCabinet"],
  };
}

/** Facility settings. */
export interface FacilitySettings {
  /** The facilities cost. */
  facilitiesCostPerKwh?: number;
  /** Power utilization Efficiency. */
  powerUtilizationEfficiency: number;
}

export function facilitySettingsSerializer(item: FacilitySettings): any {
  return {
    facilitiesCostPerKwh: item["facilitiesCostPerKwh"],
    powerUtilizationEfficiency: item["powerUtilizationEfficiency"],
  };
}

export function facilitySettingsDeserializer(item: any): FacilitySettings {
  return {
    facilitiesCostPerKwh: item["facilitiesCostPerKwh"],
    powerUtilizationEfficiency: item["powerUtilizationEfficiency"],
  };
}

/** Labour settings. */
export interface LaborSettings {
  /** Physical servers per administrator. */
  physicalServersPerAdmin: number;
  /** Virtual machines per administrator. */
  virtualMachinesPerAdmin: number;
  /** Hourly administrator cost. */
  hourlyAdminCost: number;
}

export function laborSettingsSerializer(item: LaborSettings): any {
  return {
    physicalServersPerAdmin: item["physicalServersPerAdmin"],
    virtualMachinesPerAdmin: item["virtualMachinesPerAdmin"],
    hourlyAdminCost: item["hourlyAdminCost"],
  };
}

export function laborSettingsDeserializer(item: any): LaborSettings {
  return {
    physicalServersPerAdmin: item["physicalServersPerAdmin"],
    virtualMachinesPerAdmin: item["virtualMachinesPerAdmin"],
    hourlyAdminCost: item["hourlyAdminCost"],
  };
}

/** Security settings. */
export interface SecuritySettings {
  /** Physical servers per administrator. */
  serverSecurityCostPerServerPerYear: number;
  /** Virtual machines per administrator. */
  sqlServerSecurityCostPerServerPerYear: number;
}

export function securitySettingsSerializer(item: SecuritySettings): any {
  return {
    serverSecurityCostPerServerPerYear:
      item["serverSecurityCostPerServerPerYear"],
    sqlServerSecurityCostPerServerPerYear:
      item["sqlServerSecurityCostPerServerPerYear"],
  };
}

export function securitySettingsDeserializer(item: any): SecuritySettings {
  return {
    serverSecurityCostPerServerPerYear:
      item["serverSecurityCostPerServerPerYear"],
    sqlServerSecurityCostPerServerPerYear:
      item["sqlServerSecurityCostPerServerPerYear"],
  };
}

/** Management settings. */
export interface ManagementSettings {
  /** HyperV Virtualization Management Settings. */
  hypervVirtualizationManagementSettings: HypervVirtualizationManagementSettings;
  /** Third Party Management Settings. */
  thirdPartyManagementSettings: ThirdPartyManagementSettings;
  /** Other Management Costs Settings. */
  otherManagementCostsSettings: OtherManagementCostsSettings;
}

export function managementSettingsSerializer(item: ManagementSettings): any {
  return {
    hypervVirtualizationManagementSettings:
      hypervVirtualizationManagementSettingsSerializer(
        item["hypervVirtualizationManagementSettings"],
      ),
    thirdPartyManagementSettings: thirdPartyManagementSettingsSerializer(
      item["thirdPartyManagementSettings"],
    ),
    otherManagementCostsSettings: otherManagementCostsSettingsSerializer(
      item["otherManagementCostsSettings"],
    ),
  };
}

export function managementSettingsDeserializer(item: any): ManagementSettings {
  return {
    hypervVirtualizationManagementSettings:
      hypervVirtualizationManagementSettingsDeserializer(
        item["hypervVirtualizationManagementSettings"],
      ),
    thirdPartyManagementSettings: thirdPartyManagementSettingsDeserializer(
      item["thirdPartyManagementSettings"],
    ),
    otherManagementCostsSettings: otherManagementCostsSettingsDeserializer(
      item["otherManagementCostsSettings"],
    ),
  };
}

/** HyperV Virtualization Management Settings. */
export interface HypervVirtualizationManagementSettings {
  /** Number of physical cores per licence. */
  numberOfPhysicalCoresPerLicense: number;
  /** Software Assurance Cost. */
  softwareAssuranceCost: number;
  /** Licence and support list. */
  licenseAndSupportList: HypervLicense[];
}

export function hypervVirtualizationManagementSettingsSerializer(
  item: HypervVirtualizationManagementSettings,
): any {
  return {
    numberOfPhysicalCoresPerLicense: item["numberOfPhysicalCoresPerLicense"],
    softwareAssuranceCost: item["softwareAssuranceCost"],
    licenseAndSupportList: hypervLicenseArraySerializer(
      item["licenseAndSupportList"],
    ),
  };
}

export function hypervVirtualizationManagementSettingsDeserializer(
  item: any,
): HypervVirtualizationManagementSettings {
  return {
    numberOfPhysicalCoresPerLicense: item["numberOfPhysicalCoresPerLicense"],
    softwareAssuranceCost: item["softwareAssuranceCost"],
    licenseAndSupportList: hypervLicenseArrayDeserializer(
      item["licenseAndSupportList"],
    ),
  };
}

export function hypervLicenseArraySerializer(
  result: Array<HypervLicense>,
): any[] {
  return result.map((item) => {
    return hypervLicenseSerializer(item);
  });
}

export function hypervLicenseArrayDeserializer(
  result: Array<HypervLicense>,
): any[] {
  return result.map((item) => {
    return hypervLicenseDeserializer(item);
  });
}

/** Representation of a licence. */
export interface HypervLicense {
  /** Cost of a licence. */
  licenseCost: number;
  /** HyperV licence type. */
  licenseType: HyperVLicenseType;
}

export function hypervLicenseSerializer(item: HypervLicense): any {
  return { licenseCost: item["licenseCost"], licenseType: item["licenseType"] };
}

export function hypervLicenseDeserializer(item: any): HypervLicense {
  return {
    licenseCost: item["licenseCost"],
    licenseType: item["licenseType"],
  };
}

/** Business case supported HyperV License types. */
export enum KnownHyperVLicenseType {
  /** Unknown HyperV License. */
  Unknown = "Unknown",
  /** Datacentre HyperV License. */
  Datacentre = "Datacentre",
  /** Standard HyperV License. */
  Standard = "Standard",
}

/**
 * Business case supported HyperV License types. \
 * {@link KnownHyperVLicenseType} can be used interchangeably with HyperVLicenseType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown HyperV License. \
 * **Datacentre**: Datacentre HyperV License. \
 * **Standard**: Standard HyperV License.
 */
export type HyperVLicenseType = string;

/** Third Party Management settings. */
export interface ThirdPartyManagementSettings {
  /** License Cost. */
  licenseCost: number;
  /** Support Cost. */
  supportCost: number;
}

export function thirdPartyManagementSettingsSerializer(
  item: ThirdPartyManagementSettings,
): any {
  return { licenseCost: item["licenseCost"], supportCost: item["supportCost"] };
}

export function thirdPartyManagementSettingsDeserializer(
  item: any,
): ThirdPartyManagementSettings {
  return {
    licenseCost: item["licenseCost"],
    supportCost: item["supportCost"],
  };
}

/** Other Management Costs Settings. */
export interface OtherManagementCostsSettings {
  /** Monitoring Cost Per Server Per Year. */
  monitoringCostPerServerPerYear: number;
  /** Patching Cost Per Server Per Year. */
  patchingCostPerServerPerYear: number;
  /** Data Protection Cost Per Server Per Year. */
  dataProtectionCostPerServerPerYear: number;
}

export function otherManagementCostsSettingsSerializer(
  item: OtherManagementCostsSettings,
): any {
  return {
    monitoringCostPerServerPerYear: item["monitoringCostPerServerPerYear"],
    patchingCostPerServerPerYear: item["patchingCostPerServerPerYear"],
    dataProtectionCostPerServerPerYear:
      item["dataProtectionCostPerServerPerYear"],
  };
}

export function otherManagementCostsSettingsDeserializer(
  item: any,
): OtherManagementCostsSettings {
  return {
    monitoringCostPerServerPerYear: item["monitoringCostPerServerPerYear"],
    patchingCostPerServerPerYear: item["patchingCostPerServerPerYear"],
    dataProtectionCostPerServerPerYear:
      item["dataProtectionCostPerServerPerYear"],
  };
}

/** Azure arc settings for a business case. */
export interface AzureArcSettings {
  /** AzureArc state indicates whether to include azure arc related costs in on-premises or not. */
  azureArcState: AzureArcState;
  /** Gets Azure arc labour cost percentage. */
  laborCostPercentage?: number;
  /** Management settings. */
  managementSettings?: AzureArcManagementSettings;
}

export function azureArcSettingsSerializer(item: AzureArcSettings): any {
  return {
    azureArcState: item["azureArcState"],
    laborCostPercentage: item["laborCostPercentage"],
    managementSettings: !item["managementSettings"]
      ? item["managementSettings"]
      : azureArcManagementSettingsSerializer(item["managementSettings"]),
  };
}

export function azureArcSettingsDeserializer(item: any): AzureArcSettings {
  return {
    azureArcState: item["azureArcState"],
    laborCostPercentage: item["laborCostPercentage"],
    managementSettings: !item["managementSettings"]
      ? item["managementSettings"]
      : azureArcManagementSettingsDeserializer(item["managementSettings"]),
  };
}

/** AzureArc state values. */
export enum KnownAzureArcState {
  /** AzureArc state disabled. */
  Disabled = "Disabled",
  /** AzureArc state enabled. */
  Enabled = "Enabled",
  /** AzureArc state unknown. */
  Unknown = "Unknown",
}

/**
 * AzureArc state values. \
 * {@link KnownAzureArcState} can be used interchangeably with AzureArcState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Disabled**: AzureArc state disabled. \
 * **Enabled**: AzureArc state enabled. \
 * **Unknown**: AzureArc state unknown.
 */
export type AzureArcState = string;

/** Azure Arc Management settings. */
export interface AzureArcManagementSettings {
  /** Gets the azure arc monitoring settings. */
  monitoringSettings: AzureArcMonitoringSettings;
}

export function azureArcManagementSettingsSerializer(
  item: AzureArcManagementSettings,
): any {
  return {
    monitoringSettings: azureArcMonitoringSettingsSerializer(
      item["monitoringSettings"],
    ),
  };
}

export function azureArcManagementSettingsDeserializer(
  item: any,
): AzureArcManagementSettings {
  return {
    monitoringSettings: azureArcMonitoringSettingsDeserializer(
      item["monitoringSettings"],
    ),
  };
}

/** Azure Arc Monitoring settings. */
export interface AzureArcMonitoringSettings {
  /** Logs volume settings. */
  logsVolumeInGB: number;
  /** Number of alert rules settings. */
  alertRulesCount: number;
}

export function azureArcMonitoringSettingsSerializer(
  item: AzureArcMonitoringSettings,
): any {
  return {
    logsVolumeInGB: item["logsVolumeInGB"],
    alertRulesCount: item["alertRulesCount"],
  };
}

export function azureArcMonitoringSettingsDeserializer(
  item: any,
): AzureArcMonitoringSettings {
  return {
    logsVolumeInGB: item["logsVolumeInGB"],
    alertRulesCount: item["alertRulesCount"],
  };
}

/** Business case supported state types. */
export enum KnownBusinessCaseState {
  /** Unknown State. */
  Unknown = "Unknown",
  /** InProgress  State. */
  InProgress = "InProgress",
  /** Completed State. */
  Completed = "Completed",
  /** OutDated State. */
  OutDated = "OutDated",
  /** Invalid State. */
  Invalid = "Invalid",
  /** OutOfSync State. */
  OutOfSync = "OutOfSync",
  /** Failed State. */
  Failed = "Failed",
}

/**
 * Business case supported state types. \
 * {@link KnownBusinessCaseState} can be used interchangeably with BusinessCaseState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown State. \
 * **InProgress**: InProgress  State. \
 * **Completed**: Completed State. \
 * **OutDated**: OutDated State. \
 * **Invalid**: Invalid State. \
 * **OutOfSync**: OutOfSync State. \
 * **Failed**: Failed State.
 */
export type BusinessCaseState = string;

export function reportDetailsArrayDeserializer(
  result: Array<ReportDetails>,
): any[] {
  return result.map((item) => {
    return reportDetailsDeserializer(item);
  });
}

/** Business case report details. */
export interface ReportDetails {
  /** Report type. */
  readonly reportType?: ReportType;
  /** Report status. */
  readonly reportStatus?: ReportStatus;
}

export function reportDetailsDeserializer(item: any): ReportDetails {
  return {
    reportType: item["reportType"],
    reportStatus: item["reportStatus"],
  };
}

/** Business case supported report types. */
export enum KnownReportType {
  /** Unknown Report Type. */
  Unknown = "Unknown",
  /** Excel Report Type. */
  Excel = "Excel",
}

/**
 * Business case supported report types. \
 * {@link KnownReportType} can be used interchangeably with ReportType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown Report Type. \
 * **Excel**: Excel Report Type.
 */
export type ReportType = string;

/** Business case supported report status types. */
export enum KnownReportStatus {
  /** Unknown Report Status. */
  Unknown = "Unknown",
  /** None Report Status. */
  None = "None",
  /** InProgress Report Status. */
  InProgress = "InProgress",
  /** Failed Report Status. */
  Failed = "Failed",
  /** Completed Report Status. */
  Completed = "Completed",
}

/**
 * Business case supported report status types. \
 * {@link KnownReportStatus} can be used interchangeably with ReportStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown Report Status. \
 * **None**: None Report Status. \
 * **InProgress**: InProgress Report Status. \
 * **Failed**: Failed Report Status. \
 * **Completed**: Completed Report Status.
 */
export type ReportStatus = string;

/** Business case scope. */
export interface BusinessCaseScope {
  /** Scope type. */
  readonly scopeType: ScopeType;
  /** ARG query. */
  readonly azureResourceGraphQuery?: string;
}

export function businessCaseScopeDeserializer(item: any): BusinessCaseScope {
  return {
    scopeType: item["scopeType"],
    azureResourceGraphQuery: item["azureResourceGraphQuery"],
  };
}

/** Scope type. */
export enum KnownScopeType {
  /** Enum for Datacenter. */
  Datacenter = "Datacenter",
  /** Enum for ARG. */
  AzureResourceGraphQuery = "AzureResourceGraphQuery",
}

/**
 * Scope type. \
 * {@link KnownScopeType} can be used interchangeably with ScopeType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Datacenter**: Enum for Datacenter. \
 * **AzureResourceGraphQuery**: Enum for ARG.
 */
export type ScopeType = string;

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

export function proxyResourceSerializer(item: ProxyResource): any {
  return item;
}

export function proxyResourceDeserializer(item: any): ProxyResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
  };
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /** Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
  readonly id?: string;
  /** The name of the resource */
  readonly name?: string;
  /** The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts" */
  readonly type?: string;
  /** Azure Resource Manager metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemData;
}

export function resourceSerializer(item: Resource): any {
  return item;
}

export function resourceDeserializer(item: any): Resource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
  };
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

export function systemDataDeserializer(item: any): SystemData {
  return {
    createdBy: item["createdBy"],
    createdByType: item["createdByType"],
    createdAt: !item["createdAt"]
      ? item["createdAt"]
      : new Date(item["createdAt"]),
    lastModifiedBy: item["lastModifiedBy"],
    lastModifiedByType: item["lastModifiedByType"],
    lastModifiedAt: !item["lastModifiedAt"]
      ? item["lastModifiedAt"]
      : new Date(item["lastModifiedAt"]),
  };
}

/** The kind of entity that created the resource. */
export enum KnownCreatedByType {
  /** The entity was created by a user. */
  User = "User",
  /** The entity was created by an application. */
  Application = "Application",
  /** The entity was created by a managed identity. */
  ManagedIdentity = "ManagedIdentity",
  /** The entity was created by a key. */
  Key = "Key",
}

/**
 * The kind of entity that created the resource. \
 * {@link KnowncreatedByType} can be used interchangeably with createdByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User**: The entity was created by a user. \
 * **Application**: The entity was created by an application. \
 * **ManagedIdentity**: The entity was created by a managed identity. \
 * **Key**: The entity was created by a key.
 */
export type CreatedByType = string;

/** The response of a BusinessCase list operation. */
export interface _BusinessCaseListResult {
  /** The BusinessCase items on this page */
  value: BusinessCase[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _businessCaseListResultDeserializer(
  item: any,
): _BusinessCaseListResult {
  return {
    value: businessCaseArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function businessCaseArraySerializer(
  result: Array<BusinessCase>,
): any[] {
  return result.map((item) => {
    return businessCaseSerializer(item);
  });
}

export function businessCaseArrayDeserializer(
  result: Array<BusinessCase>,
): any[] {
  return result.map((item) => {
    return businessCaseDeserializer(item);
  });
}

/** model interface _CompareSummaryRequest */
export interface _CompareSummaryRequest {}

export function _compareSummaryRequestSerializer(
  item: _CompareSummaryRequest,
): any {
  return item;
}

/** Compare summary class. */
export interface CompareSummary {
  /** The azure PaaS cost. */
  readonly azurePaasCostDetails?: CostDetails;
  /** The azure IaaS cost. */
  readonly azureIaasCostDetails?: CostDetails;
  /** The AVS cost. */
  readonly azureAvsCostDetails?: CostDetails;
  /** The on premises PaaS cost. */
  readonly onPremisesPaasCostDetails?: CostDetails;
  /** The on premises IaaS cost. */
  readonly onPremisesIaasCostDetails?: CostDetails;
  /** The on premises AVS cost. */
  readonly onPremisesAvsCostDetails?: CostDetails;
  /** The on premises PaaS decommissioned cost. */
  readonly onPremisesPaasDecommissionedCostDetails?: CostDetails;
  /** The on premises IaaS decommissioned cost. */
  readonly onPremisesIaasDecommissionedCostDetails?: CostDetails;
  /** The on premises AVS decommissioned cost. */
  readonly onPremisesAvsDecommissionedCostDetails?: CostDetails;
  /** Future state cost which includes Azure cost and Arc enabled on-premises cost based on the final migration percentage. */
  readonly futureCostDetails?: CostDetails;
  /** The Azure arc enabled on-premises cost. */
  readonly azureArcEnabledOnPremisesCostDetails?: CostDetails;
  /** The final azure arc enabled on-premises cost based on the final migration percentage. */
  readonly futureAzureArcEnabledOnPremisesCostDetails?: CostDetails;
  /** The Azure PaaS Carbon Emissions details. */
  readonly azurePaasCarbonEmissionsDetails?: CarbonEmissionsDetails;
  /** The Azure IaaS Carbon Emissions details. */
  readonly azureIaasCarbonEmissionsDetails?: CarbonEmissionsDetails;
  /** The Azure AvS Carbon Emissions details. */
  readonly azureAvsCarbonEmissionsDetails?: CarbonEmissionsDetails;
  /** The on premises PaaS Carbon Emissions details. */
  readonly onPremisesPaasCarbonEmissionsDetails?: CarbonEmissionsDetails;
  /** The on premises IaaS Carbon Emissions details. */
  readonly onPremisesIaasCarbonEmissionsDetails?: CarbonEmissionsDetails;
  /** The on premises Avs Carbon Emissions details. */
  readonly onPremisesAvsCarbonEmissionsDetails?: CarbonEmissionsDetails;
  /** The on premises PaaS decommissioned Carbon Emissions details. */
  readonly onPremisesPaasDecommissionedCarbonEmissionsDetails?: CarbonEmissionsDetails;
  /** The on premises IaaS decommissioned Carbon Emissions details. */
  readonly onPremisesIaasDecommissionedCarbonEmissionsDetails?: CarbonEmissionsDetails;
  /** The on premises Avs decommissioned Carbon Emissions details. */
  readonly onPremisesAvsDecommissionedCarbonEmissionsDetails?: CarbonEmissionsDetails;
}

export function compareSummaryDeserializer(item: any): CompareSummary {
  return {
    azurePaasCostDetails: !item["azurePaasCostDetails"]
      ? item["azurePaasCostDetails"]
      : costDetailsDeserializer(item["azurePaasCostDetails"]),
    azureIaasCostDetails: !item["azureIaasCostDetails"]
      ? item["azureIaasCostDetails"]
      : costDetailsDeserializer(item["azureIaasCostDetails"]),
    azureAvsCostDetails: !item["azureAvsCostDetails"]
      ? item["azureAvsCostDetails"]
      : costDetailsDeserializer(item["azureAvsCostDetails"]),
    onPremisesPaasCostDetails: !item["onPremisesPaasCostDetails"]
      ? item["onPremisesPaasCostDetails"]
      : costDetailsDeserializer(item["onPremisesPaasCostDetails"]),
    onPremisesIaasCostDetails: !item["onPremisesIaasCostDetails"]
      ? item["onPremisesIaasCostDetails"]
      : costDetailsDeserializer(item["onPremisesIaasCostDetails"]),
    onPremisesAvsCostDetails: !item["onPremisesAvsCostDetails"]
      ? item["onPremisesAvsCostDetails"]
      : costDetailsDeserializer(item["onPremisesAvsCostDetails"]),
    onPremisesPaasDecommissionedCostDetails: !item[
      "onPremisesPaasDecommissionedCostDetails"
    ]
      ? item["onPremisesPaasDecommissionedCostDetails"]
      : costDetailsDeserializer(
          item["onPremisesPaasDecommissionedCostDetails"],
        ),
    onPremisesIaasDecommissionedCostDetails: !item[
      "onPremisesIaasDecommissionedCostDetails"
    ]
      ? item["onPremisesIaasDecommissionedCostDetails"]
      : costDetailsDeserializer(
          item["onPremisesIaasDecommissionedCostDetails"],
        ),
    onPremisesAvsDecommissionedCostDetails: !item[
      "onPremisesAvsDecommissionedCostDetails"
    ]
      ? item["onPremisesAvsDecommissionedCostDetails"]
      : costDetailsDeserializer(item["onPremisesAvsDecommissionedCostDetails"]),
    futureCostDetails: !item["futureCostDetails"]
      ? item["futureCostDetails"]
      : costDetailsDeserializer(item["futureCostDetails"]),
    azureArcEnabledOnPremisesCostDetails: !item[
      "azureArcEnabledOnPremisesCostDetails"
    ]
      ? item["azureArcEnabledOnPremisesCostDetails"]
      : costDetailsDeserializer(item["azureArcEnabledOnPremisesCostDetails"]),
    futureAzureArcEnabledOnPremisesCostDetails: !item[
      "futureAzureArcEnabledOnPremisesCostDetails"
    ]
      ? item["futureAzureArcEnabledOnPremisesCostDetails"]
      : costDetailsDeserializer(
          item["futureAzureArcEnabledOnPremisesCostDetails"],
        ),
    azurePaasCarbonEmissionsDetails: !item["azurePaasCarbonEmissionsDetails"]
      ? item["azurePaasCarbonEmissionsDetails"]
      : carbonEmissionsDetailsDeserializer(
          item["azurePaasCarbonEmissionsDetails"],
        ),
    azureIaasCarbonEmissionsDetails: !item["azureIaasCarbonEmissionsDetails"]
      ? item["azureIaasCarbonEmissionsDetails"]
      : carbonEmissionsDetailsDeserializer(
          item["azureIaasCarbonEmissionsDetails"],
        ),
    azureAvsCarbonEmissionsDetails: !item["azureAvsCarbonEmissionsDetails"]
      ? item["azureAvsCarbonEmissionsDetails"]
      : carbonEmissionsDetailsDeserializer(
          item["azureAvsCarbonEmissionsDetails"],
        ),
    onPremisesPaasCarbonEmissionsDetails: !item[
      "onPremisesPaasCarbonEmissionsDetails"
    ]
      ? item["onPremisesPaasCarbonEmissionsDetails"]
      : carbonEmissionsDetailsDeserializer(
          item["onPremisesPaasCarbonEmissionsDetails"],
        ),
    onPremisesIaasCarbonEmissionsDetails: !item[
      "onPremisesIaasCarbonEmissionsDetails"
    ]
      ? item["onPremisesIaasCarbonEmissionsDetails"]
      : carbonEmissionsDetailsDeserializer(
          item["onPremisesIaasCarbonEmissionsDetails"],
        ),
    onPremisesAvsCarbonEmissionsDetails: !item[
      "onPremisesAvsCarbonEmissionsDetails"
    ]
      ? item["onPremisesAvsCarbonEmissionsDetails"]
      : carbonEmissionsDetailsDeserializer(
          item["onPremisesAvsCarbonEmissionsDetails"],
        ),
    onPremisesPaasDecommissionedCarbonEmissionsDetails: !item[
      "onPremisesPaasDecommissionedCarbonEmissionsDetails"
    ]
      ? item["onPremisesPaasDecommissionedCarbonEmissionsDetails"]
      : carbonEmissionsDetailsDeserializer(
          item["onPremisesPaasDecommissionedCarbonEmissionsDetails"],
        ),
    onPremisesIaasDecommissionedCarbonEmissionsDetails: !item[
      "onPremisesIaasDecommissionedCarbonEmissionsDetails"
    ]
      ? item["onPremisesIaasDecommissionedCarbonEmissionsDetails"]
      : carbonEmissionsDetailsDeserializer(
          item["onPremisesIaasDecommissionedCarbonEmissionsDetails"],
        ),
    onPremisesAvsDecommissionedCarbonEmissionsDetails: !item[
      "onPremisesAvsDecommissionedCarbonEmissionsDetails"
    ]
      ? item["onPremisesAvsDecommissionedCarbonEmissionsDetails"]
      : carbonEmissionsDetailsDeserializer(
          item["onPremisesAvsDecommissionedCarbonEmissionsDetails"],
        ),
  };
}

/** The on premises PaaS cost. */
export interface CostDetails {
  /** The storage cost. */
  readonly storageCost?: number;
  /** The compute cost. */
  readonly computeCost?: number;
  /** The IT labor cost. */
  readonly itLaborCost?: number;
  /** The network cost. */
  readonly networkCost?: number;
  /** The windows AhubSavings. */
  readonly ahubSavings?: number;
  /** The linux AhubSavings. */
  readonly linuxAhubSavings?: number;
  /** Security Cost. */
  readonly securityCost?: number;
  /** Management Cost Details. */
  readonly managementCostDetails?: ManagementCostDetails;
  /** esu savings. */
  readonly esuSavings?: number;
  /** The facilities cost. */
  readonly facilitiesCost?: number;
}

export function costDetailsDeserializer(item: any): CostDetails {
  return {
    storageCost: item["storageCost"],
    computeCost: item["computeCost"],
    itLaborCost: item["itLaborCost"],
    networkCost: item["networkCost"],
    ahubSavings: item["ahubSavings"],
    linuxAhubSavings: item["linuxAhubSavings"],
    securityCost: item["securityCost"],
    managementCostDetails: !item["managementCostDetails"]
      ? item["managementCostDetails"]
      : managementCostDetailsDeserializer(item["managementCostDetails"]),
    esuSavings: item["esuSavings"],
    facilitiesCost: item["facilitiesCost"],
  };
}

/** Management Cost Details. */
export interface ManagementCostDetails {
  /** Management Cost. */
  readonly managementCost?: number;
  /** Management Cost Components. */
  readonly managementCostComponents?: ManagementCostComponent[];
}

export function managementCostDetailsDeserializer(
  item: any,
): ManagementCostDetails {
  return {
    managementCost: item["managementCost"],
    managementCostComponents: !item["managementCostComponents"]
      ? item["managementCostComponents"]
      : managementCostComponentArrayDeserializer(
          item["managementCostComponents"],
        ),
  };
}

export function managementCostComponentArrayDeserializer(
  result: Array<ManagementCostComponent>,
): any[] {
  return result.map((item) => {
    return managementCostComponentDeserializer(item);
  });
}

/** Management Cost Component. */
export interface ManagementCostComponent {
  /** Name of Management Cost Component. */
  name: ManagementCostComponentName;
  /** Cost of Management Component. */
  value?: number;
}

export function managementCostComponentDeserializer(
  item: any,
): ManagementCostComponent {
  return {
    name: item["name"],
    value: item["value"],
  };
}

/** Management Cost Component Names. */
export enum KnownManagementCostComponentName {
  /** Unknown Management Cost Component. */
  Unknown = "Unknown",
  /** System Center License Cost. */
  SystemCenterLicenseCost = "SystemCenterLicenseCost",
  /** VSphere eManagement Cost. */
  VSphereManagementCost = "VSphereManagementCost",
  /** Third Party Management Cost. */
  ThirdPartyManagementCost = "ThirdPartyManagementCost",
  /** Other Monitoring Cost. */
  OtherMonitoringCost = "OtherMonitoringCost",
  /** Other Data Protection Cost. */
  OtherDataProtectionCost = "OtherDataProtectionCost",
  /** Other Patching Cost. */
  OtherPatchingCost = "OtherPatchingCost",
  /** Azure Monitoring Cost. */
  AzureMonitoringCost = "AzureMonitoringCost",
  /** Azure Patching Cost. */
  AzurePatchingCost = "AzurePatchingCost",
  /** Azure Data Protection Cost. */
  AzureDataProtectionCost = "AzureDataProtectionCost",
  /** Azure Arc Monitoring Cost. */
  AzureArcMonitoringCost = "AzureArcMonitoringCost",
  /** Azure Arc Patching Cost. */
  AzureArcPatchingCost = "AzureArcPatchingCost",
}

/**
 * Management Cost Component Names. \
 * {@link KnownManagementCostComponentName} can be used interchangeably with ManagementCostComponentName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown Management Cost Component. \
 * **SystemCenterLicenseCost**: System Center License Cost. \
 * **VSphereManagementCost**: VSphere eManagement Cost. \
 * **ThirdPartyManagementCost**: Third Party Management Cost. \
 * **OtherMonitoringCost**: Other Monitoring Cost. \
 * **OtherDataProtectionCost**: Other Data Protection Cost. \
 * **OtherPatchingCost**: Other Patching Cost. \
 * **AzureMonitoringCost**: Azure Monitoring Cost. \
 * **AzurePatchingCost**: Azure Patching Cost. \
 * **AzureDataProtectionCost**: Azure Data Protection Cost. \
 * **AzureArcMonitoringCost**: Azure Arc Monitoring Cost. \
 * **AzureArcPatchingCost**: Azure Arc Patching Cost.
 */
export type ManagementCostComponentName = string;

/** Details of carbon emissions. */
export interface CarbonEmissionsDetails {
  /** Scope 1 emissions in metric tons of CO2 equivalent (MTCO2e). */
  readonly scope1: CarbonEmissionsScopeDetails;
  /** Scope 2 emissions in metric tons of CO2 equivalent (MTCO2e). */
  readonly scope2: CarbonEmissionsScopeDetails;
  /** Scope 3 emissions in metric tons of CO2 equivalent (MTCO2e). */
  readonly scope3: CarbonEmissionsScopeDetails;
}

export function carbonEmissionsDetailsDeserializer(
  item: any,
): CarbonEmissionsDetails {
  return {
    scope1: carbonEmissionsScopeDetailsDeserializer(item["scope1"]),
    scope2: carbonEmissionsScopeDetailsDeserializer(item["scope2"]),
    scope3: carbonEmissionsScopeDetailsDeserializer(item["scope3"]),
  };
}

/** Details of carbon emissions scope. */
export interface CarbonEmissionsScopeDetails {
  /** The compute emissions in metric tons of CO2 equivalent (MTCO2e). */
  readonly compute: number;
  /** The storage emissions in metric tons of CO2 equivalent (MTCO2e). */
  readonly storage: number;
}

export function carbonEmissionsScopeDetailsDeserializer(
  item: any,
): CarbonEmissionsScopeDetails {
  return {
    compute: item["compute"],
    storage: item["storage"],
  };
}

/** model interface _GetReportDownloadUrlRequest */
export interface _GetReportDownloadUrlRequest {}

export function _getReportDownloadUrlRequestSerializer(
  item: _GetReportDownloadUrlRequest,
): any {
  return item;
}

/** Download URL for assessment report. */
export interface ReportDownloadUrl {
  /** Hyperlink to download report. */
  readonly businessCaseReportUrl?: string;
  /** Expiry date of download url. */
  readonly expirationTime?: Date;
}

export function reportDownloadUrlDeserializer(item: any): ReportDownloadUrl {
  return {
    businessCaseReportUrl: item["businessCaseReportUrl"],
    expirationTime: !item["expirationTime"]
      ? item["expirationTime"]
      : new Date(item["expirationTime"]),
  };
}

/** Iaas summary REST resource. */
export interface IaasSummary extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: IaasSummaryProperties;
}

export function iaasSummaryDeserializer(item: any): IaasSummary {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : iaasSummaryPropertiesDeserializer(item["properties"]),
  };
}

/** Iaas summary properties class. */
export interface IaasSummaryProperties {
  /** The Azure IaaS summary. */
  readonly azureIaasSummary?: AzureIaasSummary;
  /** The on premises IaaS summary. */
  readonly onPremisesIaasSummary?: OnPremisesIaasSummary;
}

export function iaasSummaryPropertiesDeserializer(
  item: any,
): IaasSummaryProperties {
  return {
    azureIaasSummary: !item["azureIaasSummary"]
      ? item["azureIaasSummary"]
      : azureIaasSummaryDeserializer(item["azureIaasSummary"]),
    onPremisesIaasSummary: !item["onPremisesIaasSummary"]
      ? item["onPremisesIaasSummary"]
      : onPremisesIaasSummaryDeserializer(item["onPremisesIaasSummary"]),
  };
}

/** The Azure IaaS summary. */
export interface AzureIaasSummary {
  /** Shows the year-on-year cost overall. */
  readonly yearOnYearEstimates?: YearOnYearEstimates;
  /** Azure Iaas virtual machine summary. */
  readonly azureIaasVmSummary?: AzureIaasVmSummary;
  /** Azure Iaas sql server summary. */
  readonly azureIaasSqlSummary?: AzureIaasSqlSummary;
  /** The on premises PaaS cost. */
  readonly azureIaasCostDetails?: CostDetails;
  /** The azure Iaas sustainability details. */
  readonly azureIaasSustainabilityDetails?: CarbonEmissionsDetails;
}

export function azureIaasSummaryDeserializer(item: any): AzureIaasSummary {
  return {
    yearOnYearEstimates: !item["yearOnYearEstimates"]
      ? item["yearOnYearEstimates"]
      : yearOnYearEstimatesDeserializer(item["yearOnYearEstimates"]),
    azureIaasVmSummary: !item["azureIaasVmSummary"]
      ? item["azureIaasVmSummary"]
      : azureIaasVmSummaryDeserializer(item["azureIaasVmSummary"]),
    azureIaasSqlSummary: !item["azureIaasSqlSummary"]
      ? item["azureIaasSqlSummary"]
      : azureIaasSqlSummaryDeserializer(item["azureIaasSqlSummary"]),
    azureIaasCostDetails: !item["azureIaasCostDetails"]
      ? item["azureIaasCostDetails"]
      : costDetailsDeserializer(item["azureIaasCostDetails"]),
    azureIaasSustainabilityDetails: !item["azureIaasSustainabilityDetails"]
      ? item["azureIaasSustainabilityDetails"]
      : carbonEmissionsDetailsDeserializer(
          item["azureIaasSustainabilityDetails"],
        ),
  };
}

/** Shows the year-on-year cost overall. */
export interface YearOnYearEstimates {
  /** Year-on-Year on-premises cost. */
  readonly onPremisesCost?: YearOnYearCost[];
  /** Year-on-Year Azure cost. */
  readonly azureCost?: YearOnYearCost[];
  /** Year-on-Year savings. */
  readonly savings?: YearOnYearCost[];
  /** Year-on-Year on-premises capex cost. */
  readonly onPremisesCapexCost?: YearOnYearCost[];
  /** Year-on-Year on-premises opex cost. */
  readonly onPremisesOpexCost?: YearOnYearCost[];
  /** Year-on-Year azure capex cost. */
  readonly azureCapexCost?: YearOnYearCost[];
  /** Year-on-Year azure opex cost. */
  readonly azureOpexCost?: YearOnYearCost[];
  /** Payback period. */
  readonly paybackPeriod?: number;
  /** Year-on-Year azure arc enabled on-premises cost. */
  readonly azureArcEnabledOnPremisesCost?: YearOnYearCost[];
  /** Year-on-Year azure with arc enabled on-premises cost. */
  readonly futureCost?: YearOnYearCost[];
  /** Year-on-Year azure arc enabled on-premises esu cost of the remaining infra on-premises. */
  readonly futureAzureArcEnabledOnPremisesEsuCost?: YearOnYearCost[];
  /** Year-on-Year on-premises esu cost of the remaining infra on-premises. */
  readonly futureOnPremisesEsuCost?: YearOnYearCost[];
  /** Year-on-Year on-premises emissions estimates. */
  readonly onPremisesEmissionsEstimates?: YearOnYearEmissions[];
  /** Year-on-Year Azure emissions estimates. */
  readonly azureEmissionsEstimates?: YearOnYearEmissions[];
}

export function yearOnYearEstimatesDeserializer(
  item: any,
): YearOnYearEstimates {
  return {
    onPremisesCost: !item["onPremisesCost"]
      ? item["onPremisesCost"]
      : yearOnYearCostArrayDeserializer(item["onPremisesCost"]),
    azureCost: !item["azureCost"]
      ? item["azureCost"]
      : yearOnYearCostArrayDeserializer(item["azureCost"]),
    savings: !item["savings"]
      ? item["savings"]
      : yearOnYearCostArrayDeserializer(item["savings"]),
    onPremisesCapexCost: !item["onPremisesCapexCost"]
      ? item["onPremisesCapexCost"]
      : yearOnYearCostArrayDeserializer(item["onPremisesCapexCost"]),
    onPremisesOpexCost: !item["onPremisesOpexCost"]
      ? item["onPremisesOpexCost"]
      : yearOnYearCostArrayDeserializer(item["onPremisesOpexCost"]),
    azureCapexCost: !item["azureCapexCost"]
      ? item["azureCapexCost"]
      : yearOnYearCostArrayDeserializer(item["azureCapexCost"]),
    azureOpexCost: !item["azureOpexCost"]
      ? item["azureOpexCost"]
      : yearOnYearCostArrayDeserializer(item["azureOpexCost"]),
    paybackPeriod: item["paybackPeriod"],
    azureArcEnabledOnPremisesCost: !item["azureArcEnabledOnPremisesCost"]
      ? item["azureArcEnabledOnPremisesCost"]
      : yearOnYearCostArrayDeserializer(item["azureArcEnabledOnPremisesCost"]),
    futureCost: !item["futureCost"]
      ? item["futureCost"]
      : yearOnYearCostArrayDeserializer(item["futureCost"]),
    futureAzureArcEnabledOnPremisesEsuCost: !item[
      "futureAzureArcEnabledOnPremisesEsuCost"
    ]
      ? item["futureAzureArcEnabledOnPremisesEsuCost"]
      : yearOnYearCostArrayDeserializer(
          item["futureAzureArcEnabledOnPremisesEsuCost"],
        ),
    futureOnPremisesEsuCost: !item["futureOnPremisesEsuCost"]
      ? item["futureOnPremisesEsuCost"]
      : yearOnYearCostArrayDeserializer(item["futureOnPremisesEsuCost"]),
    onPremisesEmissionsEstimates: !item["onPremisesEmissionsEstimates"]
      ? item["onPremisesEmissionsEstimates"]
      : yearOnYearEmissionsArrayDeserializer(
          item["onPremisesEmissionsEstimates"],
        ),
    azureEmissionsEstimates: !item["azureEmissionsEstimates"]
      ? item["azureEmissionsEstimates"]
      : yearOnYearEmissionsArrayDeserializer(item["azureEmissionsEstimates"]),
  };
}

export function yearOnYearCostArrayDeserializer(
  result: Array<YearOnYearCost>,
): any[] {
  return result.map((item) => {
    return yearOnYearCostDeserializer(item);
  });
}

/** Year on Year cost. */
export interface YearOnYearCost {
  /** Year value. */
  year: Year;
  /** Cost for the specified year. */
  cost?: number;
}

export function yearOnYearCostDeserializer(item: any): YearOnYearCost {
  return {
    year: item["year"],
    cost: item["cost"],
  };
}

/** Year values. */
export enum KnownYear {
  /** Year 0. */
  Year0 = "Year0",
  /** Year 1. */
  Year1 = "Year1",
  /** Year 2. */
  Year2 = "Year2",
  /** Year 3. */
  Year3 = "Year3",
}

/**
 * Year values. \
 * {@link KnownYear} can be used interchangeably with Year,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Year0**: Year 0. \
 * **Year1**: Year 1. \
 * **Year2**: Year 2. \
 * **Year3**: Year 3.
 */
export type Year = string;

export function yearOnYearEmissionsArrayDeserializer(
  result: Array<YearOnYearEmissions>,
): any[] {
  return result.map((item) => {
    return yearOnYearEmissionsDeserializer(item);
  });
}

/** Year on Year Emissions. */
export interface YearOnYearEmissions {
  /** Year value. */
  year: Year;
  /** Emissions for the specified year. */
  emissions?: number;
}

export function yearOnYearEmissionsDeserializer(
  item: any,
): YearOnYearEmissions {
  return {
    year: item["year"],
    emissions: item["emissions"],
  };
}

/** Azure Iaas virtual machine summary. */
export interface AzureIaasVmSummary {
  /** Servers suitable for migration. */
  readonly serversSuitableForMigration?: number;
  /** The total number of servers. */
  readonly totalNumberOfServers?: number;
  /** The total number of IaaS VM cores. */
  readonly cores?: number;
  /** The total memory in GB. */
  readonly memoryGB?: number;
  /** The on premises PaaS cost. */
  readonly azureVmCostDetails?: CostDetails;
  /** Estimated cost. */
  readonly estimatedCost?: number;
  /** OS licensing cost. */
  readonly osLicensingCost?: number;
  /** Estimated cost by offer. */
  readonly estimatedCostByRecommendedOffer?: EstimatedCostByOffer[];
  /** The recommended VM family summary. */
  readonly recommendedVmFamilySummary?: RecommendedVmFamilySummary[];
  /** The cost by storage type. */
  readonly costByStorageType?: CostByStorageType[];
}

export function azureIaasVmSummaryDeserializer(item: any): AzureIaasVmSummary {
  return {
    serversSuitableForMigration: item["serversSuitableForMigration"],
    totalNumberOfServers: item["totalNumberOfServers"],
    cores: item["cores"],
    memoryGB: item["memoryGB"],
    azureVmCostDetails: !item["azureVmCostDetails"]
      ? item["azureVmCostDetails"]
      : costDetailsDeserializer(item["azureVmCostDetails"]),
    estimatedCost: item["estimatedCost"],
    osLicensingCost: item["osLicensingCost"],
    estimatedCostByRecommendedOffer: !item["estimatedCostByRecommendedOffer"]
      ? item["estimatedCostByRecommendedOffer"]
      : estimatedCostByOfferArrayDeserializer(
          item["estimatedCostByRecommendedOffer"],
        ),
    recommendedVmFamilySummary: !item["recommendedVmFamilySummary"]
      ? item["recommendedVmFamilySummary"]
      : recommendedVmFamilySummaryArrayDeserializer(
          item["recommendedVmFamilySummary"],
        ),
    costByStorageType: !item["costByStorageType"]
      ? item["costByStorageType"]
      : costByStorageTypeArrayDeserializer(item["costByStorageType"]),
  };
}

export function estimatedCostByOfferArrayDeserializer(
  result: Array<EstimatedCostByOffer>,
): any[] {
  return result.map((item) => {
    return estimatedCostByOfferDeserializer(item);
  });
}

/** The estimated cost by offer. */
export interface EstimatedCostByOffer {
  /** The offer name. */
  readonly offerName?: string;
  /** Cost for the offer. */
  readonly cost?: number;
}

export function estimatedCostByOfferDeserializer(
  item: any,
): EstimatedCostByOffer {
  return {
    offerName: item["offerName"],
    cost: item["cost"],
  };
}

export function recommendedVmFamilySummaryArrayDeserializer(
  result: Array<RecommendedVmFamilySummary>,
): any[] {
  return result.map((item) => {
    return recommendedVmFamilySummaryDeserializer(item);
  });
}

/** The recommended VM family summary. */
export interface RecommendedVmFamilySummary {
  /** The Azure VM family. */
  readonly azureVmFamily?: string;
  /** The number of machines. */
  readonly numberOfMachines?: number;
}

export function recommendedVmFamilySummaryDeserializer(
  item: any,
): RecommendedVmFamilySummary {
  return {
    azureVmFamily: item["azureVmFamily"],
    numberOfMachines: item["numberOfMachines"],
  };
}

export function costByStorageTypeArrayDeserializer(
  result: Array<CostByStorageType>,
): any[] {
  return result.map((item) => {
    return costByStorageTypeDeserializer(item);
  });
}

/** The cost by storage type. */
export interface CostByStorageType {
  /** The storage type. */
  readonly storageType?: string;
  /** Cost per storage type. */
  readonly cost?: number;
}

export function costByStorageTypeDeserializer(item: any): CostByStorageType {
  return {
    storageType: item["storageType"],
    cost: item["cost"],
  };
}

/** Azure Iaas sql server summary. */
export interface AzureIaasSqlSummary {
  /** Total SQL entities. */
  readonly totalSqlEntities?: number;
  /** Suitable SQL entities. */
  readonly suitableSqlEntities?: number;
  /** The on premises PaaS cost. */
  readonly azureSqlCostDetails?: CostDetails;
  /** Estimated cost. */
  readonly estimatedCost?: number;
  /** OS licensing cost. */
  readonly osLicensingCost?: number;
  /** Estimated cost by offer. */
  readonly estimatedCostByRecommendedOffer?: EstimatedCostByOffer[];
  /** The recommended VM family summary. */
  readonly recommendedVmFamilySummary?: RecommendedVmFamilySummary[];
  /** The cost by storage type. */
  readonly costByStorageType?: CostByStorageType[];
}

export function azureIaasSqlSummaryDeserializer(
  item: any,
): AzureIaasSqlSummary {
  return {
    totalSqlEntities: item["totalSqlEntities"],
    suitableSqlEntities: item["suitableSqlEntities"],
    azureSqlCostDetails: !item["azureSqlCostDetails"]
      ? item["azureSqlCostDetails"]
      : costDetailsDeserializer(item["azureSqlCostDetails"]),
    estimatedCost: item["estimatedCost"],
    osLicensingCost: item["osLicensingCost"],
    estimatedCostByRecommendedOffer: !item["estimatedCostByRecommendedOffer"]
      ? item["estimatedCostByRecommendedOffer"]
      : estimatedCostByOfferArrayDeserializer(
          item["estimatedCostByRecommendedOffer"],
        ),
    recommendedVmFamilySummary: !item["recommendedVmFamilySummary"]
      ? item["recommendedVmFamilySummary"]
      : recommendedVmFamilySummaryArrayDeserializer(
          item["recommendedVmFamilySummary"],
        ),
    costByStorageType: !item["costByStorageType"]
      ? item["costByStorageType"]
      : costByStorageTypeArrayDeserializer(item["costByStorageType"]),
  };
}

/** The on premises IAAS summary. */
export interface OnPremisesIaasSummary {
  /** The number of servers. */
  readonly servers?: number;
  /** The number of cores. */
  readonly cores?: number;
  /** Total memory in GB. */
  readonly memoryGB?: number;
  /** The CPU utilization. */
  readonly cpuUtilization?: number;
  /** The memory utilization. */
  readonly memoryUtilization?: number;
  /** The storage utilization. */
  readonly storageUtilization?: number;
  /** The on premises PaaS cost. */
  readonly onPremisesIaasCostDetails?: CostDetails;
  /** The on premises PaaS cost. */
  readonly onPremisesIaasCostForDecommissioned?: CostDetails;
  /** The OS licensing details. */
  readonly osLicensingDetails?: IaasOsLicensingDetails[];
  /** The distribution by operating system. */
  readonly distributionByOperatingSystem?: DistributionByOperatingSystem[];
  /** The SQL on premises utilization insights. */
  readonly onPremisesUtilizationData?: UtilizationData;
  /** The distribution by virtualization. */
  readonly distributionByVirtualization?: DistributionByVirtualization[];
  /** Iaas OS Support Status Distribution. */
  readonly iaasOsSupportStatusDistribution?: SupportStatusDistribution;
  /** Iaas Sql Support Status Distribution. */
  readonly iaasSqlSupportStatusDistribution?: SupportStatusDistribution;
  /** OS Service Pack Insight. */
  readonly osServicePackInsight?: ServicePackInsight;
  /** Sql Service Pack Insight. */
  readonly sqlServicePackInsight?: ServicePackInsight;
  /** Distribution by Operating System Version. */
  readonly distributionByOperatingSystemVersion?: DistributionByType[];
  /** Distribution by Sql Version. */
  readonly distributionBySqlVersion?: DistributionByType[];
  /** Distribution by Sql Edition. */
  readonly distributionBySqlEdition?: DistributionByType[];
  /** The on premises Iaas Sustainability details. */
  readonly onPremisesIaasSustainabilityDetails?: CarbonEmissionsDetails;
  /** The on premises Iaas Sustainability details for Decommissioned. */
  readonly onPremisesIaasDecommissionedSustainabilityDetails?: CarbonEmissionsDetails;
}

export function onPremisesIaasSummaryDeserializer(
  item: any,
): OnPremisesIaasSummary {
  return {
    servers: item["servers"],
    cores: item["cores"],
    memoryGB: item["memoryGB"],
    cpuUtilization: item["cpuUtilization"],
    memoryUtilization: item["memoryUtilization"],
    storageUtilization: item["storageUtilization"],
    onPremisesIaasCostDetails: !item["onPremisesIaasCostDetails"]
      ? item["onPremisesIaasCostDetails"]
      : costDetailsDeserializer(item["onPremisesIaasCostDetails"]),
    onPremisesIaasCostForDecommissioned: !item[
      "onPremisesIaasCostForDecommissioned"
    ]
      ? item["onPremisesIaasCostForDecommissioned"]
      : costDetailsDeserializer(item["onPremisesIaasCostForDecommissioned"]),
    osLicensingDetails: !item["osLicensingDetails"]
      ? item["osLicensingDetails"]
      : iaasOsLicensingDetailsArrayDeserializer(item["osLicensingDetails"]),
    distributionByOperatingSystem: !item["distributionByOperatingSystem"]
      ? item["distributionByOperatingSystem"]
      : distributionByOperatingSystemArrayDeserializer(
          item["distributionByOperatingSystem"],
        ),
    onPremisesUtilizationData: !item["onPremisesUtilizationData"]
      ? item["onPremisesUtilizationData"]
      : utilizationDataDeserializer(item["onPremisesUtilizationData"]),
    distributionByVirtualization: !item["distributionByVirtualization"]
      ? item["distributionByVirtualization"]
      : distributionByVirtualizationArrayDeserializer(
          item["distributionByVirtualization"],
        ),
    iaasOsSupportStatusDistribution: !item["iaasOsSupportStatusDistribution"]
      ? item["iaasOsSupportStatusDistribution"]
      : supportStatusDistributionDeserializer(
          item["iaasOsSupportStatusDistribution"],
        ),
    iaasSqlSupportStatusDistribution: !item["iaasSqlSupportStatusDistribution"]
      ? item["iaasSqlSupportStatusDistribution"]
      : supportStatusDistributionDeserializer(
          item["iaasSqlSupportStatusDistribution"],
        ),
    osServicePackInsight: !item["osServicePackInsight"]
      ? item["osServicePackInsight"]
      : servicePackInsightDeserializer(item["osServicePackInsight"]),
    sqlServicePackInsight: !item["sqlServicePackInsight"]
      ? item["sqlServicePackInsight"]
      : servicePackInsightDeserializer(item["sqlServicePackInsight"]),
    distributionByOperatingSystemVersion: !item[
      "distributionByOperatingSystemVersion"
    ]
      ? item["distributionByOperatingSystemVersion"]
      : distributionByTypeArrayDeserializer(
          item["distributionByOperatingSystemVersion"],
        ),
    distributionBySqlVersion: !item["distributionBySqlVersion"]
      ? item["distributionBySqlVersion"]
      : distributionByTypeArrayDeserializer(item["distributionBySqlVersion"]),
    distributionBySqlEdition: !item["distributionBySqlEdition"]
      ? item["distributionBySqlEdition"]
      : distributionByTypeArrayDeserializer(item["distributionBySqlEdition"]),
    onPremisesIaasSustainabilityDetails: !item[
      "onPremisesIaasSustainabilityDetails"
    ]
      ? item["onPremisesIaasSustainabilityDetails"]
      : carbonEmissionsDetailsDeserializer(
          item["onPremisesIaasSustainabilityDetails"],
        ),
    onPremisesIaasDecommissionedSustainabilityDetails: !item[
      "onPremisesIaasDecommissionedSustainabilityDetails"
    ]
      ? item["onPremisesIaasDecommissionedSustainabilityDetails"]
      : carbonEmissionsDetailsDeserializer(
          item["onPremisesIaasDecommissionedSustainabilityDetails"],
        ),
  };
}

export function iaasOsLicensingDetailsArrayDeserializer(
  result: Array<IaasOsLicensingDetails>,
): any[] {
  return result.map((item) => {
    return iaasOsLicensingDetailsDeserializer(item);
  });
}

/** The Iaas OS licensing details. */
export interface IaasOsLicensingDetails {
  /** The OS type. */
  readonly osType?: string;
  /** The total cost. */
  readonly totalCost?: number;
  /** The decommission cost. */
  readonly decomissionCost?: number;
}

export function iaasOsLicensingDetailsDeserializer(
  item: any,
): IaasOsLicensingDetails {
  return {
    osType: item["osType"],
    totalCost: item["totalCost"],
    decomissionCost: item["decomissionCost"],
  };
}

export function distributionByOperatingSystemArrayDeserializer(
  result: Array<DistributionByOperatingSystem>,
): any[] {
  return result.map((item) => {
    return distributionByOperatingSystemDeserializer(item);
  });
}

/** The distribution by operating system. */
export interface DistributionByOperatingSystem {
  /** The Os classification type. */
  readonly osClassificationType?: string;
  /** The number of machines with the OS type classification. */
  readonly count?: number;
}

export function distributionByOperatingSystemDeserializer(
  item: any,
): DistributionByOperatingSystem {
  return {
    osClassificationType: item["osClassificationType"],
    count: item["count"],
  };
}

/** The SQL on premises utilization insights. */
export interface UtilizationData {
  /** The number of active entities. */
  readonly numberOfActiveEntities?: number;
  /** The number of inactive entities. */
  readonly numberOfInactiveEntities?: number;
  /** The number of decommission entities. */
  readonly numberOfDecommisionEntities?: number;
  /** The number of unknown entities. */
  readonly numberOfUnknownEntities?: number;
}

export function utilizationDataDeserializer(item: any): UtilizationData {
  return {
    numberOfActiveEntities: item["numberOfActiveEntities"],
    numberOfInactiveEntities: item["numberOfInactiveEntities"],
    numberOfDecommisionEntities: item["numberOfDecommisionEntities"],
    numberOfUnknownEntities: item["numberOfUnknownEntities"],
  };
}

export function distributionByVirtualizationArrayDeserializer(
  result: Array<DistributionByVirtualization>,
): any[] {
  return result.map((item) => {
    return distributionByVirtualizationDeserializer(item);
  });
}

/** The distribution by virtualization. */
export interface DistributionByVirtualization {
  /** The Virtualization type. */
  readonly virtualizationType?: string;
  /** The number of machines with the Virtualization type classification. */
  readonly count?: number;
}

export function distributionByVirtualizationDeserializer(
  item: any,
): DistributionByVirtualization {
  return {
    virtualizationType: item["virtualizationType"],
    count: item["count"],
  };
}

/** Support Status Distribution. */
export interface SupportStatusDistribution {
  /** Unknown support. */
  readonly unknownSupport?: number;
  /** Mainstream support. */
  readonly mainStream?: number;
  /** Extended support. */
  readonly extended?: number;
  /** Out of support. */
  readonly outOfSupport?: number;
}

export function supportStatusDistributionDeserializer(
  item: any,
): SupportStatusDistribution {
  return {
    unknownSupport: item["unknownSupport"],
    mainStream: item["mainStream"],
    extended: item["extended"],
    outOfSupport: item["outOfSupport"],
  };
}

/** Service Pack Insight. */
export interface ServicePackInsight {
  /** Unknown support. */
  readonly unknownServicePack?: number;
  /** Patched Service Pack Insight. */
  readonly patched?: number;
  /** Unpatched Service Pack Insight. */
  readonly unpatched?: number;
}

export function servicePackInsightDeserializer(item: any): ServicePackInsight {
  return {
    unknownServicePack: item["unknownServicePack"],
    patched: item["patched"],
    unpatched: item["unpatched"],
  };
}

export function distributionByTypeArrayDeserializer(
  result: Array<DistributionByType>,
): any[] {
  return result.map((item) => {
    return distributionByTypeDeserializer(item);
  });
}

/** Distribution by Type. */
export interface DistributionByType {
  /** Distribution Type. */
  readonly type?: string;
  /** Distribution Count. */
  readonly count?: number;
}

export function distributionByTypeDeserializer(item: any): DistributionByType {
  return {
    type: item["type"],
    count: item["count"],
  };
}

/** The response of a IaasSummary list operation. */
export interface _IaasSummaryListResult {
  /** The IaasSummary items on this page */
  value: IaasSummary[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _iaasSummaryListResultDeserializer(
  item: any,
): _IaasSummaryListResult {
  return {
    value: iaasSummaryArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function iaasSummaryArrayDeserializer(
  result: Array<IaasSummary>,
): any[] {
  return result.map((item) => {
    return iaasSummaryDeserializer(item);
  });
}

/** Paas summary REST resource. */
export interface PaasSummary extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: PaasSummaryProperties;
}

export function paasSummaryDeserializer(item: any): PaasSummary {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : paasSummaryPropertiesDeserializer(item["properties"]),
  };
}

/** Paas summary properties class. */
export interface PaasSummaryProperties {
  /** Shows the PaaS Azure summary. */
  readonly azure?: AzurePaasSummary;
  /** Shows platform as a service (PaaS) summary. */
  readonly onPremises?: OnPremisesPaasSummary;
}

export function paasSummaryPropertiesDeserializer(
  item: any,
): PaasSummaryProperties {
  return {
    azure: !item["azure"]
      ? item["azure"]
      : azurePaasSummaryDeserializer(item["azure"]),
    onPremises: !item["onPremises"]
      ? item["onPremises"]
      : onPremisesPaasSummaryDeserializer(item["onPremises"]),
  };
}

/** Shows the PaaS Azure summary. */
export interface AzurePaasSummary {
  /** Number of Sql instances. */
  readonly totalSqlEntities?: number;
  /** Suitable Sql instances. */
  readonly suitableSqlEntities?: number;
  /** Number of web applications. */
  readonly totalWebApps?: number;
  /** Suitable web applications. */
  readonly suitableWebApps?: number;
  /** Number of cores. */
  readonly cores?: number;
  /** Memory Utilization. */
  readonly memory?: number;
  /** Storage Utilization. */
  readonly storage?: number;
  /** Shows the estimated cost by target. */
  readonly estimatedCostByTarget?: EstimatedCostByTarget;
  /** estimated SQL Server licensing cost. */
  readonly estimatedSqlServerLicensingCost?: number;
  /** Shows the Azure SQL details. */
  readonly azureSqlSummary?: AzureSqlSummary;
  /** Shows Azure App Service summary. */
  readonly azureAppServiceSummary?: AzureAppServiceSummary;
  /** Shows Azure App Service Container summary. */
  readonly azureAppServiceContainerSummary?: AzureAppServiceContainerSummary;
  /** Shows Azure Kubernetes Service summary. */
  readonly azureKubernetesServiceSummary?: AzureKubernetesServiceSummary;
  /** The on premises PaaS cost. */
  readonly totalAzurePaasCost?: CostDetails;
  /** The Azure PaaS Sustainability Emissions Details. */
  readonly azurePaasSustainabilityDetails?: CarbonEmissionsDetails;
}

export function azurePaasSummaryDeserializer(item: any): AzurePaasSummary {
  return {
    totalSqlEntities: item["totalSqlEntities"],
    suitableSqlEntities: item["suitableSqlEntities"],
    totalWebApps: item["totalWebApps"],
    suitableWebApps: item["suitableWebApps"],
    cores: item["cores"],
    memory: item["memory"],
    storage: item["storage"],
    estimatedCostByTarget: !item["estimatedCostByTarget"]
      ? item["estimatedCostByTarget"]
      : estimatedCostByTargetDeserializer(item["estimatedCostByTarget"]),
    estimatedSqlServerLicensingCost: item["estimatedSqlServerLicensingCost"],
    azureSqlSummary: !item["azureSqlSummary"]
      ? item["azureSqlSummary"]
      : azureSqlSummaryDeserializer(item["azureSqlSummary"]),
    azureAppServiceSummary: !item["azureAppServiceSummary"]
      ? item["azureAppServiceSummary"]
      : azureAppServiceSummaryDeserializer(item["azureAppServiceSummary"]),
    azureAppServiceContainerSummary: !item["azureAppServiceContainerSummary"]
      ? item["azureAppServiceContainerSummary"]
      : azureAppServiceContainerSummaryDeserializer(
          item["azureAppServiceContainerSummary"],
        ),
    azureKubernetesServiceSummary: !item["azureKubernetesServiceSummary"]
      ? item["azureKubernetesServiceSummary"]
      : azureKubernetesServiceSummaryDeserializer(
          item["azureKubernetesServiceSummary"],
        ),
    totalAzurePaasCost: !item["totalAzurePaasCost"]
      ? item["totalAzurePaasCost"]
      : costDetailsDeserializer(item["totalAzurePaasCost"]),
    azurePaasSustainabilityDetails: !item["azurePaasSustainabilityDetails"]
      ? item["azurePaasSustainabilityDetails"]
      : carbonEmissionsDetailsDeserializer(
          item["azurePaasSustainabilityDetails"],
        ),
  };
}

/** Shows the estimated cost by target. */
export interface EstimatedCostByTarget {
  /** Azure SQL MI cost. */
  readonly azureSqlMiCost?: number;
  /** Azure SQL DB cost. */
  readonly azureSqlDbCost?: number;
  /** Azure App Service cost. */
  readonly appServiceCost?: number;
  /** Azure App Service Containers cost. */
  readonly appServiceContainerCost?: number;
  /** Azure Kubernetes Service cost. */
  readonly azureKubernetesServiceCost?: number;
}

export function estimatedCostByTargetDeserializer(
  item: any,
): EstimatedCostByTarget {
  return {
    azureSqlMiCost: item["azureSqlMiCost"],
    azureSqlDbCost: item["azureSqlDbCost"],
    appServiceCost: item["appServiceCost"],
    appServiceContainerCost: item["appServiceContainerCost"],
    azureKubernetesServiceCost: item["azureKubernetesServiceCost"],
  };
}

/** Shows the Azure SQL details. */
export interface AzureSqlSummary {
  /** Estimated cost by recommended offer. */
  readonly estimatedCostByOffer?: EstimatedCostByOffer[];
  /** Distribution by service tiers, retaining just to support older Business cases. */
  readonly distributionByServiceTier?: SqlServiceTier[];
  /** Distribution by service tiers for SQL MI. */
  readonly distributionByServiceTierForSqlMi?: SqlServiceTier[];
  /** Distribution by service tiers for SQL DB. */
  readonly distributionByServiceTierForSqlDb?: SqlServiceTier[];
}

export function azureSqlSummaryDeserializer(item: any): AzureSqlSummary {
  return {
    estimatedCostByOffer: !item["estimatedCostByOffer"]
      ? item["estimatedCostByOffer"]
      : estimatedCostByOfferArrayDeserializer(item["estimatedCostByOffer"]),
    distributionByServiceTier: !item["distributionByServiceTier"]
      ? item["distributionByServiceTier"]
      : sqlServiceTierArrayDeserializer(item["distributionByServiceTier"]),
    distributionByServiceTierForSqlMi: !item[
      "distributionByServiceTierForSqlMi"
    ]
      ? item["distributionByServiceTierForSqlMi"]
      : sqlServiceTierArrayDeserializer(
          item["distributionByServiceTierForSqlMi"],
        ),
    distributionByServiceTierForSqlDb: !item[
      "distributionByServiceTierForSqlDb"
    ]
      ? item["distributionByServiceTierForSqlDb"]
      : sqlServiceTierArrayDeserializer(
          item["distributionByServiceTierForSqlDb"],
        ),
  };
}

export function sqlServiceTierArrayDeserializer(
  result: Array<SqlServiceTier>,
): any[] {
  return result.map((item) => {
    return sqlServiceTierDeserializer(item);
  });
}

/** The SQL service tier. */
export interface SqlServiceTier {
  /** The service tier name. */
  readonly serviceTierName?: string;
  /** The number of sql entities with this tier. */
  readonly serviceTierNumber?: number;
}

export function sqlServiceTierDeserializer(item: any): SqlServiceTier {
  return {
    serviceTierName: item["serviceTierName"],
    serviceTierNumber: item["serviceTierNumber"],
  };
}

/** Shows Azure App Service summary. */
export interface AzureAppServiceSummary {
  /** Estimated cost by recommendation offer. */
  readonly estimatedCostByOffer?: EstimatedCostByOffer[];
  /** Distribution by SKU. */
  readonly distributionBySku?: AppServiceSku[];
  /** Distribution by application type. */
  readonly distributionByApp?: WebAppDistribution[];
}

export function azureAppServiceSummaryDeserializer(
  item: any,
): AzureAppServiceSummary {
  return {
    estimatedCostByOffer: !item["estimatedCostByOffer"]
      ? item["estimatedCostByOffer"]
      : estimatedCostByOfferArrayDeserializer(item["estimatedCostByOffer"]),
    distributionBySku: !item["distributionBySku"]
      ? item["distributionBySku"]
      : appServiceSkuArrayDeserializer(item["distributionBySku"]),
    distributionByApp: !item["distributionByApp"]
      ? item["distributionByApp"]
      : webAppDistributionArrayDeserializer(item["distributionByApp"]),
  };
}

export function appServiceSkuArrayDeserializer(
  result: Array<AppServiceSku>,
): any[] {
  return result.map((item) => {
    return appServiceSkuDeserializer(item);
  });
}

/** The app service SKU with corresponding cost. */
export interface AppServiceSku {
  /** The SKU name. */
  readonly skuName?: string;
  /** The cost details. */
  readonly cost?: number;
  /** The number of service plans recommended. */
  readonly count?: number;
}

export function appServiceSkuDeserializer(item: any): AppServiceSku {
  return {
    skuName: item["skuName"],
    cost: item["cost"],
    count: item["count"],
  };
}

export function webAppDistributionArrayDeserializer(
  result: Array<WebAppDistribution>,
): any[] {
  return result.map((item) => {
    return webAppDistributionDeserializer(item);
  });
}

/** The app type distribution. */
export interface WebAppDistribution {
  /** WebApp type. */
  readonly webAppType?: WebAppTypes;
  /** The cost details. */
  readonly numberOfWebApps?: number;
}

export function webAppDistributionDeserializer(item: any): WebAppDistribution {
  return {
    webAppType: item["webAppType"],
    numberOfWebApps: item["numberOfWebApps"],
  };
}

/** Business case supported WebApp types. */
export enum KnownWebAppTypes {
  /** Unknown WebApp Type. */
  Unknown = "Unknown",
  /** ASPNET Type. */
  Aspnet = "ASPNET",
  /** Java Tomcat Type. */
  Java = "Java",
}

/**
 * Business case supported WebApp types. \
 * {@link KnownWebAppTypes} can be used interchangeably with WebAppTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown WebApp Type. \
 * **ASPNET**: ASPNET Type. \
 * **Java**: Java Tomcat Type.
 */
export type WebAppTypes = string;

/** Shows Azure App Service Container summary. */
export interface AzureAppServiceContainerSummary {
  /** Estimated cost by recommendation offer. */
  readonly estimatedCostByOffer?: EstimatedCostByOffer[];
  /** Distribution by SKU. */
  readonly distributionBySku?: WebAppTargetSku[];
  /** Distribution by application type. */
  readonly distributionByApp?: WebAppDistribution[];
}

export function azureAppServiceContainerSummaryDeserializer(
  item: any,
): AzureAppServiceContainerSummary {
  return {
    estimatedCostByOffer: !item["estimatedCostByOffer"]
      ? item["estimatedCostByOffer"]
      : estimatedCostByOfferArrayDeserializer(item["estimatedCostByOffer"]),
    distributionBySku: !item["distributionBySku"]
      ? item["distributionBySku"]
      : webAppTargetSkuArrayDeserializer(item["distributionBySku"]),
    distributionByApp: !item["distributionByApp"]
      ? item["distributionByApp"]
      : webAppDistributionArrayDeserializer(item["distributionByApp"]),
  };
}

export function webAppTargetSkuArrayDeserializer(
  result: Array<WebAppTargetSku>,
): any[] {
  return result.map((item) => {
    return webAppTargetSkuDeserializer(item);
  });
}

/** The Webapp target SKU with corresponding cost. */
export interface WebAppTargetSku {
  /** The SKU name. */
  readonly skuName?: string;
  /** The cost details. */
  readonly cost?: number;
  /** The number of service plans or node pools recommended. */
  readonly count?: number;
}

export function webAppTargetSkuDeserializer(item: any): WebAppTargetSku {
  return {
    skuName: item["skuName"],
    cost: item["cost"],
    count: item["count"],
  };
}

/** Shows Azure Kubernetes Service summary. */
export interface AzureKubernetesServiceSummary {
  /** Estimated cost by recommendation offer. */
  readonly estimatedCostByOffer?: EstimatedCostByOffer[];
  /** Distribution by SKU. */
  readonly distributionBySku?: WebAppTargetSku[];
  /** Distribution by application type. */
  readonly distributionByApp?: WebAppDistribution[];
}

export function azureKubernetesServiceSummaryDeserializer(
  item: any,
): AzureKubernetesServiceSummary {
  return {
    estimatedCostByOffer: !item["estimatedCostByOffer"]
      ? item["estimatedCostByOffer"]
      : estimatedCostByOfferArrayDeserializer(item["estimatedCostByOffer"]),
    distributionBySku: !item["distributionBySku"]
      ? item["distributionBySku"]
      : webAppTargetSkuArrayDeserializer(item["distributionBySku"]),
    distributionByApp: !item["distributionByApp"]
      ? item["distributionByApp"]
      : webAppDistributionArrayDeserializer(item["distributionByApp"]),
  };
}

/** Shows platform as a service (PaaS) summary. */
export interface OnPremisesPaasSummary {
  /** Total servers. */
  readonly totalServers?: number;
  /** CPU utilization percentage. */
  readonly cpuUtilization?: number;
  /** Memory utilization percentage. */
  readonly memoryUtilization?: number;
  /** The on premises PaaS cost. */
  readonly totalOnPremisesPaasCost?: CostDetails;
  /** The on premises PaaS cost. */
  readonly onPremisesPaasCostForDecommisioned?: CostDetails;
  /** The on premises paas licensing cost. */
  readonly onPremisesPaasLicensingCost?: OnPremisesPaasLicensingCost;
  /** The on premises SQL summary. */
  readonly onPremisesSqlSummary?: OnPremisesSqlSummary;
  /** The on premises web application summary. */
  readonly onPremisesWebAppSummary?: OnPremisesWebAppSummary;
  /** OS Support Status Distribution. */
  readonly osSupportStatusDistribution?: SupportStatusDistribution;
  /** Sql Support Status Distribution. */
  readonly sqlSupportStatusDistribution?: SupportStatusDistribution;
  /** OS Service Pack Insight. */
  readonly osServicePackInsight?: ServicePackInsight;
  /** Sql Service Pack Insight. */
  readonly sqlServicePackInsight?: ServicePackInsight;
  /** The on premises PaaS sustainability details. */
  readonly onPremisesPaasSustainabilityDetails?: CarbonEmissionsDetails;
  /** The on premises Paas Sustainability details for Decommissioned. */
  readonly onPremisesPaasDecommissionedSustainabilityDetails?: CarbonEmissionsDetails;
}

export function onPremisesPaasSummaryDeserializer(
  item: any,
): OnPremisesPaasSummary {
  return {
    totalServers: item["totalServers"],
    cpuUtilization: item["cpuUtilization"],
    memoryUtilization: item["memoryUtilization"],
    totalOnPremisesPaasCost: !item["totalOnPremisesPaasCost"]
      ? item["totalOnPremisesPaasCost"]
      : costDetailsDeserializer(item["totalOnPremisesPaasCost"]),
    onPremisesPaasCostForDecommisioned: !item[
      "onPremisesPaasCostForDecommisioned"
    ]
      ? item["onPremisesPaasCostForDecommisioned"]
      : costDetailsDeserializer(item["onPremisesPaasCostForDecommisioned"]),
    onPremisesPaasLicensingCost: !item["onPremisesPaasLicensingCost"]
      ? item["onPremisesPaasLicensingCost"]
      : onPremisesPaasLicensingCostDeserializer(
          item["onPremisesPaasLicensingCost"],
        ),
    onPremisesSqlSummary: !item["onPremisesSqlSummary"]
      ? item["onPremisesSqlSummary"]
      : onPremisesSqlSummaryDeserializer(item["onPremisesSqlSummary"]),
    onPremisesWebAppSummary: !item["onPremisesWebAppSummary"]
      ? item["onPremisesWebAppSummary"]
      : onPremisesWebAppSummaryDeserializer(item["onPremisesWebAppSummary"]),
    osSupportStatusDistribution: !item["osSupportStatusDistribution"]
      ? item["osSupportStatusDistribution"]
      : supportStatusDistributionDeserializer(
          item["osSupportStatusDistribution"],
        ),
    sqlSupportStatusDistribution: !item["sqlSupportStatusDistribution"]
      ? item["sqlSupportStatusDistribution"]
      : supportStatusDistributionDeserializer(
          item["sqlSupportStatusDistribution"],
        ),
    osServicePackInsight: !item["osServicePackInsight"]
      ? item["osServicePackInsight"]
      : servicePackInsightDeserializer(item["osServicePackInsight"]),
    sqlServicePackInsight: !item["sqlServicePackInsight"]
      ? item["sqlServicePackInsight"]
      : servicePackInsightDeserializer(item["sqlServicePackInsight"]),
    onPremisesPaasSustainabilityDetails: !item[
      "onPremisesPaasSustainabilityDetails"
    ]
      ? item["onPremisesPaasSustainabilityDetails"]
      : carbonEmissionsDetailsDeserializer(
          item["onPremisesPaasSustainabilityDetails"],
        ),
    onPremisesPaasDecommissionedSustainabilityDetails: !item[
      "onPremisesPaasDecommissionedSustainabilityDetails"
    ]
      ? item["onPremisesPaasDecommissionedSustainabilityDetails"]
      : carbonEmissionsDetailsDeserializer(
          item["onPremisesPaasDecommissionedSustainabilityDetails"],
        ),
  };
}

/** The on premises paas licensing cost. */
export interface OnPremisesPaasLicensingCost {
  /** The version. */
  readonly version?: string;
  /** The total cost. */
  readonly totalCost?: number;
  /** The decommissioned server cost. */
  readonly decomissionServerCost?: number;
}

export function onPremisesPaasLicensingCostDeserializer(
  item: any,
): OnPremisesPaasLicensingCost {
  return {
    version: item["version"],
    totalCost: item["totalCost"],
    decomissionServerCost: item["decomissionServerCost"],
  };
}

/** The on premises SQL summary. */
export interface OnPremisesSqlSummary {
  /** The number of SQL instances. */
  readonly sqlInstances?: number;
  /** The number of SQL databases. */
  readonly sqlDatabases?: number;
  /** Distribution by SQL version. */
  readonly distributionBySqlVersion?: SqlVersionDetails[];
  /** The SQL on premises utilization insights. */
  readonly sqlOnPremisesUtilizationData?: UtilizationData;
  /** Distribution by Sql Edition. */
  readonly distributionBySqlEdition?: DistributionByType[];
}

export function onPremisesSqlSummaryDeserializer(
  item: any,
): OnPremisesSqlSummary {
  return {
    sqlInstances: item["sqlInstances"],
    sqlDatabases: item["sqlDatabases"],
    distributionBySqlVersion: !item["distributionBySqlVersion"]
      ? item["distributionBySqlVersion"]
      : sqlVersionDetailsArrayDeserializer(item["distributionBySqlVersion"]),
    sqlOnPremisesUtilizationData: !item["sqlOnPremisesUtilizationData"]
      ? item["sqlOnPremisesUtilizationData"]
      : utilizationDataDeserializer(item["sqlOnPremisesUtilizationData"]),
    distributionBySqlEdition: !item["distributionBySqlEdition"]
      ? item["distributionBySqlEdition"]
      : distributionByTypeArrayDeserializer(item["distributionBySqlEdition"]),
  };
}

export function sqlVersionDetailsArrayDeserializer(
  result: Array<SqlVersionDetails>,
): any[] {
  return result.map((item) => {
    return sqlVersionDetailsDeserializer(item);
  });
}

/** The SQL version details. */
export interface SqlVersionDetails {
  /** The SQL version. */
  readonly sqlVersion?: string;
  /** Number of instances with the above SQL version. */
  readonly numberOfInstances?: number;
}

export function sqlVersionDetailsDeserializer(item: any): SqlVersionDetails {
  return {
    sqlVersion: item["sqlVersion"],
    numberOfInstances: item["numberOfInstances"],
  };
}

/** The on premises web application summary. */
export interface OnPremisesWebAppSummary {
  /** The number of web servers. */
  readonly numberOfWebServers?: number;
  /** The number of web applications. */
  readonly numberOfWebApplications?: number;
  /** The number of web applications per web application type. */
  readonly numberOfWebAppsPerType?: NameValuePair1[];
}

export function onPremisesWebAppSummaryDeserializer(
  item: any,
): OnPremisesWebAppSummary {
  return {
    numberOfWebServers: item["numberOfWebServers"],
    numberOfWebApplications: item["numberOfWebApplications"],
    numberOfWebAppsPerType: !item["numberOfWebAppsPerType"]
      ? item["numberOfWebAppsPerType"]
      : nameValuePair1ArrayDeserializer(item["numberOfWebAppsPerType"]),
  };
}

export function nameValuePair1ArrayDeserializer(
  result: Array<NameValuePair1>,
): any[] {
  return result.map((item) => {
    return nameValuePair1Deserializer(item);
  });
}

/** The generic name value pair. */
export interface NameValuePair1 {
  /** The name. */
  name?: string;
  /** The value. */
  value?: number;
}

export function nameValuePair1Deserializer(item: any): NameValuePair1 {
  return {
    name: item["name"],
    value: item["value"],
  };
}

/** The response of a PaasSummary list operation. */
export interface _PaasSummaryListResult {
  /** The PaasSummary items on this page */
  value: PaasSummary[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _paasSummaryListResultDeserializer(
  item: any,
): _PaasSummaryListResult {
  return {
    value: paasSummaryArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function paasSummaryArrayDeserializer(
  result: Array<PaasSummary>,
): any[] {
  return result.map((item) => {
    return paasSummaryDeserializer(item);
  });
}

/** Overview summary REST resource. */
export interface OverviewSummary extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: OverviewSummaryProperties;
}

export function overviewSummaryDeserializer(item: any): OverviewSummary {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : overviewSummaryPropertiesDeserializer(item["properties"]),
  };
}

/** Overview summary properties class. */
export interface OverviewSummaryProperties {
  /** The total Azure cost.. */
  readonly totalAzureCost?: number;
  /** The total Azure IaaS cost. */
  readonly totalAzureIaasCost?: number;
  /** The total Azure PaaS cost. */
  readonly totalAzurePaasCost?: number;
  /** The total Avs cost. */
  readonly totalAzureAvsCost?: number;
  /** The windows ahub saving. */
  readonly windowsAhubSavings?: number;
  /** The linux ahub saving. */
  readonly linuxAhubSavings?: number;
  /** The sql ahub saving. */
  readonly sqlAhubSavings?: number;
  /** The total on premises cost. */
  readonly totalOnPremisesCost?: number;
  /** ESU Savings 4 Years. */
  readonly esuSavingsFor4Years?: number;
  /** The management cost saving. */
  readonly managementCostSavings?: number;
  /** The security cost saving. */
  readonly securityCostSavings?: number;
  /** Shows the year-on-year cost overall. */
  readonly yearOnYearEstimates?: YearOnYearEstimates;
  /** Shows the discovered servers by virtualization platform. */
  readonly serversDiscovered?: ServersDiscovered;
  /** The SQL on premises utilization insights. */
  readonly utilizationData?: UtilizationData;
  /** Shows the infrastructure as a service machine OS distribution. */
  readonly iaasOsDistribution?: IaasOsDistribution;
  /** OS Support Status Distribution. */
  readonly osSupportStatusDistribution?: SupportStatusDistribution;
  /** Sql Support Status Distribution. */
  readonly sqlSupportStatusDistribution?: SupportStatusDistribution;
  /** Shows the distribution of platforms. */
  readonly paasDistribution?: PaasDistribution;
  /** The total Azure arc enabled on-premises cost assuming all on-premises infra is arc enabled. */
  readonly azureArcEnabledOnPremisesCost?: number;
  /** The final cost including azure and azure arc enabled on-premises considering the remaining on-prem infra is arc enabled. */
  readonly futureCostIncludingAzureArc?: number;
  /** ESU Savings in 4 Years considering the remaining on-prem infra each year is arc enabled. */
  readonly futureEsuSavingsFor4YearsIncludingAzureArc?: number;
  /** The management cost saving considering the remaining on-prem infra is arc enabled */
  readonly futureManagementCostSavingsIncludingAzureArc?: number;
  /** The security cost saving considering the remaining on-prem infra is arc enabled. */
  readonly futureSecurityCostSavingsIncludingAzureArc?: number;
  /** The total cost of services offered by azure arc. */
  readonly azureArcServicesCost?: number;
  /** The Iaas component of the future azure cost based on the final migration percentage. */
  readonly futureAzureIaasCost?: number;
  /** The Paas component of the future azure cost based on the final migration percentage. */
  readonly futureAzurePaasCost?: number;
  /** The future azure arc cost based on the final migration percentage. */
  readonly futureAzureArcEnabledOnPremisesCost?: number;
  /** The total cost of services offered by azure arc based on the final migration percentage. */
  readonly futureAzureArcServicesCost?: number;
  /** The total on-premises sustainability estimates. */
  readonly totalOnPremisesSustainabilityDetails: CarbonEmissionsDetails;
  /** The total azure sustainability estimates. */
  readonly totalAzureSustainabilityDetails: CarbonEmissionsDetails;
}

export function overviewSummaryPropertiesDeserializer(
  item: any,
): OverviewSummaryProperties {
  return {
    totalAzureCost: item["totalAzureCost"],
    totalAzureIaasCost: item["totalAzureIaasCost"],
    totalAzurePaasCost: item["totalAzurePaasCost"],
    totalAzureAvsCost: item["totalAzureAvsCost"],
    windowsAhubSavings: item["windowsAhubSavings"],
    linuxAhubSavings: item["linuxAhubSavings"],
    sqlAhubSavings: item["sqlAhubSavings"],
    totalOnPremisesCost: item["totalOnPremisesCost"],
    esuSavingsFor4Years: item["esuSavingsFor4years"],
    managementCostSavings: item["managementCostSavings"],
    securityCostSavings: item["securityCostSavings"],
    yearOnYearEstimates: !item["yearOnYearEstimates"]
      ? item["yearOnYearEstimates"]
      : yearOnYearEstimatesDeserializer(item["yearOnYearEstimates"]),
    serversDiscovered: !item["serversDiscovered"]
      ? item["serversDiscovered"]
      : serversDiscoveredDeserializer(item["serversDiscovered"]),
    utilizationData: !item["utilizationData"]
      ? item["utilizationData"]
      : utilizationDataDeserializer(item["utilizationData"]),
    iaasOsDistribution: !item["iaasOsDistribution"]
      ? item["iaasOsDistribution"]
      : iaasOsDistributionDeserializer(item["iaasOsDistribution"]),
    osSupportStatusDistribution: !item["osSupportStatusDistribution"]
      ? item["osSupportStatusDistribution"]
      : supportStatusDistributionDeserializer(
          item["osSupportStatusDistribution"],
        ),
    sqlSupportStatusDistribution: !item["sqlSupportStatusDistribution"]
      ? item["sqlSupportStatusDistribution"]
      : supportStatusDistributionDeserializer(
          item["sqlSupportStatusDistribution"],
        ),
    paasDistribution: !item["paasDistribution"]
      ? item["paasDistribution"]
      : paasDistributionDeserializer(item["paasDistribution"]),
    azureArcEnabledOnPremisesCost: item["azureArcEnabledOnPremisesCost"],
    futureCostIncludingAzureArc: item["futureCostIncludingAzureArc"],
    futureEsuSavingsFor4YearsIncludingAzureArc:
      item["futureEsuSavingsFor4YearsIncludingAzureArc"],
    futureManagementCostSavingsIncludingAzureArc:
      item["futureManagementCostSavingsIncludingAzureArc"],
    futureSecurityCostSavingsIncludingAzureArc:
      item["futureSecurityCostSavingsIncludingAzureArc"],
    azureArcServicesCost: item["azureArcServicesCost"],
    futureAzureIaasCost: item["futureAzureIaasCost"],
    futureAzurePaasCost: item["futureAzurePaasCost"],
    futureAzureArcEnabledOnPremisesCost:
      item["futureAzureArcEnabledOnPremisesCost"],
    futureAzureArcServicesCost: item["futureAzureArcServicesCost"],
    totalOnPremisesSustainabilityDetails: carbonEmissionsDetailsDeserializer(
      item["totalOnPremisesSustainabilityDetails"],
    ),
    totalAzureSustainabilityDetails: carbonEmissionsDetailsDeserializer(
      item["totalAzureSustainabilityDetails"],
    ),
  };
}

/** Shows the discovered servers by virtualization platform. */
export interface ServersDiscovered {
  /** Number of servers on VMWare. */
  readonly vmWare?: number;
  /** Number of servers on HyperV. */
  readonly hyperV?: number;
  /** Number of physical servers. */
  readonly physical?: number;
  /** Number of servers whose virtualization is unknown. */
  readonly notApplicable?: number;
}

export function serversDiscoveredDeserializer(item: any): ServersDiscovered {
  return {
    vmWare: item["vmWare"],
    hyperV: item["hyperV"],
    physical: item["physical"],
    notApplicable: item["notApplicable"],
  };
}

/** Shows the infrastructure as a service machine OS distribution. */
export interface IaasOsDistribution {
  /** Number of Windows servers. */
  readonly windows?: number;
  /** Number of Linux servers. */
  readonly linux?: number;
  /** Number of servers neither Windows or Linux. */
  readonly other?: number;
}

export function iaasOsDistributionDeserializer(item: any): IaasOsDistribution {
  return {
    windows: item["windows"],
    linux: item["linux"],
    other: item["other"],
  };
}

/** Shows the distribution of platforms. */
export interface PaasDistribution {
  /** Number of SQL Server machines. */
  readonly sqlServers?: number;
  /** Number of IIS Web servers. */
  readonly iisWebServers?: number;
  /** Distribution of webapps for each target type. */
  readonly webAppDistribution?: NameValuePair1[];
}

export function paasDistributionDeserializer(item: any): PaasDistribution {
  return {
    sqlServers: item["sqlServers"],
    iisWebServers: item["iisWebServers"],
    webAppDistribution: !item["webAppDistribution"]
      ? item["webAppDistribution"]
      : nameValuePair1ArrayDeserializer(item["webAppDistribution"]),
  };
}

/** The response of a OverviewSummary list operation. */
export interface _OverviewSummaryListResult {
  /** The OverviewSummary items on this page */
  value: OverviewSummary[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _overviewSummaryListResultDeserializer(
  item: any,
): _OverviewSummaryListResult {
  return {
    value: overviewSummaryArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function overviewSummaryArrayDeserializer(
  result: Array<OverviewSummary>,
): any[] {
  return result.map((item) => {
    return overviewSummaryDeserializer(item);
  });
}

/** Avs summary REST resource. */
export interface AvsSummary extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: AvsSummaryProperties;
}

export function avsSummaryDeserializer(item: any): AvsSummary {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : avsSummaryPropertiesDeserializer(item["properties"]),
  };
}

/** Avs summary properties class. */
export interface AvsSummaryProperties {
  /** The Azure Avs summary. */
  readonly azureAvsSummary?: AzureAvsSummary;
  /** The on premises IaaS summary. */
  readonly onPremisesAvsSummary?: OnPremisesIaasSummary;
}

export function avsSummaryPropertiesDeserializer(
  item: any,
): AvsSummaryProperties {
  return {
    azureAvsSummary: !item["azureAvsSummary"]
      ? item["azureAvsSummary"]
      : azureAvsSummaryDeserializer(item["azureAvsSummary"]),
    onPremisesAvsSummary: !item["onPremisesAvsSummary"]
      ? item["onPremisesAvsSummary"]
      : onPremisesIaasSummaryDeserializer(item["onPremisesAvsSummary"]),
  };
}

/** The Azure AVS summary. */
export interface AzureAvsSummary {
  /** Shows the year-on-year cost overall. */
  readonly yearOnYearEstimates?: YearOnYearEstimates;
  /** Avs virtual machine summary. */
  readonly avsNodeSummary?: AvsNodeSummary;
  /** The on premises PaaS cost. */
  readonly avsCostDetails?: CostDetails;
  /** The AVS Azure Sustainability Details. */
  readonly azureAvsSustainabilityDetails?: CarbonEmissionsDetails;
}

export function azureAvsSummaryDeserializer(item: any): AzureAvsSummary {
  return {
    yearOnYearEstimates: !item["yearOnYearEstimates"]
      ? item["yearOnYearEstimates"]
      : yearOnYearEstimatesDeserializer(item["yearOnYearEstimates"]),
    avsNodeSummary: !item["avsNodeSummary"]
      ? item["avsNodeSummary"]
      : avsNodeSummaryDeserializer(item["avsNodeSummary"]),
    avsCostDetails: !item["avsCostDetails"]
      ? item["avsCostDetails"]
      : costDetailsDeserializer(item["avsCostDetails"]),
    azureAvsSustainabilityDetails: !item["azureAvsSustainabilityDetails"]
      ? item["azureAvsSustainabilityDetails"]
      : carbonEmissionsDetailsDeserializer(
          item["azureAvsSustainabilityDetails"],
        ),
  };
}

/** Azure Avs Node summary. */
export interface AvsNodeSummary {
  /** Servers suitable for migration. */
  readonly serversSuitableForMigration?: number;
  /** The total number of servers. */
  readonly totalNumberOfServers?: number;
  /** The total number of Avs VM cores. */
  readonly cores?: number;
  /** The total memory in GB. */
  readonly memoryGb?: number;
  /** The on premises PaaS cost. */
  readonly avsNodeCostDetails?: CostDetails;
  /** Estimated cost. */
  readonly estimatedCost?: number;
  /** OS licensing cost. */
  readonly osLicensingCost?: number;
  /** Estimated cost by offer. */
  readonly estimatedCostByRecommendedOffer?: EstimatedCostByOffer[];
  /** The recommended VM family summary. */
  readonly recommendedAvsNodeTypeSummary?: RecommendedAvsNodeTypeSummary[];
  /** Estimated External Storage */
  readonly estimatedExternalStorage?: EstimatedExternalStorage[];
  /** Estimated Network */
  readonly estimatedNetwork?: EstimatedNetwork[];
  /** Estimated Cost With VCF BYOL */
  readonly estimatedCostWithVcfByol?: number;
  /** Represents errors which might have occurred while calculating AVS Node Summary */
  readonly errors?: ErrorDetail_1[];
}

export function avsNodeSummaryDeserializer(item: any): AvsNodeSummary {
  return {
    serversSuitableForMigration: item["serversSuitableForMigration"],
    totalNumberOfServers: item["totalNumberOfServers"],
    cores: item["cores"],
    memoryGb: item["memoryGb"],
    avsNodeCostDetails: !item["avsNodeCostDetails"]
      ? item["avsNodeCostDetails"]
      : costDetailsDeserializer(item["avsNodeCostDetails"]),
    estimatedCost: item["estimatedCost"],
    osLicensingCost: item["osLicensingCost"],
    estimatedCostByRecommendedOffer: !item["estimatedCostByRecommendedOffer"]
      ? item["estimatedCostByRecommendedOffer"]
      : estimatedCostByOfferArrayDeserializer(
          item["estimatedCostByRecommendedOffer"],
        ),
    recommendedAvsNodeTypeSummary: !item["recommendedAvsNodeTypeSummary"]
      ? item["recommendedAvsNodeTypeSummary"]
      : recommendedAvsNodeTypeSummaryArrayDeserializer(
          item["recommendedAvsNodeTypeSummary"],
        ),
    estimatedExternalStorage: !item["estimatedExternalStorage"]
      ? item["estimatedExternalStorage"]
      : estimatedExternalStorageArrayDeserializer(
          item["estimatedExternalStorage"],
        ),
    estimatedNetwork: !item["estimatedNetwork"]
      ? item["estimatedNetwork"]
      : estimatedNetworkArrayDeserializer(item["estimatedNetwork"]),
    estimatedCostWithVcfByol: item["estimatedCostWithVcfByol"],
    errors: !item["errors"]
      ? item["errors"]
      : __PLACEHOLDER_o164_sdeserializer__(item["errors"]),
  };
}

export function recommendedAvsNodeTypeSummaryArrayDeserializer(
  result: Array<RecommendedAvsNodeTypeSummary>,
): any[] {
  return result.map((item) => {
    return recommendedAvsNodeTypeSummaryDeserializer(item);
  });
}

/** Azure Avs Node summary. */
export interface RecommendedAvsNodeTypeSummary {
  /** AVS node type. */
  readonly avsNodeType?: string;
  /** Number of nodes. */
  readonly numberOfNodes?: number;
  /** Failures to tolerate and RAID level for the Node. */
  readonly failuresToTolerateAndRaidLevel?: FttAndRaidLevel;
}

export function recommendedAvsNodeTypeSummaryDeserializer(
  item: any,
): RecommendedAvsNodeTypeSummary {
  return {
    avsNodeType: item["avsNodeType"],
    numberOfNodes: item["numberOfNodes"],
    failuresToTolerateAndRaidLevel: item["failuresToTolerateAndRaidLevel"],
  };
}

/** FTT and RAID Level. */
export enum KnownFttAndRaidLevel {
  /** Unknown FTT and RAID Level. */
  Unknown = "Unknown",
  /** FTT 1 and RAID Level 1. */
  Ftt1Raid1 = "Ftt1Raid1",
  /** FTT 1 and RAID Level 5. */
  Ftt1Raid5 = "Ftt1Raid5",
  /** FTT 2 and RAID Level 1. */
  Ftt2Raid1 = "Ftt2Raid1",
  /** FTT 2 and RAID Level 6. */
  Ftt2Raid6 = "Ftt2Raid6",
  /** FTT 3 and RAID Level 1. */
  Ftt3Raid1 = "Ftt3Raid1",
}

/**
 * FTT and RAID Level. \
 * {@link KnownFttAndRaidLevel} can be used interchangeably with FttAndRaidLevel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown FTT and RAID Level. \
 * **Ftt1Raid1**: FTT 1 and RAID Level 1. \
 * **Ftt1Raid5**: FTT 1 and RAID Level 5. \
 * **Ftt2Raid1**: FTT 2 and RAID Level 1. \
 * **Ftt2Raid6**: FTT 2 and RAID Level 6. \
 * **Ftt3Raid1**: FTT 3 and RAID Level 1.
 */
export type FttAndRaidLevel = string;

export function estimatedExternalStorageArrayDeserializer(
  result: Array<EstimatedExternalStorage>,
): any[] {
  return result.map((item) => {
    return estimatedExternalStorageDeserializer(item);
  });
}

/** Estimated external storage */
export interface EstimatedExternalStorage {
  /** External storage type */
  readonly storageType?: ExternalStorageType;
  /** Total storage allocation in GB */
  readonly totalStorageInGB?: number;
  /** Percent storage utilization */
  readonly storageUtilization?: number;
  /** Total storage cost */
  readonly totalStorageCost?: number;
}

export function estimatedExternalStorageDeserializer(
  item: any,
): EstimatedExternalStorage {
  return {
    storageType: item["storageType"],
    totalStorageInGB: item["totalStorageInGB"],
    storageUtilization: item["storageUtilization"],
    totalStorageCost: item["totalStorageCost"],
  };
}

/** Different External storage skus. */
export enum KnownExternalStorageType {
  /** Indicates un-supported external storage. */
  Unknown = "Unknown",
  /** Indicates No external storage. */
  None = "None",
  /** ANF external storage with Standard SKU. */
  AnfStandard = "AnfStandard",
  /** ANF external storage with Premium SKU. */
  AnfPremium = "AnfPremium",
  /** ANF external storage with Ultra SKU. */
  AnfUltra = "AnfUltra",
}

/**
 * Different External storage skus. \
 * {@link KnownExternalStorageType} can be used interchangeably with ExternalStorageType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Indicates un-supported external storage. \
 * **None**: Indicates No external storage. \
 * **AnfStandard**: ANF external storage with Standard SKU. \
 * **AnfPremium**: ANF external storage with Premium SKU. \
 * **AnfUltra**: ANF external storage with Ultra SKU.
 */
export type ExternalStorageType = string;

export function estimatedNetworkArrayDeserializer(
  result: Array<EstimatedNetwork>,
): any[] {
  return result.map((item) => {
    return estimatedNetworkDeserializer(item);
  });
}

/** Estimated network */
export interface EstimatedNetwork {
  /** Network SKU type. */
  readonly skuType?: NetworkSkuType;
  /** Network Sku type cost. */
  readonly cost?: number;
}

export function estimatedNetworkDeserializer(item: any): EstimatedNetwork {
  return {
    skuType: item["skuType"],
    cost: item["cost"],
  };
}

/** Different network skus. */
export enum KnownNetworkSkuType {
  /** Indicates un-supported network SKU. */
  Unknown = "Unknown",
  /** Indicates No network SKU. */
  None = "None",
  /** Express Route network type with Ultra SKU. */
  ExpressRouteUltra = "ExpressRouteUltra",
}

/**
 * Different network skus. \
 * {@link KnownNetworkSkuType} can be used interchangeably with NetworkSkuType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Indicates un-supported network SKU. \
 * **None**: Indicates No network SKU. \
 * **ExpressRouteUltra**: Express Route network type with Ultra SKU.
 */
export type NetworkSkuType = string;

/** Error Details */
export interface ErrorDetail_1 {
  /** Error Code */
  readonly code: string;
  /** Description of the error occurred */
  readonly message: string;
}

/** The response of a AvsSummary list operation. */
export interface _AvsSummaryListResult {
  /** The AvsSummary items on this page */
  value: AvsSummary[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _avsSummaryListResultDeserializer(
  item: any,
): _AvsSummaryListResult {
  return {
    value: avsSummaryArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function avsSummaryArrayDeserializer(result: Array<AvsSummary>): any[] {
  return result.map((item) => {
    return avsSummaryDeserializer(item);
  });
}

/** Evaluated machine resource. */
export interface EvaluatedMachine extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: EvaluatedMachineProperties;
}

export function evaluatedMachineDeserializer(item: any): EvaluatedMachine {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : evaluatedMachinePropertiesDeserializer(item["properties"]),
  };
}

/** Evaluated machine properties class. */
export interface EvaluatedMachineProperties {
  /** Machine Id. */
  readonly machineId?: string;
  /** Server Name. */
  readonly serverName?: string;
  /** Virtualization type. */
  readonly virtualizationType?: string;
  /** Activity state. */
  readonly activityState?: string;
  /** Operating System (OS) name. */
  readonly operatingSystemName?: string;
  /** Recommended Azure target. */
  readonly recommendedAzureTarget?: string;
  /** Qualifying offer. */
  readonly qualifyingOffer?: string;
  /** Is machine ready for migration. */
  readonly readyForMigration?: string;
  /** End of Support status. */
  readonly supportStatus?: SupportabilityStatus;
}

export function evaluatedMachinePropertiesDeserializer(
  item: any,
): EvaluatedMachineProperties {
  return {
    machineId: item["machineId"],
    serverName: item["serverName"],
    virtualizationType: item["virtualizationType"],
    activityState: item["activityState"],
    operatingSystemName: item["operatingSystemName"],
    recommendedAzureTarget: item["recommendedAzureTarget"],
    qualifyingOffer: item["qualifyingOffer"],
    readyForMigration: item["readyForMigration"],
    supportStatus: item["supportStatus"],
  };
}

/** Supportability Status. */
export enum KnownSupportabilityStatus {
  /** Unknown Supportability Status. */
  Unknown = "Unknown",
  /** Mainstream Supportability Status. */
  Mainstream = "Mainstream",
  /** Extended Supportability Status. */
  Extended = "Extended",
  /** OutOfSupport Supportability Status. */
  OutOfSupport = "OutOfSupport",
}

/**
 * Supportability Status. \
 * {@link KnownSupportabilityStatus} can be used interchangeably with SupportabilityStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown Supportability Status. \
 * **Mainstream**: Mainstream Supportability Status. \
 * **Extended**: Extended Supportability Status. \
 * **OutOfSupport**: OutOfSupport Supportability Status.
 */
export type SupportabilityStatus = string;

/** The response of a EvaluatedMachine list operation. */
export interface _EvaluatedMachineListResult {
  /** The EvaluatedMachine items on this page */
  value: EvaluatedMachine[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _evaluatedMachineListResultDeserializer(
  item: any,
): _EvaluatedMachineListResult {
  return {
    value: evaluatedMachineArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function evaluatedMachineArrayDeserializer(
  result: Array<EvaluatedMachine>,
): any[] {
  return result.map((item) => {
    return evaluatedMachineDeserializer(item);
  });
}

/** Evaluated sql entity resource. */
export interface EvaluatedSqlEntity extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: EvaluatedSqlEntityProperties;
}

export function evaluatedSqlEntityDeserializer(item: any): EvaluatedSqlEntity {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : evaluatedSqlEntityPropertiesDeserializer(item["properties"]),
  };
}

/** Evaluated sql entity properties class. */
export interface EvaluatedSqlEntityProperties {
  /** Server name. */
  readonly serverName?: string;
  /** Activity state. */
  readonly activityState?: string;
  /** SQL Server version. */
  readonly sqlVersion?: string;
  /** SQL Server edition. */
  readonly sqlEdition?: string;
  /** Recommended Azure target. */
  readonly recommendedAzureTarget?: string;
  /** Qualifying offer. */
  readonly qualifyingOffer?: string;
  /** Is SQL Instance ready for migration. */
  readonly readyForMigration?: string;
  /** The virtualization type. */
  readonly virtualizationType?: string;
  /** DB count in instance. */
  readonly dbCount?: number;
  /** End of Support status. */
  readonly supportStatus?: SupportabilityStatus;
}

export function evaluatedSqlEntityPropertiesDeserializer(
  item: any,
): EvaluatedSqlEntityProperties {
  return {
    serverName: item["serverName"],
    activityState: item["activityState"],
    sqlVersion: item["sqlVersion"],
    sqlEdition: item["sqlEdition"],
    recommendedAzureTarget: item["recommendedAzureTarget"],
    qualifyingOffer: item["qualifyingOffer"],
    readyForMigration: item["readyForMigration"],
    virtualizationType: item["virtualizationType"],
    dbCount: item["dbCount"],
    supportStatus: item["supportStatus"],
  };
}

/** The response of a EvaluatedSqlEntity list operation. */
export interface _EvaluatedSqlEntityListResult {
  /** The EvaluatedSqlEntity items on this page */
  value: EvaluatedSqlEntity[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _evaluatedSqlEntityListResultDeserializer(
  item: any,
): _EvaluatedSqlEntityListResult {
  return {
    value: evaluatedSqlEntityArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function evaluatedSqlEntityArrayDeserializer(
  result: Array<EvaluatedSqlEntity>,
): any[] {
  return result.map((item) => {
    return evaluatedSqlEntityDeserializer(item);
  });
}

/** Evaluated web app resource. */
export interface EvaluatedWebApp extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: EvaluatedWebAppProperties;
}

export function evaluatedWebAppDeserializer(item: any): EvaluatedWebApp {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : evaluatedWebAppPropertiesDeserializer(item["properties"]),
  };
}

/** Evaluated web app properties class. */
export interface EvaluatedWebAppProperties {
  /** Recommended Azure target. */
  recommendedAzureTarget?: string;
  /** Recommended Azure SKU name. */
  recommendedAzureSkuName?: string;
  /** Recommended Azure SKU size. */
  recommendedAzureSkuSize?: string;
  /** The server name. */
  serverName?: string;
  /** The workload. */
  workload?: string;
  /** The activity state. */
  activityState?: string;
  /** Is machine ready for migration. */
  readyForMigration?: string;
}

export function evaluatedWebAppPropertiesDeserializer(
  item: any,
): EvaluatedWebAppProperties {
  return {
    recommendedAzureTarget: item["recommendedAzureTarget"],
    recommendedAzureSkuName: item["recommendedAzureSkuName"],
    recommendedAzureSkuSize: item["recommendedAzureSkuSize"],
    serverName: item["serverName"],
    workload: item["workload"],
    activityState: item["activityState"],
    readyForMigration: item["readyForMigration"],
  };
}

/** The response of a EvaluatedWebApp list operation. */
export interface _EvaluatedWebAppListResult {
  /** The EvaluatedWebApp items on this page */
  value: EvaluatedWebApp[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _evaluatedWebAppListResultDeserializer(
  item: any,
): _EvaluatedWebAppListResult {
  return {
    value: evaluatedWebAppArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function evaluatedWebAppArrayDeserializer(
  result: Array<EvaluatedWebApp>,
): any[] {
  return result.map((item) => {
    return evaluatedWebAppDeserializer(item);
  });
}

/** Evaluated AVS machine resource. */
export interface EvaluatedAvsMachine extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: EvaluatedAvsMachineProperties;
}

export function evaluatedAvsMachineDeserializer(
  item: any,
): EvaluatedAvsMachine {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : evaluatedAvsMachinePropertiesDeserializer(item["properties"]),
  };
}

/** Evaluated AVS machine properties class. */
export interface EvaluatedAvsMachineProperties {
  /** Machine Id. */
  readonly machineId?: string;
  /** Server Name. */
  readonly serverName?: string;
  /** Virtualization type. */
  readonly virtualizationType?: string;
  /** Activity state. */
  readonly activityState?: string;
  /** Operating System (OS) name. */
  readonly operatingSystemName?: string;
  /** Recommended Azure target. */
  readonly recommendedAzureTarget?: string;
  /** Qualifying offer. */
  readonly qualifyingOffer?: string;
  /** Is machine ready for migration. */
  readonly readyForMigration?: string;
  /** End of Support status. */
  readonly supportStatus?: SupportabilityStatus;
}

export function evaluatedAvsMachinePropertiesDeserializer(
  item: any,
): EvaluatedAvsMachineProperties {
  return {
    machineId: item["machineId"],
    serverName: item["serverName"],
    virtualizationType: item["virtualizationType"],
    activityState: item["activityState"],
    operatingSystemName: item["operatingSystemName"],
    recommendedAzureTarget: item["recommendedAzureTarget"],
    qualifyingOffer: item["qualifyingOffer"],
    readyForMigration: item["readyForMigration"],
    supportStatus: item["supportStatus"],
  };
}

/** The response of a EvaluatedAvsMachine list operation. */
export interface _EvaluatedAvsMachineListResult {
  /** The EvaluatedAvsMachine items on this page */
  value: EvaluatedAvsMachine[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _evaluatedAvsMachineListResultDeserializer(
  item: any,
): _EvaluatedAvsMachineListResult {
  return {
    value: evaluatedAvsMachineArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function evaluatedAvsMachineArrayDeserializer(
  result: Array<EvaluatedAvsMachine>,
): any[] {
  return result.map((item) => {
    return evaluatedAvsMachineDeserializer(item);
  });
}

/** API Versions for Business case Resource. */
export enum KnownBusinessCaseApiVersions {
  /** 2024-03-03-preview API Version. */
  V20240303Preview = "2024-03-03-preview",
}

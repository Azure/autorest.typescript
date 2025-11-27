import "@typespec/rest";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";
import "@azure-tools/typespec-autorest";
import "@typespec/versioning";
import "@typespec/openapi";

using TypeSpec.Versioning;
using TypeSpec.Http;
using TypeSpec.Rest;
using Azure.ResourceManager;
using Autorest;
using OpenAPI;

@armProviderNamespace
@service(#{ title: "Microsoft.NetworkAnalytics" })
@versioned(Microsoft.NetworkAnalytics.Versions)
namespace Microsoft.NetworkAnalytics;

interface Operations extends Azure.ResourceManager.Operations {}

@doc("The available API versions for the Microsoft.NetworkAnalytics RP.")
enum Versions {
  @doc("The 2023-11-15 stable version.")
  v2023_11_15: "2023-11-15",
}

@doc("The status of the current operation.")
union ProvisioningState {
  string,

  /** Represents a succeeded operation. */
  Succeeded: "Succeeded",

  /** Represents a failed operation. */
  Failed: "Failed",

  /** Represents a canceled operation. */
  Canceled: "Canceled",

  /** Represents a pending operation. */
  Provisioning: "Provisioning",

  /** Represents a pending operation. */
  Updating: "Updating",

  /** Represents an operation under deletion. */
  Deleting: "Deleting",

  /** Represents an accepted operation. */
  Accepted: "Accepted",
}

@doc("ManagedResourceGroup related properties")
model ManagedResourceGroupConfiguration {
  @doc("Name of managed resource group")
  name: string;

  @doc("Managed Resource Group location")
  location: string;
}

@doc("Virtual Network Rule")
model VirtualNetworkRule {
  @doc("Resource ID of a subnet")
  id: string;

  @doc("The action of virtual network rule.")
  action?: string;

  @doc("Gets the state of virtual network rule.")
  state?: string;
}

#suppress "@azure-tools/typespec-azure-core/casing-style" "Suppressing casing style warning for iprules for now."
@doc("IP rule with specific IP or IP range in CIDR format.")
model IPRules {
  @doc("IP Rules Value")
  value?: string;

  @doc("The action of virtual network rule.")
  action: string;
}

@doc("Resource Access Rules.")
model ResourceAccessRules {
  @doc("The tenant ID of resource.")
  tenantId: string;

  @doc("Resource ID")
  resourceId: string;
}

@doc("Specifies whether traffic is bypassed for Logging/Metrics/AzureServices. Possible values are any combination of Logging|Metrics|AzureServices (For example, \"Logging, Metrics\"), or None to bypass none of those traffics.")
union Bypass {
  string,

  @doc("Represents no bypassing of traffic.")
  "None",

  @doc("Represents bypassing logging traffic.")
  "Logging",

  @doc("Represents bypassing metrics traffic.")
  "Metrics",

  @doc("Represents bypassing azure services traffic.")
  "AzureServices",
}

@doc("Specifies the default action of allow or deny when no other rules match.")
union DefaultAction {
  string,

  @doc("Represents allow action.")
  "Allow",

  @doc("Represents deny action.")
  "Deny",
}

@doc("Data Product Network rule set")
@added(Versions.v2023_11_15)
model DataProductNetworkAclsRequired {
  @doc("Virtual Network Rule")
  virtualNetworkRule: VirtualNetworkRule[];

  @doc("IP rule with specific IP or IP range in CIDR format.")
  @extension("x-ms-identifiers", #[])
  ipRules: IPRules[];

  @doc("The list of query ips in the format of CIDR allowed to connect to query/visualization endpoint.")
  allowedQueryIpRangeList: string[];

  @doc("Default Action")
  defaultAction: DefaultAction;

  baseRequired: string;
  properties: DataProductProperties;
}

@doc("The data product resource.")
@added(Versions.v2023_11_15)
model DataProductOptional is TrackedResource<DataProductProperties> {
  @doc("The data product resource name")
  @key("dataProductName")
  @segment("dataProducts")
  @path
  @pattern("^[a-z][a-z0-9]*$")
  @minLength(3)
  @maxLength(63)
  name: string;

  baseRequired: string;
  ...Legacy.ManagedServiceIdentityV4Property;
}

@doc("The data product properties.")
@added(Versions.v2023_11_15)
model DataProductProperties {
  requiredProp: EncryptionKeyDetails[];
  optionalProp?: EncryptionKeyDetails[];
}

@doc("Encryption key details.")
@added(Versions.v2023_11_15)
model EncryptionKeyDetails {
  @doc("The Uri of the key vault.")
  keyVaultUri: string;

  @doc("The name of the key vault key.")
  keyName: string;

  @doc("The version of the key vault key.")
  keyVersion: string;
}

@doc("The data type state")
@added(Versions.v2023_11_15)
union ControlState {
  string,

  @doc("Field to enable a setting.")
  "Enabled",

  @doc("Field to disable a setting.")
  "Disabled",
}

@doc("Details of Consumption Properties")
@added(Versions.v2023_11_15)
model ConsumptionEndpointsProperties {
  @doc("Ingestion url to upload the data.")
  @visibility(Lifecycle.Read)
  ingestionUrl?: string;

  @doc("Resource Id of ingestion endpoint.")
  @visibility(Lifecycle.Read)
  ingestionResourceId?: Azure.Core.armResourceIdentifier<[
    {
      type: "Microsoft.Storage/storageAccounts";
    }
  ]>;

  @doc("Url to consume file type.")
  @visibility(Lifecycle.Read)
  fileAccessUrl?: string;

  @doc("Resource Id of file access endpoint.")
  @visibility(Lifecycle.Read)
  fileAccessResourceId?: Azure.Core.armResourceIdentifier<[
    {
      type: "Microsoft.Storage/storageAccounts";
    }
  ]>;

  @doc("Url to consume the processed data.")
  @visibility(Lifecycle.Read)
  queryUrl?: string;

  @doc("Resource Id of query endpoint.")
  @visibility(Lifecycle.Read)
  queryResourceId?: Azure.Core.armResourceIdentifier<[
    {
      type: "Microsoft.Kusto/clusters";
    }
  ]>;
}

@doc("The details for storage account sas creation.")
@added(Versions.v2023_11_15)
model AccountSas {
  @doc("Sas token start timestamp.")
  startTimeStamp: utcDateTime;

  @doc("Sas token expiry timestamp.")
  expiryTimeStamp: utcDateTime;

  @doc("Ip Address")
  ipAddress: string;
}

@doc("Details of storage account sas token .")
@added(Versions.v2023_11_15)
model AccountSasToken {
  @doc("Field to specify storage account sas token.")
  @secret
  storageAccountSasToken: string;
}

@doc("Details of storage container account sas token .")
@added(Versions.v2023_11_15)
model ContainerSasToken {
  @doc("Field to specify storage container sas token.")
  @secret
  storageContainerSasToken: string;
}

@doc("Details for KeyVault.")
@added(Versions.v2023_11_15)
model KeyVaultInfo {
  @doc("key vault url.")
  keyVaultUrl: string;
}

@doc("The data type resource.")
@added(Versions.v2023_11_15)
@parentResource(DataProductOptional)
model DataType is ProxyResource<DataTypeProperties> {
  @doc("The data type name.")
  @segment("dataTypes")
  @key("dataTypeName")
  @path
  @pattern("^[a-z][a-z0-9-]*$")
  @minLength(3)
  @maxLength(63)
  name: string;

  foo: DataProductNetworkAclsRequired;
}

@doc("The data type properties")
@added(Versions.v2023_11_15)
model DataTypeProperties {
  @doc("Latest provisioning state  of data product.")
  @visibility(Lifecycle.Read)
  provisioningState?: ProvisioningState;

  @doc("State of data type.")
  @visibility(Lifecycle.Read, Lifecycle.Create, Lifecycle.Update)
  state?: DataTypeState;

  @doc("Reason for the state of data type.")
  @visibility(Lifecycle.Read)
  stateReason?: string;

  @doc("Field for storage output retention in days.")
  @visibility(Lifecycle.Read, Lifecycle.Create, Lifecycle.Update)
  storageOutputRetention?: int32;

  @doc("Field for database cache retention in days.")
  @visibility(Lifecycle.Read, Lifecycle.Create, Lifecycle.Update)
  databaseCacheRetention?: int32;

  @doc("Field for database data retention in days.")
  @visibility(Lifecycle.Read, Lifecycle.Create, Lifecycle.Update)
  databaseRetention?: int32;

  @doc("Url for data visualization.")
  @visibility(Lifecycle.Read)
  visualizationUrl?: string;
}

@doc("The data type state")
@added(Versions.v2023_11_15)
union DataTypeState {
  string,

  @doc("Field to specify stopped state.")
  "Stopped",

  @doc("Field to specify running state.")
  "Running",
}

@doc("The details for container sas creation.")
@added(Versions.v2023_11_15)
model ContainerSaS is AccountSas;

@doc("The details for role assignment response.")
@added(Versions.v2023_11_15)
model RoleAssignmentDetail is RoleAssignmentCommonProperties {
  @doc("Id of role assignment request")
  roleAssignmentId: string;
}

@doc("list role assignments.")
@added(Versions.v2023_11_15)
model ListRoleAssignments {
  @doc("Count of role assignments.")
  count: int32;

  @doc("list of role assignments")
  @extension("x-ms-identifiers", #["roleAssignmentId"])
  roleAssignmentResponse: RoleAssignmentDetail[];
}

@doc("The data type state")
@added(Versions.v2023_11_15)
union DataProductUserRole {
  string,

  @doc("Field to specify user of type Reader.")
  "Reader",

  @doc("""
    Field to specify user of type SensitiveReader.
    This user has privileged access to read sensitive data of a data product.
    """)
  "SensitiveReader",
}

@doc("The details for role assignment common properties.")
@added(Versions.v2023_11_15)
model RoleAssignmentCommonProperties {
  @doc("Role Id of the Built-In Role")
  roleId: string;

  @doc("Object ID of the AAD principal or security-group.")
  principalId: string;

  @doc("User name.")
  userName: string;

  @doc("Data Type Scope at which the role assignment is created.")
  dataTypeScope: string[];

  @doc("Type of the principal Id: User, Group or ServicePrincipal")
  principalType: string;

  @doc("Data Product role to be assigned to a user.")
  role: DataProductUserRole;
}

@doc("The data catalog resource.")
@singleton
@added(Versions.v2023_11_15)
model DataProductsCatalog is ProxyResource<DataProductsCatalogProperties> {
  #suppress "@azure-tools/typespec-azure-resource-manager/arm-resource-name-pattern" "existing api"
  @doc("The data catalog name")
  @key("dataProductsCatalogName")
  @segment("dataProductsCatalogs")
  @path
  name: string;
}

@doc("Details for data catalog properties.")
@added(Versions.v2023_11_15)
model DataProductsCatalogProperties {
  @doc("The data catalog provisioning state.")
  @visibility(Lifecycle.Read)
  provisioningState?: ProvisioningState;

  @doc("The data product publisher information.")
  @extension("x-ms-identifiers", #[])
  publishers: PublisherInformation[];
}

@doc("Details for Publisher Information.")
@added(Versions.v2023_11_15)
model PublisherInformation {
  @doc("Name of the publisher.")
  publisherName: string;

  @doc("Data product information.")
  @extension("x-ms-identifiers", #[])
  dataProducts: DataProductInformation[];
}

@added(Versions.v2023_11_15)
@doc("Data Product Information")
model DataProductInformation {
  @doc("Name of data product.")
  dataProductName: string;

  @doc("Description about data product.")
  description: string;

  @doc("Version information of data product.")
  @extension("x-ms-identifiers", #[])
  dataProductVersions: DataProductVersion[];
}

@doc("Data Product Version.")
@added(Versions.v2023_11_15)
model DataProductVersion {
  @doc("Version of data product")
  version: string;
}

@doc("Operations on data catalog resource.")
@added(Versions.v2023_11_15)
@armResourceOperations
interface DataProductsCatalogs {
  @doc("Retrieve data type resource.")
  get is ArmResourceRead<DataProductsCatalog>;

  @doc("List data catalog by resource group.")
  listByResourceGroup is ArmResourceListByParent<DataProductsCatalog>;

  @doc("List data catalog by subscription.")
  listBySubscription is ArmListBySubscription<DataProductsCatalog>;
}

@doc("Operations on data type resource.")
@added(Versions.v2023_11_15)
@armResourceOperations
interface DataTypes {
  #suppress "@azure-tools/typespec-azure-core/invalid-final-state" "MUST CHANGE ON NEXT UPDATE"
  @doc("Create data type resource.")
  @Azure.Core.useFinalStateVia("azure-async-operation")
  create is ArmResourceCreateOrUpdateAsync<
    DataType,
    LroHeaders = Azure.Core.Foundations.RetryAfterHeader
  >;

  @doc("Retrieve data type resource.")
  get is ArmResourceRead<DataType>;

  @doc("Update data type resource.")
  update is ArmCustomPatchAsync<
    DataType,
    Azure.ResourceManager.Foundations.ResourceUpdateModel<
      DataType,
      DataTypeProperties
    >
  >;

  @doc("Delete data type resource.")
  delete is ArmResourceDeleteWithoutOkAsync<DataType>;

  #suppress "@azure-tools/typespec-azure-resource-manager/arm-post-operation-response-codes" "Existing API"
  @doc("Delete data for data type.")
  deleteData is ArmResourceActionNoContentAsync<DataType, {}>;

  @doc("Generate sas token for storage container.")
  generateStorageContainerSasToken is ArmResourceActionSync<
    DataType,
    ContainerSaS,
    ContainerSasToken
  >;

  @doc("List data type by parent resource.")
  listByDataProduct is ArmResourceListByParent<DataType>;
}

@doc("Operations on data product resource.")
@added(Versions.v2023_11_15)
@armResourceOperations
interface DataProducts {
  #suppress "@azure-tools/typespec-azure-core/invalid-final-state" "MUST CHANGE ON NEXT UPDATE"
  @doc("Create data product resource.")
  @Azure.Core.useFinalStateVia("azure-async-operation")
  create is ArmResourceCreateOrUpdateAsync<
    DataProductOptional,
    LroHeaders = Azure.Core.Foundations.RetryAfterHeader
  >;

  @doc("Retrieve data product resource.")
  get is ArmResourceRead<DataProductOptional>;

  @doc("Update data product resource.")
  update is ArmCustomPatchAsync<
    DataProductOptional,
    Azure.ResourceManager.Foundations.ResourceUpdateModel<
      DataProductOptional,
      DataProductProperties
    >
  >;

  @doc("Delete data product resource.")
  delete is ArmResourceDeleteWithoutOkAsync<DataProductOptional>;

  @doc("Generate sas token for storage account.")
  generateStorageAccountSasToken is ArmResourceActionSync<
    DataProductOptional,
    AccountSas,
    AccountSasToken
  >;

  @doc("Initiate key rotation on Data Product.")
  rotateKey is ArmResourceActionNoContentSync<
    DataProductOptional,
    KeyVaultInfo
  >;

  @doc("Assign role to the data product.")
  addUserRole is ArmResourceActionSync<
    DataProductOptional,
    RoleAssignmentCommonProperties,
    RoleAssignmentDetail
  >;

  @doc("Remove role from the data product.")
  removeUserRole is ArmResourceActionNoContentSync<
    DataProductOptional,
    RoleAssignmentDetail
  >;

  @doc("List user roles associated with the data product.")
  listRolesAssignments is ArmResourceActionSync<
    DataProductOptional,
    {},
    ListRoleAssignments
  >;

  @doc("List data products by resource group.")
  listByResourceGroup is ArmResourceListByParent<DataProductOptional>;

  @doc("List data products by subscription.")
  listBySubscription is ArmListBySubscription<DataProductOptional>;
}

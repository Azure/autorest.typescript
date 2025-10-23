// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** model interface SavingsPlanPurchaseValidateRequest */
export interface SavingsPlanPurchaseValidateRequest {
  benefits?: SavingsPlanOrderAliasModel[];
}

export function savingsPlanPurchaseValidateRequestSerializer(
  item: SavingsPlanPurchaseValidateRequest,
): any {
  return {
    benefits: !item["benefits"]
      ? item["benefits"]
      : savingsPlanOrderAliasModelArraySerializer(item["benefits"]),
  };
}

export function savingsPlanOrderAliasModelArraySerializer(
  result: Array<SavingsPlanOrderAliasModel>,
): any[] {
  return result.map((item) => {
    return savingsPlanOrderAliasModelSerializer(item);
  });
}

export function savingsPlanOrderAliasModelArrayDeserializer(
  result: Array<SavingsPlanOrderAliasModel>,
): any[] {
  return result.map((item) => {
    return savingsPlanOrderAliasModelDeserializer(item);
  });
}

/** Savings plan order alias */
export interface SavingsPlanOrderAliasModel extends ProxyResource {
  /** Savings plan SKU */
  sku: ResourceSku;
  /** Resource provider kind */
  kind?: string;
  /** Savings plan order alias properties */
  properties?: SavingsPlanOrderAliasProperties;
}

export function savingsPlanOrderAliasModelSerializer(
  item: SavingsPlanOrderAliasModel,
): any {
  return {
    sku: resourceSkuSerializer(item["sku"]),
    kind: item["kind"],
    properties: !item["properties"]
      ? item["properties"]
      : savingsPlanOrderAliasPropertiesSerializer(item["properties"]),
  };
}

export function savingsPlanOrderAliasModelDeserializer(
  item: any,
): SavingsPlanOrderAliasModel {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    sku: resourceSkuDeserializer(item["sku"]),
    kind: item["kind"],
    properties: !item["properties"]
      ? item["properties"]
      : savingsPlanOrderAliasPropertiesDeserializer(item["properties"]),
  };
}

/** model interface ResourceSku */
export interface ResourceSku {
  name?: string;
}

export function resourceSkuSerializer(item: ResourceSku): any {
  return { name: item["name"] };
}

export function resourceSkuDeserializer(item: any): ResourceSku {
  return {
    name: item["name"],
  };
}

/** Savings plan properties */
export interface SavingsPlanOrderAliasProperties {
  /** Display name */
  displayName?: string;
  /** Identifier of the savings plan created */
  readonly savingsPlanOrderId?: string;
  /** Provisioning state */
  readonly provisioningState?: ProvisioningState;
  /** Subscription that will be charged for purchasing the benefit */
  billingScopeId?: string;
  /** Represent benefit term in ISO 8601 format. */
  term?: Term;
  /** Represents the billing plan in ISO 8601 format. Required only for monthly billing plans. */
  billingPlan?: BillingPlan;
  /** Type of the Applied Scope. */
  appliedScopeType?: AppliedScopeType;
  /** Properties specific to applied scope type. Not required if not applicable. */
  appliedScopeProperties?: AppliedScopeProperties;
  /** Commitment towards the benefit. */
  commitment?: Commitment;
  /** Setting this to true will automatically purchase a new benefit on the expiration date time. */
  renew?: boolean;
}

export function savingsPlanOrderAliasPropertiesSerializer(
  item: SavingsPlanOrderAliasProperties,
): any {
  return {
    displayName: item["displayName"],
    billingScopeId: item["billingScopeId"],
    term: item["term"],
    billingPlan: item["billingPlan"],
    appliedScopeType: item["appliedScopeType"],
    appliedScopeProperties: !item["appliedScopeProperties"]
      ? item["appliedScopeProperties"]
      : appliedScopePropertiesSerializer(item["appliedScopeProperties"]),
    commitment: !item["commitment"]
      ? item["commitment"]
      : commitmentSerializer(item["commitment"]),
    renew: item["renew"],
  };
}

export function savingsPlanOrderAliasPropertiesDeserializer(
  item: any,
): SavingsPlanOrderAliasProperties {
  return {
    displayName: item["displayName"],
    savingsPlanOrderId: item["savingsPlanOrderId"],
    provisioningState: item["provisioningState"],
    billingScopeId: item["billingScopeId"],
    term: item["term"],
    billingPlan: item["billingPlan"],
    appliedScopeType: item["appliedScopeType"],
    appliedScopeProperties: !item["appliedScopeProperties"]
      ? item["appliedScopeProperties"]
      : appliedScopePropertiesDeserializer(item["appliedScopeProperties"]),
    commitment: !item["commitment"]
      ? item["commitment"]
      : commitmentDeserializer(item["commitment"]),
    renew: item["renew"],
  };
}

/** Provisioning state */
export enum KnownProvisioningState {
  /** Creating */
  Creating = "Creating",
  /** PendingBilling */
  PendingBilling = "PendingBilling",
  /** ConfirmedBilling */
  ConfirmedBilling = "ConfirmedBilling",
  /** Created */
  Created = "Created",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Cancelled */
  Cancelled = "Cancelled",
  /** Expired */
  Expired = "Expired",
  /** Failed */
  Failed = "Failed",
}

/**
 * Provisioning state \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Creating** \
 * **PendingBilling** \
 * **ConfirmedBilling** \
 * **Created** \
 * **Succeeded** \
 * **Cancelled** \
 * **Expired** \
 * **Failed**
 */
export type ProvisioningState = string;

/** Represent benefit term in ISO 8601 format. */
export enum KnownTerm {
  /** P1Y */
  P1Y = "P1Y",
  /** P3Y */
  P3Y = "P3Y",
  /** P5Y */
  P5Y = "P5Y",
}

/**
 * Represent benefit term in ISO 8601 format. \
 * {@link KnownTerm} can be used interchangeably with Term,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **P1Y** \
 * **P3Y** \
 * **P5Y**
 */
export type Term = string;

/** Represents the billing plan in ISO 8601 format. Required only for monthly billing plans. */
export enum KnownBillingPlan {
  /** P1M */
  P1M = "P1M",
}

/**
 * Represents the billing plan in ISO 8601 format. Required only for monthly billing plans. \
 * {@link KnownBillingPlan} can be used interchangeably with BillingPlan,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **P1M**
 */
export type BillingPlan = string;

/** Type of the Applied Scope. */
export enum KnownAppliedScopeType {
  /** Single */
  Single = "Single",
  /** Shared */
  Shared = "Shared",
  /** ManagementGroup */
  ManagementGroup = "ManagementGroup",
}

/**
 * Type of the Applied Scope. \
 * {@link KnownAppliedScopeType} can be used interchangeably with AppliedScopeType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Single** \
 * **Shared** \
 * **ManagementGroup**
 */
export type AppliedScopeType = string;

/** Properties specific to applied scope type. Not required if not applicable. */
export interface AppliedScopeProperties {
  /** Tenant ID where the benefit is applied. */
  tenantId?: string;
  /** Fully-qualified identifier of the management group where the benefit must be applied. */
  managementGroupId?: string;
  /** Fully-qualified identifier of the subscription. */
  subscriptionId?: string;
  /** Fully-qualified identifier of the resource group. */
  resourceGroupId?: string;
  /** Display name */
  displayName?: string;
}

export function appliedScopePropertiesSerializer(
  item: AppliedScopeProperties,
): any {
  return {
    tenantId: item["tenantId"],
    managementGroupId: item["managementGroupId"],
    subscriptionId: item["subscriptionId"],
    resourceGroupId: item["resourceGroupId"],
    displayName: item["displayName"],
  };
}

export function appliedScopePropertiesDeserializer(
  item: any,
): AppliedScopeProperties {
  return {
    tenantId: item["tenantId"],
    managementGroupId: item["managementGroupId"],
    subscriptionId: item["subscriptionId"],
    resourceGroupId: item["resourceGroupId"],
    displayName: item["displayName"],
  };
}

/** Commitment towards the benefit. */
export interface Commitment extends Price {
  /** Commitment grain. */
  grain?: CommitmentGrain;
}

export function commitmentSerializer(item: Commitment): any {
  return {
    currencyCode: item["currencyCode"],
    amount: item["amount"],
    grain: item["grain"],
  };
}

export function commitmentDeserializer(item: any): Commitment {
  return {
    currencyCode: item["currencyCode"],
    amount: item["amount"],
    grain: item["grain"],
  };
}

/** Commitment grain. */
export enum KnownCommitmentGrain {
  /** Hourly */
  Hourly = "Hourly",
  /** FullTerm */
  FullTerm = "FullTerm",
  /** Unknown */
  Unknown = "Unknown",
}

/**
 * Commitment grain. \
 * {@link KnownCommitmentGrain} can be used interchangeably with CommitmentGrain,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Hourly** \
 * **FullTerm** \
 * **Unknown**
 */
export type CommitmentGrain = string;

/** model interface Price */
export interface Price {
  /** The ISO 4217 3-letter currency code for the currency used by this purchase record. */
  currencyCode?: string;
  amount?: number;
}

export function priceSerializer(item: Price): any {
  return { currencyCode: item["currencyCode"], amount: item["amount"] };
}

export function priceDeserializer(item: any): Price {
  return {
    currencyCode: item["currencyCode"],
    amount: item["amount"],
  };
}

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
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User**: The entity was created by a user. \
 * **Application**: The entity was created by an application. \
 * **ManagedIdentity**: The entity was created by a managed identity. \
 * **Key**: The entity was created by a key.
 */
export type CreatedByType = string;

/** model interface SavingsPlanValidateResponse */
export interface SavingsPlanValidateResponse {
  benefits?: SavingsPlanValidResponseProperty[];
  /** Url to get the next page. */
  nextLink?: string;
}

export function savingsPlanValidateResponseDeserializer(
  item: any,
): SavingsPlanValidateResponse {
  return {
    benefits: !item["benefits"]
      ? item["benefits"]
      : savingsPlanValidResponsePropertyArrayDeserializer(item["benefits"]),
    nextLink: item["nextLink"],
  };
}

export function savingsPlanValidResponsePropertyArrayDeserializer(
  result: Array<SavingsPlanValidResponseProperty>,
): any[] {
  return result.map((item) => {
    return savingsPlanValidResponsePropertyDeserializer(item);
  });
}

/** Benefit scope response property */
export interface SavingsPlanValidResponseProperty {
  /** Indicates if the provided input was valid */
  valid?: boolean;
  /** Failure reason code if the provided input was invalid */
  reasonCode?: string;
  /** Failure reason if the provided input was invalid */
  reason?: string;
}

export function savingsPlanValidResponsePropertyDeserializer(
  item: any,
): SavingsPlanValidResponseProperty {
  return {
    valid: item["valid"],
    reasonCode: item["reasonCode"],
    reason: item["reason"],
  };
}

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

/** Resource definition for Discounts. */
export interface Discount extends TrackedResource {
  /** Discount properties */
  properties?: DiscountPropertiesUnion;
  /** The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource. */
  managedBy?: string;
  /** Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. E.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. */
  kind?: string;
  /** The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. */
  readonly etag?: string;
  /** Managed service identity (system assigned and/or user assigned identities) */
  identity?: ManagedServiceIdentity;
  /** The resource model definition representing SKU */
  sku?: Sku;
  /** Plan for the resource. */
  plan?: Plan;
}

export function discountSerializer(item: Discount): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : discountPropertiesUnionSerializer(item["properties"]),
    managedBy: item["managedBy"],
    kind: item["kind"],
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentitySerializer(item["identity"]),
    sku: !item["sku"] ? item["sku"] : skuSerializer(item["sku"]),
    plan: !item["plan"] ? item["plan"] : planSerializer(item["plan"]),
  };
}

export function discountDeserializer(item: any): Discount {
  return {
    tags: item["tags"],
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : discountPropertiesUnionDeserializer(item["properties"]),
    managedBy: item["managedBy"],
    kind: item["kind"],
    etag: item["etag"],
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentityDeserializer(item["identity"]),
    sku: !item["sku"] ? item["sku"] : skuDeserializer(item["sku"]),
    plan: !item["plan"] ? item["plan"] : planDeserializer(item["plan"]),
  };
}

/** Properties belonging to discounts. */
export interface DiscountProperties {
  /** This defines whether the entity being created is primary or affiliate. Supported values: primary, affiliate. Validation: Required, must match one of the 2 values. */
  /** The discriminator possible values: Affiliate, Primary */
  entityType: DiscountEntityType;
  /** This is the catalog UPN for the product. */
  productCode: string;
  /** Start date of the discount. Value is the date the discount started or will start in the future. */
  startAt: Date;
  /** This is the globally unique identifier of the Discount which will not change for the lifetime of the Discount. */
  systemId?: string;
  /** The state of the resource. Supported values are Pending, Failed, Succeeded, Canceled. */
  readonly provisioningState?: DiscountProvisioningState;
  /** Billing account resource id where the discount metadata is present. */
  readonly billingAccountResourceId?: string;
  /** Billing profile resource id where the discount is scoped to. */
  readonly billingProfileResourceId?: string;
  /** Customer resource id where the discount is scoped to. */
  readonly customerResourceId?: string;
  /** This defines a user friendly display name for the discount. */
  displayName?: string;
  /** Represents the current status of the discount. */
  readonly status?: DiscountStatus;
  /** Fully-qualified identifier of the benefit under applicable benefit list. */
  readonly benefitResourceId?: string;
  /** List of applied scopes supported for discounts. */
  appliedScopeType?: DiscountAppliedScopeType;
}

export function discountPropertiesSerializer(item: DiscountProperties): any {
  return {
    entityType: item["entityType"],
    productCode: item["productCode"],
    startAt: item["startAt"].toISOString(),
    systemId: item["systemId"],
    displayName: item["displayName"],
    appliedScopeType: item["appliedScopeType"],
  };
}

export function discountPropertiesDeserializer(item: any): DiscountProperties {
  return {
    entityType: item["entityType"],
    productCode: item["productCode"],
    startAt: new Date(item["startAt"]),
    systemId: item["systemId"],
    provisioningState: item["provisioningState"],
    billingAccountResourceId: item["billingAccountResourceId"],
    billingProfileResourceId: item["billingProfileResourceId"],
    customerResourceId: item["customerResourceId"],
    displayName: item["displayName"],
    status: item["status"],
    benefitResourceId: item["benefitResourceId"],
    appliedScopeType: item["appliedScopeType"],
  };
}

/** Alias for DiscountPropertiesUnion */
export type DiscountPropertiesUnion =
  | EntityTypeAffiliateDiscount
  | EntityTypePrimaryDiscount
  | DiscountProperties;

export function discountPropertiesUnionSerializer(
  item: DiscountPropertiesUnion,
): any {
  switch (item.entityType) {
    case "Affiliate":
      return entityTypeAffiliateDiscountSerializer(
        item as EntityTypeAffiliateDiscount,
      );

    case "Primary":
      return entityTypePrimaryDiscountSerializer(
        item as EntityTypePrimaryDiscount,
      );

    default:
      return discountPropertiesSerializer(item);
  }
}

export function discountPropertiesUnionDeserializer(
  item: any,
): DiscountPropertiesUnion {
  switch (item.entityType) {
    case "Affiliate":
      return entityTypeAffiliateDiscountDeserializer(
        item as EntityTypeAffiliateDiscount,
      );

    case "Primary":
      return entityTypePrimaryDiscountDeserializer(
        item as EntityTypePrimaryDiscount,
      );

    default:
      return discountPropertiesDeserializer(item);
  }
}

/** This defines whether the entity being created is primary or affiliate. Supported values: primary, affiliate. Validation: Required, must match one of the 2 values. */
export enum KnownDiscountEntityType {
  /** Primary */
  Primary = "Primary",
  /** Affiliate */
  Affiliate = "Affiliate",
}

/**
 * This defines whether the entity being created is primary or affiliate. Supported values: primary, affiliate. Validation: Required, must match one of the 2 values. \
 * {@link KnownDiscountEntityType} can be used interchangeably with DiscountEntityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Primary** \
 * **Affiliate**
 */
export type DiscountEntityType = string;

/** Provisioning states of Discount. */
export enum KnownDiscountProvisioningState {
  /** Unknown */
  Unknown = "Unknown",
  /** Pending */
  Pending = "Pending",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Canceled */
  Canceled = "Canceled",
  /** Failed */
  Failed = "Failed",
}

/**
 * Provisioning states of Discount. \
 * {@link KnownDiscountProvisioningState} can be used interchangeably with DiscountProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Pending** \
 * **Succeeded** \
 * **Canceled** \
 * **Failed**
 */
export type DiscountProvisioningState = string;

/** Represents the current status of the discount. */
export enum KnownDiscountStatus {
  /** Active */
  Active = "Active",
  /** Pending */
  Pending = "Pending",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
  /** Expired */
  Expired = "Expired",
}

/**
 * Represents the current status of the discount. \
 * {@link KnownDiscountStatus} can be used interchangeably with DiscountStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Active** \
 * **Pending** \
 * **Failed** \
 * **Canceled** \
 * **Expired**
 */
export type DiscountStatus = string;

/** List of applied scopes supported for discounts. */
export enum KnownDiscountAppliedScopeType {
  /** BillingAccount */
  BillingAccount = "BillingAccount",
  /** BillingProfile */
  BillingProfile = "BillingProfile",
  /** Customer */
  Customer = "Customer",
}

/**
 * List of applied scopes supported for discounts. \
 * {@link KnownDiscountAppliedScopeType} can be used interchangeably with DiscountAppliedScopeType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **BillingAccount** \
 * **BillingProfile** \
 * **Customer**
 */
export type DiscountAppliedScopeType = string;

/** Entity type for affiliate discounts */
export interface EntityTypeAffiliateDiscount extends DiscountProperties {
  /** This will be present in the response if the primary has a resource ID */
  readonly primaryResourceId?: string;
  /** End date of the discount. No duration will be supported. Allowed value is any date greater than or equal to startDate. */
  readonly endAt?: Date;
  /** This defines whether the entity being created is primary or affiliate. Supported values: primary, affiliate. Validation: Required, must match one of the 2 values. */
  entityType: "Affiliate";
}

export function entityTypeAffiliateDiscountSerializer(
  item: EntityTypeAffiliateDiscount,
): any {
  return {
    entityType: item["entityType"],
    productCode: item["productCode"],
    startAt: item["startAt"].toISOString(),
    systemId: item["systemId"],
    displayName: item["displayName"],
    appliedScopeType: item["appliedScopeType"],
  };
}

export function entityTypeAffiliateDiscountDeserializer(
  item: any,
): EntityTypeAffiliateDiscount {
  return {
    entityType: item["entityType"],
    productCode: item["productCode"],
    startAt: new Date(item["startAt"]),
    systemId: item["systemId"],
    provisioningState: item["provisioningState"],
    billingAccountResourceId: item["billingAccountResourceId"],
    billingProfileResourceId: item["billingProfileResourceId"],
    customerResourceId: item["customerResourceId"],
    displayName: item["displayName"],
    status: item["status"],
    benefitResourceId: item["benefitResourceId"],
    appliedScopeType: item["appliedScopeType"],
    primaryResourceId: item["primaryResourceId"],
    endAt: !item["endAt"] ? item["endAt"] : new Date(item["endAt"]),
  };
}

/** Entity type for primary discounts */
export interface EntityTypePrimaryDiscount extends DiscountProperties {
  /** This defines the conditions for a given discount type. */
  discountTypeProperties?: DiscountTypePropertiesUnion;
  /** End date of the discount. No duration will be supported. Allowed value is any date greater than or equal to startDate. */
  endAt: Date;
  /** This defines whether the entity being created is primary or affiliate. Supported values: primary, affiliate. Validation: Required, must match one of the 2 values. */
  entityType: "Primary";
}

export function entityTypePrimaryDiscountSerializer(
  item: EntityTypePrimaryDiscount,
): any {
  return {
    entityType: item["entityType"],
    productCode: item["productCode"],
    startAt: item["startAt"].toISOString(),
    systemId: item["systemId"],
    displayName: item["displayName"],
    appliedScopeType: item["appliedScopeType"],
    discountTypeProperties: !item["discountTypeProperties"]
      ? item["discountTypeProperties"]
      : discountTypePropertiesUnionSerializer(item["discountTypeProperties"]),
    endAt: item["endAt"].toISOString(),
  };
}

export function entityTypePrimaryDiscountDeserializer(
  item: any,
): EntityTypePrimaryDiscount {
  return {
    entityType: item["entityType"],
    productCode: item["productCode"],
    startAt: new Date(item["startAt"]),
    systemId: item["systemId"],
    provisioningState: item["provisioningState"],
    billingAccountResourceId: item["billingAccountResourceId"],
    billingProfileResourceId: item["billingProfileResourceId"],
    customerResourceId: item["customerResourceId"],
    displayName: item["displayName"],
    status: item["status"],
    benefitResourceId: item["benefitResourceId"],
    appliedScopeType: item["appliedScopeType"],
    discountTypeProperties: !item["discountTypeProperties"]
      ? item["discountTypeProperties"]
      : discountTypePropertiesUnionDeserializer(item["discountTypeProperties"]),
    endAt: new Date(item["endAt"]),
  };
}

/** This defines the conditions for a given discount type. */
export interface DiscountTypeProperties {
  /** Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency. */
  /** The discriminator possible values: ProductFamily, Product, Sku, CustomPrice, CustomPriceMultiCurrency */
  discountType: DiscountType;
  /** The customer action on which the discount is applied. Supported values are Purchase, Consume, and Renew. Validation: Required, one of supported values. */
  applyDiscountOn: ApplyDiscountOn;
  /** Discount percentage provided for the customer. Validation: Required unless this is a price rule. */
  discountPercentage?: number;
  /** The discount combination rule when there are multiple applicable custom prices. Validation: Required. Supported values are Stackable and BestOf. */
  discountCombinationRule?: DiscountCombinationRule;
  /** Set only in price guarantee scenario. */
  priceGuaranteeProperties?: PriceGuaranteeProperties;
  /** Array of conditions for the discount. Validation: Optional. Maximum length is 1000. */
  conditions?: ConditionsItem[];
}

export function discountTypePropertiesSerializer(
  item: DiscountTypeProperties,
): any {
  return {
    discountType: item["discountType"],
    applyDiscountOn: item["applyDiscountOn"],
    discountPercentage: item["discountPercentage"],
    discountCombinationRule: item["discountCombinationRule"],
    priceGuaranteeProperties: !item["priceGuaranteeProperties"]
      ? item["priceGuaranteeProperties"]
      : priceGuaranteePropertiesSerializer(item["priceGuaranteeProperties"]),
    conditions: !item["conditions"]
      ? item["conditions"]
      : conditionsItemArraySerializer(item["conditions"]),
  };
}

export function discountTypePropertiesDeserializer(
  item: any,
): DiscountTypeProperties {
  return {
    discountType: item["discountType"],
    applyDiscountOn: item["applyDiscountOn"],
    discountPercentage: item["discountPercentage"],
    discountCombinationRule: item["discountCombinationRule"],
    priceGuaranteeProperties: !item["priceGuaranteeProperties"]
      ? item["priceGuaranteeProperties"]
      : priceGuaranteePropertiesDeserializer(item["priceGuaranteeProperties"]),
    conditions: !item["conditions"]
      ? item["conditions"]
      : conditionsItemArrayDeserializer(item["conditions"]),
  };
}

/** Alias for DiscountTypePropertiesUnion */
export type DiscountTypePropertiesUnion =
  | DiscountTypeProductFamily
  | DiscountTypeProduct
  | DiscountTypeProductSku
  | DiscountTypeCustomPriceUnion
  | DiscountTypeProperties;

export function discountTypePropertiesUnionSerializer(
  item: DiscountTypePropertiesUnion,
): any {
  switch (item.discountType) {
    case "ProductFamily":
      return discountTypeProductFamilySerializer(
        item as DiscountTypeProductFamily,
      );

    case "Product":
      return discountTypeProductSerializer(item as DiscountTypeProduct);

    case "Sku":
      return discountTypeProductSkuSerializer(item as DiscountTypeProductSku);

    case "CustomPrice":
    case "CustomPriceMultiCurrency":
      return discountTypeCustomPriceUnionSerializer(
        item as DiscountTypeCustomPriceUnion,
      );

    default:
      return discountTypePropertiesSerializer(item);
  }
}

export function discountTypePropertiesUnionDeserializer(
  item: any,
): DiscountTypePropertiesUnion {
  switch (item.discountType) {
    case "ProductFamily":
      return discountTypeProductFamilyDeserializer(
        item as DiscountTypeProductFamily,
      );

    case "Product":
      return discountTypeProductDeserializer(item as DiscountTypeProduct);

    case "Sku":
      return discountTypeProductSkuDeserializer(item as DiscountTypeProductSku);

    case "CustomPrice":
    case "CustomPriceMultiCurrency":
      return discountTypeCustomPriceUnionDeserializer(
        item as DiscountTypeCustomPriceUnion,
      );

    default:
      return discountTypePropertiesDeserializer(item);
  }
}

/** Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency. */
export enum KnownDiscountType {
  /** ProductFamily */
  ProductFamily = "ProductFamily",
  /** Product */
  Product = "Product",
  /** Sku */
  Sku = "Sku",
  /** CustomPrice */
  CustomPrice = "CustomPrice",
  /** CustomPriceMultiCurrency */
  CustomPriceMultiCurrency = "CustomPriceMultiCurrency",
}

/**
 * Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency. \
 * {@link KnownDiscountType} can be used interchangeably with DiscountType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ProductFamily** \
 * **Product** \
 * **Sku** \
 * **CustomPrice** \
 * **CustomPriceMultiCurrency**
 */
export type DiscountType = string;

/** The customer action on which the discount is applied. Supported values are Purchase, Consume, and Renew. Validation: Required, one of supported values. */
export enum KnownApplyDiscountOn {
  /** Purchase */
  Purchase = "Purchase",
  /** Consume */
  Consume = "Consume",
  /** Renew */
  Renew = "Renew",
}

/**
 * The customer action on which the discount is applied. Supported values are Purchase, Consume, and Renew. Validation: Required, one of supported values. \
 * {@link KnownApplyDiscountOn} can be used interchangeably with ApplyDiscountOn,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Purchase** \
 * **Consume** \
 * **Renew**
 */
export type ApplyDiscountOn = string;

/** The discount combination rule when there are multiple applicable custom prices. Validation: Required. Supported values are Stackable and BestOf. */
export enum KnownDiscountCombinationRule {
  /** BestOf */
  BestOf = "BestOf",
  /** Stackable */
  Stackable = "Stackable",
}

/**
 * The discount combination rule when there are multiple applicable custom prices. Validation: Required. Supported values are Stackable and BestOf. \
 * {@link KnownDiscountCombinationRule} can be used interchangeably with DiscountCombinationRule,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **BestOf** \
 * **Stackable**
 */
export type DiscountCombinationRule = string;

/** Set only in price guarantee scenario. */
export interface PriceGuaranteeProperties {
  /** Supported values: Protected, Locked */
  pricingPolicy?: PricingPolicy;
  /** The date on which prices are to be used for guarantee calculation. Validation: expected to be 00 hours, Format: 2024-09-30T00:00:00Z. Must be in UTC. */
  priceGuaranteeDate?: Date;
}

export function priceGuaranteePropertiesSerializer(
  item: PriceGuaranteeProperties,
): any {
  return {
    pricingPolicy: item["pricingPolicy"],
    priceGuaranteeDate: !item["priceGuaranteeDate"]
      ? item["priceGuaranteeDate"]
      : item["priceGuaranteeDate"].toISOString(),
  };
}

export function priceGuaranteePropertiesDeserializer(
  item: any,
): PriceGuaranteeProperties {
  return {
    pricingPolicy: item["pricingPolicy"],
    priceGuaranteeDate: !item["priceGuaranteeDate"]
      ? item["priceGuaranteeDate"]
      : new Date(item["priceGuaranteeDate"]),
  };
}

/** Supported values: Protected, Locked */
export enum KnownPricingPolicy {
  /** Protected */
  Protected = "Protected",
  /** Locked */
  Locked = "Locked",
}

/**
 * Supported values: Protected, Locked \
 * {@link KnownPricingPolicy} can be used interchangeably with PricingPolicy,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Protected** \
 * **Locked**
 */
export type PricingPolicy = string;

export function conditionsItemArraySerializer(
  result: Array<ConditionsItem>,
): any[] {
  return result.map((item) => {
    return conditionsItemSerializer(item);
  });
}

export function conditionsItemArrayDeserializer(
  result: Array<ConditionsItem>,
): any[] {
  return result.map((item) => {
    return conditionsItemDeserializer(item);
  });
}

/** Condition for a discount. */
export interface ConditionsItem {
  conditionName?: string;
  /** These items are open-ended strings. */
  value?: string[];
  type?: string;
}

export function conditionsItemSerializer(item: ConditionsItem): any {
  return {
    conditionName: item["conditionName"],
    value: !item["value"]
      ? item["value"]
      : item["value"].map((p: any) => {
          return p;
        }),
    type: item["type"],
  };
}

export function conditionsItemDeserializer(item: any): ConditionsItem {
  return {
    conditionName: item["conditionName"],
    value: !item["value"]
      ? item["value"]
      : item["value"].map((p: any) => {
          return p;
        }),
    type: item["type"],
  };
}

/** Discount type properties including product family name */
export interface DiscountTypeProductFamily extends DiscountTypeProperties {
  /** Product family for which the discount is given. Validation: Optional */
  productFamilyName?: string;
  /** Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency. */
  discountType: "ProductFamily";
}

export function discountTypeProductFamilySerializer(
  item: DiscountTypeProductFamily,
): any {
  return {
    discountType: item["discountType"],
    applyDiscountOn: item["applyDiscountOn"],
    discountPercentage: item["discountPercentage"],
    discountCombinationRule: item["discountCombinationRule"],
    priceGuaranteeProperties: !item["priceGuaranteeProperties"]
      ? item["priceGuaranteeProperties"]
      : priceGuaranteePropertiesSerializer(item["priceGuaranteeProperties"]),
    conditions: !item["conditions"]
      ? item["conditions"]
      : conditionsItemArraySerializer(item["conditions"]),
    productFamilyName: item["productFamilyName"],
  };
}

export function discountTypeProductFamilyDeserializer(
  item: any,
): DiscountTypeProductFamily {
  return {
    discountType: item["discountType"],
    applyDiscountOn: item["applyDiscountOn"],
    discountPercentage: item["discountPercentage"],
    discountCombinationRule: item["discountCombinationRule"],
    priceGuaranteeProperties: !item["priceGuaranteeProperties"]
      ? item["priceGuaranteeProperties"]
      : priceGuaranteePropertiesDeserializer(item["priceGuaranteeProperties"]),
    conditions: !item["conditions"]
      ? item["conditions"]
      : conditionsItemArrayDeserializer(item["conditions"]),
    productFamilyName: item["productFamilyName"],
  };
}

/** Discount type properties including product family name and product id. */
export interface DiscountTypeProduct extends DiscountTypeProperties {
  /** Product family for which the discount is given. Validation: Optional */
  productFamilyName?: string;
  /** Product ID for which the discount is given. Validation: Optional. No specific format, example: DZH318Z09V6F */
  productId?: string;
  /** Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency. */
  discountType: "Product";
}

export function discountTypeProductSerializer(item: DiscountTypeProduct): any {
  return {
    discountType: item["discountType"],
    applyDiscountOn: item["applyDiscountOn"],
    discountPercentage: item["discountPercentage"],
    discountCombinationRule: item["discountCombinationRule"],
    priceGuaranteeProperties: !item["priceGuaranteeProperties"]
      ? item["priceGuaranteeProperties"]
      : priceGuaranteePropertiesSerializer(item["priceGuaranteeProperties"]),
    conditions: !item["conditions"]
      ? item["conditions"]
      : conditionsItemArraySerializer(item["conditions"]),
    productFamilyName: item["productFamilyName"],
    productId: item["productId"],
  };
}

export function discountTypeProductDeserializer(
  item: any,
): DiscountTypeProduct {
  return {
    discountType: item["discountType"],
    applyDiscountOn: item["applyDiscountOn"],
    discountPercentage: item["discountPercentage"],
    discountCombinationRule: item["discountCombinationRule"],
    priceGuaranteeProperties: !item["priceGuaranteeProperties"]
      ? item["priceGuaranteeProperties"]
      : priceGuaranteePropertiesDeserializer(item["priceGuaranteeProperties"]),
    conditions: !item["conditions"]
      ? item["conditions"]
      : conditionsItemArrayDeserializer(item["conditions"]),
    productFamilyName: item["productFamilyName"],
    productId: item["productId"],
  };
}

/** Discount type properties including product family name, product id, and sku id. */
export interface DiscountTypeProductSku extends DiscountTypeProperties {
  /** Product family for which the discount is given. Validation: Optional */
  productFamilyName?: string;
  /** Product ID for which the discount is given. Validation: Optional. No specific format, example: DZH318Z09V6F */
  productId?: string;
  /** ResourceSku for the given discount. Validation: Optional. */
  skuId?: string;
  /** Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency. */
  discountType: "Sku";
}

export function discountTypeProductSkuSerializer(
  item: DiscountTypeProductSku,
): any {
  return {
    discountType: item["discountType"],
    applyDiscountOn: item["applyDiscountOn"],
    discountPercentage: item["discountPercentage"],
    discountCombinationRule: item["discountCombinationRule"],
    priceGuaranteeProperties: !item["priceGuaranteeProperties"]
      ? item["priceGuaranteeProperties"]
      : priceGuaranteePropertiesSerializer(item["priceGuaranteeProperties"]),
    conditions: !item["conditions"]
      ? item["conditions"]
      : conditionsItemArraySerializer(item["conditions"]),
    productFamilyName: item["productFamilyName"],
    productId: item["productId"],
    skuId: item["skuId"],
  };
}

export function discountTypeProductSkuDeserializer(
  item: any,
): DiscountTypeProductSku {
  return {
    discountType: item["discountType"],
    applyDiscountOn: item["applyDiscountOn"],
    discountPercentage: item["discountPercentage"],
    discountCombinationRule: item["discountCombinationRule"],
    priceGuaranteeProperties: !item["priceGuaranteeProperties"]
      ? item["priceGuaranteeProperties"]
      : priceGuaranteePropertiesDeserializer(item["priceGuaranteeProperties"]),
    conditions: !item["conditions"]
      ? item["conditions"]
      : conditionsItemArrayDeserializer(item["conditions"]),
    productFamilyName: item["productFamilyName"],
    productId: item["productId"],
    skuId: item["skuId"],
  };
}

/** Discount type properties including product family name, product id, sku, and custom price properties. Allows a single entry in marketSetPrices. */
export interface DiscountTypeCustomPrice extends DiscountTypeProperties {
  /** Product family for which the discount is given. Validation: Optional */
  productFamilyName?: string;
  /** Product ID for which the discount is given. Validation: Optional. No specific format, example: DZH318Z09V6F */
  productId?: string;
  /** ResourceSku for the given discount. Validation: Optional. */
  skuId?: string;
  /** Custom price properties for a given discount. */
  customPriceProperties?: CustomPriceProperties;
  /** Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency. */
  /** The discriminator possible values: CustomPriceMultiCurrency */
  discountType: "CustomPrice" | "CustomPriceMultiCurrency";
}

export function discountTypeCustomPriceSerializer(
  item: DiscountTypeCustomPrice,
): any {
  return {
    discountType: item["discountType"],
    applyDiscountOn: item["applyDiscountOn"],
    discountPercentage: item["discountPercentage"],
    discountCombinationRule: item["discountCombinationRule"],
    priceGuaranteeProperties: !item["priceGuaranteeProperties"]
      ? item["priceGuaranteeProperties"]
      : priceGuaranteePropertiesSerializer(item["priceGuaranteeProperties"]),
    conditions: !item["conditions"]
      ? item["conditions"]
      : conditionsItemArraySerializer(item["conditions"]),
    productFamilyName: item["productFamilyName"],
    productId: item["productId"],
    skuId: item["skuId"],
    customPriceProperties: !item["customPriceProperties"]
      ? item["customPriceProperties"]
      : customPricePropertiesSerializer(item["customPriceProperties"]),
  };
}

export function discountTypeCustomPriceDeserializer(
  item: any,
): DiscountTypeCustomPrice {
  return {
    discountType: item["discountType"],
    applyDiscountOn: item["applyDiscountOn"],
    discountPercentage: item["discountPercentage"],
    discountCombinationRule: item["discountCombinationRule"],
    priceGuaranteeProperties: !item["priceGuaranteeProperties"]
      ? item["priceGuaranteeProperties"]
      : priceGuaranteePropertiesDeserializer(item["priceGuaranteeProperties"]),
    conditions: !item["conditions"]
      ? item["conditions"]
      : conditionsItemArrayDeserializer(item["conditions"]),
    productFamilyName: item["productFamilyName"],
    productId: item["productId"],
    skuId: item["skuId"],
    customPriceProperties: !item["customPriceProperties"]
      ? item["customPriceProperties"]
      : customPricePropertiesDeserializer(item["customPriceProperties"]),
  };
}

/** Alias for DiscountTypeCustomPriceUnion */
export type DiscountTypeCustomPriceUnion =
  | DiscountTypeCustomPriceMultiCurrency
  | DiscountTypeCustomPrice;

export function discountTypeCustomPriceUnionSerializer(
  item: DiscountTypeCustomPriceUnion,
): any {
  switch (item.discountType) {
    case "CustomPriceMultiCurrency":
      return discountTypeCustomPriceMultiCurrencySerializer(
        item as DiscountTypeCustomPriceMultiCurrency,
      );

    default:
      return discountTypeCustomPriceSerializer(item);
  }
}

export function discountTypeCustomPriceUnionDeserializer(
  item: any,
): DiscountTypeCustomPriceUnion {
  switch (item.discountType) {
    case "CustomPriceMultiCurrency":
      return discountTypeCustomPriceMultiCurrencyDeserializer(
        item as DiscountTypeCustomPriceMultiCurrency,
      );

    default:
      return discountTypeCustomPriceDeserializer(item);
  }
}

/** Custom price properties for a given discount. */
export interface CustomPriceProperties {
  /** The type of the priceable node pricing rule. Validation: Required. Supported values are fixedPriceLock, fixedListPrice, and priceCeiling. */
  ruleType: DiscountRuleType;
  /** The catalog instance where the priceable node lives. Validation: Required. No defined format, will vary per team. */
  catalogId: string;
  /** The set of BigCat claims. Validation: Required. Must contain AgreementType, NationalCloud, and PricingAudience claims. Additionally requires AccessPass claim when creating custom price with action == consume on the pricing instructions. */
  catalogClaims: CatalogClaimsItem[];
  /** The term units for the priceable node. Validation: Optional, Maximum length 128 characters. Must be present if and only if the availability derived by market, product, sku, and claims has terms. */
  termUnits?: string;
  /** The billing period of the priceable node. Validation: Optional, Maximum length 128 characters. Only allowed if the availability derived by market, product, sku, and claims has terms and at least one of those terms has a billing period. When specified, termUnits must be specified. */
  billingPeriod?: string;
  /** Must be present if the market, product, sku, and claims, and optional term information resolves to multiple availabilities that only differ by meter type. Validation: Maximum length 128 characters. */
  meterType?: string;
  /** The set of market set prices of the priceable node. Validation: Required. Must contain at least one element. */
  marketSetPrices: MarketSetPricesItems[];
}

export function customPricePropertiesSerializer(
  item: CustomPriceProperties,
): any {
  return {
    ruleType: item["ruleType"],
    catalogId: item["catalogId"],
    catalogClaims: catalogClaimsItemArraySerializer(item["catalogClaims"]),
    termUnits: item["termUnits"],
    billingPeriod: item["billingPeriod"],
    meterType: item["meterType"],
    marketSetPrices: marketSetPricesItemsArraySerializer(
      item["marketSetPrices"],
    ),
  };
}

export function customPricePropertiesDeserializer(
  item: any,
): CustomPriceProperties {
  return {
    ruleType: item["ruleType"],
    catalogId: item["catalogId"],
    catalogClaims: catalogClaimsItemArrayDeserializer(item["catalogClaims"]),
    termUnits: item["termUnits"],
    billingPeriod: item["billingPeriod"],
    meterType: item["meterType"],
    marketSetPrices: marketSetPricesItemsArrayDeserializer(
      item["marketSetPrices"],
    ),
  };
}

/** The type of the priceable node pricing rule. Validation: Required. Supported values are fixedPriceLock, fixedListPrice, and priceCeiling. */
export enum KnownDiscountRuleType {
  /** FixedPriceLock */
  FixedPriceLock = "FixedPriceLock",
  /** FixedListPrice */
  FixedListPrice = "FixedListPrice",
  /** PriceCeiling */
  PriceCeiling = "PriceCeiling",
}

/**
 * The type of the priceable node pricing rule. Validation: Required. Supported values are fixedPriceLock, fixedListPrice, and priceCeiling. \
 * {@link KnownDiscountRuleType} can be used interchangeably with DiscountRuleType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **FixedPriceLock** \
 * **FixedListPrice** \
 * **PriceCeiling**
 */
export type DiscountRuleType = string;

export function catalogClaimsItemArraySerializer(
  result: Array<CatalogClaimsItem>,
): any[] {
  return result.map((item) => {
    return catalogClaimsItemSerializer(item);
  });
}

export function catalogClaimsItemArrayDeserializer(
  result: Array<CatalogClaimsItem>,
): any[] {
  return result.map((item) => {
    return catalogClaimsItemDeserializer(item);
  });
}

/** Catalog claim for a discount. */
export interface CatalogClaimsItem {
  catalogClaimsItemType?: string;
  value?: string;
}

export function catalogClaimsItemSerializer(item: CatalogClaimsItem): any {
  return {
    catalogClaimsItemType: item["catalogClaimsItemType"],
    value: item["value"],
  };
}

export function catalogClaimsItemDeserializer(item: any): CatalogClaimsItem {
  return {
    catalogClaimsItemType: item["catalogClaimsItemType"],
    value: item["value"],
  };
}

export function marketSetPricesItemsArraySerializer(
  result: Array<MarketSetPricesItems>,
): any[] {
  return result.map((item) => {
    return marketSetPricesItemsSerializer(item);
  });
}

export function marketSetPricesItemsArrayDeserializer(
  result: Array<MarketSetPricesItems>,
): any[] {
  return result.map((item) => {
    return marketSetPricesItemsDeserializer(item);
  });
}

/** Items in the MarketSetPrices array. */
export interface MarketSetPricesItems {
  markets: string[];
  /** The locked price for the priceable node. Validation: Required. Must be greater than or equal to 0. If the case of billing plans. This represents the price for each cycle charge. */
  value: number;
  /** The currency of the locked price value. Validation: Required. Must be a valid ISO 4217 3-letter currency code. */
  currency: string;
}

export function marketSetPricesItemsSerializer(
  item: MarketSetPricesItems,
): any {
  return {
    markets: item["markets"].map((p: any) => {
      return p;
    }),
    value: item["value"],
    currency: item["currency"],
  };
}

export function marketSetPricesItemsDeserializer(
  item: any,
): MarketSetPricesItems {
  return {
    markets: item["markets"].map((p: any) => {
      return p;
    }),
    value: item["value"],
    currency: item["currency"],
  };
}

/** Discount type properties including product family name, product id, sku, and custom price properties. Allows multiple entries in marketSetPrices. */
export interface DiscountTypeCustomPriceMultiCurrency
  extends DiscountTypeCustomPrice {
  /** Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency. */
  discountType: "CustomPriceMultiCurrency";
}

export function discountTypeCustomPriceMultiCurrencySerializer(
  item: DiscountTypeCustomPriceMultiCurrency,
): any {
  return {
    productFamilyName: item["productFamilyName"],
    productId: item["productId"],
    skuId: item["skuId"],
    customPriceProperties: !item["customPriceProperties"]
      ? item["customPriceProperties"]
      : customPricePropertiesSerializer(item["customPriceProperties"]),
    discountType: item["discountType"],
    applyDiscountOn: item["applyDiscountOn"],
    discountPercentage: item["discountPercentage"],
    discountCombinationRule: item["discountCombinationRule"],
    priceGuaranteeProperties: !item["priceGuaranteeProperties"]
      ? item["priceGuaranteeProperties"]
      : priceGuaranteePropertiesSerializer(item["priceGuaranteeProperties"]),
    conditions: !item["conditions"]
      ? item["conditions"]
      : conditionsItemArraySerializer(item["conditions"]),
  };
}

export function discountTypeCustomPriceMultiCurrencyDeserializer(
  item: any,
): DiscountTypeCustomPriceMultiCurrency {
  return {
    productFamilyName: item["productFamilyName"],
    productId: item["productId"],
    skuId: item["skuId"],
    customPriceProperties: !item["customPriceProperties"]
      ? item["customPriceProperties"]
      : customPricePropertiesDeserializer(item["customPriceProperties"]),
    discountType: item["discountType"],
    applyDiscountOn: item["applyDiscountOn"],
    discountPercentage: item["discountPercentage"],
    discountCombinationRule: item["discountCombinationRule"],
    priceGuaranteeProperties: !item["priceGuaranteeProperties"]
      ? item["priceGuaranteeProperties"]
      : priceGuaranteePropertiesDeserializer(item["priceGuaranteeProperties"]),
    conditions: !item["conditions"]
      ? item["conditions"]
      : conditionsItemArrayDeserializer(item["conditions"]),
  };
}

/** Managed service identity (system assigned and/or user assigned identities) */
export interface ManagedServiceIdentity {
  /** The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly principalId?: string;
  /** The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly tenantId?: string;
  /** Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). */
  type: ManagedServiceIdentityType;
  /** The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. */
  userAssignedIdentities?: Record<string, UserAssignedIdentity>;
}

export function managedServiceIdentitySerializer(
  item: ManagedServiceIdentity,
): any {
  return {
    type: item["type"],
    userAssignedIdentities: !item["userAssignedIdentities"]
      ? item["userAssignedIdentities"]
      : userAssignedIdentityRecordSerializer(item["userAssignedIdentities"]),
  };
}

export function managedServiceIdentityDeserializer(
  item: any,
): ManagedServiceIdentity {
  return {
    principalId: item["principalId"],
    tenantId: item["tenantId"],
    type: item["type"],
    userAssignedIdentities: !item["userAssignedIdentities"]
      ? item["userAssignedIdentities"]
      : userAssignedIdentityRecordDeserializer(item["userAssignedIdentities"]),
  };
}

/** Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). */
export enum KnownManagedServiceIdentityType {
  /** None */
  None = "None",
  /** SystemAssigned */
  SystemAssigned = "SystemAssigned",
  /** UserAssigned */
  UserAssigned = "UserAssigned",
  /** SystemAssigned,UserAssigned */
  SystemAssignedUserAssigned = "SystemAssigned,UserAssigned",
}

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). \
 * {@link KnownManagedServiceIdentityType} can be used interchangeably with ManagedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **SystemAssigned** \
 * **UserAssigned** \
 * **SystemAssigned,UserAssigned**
 */
export type ManagedServiceIdentityType = string;

export function userAssignedIdentityRecordSerializer(
  item: Record<string, UserAssignedIdentity>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : userAssignedIdentitySerializer(item[key]);
  });
  return result;
}

export function userAssignedIdentityRecordDeserializer(
  item: Record<string, any>,
): Record<string, UserAssignedIdentity> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : userAssignedIdentityDeserializer(item[key]);
  });
  return result;
}

/** User assigned identity properties */
export interface UserAssignedIdentity {
  /** The principal ID of the assigned identity. */
  readonly principalId?: string;
  /** The client ID of the assigned identity. */
  readonly clientId?: string;
}

export function userAssignedIdentitySerializer(
  item: UserAssignedIdentity,
): any {
  return item;
}

export function userAssignedIdentityDeserializer(
  item: any,
): UserAssignedIdentity {
  return {
    principalId: item["principalId"],
    clientId: item["clientId"],
  };
}

/** The resource model definition representing SKU */
export interface Sku {
  /** The name of the SKU. E.g. P3. It is typically a letter+number code */
  name: string;
  /** This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. */
  tier?: SkuTier;
  /** The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. */
  size?: string;
  /** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
  family?: string;
  /** If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. */
  capacity?: number;
}

export function skuSerializer(item: Sku): any {
  return {
    name: item["name"],
    tier: item["tier"],
    size: item["size"],
    family: item["family"],
    capacity: item["capacity"],
  };
}

export function skuDeserializer(item: any): Sku {
  return {
    name: item["name"],
    tier: item["tier"],
    size: item["size"],
    family: item["family"],
    capacity: item["capacity"],
  };
}

/** This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. */
export type SkuTier = "Free" | "Basic" | "Standard" | "Premium";

/** Plan for the resource. */
export interface Plan {
  /** A user defined name of the 3rd Party Artifact that is being procured. */
  name: string;
  /** The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic */
  publisher: string;
  /** The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. */
  product: string;
  /** A publisher provided promotion code as provisioned in Data Market for the said product/artifact. */
  promotionCode?: string;
  /** The version of the desired product/artifact. */
  version?: string;
}

export function planSerializer(item: Plan): any {
  return {
    name: item["name"],
    publisher: item["publisher"],
    product: item["product"],
    promotionCode: item["promotionCode"],
    version: item["version"],
  };
}

export function planDeserializer(item: any): Plan {
  return {
    name: item["name"],
    publisher: item["publisher"],
    product: item["product"],
    promotionCode: item["promotionCode"],
    version: item["version"],
  };
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

export function trackedResourceSerializer(item: TrackedResource): any {
  return { tags: item["tags"], location: item["location"] };
}

export function trackedResourceDeserializer(item: any): TrackedResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    tags: item["tags"],
    location: item["location"],
  };
}

/** Discount list */
export interface _DiscountList {
  /** The Discount items on this page */
  value: Discount[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _discountListDeserializer(item: any): _DiscountList {
  return {
    value: discountArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function discountArraySerializer(result: Array<Discount>): any[] {
  return result.map((item) => {
    return discountSerializer(item);
  });
}

export function discountArrayDeserializer(result: Array<Discount>): any[] {
  return result.map((item) => {
    return discountDeserializer(item);
  });
}

/** Savings plan order */
export interface SavingsPlanOrderModel extends ProxyResource {
  /** Savings plan SKU */
  sku: ResourceSku;
  /** Savings plan order properties */
  properties?: SavingsPlanOrderModelProperties;
}

export function savingsPlanOrderModelDeserializer(
  item: any,
): SavingsPlanOrderModel {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    sku: resourceSkuDeserializer(item["sku"]),
    properties: !item["properties"]
      ? item["properties"]
      : savingsPlanOrderModelPropertiesDeserializer(item["properties"]),
  };
}

/** Savings plan order properties */
export interface SavingsPlanOrderModelProperties {
  /** Display name */
  displayName?: string;
  /** Provisioning state */
  readonly provisioningState?: ProvisioningState;
  /** Subscription that will be charged for purchasing the benefit */
  billingScopeId?: string;
  /** Fully-qualified identifier of the billing profile where the savings plan is applied. Present only for Field-led or Customer-led customers. */
  readonly billingProfileId?: string;
  /** Fully-qualified identifier of the customer where the savings plan is applied. Present only for Partner-led customers. */
  readonly customerId?: string;
  /** Fully-qualified identifier of the billing account where the savings plan is applied. Present only for Enterprise Agreement customers. */
  readonly billingAccountId?: string;
  /** Represent benefit term in ISO 8601 format. */
  term?: Term;
  /** Represents the billing plan in ISO 8601 format. Required only for monthly billing plans. */
  billingPlan?: BillingPlan;
  /** Expiry date time */
  readonly expiryDateTime?: Date;
  /** This is the DateTime when the savings plan benefit started. */
  benefitStartTime?: Date;
  /** Information describing the type of billing plan for this savings plan. */
  planInformation?: BillingPlanInformation;
  savingsPlans?: string[];
  readonly extendedStatusInfo?: ExtendedStatusInfo;
}

export function savingsPlanOrderModelPropertiesDeserializer(
  item: any,
): SavingsPlanOrderModelProperties {
  return {
    displayName: item["displayName"],
    provisioningState: item["provisioningState"],
    billingScopeId: item["billingScopeId"],
    billingProfileId: item["billingProfileId"],
    customerId: item["customerId"],
    billingAccountId: item["billingAccountId"],
    term: item["term"],
    billingPlan: item["billingPlan"],
    expiryDateTime: !item["expiryDateTime"]
      ? item["expiryDateTime"]
      : new Date(item["expiryDateTime"]),
    benefitStartTime: !item["benefitStartTime"]
      ? item["benefitStartTime"]
      : new Date(item["benefitStartTime"]),
    planInformation: !item["planInformation"]
      ? item["planInformation"]
      : billingPlanInformationDeserializer(item["planInformation"]),
    savingsPlans: !item["savingsPlans"]
      ? item["savingsPlans"]
      : item["savingsPlans"].map((p: any) => {
          return p;
        }),
    extendedStatusInfo: !item["extendedStatusInfo"]
      ? item["extendedStatusInfo"]
      : extendedStatusInfoDeserializer(item["extendedStatusInfo"]),
  };
}

/** Information describing the type of billing plan for this savings plan. */
export interface BillingPlanInformation {
  /** Amount of money to be paid for the Order. Tax is not included. */
  pricingCurrencyTotal?: Price;
  /** Date when the billing plan has started. */
  startDate?: Date;
  /** For recurring billing plans, indicates the date when next payment will be processed. Null when total is paid off. */
  nextPaymentDueDate?: Date;
  transactions?: PaymentDetail[];
}

export function billingPlanInformationDeserializer(
  item: any,
): BillingPlanInformation {
  return {
    pricingCurrencyTotal: !item["pricingCurrencyTotal"]
      ? item["pricingCurrencyTotal"]
      : priceDeserializer(item["pricingCurrencyTotal"]),
    startDate: !item["startDate"]
      ? item["startDate"]
      : new Date(item["startDate"]),
    nextPaymentDueDate: !item["nextPaymentDueDate"]
      ? item["nextPaymentDueDate"]
      : new Date(item["nextPaymentDueDate"]),
    transactions: !item["transactions"]
      ? item["transactions"]
      : paymentDetailArrayDeserializer(item["transactions"]),
  };
}

export function paymentDetailArrayDeserializer(
  result: Array<PaymentDetail>,
): any[] {
  return result.map((item) => {
    return paymentDetailDeserializer(item);
  });
}

/** Information about payment related to a savings plan order. */
export interface PaymentDetail {
  /** Date when the payment needs to be done. */
  dueDate?: Date;
  /** Date when the transaction is completed. Is null when it is scheduled. */
  paymentDate?: Date;
  /** Amount in pricing currency. Tax not included. */
  pricingCurrencyTotal?: Price;
  /** Amount charged in Billing currency. Tax not included. Is null for future payments */
  billingCurrencyTotal?: Price;
  /** Describes whether the payment is completed, failed, cancelled or scheduled in the future. */
  status?: PaymentStatus;
  readonly extendedStatusInfo?: ExtendedStatusInfo;
  /** Billing account */
  billingAccount?: string;
}

export function paymentDetailDeserializer(item: any): PaymentDetail {
  return {
    dueDate: !item["dueDate"] ? item["dueDate"] : new Date(item["dueDate"]),
    paymentDate: !item["paymentDate"]
      ? item["paymentDate"]
      : new Date(item["paymentDate"]),
    pricingCurrencyTotal: !item["pricingCurrencyTotal"]
      ? item["pricingCurrencyTotal"]
      : priceDeserializer(item["pricingCurrencyTotal"]),
    billingCurrencyTotal: !item["billingCurrencyTotal"]
      ? item["billingCurrencyTotal"]
      : priceDeserializer(item["billingCurrencyTotal"]),
    status: item["status"],
    extendedStatusInfo: !item["extendedStatusInfo"]
      ? item["extendedStatusInfo"]
      : extendedStatusInfoDeserializer(item["extendedStatusInfo"]),
    billingAccount: item["billingAccount"],
  };
}

/** Describes whether the payment is completed, failed, cancelled or scheduled in the future. */
export enum KnownPaymentStatus {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Scheduled */
  Scheduled = "Scheduled",
  /** Cancelled */
  Cancelled = "Cancelled",
}

/**
 * Describes whether the payment is completed, failed, cancelled or scheduled in the future. \
 * {@link KnownPaymentStatus} can be used interchangeably with PaymentStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Scheduled** \
 * **Cancelled**
 */
export type PaymentStatus = string;

/** model interface ExtendedStatusInfo */
export interface ExtendedStatusInfo {
  /** Status code providing additional information. */
  statusCode?: string;
  /** The message giving detailed information about the status code. */
  message?: string;
}

export function extendedStatusInfoDeserializer(item: any): ExtendedStatusInfo {
  return {
    statusCode: item["statusCode"],
    message: item["message"],
  };
}

/** Paged collection of SavingsPlanOrderModel items */
export interface _SavingsPlanOrderModelList {
  /** The SavingsPlanOrderModel items on this page */
  value: SavingsPlanOrderModel[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _savingsPlanOrderModelListDeserializer(
  item: any,
): _SavingsPlanOrderModelList {
  return {
    value: savingsPlanOrderModelArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function savingsPlanOrderModelArrayDeserializer(
  result: Array<SavingsPlanOrderModel>,
): any[] {
  return result.map((item) => {
    return savingsPlanOrderModelDeserializer(item);
  });
}

/** Role assignment entity */
export interface RoleAssignmentEntity {
  /** Role assignment entity id */
  id?: string;
  /** Role assignment entity name */
  name?: string;
  /** Role assignment entity properties */
  properties?: RoleAssignmentEntityProperties;
}

export function roleAssignmentEntityDeserializer(
  item: any,
): RoleAssignmentEntity {
  return {
    id: item["id"],
    name: item["name"],
    properties: !item["properties"]
      ? item["properties"]
      : roleAssignmentEntityPropertiesDeserializer(item["properties"]),
  };
}

/** Role assignment entity properties */
export interface RoleAssignmentEntityProperties {
  /** Principal Id */
  principalId?: string;
  /** Role definition id */
  roleDefinitionId?: string;
  /** Scope of the role assignment entity */
  scope?: string;
}

export function roleAssignmentEntityPropertiesDeserializer(
  item: any,
): RoleAssignmentEntityProperties {
  return {
    principalId: item["principalId"],
    roleDefinitionId: item["roleDefinitionId"],
    scope: item["scope"],
  };
}

/** Savings plan */
export interface SavingsPlanModel extends ProxyResource {
  /** Savings plan SKU */
  sku: ResourceSku;
  /** Savings plan properties */
  properties?: SavingsPlanModelProperties;
}

export function savingsPlanModelDeserializer(item: any): SavingsPlanModel {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    sku: resourceSkuDeserializer(item["sku"]),
    properties: !item["properties"]
      ? item["properties"]
      : savingsPlanModelPropertiesDeserializer(item["properties"]),
  };
}

/** Savings plan properties */
export interface SavingsPlanModelProperties {
  /** Display name */
  displayName?: string;
  /** Provisioning state */
  readonly provisioningState?: ProvisioningState;
  /** The provisioning state of the savings plan for display, e.g. Succeeded */
  readonly displayProvisioningState?: string;
  /** Subscription that will be charged for purchasing the benefit */
  billingScopeId?: string;
  /** Fully-qualified identifier of the billing profile where the savings plan is applied. Present only for Field-led or Customer-led customers. */
  readonly billingProfileId?: string;
  /** Fully-qualified identifier of the customer where the savings plan is applied. Present only for Partner-led customers. */
  readonly customerId?: string;
  /** Fully-qualified identifier of the billing account where the savings plan is applied. Present only for Enterprise Agreement customers. */
  readonly billingAccountId?: string;
  /** Represent benefit term in ISO 8601 format. */
  term?: Term;
  /** Represents the billing plan in ISO 8601 format. Required only for monthly billing plans. */
  billingPlan?: BillingPlan;
  /** Type of the Applied Scope. */
  appliedScopeType?: AppliedScopeType;
  /** The applied scope type of the savings plan for display, e.g. Shared */
  readonly userFriendlyAppliedScopeType?: string;
  /** Properties specific to applied scope type. Not required if not applicable. */
  appliedScopeProperties?: AppliedScopeProperties;
  /** Commitment towards the benefit. */
  commitment?: Commitment;
  /** DateTime of the savings plan starts providing benefit from. */
  readonly effectiveDateTime?: Date;
  /** Expiry date time */
  readonly expiryDateTime?: Date;
  /** Date time when the savings plan was purchased */
  readonly purchaseDateTime?: Date;
  /** This is the DateTime when the savings plan benefit started. */
  benefitStartTime?: Date;
  readonly extendedStatusInfo?: ExtendedStatusInfo;
  /** Setting this to true will automatically purchase a new benefit on the expiration date time. */
  renew?: boolean;
  /** Savings plan utilization */
  readonly utilization?: Utilization;
  /** SavingsPlan Id of the SavingsPlan from which this SavingsPlan is renewed. */
  renewSource?: string;
  /** SavingsPlan Id of the SavingsPlan which is purchased because of renew. */
  renewDestination?: string;
  renewProperties?: RenewProperties;
}

export function savingsPlanModelPropertiesDeserializer(
  item: any,
): SavingsPlanModelProperties {
  return {
    displayName: item["displayName"],
    provisioningState: item["provisioningState"],
    displayProvisioningState: item["displayProvisioningState"],
    billingScopeId: item["billingScopeId"],
    billingProfileId: item["billingProfileId"],
    customerId: item["customerId"],
    billingAccountId: item["billingAccountId"],
    term: item["term"],
    billingPlan: item["billingPlan"],
    appliedScopeType: item["appliedScopeType"],
    userFriendlyAppliedScopeType: item["userFriendlyAppliedScopeType"],
    appliedScopeProperties: !item["appliedScopeProperties"]
      ? item["appliedScopeProperties"]
      : appliedScopePropertiesDeserializer(item["appliedScopeProperties"]),
    commitment: !item["commitment"]
      ? item["commitment"]
      : commitmentDeserializer(item["commitment"]),
    effectiveDateTime: !item["effectiveDateTime"]
      ? item["effectiveDateTime"]
      : new Date(item["effectiveDateTime"]),
    expiryDateTime: !item["expiryDateTime"]
      ? item["expiryDateTime"]
      : new Date(item["expiryDateTime"]),
    purchaseDateTime: !item["purchaseDateTime"]
      ? item["purchaseDateTime"]
      : new Date(item["purchaseDateTime"]),
    benefitStartTime: !item["benefitStartTime"]
      ? item["benefitStartTime"]
      : new Date(item["benefitStartTime"]),
    extendedStatusInfo: !item["extendedStatusInfo"]
      ? item["extendedStatusInfo"]
      : extendedStatusInfoDeserializer(item["extendedStatusInfo"]),
    renew: item["renew"],
    utilization: !item["utilization"]
      ? item["utilization"]
      : utilizationDeserializer(item["utilization"]),
    renewSource: item["renewSource"],
    renewDestination: item["renewDestination"],
    renewProperties: !item["renewProperties"]
      ? item["renewProperties"]
      : renewPropertiesDeserializer(item["renewProperties"]),
  };
}

/** Savings plan utilization */
export interface Utilization {
  /** The number of days trend for a savings plan */
  readonly trend?: string;
  /** The array of aggregates of a savings plan's utilization */
  aggregates?: UtilizationAggregates[];
}

export function utilizationDeserializer(item: any): Utilization {
  return {
    trend: item["trend"],
    aggregates: !item["aggregates"]
      ? item["aggregates"]
      : utilizationAggregatesArrayDeserializer(item["aggregates"]),
  };
}

export function utilizationAggregatesArrayDeserializer(
  result: Array<UtilizationAggregates>,
): any[] {
  return result.map((item) => {
    return utilizationAggregatesDeserializer(item);
  });
}

/** The aggregate values of savings plan utilization */
export interface UtilizationAggregates {
  /** The grain of the aggregate */
  readonly grain?: number;
  /** The grain unit of the aggregate */
  readonly grainUnit?: string;
  /** The aggregate value */
  readonly value?: number;
  /** The aggregate value unit */
  readonly valueUnit?: string;
}

export function utilizationAggregatesDeserializer(
  item: any,
): UtilizationAggregates {
  return {
    grain: item["grain"],
    grainUnit: item["grainUnit"],
    value: item["value"],
    valueUnit: item["valueUnit"],
  };
}

/** model interface RenewProperties */
export interface RenewProperties {
  purchaseProperties?: PurchaseRequest;
}

export function renewPropertiesSerializer(item: RenewProperties): any {
  return {
    purchaseProperties: !item["purchaseProperties"]
      ? item["purchaseProperties"]
      : purchaseRequestSerializer(item["purchaseProperties"]),
  };
}

export function renewPropertiesDeserializer(item: any): RenewProperties {
  return {
    purchaseProperties: !item["purchaseProperties"]
      ? item["purchaseProperties"]
      : purchaseRequestDeserializer(item["purchaseProperties"]),
  };
}

/** model interface PurchaseRequest */
export interface PurchaseRequest {
  /** The SKU to be applied for this resource */
  sku?: ResourceSku;
  properties?: PurchaseRequestProperties;
}

export function purchaseRequestSerializer(item: PurchaseRequest): any {
  return {
    sku: !item["sku"] ? item["sku"] : resourceSkuSerializer(item["sku"]),
    properties: !item["properties"]
      ? item["properties"]
      : purchaseRequestPropertiesSerializer(item["properties"]),
  };
}

export function purchaseRequestDeserializer(item: any): PurchaseRequest {
  return {
    sku: !item["sku"] ? item["sku"] : resourceSkuDeserializer(item["sku"]),
    properties: !item["properties"]
      ? item["properties"]
      : purchaseRequestPropertiesDeserializer(item["properties"]),
  };
}

/** model interface PurchaseRequestProperties */
export interface PurchaseRequestProperties {
  /** Friendly name of the savings plan */
  displayName?: string;
  /** Subscription that will be charged for purchasing the benefit */
  billingScopeId?: string;
  /** Represent benefit term in ISO 8601 format. */
  term?: Term;
  /** Represents the billing plan in ISO 8601 format. Required only for monthly billing plans. */
  billingPlan?: BillingPlan;
  /** Type of the Applied Scope. */
  appliedScopeType?: AppliedScopeType;
  /** Commitment towards the benefit. */
  commitment?: Commitment;
  /** DateTime of the savings plan starts providing benefit from. */
  readonly effectiveDateTime?: Date;
  /** Setting this to true will automatically purchase a new benefit on the expiration date time. */
  renew?: boolean;
  /** Properties specific to applied scope type. Not required if not applicable. */
  appliedScopeProperties?: AppliedScopeProperties;
}

export function purchaseRequestPropertiesSerializer(
  item: PurchaseRequestProperties,
): any {
  return {
    displayName: item["displayName"],
    billingScopeId: item["billingScopeId"],
    term: item["term"],
    billingPlan: item["billingPlan"],
    appliedScopeType: item["appliedScopeType"],
    commitment: !item["commitment"]
      ? item["commitment"]
      : commitmentSerializer(item["commitment"]),
    renew: item["renew"],
    appliedScopeProperties: !item["appliedScopeProperties"]
      ? item["appliedScopeProperties"]
      : appliedScopePropertiesSerializer(item["appliedScopeProperties"]),
  };
}

export function purchaseRequestPropertiesDeserializer(
  item: any,
): PurchaseRequestProperties {
  return {
    displayName: item["displayName"],
    billingScopeId: item["billingScopeId"],
    term: item["term"],
    billingPlan: item["billingPlan"],
    appliedScopeType: item["appliedScopeType"],
    commitment: !item["commitment"]
      ? item["commitment"]
      : commitmentDeserializer(item["commitment"]),
    effectiveDateTime: !item["effectiveDateTime"]
      ? item["effectiveDateTime"]
      : new Date(item["effectiveDateTime"]),
    renew: item["renew"],
    appliedScopeProperties: !item["appliedScopeProperties"]
      ? item["appliedScopeProperties"]
      : appliedScopePropertiesDeserializer(item["appliedScopeProperties"]),
  };
}

/** Savings plan patch request */
export interface SavingsPlanUpdateRequest {
  /** Savings plan patch request */
  properties?: SavingsPlanUpdateRequestProperties;
}

export function savingsPlanUpdateRequestSerializer(
  item: SavingsPlanUpdateRequest,
): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : savingsPlanUpdateRequestPropertiesSerializer(item["properties"]),
  };
}

/** Savings plan patch request */
export interface SavingsPlanUpdateRequestProperties {
  /** Display name */
  displayName?: string;
  /** Type of the Applied Scope. */
  appliedScopeType?: AppliedScopeType;
  /** Properties specific to applied scope type. Not required if not applicable. */
  appliedScopeProperties?: AppliedScopeProperties;
  /** Setting this to true will automatically purchase a new benefit on the expiration date time. */
  renew?: boolean;
  renewProperties?: RenewProperties;
}

export function savingsPlanUpdateRequestPropertiesSerializer(
  item: SavingsPlanUpdateRequestProperties,
): any {
  return {
    displayName: item["displayName"],
    appliedScopeType: item["appliedScopeType"],
    appliedScopeProperties: !item["appliedScopeProperties"]
      ? item["appliedScopeProperties"]
      : appliedScopePropertiesSerializer(item["appliedScopeProperties"]),
    renew: item["renew"],
    renewProperties: !item["renewProperties"]
      ? item["renewProperties"]
      : renewPropertiesSerializer(item["renewProperties"]),
  };
}

/** Paged collection of SavingsPlanModel items */
export interface _SavingsPlanModelList {
  /** The SavingsPlanModel items on this page */
  value: SavingsPlanModel[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _savingsPlanModelListDeserializer(
  item: any,
): _SavingsPlanModelList {
  return {
    value: savingsPlanModelArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function savingsPlanModelArrayDeserializer(
  result: Array<SavingsPlanModel>,
): any[] {
  return result.map((item) => {
    return savingsPlanModelDeserializer(item);
  });
}

/** model interface SavingsPlanUpdateValidateRequest */
export interface SavingsPlanUpdateValidateRequest {
  benefits?: SavingsPlanUpdateRequestProperties[];
}

export function savingsPlanUpdateValidateRequestSerializer(
  item: SavingsPlanUpdateValidateRequest,
): any {
  return {
    benefits: !item["benefits"]
      ? item["benefits"]
      : savingsPlanUpdateRequestPropertiesArraySerializer(item["benefits"]),
  };
}

export function savingsPlanUpdateRequestPropertiesArraySerializer(
  result: Array<SavingsPlanUpdateRequestProperties>,
): any[] {
  return result.map((item) => {
    return savingsPlanUpdateRequestPropertiesSerializer(item);
  });
}

/** Represents the result of listing savings plan models */
export interface _SavingsPlanModelListResult {
  /** The list of savings plans. */
  readonly value?: SavingsPlanModel[];
  /** Url to get the next page. */
  readonly nextLink?: string;
  /** The roll out count summary of the savings plans */
  readonly additionalProperties?: SavingsPlanSummary[];
}

export function _savingsPlanModelListResultDeserializer(
  item: any,
): _SavingsPlanModelListResult {
  return {
    value: !item["value"]
      ? item["value"]
      : savingsPlanModelArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
    additionalProperties: !item["additionalProperties"]
      ? item["additionalProperties"]
      : savingsPlanSummaryArrayDeserializer(item["additionalProperties"]),
  };
}

export function savingsPlanSummaryArrayDeserializer(
  result: Array<SavingsPlanSummary>,
): any[] {
  return result.map((item) => {
    return savingsPlanSummaryDeserializer(item);
  });
}

/** Savings plans list summary */
export interface SavingsPlanSummary {
  /** This property has value 'summary' */
  readonly name?: string;
  /** The roll up count summary of savings plans in each state */
  value?: SavingsPlanSummaryCount;
}

export function savingsPlanSummaryDeserializer(item: any): SavingsPlanSummary {
  return {
    name: item["name"],
    value: !item["value"]
      ? item["value"]
      : savingsPlanSummaryCountDeserializer(item["value"]),
  };
}

/** The roll up count summary of savings plans in each state */
export interface SavingsPlanSummaryCount {
  /** The number of savings plans in Succeeded state */
  readonly succeededCount?: number;
  /** The number of savings plans in Failed state */
  readonly failedCount?: number;
  /** The number of savings plans in Expiring state */
  readonly expiringCount?: number;
  /** The number of savings plans in Expired state */
  readonly expiredCount?: number;
  /** The number of savings plans in Pending state */
  readonly pendingCount?: number;
  /** The number of savings plans in Cancelled state */
  readonly cancelledCount?: number;
  /** The number of savings plans in Processing state */
  readonly processingCount?: number;
  /** The number of savings plans in No Benefit state */
  readonly noBenefitCount?: number;
  /** The number of savings plans in Warning state */
  readonly warningCount?: number;
}

export function savingsPlanSummaryCountDeserializer(
  item: any,
): SavingsPlanSummaryCount {
  return {
    succeededCount: item["succeededCount"],
    failedCount: item["failedCount"],
    expiringCount: item["expiringCount"],
    expiredCount: item["expiredCount"],
    pendingCount: item["pendingCount"],
    cancelledCount: item["cancelledCount"],
    processingCount: item["processingCount"],
    noBenefitCount: item["noBenefitCount"],
    warningCount: item["warningCount"],
  };
}

/** Reservation order alias */
export interface ReservationOrderAliasResponse extends ProxyResource {
  /** Reservation order SKU */
  sku: ResourceSku;
  /** The Azure Region where the reserved resource lives. */
  location?: string;
  /** Reservation order alias response properties */
  properties?: ReservationOrderAliasResponseProperties;
}

export function reservationOrderAliasResponseDeserializer(
  item: any,
): ReservationOrderAliasResponse {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    sku: resourceSkuDeserializer(item["sku"]),
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : reservationOrderAliasResponsePropertiesDeserializer(item["properties"]),
  };
}

/** Reservation properties */
export interface ReservationOrderAliasResponseProperties {
  /** Display name */
  displayName?: string;
  /** Identifier of the reservation order created */
  readonly reservationOrderId?: string;
  /** Provisioning state */
  readonly provisioningState?: ProvisioningState;
  /** Subscription that will be charged for purchasing the benefit */
  billingScopeId?: string;
  /** Represent benefit term in ISO 8601 format. */
  term?: Term;
  /** Represents the billing plan in ISO 8601 format. Required only for monthly billing plans. */
  billingPlan?: BillingPlan;
  /** Type of the Applied Scope. */
  appliedScopeType?: AppliedScopeType;
  /** Properties specific to applied scope type. Not required if not applicable. */
  appliedScopeProperties?: AppliedScopeProperties;
  /** Total Quantity of the SKUs purchased in the Reservation. */
  quantity?: number;
  /** Setting this to true will automatically purchase a new benefit on the expiration date time. */
  renew?: boolean;
  /** The type of the resource that is being reserved. */
  reservedResourceType?: ReservedResourceType;
  /** This is the date-time when the Reservation needs to be reviewed. */
  reviewDateTime?: Date;
  /** Properties specific to each reserved resource type. Not required if not applicable. */
  reservedResourceProperties?: ReservationOrderAliasResponsePropertiesReservedResourceProperties;
}

export function reservationOrderAliasResponsePropertiesDeserializer(
  item: any,
): ReservationOrderAliasResponseProperties {
  return {
    displayName: item["displayName"],
    reservationOrderId: item["reservationOrderId"],
    provisioningState: item["provisioningState"],
    billingScopeId: item["billingScopeId"],
    term: item["term"],
    billingPlan: item["billingPlan"],
    appliedScopeType: item["appliedScopeType"],
    appliedScopeProperties: !item["appliedScopeProperties"]
      ? item["appliedScopeProperties"]
      : appliedScopePropertiesDeserializer(item["appliedScopeProperties"]),
    quantity: item["quantity"],
    renew: item["renew"],
    reservedResourceType: item["reservedResourceType"],
    reviewDateTime: !item["reviewDateTime"]
      ? item["reviewDateTime"]
      : new Date(item["reviewDateTime"]),
    reservedResourceProperties: !item["reservedResourceProperties"]
      ? item["reservedResourceProperties"]
      : reservationOrderAliasResponsePropertiesReservedResourcePropertiesDeserializer(
          item["reservedResourceProperties"],
        ),
  };
}

/** The type of the resource that is being reserved. */
export enum KnownReservedResourceType {
  /** VirtualMachines */
  VirtualMachines = "VirtualMachines",
  /** SqlDatabases */
  SqlDatabases = "SqlDatabases",
  /** SuseLinux */
  SuseLinux = "SuseLinux",
  /** CosmosDb */
  CosmosDb = "CosmosDb",
  /** RedHat */
  RedHat = "RedHat",
  /** SqlDataWarehouse */
  SqlDataWarehouse = "SqlDataWarehouse",
  /** VMwareCloudSimple */
  VMwareCloudSimple = "VMwareCloudSimple",
  /** RedHatOsa */
  RedHatOsa = "RedHatOsa",
  /** Databricks */
  Databricks = "Databricks",
  /** AppService */
  AppService = "AppService",
  /** ManagedDisk */
  ManagedDisk = "ManagedDisk",
  /** BlockBlob */
  BlockBlob = "BlockBlob",
  /** RedisCache */
  RedisCache = "RedisCache",
  /** AzureDataExplorer */
  AzureDataExplorer = "AzureDataExplorer",
  /** MySql */
  MySql = "MySql",
  /** MariaDb */
  MariaDb = "MariaDb",
  /** PostgreSql */
  PostgreSql = "PostgreSql",
  /** DedicatedHost */
  DedicatedHost = "DedicatedHost",
  /** SapHana */
  SapHana = "SapHana",
  /** SqlAzureHybridBenefit */
  SqlAzureHybridBenefit = "SqlAzureHybridBenefit",
  /** AVS */
  AVS = "AVS",
  /** DataFactory */
  DataFactory = "DataFactory",
  /** NetAppStorage */
  NetAppStorage = "NetAppStorage",
  /** AzureFiles */
  AzureFiles = "AzureFiles",
  /** SqlEdge */
  SqlEdge = "SqlEdge",
  /** VirtualMachineSoftware */
  VirtualMachineSoftware = "VirtualMachineSoftware",
}

/**
 * The type of the resource that is being reserved. \
 * {@link KnownReservedResourceType} can be used interchangeably with ReservedResourceType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **VirtualMachines** \
 * **SqlDatabases** \
 * **SuseLinux** \
 * **CosmosDb** \
 * **RedHat** \
 * **SqlDataWarehouse** \
 * **VMwareCloudSimple** \
 * **RedHatOsa** \
 * **Databricks** \
 * **AppService** \
 * **ManagedDisk** \
 * **BlockBlob** \
 * **RedisCache** \
 * **AzureDataExplorer** \
 * **MySql** \
 * **MariaDb** \
 * **PostgreSql** \
 * **DedicatedHost** \
 * **SapHana** \
 * **SqlAzureHybridBenefit** \
 * **AVS** \
 * **DataFactory** \
 * **NetAppStorage** \
 * **AzureFiles** \
 * **SqlEdge** \
 * **VirtualMachineSoftware**
 */
export type ReservedResourceType = string;

/** Properties specific to each reserved resource type. Not required if not applicable. */
export interface ReservationOrderAliasResponsePropertiesReservedResourceProperties {
  /** Turning this on will apply the reservation discount to other VMs in the same VM size group. */
  instanceFlexibility?: InstanceFlexibility;
}

export function reservationOrderAliasResponsePropertiesReservedResourcePropertiesDeserializer(
  item: any,
): ReservationOrderAliasResponsePropertiesReservedResourceProperties {
  return {
    instanceFlexibility: item["instanceFlexibility"],
  };
}

/** Turning this on will apply the reservation discount to other VMs in the same VM size group. */
export enum KnownInstanceFlexibility {
  /** On */
  On = "On",
  /** Off */
  Off = "Off",
}

/**
 * Turning this on will apply the reservation discount to other VMs in the same VM size group. \
 * {@link KnownInstanceFlexibility} can be used interchangeably with InstanceFlexibility,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **On** \
 * **Off**
 */
export type InstanceFlexibility = string;

/** Reservation order alias */
export interface ReservationOrderAliasRequest extends Resource {
  /** Reservation order SKU */
  sku: ResourceSku;
  /** The Azure Region where the reservation benefits are applied to. */
  location?: string;
  /** Reservation order alias request properties */
  properties?: ReservationOrderAliasRequestProperties;
}

export function reservationOrderAliasRequestSerializer(
  item: ReservationOrderAliasRequest,
): any {
  return {
    sku: resourceSkuSerializer(item["sku"]),
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : reservationOrderAliasRequestPropertiesSerializer(item["properties"]),
  };
}

/** Reservation properties */
export interface ReservationOrderAliasRequestProperties {
  /** Display name */
  displayName?: string;
  /** Subscription that will be charged for purchasing the benefit */
  billingScopeId?: string;
  /** Represent benefit term in ISO 8601 format. */
  term?: Term;
  /** Represents the billing plan in ISO 8601 format. Required only for monthly billing plans. */
  billingPlan?: BillingPlan;
  /** Type of the Applied Scope. */
  appliedScopeType?: AppliedScopeType;
  /** Properties specific to applied scope type. Not required if not applicable. */
  appliedScopeProperties?: AppliedScopeProperties;
  /** Total Quantity of the SKUs purchased in the Reservation. */
  quantity?: number;
  /** Setting this to true will automatically purchase a new benefit on the expiration date time. */
  renew?: boolean;
  /** The type of the resource that is being reserved. */
  reservedResourceType?: ReservedResourceType;
  /** This is the date-time when the Azure Hybrid Benefit needs to be reviewed. */
  reviewDateTime?: Date;
  /** Properties specific to each reserved resource type. Not required if not applicable. */
  reservedResourceProperties?: ReservationOrderAliasRequestPropertiesReservedResourceProperties;
}

export function reservationOrderAliasRequestPropertiesSerializer(
  item: ReservationOrderAliasRequestProperties,
): any {
  return {
    displayName: item["displayName"],
    billingScopeId: item["billingScopeId"],
    term: item["term"],
    billingPlan: item["billingPlan"],
    appliedScopeType: item["appliedScopeType"],
    appliedScopeProperties: !item["appliedScopeProperties"]
      ? item["appliedScopeProperties"]
      : appliedScopePropertiesSerializer(item["appliedScopeProperties"]),
    quantity: item["quantity"],
    renew: item["renew"],
    reservedResourceType: item["reservedResourceType"],
    reviewDateTime: !item["reviewDateTime"]
      ? item["reviewDateTime"]
      : item["reviewDateTime"].toISOString(),
    reservedResourceProperties: !item["reservedResourceProperties"]
      ? item["reservedResourceProperties"]
      : reservationOrderAliasRequestPropertiesReservedResourcePropertiesSerializer(
          item["reservedResourceProperties"],
        ),
  };
}

/** Properties specific to each reserved resource type. Not required if not applicable. */
export interface ReservationOrderAliasRequestPropertiesReservedResourceProperties {
  /** Turning this on will apply the reservation discount to other VMs in the same VM size group. */
  instanceFlexibility?: InstanceFlexibility;
}

export function reservationOrderAliasRequestPropertiesReservedResourcePropertiesSerializer(
  item: ReservationOrderAliasRequestPropertiesReservedResourceProperties,
): any {
  return { instanceFlexibility: item["instanceFlexibility"] };
}

/** Discounts patch request */
export interface DiscountPatchRequest {
  /** Discounts patch request properties */
  properties?: DiscountPatchRequestProperties;
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function discountPatchRequestSerializer(
  item: DiscountPatchRequest,
): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : discountPatchRequestPropertiesSerializer(item["properties"]),
    tags: item["tags"],
  };
}

/** Discounts patch request properties */
export interface DiscountPatchRequestProperties {
  /** Display name */
  displayName?: string;
}

export function discountPatchRequestPropertiesSerializer(
  item: DiscountPatchRequestProperties,
): any {
  return { displayName: item["displayName"] };
}

/** The available API versions. */
export enum KnownVersions {
  /** The 2024-11-01-preview API version. */
  V20241101Preview = "2024-11-01-preview",
}

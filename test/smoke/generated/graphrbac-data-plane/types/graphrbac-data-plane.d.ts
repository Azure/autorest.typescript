import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';

/** Request parameters for adding a owner to an application. */
export declare interface AddOwnerParameters {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /** A owner object URL, such as "https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd", where "0b1f9851-1bf0-433f-aec3-cb9272f093dc" is the tenantId and "f260bbc4-c254-447b-94cf-293b5ec434dd" is the objectId of the owner (user, application, servicePrincipal, group) to be added. */
    url: string;
}

/** Active Directory group information. */
export declare type ADGroup = DirectoryObject & {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    objectType: "Group";
    /** The display name of the group. */
    displayName?: string;
    /** Whether the group is mail-enabled. Must be false. This is because only pure security groups can be created using the Graph API. */
    mailEnabled?: boolean;
    /** The mail alias for the group. */
    mailNickname?: string;
    /** Whether the group is security-enable. */
    securityEnabled?: boolean;
    /** The primary email address of the group. */
    mail?: string;
};

/** Active Directory application information. */
export declare type Application = DirectoryObject & {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    objectType: "Application";
    /** The application ID. */
    appId?: string;
    /** A property on the application to indicate if the application accepts other IDPs or not or partially accepts. */
    allowGuestsSignIn?: boolean;
    /** Indicates that the application supports pass through users who have no presence in the resource tenant. */
    allowPassthroughUsers?: boolean;
    /** The url for the application logo image stored in a CDN. */
    appLogoUrl?: string;
    /** The collection of application roles that an application may declare. These roles can be assigned to users, groups or service principals. */
    appRoles?: AppRole[];
    /** The application permissions. */
    appPermissions?: string[];
    /** Whether the application is available to other tenants. */
    availableToOtherTenants?: boolean;
    /** The display name of the application. */
    displayName?: string;
    /** A URL provided by the author of the application to report errors when using the application. */
    errorUrl?: string;
    /** Configures the groups claim issued in a user or OAuth 2.0 access token that the app expects. */
    groupMembershipClaims?: GroupMembershipClaimTypes;
    /** The home page of the application. */
    homepage?: string;
    /** A collection of URIs for the application. */
    identifierUris?: string[];
    /** URLs with more information about the application. */
    informationalUrls?: InformationalUrl;
    /** Specifies whether this application supports device authentication without a user. The default is false. */
    isDeviceOnlyAuthSupported?: boolean;
    /** A collection of KeyCredential objects. */
    keyCredentials?: KeyCredential[];
    /** Client applications that are tied to this resource application. Consent to any of the known client applications will result in implicit consent to the resource application through a combined consent dialog (showing the OAuth permission scopes required by the client and the resource). */
    knownClientApplications?: string[];
    /** the url of the logout page */
    logoutUrl?: string;
    /** Whether to allow implicit grant flow for OAuth2 */
    oauth2AllowImplicitFlow?: boolean;
    /** Specifies whether during a token Request Azure AD will allow path matching of the redirect URI against the applications collection of replyURLs. The default is false. */
    oauth2AllowUrlPathMatching?: boolean;
    /** The collection of OAuth 2.0 permission scopes that the web API (resource) application exposes to client applications. These permission scopes may be granted to client applications during consent. */
    oauth2Permissions?: OAuth2Permission[];
    /** Specifies whether, as part of OAuth 2.0 token requests, Azure AD will allow POST requests, as opposed to GET requests. The default is false, which specifies that only GET requests will be allowed. */
    oauth2RequirePostResponse?: boolean;
    /** A list of tenants allowed to access application. */
    orgRestrictions?: string[];
    /** Specifying the claims to be included in the token. */
    optionalClaims?: OptionalClaims;
    /** A collection of PasswordCredential objects */
    passwordCredentials?: PasswordCredential[];
    /** list of pre-authorized applications. */
    preAuthorizedApplications?: PreAuthorizedApplication[];
    /** Specifies whether this application is a public client (such as an installed application running on a mobile device). Default is false. */
    publicClient?: boolean;
    /** Reliable domain which can be used to identify an application. */
    publisherDomain?: string;
    /** A collection of reply URLs for the application. */
    replyUrls?: string[];
    /** Specifies resources that this application requires access to and the set of OAuth permission scopes and application roles that it needs under each of those resources. This pre-configuration of required resource access drives the consent experience. */
    requiredResourceAccess?: RequiredResourceAccess[];
    /** The URL to the SAML metadata for the application. */
    samlMetadataUrl?: string;
    /** Audience for signing in to the application (AzureADMyOrganization, AzureADAllOrganizations, AzureADAndMicrosoftAccounts). */
    signInAudience?: string;
    /** The primary Web page. */
    wwwHomepage?: string;
};

/** Active Directive Application common properties shared among GET, POST and PATCH */
export declare interface ApplicationBase {
    /** A property on the application to indicate if the application accepts other IDPs or not or partially accepts. */
    allowGuestsSignIn?: boolean;
    /** Indicates that the application supports pass through users who have no presence in the resource tenant. */
    allowPassthroughUsers?: boolean;
    /** The url for the application logo image stored in a CDN. */
    appLogoUrl?: string;
    /** The collection of application roles that an application may declare. These roles can be assigned to users, groups or service principals. */
    appRoles?: AppRole[];
    /** The application permissions. */
    appPermissions?: string[];
    /** Whether the application is available to other tenants. */
    availableToOtherTenants?: boolean;
    /** A URL provided by the author of the application to report errors when using the application. */
    errorUrl?: string;
    /** Configures the groups claim issued in a user or OAuth 2.0 access token that the app expects. */
    groupMembershipClaims?: GroupMembershipClaimTypes;
    /** The home page of the application. */
    homepage?: string;
    /** URLs with more information about the application. */
    informationalUrls?: InformationalUrl;
    /** Specifies whether this application supports device authentication without a user. The default is false. */
    isDeviceOnlyAuthSupported?: boolean;
    /** A collection of KeyCredential objects. */
    keyCredentials?: KeyCredential[];
    /** Client applications that are tied to this resource application. Consent to any of the known client applications will result in implicit consent to the resource application through a combined consent dialog (showing the OAuth permission scopes required by the client and the resource). */
    knownClientApplications?: string[];
    /** the url of the logout page */
    logoutUrl?: string;
    /** Whether to allow implicit grant flow for OAuth2 */
    oauth2AllowImplicitFlow?: boolean;
    /** Specifies whether during a token Request Azure AD will allow path matching of the redirect URI against the applications collection of replyURLs. The default is false. */
    oauth2AllowUrlPathMatching?: boolean;
    /** The collection of OAuth 2.0 permission scopes that the web API (resource) application exposes to client applications. These permission scopes may be granted to client applications during consent. */
    oauth2Permissions?: OAuth2Permission[];
    /** Specifies whether, as part of OAuth 2.0 token requests, Azure AD will allow POST requests, as opposed to GET requests. The default is false, which specifies that only GET requests will be allowed. */
    oauth2RequirePostResponse?: boolean;
    /** A list of tenants allowed to access application. */
    orgRestrictions?: string[];
    /** Specifying the claims to be included in the token. */
    optionalClaims?: OptionalClaims;
    /** A collection of PasswordCredential objects */
    passwordCredentials?: PasswordCredential[];
    /** list of pre-authorized applications. */
    preAuthorizedApplications?: PreAuthorizedApplication[];
    /** Specifies whether this application is a public client (such as an installed application running on a mobile device). Default is false. */
    publicClient?: boolean;
    /** Reliable domain which can be used to identify an application. */
    publisherDomain?: string;
    /** A collection of reply URLs for the application. */
    replyUrls?: string[];
    /** Specifies resources that this application requires access to and the set of OAuth permission scopes and application roles that it needs under each of those resources. This pre-configuration of required resource access drives the consent experience. */
    requiredResourceAccess?: RequiredResourceAccess[];
    /** The URL to the SAML metadata for the application. */
    samlMetadataUrl?: string;
    /** Audience for signing in to the application (AzureADMyOrganization, AzureADAllOrganizations, AzureADAndMicrosoftAccounts). */
    signInAudience?: string;
    /** The primary Web page. */
    wwwHomepage?: string;
}

/** Request parameters for creating a new application. */
export declare type ApplicationCreateParameters = ApplicationBase & {
    /** The display name of the application. */
    displayName: string;
    /** A collection of URIs for the application. */
    identifierUris?: string[];
};

/** Application list operation result. */
export declare interface ApplicationListResult {
    /** A collection of applications. */
    value?: Application[];
    /** The URL to get the next set of results. */
    odataNextLink?: string;
}

/** Interface representing a Applications. */
export declare interface Applications {
    /**
     * Lists applications by filter parameters.
     * @param options The options parameters.
     */
    list(options?: ApplicationsListOptionalParams): PagedAsyncIterableIterator<Application>;
    /**
     * The owners are a set of non-admin users who are allowed to modify this object.
     * @param applicationObjectId The object ID of the application for which to get owners.
     * @param options The options parameters.
     */
    listOwners(applicationObjectId: string, options?: ApplicationsListOwnersOptionalParams): PagedAsyncIterableIterator<DirectoryObjectUnion>;
    /**
     * Get the keyCredentials associated with an application.
     * @param applicationObjectId Application object ID.
     * @param options The options parameters.
     */
    listKeyCredentials(applicationObjectId: string, options?: ApplicationsListKeyCredentialsOptionalParams): PagedAsyncIterableIterator<KeyCredential>;
    /**
     * Get the passwordCredentials associated with an application.
     * @param applicationObjectId Application object ID.
     * @param options The options parameters.
     */
    listPasswordCredentials(applicationObjectId: string, options?: ApplicationsListPasswordCredentialsOptionalParams): PagedAsyncIterableIterator<PasswordCredential>;
    /**
     * Gets a list of applications from the current tenant.
     * @param nextLink Next link for the list operation.
     * @param options The options parameters.
     */
    listNext(nextLink: string, options?: ApplicationsListNextOptionalParams): PagedAsyncIterableIterator<Application>;
    /**
     * Create a new application.
     * @param parameters The parameters for creating an application.
     * @param options The options parameters.
     */
    create(parameters: ApplicationCreateParameters, options?: ApplicationsCreateOptionalParams): Promise<ApplicationsCreateResponse>;
    /**
     * Delete an application.
     * @param applicationObjectId Application object ID.
     * @param options The options parameters.
     */
    delete(applicationObjectId: string, options?: ApplicationsDeleteOptionalParams): Promise<void>;
    /**
     * Get an application by object ID.
     * @param applicationObjectId Application object ID.
     * @param options The options parameters.
     */
    get(applicationObjectId: string, options?: ApplicationsGetOptionalParams): Promise<ApplicationsGetResponse>;
    /**
     * Update an existing application.
     * @param applicationObjectId Application object ID.
     * @param parameters Parameters to update an existing application.
     * @param options The options parameters.
     */
    patch(applicationObjectId: string, parameters: ApplicationUpdateParameters, options?: ApplicationsPatchOptionalParams): Promise<void>;
    /**
     * Add an owner to an application.
     * @param applicationObjectId The object ID of the application to which to add the owner.
     * @param parameters The URL of the owner object, such as
     *                   https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.
     * @param options The options parameters.
     */
    addOwner(applicationObjectId: string, parameters: AddOwnerParameters, options?: ApplicationsAddOwnerOptionalParams): Promise<void>;
    /**
     * Remove a member from owners.
     * @param applicationObjectId The object ID of the application from which to remove the owner.
     * @param ownerObjectId Owner object id
     * @param options The options parameters.
     */
    removeOwner(applicationObjectId: string, ownerObjectId: string, options?: ApplicationsRemoveOwnerOptionalParams): Promise<void>;
    /**
     * Update the keyCredentials associated with an application.
     * @param applicationObjectId Application object ID.
     * @param parameters Parameters to update the keyCredentials of an existing application.
     * @param options The options parameters.
     */
    updateKeyCredentials(applicationObjectId: string, parameters: KeyCredentialsUpdateParameters, options?: ApplicationsUpdateKeyCredentialsOptionalParams): Promise<void>;
    /**
     * Update passwordCredentials associated with an application.
     * @param applicationObjectId Application object ID.
     * @param parameters Parameters to update passwordCredentials of an existing application.
     * @param options The options parameters.
     */
    updatePasswordCredentials(applicationObjectId: string, parameters: PasswordCredentialsUpdateParameters, options?: ApplicationsUpdatePasswordCredentialsOptionalParams): Promise<void>;
    /**
     * Gets an object id for a given application id from the current tenant.
     * @param applicationID The application ID.
     * @param options The options parameters.
     */
    getServicePrincipalsIdByAppId(applicationID: string, options?: ApplicationsGetServicePrincipalsIdByAppIdOptionalParams): Promise<ApplicationsGetServicePrincipalsIdByAppIdResponse>;
}

/** Optional parameters. */
export declare interface ApplicationsAddOwnerOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ApplicationsCreateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the create operation. */
export declare type ApplicationsCreateResponse = Application;

/** Optional parameters. */
export declare interface ApplicationsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ApplicationsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ApplicationsGetResponse = Application;

/** Optional parameters. */
export declare interface ApplicationsGetServicePrincipalsIdByAppIdOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getServicePrincipalsIdByAppId operation. */
export declare type ApplicationsGetServicePrincipalsIdByAppIdResponse = ServicePrincipalObjectResult;

/** Optional parameters. */
export declare interface ApplicationsListKeyCredentialsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listKeyCredentials operation. */
export declare type ApplicationsListKeyCredentialsResponse = KeyCredentialListResult;

/** Optional parameters. */
export declare interface ApplicationsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type ApplicationsListNextResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface ApplicationsListOptionalParams extends coreClient.OperationOptions {
    /** The filters to apply to the operation. */
    filter?: string;
}

/** Optional parameters. */
export declare interface ApplicationsListOwnersNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOwnersNext operation. */
export declare type ApplicationsListOwnersNextResponse = DirectoryObjectListResult;

/** Optional parameters. */
export declare interface ApplicationsListOwnersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOwners operation. */
export declare type ApplicationsListOwnersResponse = DirectoryObjectListResult;

/** Optional parameters. */
export declare interface ApplicationsListPasswordCredentialsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listPasswordCredentials operation. */
export declare type ApplicationsListPasswordCredentialsResponse = PasswordCredentialListResult;

/** Contains response data for the list operation. */
export declare type ApplicationsListResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface ApplicationsPatchOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ApplicationsRemoveOwnerOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ApplicationsUpdateKeyCredentialsOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ApplicationsUpdatePasswordCredentialsOptionalParams extends coreClient.OperationOptions {
}

/** Request parameters for updating a new application. */
export declare type ApplicationUpdateParameters = ApplicationBase & {
    /** The display name of the application. */
    displayName?: string;
    /** A collection of URIs for the application. */
    identifierUris?: string[];
};

export declare interface AppRole {
    /** Unique role identifier inside the appRoles collection. */
    id?: string;
    /** Specifies whether this app role definition can be assigned to users and groups by setting to 'User', or to other applications (that are accessing this application in daemon service scenarios) by setting to 'Application', or to both. */
    allowedMemberTypes?: string[];
    /** Permission help text that appears in the admin app assignment and consent experiences. */
    description?: string;
    /** Display name for the permission that appears in the admin consent and app assignment experiences. */
    displayName?: string;
    /** When creating or updating a role definition, this must be set to true (which is the default). To delete a role, this must first be set to false. At that point, in a subsequent call, this role may be removed. */
    isEnabled?: boolean;
    /** Specifies the value of the roles claim that the application should expect in the authentication and access tokens. */
    value?: string;
}

/** Request parameters for IsMemberOf API call. */
export declare interface CheckGroupMembershipParameters {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /** The object ID of the group to check. */
    groupId: string;
    /** The object ID of the contact, group, user, or service principal to check for membership in the specified group. */
    memberId: string;
}

/** Server response for IsMemberOf API call */
export declare interface CheckGroupMembershipResult {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /** True if the specified user, group, contact, or service principal has either direct or transitive membership in the specified group; otherwise, false. */
    value?: boolean;
}

/**
 * Defines values for ConsentType. \
 * {@link KnownConsentType} can be used interchangeably with ConsentType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AllPrincipals** \
 * **Principal**
 */
export declare type ConsentType = string;

/** Interface representing a DeletedApplications. */
export declare interface DeletedApplications {
    /**
     * Gets a list of deleted applications in the directory.
     * @param options The options parameters.
     */
    list(options?: DeletedApplicationsListOptionalParams): PagedAsyncIterableIterator<Application>;
    /**
     * Gets a list of deleted applications in the directory.
     * @param nextLink Next link for the list operation.
     * @param options The options parameters.
     */
    listNext(nextLink: string, options?: DeletedApplicationsListNextOptionalParams): PagedAsyncIterableIterator<Application>;
    /**
     * Restores the deleted application in the directory.
     * @param objectId Application object ID.
     * @param options The options parameters.
     */
    restore(objectId: string, options?: DeletedApplicationsRestoreOptionalParams): Promise<DeletedApplicationsRestoreResponse>;
    /**
     * Hard-delete an application.
     * @param applicationObjectId Application object ID.
     * @param options The options parameters.
     */
    hardDelete(applicationObjectId: string, options?: DeletedApplicationsHardDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface DeletedApplicationsHardDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeletedApplicationsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type DeletedApplicationsListNextResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface DeletedApplicationsListOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply to the operation. */
    filter?: string;
}

/** Contains response data for the list operation. */
export declare type DeletedApplicationsListResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface DeletedApplicationsRestoreOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the restore operation. */
export declare type DeletedApplicationsRestoreResponse = Application;

/** Represents an Azure Active Directory object. */
export declare interface DirectoryObject {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    objectType: "User" | "Application" | "Group" | "ServicePrincipal";
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /**
     * The object ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly objectId?: string;
    /**
     * The time at which the directory object was deleted.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly deletionTimestamp?: Date;
}

/** DirectoryObject list operation result. */
export declare interface DirectoryObjectListResult {
    /** A collection of DirectoryObject. */
    value?: DirectoryObjectUnion[];
    /** The URL to get the next set of results. */
    odataNextLink?: string;
}

export declare type DirectoryObjectUnion = DirectoryObject | User | Application | ADGroup | ServicePrincipal;

/** Active Directory Domain information. */
export declare interface Domain {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /**
     * the type of the authentication into the domain.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly authenticationType?: string;
    /**
     * if this is the default domain in the tenant.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isDefault?: boolean;
    /**
     * if this domain's ownership is verified.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isVerified?: boolean;
    /** the domain name. */
    name: string;
}

/** Server response for Get tenant domains API call. */
export declare interface DomainListResult {
    /** the list of domains. */
    value?: Domain[];
}

/** Interface representing a Domains. */
export declare interface Domains {
    /**
     * Gets a list of domains for the current tenant.
     * @param options The options parameters.
     */
    list(options?: DomainsListOptionalParams): PagedAsyncIterableIterator<Domain>;
    /**
     * Gets a specific domain in the current tenant.
     * @param domainName name of the domain.
     * @param options The options parameters.
     */
    get(domainName: string, options?: DomainsGetOptionalParams): Promise<DomainsGetResponse>;
}

/** Optional parameters. */
export declare interface DomainsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type DomainsGetResponse = Domain;

/** Optional parameters. */
export declare interface DomainsListOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply to the operation. */
    filter?: string;
}

/** Contains response data for the list operation. */
export declare type DomainsListResponse = DomainListResult;

/** Request parameters for the GetObjectsByObjectIds API. */
export declare interface GetObjectsParameters {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /** The requested object IDs. */
    objectIds?: string[];
    /** The requested object types. */
    types?: string[];
    /** If true, also searches for object IDs in the partner tenant. */
    includeDirectoryObjectReferences?: boolean;
}

/** Active Directory error information. */
export declare interface GraphError {
    /** Error code. */
    code?: string;
    /** Error message value. */
    message?: string;
}

export declare class GraphRbacManagementClient extends GraphRbacManagementClientContext {
    /**
     * Initializes a new instance of the GraphRbacManagementClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param tenantID The tenant ID.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, tenantID: string, options?: GraphRbacManagementClientOptionalParams);
    signedInUser: SignedInUser;
    applications: Applications;
    deletedApplications: DeletedApplications;
    groups: Groups;
    servicePrincipals: ServicePrincipals;
    users: Users;
    objects: Objects;
    domains: Domains;
    oAuth2PermissionGrantOperations: OAuth2PermissionGrantOperations;
}

export declare class GraphRbacManagementClientContext extends coreClient.ServiceClient {
    $host: string;
    apiVersion: string;
    tenantID: string;
    /**
     * Initializes a new instance of the GraphRbacManagementClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param tenantID The tenant ID.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, tenantID: string, options?: GraphRbacManagementClientOptionalParams);
}

/** Optional parameters. */
export declare interface GraphRbacManagementClientOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Api Version */
    apiVersion?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

/** Request parameters for adding a member to a group. */
export declare interface GroupAddMemberParameters {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /** A member object URL, such as "https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd", where "0b1f9851-1bf0-433f-aec3-cb9272f093dc" is the tenantId and "f260bbc4-c254-447b-94cf-293b5ec434dd" is the objectId of the member (user, application, servicePrincipal, group) to be added. */
    url: string;
}

/** Request parameters for creating a new group. */
export declare interface GroupCreateParameters {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /** Group display name */
    displayName: string;
    /** Whether the group is mail-enabled. Must be false. This is because only pure security groups can be created using the Graph API. */
    mailEnabled: "undefined";
    /** Mail nickname */
    mailNickname: string;
    /** Whether the group is a security group. Must be true. This is because only pure security groups can be created using the Graph API. */
    securityEnabled: "true";
}

/** Request parameters for GetMemberGroups API call. */
export declare interface GroupGetMemberGroupsParameters {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /** If true, only membership in security-enabled groups should be checked. Otherwise, membership in all groups should be checked. */
    securityEnabledOnly: boolean;
}

/** Server response for GetMemberGroups API call. */
export declare interface GroupGetMemberGroupsResult {
    /** A collection of group IDs of which the group is a member. */
    value?: string[];
}

/** Server response for Get tenant groups API call */
export declare interface GroupListResult {
    /** A collection of Active Directory groups. */
    value?: ADGroup[];
    /** The URL to get the next set of results. */
    odataNextLink?: string;
}

/**
 * Defines values for GroupMembershipClaimTypes. \
 * {@link KnownGroupMembershipClaimTypes} can be used interchangeably with GroupMembershipClaimTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **SecurityGroup** \
 * **All**
 */
export declare type GroupMembershipClaimTypes = string;

/** Interface representing a Groups. */
export declare interface Groups {
    /**
     * Gets list of groups for the current tenant.
     * @param options The options parameters.
     */
    list(options?: GroupsListOptionalParams): PagedAsyncIterableIterator<ADGroup>;
    /**
     * Gets the members of a group.
     * @param objectId The object ID of the group whose members should be retrieved.
     * @param options The options parameters.
     */
    listGroupMembers(objectId: string, options?: GroupsGetGroupMembersOptionalParams): PagedAsyncIterableIterator<DirectoryObjectUnion>;
    /**
     * Gets a collection of object IDs of groups of which the specified group is a member.
     * @param objectId The object ID of the group for which to get group membership.
     * @param parameters Group filtering parameters.
     * @param options The options parameters.
     */
    listMemberGroups(objectId: string, parameters: GroupGetMemberGroupsParameters, options?: GroupsGetMemberGroupsOptionalParams): PagedAsyncIterableIterator<string>;
    /**
     * The owners are a set of non-admin users who are allowed to modify this object.
     * @param objectId The object ID of the group for which to get owners.
     * @param options The options parameters.
     */
    listOwners(objectId: string, options?: GroupsListOwnersOptionalParams): PagedAsyncIterableIterator<DirectoryObjectUnion>;
    /**
     * Gets a list of groups for the current tenant.
     * @param nextLink Next link for the list operation.
     * @param options The options parameters.
     */
    listNext(nextLink: string, options?: GroupsListNextOptionalParams): PagedAsyncIterableIterator<ADGroup>;
    /**
     * Gets the members of a group.
     * @param nextLink Next link for the list operation.
     * @param options The options parameters.
     */
    listGroupMembersNext(nextLink: string, options?: GroupsGetGroupMembersNextOptionalParams): PagedAsyncIterableIterator<DirectoryObjectUnion>;
    /**
     * Checks whether the specified user, group, contact, or service principal is a direct or transitive
     * member of the specified group.
     * @param parameters The check group membership parameters.
     * @param options The options parameters.
     */
    isMemberOf(parameters: CheckGroupMembershipParameters, options?: GroupsIsMemberOfOptionalParams): Promise<GroupsIsMemberOfResponse>;
    /**
     * Remove a member from a group.
     * @param groupObjectId The object ID of the group from which to remove the member.
     * @param memberObjectId Member object id
     * @param options The options parameters.
     */
    removeMember(groupObjectId: string, memberObjectId: string, options?: GroupsRemoveMemberOptionalParams): Promise<void>;
    /**
     * Add a member to a group.
     * @param groupObjectId The object ID of the group to which to add the member.
     * @param parameters The URL of the member object, such as
     *                   https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.
     * @param options The options parameters.
     */
    addMember(groupObjectId: string, parameters: GroupAddMemberParameters, options?: GroupsAddMemberOptionalParams): Promise<void>;
    /**
     * Create a group in the directory.
     * @param parameters The parameters for the group to create.
     * @param options The options parameters.
     */
    create(parameters: GroupCreateParameters, options?: GroupsCreateOptionalParams): Promise<GroupsCreateResponse>;
    /**
     * Gets group information from the directory.
     * @param objectId The object ID of the user for which to get group information.
     * @param options The options parameters.
     */
    get(objectId: string, options?: GroupsGetOptionalParams): Promise<GroupsGetResponse>;
    /**
     * Delete a group from the directory.
     * @param objectId The object ID of the group to delete.
     * @param options The options parameters.
     */
    delete(objectId: string, options?: GroupsDeleteOptionalParams): Promise<void>;
    /**
     * Add an owner to a group.
     * @param objectId The object ID of the application to which to add the owner.
     * @param parameters The URL of the owner object, such as
     *                   https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.
     * @param options The options parameters.
     */
    addOwner(objectId: string, parameters: AddOwnerParameters, options?: GroupsAddOwnerOptionalParams): Promise<void>;
    /**
     * Remove a member from owners.
     * @param objectId The object ID of the group from which to remove the owner.
     * @param ownerObjectId Owner object id
     * @param options The options parameters.
     */
    removeOwner(objectId: string, ownerObjectId: string, options?: GroupsRemoveOwnerOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface GroupsAddMemberOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface GroupsAddOwnerOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface GroupsCreateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the create operation. */
export declare type GroupsCreateResponse = ADGroup;

/** Optional parameters. */
export declare interface GroupsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface GroupsGetGroupMembersNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getGroupMembersNext operation. */
export declare type GroupsGetGroupMembersNextResponse = DirectoryObjectListResult;

/** Optional parameters. */
export declare interface GroupsGetGroupMembersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getGroupMembers operation. */
export declare type GroupsGetGroupMembersResponse = DirectoryObjectListResult;

/** Optional parameters. */
export declare interface GroupsGetMemberGroupsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getMemberGroups operation. */
export declare type GroupsGetMemberGroupsResponse = GroupGetMemberGroupsResult;

/** Optional parameters. */
export declare interface GroupsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type GroupsGetResponse = ADGroup;

/** Optional parameters. */
export declare interface GroupsIsMemberOfOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the isMemberOf operation. */
export declare type GroupsIsMemberOfResponse = CheckGroupMembershipResult;

/** Optional parameters. */
export declare interface GroupsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type GroupsListNextResponse = GroupListResult;

/** Optional parameters. */
export declare interface GroupsListOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply to the operation. */
    filter?: string;
}

/** Optional parameters. */
export declare interface GroupsListOwnersNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOwnersNext operation. */
export declare type GroupsListOwnersNextResponse = DirectoryObjectListResult;

/** Optional parameters. */
export declare interface GroupsListOwnersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOwners operation. */
export declare type GroupsListOwnersResponse = DirectoryObjectListResult;

/** Contains response data for the list operation. */
export declare type GroupsListResponse = GroupListResult;

/** Optional parameters. */
export declare interface GroupsRemoveMemberOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface GroupsRemoveOwnerOptionalParams extends coreClient.OperationOptions {
}

/** Represents a group of URIs that provide terms of service, marketing, support and privacy policy information about an application. The default value for each string is null. */
export declare interface InformationalUrl {
    /** The terms of service URI */
    termsOfService?: string;
    /** The marketing URI */
    marketing?: string;
    /** The privacy policy URI */
    privacy?: string;
    /** The support URI */
    support?: string;
}

/** Active Directory Key Credential information. */
export declare interface KeyCredential {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /** Start date. */
    startDate?: Date;
    /** End date. */
    endDate?: Date;
    /** Key value. */
    value?: string;
    /** Key ID. */
    keyId?: string;
    /** Usage. Acceptable values are 'Verify' and 'Sign'. */
    usage?: string;
    /** Type. Acceptable values are 'AsymmetricX509Cert' and 'Symmetric'. */
    type?: string;
    /** Custom Key Identifier */
    customKeyIdentifier?: string;
}

/** KeyCredential list operation result. */
export declare interface KeyCredentialListResult {
    /** A collection of KeyCredentials. */
    value?: KeyCredential[];
}

/** Request parameters for a KeyCredentials update operation */
export declare interface KeyCredentialsUpdateParameters {
    /** A collection of KeyCredentials. */
    value: KeyCredential[];
}

/** Known values of {@link ConsentType} that the service accepts. */
export declare enum KnownConsentType {
    AllPrincipals = "AllPrincipals",
    Principal = "Principal"
}

/** Known values of {@link GroupMembershipClaimTypes} that the service accepts. */
export declare enum KnownGroupMembershipClaimTypes {
    None = "None",
    SecurityGroup = "SecurityGroup",
    All = "All"
}

/** Known values of {@link UserType} that the service accepts. */
export declare enum KnownUserType {
    Member = "Member",
    Guest = "Guest"
}

/** Represents an OAuth 2.0 delegated permission scope. The specified OAuth 2.0 delegated permission scopes may be requested by client applications (through the requiredResourceAccess collection on the Application object) when calling a resource application. The oauth2Permissions property of the ServicePrincipal entity and of the Application entity is a collection of OAuth2Permission. */
export declare interface OAuth2Permission {
    /** Permission help text that appears in the admin consent and app assignment experiences. */
    adminConsentDescription?: string;
    /** Display name for the permission that appears in the admin consent and app assignment experiences. */
    adminConsentDisplayName?: string;
    /** Unique scope permission identifier inside the oauth2Permissions collection. */
    id?: string;
    /** When creating or updating a permission, this property must be set to true (which is the default). To delete a permission, this property must first be set to false. At that point, in a subsequent call, the permission may be removed. */
    isEnabled?: boolean;
    /** Specifies whether this scope permission can be consented to by an end user, or whether it is a tenant-wide permission that must be consented to by a Company Administrator. Possible values are "User" or "Admin". */
    type?: string;
    /** Permission help text that appears in the end user consent experience. */
    userConsentDescription?: string;
    /** Display name for the permission that appears in the end user consent experience. */
    userConsentDisplayName?: string;
    /** The value of the scope claim that the resource application should expect in the OAuth 2.0 access token. */
    value?: string;
}

export declare interface OAuth2PermissionGrant {
    /** Microsoft.DirectoryServices.OAuth2PermissionGrant */
    odataType?: string;
    /** The id of the resource's service principal granted consent to impersonate the user when accessing the resource (represented by the resourceId property). */
    clientId?: string;
    /** The id of the permission grant */
    objectId?: string;
    /** Indicates if consent was provided by the administrator (on behalf of the organization) or by an individual. */
    consentType?: ConsentType;
    /** When consent type is Principal, this property specifies the id of the user that granted consent and applies only for that user. */
    principalId?: string;
    /** Object Id of the resource you want to grant */
    resourceId?: string;
    /** Specifies the value of the scope claim that the resource application should expect in the OAuth 2.0 access token. For example, User.Read */
    scope?: string;
    /** Start time for TTL */
    startTime?: string;
    /** Expiry time for TTL */
    expiryTime?: string;
}

/** Optional parameters. */
export declare interface OAuth2PermissionGrantCreateOptionalParams extends coreClient.OperationOptions {
    /** The relevant app Service Principal Object Id and the Service Principal Object Id you want to grant. */
    body?: OAuth2PermissionGrant;
}

/** Contains response data for the create operation. */
export declare type OAuth2PermissionGrantCreateResponse = OAuth2PermissionGrant;

/** Optional parameters. */
export declare interface OAuth2PermissionGrantDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface OAuth2PermissionGrantListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type OAuth2PermissionGrantListNextResponse = OAuth2PermissionGrantListResult;

/** Optional parameters. */
export declare interface OAuth2PermissionGrantListOptionalParams extends coreClient.OperationOptions {
    /** This is the Service Principal ObjectId associated with the app */
    filter?: string;
}

/** Contains response data for the list operation. */
export declare type OAuth2PermissionGrantListResponse = OAuth2PermissionGrantListResult;

/** Server response for get oauth2 permissions grants */
export declare interface OAuth2PermissionGrantListResult {
    /** the list of oauth2 permissions grants */
    value?: OAuth2PermissionGrant[];
    /** the URL to get the next set of results. */
    odataNextLink?: string;
}

/** Interface representing a OAuth2PermissionGrantOperations. */
export declare interface OAuth2PermissionGrantOperations {
    /**
     * Queries OAuth2 permissions grants for the relevant SP ObjectId of an app.
     * @param options The options parameters.
     */
    list(options?: OAuth2PermissionGrantListOptionalParams): PagedAsyncIterableIterator<OAuth2PermissionGrant>;
    /**
     * Gets the next page of OAuth2 permission grants
     * @param nextLink Next link for the list operation.
     * @param options The options parameters.
     */
    listNext(nextLink: string, options?: OAuth2PermissionGrantListNextOptionalParams): PagedAsyncIterableIterator<OAuth2PermissionGrant>;
    /**
     * Grants OAuth2 permissions for the relevant resource Ids of an app.
     * @param options The options parameters.
     */
    create(options?: OAuth2PermissionGrantCreateOptionalParams): Promise<OAuth2PermissionGrantCreateResponse>;
    /**
     * Delete a OAuth2 permission grant for the relevant resource Ids of an app.
     * @param objectId The object ID of a permission grant.
     * @param options The options parameters.
     */
    delete(objectId: string, options?: OAuth2PermissionGrantDeleteOptionalParams): Promise<void>;
}

/** Interface representing a Objects. */
export declare interface Objects {
    /**
     * Gets the directory objects specified in a list of object IDs. You can also specify which resource
     * collections (users, groups, etc.) should be searched by specifying the optional types parameter.
     * @param parameters Objects filtering parameters.
     * @param options The options parameters.
     */
    listObjectsByObjectIds(parameters: GetObjectsParameters, options?: ObjectsGetObjectsByObjectIdsOptionalParams): PagedAsyncIterableIterator<DirectoryObjectUnion>;
    /**
     * Gets AD group membership for the specified AD object IDs.
     * @param nextLink Next link for the list operation.
     * @param options The options parameters.
     */
    listObjectsByObjectIdsNext(nextLink: string, options?: ObjectsGetObjectsByObjectIdsNextOptionalParams): PagedAsyncIterableIterator<DirectoryObjectUnion>;
}

/** Optional parameters. */
export declare interface ObjectsGetObjectsByObjectIdsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getObjectsByObjectIdsNext operation. */
export declare type ObjectsGetObjectsByObjectIdsNextResponse = DirectoryObjectListResult;

/** Optional parameters. */
export declare interface ObjectsGetObjectsByObjectIdsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getObjectsByObjectIds operation. */
export declare type ObjectsGetObjectsByObjectIdsResponse = DirectoryObjectListResult;

/** Specifying the claims to be included in a token. */
export declare interface OptionalClaim {
    /** Claim name. */
    name?: string;
    /** Claim source. */
    source?: string;
    /** Is this a required claim. */
    essential?: boolean;
    /** Any object */
    additionalProperties?: Record<string, unknown>;
}

/** Specifying the claims to be included in the token. */
export declare interface OptionalClaims {
    /** Optional claims requested to be included in the id token. */
    idToken?: OptionalClaim[];
    /** Optional claims requested to be included in the access token. */
    accessToken?: OptionalClaim[];
    /** Optional claims requested to be included in the saml token. */
    samlToken?: OptionalClaim[];
}

/** Active Directory Password Credential information. */
export declare interface PasswordCredential {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /** Start date. */
    startDate?: Date;
    /** End date. */
    endDate?: Date;
    /** Key ID. */
    keyId?: string;
    /** Key value. */
    value?: string;
    /** Custom Key Identifier */
    customKeyIdentifier?: Uint8Array;
}

/** PasswordCredential list operation result. */
export declare interface PasswordCredentialListResult {
    /** A collection of PasswordCredentials. */
    value?: PasswordCredential[];
}

/** Request parameters for a PasswordCredentials update operation. */
export declare interface PasswordCredentialsUpdateParameters {
    /** A collection of PasswordCredentials. */
    value: PasswordCredential[];
}

/** The password profile associated with a user. */
export declare interface PasswordProfile {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /** Password */
    password: string;
    /** Whether to force a password change on next login. */
    forceChangePasswordNextLogin?: boolean;
}

/** Contains information about pre authorized client application. */
export declare interface PreAuthorizedApplication {
    /** Represents the application id. */
    appId?: string;
    /** Collection of required app permissions/entitlements from the resource application. */
    permissions?: PreAuthorizedApplicationPermission[];
    /** Collection of extensions from the resource application. */
    extensions?: PreAuthorizedApplicationExtension[];
}

/** Representation of an app PreAuthorizedApplicationExtension required by a pre authorized client app. */
export declare interface PreAuthorizedApplicationExtension {
    /** The extension's conditions. */
    conditions?: string[];
}

/** Contains information about the pre-authorized permissions. */
export declare interface PreAuthorizedApplicationPermission {
    /** Indicates whether the permission set is DirectAccess or impersonation. */
    directAccessGrant?: boolean;
    /** The list of permissions. */
    accessGrants?: string[];
}

/** Specifies the set of OAuth 2.0 permission scopes and app roles under the specified resource that an application requires access to. The specified OAuth 2.0 permission scopes may be requested by client applications (through the requiredResourceAccess collection) when calling a resource application. The requiredResourceAccess property of the Application entity is a collection of RequiredResourceAccess. */
export declare interface RequiredResourceAccess {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /** The list of OAuth2.0 permission scopes and app roles that the application requires from the specified resource. */
    resourceAccess: ResourceAccess[];
    /** The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application. */
    resourceAppId?: string;
}

/** Specifies an OAuth 2.0 permission scope or an app role that an application requires. The resourceAccess property of the RequiredResourceAccess type is a collection of ResourceAccess. */
export declare interface ResourceAccess {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /** The unique identifier for one of the OAuth2Permission or AppRole instances that the resource application exposes. */
    id: string;
    /** Specifies whether the id property references an OAuth2Permission or an AppRole. Possible values are "scope" or "role". */
    type?: string;
}

/** Active Directory service principal information. */
export declare type ServicePrincipal = DirectoryObject & {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    objectType: "ServicePrincipal";
    /** whether or not the service principal account is enabled */
    accountEnabled?: boolean;
    /** alternative names */
    alternativeNames?: string[];
    /**
     * The display name exposed by the associated application.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly appDisplayName?: string;
    /** The application ID. */
    appId?: string;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly appOwnerTenantId?: string;
    /** Specifies whether an AppRoleAssignment to a user or group is required before Azure AD will issue a user or access token to the application. */
    appRoleAssignmentRequired?: boolean;
    /** The collection of application roles that an application may declare. These roles can be assigned to users, groups or service principals. */
    appRoles?: AppRole[];
    /** The display name of the service principal. */
    displayName?: string;
    /** A URL provided by the author of the associated application to report errors when using the application. */
    errorUrl?: string;
    /** The URL to the homepage of the associated application. */
    homepage?: string;
    /** The collection of key credentials associated with the service principal. */
    keyCredentials?: KeyCredential[];
    /** A URL provided by the author of the associated application to logout */
    logoutUrl?: string;
    /**
     * The OAuth 2.0 permissions exposed by the associated application.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly oauth2Permissions?: OAuth2Permission[];
    /** The collection of password credentials associated with the service principal. */
    passwordCredentials?: PasswordCredential[];
    /** The thumbprint of preferred certificate to sign the token */
    preferredTokenSigningKeyThumbprint?: string;
    /** The publisher's name of the associated application */
    publisherName?: string;
    /** The URLs that user tokens are sent to for sign in with the associated application.  The redirect URIs that the oAuth 2.0 authorization code and access tokens are sent to for the associated application. */
    replyUrls?: string[];
    /** The URL to the SAML metadata of the associated application */
    samlMetadataUrl?: string;
    /** A collection of service principal names. */
    servicePrincipalNames?: string[];
    /** the type of the service principal */
    servicePrincipalType?: string;
    /** Optional list of tags that you can apply to your service principals. Not nullable. */
    tags?: string[];
};

/** Active Directory service principal common properties shared among GET, POST and PATCH */
export declare interface ServicePrincipalBase {
    /** whether or not the service principal account is enabled */
    accountEnabled?: boolean;
    /** Specifies whether an AppRoleAssignment to a user or group is required before Azure AD will issue a user or access token to the application. */
    appRoleAssignmentRequired?: boolean;
    /** The collection of key credentials associated with the service principal. */
    keyCredentials?: KeyCredential[];
    /** The collection of password credentials associated with the service principal. */
    passwordCredentials?: PasswordCredential[];
    /** the type of the service principal */
    servicePrincipalType?: string;
    /** Optional list of tags that you can apply to your service principals. Not nullable. */
    tags?: string[];
}

/** Request parameters for creating a new service principal. */
export declare type ServicePrincipalCreateParameters = ServicePrincipalBase & {
    /** The application ID. */
    appId: string;
};

/** Server response for get tenant service principals API call. */
export declare interface ServicePrincipalListResult {
    /** the list of service principals. */
    value?: ServicePrincipal[];
    /** the URL to get the next set of results. */
    odataNextLink?: string;
}

/** Service Principal Object Result. */
export declare interface ServicePrincipalObjectResult {
    /** The Object ID of the service principal with the specified application ID. */
    value?: string;
    /** The URL representing edm equivalent. */
    odataMetadata?: string;
}

/** Interface representing a ServicePrincipals. */
export declare interface ServicePrincipals {
    /**
     * Gets a list of service principals from the current tenant.
     * @param options The options parameters.
     */
    list(options?: ServicePrincipalsListOptionalParams): PagedAsyncIterableIterator<ServicePrincipal>;
    /**
     * The owners are a set of non-admin users who are allowed to modify this object.
     * @param objectId The object ID of the service principal for which to get owners.
     * @param options The options parameters.
     */
    listOwners(objectId: string, options?: ServicePrincipalsListOwnersOptionalParams): PagedAsyncIterableIterator<DirectoryObjectUnion>;
    /**
     * Get the keyCredentials associated with the specified service principal.
     * @param objectId The object ID of the service principal for which to get keyCredentials.
     * @param options The options parameters.
     */
    listKeyCredentials(objectId: string, options?: ServicePrincipalsListKeyCredentialsOptionalParams): PagedAsyncIterableIterator<KeyCredential>;
    /**
     * Gets the passwordCredentials associated with a service principal.
     * @param objectId The object ID of the service principal.
     * @param options The options parameters.
     */
    listPasswordCredentials(objectId: string, options?: ServicePrincipalsListPasswordCredentialsOptionalParams): PagedAsyncIterableIterator<PasswordCredential>;
    /**
     * Gets a list of service principals from the current tenant.
     * @param nextLink Next link for the list operation.
     * @param options The options parameters.
     */
    listNext(nextLink: string, options?: ServicePrincipalsListNextOptionalParams): PagedAsyncIterableIterator<ServicePrincipal>;
    /**
     * Creates a service principal in the directory.
     * @param parameters Parameters to create a service principal.
     * @param options The options parameters.
     */
    create(parameters: ServicePrincipalCreateParameters, options?: ServicePrincipalsCreateOptionalParams): Promise<ServicePrincipalsCreateResponse>;
    /**
     * Updates a service principal in the directory.
     * @param objectId The object ID of the service principal to delete.
     * @param parameters Parameters to update a service principal.
     * @param options The options parameters.
     */
    update(objectId: string, parameters: ServicePrincipalUpdateParameters, options?: ServicePrincipalsUpdateOptionalParams): Promise<void>;
    /**
     * Deletes a service principal from the directory.
     * @param objectId The object ID of the service principal to delete.
     * @param options The options parameters.
     */
    delete(objectId: string, options?: ServicePrincipalsDeleteOptionalParams): Promise<void>;
    /**
     * Gets service principal information from the directory. Query by objectId or pass a filter to query
     * by appId
     * @param objectId The object ID of the service principal to get.
     * @param options The options parameters.
     */
    get(objectId: string, options?: ServicePrincipalsGetOptionalParams): Promise<ServicePrincipalsGetResponse>;
    /**
     * Update the keyCredentials associated with a service principal.
     * @param objectId The object ID for which to get service principal information.
     * @param parameters Parameters to update the keyCredentials of an existing service principal.
     * @param options The options parameters.
     */
    updateKeyCredentials(objectId: string, parameters: KeyCredentialsUpdateParameters, options?: ServicePrincipalsUpdateKeyCredentialsOptionalParams): Promise<void>;
    /**
     * Updates the passwordCredentials associated with a service principal.
     * @param objectId The object ID of the service principal.
     * @param parameters Parameters to update the passwordCredentials of an existing service principal.
     * @param options The options parameters.
     */
    updatePasswordCredentials(objectId: string, parameters: PasswordCredentialsUpdateParameters, options?: ServicePrincipalsUpdatePasswordCredentialsOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ServicePrincipalsCreateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the create operation. */
export declare type ServicePrincipalsCreateResponse = ServicePrincipal;

/** Optional parameters. */
export declare interface ServicePrincipalsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ServicePrincipalsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ServicePrincipalsGetResponse = ServicePrincipal;

/** Optional parameters. */
export declare interface ServicePrincipalsListKeyCredentialsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listKeyCredentials operation. */
export declare type ServicePrincipalsListKeyCredentialsResponse = KeyCredentialListResult;

/** Optional parameters. */
export declare interface ServicePrincipalsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type ServicePrincipalsListNextResponse = ServicePrincipalListResult;

/** Optional parameters. */
export declare interface ServicePrincipalsListOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply to the operation. */
    filter?: string;
}

/** Optional parameters. */
export declare interface ServicePrincipalsListOwnersNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOwnersNext operation. */
export declare type ServicePrincipalsListOwnersNextResponse = DirectoryObjectListResult;

/** Optional parameters. */
export declare interface ServicePrincipalsListOwnersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOwners operation. */
export declare type ServicePrincipalsListOwnersResponse = DirectoryObjectListResult;

/** Optional parameters. */
export declare interface ServicePrincipalsListPasswordCredentialsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listPasswordCredentials operation. */
export declare type ServicePrincipalsListPasswordCredentialsResponse = PasswordCredentialListResult;

/** Contains response data for the list operation. */
export declare type ServicePrincipalsListResponse = ServicePrincipalListResult;

/** Optional parameters. */
export declare interface ServicePrincipalsUpdateKeyCredentialsOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ServicePrincipalsUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ServicePrincipalsUpdatePasswordCredentialsOptionalParams extends coreClient.OperationOptions {
}

/** Request parameters for update an existing service principal. */
export declare type ServicePrincipalUpdateParameters = ServicePrincipalBase & {};

/** Interface representing a SignedInUser. */
export declare interface SignedInUser {
    /**
     * Get the list of directory objects that are owned by the user.
     * @param options The options parameters.
     */
    listOwnedObjects(options?: SignedInUserListOwnedObjectsOptionalParams): PagedAsyncIterableIterator<DirectoryObjectUnion>;
    /**
     * Get the list of directory objects that are owned by the user.
     * @param nextLink Next link for the list operation.
     * @param options The options parameters.
     */
    listOwnedObjectsNext(nextLink: string, options?: SignedInUserListOwnedObjectsNextOptionalParams): PagedAsyncIterableIterator<DirectoryObjectUnion>;
    /**
     * Gets the details for the currently logged-in user.
     * @param options The options parameters.
     */
    get(options?: SignedInUserGetOptionalParams): Promise<SignedInUserGetResponse>;
}

/** Optional parameters. */
export declare interface SignedInUserGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type SignedInUserGetResponse = User;

/** Optional parameters. */
export declare interface SignedInUserListOwnedObjectsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOwnedObjectsNext operation. */
export declare type SignedInUserListOwnedObjectsNextResponse = DirectoryObjectListResult;

/** Optional parameters. */
export declare interface SignedInUserListOwnedObjectsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOwnedObjects operation. */
export declare type SignedInUserListOwnedObjectsResponse = DirectoryObjectListResult;

/** Contains information about a sign-in name of a local account user in an Azure Active Directory B2C tenant. */
export declare interface SignInName {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /** A string value that can be used to classify user sign-in types in your directory, such as 'emailAddress' or 'userName'. */
    type?: string;
    /** The sign-in used by the local account. Must be unique across the company/tenant. For example, 'johnc@example.com'. */
    value?: string;
}

/** Active Directory user information. */
export declare type User = DirectoryObject & {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    objectType: "User";
    /** This must be specified if you are using a federated domain for the user's userPrincipalName (UPN) property when creating a new user account. It is used to associate an on-premises Active Directory user account with their Azure AD user object. */
    immutableId?: string;
    /** A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. Examples include: "US", "JP", and "GB". */
    usageLocation?: string;
    /** The given name for the user. */
    givenName?: string;
    /** The user's surname (family name or last name). */
    surname?: string;
    /** A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'. */
    userType?: UserType;
    /** Whether the account is enabled. */
    accountEnabled?: boolean;
    /** The display name of the user. */
    displayName?: string;
    /** The principal name of the user. */
    userPrincipalName?: string;
    /** The mail alias for the user. */
    mailNickname?: string;
    /** The primary email address of the user. */
    mail?: string;
    /** The sign-in names of the user. */
    signInNames?: SignInName[];
};

export declare interface UserBase {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /** This must be specified if you are using a federated domain for the user's userPrincipalName (UPN) property when creating a new user account. It is used to associate an on-premises Active Directory user account with their Azure AD user object. */
    immutableId?: string;
    /** A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. Examples include: "US", "JP", and "GB". */
    usageLocation?: string;
    /** The given name for the user. */
    givenName?: string;
    /** The user's surname (family name or last name). */
    surname?: string;
    /** A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'. */
    userType?: UserType;
}

/** Request parameters for creating a new work or school account user. */
export declare type UserCreateParameters = UserBase & {
    /** Whether the account is enabled. */
    accountEnabled: boolean;
    /** The display name of the user. */
    displayName: string;
    /** Password Profile */
    passwordProfile: PasswordProfile;
    /** The user principal name (someuser@contoso.com). It must contain one of the verified domains for the tenant. */
    userPrincipalName: string;
    /** The mail alias for the user. */
    mailNickname: string;
    /** The primary email address of the user. */
    mail?: string;
};

/** Request parameters for GetMemberGroups API call. */
export declare interface UserGetMemberGroupsParameters {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /** If true, only membership in security-enabled groups should be checked. Otherwise, membership in all groups should be checked. */
    securityEnabledOnly: boolean;
}

/** Server response for GetMemberGroups API call. */
export declare interface UserGetMemberGroupsResult {
    /** A collection of group IDs of which the user is a member. */
    value?: string[];
}

/** Server response for Get tenant users API call. */
export declare interface UserListResult {
    /** the list of users. */
    value?: User[];
    /** The URL to get the next set of results. */
    odataNextLink?: string;
}

/** Interface representing a Users. */
export declare interface Users {
    /**
     * Gets list of users for the current tenant.
     * @param options The options parameters.
     */
    list(options?: UsersListOptionalParams): PagedAsyncIterableIterator<User>;
    /**
     * Gets a collection that contains the object IDs of the groups of which the user is a member.
     * @param objectId The object ID of the user for which to get group membership.
     * @param parameters User filtering parameters.
     * @param options The options parameters.
     */
    listMemberGroups(objectId: string, parameters: UserGetMemberGroupsParameters, options?: UsersGetMemberGroupsOptionalParams): PagedAsyncIterableIterator<string>;
    /**
     * Gets a list of users for the current tenant.
     * @param nextLink Next link for the list operation.
     * @param options The options parameters.
     */
    listNext(nextLink: string, options?: UsersListNextOptionalParams): PagedAsyncIterableIterator<User>;
    /**
     * Create a new user.
     * @param parameters Parameters to create a user.
     * @param options The options parameters.
     */
    create(parameters: UserCreateParameters, options?: UsersCreateOptionalParams): Promise<UsersCreateResponse>;
    /**
     * Gets user information from the directory.
     * @param upnOrObjectId The object ID or principal name of the user for which to get information.
     * @param options The options parameters.
     */
    get(upnOrObjectId: string, options?: UsersGetOptionalParams): Promise<UsersGetResponse>;
    /**
     * Updates a user.
     * @param upnOrObjectId The object ID or principal name of the user to update.
     * @param parameters Parameters to update an existing user.
     * @param options The options parameters.
     */
    update(upnOrObjectId: string, parameters: UserUpdateParameters, options?: UsersUpdateOptionalParams): Promise<void>;
    /**
     * Delete a user.
     * @param upnOrObjectId The object ID or principal name of the user to delete.
     * @param options The options parameters.
     */
    delete(upnOrObjectId: string, options?: UsersDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface UsersCreateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the create operation. */
export declare type UsersCreateResponse = User;

/** Optional parameters. */
export declare interface UsersDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface UsersGetMemberGroupsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getMemberGroups operation. */
export declare type UsersGetMemberGroupsResponse = UserGetMemberGroupsResult;

/** Optional parameters. */
export declare interface UsersGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type UsersGetResponse = User;

/** Optional parameters. */
export declare interface UsersListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type UsersListNextResponse = UserListResult;

/** Optional parameters. */
export declare interface UsersListOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply to the operation. */
    filter?: string;
    /** The expand value for the operation result. */
    expand?: string;
}

/** Contains response data for the list operation. */
export declare type UsersListResponse = UserListResult;

/** Optional parameters. */
export declare interface UsersUpdateOptionalParams extends coreClient.OperationOptions {
}

/**
 * Defines values for UserType. \
 * {@link KnownUserType} can be used interchangeably with UserType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Member** \
 * **Guest**
 */
export declare type UserType = string;

/** Request parameters for updating an existing work or school account user. */
export declare type UserUpdateParameters = UserBase & {
    /** Whether the account is enabled. */
    accountEnabled?: boolean;
    /** The display name of the user. */
    displayName?: string;
    /** The password profile of the user. */
    passwordProfile?: PasswordProfile;
    /** The user principal name (someuser@contoso.com). It must contain one of the verified domains for the tenant. */
    userPrincipalName?: string;
    /** The mail alias for the user. */
    mailNickname?: string;
};

export { }

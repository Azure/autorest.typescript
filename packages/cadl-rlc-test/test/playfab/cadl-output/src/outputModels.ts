export interface ObjectOutput {}

/** Combined entity type and ID structure which uniquely identifies a single entity. */
export interface EntityKeyOutput {
  /** Unique ID of the entity. */
  Id: string;
  /**
   * Entity type. See
   * https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types
   */
  Type?: string;
}

export interface GetEntityTokenResponseOutput {
  /**
   * The HTTP status code. If X-ReportErrorAsSuccess header is set to true, the
   * service will return 200 and this will report the actual HTTP status code.
   */
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: GetEntityTokenResponseDataOutput;
}

export interface GetEntityTokenResponseDataOutput {
  /** The entity id and type. */
  Entity?: EntityKeyOutput;
  /** The token used to set X-EntityToken for all entity based API calls. */
  EntityToken?: string;
  /** The time the token will expire, if it is an expiring token, in UTC. */
  TokenExpiration?: string;
}

/** The basic wrapper around every failed API response */
export interface ApiErrorWrapperOutput {
  /** Numerical HTTP code */
  code: number;
  /** String HTTP code */
  status?: string;
  /** Playfab error code */
  error?: string;
  /** Numerical PlayFab error code */
  errorCode: number;
  /** Description for the PlayFab errorCode */
  errorMessage?: string;
  /** Detailed description of individual issues with the request object */
  errorDetails?: ObjectOutput;
}

export interface AuthenticateIdentityResultOutput {
  /**
   * The HTTP status code. If X-ReportErrorAsSuccess header is set to true, the
   * service will return 200 and this will report the actual HTTP status code.
   */
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: AuthenticateIdentityResultDataOutput;
}

export interface AuthenticateIdentityResultDataOutput {
  /**
   * Unique identifier of the link between the player identity and associated
   * master_player_account, if a new link was created as directed by the value of
   * 'BehaviorIfIdentityNotLinked'.
   */
  CreatedIdentityLinkId?: string;
  /**
   * Entity token for the master_player_account linked to the authenticated player
   * identity.
   */
  MasterPlayerAccount?: EntityTokenResponseOutput;
  /**
   * Entity token for the title_player_account for the master_player_account and
   * title, if TitleId is specified in the request
   */
  TitlePlayerAccount?: EntityTokenResponseOutput;
}

export interface EntityTokenResponseOutput {
  /** The entity id and type. */
  Entity?: EntityKeyOutput;
  /** The token used to set X-EntityToken for all entity based API calls. */
  EntityToken?: string;
  /** The time the token will expire, if it is an expiring token, in UTC. */
  TokenExpiration?: string;
}

export interface GetLinkedPlayerIdentitiesResultOutput {
  /**
   * The HTTP status code. If X-ReportErrorAsSuccess header is set to true, the
   * service will return 200 and this will report the actual HTTP status code.
   */
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: GetLinkedPlayerIdentitiesResultDataOutput;
}

export interface GetLinkedPlayerIdentitiesResultDataOutput {
  /** List of player identities currently linked to the master_player_account. */
  LinkedIdentities?: Array<LinkedPlayerIdentityOutput>;
}

export interface LinkedPlayerIdentityOutput {
  /**
   * Unique identifier of the link between the player identity and
   * master_player_account.Can be used to specify the link in requests to
   * UnlinkPlayerIdentity
   */
  IdentityLinkId?: string;
  /**
   * The player identity provider in which the identity exists.
   *
   * Possible values: AndroidDevice, Apple, CustomId, Email, FacebookInstantGames, GameCenter, Google, iOSDevice, Kongregate, NintendoSwitchDevice, NintendoAccount, OpenId, PSN, ServerCustomId, Steam, Twitch, Username, Xbox, GooglePlayGames
   */
  IdentityProvider: string;
  /**
   * The unique identifier of the player identity, as assigned by the player
   * identity provider. The format varies by identity provider
   */
  IdentityProviderIssuedId?: string;
}

export interface UnlinkPlayerIdentityResultOutput {
  /**
   * The HTTP status code. If X-ReportErrorAsSuccess header is set to true, the
   * service will return 200 and this will report the actual HTTP status code.
   */
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  /** Any object */
  data?: ObjectOutput;
}

export interface AbortFileUploadsResponseOutput {
  /**
   * The HTTP status code. If X-ReportErrorAsSuccess header is set to true, the
   * service will return 200 and this will report the actual HTTP status code.
   */
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: AbortFileUploadsResponseDataOutput;
}

export interface AbortFileUploadsResponseDataOutput {
  /** The entity id and type. */
  Entity?: EntityKeyOutput;
  /**
   * The current version of the profile, can be used for concurrency control during
   * updates.
   */
  ProfileVersion?: number;
}

export interface DeleteFilesResponseOutput {
  /**
   * The HTTP status code. If X-ReportErrorAsSuccess header is set to true, the
   * service will return 200 and this will report the actual HTTP status code.
   */
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: DeleteFilesResponseDataOutput;
}

export interface DeleteFilesResponseDataOutput {
  /** The entity id and type. */
  Entity?: EntityKeyOutput;
  /**
   * The current version of the profile, can be used for concurrency control during
   * updates.
   */
  ProfileVersion?: number;
}

export interface FinalizeFileUploadsResponseOutput {
  /**
   * The HTTP status code. If X-ReportErrorAsSuccess header is set to true, the
   * service will return 200 and this will report the actual HTTP status code.
   */
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: FinalizeFileUploadsResponseDataOutput;
}

export interface FinalizeFileUploadsResponseDataOutput {
  /** The entity id and type. */
  Entity?: EntityKeyOutput;
  /** Collection of metadata for the entity's files */
  Metadata?: GetFileMetadataOutput;
  /**
   * The current version of the profile, can be used for concurrency control during
   * updates.
   */
  ProfileVersion?: number;
}

export interface GetFileMetadataOutput {
  /**
   * Checksum value for the file, can be used to check if the file on the server has
   * changed.
   */
  Checksum?: string;
  /** Download URL where the file can be retrieved */
  DownloadUrl?: string;
  /** Name of the file */
  FileName?: string;
  /** Last UTC time the file was modified */
  LastModified: string;
  /** Storage service's reported byte count */
  Size: number;
}

export interface GetFilesResponseOutput {
  /**
   * The HTTP status code. If X-ReportErrorAsSuccess header is set to true, the
   * service will return 200 and this will report the actual HTTP status code.
   */
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: GetFilesResponseDataOutput;
}

export interface GetFilesResponseDataOutput {
  /** The entity id and type. */
  Entity?: EntityKeyOutput;
  /** Collection of metadata for the entity's files */
  Metadata?: GetFileMetadataOutput;
  /**
   * The current version of the profile, can be used for concurrency control during
   * updates.
   */
  ProfileVersion?: number;
}

export interface InitiateFileUploadsResponseOutput {
  /**
   * The HTTP status code. If X-ReportErrorAsSuccess header is set to true, the
   * service will return 200 and this will report the actual HTTP status code.
   */
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: InitiateFileUploadsResponseDataOutput;
}

export interface InitiateFileUploadsResponseDataOutput {
  /** The entity id and type. */
  Entity?: EntityKeyOutput;
  /**
   * The current version of the profile, can be used for concurrency control during
   * updates.
   */
  ProfileVersion?: number;
  /** Collection of file names and upload urls */
  UploadDetails?: Array<InitiateFileUploadMetadataOutput>;
}

export interface InitiateFileUploadMetadataOutput {
  /** Name of the file. */
  FileName?: string;
  /** Location the data should be sent to via an HTTP PUT operation. */
  UploadUrl?: string;
}

export interface GetObjectsResponseOutput {
  /**
   * The HTTP status code. If X-ReportErrorAsSuccess header is set to true, the
   * service will return 200 and this will report the actual HTTP status code.
   */
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: GetObjectsResponseDataOutput;
}

export interface GetObjectsResponseDataOutput {
  /** The entity id and type. */
  Entity?: EntityKeyOutput;
  /** Requested objects that the calling entity has access to */
  Objects?: ObjectResultOutput;
  /**
   * The current version of the profile, can be used for concurrency control during
   * updates.
   */
  ProfileVersion?: number;
}

export interface ObjectResultOutput {
  /** Un-escaped JSON object, if EscapeObject false or default. */
  DataObject?: ObjectOutput;
  /** Escaped string JSON body of the object, if EscapeObject is true. */
  EscapedDataObject?: string;
  /** Name of the object. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.' */
  ObjectName?: string;
}

export interface SetObjectsResponseOutput {
  /**
   * The HTTP status code. If X-ReportErrorAsSuccess header is set to true, the
   * service will return 200 and this will report the actual HTTP status code.
   */
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: SetObjectsResponseDataOutput;
}

export interface SetObjectsResponseDataOutput {
  /** New version of the entity profile. */
  ProfileVersion?: number;
  /** New version of the entity profile. */
  SetResults?: Array<SetObjectInfoOutput>;
}

export interface SetObjectInfoOutput {
  /** Name of the object */
  ObjectName?: string;
  /** Optional reason to explain why the operation was the result that it was. */
  OperationReason?: string;
  /**
   * Indicates which operation was completed, either Created, Updated, Deleted or
   * None.
   *
   * Possible values: Created, Updated, Deleted, None
   */
  SetResult?: string;
}

export interface WriteEventsResponseOutput {
  /**
   * The HTTP status code. If X-ReportErrorAsSuccess header is set to true, the
   * service will return 200 and this will report the actual HTTP status code.
   */
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: WriteEventsResponseDataOutput;
}

export interface WriteEventsResponseDataOutput {
  /**
   * The unique identifiers assigned by the server to the events, in the same order
   * as the events in the request. Only returned if FlushToPlayStream option is
   * true.
   */
  AssignedEventIds?: string[];
}

export interface LoginPlayerResultOutput {
  /**
   * The HTTP status code. If X-ReportErrorAsSuccess header is set to true, the
   * service will return 200 and this will report the actual HTTP status code.
   */
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: LoginPlayerResultDataOutput;
}

export interface LoginPlayerResultDataOutput {
  /**
   * Entity token for the title_player_account entity associated with the
   * master_player_account and title.
   */
  TitlePlayerAccountEntityToken?: EntityTokenResponseOutput;
}

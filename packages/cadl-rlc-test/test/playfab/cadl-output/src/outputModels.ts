export interface ObjectOutput {}

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
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: GetEntityTokenResponseDataOutput;
}

export interface GetEntityTokenResponseDataOutput {
  /** Combined entity type and ID structure which uniquely identifies a single entity. */
  Entity?: EntityKeyOutput;
  /** The token used to set X-EntityToken for all entity based API calls. */
  EntityToken?: string;
  /** The time the token will expire, if it is an expiring token, in UTC. */
  TokenExpiration?: string;
}

export interface ApiErrorWrapperOutput {
  code: number;
  /** String HTTP code */
  status?: string;
  /** Playfab error code */
  error?: string;
  errorCode: number;
  /** Description for the PlayFab errorCode */
  errorMessage?: string;
  errorDetails?: ObjectOutput;
}

export interface AuthenticateIdentityResultOutput {
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
  MasterPlayerAccount?: EntityTokenResponseOutput;
  TitlePlayerAccount?: EntityTokenResponseOutput;
}

export interface EntityTokenResponseOutput {
  /** Combined entity type and ID structure which uniquely identifies a single entity. */
  Entity?: EntityKeyOutput;
  /** The token used to set X-EntityToken for all entity based API calls. */
  EntityToken?: string;
  /** The time the token will expire, if it is an expiring token, in UTC. */
  TokenExpiration?: string;
}

export interface GetLinkedPlayerIdentitiesResultOutput {
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: GetLinkedPlayerIdentitiesResultDataOutput;
}

export interface GetLinkedPlayerIdentitiesResultDataOutput {
  LinkedIdentities?: Array<LinkedPlayerIdentityOutput>;
}

export interface LinkedPlayerIdentityOutput {
  /**
   * Unique identifier of the link between the player identity and
   * master_player_account.Can be used to specify the link in requests to
   * UnlinkPlayerIdentity
   */
  IdentityLinkId?: string;
  /** The player identity provider in which the identity exists. */
  IdentityProvider:
    | "AndroidDevice"
    | "Apple"
    | "CustomId"
    | "Email"
    | "FacebookInstantGames"
    | "GameCenter"
    | "Google"
    | "iOSDevice"
    | "Kongregate"
    | "NintendoSwitchDevice"
    | "NintendoAccount"
    | "OpenId"
    | "PSN"
    | "ServerCustomId"
    | "Steam"
    | "Twitch"
    | "Username"
    | "Xbox"
    | "GooglePlayGames";
  /**
   * The unique identifier of the player identity, as assigned by the player
   * identity provider. The format varies by identity provider
   */
  IdentityProviderIssuedId?: string;
}

export interface UnlinkPlayerIdentityResultOutput {
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: ObjectOutput;
}

export interface AbortFileUploadsResponseOutput {
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: AbortFileUploadsResponseDataOutput;
}

export interface AbortFileUploadsResponseDataOutput {
  /** Combined entity type and ID structure which uniquely identifies a single entity. */
  Entity?: EntityKeyOutput;
  ProfileVersion?: number;
}

export interface DeleteFilesResponseOutput {
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: DeleteFilesResponseDataOutput;
}

export interface DeleteFilesResponseDataOutput {
  /** Combined entity type and ID structure which uniquely identifies a single entity. */
  Entity?: EntityKeyOutput;
  ProfileVersion?: number;
}

export interface FinalizeFileUploadsResponseOutput {
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: FinalizeFileUploadsResponseDataOutput;
}

export interface FinalizeFileUploadsResponseDataOutput {
  /** Combined entity type and ID structure which uniquely identifies a single entity. */
  Entity?: EntityKeyOutput;
  Metadata?: GetFileMetadataOutput;
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
  Size: number;
}

export interface GetFilesResponseOutput {
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: GetFilesResponseDataOutput;
}

export interface GetFilesResponseDataOutput {
  /** Combined entity type and ID structure which uniquely identifies a single entity. */
  Entity?: EntityKeyOutput;
  Metadata?: GetFileMetadataOutput;
  ProfileVersion?: number;
}

export interface InitiateFileUploadsResponseOutput {
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: InitiateFileUploadsResponseDataOutput;
}

export interface InitiateFileUploadsResponseDataOutput {
  /** Combined entity type and ID structure which uniquely identifies a single entity. */
  Entity?: EntityKeyOutput;
  ProfileVersion?: number;
  UploadDetails?: Array<InitiateFileUploadMetadataOutput>;
}

export interface InitiateFileUploadMetadataOutput {
  /** Name of the file. */
  FileName?: string;
  /** Location the data should be sent to via an HTTP PUT operation. */
  UploadUrl?: string;
}

export interface GetObjectsResponseOutput {
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: GetObjectsResponseDataOutput;
}

export interface GetObjectsResponseDataOutput {
  /** Combined entity type and ID structure which uniquely identifies a single entity. */
  Entity?: EntityKeyOutput;
  Objects?: ObjectResultOutput;
  ProfileVersion?: number;
}

export interface ObjectResultOutput {
  DataObject?: ObjectOutput;
  /** Escaped string JSON body of the object, if EscapeObject is true. */
  EscapedDataObject?: string;
  /** Name of the object. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.' */
  ObjectName?: string;
}

export interface SetObjectsResponseOutput {
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: SetObjectsResponseDataOutput;
}

export interface SetObjectsResponseDataOutput {
  ProfileVersion?: number;
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
   */
  SetResult?: "Created" | "Updated" | "Deleted" | "None";
}

export interface WriteEventsResponseOutput {
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: WriteEventsResponseDataOutput;
}

export interface WriteEventsResponseDataOutput {
  AssignedEventIds?: string[];
}

export interface LoginPlayerResultOutput {
  code?: number;
  /** The HTTP status code as a string. */
  status?: string;
  data?: LoginPlayerResultDataOutput;
}

export interface LoginPlayerResultDataOutput {
  TitlePlayerAccountEntityToken?: EntityTokenResponseOutput;
}

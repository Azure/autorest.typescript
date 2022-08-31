export interface GetEntityTokenRequest {
  CustomTags?: object;
  /** Combined entity type and ID structure which uniquely identifies a single entity. */
  Entity?: object;
}

export interface Object {}

export interface EntityKey {
  /** Unique ID of the entity. */
  Id: string;
  /**
   * Entity type. See
   * https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types
   */
  Type?: string;
}

export interface AuthenticateAndroidDeviceIdIdentityRequest {
  /** Identifier for the user's android device. */
  AndroidDeviceId: string;
  /**
   * Controls what happens if the authenticated player identity is not yet
   * associated with a master_player_account in the player account pool.
   * 'CreateAndLinkNewAccount' (default) creates a new master_player_account entity
   * and associates the player identity with it. 'LinkToExistingAccount' attempts to
   * associate the player identity with the master_player_account entity specified
   * by 'ExistingMasterPlayerAccountId', returning an 'AccountAlreadyLinked' error
   * if the master_player_account is already associated with another player
   * identity. 'LeaveUnlinked' leaves the player identity unlinked and returns the
   * 'AccountNotFound' error.
   */
  BehaviorIfIdentityNotLinked:
    | "CreateAndLinkNewAccount"
    | "LinkToExistingAccount"
    | "LeaveUnlinked";
  CustomTags?: object;
  /**
   * Optional master_player_account entity in the player account pool to associate
   * with the authenticated player identity. When specified, then the request must
   * be authenticated as either the same master_player_account (with an entity token
   * obtained from a previous authentication API call) or as another entity
   * authorized to make calls on behalf of it, such as a title entity in the same
   * player account pool (with a title secret key).
   */
  ExistingMasterPlayerAccountId?: string;
  /**
   * The player account pool containing the player account (master_player_account
   * entity) to be looked-up or created for the identity. The player account pool ID
   * is also known as the "publisher ID" or "namespace ID".
   */
  PlayerAccountPoolId: string;
  /**
   * Optional title to log the master_player_account into after authenticating the
   * player. This option can be used to combine the player authentication and title
   * login operations in a single API request, avoiding a second API request to
   * 'TitlePlayer/LoginPlayer'. When specified, an entity token for the
   * title_player_account entity is returned in the 'TitlePlayerAccountEntityToken'
   * property of the response.
   */
  TitleId?: string;
}

export interface AuthenticateCustomIdIdentityRequest {
  /**
   * Controls what happens if the authenticated player identity is not yet
   * associated with a master_player_account in the player account pool.
   * 'CreateAndLinkNewAccount' (default) creates a new master_player_account entity
   * and associates the player identity with it. 'LinkToExistingAccount' attempts to
   * associate the player identity with the master_player_account entity specified
   * by 'ExistingMasterPlayerAccountId', returning an 'AccountAlreadyLinked' error
   * if the master_player_account is already associated with another player
   * identity. 'LeaveUnlinked' leaves the player identity unlinked and returns the
   * 'AccountNotFound' error.
   */
  BehaviorIfIdentityNotLinked:
    | "CreateAndLinkNewAccount"
    | "LinkToExistingAccount"
    | "LeaveUnlinked";
  /**
   * Custom string value which uniquely identifies a player identity within the
   * player account pool.
   */
  CustomId: string;
  CustomTags?: object;
  /**
   * Optional master_player_account entity in the player account pool to associate
   * with the authenticated player identity. When specified, then the request must
   * be authenticated as either the same master_player_account (with an entity token
   * obtained from a previous authentication API call) or as another entity
   * authorized to make calls on behalf of it, such as a title entity in the same
   * player account pool (with a title secret key).
   */
  ExistingMasterPlayerAccountId?: string;
  /**
   * The player account pool containing the player account (master_player_account
   * entity) to be looked-up or created for the identity. The player account pool ID
   * is also known as the "publisher ID" or "namespace ID".
   */
  PlayerAccountPoolId: string;
  /**
   * Optional title to log the master_player_account into after authenticating the
   * player. This option can be used to combine the player authentication and title
   * login operations in a single API request, avoiding a second API request to
   * 'TitlePlayer/LoginPlayer'. When specified, an entity token for the
   * title_player_account entity is returned in the 'TitlePlayerAccountEntityToken'
   * property of the response.
   */
  TitleId?: string;
}

export interface AuthenticateIOSDeviceIdIdentityRequest {
  /**
   * Controls what happens if the authenticated player identity is not yet
   * associated with a master_player_account in the player account pool.
   * 'CreateAndLinkNewAccount' (default) creates a new master_player_account entity
   * and associates the player identity with it. 'LinkToExistingAccount' attempts to
   * associate the player identity with the master_player_account entity specified
   * by 'ExistingMasterPlayerAccountId', returning an 'AccountAlreadyLinked' error
   * if the master_player_account is already associated with another player
   * identity. 'LeaveUnlinked' leaves the player identity unlinked and returns the
   * 'AccountNotFound' error.
   */
  BehaviorIfIdentityNotLinked:
    | "CreateAndLinkNewAccount"
    | "LinkToExistingAccount"
    | "LeaveUnlinked";
  CustomTags?: object;
  /** Vendor-specific iOS identifier for the user's device. */
  DeviceId: string;
  /**
   * Optional master_player_account entity in the player account pool to associate
   * with the authenticated player identity. When specified, then the request must
   * be authenticated as either the same master_player_account (with an entity token
   * obtained from a previous authentication API call) or as another entity
   * authorized to make calls on behalf of it, such as a title entity in the same
   * player account pool (with a title secret key).
   */
  ExistingMasterPlayerAccountId?: string;
  /**
   * The player account pool containing the player account (master_player_account
   * entity) to be looked-up or created for the identity. The player account pool ID
   * is also known as the "publisher ID" or "namespace ID".
   */
  PlayerAccountPoolId: string;
  /**
   * Optional title to log the master_player_account into after authenticating the
   * player. This option can be used to combine the player authentication and title
   * login operations in a single API request, avoiding a second API request to
   * 'TitlePlayer/LoginPlayer'. When specified, an entity token for the
   * title_player_account entity is returned in the 'TitlePlayerAccountEntityToken'
   * property of the response.
   */
  TitleId?: string;
}

export interface AuthenticateNintendoSwitchDeviceIDIdentityRequest {
  /**
   * Controls what happens if the authenticated player identity is not yet
   * associated with a master_player_account in the player account pool.
   * 'CreateAndLinkNewAccount' (default) creates a new master_player_account entity
   * and associates the player identity with it. 'LinkToExistingAccount' attempts to
   * associate the player identity with the master_player_account entity specified
   * by 'ExistingMasterPlayerAccountId', returning an 'AccountAlreadyLinked' error
   * if the master_player_account is already associated with another player
   * identity. 'LeaveUnlinked' leaves the player identity unlinked and returns the
   * 'AccountNotFound' error.
   */
  BehaviorIfIdentityNotLinked:
    | "CreateAndLinkNewAccount"
    | "LinkToExistingAccount"
    | "LeaveUnlinked";
  CustomTags?: object;
  /**
   * Optional master_player_account entity in the player account pool to associate
   * with the authenticated player identity. When specified, then the request must
   * be authenticated as either the same master_player_account (with an entity token
   * obtained from a previous authentication API call) or as another entity
   * authorized to make calls on behalf of it, such as a title entity in the same
   * player account pool (with a title secret key).
   */
  ExistingMasterPlayerAccountId?: string;
  /** Identifier for the user's android device. */
  NintendoSwitchDeviceId: string;
  /**
   * The player account pool containing the player account (master_player_account
   * entity) to be looked-up or created for the identity. The player account pool ID
   * is also known as the "publisher ID" or "namespace ID".
   */
  PlayerAccountPoolId: string;
  /**
   * Optional title to log the master_player_account into after authenticating the
   * player. This option can be used to combine the player authentication and title
   * login operations in a single API request, avoiding a second API request to
   * 'TitlePlayer/LoginPlayer'. When specified, an entity token for the
   * title_player_account entity is returned in the 'TitlePlayerAccountEntityToken'
   * property of the response.
   */
  TitleId?: string;
}

export interface GetLinkedPlayerIdentitiesRequest {
  CustomTags?: object;
  /** master_player_account entity. */
  MasterPlayerAccountId?: string;
}

export interface UnlinkPlayerIdentityRequest {
  CustomTags?: object;
  /**
   * Unique identifier of the link between the player identity and
   * master_player_account to be unlinked. If no matching player identity is
   * currently linked to the master_player_account, then the 'AccountNotLinked'
   * error is returned.
   */
  IdentityLinkId: string;
  /** master_player_account entity. */
  MasterPlayerAccountId?: string;
}

export interface AbortFileUploadsRequest {
  CustomTags?: object;
  /** Combined entity type and ID structure which uniquely identifies a single entity. */
  Entity: object;
  FileNames: string[];
  ProfileVersion?: number;
}

export interface DeleteFilesRequest {
  CustomTags?: object;
  /** Combined entity type and ID structure which uniquely identifies a single entity. */
  Entity: object;
  FileNames: string[];
  ProfileVersion?: number;
}

export interface FinalizeFileUploadsRequest {
  CustomTags?: object;
  /** Combined entity type and ID structure which uniquely identifies a single entity. */
  Entity: object;
  FileNames: string[];
  ProfileVersion: number;
}

export interface GetFilesRequest {
  CustomTags?: object;
  /** Combined entity type and ID structure which uniquely identifies a single entity. */
  Entity: object;
}

export interface InitiateFileUploadsRequest {
  CustomTags?: object;
  /** Combined entity type and ID structure which uniquely identifies a single entity. */
  Entity: object;
  FileNames: string[];
  ProfileVersion?: number;
}

export interface GetObjectsRequest {
  CustomTags?: object;
  /** Combined entity type and ID structure which uniquely identifies a single entity. */
  Entity: object;
  EscapeObject?: boolean;
}

export interface SetObjectsRequest {
  CustomTags?: object;
  /** Combined entity type and ID structure which uniquely identifies a single entity. */
  Entity: object;
  ExpectedProfileVersion?: number;
  Objects: Array<SetObject>;
}

export interface SetObject {
  DataObject?: object;
  DeleteObject?: boolean;
  /**
   * Body of the object to be saved as an escaped JSON string. If empty and
   * DeleteObject is true object will be deleted if it exists, or no operation will
   * occur if it does not exist. Only one of DataObject or EscapedDataObject fields
   * may be used.
   */
  EscapedDataObject?: string;
  /** Name of object. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.'. */
  ObjectName: string;
}

export interface WriteEventsRequest {
  CustomTags?: object;
  Events: Array<EventContents>;
}

export interface EventContents {
  CustomTags?: object;
  /** Combined entity type and ID structure which uniquely identifies a single entity. */
  Entity?: object;
  /** The namespace in which the event is defined. Allowed namespaces can vary by API. */
  EventNamespace: string;
  /** The name of this event. */
  Name: string;
  /**
   * The original unique identifier associated with this event before it was posted
   * to PlayFab. The value might differ from the EventId value, which is assigned
   * when the event is received by the server.
   */
  OriginalId?: string;
  /**
   * The time (in UTC) associated with this event when it occurred. If specified,
   * this value is stored in the OriginalTimestamp property of the PlayStream event.
   */
  OriginalTimestamp?: string;
  Payload?: object;
  /**
   * Arbitrary data associated with the event, represented as a JSON serialized
   * string. Only one of Payload or PayloadJSON is allowed.
   */
  PayloadJSON?: string;
}

export interface LoginPlayerRequest {
  CustomTags?: object;
  /**
   * Unique identifier for the title, found in the Settings > Game Properties
   * section of the PlayFab developer site when a title has been selected.
   */
  TitleId: string;
}

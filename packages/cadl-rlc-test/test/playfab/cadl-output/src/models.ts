/**
 * This API must be called with X-SecretKey, X-Authentication or X-EntityToken
 * headers. An optional EntityKey may be included to attempt to set the resulting
 * EntityToken to a specific entity, however the entity must be a relation of the
 * caller, such as the master_player_account of a character. If sending
 * X-EntityToken the account will be marked as freshly logged in and will issue a
 * new token. If using X-Authentication or X-EntityToken the header must still be
 * valid and cannot be expired or revoked.
 */
export interface GetEntityTokenRequest {
  /**
   * The optional custom tags associated with the request (e.g. build number,
   * external trace identifiers, etc.).
   */
  CustomTags?: object;
  /**
   * The optional entity to perform this action on. Defaults to the currently logged
   * in entity.
   */
  Entity?: object;
}

export interface Object {}

/** Combined entity type and ID structure which uniquely identifies a single entity. */
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
   *
   * Possible values: CreateAndLinkNewAccount, LinkToExistingAccount, LeaveUnlinked
   */
  BehaviorIfIdentityNotLinked: string;
  /**
   * The optional custom tags associated with the request (e.g. build number,
   * external trace identifiers, etc.).
   */
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
   *
   * Possible values: CreateAndLinkNewAccount, LinkToExistingAccount, LeaveUnlinked
   */
  BehaviorIfIdentityNotLinked: string;
  /**
   * Custom string value which uniquely identifies a player identity within the
   * player account pool.
   */
  CustomId: string;
  /**
   * The optional custom tags associated with the request (e.g. build number,
   * external trace identifiers, etc.).
   */
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
   *
   * Possible values: CreateAndLinkNewAccount, LinkToExistingAccount, LeaveUnlinked
   */
  BehaviorIfIdentityNotLinked: string;
  /**
   * The optional custom tags associated with the request (e.g. build number,
   * external trace identifiers, etc.).
   */
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
   *
   * Possible values: CreateAndLinkNewAccount, LinkToExistingAccount, LeaveUnlinked
   */
  BehaviorIfIdentityNotLinked: string;
  /**
   * The optional custom tags associated with the request (e.g. build number,
   * external trace identifiers, etc.).
   */
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
  /**
   * The optional custom tags associated with the request (e.g. build number,
   * external trace identifiers, etc.).
   */
  CustomTags?: object;
  /** master_player_account entity. */
  MasterPlayerAccountId?: string;
}

export interface UnlinkPlayerIdentityRequest {
  /**
   * The optional custom tags associated with the request (e.g. build number,
   * external trace identifiers, etc.).
   */
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

/** Aborts the pending upload of the requested files. */
export interface AbortFileUploadsRequest {
  /**
   * The optional custom tags associated with the request (e.g. build number,
   * external trace identifiers, etc.).
   */
  CustomTags?: object;
  /** The entity to perform this action on. */
  Entity: object;
  /** Names of the files to have their pending uploads aborted. */
  FileNames: string[];
  /**
   * The expected version of the profile, if set and doesn't match the current
   * version of the profile the operation will not be performed.
   */
  ProfileVersion?: number;
}

/** Deletes the requested files from the entity's profile. */
export interface DeleteFilesRequest {
  /**
   * The optional custom tags associated with the request (e.g. build number,
   * external trace identifiers, etc.).
   */
  CustomTags?: object;
  /** The entity to perform this action on. */
  Entity: object;
  /** Names of the files to be deleted. */
  FileNames: string[];
  /**
   * The expected version of the profile, if set and doesn't match the current
   * version of the profile the operation will not be performed.
   */
  ProfileVersion?: number;
}

/**
 * Finalizes the upload of the requested files. Verifies that the files have been
 * successfully uploaded and moves the file pointers from pending to live.
 */
export interface FinalizeFileUploadsRequest {
  /**
   * The optional custom tags associated with the request (e.g. build number,
   * external trace identifiers, etc.).
   */
  CustomTags?: object;
  /** The entity to perform this action on. */
  Entity: object;
  /**
   * Names of the files to be finalized. Restricted to a-Z, 0-9, '(', ')', '_', '-'
   * and '.'
   */
  FileNames: string[];
  /**
   * The current version of the profile, can be used for concurrency control during
   * updates.
   */
  ProfileVersion: number;
}

/**
 * Returns URLs that may be used to download the files for a profile for a limited
 * length of time. Only returns files that have been successfully uploaded, files
 * that are still pending will either return the old value, if it exists, or
 * nothing.
 */
export interface GetFilesRequest {
  /**
   * The optional custom tags associated with the request (e.g. build number,
   * external trace identifiers, etc.).
   */
  CustomTags?: object;
  /** The entity to perform this action on. */
  Entity: object;
}

/**
 * Returns URLs that may be used to upload the files for a profile 5 minutes.
 * After using the upload calls FinalizeFileUploads must be called to move the
 * file status from pending to live.
 */
export interface InitiateFileUploadsRequest {
  /**
   * The optional custom tags associated with the request (e.g. build number,
   * external trace identifiers, etc.).
   */
  CustomTags?: object;
  /** The entity to perform this action on. */
  Entity: object;
  /** Names of the files to be set. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.' */
  FileNames: string[];
  /**
   * The expected version of the profile, if set and doesn't match the current
   * version of the profile the operation will not be performed.
   */
  ProfileVersion?: number;
}

/** Gets JSON objects from an entity profile and returns it. */
export interface GetObjectsRequest {
  /**
   * The optional custom tags associated with the request (e.g. build number,
   * external trace identifiers, etc.).
   */
  CustomTags?: object;
  /** The entity to perform this action on. */
  Entity: object;
  /**
   * Determines whether the object will be returned as an escaped JSON string or as
   * a un-escaped JSON object. Default is JSON object.
   */
  EscapeObject?: boolean;
}

/**
 * Sets JSON objects on the requested entity profile. May include a version number
 * to be used to perform optimistic concurrency operations during update. If the
 * current version differs from the version in the request the request will be
 * ignored. If no version is set on the request then the value will always be
 * updated if the values differ. Using the version value does not guarantee a
 * write though, ConcurrentEditError may still occur if multiple clients are
 * attempting to update the same profile.
 */
export interface SetObjectsRequest {
  /**
   * The optional custom tags associated with the request (e.g. build number,
   * external trace identifiers, etc.).
   */
  CustomTags?: object;
  /** The entity to perform this action on. */
  Entity: object;
  /**
   * Optional field used for concurrency control. By specifying the previously
   * returned value of ProfileVersion from GetProfile API, you can ensure that the
   * object set will only be performed if the profile has not been updated by any
   * other clients since the version you last loaded.
   */
  ExpectedProfileVersion?: number;
  /** Collection of objects to set on the profile. */
  Objects: Array<SetObject>;
}

export interface SetObject {
  /**
   * Body of the object to be saved. If empty and DeleteObject is true object will
   * be deleted if it exists, or no operation will occur if it does not exist. Only
   * one of Object or EscapedDataObject fields may be used.
   */
  DataObject?: object;
  /**
   * Flag to indicate that this object should be deleted. Both DataObject and
   * EscapedDataObject must not be set as well.
   */
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
  /**
   * The optional custom tags associated with the request (e.g. build number,
   * external trace identifiers, etc.).
   */
  CustomTags?: object;
  /** Collection of events to write to PlayStream. */
  Events: Array<EventContents>;
}

export interface EventContents {
  /**
   * The optional custom tags associated with the event (e.g. build number, external
   * trace identifiers, etc.). Before an event is written, this collection and the
   * base request custom tags will be merged, but not overriden. This enables the
   * caller to specify static tags and per event tags.
   */
  CustomTags?: object;
  /**
   * Entity associated with the event. If null, the event will apply to the calling
   * entity.
   */
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
  /**
   * Arbitrary data associated with the event. Only one of Payload or PayloadJSON is
   * allowed.
   */
  Payload?: object;
  /**
   * Arbitrary data associated with the event, represented as a JSON serialized
   * string. Only one of Payload or PayloadJSON is allowed.
   */
  PayloadJSON?: string;
}

export interface LoginPlayerRequest {
  /**
   * The optional custom tags associated with the request (e.g. build number,
   * external trace identifiers, etc.).
   */
  CustomTags?: object;
  /**
   * Unique identifier for the title, found in the Settings > Game Properties
   * section of the PlayFab developer site when a title has been selected.
   */
  TitleId: string;
}

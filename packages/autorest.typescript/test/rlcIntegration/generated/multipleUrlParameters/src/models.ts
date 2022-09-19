// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** An instance of an entity along with extended info - like hive_table, hive_database. */
export interface AtlasEntityWithExtInfo extends AtlasEntityExtInfo {
  /** An instance of an entity - like hive_table, hive_database. */
  entity?: AtlasEntity;
}

/** An instance of an entity - like hive_table, hive_database. */
export interface AtlasEntity extends AtlasStruct {
  /** Business Attributes */
  businessAttributes?: Record<string, Record<string, unknown>>;
  /** An array of classifications. */
  classifications?: Array<AtlasClassification>;
  /** The created time of the record. */
  createTime?: number;
  /** The user who created the record. */
  createdBy?: string;
  /** Custom Attribute */
  customAttributes?: Record<string, string>;
  /** The GUID of the entity. */
  guid?: string;
  /** The home ID of the entity. */
  homeId?: string;
  /** Whether it is a shell entity */
  isIncomplete?: boolean;
  /** labels */
  labels?: Array<string>;
  /** An array of term assignment headers indicating the meanings of the entity. */
  meanings?: Array<AtlasTermAssignmentHeader>;
  /** Used to record the provenance of an instance of an entity or relationship. */
  provenanceType?: number;
  /** Determines if there's a proxy. */
  proxy?: boolean;
  /** The attributes of relationship. */
  relationshipAttributes?: Record<string, Record<string, unknown>>;
  /** Status of the entity - can be active or deleted. Deleted entities are not removed from Atlas store. */
  status?: "ACTIVE" | "DELETED";
  /** The update time of the record. */
  updateTime?: number;
  /** The user who updated the record. */
  updatedBy?: string;
  /** The version of the entity. */
  version?: number;
  /** indicate the source who create the classification detail */
  source?: string;
  /** more detail on source information */
  sourceDetails?: Record<string, Record<string, unknown>>;
  /** The dictionary of contacts for terms. Key could be Expert or Owner. */
  contacts?: Record<string, Array<ContactBasic>>;
}

/** An instance of a classification; it doesn't have an identity, this object exists only when associated with an entity. */
export interface AtlasClassification extends AtlasStruct {
  /** The GUID of the entity. */
  entityGuid?: string;
  /** Status of the entity - can be active or deleted. Deleted entities are not removed from Atlas store. */
  entityStatus?: "ACTIVE" | "DELETED";
  /** Determines if propagations will be removed on entity deletion. */
  removePropagationsOnEntityDelete?: boolean;
  /** An array of time boundaries indicating validity periods. */
  validityPeriods?: Array<TimeBoundary>;
  /** indicate the source who create the classification detail */
  source?: string;
  /** more detail on source information */
  sourceDetails?: Record<string, Record<string, unknown>>;
}

/** Captures time-boundary details */
export interface TimeBoundary {
  /** The end of the time boundary. */
  endTime?: string;
  /** The start of the time boundary. */
  startTime?: string;
  /** The timezone of the time boundary. */
  timeZone?: string;
}

/** Captures details of struct contents. Not instantiated directly, used only via AtlasEntity, AtlasClassification. */
export interface AtlasStruct {
  /** The attributes of the struct. */
  attributes?: Record<string, Record<string, unknown>>;
  /** The name of the type. */
  typeName?: string;
  /** ETag for concurrency control. */
  lastModifiedTS?: string;
}

/** The header for term assignment. */
export interface AtlasTermAssignmentHeader {
  /** The confidence of the term assignment. */
  confidence?: number;
  /** The user who created the record. */
  createdBy?: string;
  /** The description of the term assignment. */
  description?: string;
  /** The display text. */
  displayText?: string;
  /** The expression of the term assignment. */
  expression?: string;
  /** The GUID of the relationship. */
  relationGuid?: string;
  /** The source of the term. */
  source?: string;
  /** The status of terms assignment. */
  status?:
    | "DISCOVERED"
    | "PROPOSED"
    | "IMPORTED"
    | "VALIDATED"
    | "DEPRECATED"
    | "OBSOLETE"
    | "OTHER";
  /** The steward of the term. */
  steward?: string;
  /** The GUID of the term. */
  termGuid?: string;
}

/** ContactBasic */
export interface ContactBasic {
  /** Azure Active Directory object Id. */
  id?: string;
  /** additional information to describe this contact. */
  info?: string;
}

/** An instance of an entity along with extended info - like hive_table, hive_database. */
export interface AtlasEntityExtInfo {
  /** The referred entities. */
  referredEntities?: Record<string, AtlasEntity>;
}

/** An instance of an entity - like hive_table, hive_database. */
export interface AtlasEntityHeader extends AtlasStruct {
  /** An array of classification names. */
  classificationNames?: Array<string>;
  /** An array of classifications. */
  classifications?: Array<AtlasClassification>;
  /** The display text. */
  displayText?: string;
  /** The GUID of the record. */
  guid?: string;
  /** Whether it is a shell entity */
  isIncomplete?: boolean;
  /** labels */
  labels?: Array<string>;
  /** An array of meanings. */
  meaningNames?: Array<string>;
  /** An array of term assignment headers. */
  meanings?: Array<AtlasTermAssignmentHeader>;
  /** Status of the entity - can be active or deleted. Deleted entities are not removed from Atlas store. */
  status?: "ACTIVE" | "DELETED";
}

/** An instance of an entity along with extended info - like hive_table, hive_database. */
export interface AtlasEntitiesWithExtInfo extends AtlasEntityExtInfo {
  /** An array of entities. */
  entities?: Array<AtlasEntity>;
}

/** The request for classification association. */
export interface ClassificationAssociateRequest {
  /** An instance of a classification; it doesn't have an identity, this object exists only when associated with an entity. */
  classification?: AtlasClassification;
  /** The GUID of the entity. */
  entityGuids?: Array<string>;
}

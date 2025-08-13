// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  FileContents,
  createFilePartDescriptor,
} from "../static-helpers/multipartHelpers.js";

/**
 * An instance of an entity along with extended info - like hive_table,
 * hive_database.
 */
export interface AtlasEntityWithExtInfo {
  /** The referred entities. */
  referredEntities?: Record<string, AtlasEntity>;
  /** An instance of an entity - like hive_table, hive_database. */
  entity?: AtlasEntity;
}

export function atlasEntityWithExtInfoSerializer(
  item: AtlasEntityWithExtInfo,
): any {
  return {
    referredEntities: !item["referredEntities"]
      ? item["referredEntities"]
      : atlasEntityRecordSerializer(item["referredEntities"]),
    entity: !item["entity"]
      ? item["entity"]
      : atlasEntitySerializer(item["entity"]),
  };
}

export function atlasEntityWithExtInfoDeserializer(
  item: any,
): AtlasEntityWithExtInfo {
  return {
    referredEntities: !item["referredEntities"]
      ? item["referredEntities"]
      : atlasEntityRecordDeserializer(item["referredEntities"]),
    entity: !item["entity"]
      ? item["entity"]
      : atlasEntityDeserializer(item["entity"]),
  };
}

export function atlasEntityRecordSerializer(
  item: Record<string, AtlasEntity>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key] ? item[key] : atlasEntitySerializer(item[key]);
  });
  return result;
}

export function atlasEntityRecordDeserializer(
  item: Record<string, any>,
): Record<string, AtlasEntity> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key] ? item[key] : atlasEntityDeserializer(item[key]);
  });
  return result;
}

/** An instance of an entity - like hive_table, hive_database. */
export interface AtlasEntity {
  /** The attributes of the struct. */
  attributes?: Record<string, any>;
  /** The name of the type. */
  typeName?: string;
  /** ETag for concurrency control. */
  lastModifiedTS?: string;
  /** Business attributes */
  businessAttributes?: Record<string, any>;
  /** An array of classifications. */
  classifications?: AtlasClassification[];
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
  /** The collection ID of the entity. */
  readonly collectionId?: string;
  /** Whether it is a shell entity */
  isIncomplete?: boolean;
  /** labels */
  labels?: string[];
  /** An array of term assignment headers indicating the meanings of the entity. */
  meanings?: AtlasTermAssignmentHeader[];
  /** Used to record the provenance of an instance of an entity or relationship. */
  provenanceType?: number;
  /** Determines if there's a proxy. */
  proxy?: boolean;
  /** The attributes of relationship. */
  relationshipAttributes?: Record<string, any>;
  /**
   * Status of the entity - can be active or deleted. Deleted entities are not
   * removed.
   */
  status?: EntityStatus;
  /** The update time of the record. */
  updateTime?: number;
  /** The user who updated the record. */
  updatedBy?: string;
  /** The version of the entity. */
  version?: number;
  /** The dictionary of contacts for entities. Key could be Expert or Owner. */
  contacts?: Record<string, ContactInfo[]>;
}

export function atlasEntitySerializer(item: AtlasEntity): any {
  return {
    attributes: item["attributes"],
    typeName: item["typeName"],
    lastModifiedTS: item["lastModifiedTS"],
    businessAttributes: item["businessAttributes"],
    classifications: !item["classifications"]
      ? item["classifications"]
      : atlasClassificationArraySerializer(item["classifications"]),
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    customAttributes: item["customAttributes"],
    guid: item["guid"],
    homeId: item["homeId"],
    isIncomplete: item["isIncomplete"],
    labels: !item["labels"]
      ? item["labels"]
      : item["labels"].map((p: any) => {
          return p;
        }),
    meanings: !item["meanings"]
      ? item["meanings"]
      : atlasTermAssignmentHeaderArraySerializer(item["meanings"]),
    provenanceType: item["provenanceType"],
    proxy: item["proxy"],
    relationshipAttributes: item["relationshipAttributes"],
    status: item["status"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    version: item["version"],
    contacts: !item["contacts"]
      ? item["contacts"]
      : contactInfoArrayRecordSerializer(item["contacts"]),
  };
}

export function atlasEntityDeserializer(item: any): AtlasEntity {
  return {
    attributes: item["attributes"],
    typeName: item["typeName"],
    lastModifiedTS: item["lastModifiedTS"],
    businessAttributes: item["businessAttributes"],
    classifications: !item["classifications"]
      ? item["classifications"]
      : atlasClassificationArrayDeserializer(item["classifications"]),
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    customAttributes: item["customAttributes"],
    guid: item["guid"],
    homeId: item["homeId"],
    collectionId: item["collectionId"],
    isIncomplete: item["isIncomplete"],
    labels: !item["labels"]
      ? item["labels"]
      : item["labels"].map((p: any) => {
          return p;
        }),
    meanings: !item["meanings"]
      ? item["meanings"]
      : atlasTermAssignmentHeaderArrayDeserializer(item["meanings"]),
    provenanceType: item["provenanceType"],
    proxy: item["proxy"],
    relationshipAttributes: item["relationshipAttributes"],
    status: item["status"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    version: item["version"],
    contacts: !item["contacts"]
      ? item["contacts"]
      : contactInfoArrayRecordDeserializer(item["contacts"]),
  };
}

export function atlasClassificationArraySerializer(
  result: Array<AtlasClassification>,
): any[] {
  return result.map((item) => {
    return atlasClassificationSerializer(item);
  });
}

export function atlasClassificationArrayDeserializer(
  result: Array<AtlasClassification>,
): any[] {
  return result.map((item) => {
    return atlasClassificationDeserializer(item);
  });
}

/**
 * An instance of a classification; it doesn't have an identity, this object
 * exists only when associated with an entity.
 */
export interface AtlasClassification {
  /** The attributes of the struct. */
  attributes?: Record<string, any>;
  /** The name of the type. */
  typeName?: string;
  /** ETag for concurrency control. */
  lastModifiedTS?: string;
  /** The GUID of the entity. */
  entityGuid?: string;
  /**
   * Status of the entity - can be active or deleted. Deleted entities are not
   * removed.
   */
  entityStatus?: EntityStatus;
  /** Determines if propagations will be removed on entity deletion. */
  removePropagationsOnEntityDelete?: boolean;
  /** An array of time boundaries indicating validity periods. */
  validityPeriods?: TimeBoundary[];
}

export function atlasClassificationSerializer(item: AtlasClassification): any {
  return {
    attributes: item["attributes"],
    typeName: item["typeName"],
    lastModifiedTS: item["lastModifiedTS"],
    entityGuid: item["entityGuid"],
    entityStatus: item["entityStatus"],
    removePropagationsOnEntityDelete: item["removePropagationsOnEntityDelete"],
    validityPeriods: !item["validityPeriods"]
      ? item["validityPeriods"]
      : timeBoundaryArraySerializer(item["validityPeriods"]),
  };
}

export function atlasClassificationDeserializer(
  item: any,
): AtlasClassification {
  return {
    attributes: item["attributes"],
    typeName: item["typeName"],
    lastModifiedTS: item["lastModifiedTS"],
    entityGuid: item["entityGuid"],
    entityStatus: item["entityStatus"],
    removePropagationsOnEntityDelete: item["removePropagationsOnEntityDelete"],
    validityPeriods: !item["validityPeriods"]
      ? item["validityPeriods"]
      : timeBoundaryArrayDeserializer(item["validityPeriods"]),
  };
}

/** Status - can be active or deleted */
export type EntityStatus = "ACTIVE" | "DELETED";

export function timeBoundaryArraySerializer(
  result: Array<TimeBoundary>,
): any[] {
  return result.map((item) => {
    return timeBoundarySerializer(item);
  });
}

export function timeBoundaryArrayDeserializer(
  result: Array<TimeBoundary>,
): any[] {
  return result.map((item) => {
    return timeBoundaryDeserializer(item);
  });
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

export function timeBoundarySerializer(item: TimeBoundary): any {
  return {
    endTime: item["endTime"],
    startTime: item["startTime"],
    timeZone: item["timeZone"],
  };
}

export function timeBoundaryDeserializer(item: any): TimeBoundary {
  return {
    endTime: item["endTime"],
    startTime: item["startTime"],
    timeZone: item["timeZone"],
  };
}

export function atlasTermAssignmentHeaderArraySerializer(
  result: Array<AtlasTermAssignmentHeader>,
): any[] {
  return result.map((item) => {
    return atlasTermAssignmentHeaderSerializer(item);
  });
}

export function atlasTermAssignmentHeaderArrayDeserializer(
  result: Array<AtlasTermAssignmentHeader>,
): any[] {
  return result.map((item) => {
    return atlasTermAssignmentHeaderDeserializer(item);
  });
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
  /** The status of terms assignment. */
  status?: AtlasTermAssignmentStatus;
  /** The steward of the term. */
  steward?: string;
  /** The GUID of the term. */
  termGuid?: string;
}

export function atlasTermAssignmentHeaderSerializer(
  item: AtlasTermAssignmentHeader,
): any {
  return {
    confidence: item["confidence"],
    createdBy: item["createdBy"],
    description: item["description"],
    displayText: item["displayText"],
    expression: item["expression"],
    relationGuid: item["relationGuid"],
    status: item["status"],
    steward: item["steward"],
    termGuid: item["termGuid"],
  };
}

export function atlasTermAssignmentHeaderDeserializer(
  item: any,
): AtlasTermAssignmentHeader {
  return {
    confidence: item["confidence"],
    createdBy: item["createdBy"],
    description: item["description"],
    displayText: item["displayText"],
    expression: item["expression"],
    relationGuid: item["relationGuid"],
    status: item["status"],
    steward: item["steward"],
    termGuid: item["termGuid"],
  };
}

/** Status for term assignment */
export type AtlasTermAssignmentStatus =
  | "DISCOVERED"
  | "PROPOSED"
  | "IMPORTED"
  | "VALIDATED"
  | "DEPRECATED"
  | "OBSOLETE"
  | "OTHER";

export function contactInfoArrayRecordSerializer(
  item: Record<string, Array<ContactInfo>>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : contactInfoArraySerializer(item[key]);
  });
  return result;
}

export function contactInfoArrayRecordDeserializer(
  item: Record<string, any>,
): Record<string, Array<ContactInfo>> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : contactInfoArrayDeserializer(item[key]);
  });
  return result;
}

export function contactInfoArraySerializer(result: Array<ContactInfo>): any[] {
  return result.map((item) => {
    return contactInfoSerializer(item);
  });
}

export function contactInfoArrayDeserializer(
  result: Array<ContactInfo>,
): any[] {
  return result.map((item) => {
    return contactInfoDeserializer(item);
  });
}

/** ContactInfo */
export interface ContactInfo {
  /** Azure Active Directory object Id. */
  id?: string;
  /** additional information to describe this contact. */
  info?: string;
}

export function contactInfoSerializer(item: ContactInfo): any {
  return { id: item["id"], info: item["info"] };
}

export function contactInfoDeserializer(item: any): ContactInfo {
  return {
    id: item["id"],
    info: item["info"],
  };
}

/** The mutation response result of entity. */
export interface EntityMutationResult {
  /** A map of GUID assignments with entities. */
  guidAssignments?: Record<string, string>;
  /** The entity headers of mutated entities. */
  mutatedEntities?: Record<string, AtlasEntityHeader[]>;
  /** An array of entity headers that partially updated. */
  partialUpdatedEntities?: AtlasEntityHeader[];
}

export function entityMutationResultDeserializer(
  item: any,
): EntityMutationResult {
  return {
    guidAssignments: item["guidAssignments"],
    mutatedEntities: !item["mutatedEntities"]
      ? item["mutatedEntities"]
      : atlasEntityHeaderArrayRecordDeserializer(item["mutatedEntities"]),
    partialUpdatedEntities: !item["partialUpdatedEntities"]
      ? item["partialUpdatedEntities"]
      : atlasEntityHeaderArrayDeserializer(item["partialUpdatedEntities"]),
  };
}

export function atlasEntityHeaderArrayRecordSerializer(
  item: Record<string, Array<AtlasEntityHeader>>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : atlasEntityHeaderArraySerializer(item[key]);
  });
  return result;
}

export function atlasEntityHeaderArrayRecordDeserializer(
  item: Record<string, any>,
): Record<string, Array<AtlasEntityHeader>> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : atlasEntityHeaderArrayDeserializer(item[key]);
  });
  return result;
}

export function atlasEntityHeaderArraySerializer(
  result: Array<AtlasEntityHeader>,
): any[] {
  return result.map((item) => {
    return atlasEntityHeaderSerializer(item);
  });
}

export function atlasEntityHeaderArrayDeserializer(
  result: Array<AtlasEntityHeader>,
): any[] {
  return result.map((item) => {
    return atlasEntityHeaderDeserializer(item);
  });
}

/** An instance of an entity - like hive_table, hive_database. */
export interface AtlasEntityHeader {
  /** The attributes of the struct. */
  attributes?: Record<string, any>;
  /** The name of the type. */
  typeName?: string;
  /** ETag for concurrency control. */
  lastModifiedTS?: string;
  /** An array of classification names. */
  classificationNames?: string[];
  /** An array of classifications. */
  classifications?: AtlasClassification[];
  /** The display text. */
  displayText?: string;
  /** The GUID of the record. */
  guid?: string;
  /** Whether it is a shell entity */
  isIncomplete?: boolean;
  /** labels */
  labels?: string[];
  /** An array of meanings. */
  meaningNames?: string[];
  /** An array of term assignment headers. */
  meanings?: AtlasTermAssignmentHeader[];
  /**
   * Status of the entity - can be active or deleted. Deleted entities are not
   * removed.
   */
  status?: EntityStatus;
}

export function atlasEntityHeaderSerializer(item: AtlasEntityHeader): any {
  return {
    attributes: item["attributes"],
    typeName: item["typeName"],
    lastModifiedTS: item["lastModifiedTS"],
    classificationNames: !item["classificationNames"]
      ? item["classificationNames"]
      : item["classificationNames"].map((p: any) => {
          return p;
        }),
    classifications: !item["classifications"]
      ? item["classifications"]
      : atlasClassificationArraySerializer(item["classifications"]),
    displayText: item["displayText"],
    guid: item["guid"],
    isIncomplete: item["isIncomplete"],
    labels: !item["labels"]
      ? item["labels"]
      : item["labels"].map((p: any) => {
          return p;
        }),
    meaningNames: !item["meaningNames"]
      ? item["meaningNames"]
      : item["meaningNames"].map((p: any) => {
          return p;
        }),
    meanings: !item["meanings"]
      ? item["meanings"]
      : atlasTermAssignmentHeaderArraySerializer(item["meanings"]),
    status: item["status"],
  };
}

export function atlasEntityHeaderDeserializer(item: any): AtlasEntityHeader {
  return {
    attributes: item["attributes"],
    typeName: item["typeName"],
    lastModifiedTS: item["lastModifiedTS"],
    classificationNames: !item["classificationNames"]
      ? item["classificationNames"]
      : item["classificationNames"].map((p: any) => {
          return p;
        }),
    classifications: !item["classifications"]
      ? item["classifications"]
      : atlasClassificationArrayDeserializer(item["classifications"]),
    displayText: item["displayText"],
    guid: item["guid"],
    isIncomplete: item["isIncomplete"],
    labels: !item["labels"]
      ? item["labels"]
      : item["labels"].map((p: any) => {
          return p;
        }),
    meaningNames: !item["meaningNames"]
      ? item["meaningNames"]
      : item["meaningNames"].map((p: any) => {
          return p;
        }),
    meanings: !item["meanings"]
      ? item["meanings"]
      : atlasTermAssignmentHeaderArrayDeserializer(item["meanings"]),
    status: item["status"],
  };
}

/** An error response from the service */
export interface AtlasErrorResponse {
  /** The request ID. */
  requestId?: string;
  /** The error code. */
  errorCode?: string;
  /** The error message. */
  errorMessage?: string;
}

export function atlasErrorResponseDeserializer(item: any): AtlasErrorResponse {
  return {
    requestId: item["requestId"],
    errorCode: item["errorCode"],
    errorMessage: item["errorMessage"],
  };
}

/**
 * An instance of an entity along with extended info - like hive_table,
 * hive_database.
 */
export interface AtlasEntitiesWithExtInfo {
  /** The referred entities. */
  referredEntities?: Record<string, AtlasEntity>;
  /** An array of entities. */
  entities?: AtlasEntity[];
}

export function atlasEntitiesWithExtInfoSerializer(
  item: AtlasEntitiesWithExtInfo,
): any {
  return {
    referredEntities: !item["referredEntities"]
      ? item["referredEntities"]
      : atlasEntityRecordSerializer(item["referredEntities"]),
    entities: !item["entities"]
      ? item["entities"]
      : atlasEntityArraySerializer(item["entities"]),
  };
}

export function atlasEntitiesWithExtInfoDeserializer(
  item: any,
): AtlasEntitiesWithExtInfo {
  return {
    referredEntities: !item["referredEntities"]
      ? item["referredEntities"]
      : atlasEntityRecordDeserializer(item["referredEntities"]),
    entities: !item["entities"]
      ? item["entities"]
      : atlasEntityArrayDeserializer(item["entities"]),
  };
}

export function atlasEntityArraySerializer(result: Array<AtlasEntity>): any[] {
  return result.map((item) => {
    return atlasEntitySerializer(item);
  });
}

export function atlasEntityArrayDeserializer(
  result: Array<AtlasEntity>,
): any[] {
  return result.map((item) => {
    return atlasEntityDeserializer(item);
  });
}

/** The request payload for classification association. */
export interface ClassificationAssociateOptions {
  /**
   * An instance of a classification; it doesn't have an identity, this object
   * exists only when associated with an entity.
   */
  classification?: AtlasClassification;
  /** The GUID of the entity. */
  entityGuids?: string[];
}

export function classificationAssociateOptionsSerializer(
  item: ClassificationAssociateOptions,
): any {
  return {
    classification: !item["classification"]
      ? item["classification"]
      : atlasClassificationSerializer(item["classification"]),
    entityGuids: !item["entityGuids"]
      ? item["entityGuids"]
      : item["entityGuids"].map((p: any) => {
          return p;
        }),
  };
}

/** REST serialization friendly list. */
export interface AtlasClassifications {
  /** An array of objects. */
  list?: any[];
  /** The size of the page. */
  pageSize?: number;
  /** The sorted by field. */
  sortBy?: string;
  /** to specify whether the result should be sorted? If yes, whether asc or desc. */
  sortType?: SortType;
  /** The start index of the page. */
  startIndex?: number;
  /** The total count of items. */
  totalCount?: number;
}

export function atlasClassificationsDeserializer(
  item: any,
): AtlasClassifications {
  return {
    list: !item["list"]
      ? item["list"]
      : item["list"].map((p: any) => {
          return p;
        }),
    pageSize: item["pageSize"],
    sortBy: item["sortBy"],
    sortType: item["sortType"],
    startIndex: item["startIndex"],
    totalCount: item["totalCount"],
  };
}

/** Type for sorting */
export type SortType = "NONE" | "ASC" | "DESC";

/** An instance of an entity header map. */
export interface AtlasEntityHeaders {
  /** The description of the guid header map, */
  guidHeaderMap?: Record<string, AtlasEntityHeader>;
}

export function atlasEntityHeadersSerializer(item: AtlasEntityHeaders): any {
  return {
    guidHeaderMap: !item["guidHeaderMap"]
      ? item["guidHeaderMap"]
      : atlasEntityHeaderRecordSerializer(item["guidHeaderMap"]),
  };
}

export function atlasEntityHeaderRecordSerializer(
  item: Record<string, AtlasEntityHeader>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : atlasEntityHeaderSerializer(item[key]);
  });
  return result;
}

export function atlasEntityHeaderRecordDeserializer(
  item: Record<string, any>,
): Record<string, AtlasEntityHeader> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : atlasEntityHeaderDeserializer(item[key]);
  });
  return result;
}

/** Business metadata to send to the service */
export interface BusinessMetadataOptions {
  /** InputStream of file */
  file:
    | FileContents
    | { contents: FileContents; contentType?: string; filename?: string };
}

export function businessMetadataOptionsSerializer(
  item: BusinessMetadataOptions,
): any {
  return [
    createFilePartDescriptor("file", item["file"], "application/octet-stream"),
  ];
}

/** Bulk import result */
export interface BulkImportResult {
  /** failed importInfoList */
  failedImportInfoList?: ImportInfo[];
  /** successful importInfoList */
  successImportInfoList?: ImportInfo[];
}

export function bulkImportResultDeserializer(item: any): BulkImportResult {
  return {
    failedImportInfoList: !item["failedImportInfoList"]
      ? item["failedImportInfoList"]
      : importInfoArrayDeserializer(item["failedImportInfoList"]),
    successImportInfoList: !item["successImportInfoList"]
      ? item["successImportInfoList"]
      : importInfoArrayDeserializer(item["successImportInfoList"]),
  };
}

export function importInfoArrayDeserializer(result: Array<ImportInfo>): any[] {
  return result.map((item) => {
    return importInfoDeserializer(item);
  });
}

/** ImportInfo */
export interface ImportInfo {
  /** childObjectName */
  childObjectName?: string;
  /** importStatus */
  importStatus?: ImportStatus;
  /** parentObjectName */
  parentObjectName?: string;
  /** remarks */
  remarks?: string;
}

export function importInfoDeserializer(item: any): ImportInfo {
  return {
    childObjectName: item["childObjectName"],
    importStatus: item["importStatus"],
    parentObjectName: item["parentObjectName"],
    remarks: item["remarks"],
  };
}

/** Status for import */
export type ImportStatus = "SUCCESS" | "FAILED";

/** MoveEntitiesOptions */
export interface MoveEntitiesOptions {
  /** An array of entity guids to be moved to target collection. */
  entityGuids?: string[];
}

export function moveEntitiesOptionsSerializer(item: MoveEntitiesOptions): any {
  return {
    entityGuids: !item["entityGuids"]
      ? item["entityGuids"]
      : item["entityGuids"].map((p: any) => {
          return p;
        }),
  };
}

/** The glossary object. */
export interface AtlasGlossary {
  /** The GUID of the object. */
  guid?: string;
  /** An array of classifications. */
  classifications?: AtlasClassification[];
  /** The long version description. */
  longDescription?: string;
  /** The name of the glossary object. */
  name?: string;
  /** The qualified name of the glossary object. */
  qualifiedName?: string;
  /** The short version of description. */
  shortDescription?: string;
  /** ETag for concurrency control. */
  lastModifiedTS?: string;
  /** The created time of the record. */
  createTime?: number;
  /** The user who created the record. */
  createdBy?: string;
  /** The update time of the record. */
  updateTime?: number;
  /** The user who updated the record. */
  updatedBy?: string;
  /** An array of categories. */
  categories?: AtlasRelatedCategoryHeader[];
  /** The language of the glossary. */
  language?: string;
  /** An array of related term headers. */
  terms?: AtlasRelatedTermHeader[];
  /** The usage of the glossary. */
  usage?: string;
}

export function atlasGlossarySerializer(item: AtlasGlossary): any {
  return {
    guid: item["guid"],
    classifications: !item["classifications"]
      ? item["classifications"]
      : atlasClassificationArraySerializer(item["classifications"]),
    longDescription: item["longDescription"],
    name: item["name"],
    qualifiedName: item["qualifiedName"],
    shortDescription: item["shortDescription"],
    lastModifiedTS: item["lastModifiedTS"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    categories: !item["categories"]
      ? item["categories"]
      : atlasRelatedCategoryHeaderArraySerializer(item["categories"]),
    language: item["language"],
    terms: !item["terms"]
      ? item["terms"]
      : atlasRelatedTermHeaderArraySerializer(item["terms"]),
    usage: item["usage"],
  };
}

export function atlasGlossaryDeserializer(item: any): AtlasGlossary {
  return {
    guid: item["guid"],
    classifications: !item["classifications"]
      ? item["classifications"]
      : atlasClassificationArrayDeserializer(item["classifications"]),
    longDescription: item["longDescription"],
    name: item["name"],
    qualifiedName: item["qualifiedName"],
    shortDescription: item["shortDescription"],
    lastModifiedTS: item["lastModifiedTS"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    categories: !item["categories"]
      ? item["categories"]
      : atlasRelatedCategoryHeaderArrayDeserializer(item["categories"]),
    language: item["language"],
    terms: !item["terms"]
      ? item["terms"]
      : atlasRelatedTermHeaderArrayDeserializer(item["terms"]),
    usage: item["usage"],
  };
}

export function atlasRelatedCategoryHeaderArraySerializer(
  result: Array<AtlasRelatedCategoryHeader>,
): any[] {
  return result.map((item) => {
    return atlasRelatedCategoryHeaderSerializer(item);
  });
}

export function atlasRelatedCategoryHeaderArrayDeserializer(
  result: Array<AtlasRelatedCategoryHeader>,
): any[] {
  return result.map((item) => {
    return atlasRelatedCategoryHeaderDeserializer(item);
  });
}

/** The header of the related category. */
export interface AtlasRelatedCategoryHeader {
  /** The GUID of the category. */
  categoryGuid?: string;
  /** The description of the category header. */
  description?: string;
  /** The display text. */
  displayText?: string;
  /** The GUID of the parent category. */
  parentCategoryGuid?: string;
  /** The GUID of the relationship. */
  relationGuid?: string;
}

export function atlasRelatedCategoryHeaderSerializer(
  item: AtlasRelatedCategoryHeader,
): any {
  return {
    categoryGuid: item["categoryGuid"],
    description: item["description"],
    displayText: item["displayText"],
    parentCategoryGuid: item["parentCategoryGuid"],
    relationGuid: item["relationGuid"],
  };
}

export function atlasRelatedCategoryHeaderDeserializer(
  item: any,
): AtlasRelatedCategoryHeader {
  return {
    categoryGuid: item["categoryGuid"],
    description: item["description"],
    displayText: item["displayText"],
    parentCategoryGuid: item["parentCategoryGuid"],
    relationGuid: item["relationGuid"],
  };
}

export function atlasRelatedTermHeaderArraySerializer(
  result: Array<AtlasRelatedTermHeader>,
): any[] {
  return result.map((item) => {
    return atlasRelatedTermHeaderSerializer(item);
  });
}

export function atlasRelatedTermHeaderArrayDeserializer(
  result: Array<AtlasRelatedTermHeader>,
): any[] {
  return result.map((item) => {
    return atlasRelatedTermHeaderDeserializer(item);
  });
}

/** The header of the related term. */
export interface AtlasRelatedTermHeader {
  /** The description of the related term. */
  description?: string;
  /** The display text. */
  displayText?: string;
  /** The expression of the term. */
  expression?: string;
  /** The GUID of the relationship. */
  relationGuid?: string;
  /** The status of term relationship. */
  status?: AtlasTermRelationshipStatus;
  /** The steward of the term. */
  steward?: string;
  /** The GUID of the term. */
  termGuid?: string;
}

export function atlasRelatedTermHeaderSerializer(
  item: AtlasRelatedTermHeader,
): any {
  return {
    description: item["description"],
    displayText: item["displayText"],
    expression: item["expression"],
    relationGuid: item["relationGuid"],
    status: item["status"],
    steward: item["steward"],
    termGuid: item["termGuid"],
  };
}

export function atlasRelatedTermHeaderDeserializer(
  item: any,
): AtlasRelatedTermHeader {
  return {
    description: item["description"],
    displayText: item["displayText"],
    expression: item["expression"],
    relationGuid: item["relationGuid"],
    status: item["status"],
    steward: item["steward"],
    termGuid: item["termGuid"],
  };
}

/** Status for atlas term relationship */
export type AtlasTermRelationshipStatus =
  | "DRAFT"
  | "ACTIVE"
  | "DEPRECATED"
  | "OBSOLETE"
  | "OTHER";

/** The glossary category. */
export interface AtlasGlossaryCategory {
  /** The GUID of the object. */
  guid?: string;
  /** An array of classifications. */
  classifications?: AtlasClassification[];
  /** The long version description. */
  longDescription?: string;
  /** The name of the glossary object. */
  name?: string;
  /** The qualified name of the glossary object. */
  qualifiedName?: string;
  /** The short version of description. */
  shortDescription?: string;
  /** ETag for concurrency control. */
  lastModifiedTS?: string;
  /** The created time of the record. */
  createTime?: number;
  /** The user who created the record. */
  createdBy?: string;
  /** The update time of the record. */
  updateTime?: number;
  /** The user who updated the record. */
  updatedBy?: string;
  /** The glossary header with basic information. */
  anchor?: AtlasGlossaryHeader;
  /** An array of children categories. */
  childrenCategories?: AtlasRelatedCategoryHeader[];
  /** The header of the related category. */
  parentCategory?: AtlasRelatedCategoryHeader;
  /** An array of related term headers. */
  terms?: AtlasRelatedTermHeader[];
}

export function atlasGlossaryCategorySerializer(
  item: AtlasGlossaryCategory,
): any {
  return {
    guid: item["guid"],
    classifications: !item["classifications"]
      ? item["classifications"]
      : atlasClassificationArraySerializer(item["classifications"]),
    longDescription: item["longDescription"],
    name: item["name"],
    qualifiedName: item["qualifiedName"],
    shortDescription: item["shortDescription"],
    lastModifiedTS: item["lastModifiedTS"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    anchor: !item["anchor"]
      ? item["anchor"]
      : atlasGlossaryHeaderSerializer(item["anchor"]),
    childrenCategories: !item["childrenCategories"]
      ? item["childrenCategories"]
      : atlasRelatedCategoryHeaderArraySerializer(item["childrenCategories"]),
    parentCategory: !item["parentCategory"]
      ? item["parentCategory"]
      : atlasRelatedCategoryHeaderSerializer(item["parentCategory"]),
    terms: !item["terms"]
      ? item["terms"]
      : atlasRelatedTermHeaderArraySerializer(item["terms"]),
  };
}

export function atlasGlossaryCategoryDeserializer(
  item: any,
): AtlasGlossaryCategory {
  return {
    guid: item["guid"],
    classifications: !item["classifications"]
      ? item["classifications"]
      : atlasClassificationArrayDeserializer(item["classifications"]),
    longDescription: item["longDescription"],
    name: item["name"],
    qualifiedName: item["qualifiedName"],
    shortDescription: item["shortDescription"],
    lastModifiedTS: item["lastModifiedTS"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    anchor: !item["anchor"]
      ? item["anchor"]
      : atlasGlossaryHeaderDeserializer(item["anchor"]),
    childrenCategories: !item["childrenCategories"]
      ? item["childrenCategories"]
      : atlasRelatedCategoryHeaderArrayDeserializer(item["childrenCategories"]),
    parentCategory: !item["parentCategory"]
      ? item["parentCategory"]
      : atlasRelatedCategoryHeaderDeserializer(item["parentCategory"]),
    terms: !item["terms"]
      ? item["terms"]
      : atlasRelatedTermHeaderArrayDeserializer(item["terms"]),
  };
}

/** The glossary header with basic information. */
export interface AtlasGlossaryHeader {
  /** The display text. */
  displayText?: string;
  /** The GUID of the glossary. */
  glossaryGuid?: string;
  /** The GUID of the relationship. */
  relationGuid?: string;
}

export function atlasGlossaryHeaderSerializer(item: AtlasGlossaryHeader): any {
  return {
    displayText: item["displayText"],
    glossaryGuid: item["glossaryGuid"],
    relationGuid: item["relationGuid"],
  };
}

export function atlasGlossaryHeaderDeserializer(
  item: any,
): AtlasGlossaryHeader {
  return {
    displayText: item["displayText"],
    glossaryGuid: item["glossaryGuid"],
    relationGuid: item["relationGuid"],
  };
}

/** The glossary term. */
export interface AtlasGlossaryTerm {
  /** The GUID of the object. */
  guid?: string;
  /** An array of classifications. */
  classifications?: AtlasClassification[];
  /** The long version description. */
  longDescription?: string;
  /** The name of the glossary object. */
  name?: string;
  /** The qualified name of the glossary object. */
  qualifiedName?: string;
  /** The short version of description. */
  shortDescription?: string;
  /** ETag for concurrency control. */
  lastModifiedTS?: string;
  /** The created time of the record. */
  createTime?: number;
  /** The user who created the record. */
  createdBy?: string;
  /** The update time of the record. */
  updateTime?: number;
  /** The user who updated the record. */
  updatedBy?: string;
  /** The abbreviation of the term. */
  abbreviation?: string;
  /** The name of the template. */
  templateName?: any[];
  /** The glossary header with basic information. */
  anchor?: AtlasGlossaryHeader;
  /** An array of related term headers as antonyms. */
  antonyms?: AtlasRelatedTermHeader[];
  /** Status of the AtlasGlossaryTerm */
  status?: TermStatus;
  /** The nick name of the term. */
  nickName?: string;
  /** The hierarchy information of the term. */
  hierarchyInfo?: PurviewObjectId[];
  /** An array of resource link for term */
  resources?: ResourceLink[];
  /** The dictionary of contacts for terms. Key could be Expert or Steward. */
  contacts?: Record<string, ContactInfo[]>;
  /**
   * The custom attributes of the term, which is map<string,map<string,object>>.
   * The
   * key of the first layer map is term template name.
   */
  attributes?: Record<string, Record<string, any>>;
  /** An array of related object IDs. */
  assignedEntities?: AtlasRelatedObjectId[];
  /** An array of term categorization headers. */
  categories?: AtlasTermCategorizationHeader[];
  /** An array of related term headers. */
  classifies?: AtlasRelatedTermHeader[];
  /** An array of examples. */
  examples?: string[];
  /** An array of related term headers indicating the is-a relationship. */
  isA?: AtlasRelatedTermHeader[];
  /** An array of preferred related term headers. */
  preferredTerms?: AtlasRelatedTermHeader[];
  /** An array of related term headers that are preferred to. */
  preferredToTerms?: AtlasRelatedTermHeader[];
  /** An array of related term headers that are replaced by. */
  replacedBy?: AtlasRelatedTermHeader[];
  /** An array of related term headers for replacement. */
  replacementTerms?: AtlasRelatedTermHeader[];
  /** An array of related term headers for see also. */
  seeAlso?: AtlasRelatedTermHeader[];
  /** An array of related term headers as synonyms. */
  synonyms?: AtlasRelatedTermHeader[];
  /** An array of translated related term headers. */
  translatedTerms?: AtlasRelatedTermHeader[];
  /** An array of related term headers for translation. */
  translationTerms?: AtlasRelatedTermHeader[];
  /** The usage of the term. */
  usage?: string;
  /** An array of related term headers as valid values. */
  validValues?: AtlasRelatedTermHeader[];
  /** An array of related term headers as valid values for other records. */
  validValuesFor?: AtlasRelatedTermHeader[];
}

export function atlasGlossaryTermSerializer(item: AtlasGlossaryTerm): any {
  return {
    guid: item["guid"],
    classifications: !item["classifications"]
      ? item["classifications"]
      : atlasClassificationArraySerializer(item["classifications"]),
    longDescription: item["longDescription"],
    name: item["name"],
    qualifiedName: item["qualifiedName"],
    shortDescription: item["shortDescription"],
    lastModifiedTS: item["lastModifiedTS"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    abbreviation: item["abbreviation"],
    templateName: !item["templateName"]
      ? item["templateName"]
      : item["templateName"].map((p: any) => {
          return p;
        }),
    anchor: !item["anchor"]
      ? item["anchor"]
      : atlasGlossaryHeaderSerializer(item["anchor"]),
    antonyms: !item["antonyms"]
      ? item["antonyms"]
      : atlasRelatedTermHeaderArraySerializer(item["antonyms"]),
    status: item["status"],
    nickName: item["nickName"],
    hierarchyInfo: !item["hierarchyInfo"]
      ? item["hierarchyInfo"]
      : purviewObjectIdArraySerializer(item["hierarchyInfo"]),
    resources: !item["resources"]
      ? item["resources"]
      : resourceLinkArraySerializer(item["resources"]),
    contacts: !item["contacts"]
      ? item["contacts"]
      : contactInfoArrayRecordSerializer(item["contacts"]),
    attributes: item["attributes"],
    assignedEntities: !item["assignedEntities"]
      ? item["assignedEntities"]
      : atlasRelatedObjectIdArraySerializer(item["assignedEntities"]),
    categories: !item["categories"]
      ? item["categories"]
      : atlasTermCategorizationHeaderArraySerializer(item["categories"]),
    classifies: !item["classifies"]
      ? item["classifies"]
      : atlasRelatedTermHeaderArraySerializer(item["classifies"]),
    examples: !item["examples"]
      ? item["examples"]
      : item["examples"].map((p: any) => {
          return p;
        }),
    isA: !item["isA"]
      ? item["isA"]
      : atlasRelatedTermHeaderArraySerializer(item["isA"]),
    preferredTerms: !item["preferredTerms"]
      ? item["preferredTerms"]
      : atlasRelatedTermHeaderArraySerializer(item["preferredTerms"]),
    preferredToTerms: !item["preferredToTerms"]
      ? item["preferredToTerms"]
      : atlasRelatedTermHeaderArraySerializer(item["preferredToTerms"]),
    replacedBy: !item["replacedBy"]
      ? item["replacedBy"]
      : atlasRelatedTermHeaderArraySerializer(item["replacedBy"]),
    replacementTerms: !item["replacementTerms"]
      ? item["replacementTerms"]
      : atlasRelatedTermHeaderArraySerializer(item["replacementTerms"]),
    seeAlso: !item["seeAlso"]
      ? item["seeAlso"]
      : atlasRelatedTermHeaderArraySerializer(item["seeAlso"]),
    synonyms: !item["synonyms"]
      ? item["synonyms"]
      : atlasRelatedTermHeaderArraySerializer(item["synonyms"]),
    translatedTerms: !item["translatedTerms"]
      ? item["translatedTerms"]
      : atlasRelatedTermHeaderArraySerializer(item["translatedTerms"]),
    translationTerms: !item["translationTerms"]
      ? item["translationTerms"]
      : atlasRelatedTermHeaderArraySerializer(item["translationTerms"]),
    usage: item["usage"],
    validValues: !item["validValues"]
      ? item["validValues"]
      : atlasRelatedTermHeaderArraySerializer(item["validValues"]),
    validValuesFor: !item["validValuesFor"]
      ? item["validValuesFor"]
      : atlasRelatedTermHeaderArraySerializer(item["validValuesFor"]),
  };
}

export function atlasGlossaryTermDeserializer(item: any): AtlasGlossaryTerm {
  return {
    guid: item["guid"],
    classifications: !item["classifications"]
      ? item["classifications"]
      : atlasClassificationArrayDeserializer(item["classifications"]),
    longDescription: item["longDescription"],
    name: item["name"],
    qualifiedName: item["qualifiedName"],
    shortDescription: item["shortDescription"],
    lastModifiedTS: item["lastModifiedTS"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    abbreviation: item["abbreviation"],
    templateName: !item["templateName"]
      ? item["templateName"]
      : item["templateName"].map((p: any) => {
          return p;
        }),
    anchor: !item["anchor"]
      ? item["anchor"]
      : atlasGlossaryHeaderDeserializer(item["anchor"]),
    antonyms: !item["antonyms"]
      ? item["antonyms"]
      : atlasRelatedTermHeaderArrayDeserializer(item["antonyms"]),
    status: item["status"],
    nickName: item["nickName"],
    hierarchyInfo: !item["hierarchyInfo"]
      ? item["hierarchyInfo"]
      : purviewObjectIdArrayDeserializer(item["hierarchyInfo"]),
    resources: !item["resources"]
      ? item["resources"]
      : resourceLinkArrayDeserializer(item["resources"]),
    contacts: !item["contacts"]
      ? item["contacts"]
      : contactInfoArrayRecordDeserializer(item["contacts"]),
    attributes: item["attributes"],
    assignedEntities: !item["assignedEntities"]
      ? item["assignedEntities"]
      : atlasRelatedObjectIdArrayDeserializer(item["assignedEntities"]),
    categories: !item["categories"]
      ? item["categories"]
      : atlasTermCategorizationHeaderArrayDeserializer(item["categories"]),
    classifies: !item["classifies"]
      ? item["classifies"]
      : atlasRelatedTermHeaderArrayDeserializer(item["classifies"]),
    examples: !item["examples"]
      ? item["examples"]
      : item["examples"].map((p: any) => {
          return p;
        }),
    isA: !item["isA"]
      ? item["isA"]
      : atlasRelatedTermHeaderArrayDeserializer(item["isA"]),
    preferredTerms: !item["preferredTerms"]
      ? item["preferredTerms"]
      : atlasRelatedTermHeaderArrayDeserializer(item["preferredTerms"]),
    preferredToTerms: !item["preferredToTerms"]
      ? item["preferredToTerms"]
      : atlasRelatedTermHeaderArrayDeserializer(item["preferredToTerms"]),
    replacedBy: !item["replacedBy"]
      ? item["replacedBy"]
      : atlasRelatedTermHeaderArrayDeserializer(item["replacedBy"]),
    replacementTerms: !item["replacementTerms"]
      ? item["replacementTerms"]
      : atlasRelatedTermHeaderArrayDeserializer(item["replacementTerms"]),
    seeAlso: !item["seeAlso"]
      ? item["seeAlso"]
      : atlasRelatedTermHeaderArrayDeserializer(item["seeAlso"]),
    synonyms: !item["synonyms"]
      ? item["synonyms"]
      : atlasRelatedTermHeaderArrayDeserializer(item["synonyms"]),
    translatedTerms: !item["translatedTerms"]
      ? item["translatedTerms"]
      : atlasRelatedTermHeaderArrayDeserializer(item["translatedTerms"]),
    translationTerms: !item["translationTerms"]
      ? item["translationTerms"]
      : atlasRelatedTermHeaderArrayDeserializer(item["translationTerms"]),
    usage: item["usage"],
    validValues: !item["validValues"]
      ? item["validValues"]
      : atlasRelatedTermHeaderArrayDeserializer(item["validValues"]),
    validValuesFor: !item["validValuesFor"]
      ? item["validValuesFor"]
      : atlasRelatedTermHeaderArrayDeserializer(item["validValuesFor"]),
  };
}

/** Status for term */
export type TermStatus = "Draft" | "Approved" | "Alert" | "Expired";

export function purviewObjectIdArraySerializer(
  result: Array<PurviewObjectId>,
): any[] {
  return result.map((item) => {
    return purviewObjectIdSerializer(item);
  });
}

export function purviewObjectIdArrayDeserializer(
  result: Array<PurviewObjectId>,
): any[] {
  return result.map((item) => {
    return purviewObjectIdDeserializer(item);
  });
}

/** PurviewObjectId */
export interface PurviewObjectId {
  /** The GUID of the object. */
  guid?: string;
  /** The name of the type. */
  typeName?: string;
  /** The unique attributes of the object. */
  uniqueAttributes?: Record<string, any>;
  /** Name */
  name?: string;
  /** Display text */
  displayText?: string;
  /** Item path */
  itemPath?: string;
  /** Resource Id */
  resourceId?: string;
  /** Dictionary of <any> */
  properties?: Record<string, any>;
}

export function purviewObjectIdSerializer(item: PurviewObjectId): any {
  return {
    guid: item["guid"],
    typeName: item["typeName"],
    uniqueAttributes: item["uniqueAttributes"],
    name: item["name"],
    displayText: item["displayText"],
    itemPath: item["itemPath"],
    resourceId: item["resourceId"],
    properties: item["properties"],
  };
}

export function purviewObjectIdDeserializer(item: any): PurviewObjectId {
  return {
    guid: item["guid"],
    typeName: item["typeName"],
    uniqueAttributes: item["uniqueAttributes"],
    name: item["name"],
    displayText: item["displayText"],
    itemPath: item["itemPath"],
    resourceId: item["resourceId"],
    properties: item["properties"],
  };
}

export function resourceLinkArraySerializer(
  result: Array<ResourceLink>,
): any[] {
  return result.map((item) => {
    return resourceLinkSerializer(item);
  });
}

export function resourceLinkArrayDeserializer(
  result: Array<ResourceLink>,
): any[] {
  return result.map((item) => {
    return resourceLinkDeserializer(item);
  });
}

/** ResourceLink */
export interface ResourceLink {
  /** Display name for url. */
  displayName?: string;
  /** web url. http or https */
  url?: string;
}

export function resourceLinkSerializer(item: ResourceLink): any {
  return { displayName: item["displayName"], url: item["url"] };
}

export function resourceLinkDeserializer(item: any): ResourceLink {
  return {
    displayName: item["displayName"],
    url: item["url"],
  };
}

export function atlasRelatedObjectIdArraySerializer(
  result: Array<AtlasRelatedObjectId>,
): any[] {
  return result.map((item) => {
    return atlasRelatedObjectIdSerializer(item);
  });
}

export function atlasRelatedObjectIdArrayDeserializer(
  result: Array<AtlasRelatedObjectId>,
): any[] {
  return result.map((item) => {
    return atlasRelatedObjectIdDeserializer(item);
  });
}

/**
 * Reference to an object-instance of AtlasEntity type used in relationship
 * attribute values
 */
export interface AtlasRelatedObjectId {
  /** The GUID of the object. */
  guid?: string;
  /** The name of the type. */
  typeName?: string;
  /** The unique attributes of the object. */
  uniqueAttributes?: Record<string, any>;
  /** The display text. */
  displayText?: string;
  /**
   * Status of the entity - can be active or deleted. Deleted entities are not
   * removed.
   */
  entityStatus?: EntityStatus;
  /** Relationship type */
  relationshipType?: string;
  /**
   * Captures details of struct contents. Not instantiated directly, used only via
   * AtlasEntity, AtlasClassification.
   */
  relationshipAttributes?: AtlasStruct;
  /** The GUID of the relationship. */
  relationshipGuid?: string;
  /** The enum of relationship status. */
  relationshipStatus?: StatusAtlasRelationship;
}

export function atlasRelatedObjectIdSerializer(
  item: AtlasRelatedObjectId,
): any {
  return {
    guid: item["guid"],
    typeName: item["typeName"],
    uniqueAttributes: item["uniqueAttributes"],
    displayText: item["displayText"],
    entityStatus: item["entityStatus"],
    relationshipType: item["relationshipType"],
    relationshipAttributes: !item["relationshipAttributes"]
      ? item["relationshipAttributes"]
      : atlasStructSerializer(item["relationshipAttributes"]),
    relationshipGuid: item["relationshipGuid"],
    relationshipStatus: item["relationshipStatus"],
  };
}

export function atlasRelatedObjectIdDeserializer(
  item: any,
): AtlasRelatedObjectId {
  return {
    guid: item["guid"],
    typeName: item["typeName"],
    uniqueAttributes: item["uniqueAttributes"],
    displayText: item["displayText"],
    entityStatus: item["entityStatus"],
    relationshipType: item["relationshipType"],
    relationshipAttributes: !item["relationshipAttributes"]
      ? item["relationshipAttributes"]
      : atlasStructDeserializer(item["relationshipAttributes"]),
    relationshipGuid: item["relationshipGuid"],
    relationshipStatus: item["relationshipStatus"],
  };
}

/**
 * Captures details of struct contents. Not instantiated directly, used only via
 * AtlasEntity, AtlasClassification.
 */
export interface AtlasStruct {
  /** The attributes of the struct. */
  attributes?: Record<string, any>;
  /** The name of the type. */
  typeName?: string;
  /** ETag for concurrency control. */
  lastModifiedTS?: string;
}

export function atlasStructSerializer(item: AtlasStruct): any {
  return {
    attributes: item["attributes"],
    typeName: item["typeName"],
    lastModifiedTS: item["lastModifiedTS"],
  };
}

export function atlasStructDeserializer(item: any): AtlasStruct {
  return {
    attributes: item["attributes"],
    typeName: item["typeName"],
    lastModifiedTS: item["lastModifiedTS"],
  };
}

/** Status for atlas relationship */
export type StatusAtlasRelationship = "ACTIVE" | "DELETED";

export function atlasTermCategorizationHeaderArraySerializer(
  result: Array<AtlasTermCategorizationHeader>,
): any[] {
  return result.map((item) => {
    return atlasTermCategorizationHeaderSerializer(item);
  });
}

export function atlasTermCategorizationHeaderArrayDeserializer(
  result: Array<AtlasTermCategorizationHeader>,
): any[] {
  return result.map((item) => {
    return atlasTermCategorizationHeaderDeserializer(item);
  });
}

/** The basic information for term categorization. */
export interface AtlasTermCategorizationHeader {
  /** The GUID of the category. */
  categoryGuid?: string;
  /** The description of the record. */
  description?: string;
  /** The display text. */
  displayText?: string;
  /** The GUID of the relationship. */
  relationGuid?: string;
  /** The status of term relationship. */
  status?: AtlasTermRelationshipStatus;
}

export function atlasTermCategorizationHeaderSerializer(
  item: AtlasTermCategorizationHeader,
): any {
  return {
    categoryGuid: item["categoryGuid"],
    description: item["description"],
    displayText: item["displayText"],
    relationGuid: item["relationGuid"],
    status: item["status"],
  };
}

export function atlasTermCategorizationHeaderDeserializer(
  item: any,
): AtlasTermCategorizationHeader {
  return {
    categoryGuid: item["categoryGuid"],
    description: item["description"],
    displayText: item["displayText"],
    relationGuid: item["relationGuid"],
    status: item["status"],
  };
}

/** The extended information of glossary. */
export interface AtlasGlossaryExtInfo {
  /** The GUID of the object. */
  guid?: string;
  /** An array of classifications. */
  classifications?: AtlasClassification[];
  /** The long version description. */
  longDescription?: string;
  /** The name of the glossary object. */
  name?: string;
  /** The qualified name of the glossary object. */
  qualifiedName?: string;
  /** The short version of description. */
  shortDescription?: string;
  /** ETag for concurrency control. */
  lastModifiedTS?: string;
  /** The created time of the record. */
  createTime?: number;
  /** The user who created the record. */
  createdBy?: string;
  /** The update time of the record. */
  updateTime?: number;
  /** The user who updated the record. */
  updatedBy?: string;
  /** An array of categories. */
  categories?: AtlasRelatedCategoryHeader[];
  /** The language of the glossary. */
  language?: string;
  /** An array of related term headers. */
  terms?: AtlasRelatedTermHeader[];
  /** The usage of the glossary. */
  usage?: string;
  /** The glossary category information. */
  categoryInfo?: Record<string, AtlasGlossaryCategory>;
  /** The glossary term information. */
  termInfo?: Record<string, AtlasGlossaryTerm>;
}

export function atlasGlossaryExtInfoDeserializer(
  item: any,
): AtlasGlossaryExtInfo {
  return {
    guid: item["guid"],
    classifications: !item["classifications"]
      ? item["classifications"]
      : atlasClassificationArrayDeserializer(item["classifications"]),
    longDescription: item["longDescription"],
    name: item["name"],
    qualifiedName: item["qualifiedName"],
    shortDescription: item["shortDescription"],
    lastModifiedTS: item["lastModifiedTS"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    categories: !item["categories"]
      ? item["categories"]
      : atlasRelatedCategoryHeaderArrayDeserializer(item["categories"]),
    language: item["language"],
    terms: !item["terms"]
      ? item["terms"]
      : atlasRelatedTermHeaderArrayDeserializer(item["terms"]),
    usage: item["usage"],
    categoryInfo: !item["categoryInfo"]
      ? item["categoryInfo"]
      : atlasGlossaryCategoryRecordDeserializer(item["categoryInfo"]),
    termInfo: !item["termInfo"]
      ? item["termInfo"]
      : atlasGlossaryTermRecordDeserializer(item["termInfo"]),
  };
}

export function atlasGlossaryCategoryRecordSerializer(
  item: Record<string, AtlasGlossaryCategory>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : atlasGlossaryCategorySerializer(item[key]);
  });
  return result;
}

export function atlasGlossaryCategoryRecordDeserializer(
  item: Record<string, any>,
): Record<string, AtlasGlossaryCategory> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : atlasGlossaryCategoryDeserializer(item[key]);
  });
  return result;
}

export function atlasGlossaryTermRecordSerializer(
  item: Record<string, AtlasGlossaryTerm>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : atlasGlossaryTermSerializer(item[key]);
  });
  return result;
}

export function atlasGlossaryTermRecordDeserializer(
  item: Record<string, any>,
): Record<string, AtlasGlossaryTerm> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : atlasGlossaryTermDeserializer(item[key]);
  });
  return result;
}

/** The search query of advanced search request. */
export interface QueryOptions {
  /** The keywords applied to all searchable fields. */
  keywords?: string;
  /**
   * The limit of the number of the search result. default value is 50; maximum
   * value is 1000.
   */
  limit?: number;
  /**
   * The token used to get next batch of data. Default 'Null' to get the first
   * batch, and will return new token in each response unless there's no more data.
   */
  continuationToken?: string;
  /** The sort order of search results, can specify multiple fields. */
  orderby?: any[];
  /** The filter for the search. See examples for the usage of supported filters. */
  filter?: any;
  /** The facets for search. See examples for the usage of supported facets. */
  facets?: SearchFacetItem[];
  /** The taxonomy setting for search. */
  taxonomySetting?: SearchTaxonomySetting;
}

export function queryOptionsSerializer(item: QueryOptions): any {
  return {
    keywords: item["keywords"],
    limit: item["limit"],
    continuationToken: item["continuationToken"],
    orderby: !item["orderby"]
      ? item["orderby"]
      : item["orderby"].map((p: any) => {
          return p;
        }),
    filter: item["filter"],
    facets: !item["facets"]
      ? item["facets"]
      : searchFacetItemArraySerializer(item["facets"]),
    taxonomySetting: !item["taxonomySetting"]
      ? item["taxonomySetting"]
      : searchTaxonomySettingSerializer(item["taxonomySetting"]),
  };
}

export function searchFacetItemArraySerializer(
  result: Array<SearchFacetItem>,
): any[] {
  return result.map((item) => {
    return searchFacetItemSerializer(item);
  });
}

/** The content of a search facet result item. */
export interface SearchFacetItem {
  /** The count of the facet item. */
  count?: number;
  /** The name of the facet item. */
  facet?: string;
  /** Define the sorting criteria for items */
  sort?: SearchFacetSort;
}

export function searchFacetItemSerializer(item: SearchFacetItem): any {
  return {
    count: item["count"],
    facet: item["facet"],
    sort: !item["sort"]
      ? item["sort"]
      : searchFacetSortSerializer(item["sort"]),
  };
}

/** The sorting criteria */
export interface SearchFacetSort {
  /** Order by count */
  count?: SearchSortOrder;
  /** Order by value */
  value?: SearchSortOrder;
}

export function searchFacetSortSerializer(item: SearchFacetSort): any {
  return { count: item["count"], value: item["value"] };
}

/** Search sort order */
export type SearchSortOrder = "asc" | "desc";

/** Taxonomy setting for search request */
export interface SearchTaxonomySetting {
  /** Asset types */
  assetTypes?: string[];
  /** The content of a search facet result item. */
  facet?: SearchFacetItem;
}

export function searchTaxonomySettingSerializer(
  item: SearchTaxonomySetting,
): any {
  return {
    assetTypes: !item["assetTypes"]
      ? item["assetTypes"]
      : item["assetTypes"].map((p: any) => {
          return p;
        }),
    facet: !item["facet"]
      ? item["facet"]
      : searchFacetItemSerializer(item["facet"]),
  };
}

/** The result of the search result. */
export interface QueryResult {
  /**
   * The total number of search results (not the number of documents in a single
   * page).
   */
  searchCount?: number;
  /** 'True' if the '@search.count' is an approximate value and vise versa. */
  searchCountApproximate?: boolean;
  /** The token used to get next batch of data. Absent if there's no more data. */
  continuationToken?: string;
  /**
   * A facet list that consists of index fields assetType ,classification,
   * contactId, and label. When the facet is specified in the request, the value of
   * the facet is returned as an element of @search.facets.
   */
  searchFacets?: SearchFacetResultValue;
  /** Search result value */
  value?: SearchResultValue[];
}

export function queryResultDeserializer(item: any): QueryResult {
  return {
    searchCount: item["@search.count"],
    searchCountApproximate: item["@search.count.approximate"],
    continuationToken: item["continuationToken"],
    searchFacets: !item["@search.facets"]
      ? item["@search.facets"]
      : searchFacetResultValueDeserializer(item["@search.facets"]),
    value: !item["value"]
      ? item["value"]
      : searchResultValueArrayDeserializer(item["value"]),
  };
}

/**
 * A facet list that consists of index fields assetType ,classification,
 * contactId, and label. When the facet is specified in the request, the value of
 * the facet is returned as an element of @search.facets.
 */
export interface SearchFacetResultValue {
  /** Entity type */
  entityType?: SearchFacetItemValue[];
  /** Asset type */
  assetType?: SearchFacetItemValue[];
  /** Classification */
  classification?: SearchFacetItemValue[];
  /** Term */
  term?: SearchFacetItemValue[];
  /** Contact id */
  contactId?: SearchFacetItemValue[];
  /** Contact type */
  contactType?: SearchFacetItemValue[];
  /** Label */
  label?: SearchFacetItemValue[];
  /** Glossary type */
  glossaryType?: SearchFacetItemValue[];
  /** Term status */
  termStatus?: SearchFacetItemValue[];
  /** Term template */
  termTemplate?: SearchFacetItemValue[];
}

export function searchFacetResultValueDeserializer(
  item: any,
): SearchFacetResultValue {
  return {
    entityType: !item["entityType"]
      ? item["entityType"]
      : searchFacetItemValueArrayDeserializer(item["entityType"]),
    assetType: !item["assetType"]
      ? item["assetType"]
      : searchFacetItemValueArrayDeserializer(item["assetType"]),
    classification: !item["classification"]
      ? item["classification"]
      : searchFacetItemValueArrayDeserializer(item["classification"]),
    term: !item["term"]
      ? item["term"]
      : searchFacetItemValueArrayDeserializer(item["term"]),
    contactId: !item["contactId"]
      ? item["contactId"]
      : searchFacetItemValueArrayDeserializer(item["contactId"]),
    contactType: !item["contactType"]
      ? item["contactType"]
      : searchFacetItemValueArrayDeserializer(item["contactType"]),
    label: !item["label"]
      ? item["label"]
      : searchFacetItemValueArrayDeserializer(item["label"]),
    glossaryType: !item["glossaryType"]
      ? item["glossaryType"]
      : searchFacetItemValueArrayDeserializer(item["glossaryType"]),
    termStatus: !item["termStatus"]
      ? item["termStatus"]
      : searchFacetItemValueArrayDeserializer(item["termStatus"]),
    termTemplate: !item["termTemplate"]
      ? item["termTemplate"]
      : searchFacetItemValueArrayDeserializer(item["termTemplate"]),
  };
}

export function searchFacetItemValueArrayDeserializer(
  result: Array<SearchFacetItemValue>,
): any[] {
  return result.map((item) => {
    return searchFacetItemValueDeserializer(item);
  });
}

/** The content of a search facet result item. */
export interface SearchFacetItemValue {
  /** The count of the facet item. */
  count?: number;
  /** The name of the facet item. */
  value?: string;
}

export function searchFacetItemValueDeserializer(
  item: any,
): SearchFacetItemValue {
  return {
    count: item["count"],
    value: item["value"],
  };
}

export function searchResultValueArrayDeserializer(
  result: Array<SearchResultValue>,
): any[] {
  return result.map((item) => {
    return searchResultValueDeserializer(item);
  });
}

/** The value item of the search result. */
export interface SearchResultValue {
  /**
   * The search score calculated by the search engine. The results are ordered by
   * search score by default.
   */
  searchScore?: number;
  /**
   * A highlight list that consists of index fields id ,qualifiedName, name,
   * description, entityType. When the keyword appears in those fields, the value of
   * the field, attached with emphasis mark, is returned as an element of
   * @search.highlights.
   */
  searchHighlights?: SearchHighlights;
  /**
   * The object type of the record. Object type is the top-level property to
   * distinguish whether a record is an asset or a term.
   */
  objectType?: string;
  /** The create time of the record. The Unix epoch format. */
  createTime?: number;
  /** The last update time of the record. The Unix epoch format. */
  updateTime?: number;
  /** The GUID of the record. */
  id?: string;
  /** The name of the record. */
  name?: string;
  /** The qualified name of the record. */
  qualifiedName?: string;
  /** The type name of the asset. */
  entityType?: string;
  /** The description of the asset. */
  description?: string;
  /** The endorsement of the asset. */
  endorsement?: string[];
  /** The owner of the record. */
  owner?: string;
  /** The classifications of the record. */
  classification?: string[];
  /** The labels of the asset. */
  label?: string[];
  /** The terms assigned to the asset. */
  term?: TermSearchResultValue[];
  /** The contacts of the asset. */
  contact?: ContactSearchResultValue[];
  /** The asset types of the asset. */
  assetType?: string[];
  /**
   * The type name of the term. Could be AtlasGlossary, AtlasGlossaryTerm or
   * AtlasGlossaryCategory.
   */
  glossaryType?: string;
  /** The glossary name of the term. */
  glossary?: string;
  /** The status of the term. */
  termStatus?: string;
  /** The term template names used by the term. */
  termTemplate?: string[];
  /** The definition of the term. */
  longDescription?: string;
}

export function searchResultValueDeserializer(item: any): SearchResultValue {
  return {
    searchScore: item["@search.score"],
    searchHighlights: !item["@search.highlights"]
      ? item["@search.highlights"]
      : searchHighlightsDeserializer(item["@search.highlights"]),
    objectType: item["objectType"],
    createTime: item["createTime"],
    updateTime: item["updateTime"],
    id: item["id"],
    name: item["name"],
    qualifiedName: item["qualifiedName"],
    entityType: item["entityType"],
    description: item["description"],
    endorsement: !item["endorsement"]
      ? item["endorsement"]
      : item["endorsement"].map((p: any) => {
          return p;
        }),
    owner: item["owner"],
    classification: !item["classification"]
      ? item["classification"]
      : item["classification"].map((p: any) => {
          return p;
        }),
    label: !item["label"]
      ? item["label"]
      : item["label"].map((p: any) => {
          return p;
        }),
    term: !item["term"]
      ? item["term"]
      : termSearchResultValueArrayDeserializer(item["term"]),
    contact: !item["contact"]
      ? item["contact"]
      : contactSearchResultValueArrayDeserializer(item["contact"]),
    assetType: !item["assetType"]
      ? item["assetType"]
      : item["assetType"].map((p: any) => {
          return p;
        }),
    glossaryType: item["glossaryType"],
    glossary: item["glossary"],
    termStatus: item["termStatus"],
    termTemplate: !item["termTemplate"]
      ? item["termTemplate"]
      : item["termTemplate"].map((p: any) => {
          return p;
        }),
    longDescription: item["longDescription"],
  };
}

/**
 * A highlight list that consists of index fields id ,qualifiedName, name,
 * description, entityType. When the keyword appears in those fields, the value of
 * the field, attached with emphasis mark, is returned as an element of
 * @search.highlights.
 */
export interface SearchHighlights {
  /** Id */
  id?: string[];
  /** Qualified name */
  qualifiedName?: string[];
  /** Name */
  name?: string[];
  /** Description */
  description?: string[];
  /** Entity type */
  entityType?: string[];
}

export function searchHighlightsDeserializer(item: any): SearchHighlights {
  return {
    id: !item["id"]
      ? item["id"]
      : item["id"].map((p: any) => {
          return p;
        }),
    qualifiedName: !item["qualifiedName"]
      ? item["qualifiedName"]
      : item["qualifiedName"].map((p: any) => {
          return p;
        }),
    name: !item["name"]
      ? item["name"]
      : item["name"].map((p: any) => {
          return p;
        }),
    description: !item["description"]
      ? item["description"]
      : item["description"].map((p: any) => {
          return p;
        }),
    entityType: !item["entityType"]
      ? item["entityType"]
      : item["entityType"].map((p: any) => {
          return p;
        }),
  };
}

export function termSearchResultValueArrayDeserializer(
  result: Array<TermSearchResultValue>,
): any[] {
  return result.map((item) => {
    return termSearchResultValueDeserializer(item);
  });
}

/** The context. */
export interface TermSearchResultValue {
  /** The name of the term. */
  name?: string;
  /** The name of the glossary which contains the term. */
  glossaryName?: string;
  /** The GUID of the term. */
  guid?: string;
}

export function termSearchResultValueDeserializer(
  item: any,
): TermSearchResultValue {
  return {
    name: item["name"],
    glossaryName: item["glossaryName"],
    guid: item["guid"],
  };
}

export function contactSearchResultValueArrayDeserializer(
  result: Array<ContactSearchResultValue>,
): any[] {
  return result.map((item) => {
    return contactSearchResultValueDeserializer(item);
  });
}

/** The contact in the search and suggest result. */
export interface ContactSearchResultValue {
  /** The GUID of the contact. */
  id?: string;
  /** The description of the contact. */
  info?: string;
  /**
   * The type of the contact. It can be Expert or Owner for an entity. It can be
   * Expert or Steward for a glossary term.
   */
  contactType?: string;
}

export function contactSearchResultValueDeserializer(
  item: any,
): ContactSearchResultValue {
  return {
    id: item["id"],
    info: item["info"],
    contactType: item["contactType"],
  };
}

/** The payload of suggest request. */
export interface SuggestOptions {
  /**
   * The keywords applied to all fields that support suggest operation. It must be
   * at least 1 character, and no more than 100 characters. In the index schema we
   * defined a default suggester which lists all the supported fields and specifies
   * a search mode.
   */
  keywords?: string;
  /**
   * The number of suggestions we hope to return. The default value is 5. The value
   * must be a number between 1 and 100.
   */
  limit?: number;
  /** The filter for the search. */
  filter?: any;
}

export function suggestOptionsSerializer(item: SuggestOptions): any {
  return {
    keywords: item["keywords"],
    limit: item["limit"],
    filter: item["filter"],
  };
}

/** The result item of the search suggest. */
export interface SuggestResult {
  /** The result value */
  value?: SuggestResultValue[];
}

export function suggestResultDeserializer(item: any): SuggestResult {
  return {
    value: !item["value"]
      ? item["value"]
      : suggestResultValueArrayDeserializer(item["value"]),
  };
}

export function suggestResultValueArrayDeserializer(
  result: Array<SuggestResultValue>,
): any[] {
  return result.map((item) => {
    return suggestResultValueDeserializer(item);
  });
}

/** The value item of the search suggest. */
export interface SuggestResultValue {
  /**
   * The search score calculated by the search engine. The results are ordered by
   * search score by default.
   */
  searchScore?: number;
  /**
   * The target text that contains the keyword as prefix. The keyword is wrapped
   * with emphasis mark.
   */
  searchText?: string;
  /**
   * The object type of the record. Object type is the top-level property to
   * distinguish whether a record is an asset or a term.
   */
  objectType?: string;
  /** The create time of the record. The Unix epoch format. */
  createTime?: number;
  /** The last update time of the record. The Unix epoch format. */
  updateTime?: number;
  /** The GUID of the record. */
  id?: string;
  /** The name of the record. */
  name?: string;
  /** The qualified name of the record. */
  qualifiedName?: string;
  /** The type name of the asset. */
  entityType?: string;
  /** The description of the asset. */
  description?: string;
  /** The endorsement of the asset. */
  endorsement?: string[];
  /** The owner of the record. */
  owner?: string;
  /** The classifications of the record. */
  classification?: string[];
  /** The labels of the asset. */
  label?: string[];
  /** The terms assigned to the asset. */
  term?: TermSearchResultValue[];
  /** The contacts of the asset. */
  contact?: ContactSearchResultValue[];
  /** The asset types of the asset. */
  assetType?: string[];
  /**
   * The type name of the term. Could be AtlasGlossary, AtlasGlossaryTerm or
   * AtlasGlossaryCategory.
   */
  glossaryType?: string;
  /** The glossary name of the term. */
  glossary?: string;
  /** The status of the term. */
  termStatus?: string;
  /** The term template names used by the term. */
  termTemplate?: string[];
  /** The definition of the term. */
  longDescription?: string;
}

export function suggestResultValueDeserializer(item: any): SuggestResultValue {
  return {
    searchScore: item["@search.score"],
    searchText: item["@search.text"],
    objectType: item["objectType"],
    createTime: item["createTime"],
    updateTime: item["updateTime"],
    id: item["id"],
    name: item["name"],
    qualifiedName: item["qualifiedName"],
    entityType: item["entityType"],
    description: item["description"],
    endorsement: !item["endorsement"]
      ? item["endorsement"]
      : item["endorsement"].map((p: any) => {
          return p;
        }),
    owner: item["owner"],
    classification: !item["classification"]
      ? item["classification"]
      : item["classification"].map((p: any) => {
          return p;
        }),
    label: !item["label"]
      ? item["label"]
      : item["label"].map((p: any) => {
          return p;
        }),
    term: !item["term"]
      ? item["term"]
      : termSearchResultValueArrayDeserializer(item["term"]),
    contact: !item["contact"]
      ? item["contact"]
      : contactSearchResultValueArrayDeserializer(item["contact"]),
    assetType: !item["assetType"]
      ? item["assetType"]
      : item["assetType"].map((p: any) => {
          return p;
        }),
    glossaryType: item["glossaryType"],
    glossary: item["glossary"],
    termStatus: item["termStatus"],
    termTemplate: !item["termTemplate"]
      ? item["termTemplate"]
      : item["termTemplate"].map((p: any) => {
          return p;
        }),
    longDescription: item["longDescription"],
  };
}

/** The payload of autocomplete request. */
export interface AutoCompleteOptions {
  /**
   * The keywords applied to all fields that support autocomplete operation. It must
   * be at least 1 character, and no more than 100 characters.
   */
  keywords?: string;
  /**
   * The number of autocomplete results we hope to return. The default value is 50.
   * The value must be a number between 1 and 100.
   */
  limit?: number;
  /** The filter for the autocomplete request. */
  filter?: any;
}

export function autoCompleteOptionsSerializer(item: AutoCompleteOptions): any {
  return {
    keywords: item["keywords"],
    limit: item["limit"],
    filter: item["filter"],
  };
}

/** The result of the autocomplete request. */
export interface AutoCompleteResult {
  /** The result value */
  value?: AutoCompleteResultValue[];
}

export function autoCompleteResultDeserializer(item: any): AutoCompleteResult {
  return {
    value: !item["value"]
      ? item["value"]
      : autoCompleteResultValueArrayDeserializer(item["value"]),
  };
}

export function autoCompleteResultValueArrayDeserializer(
  result: Array<AutoCompleteResultValue>,
): any[] {
  return result.map((item) => {
    return autoCompleteResultValueDeserializer(item);
  });
}

/** The value item of the autocomplete suggest. */
export interface AutoCompleteResultValue {
  /** The completed term or phrase. */
  text?: string;
  /** The completed search query text. */
  queryPlusText?: string;
}

export function autoCompleteResultValueDeserializer(
  item: any,
): AutoCompleteResultValue {
  return {
    text: item["text"],
    queryPlusText: item["queryPlusText"],
  };
}

/** The lineage information. */
export interface AtlasLineageInfo {
  /** The GUID of the base entity. */
  baseEntityGuid?: string;
  /** The GUID entity map. */
  guidEntityMap?: Record<string, AtlasEntityHeader>;
  /** The entity count in specific direction. */
  widthCounts?: Record<string, Record<string, any>>;
  /** The depth of lineage. */
  lineageDepth?: number;
  /** The width of lineage. */
  lineageWidth?: number;
  /** The number of children node. */
  childrenCount?: number;
  /** The enum of lineage direction. */
  lineageDirection?: LineageDirection;
  /** An array of parentRelations relations. */
  parentRelations?: ParentRelation[];
  /** An array of lineage relations. */
  relations?: LineageRelation[];
}

export function atlasLineageInfoDeserializer(item: any): AtlasLineageInfo {
  return {
    baseEntityGuid: item["baseEntityGuid"],
    guidEntityMap: !item["guidEntityMap"]
      ? item["guidEntityMap"]
      : atlasEntityHeaderRecordDeserializer(item["guidEntityMap"]),
    widthCounts: item["widthCounts"],
    lineageDepth: item["lineageDepth"],
    lineageWidth: item["lineageWidth"],
    childrenCount: item["childrenCount"],
    lineageDirection: item["lineageDirection"],
    parentRelations: !item["parentRelations"]
      ? item["parentRelations"]
      : parentRelationArrayDeserializer(item["parentRelations"]),
    relations: !item["relations"]
      ? item["relations"]
      : lineageRelationArrayDeserializer(item["relations"]),
  };
}

/** Lineage direction */
export type LineageDirection = "INPUT" | "OUTPUT" | "BOTH";

export function parentRelationArrayDeserializer(
  result: Array<ParentRelation>,
): any[] {
  return result.map((item) => {
    return parentRelationDeserializer(item);
  });
}

/** The lineage parents relation with GUID of the parent entity and to child entity. */
export interface ParentRelation {
  /** The GUID of child entity. */
  childEntityId?: string;
  /** The GUID of relationship. */
  relationshipId?: string;
  /** The GUID of parent entity. */
  parentEntityId?: string;
}

export function parentRelationDeserializer(item: any): ParentRelation {
  return {
    childEntityId: item["childEntityId"],
    relationshipId: item["relationshipId"],
    parentEntityId: item["parentEntityId"],
  };
}

export function lineageRelationArrayDeserializer(
  result: Array<LineageRelation>,
): any[] {
  return result.map((item) => {
    return lineageRelationDeserializer(item);
  });
}

/** The lineage relation with GUID of the from and to entity. */
export interface LineageRelation {
  /** The GUID of from-entity. */
  fromEntityId?: string;
  /** The GUID of relationship. */
  relationshipId?: string;
  /** The GUID of to-entity. */
  toEntityId?: string;
}

export function lineageRelationDeserializer(item: any): LineageRelation {
  return {
    fromEntityId: item["fromEntityId"],
    relationshipId: item["relationshipId"],
    toEntityId: item["toEntityId"],
  };
}

/** Atlas relationship instance. */
export interface AtlasRelationship {
  /** The attributes of the struct. */
  attributes?: Record<string, any>;
  /** The name of the type. */
  typeName?: string;
  /** ETag for concurrency control. */
  lastModifiedTS?: string;
  /** The created time of the record. */
  createTime?: number;
  /** The user who created the record. */
  createdBy?: string;
  /** Reference to an object-instance of a type - like entity. */
  end1?: AtlasObjectId;
  /** Reference to an object-instance of a type - like entity. */
  end2?: AtlasObjectId;
  /** The GUID of the relationship. */
  guid?: string;
  /** The home ID of the relationship. */
  homeId?: string;
  /** The label of the relationship. */
  label?: string;
  /** Used to record the provenance of an instance of an entity or relationship */
  provenanceType?: number;
  /** The enum of relationship status. */
  status?: StatusAtlasRelationship;
  /** The update time of the record. */
  updateTime?: number;
  /** The user who updated the record. */
  updatedBy?: string;
  /** The version of the relationship. */
  version?: number;
}

export function atlasRelationshipSerializer(item: AtlasRelationship): any {
  return {
    attributes: item["attributes"],
    typeName: item["typeName"],
    lastModifiedTS: item["lastModifiedTS"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    end1: !item["end1"] ? item["end1"] : atlasObjectIdSerializer(item["end1"]),
    end2: !item["end2"] ? item["end2"] : atlasObjectIdSerializer(item["end2"]),
    guid: item["guid"],
    homeId: item["homeId"],
    label: item["label"],
    provenanceType: item["provenanceType"],
    status: item["status"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    version: item["version"],
  };
}

export function atlasRelationshipDeserializer(item: any): AtlasRelationship {
  return {
    attributes: item["attributes"],
    typeName: item["typeName"],
    lastModifiedTS: item["lastModifiedTS"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    end1: !item["end1"]
      ? item["end1"]
      : atlasObjectIdDeserializer(item["end1"]),
    end2: !item["end2"]
      ? item["end2"]
      : atlasObjectIdDeserializer(item["end2"]),
    guid: item["guid"],
    homeId: item["homeId"],
    label: item["label"],
    provenanceType: item["provenanceType"],
    status: item["status"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    version: item["version"],
  };
}

/** Reference to an object-instance of a type - like entity. */
export interface AtlasObjectId {
  /** The GUID of the object. */
  guid?: string;
  /** The name of the type. */
  typeName?: string;
  /** The unique attributes of the object. */
  uniqueAttributes?: Record<string, any>;
}

export function atlasObjectIdSerializer(item: AtlasObjectId): any {
  return {
    guid: item["guid"],
    typeName: item["typeName"],
    uniqueAttributes: item["uniqueAttributes"],
  };
}

export function atlasObjectIdDeserializer(item: any): AtlasObjectId {
  return {
    guid: item["guid"],
    typeName: item["typeName"],
    uniqueAttributes: item["uniqueAttributes"],
  };
}

/** The relationship with extended information. */
export interface AtlasRelationshipWithExtInfo {
  /** The referred entity header. */
  referredEntities?: Record<string, AtlasEntityHeader>;
  /** Atlas relationship instance. */
  relationship?: AtlasRelationship;
}

export function atlasRelationshipWithExtInfoDeserializer(
  item: any,
): AtlasRelationshipWithExtInfo {
  return {
    referredEntities: !item["referredEntities"]
      ? item["referredEntities"]
      : atlasEntityHeaderRecordDeserializer(item["referredEntities"]),
    relationship: !item["relationship"]
      ? item["relationship"]
      : atlasRelationshipDeserializer(item["relationship"]),
  };
}

/** class that captures details of a struct-type. */
export interface AtlasBusinessMetadataDef {
  /** The enum of type category. */
  category?: TypeCategory;
  /** The created time of the record. */
  createTime?: number;
  /** The user who created the record. */
  createdBy?: string;
  /** The date format. */
  dateFormatter?: DateFormat;
  /** The description of the type definition. */
  description?: string;
  /** The GUID of the type definition. */
  guid?: string;
  /** The name of the type definition. */
  name?: string;
  /** The options for the type definition. */
  options?: Record<string, string>;
  /** The service type. */
  serviceType?: string;
  /** The version of the type. */
  typeVersion?: string;
  /** The update time of the record. */
  updateTime?: number;
  /** The user who updated the record. */
  updatedBy?: string;
  /** The version of the record. */
  version?: number;
  /** ETag for concurrency control. */
  lastModifiedTS?: string;
  /** An array of attribute definitions. */
  attributeDefs?: AtlasAttributeDef[];
}

export function atlasBusinessMetadataDefSerializer(
  item: AtlasBusinessMetadataDef,
): any {
  return {
    category: item["category"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    dateFormatter: !item["dateFormatter"]
      ? item["dateFormatter"]
      : dateFormatSerializer(item["dateFormatter"]),
    description: item["description"],
    guid: item["guid"],
    name: item["name"],
    options: item["options"],
    serviceType: item["serviceType"],
    typeVersion: item["typeVersion"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    version: item["version"],
    lastModifiedTS: item["lastModifiedTS"],
    attributeDefs: !item["attributeDefs"]
      ? item["attributeDefs"]
      : atlasAttributeDefArraySerializer(item["attributeDefs"]),
  };
}

export function atlasBusinessMetadataDefDeserializer(
  item: any,
): AtlasBusinessMetadataDef {
  return {
    category: item["category"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    dateFormatter: !item["dateFormatter"]
      ? item["dateFormatter"]
      : dateFormatDeserializer(item["dateFormatter"]),
    description: item["description"],
    guid: item["guid"],
    name: item["name"],
    options: item["options"],
    serviceType: item["serviceType"],
    typeVersion: item["typeVersion"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    version: item["version"],
    lastModifiedTS: item["lastModifiedTS"],
    attributeDefs: !item["attributeDefs"]
      ? item["attributeDefs"]
      : atlasAttributeDefArrayDeserializer(item["attributeDefs"]),
  };
}

/** Type Category */
export type TypeCategory =
  | "PRIMITIVE"
  | "OBJECT_ID_TYPE"
  | "ENUM"
  | "STRUCT"
  | "CLASSIFICATION"
  | "ENTITY"
  | "ARRAY"
  | "MAP"
  | "RELATIONSHIP"
  | "TERM_TEMPLATE";

/** The date format. */
export interface DateFormat {
  /** An array of available locales. */
  availableLocales?: string[];
  /** Calendar */
  calendar?: number;
  /** The date format. */
  dateInstance?: DateFormat;
  /** The date format. */
  dateTimeInstance?: DateFormat;
  /** The date format. */
  instance?: DateFormat;
  /** Determines the leniency of the date format. */
  lenient?: boolean;
  /** The number format. */
  numberFormat?: NumberFormat;
  /** The date format. */
  timeInstance?: DateFormat;
  /** The timezone information. */
  timeZone?: TimeZone;
}

export function dateFormatSerializer(item: DateFormat): any {
  return {
    availableLocales: !item["availableLocales"]
      ? item["availableLocales"]
      : item["availableLocales"].map((p: any) => {
          return p;
        }),
    calendar: item["calendar"],
    dateInstance: !item["dateInstance"]
      ? item["dateInstance"]
      : dateFormatSerializer(item["dateInstance"]),
    dateTimeInstance: !item["dateTimeInstance"]
      ? item["dateTimeInstance"]
      : dateFormatSerializer(item["dateTimeInstance"]),
    instance: !item["instance"]
      ? item["instance"]
      : dateFormatSerializer(item["instance"]),
    lenient: item["lenient"],
    numberFormat: !item["numberFormat"]
      ? item["numberFormat"]
      : numberFormatSerializer(item["numberFormat"]),
    timeInstance: !item["timeInstance"]
      ? item["timeInstance"]
      : dateFormatSerializer(item["timeInstance"]),
    timeZone: !item["timeZone"]
      ? item["timeZone"]
      : timeZoneSerializer(item["timeZone"]),
  };
}

export function dateFormatDeserializer(item: any): DateFormat {
  return {
    availableLocales: !item["availableLocales"]
      ? item["availableLocales"]
      : item["availableLocales"].map((p: any) => {
          return p;
        }),
    calendar: item["calendar"],
    dateInstance: !item["dateInstance"]
      ? item["dateInstance"]
      : dateFormatDeserializer(item["dateInstance"]),
    dateTimeInstance: !item["dateTimeInstance"]
      ? item["dateTimeInstance"]
      : dateFormatDeserializer(item["dateTimeInstance"]),
    instance: !item["instance"]
      ? item["instance"]
      : dateFormatDeserializer(item["instance"]),
    lenient: item["lenient"],
    numberFormat: !item["numberFormat"]
      ? item["numberFormat"]
      : numberFormatDeserializer(item["numberFormat"]),
    timeInstance: !item["timeInstance"]
      ? item["timeInstance"]
      : dateFormatDeserializer(item["timeInstance"]),
    timeZone: !item["timeZone"]
      ? item["timeZone"]
      : timeZoneDeserializer(item["timeZone"]),
  };
}

/** The number format. */
export interface NumberFormat {
  /** The number format. */
  availableLocales?: string[];
  /** The currency. */
  currency?: string;
  /** The number format. */
  currencyInstance?: NumberFormat;
  /** Determines if grouping is used. */
  groupingUsed?: boolean;
  /** The number format. */
  instance?: NumberFormat;
  /** The number format. */
  integerInstance?: NumberFormat;
  /** The maximum of fraction digits. */
  maximumFractionDigits?: number;
  /** The maximum of integer digits. */
  maximumIntegerDigits?: number;
  /** The minimum of fraction digits. */
  minimumFractionDigits?: number;
  /** The minimum of integer digits. */
  minimumIntegerDigits?: number;
  /** The number format. */
  numberInstance?: NumberFormat;
  /** Determines if only integer is parsed. */
  parseIntegerOnly?: boolean;
  /** The number format. */
  percentInstance?: NumberFormat;
  /** The enum of rounding mode. */
  roundingMode?: RoundingMode;
}

export function numberFormatSerializer(item: NumberFormat): any {
  return {
    availableLocales: !item["availableLocales"]
      ? item["availableLocales"]
      : item["availableLocales"].map((p: any) => {
          return p;
        }),
    currency: item["currency"],
    currencyInstance: !item["currencyInstance"]
      ? item["currencyInstance"]
      : numberFormatSerializer(item["currencyInstance"]),
    groupingUsed: item["groupingUsed"],
    instance: !item["instance"]
      ? item["instance"]
      : numberFormatSerializer(item["instance"]),
    integerInstance: !item["integerInstance"]
      ? item["integerInstance"]
      : numberFormatSerializer(item["integerInstance"]),
    maximumFractionDigits: item["maximumFractionDigits"],
    maximumIntegerDigits: item["maximumIntegerDigits"],
    minimumFractionDigits: item["minimumFractionDigits"],
    minimumIntegerDigits: item["minimumIntegerDigits"],
    numberInstance: !item["numberInstance"]
      ? item["numberInstance"]
      : numberFormatSerializer(item["numberInstance"]),
    parseIntegerOnly: item["parseIntegerOnly"],
    percentInstance: !item["percentInstance"]
      ? item["percentInstance"]
      : numberFormatSerializer(item["percentInstance"]),
    roundingMode: item["roundingMode"],
  };
}

export function numberFormatDeserializer(item: any): NumberFormat {
  return {
    availableLocales: !item["availableLocales"]
      ? item["availableLocales"]
      : item["availableLocales"].map((p: any) => {
          return p;
        }),
    currency: item["currency"],
    currencyInstance: !item["currencyInstance"]
      ? item["currencyInstance"]
      : numberFormatDeserializer(item["currencyInstance"]),
    groupingUsed: item["groupingUsed"],
    instance: !item["instance"]
      ? item["instance"]
      : numberFormatDeserializer(item["instance"]),
    integerInstance: !item["integerInstance"]
      ? item["integerInstance"]
      : numberFormatDeserializer(item["integerInstance"]),
    maximumFractionDigits: item["maximumFractionDigits"],
    maximumIntegerDigits: item["maximumIntegerDigits"],
    minimumFractionDigits: item["minimumFractionDigits"],
    minimumIntegerDigits: item["minimumIntegerDigits"],
    numberInstance: !item["numberInstance"]
      ? item["numberInstance"]
      : numberFormatDeserializer(item["numberInstance"]),
    parseIntegerOnly: item["parseIntegerOnly"],
    percentInstance: !item["percentInstance"]
      ? item["percentInstance"]
      : numberFormatDeserializer(item["percentInstance"]),
    roundingMode: item["roundingMode"],
  };
}

/** Rounding Mode */
export type RoundingMode =
  | "UP"
  | "DOWN"
  | "CEILING"
  | "FLOOR"
  | "HALF_UP"
  | "HALF_DOWN"
  | "HALF_EVEN"
  | "UNNECESSARY";

/** The timezone information. */
export interface TimeZone {
  /** The value of the daylight saving time. */
  dstSavings?: number;
  /** The ID of the timezone. */
  id?: string;
  /** An array of available IDs. */
  availableIds?: string[];
  /** The timezone information. */
  default?: TimeZone;
  /** The display name of the timezone. */
  displayName?: string;
  /** The raw offset of the timezone. */
  rawOffset?: number;
}

export function timeZoneSerializer(item: TimeZone): any {
  return {
    dstSavings: item["dstSavings"],
    id: item["id"],
    availableIds: !item["availableIds"]
      ? item["availableIds"]
      : item["availableIds"].map((p: any) => {
          return p;
        }),
    default: !item["default"]
      ? item["default"]
      : timeZoneSerializer(item["default"]),
    displayName: item["displayName"],
    rawOffset: item["rawOffset"],
  };
}

export function timeZoneDeserializer(item: any): TimeZone {
  return {
    dstSavings: item["dstSavings"],
    id: item["id"],
    availableIds: !item["availableIds"]
      ? item["availableIds"]
      : item["availableIds"].map((p: any) => {
          return p;
        }),
    default: !item["default"]
      ? item["default"]
      : timeZoneDeserializer(item["default"]),
    displayName: item["displayName"],
    rawOffset: item["rawOffset"],
  };
}

export function atlasAttributeDefArraySerializer(
  result: Array<AtlasAttributeDef>,
): any[] {
  return result.map((item) => {
    return atlasAttributeDefSerializer(item);
  });
}

export function atlasAttributeDefArrayDeserializer(
  result: Array<AtlasAttributeDef>,
): any[] {
  return result.map((item) => {
    return atlasAttributeDefDeserializer(item);
  });
}

/** class that captures details of a struct-attribute. */
export interface AtlasAttributeDef {
  /** single-valued attribute or multi-valued attribute. */
  cardinality?: CardinalityValue;
  /** An array of constraints. */
  constraints?: AtlasConstraintDef[];
  /** The default value of the attribute. */
  defaultValue?: string;
  /** The description of the attribute. */
  description?: string;
  /** Determines if it is included in notification. */
  includeInNotification?: boolean;
  /** Determines if it is indexable. */
  isIndexable?: boolean;
  /** Determines if it is optional. */
  isOptional?: boolean;
  /** Determines if it unique. */
  isUnique?: boolean;
  /** The name of the attribute. */
  name?: string;
  /** The options for the attribute. */
  options?: Record<string, string>;
  /** The name of the type. */
  typeName?: string;
  /** The maximum count of the values. */
  valuesMaxCount?: number;
  /** The minimum count of the values. */
  valuesMinCount?: number;
}

export function atlasAttributeDefSerializer(item: AtlasAttributeDef): any {
  return {
    cardinality: item["cardinality"],
    constraints: !item["constraints"]
      ? item["constraints"]
      : atlasConstraintDefArraySerializer(item["constraints"]),
    defaultValue: item["defaultValue"],
    description: item["description"],
    includeInNotification: item["includeInNotification"],
    isIndexable: item["isIndexable"],
    isOptional: item["isOptional"],
    isUnique: item["isUnique"],
    name: item["name"],
    options: item["options"],
    typeName: item["typeName"],
    valuesMaxCount: item["valuesMaxCount"],
    valuesMinCount: item["valuesMinCount"],
  };
}

export function atlasAttributeDefDeserializer(item: any): AtlasAttributeDef {
  return {
    cardinality: item["cardinality"],
    constraints: !item["constraints"]
      ? item["constraints"]
      : atlasConstraintDefArrayDeserializer(item["constraints"]),
    defaultValue: item["defaultValue"],
    description: item["description"],
    includeInNotification: item["includeInNotification"],
    isIndexable: item["isIndexable"],
    isOptional: item["isOptional"],
    isUnique: item["isUnique"],
    name: item["name"],
    options: item["options"],
    typeName: item["typeName"],
    valuesMaxCount: item["valuesMaxCount"],
    valuesMinCount: item["valuesMinCount"],
  };
}

/** Cardinality */
export type CardinalityValue = "SINGLE" | "LIST" | "SET";

export function atlasConstraintDefArraySerializer(
  result: Array<AtlasConstraintDef>,
): any[] {
  return result.map((item) => {
    return atlasConstraintDefSerializer(item);
  });
}

export function atlasConstraintDefArrayDeserializer(
  result: Array<AtlasConstraintDef>,
): any[] {
  return result.map((item) => {
    return atlasConstraintDefDeserializer(item);
  });
}

/** class that captures details of a constraint. */
export interface AtlasConstraintDef {
  /** The parameters of the constraint definition. */
  params?: Record<string, any>;
  /** The type of the constraint. */
  type?: string;
}

export function atlasConstraintDefSerializer(item: AtlasConstraintDef): any {
  return { params: item["params"], type: item["type"] };
}

export function atlasConstraintDefDeserializer(item: any): AtlasConstraintDef {
  return {
    params: item["params"],
    type: item["type"],
  };
}

/** class that captures details of a classification-type. */
export interface AtlasClassificationDef {
  /** The enum of type category. */
  category?: TypeCategory;
  /** The created time of the record. */
  createTime?: number;
  /** The user who created the record. */
  createdBy?: string;
  /** The date format. */
  dateFormatter?: DateFormat;
  /** The description of the type definition. */
  description?: string;
  /** The GUID of the type definition. */
  guid?: string;
  /** The name of the type definition. */
  name?: string;
  /** The options for the type definition. */
  options?: Record<string, string>;
  /** The service type. */
  serviceType?: string;
  /** The version of the type. */
  typeVersion?: string;
  /** The update time of the record. */
  updateTime?: number;
  /** The user who updated the record. */
  updatedBy?: string;
  /** The version of the record. */
  version?: number;
  /** ETag for concurrency control. */
  lastModifiedTS?: string;
  /** An array of attribute definitions. */
  attributeDefs?: AtlasAttributeDef[];
  /**
   * Specifying a list of entityType names in the classificationDef, ensures that
   * classifications can
   * only be applied to those entityTypes.
   *
   * Any subtypes of the entity types inherit the restriction.
   *
   * Any classificationDef subtypes inherit the parents entityTypes restrictions.
   *
   * Any classificationDef subtypes can further restrict the parents entityTypes
   * restrictions by specifying a subset of the entityTypes.
   *
   * An empty entityTypes list when there are no parent restrictions means there are no
   * restrictions.
   *
   * An empty entityTypes list when there are parent
   * restrictions means that the subtype picks up the parents
   * restrictions.
   *
   * If a list of entityTypes are supplied, where one inherits
   * from another, this will be rejected. This should encourage cleaner
   * classificationsDefs.
   *
   */
  entityTypes?: string[];
  /** An array of sub types. */
  subTypes?: string[];
  /** An array of super types. */
  superTypes?: string[];
}

export function atlasClassificationDefSerializer(
  item: AtlasClassificationDef,
): any {
  return {
    category: item["category"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    dateFormatter: !item["dateFormatter"]
      ? item["dateFormatter"]
      : dateFormatSerializer(item["dateFormatter"]),
    description: item["description"],
    guid: item["guid"],
    name: item["name"],
    options: item["options"],
    serviceType: item["serviceType"],
    typeVersion: item["typeVersion"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    version: item["version"],
    lastModifiedTS: item["lastModifiedTS"],
    attributeDefs: !item["attributeDefs"]
      ? item["attributeDefs"]
      : atlasAttributeDefArraySerializer(item["attributeDefs"]),
    entityTypes: !item["entityTypes"]
      ? item["entityTypes"]
      : item["entityTypes"].map((p: any) => {
          return p;
        }),
    subTypes: !item["subTypes"]
      ? item["subTypes"]
      : item["subTypes"].map((p: any) => {
          return p;
        }),
    superTypes: !item["superTypes"]
      ? item["superTypes"]
      : item["superTypes"].map((p: any) => {
          return p;
        }),
  };
}

export function atlasClassificationDefDeserializer(
  item: any,
): AtlasClassificationDef {
  return {
    category: item["category"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    dateFormatter: !item["dateFormatter"]
      ? item["dateFormatter"]
      : dateFormatDeserializer(item["dateFormatter"]),
    description: item["description"],
    guid: item["guid"],
    name: item["name"],
    options: item["options"],
    serviceType: item["serviceType"],
    typeVersion: item["typeVersion"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    version: item["version"],
    lastModifiedTS: item["lastModifiedTS"],
    attributeDefs: !item["attributeDefs"]
      ? item["attributeDefs"]
      : atlasAttributeDefArrayDeserializer(item["attributeDefs"]),
    entityTypes: !item["entityTypes"]
      ? item["entityTypes"]
      : item["entityTypes"].map((p: any) => {
          return p;
        }),
    subTypes: !item["subTypes"]
      ? item["subTypes"]
      : item["subTypes"].map((p: any) => {
          return p;
        }),
    superTypes: !item["superTypes"]
      ? item["superTypes"]
      : item["superTypes"].map((p: any) => {
          return p;
        }),
  };
}

/** class that captures details of a entity-type. */
export interface AtlasEntityDef {
  /** The enum of type category. */
  category?: TypeCategory;
  /** The created time of the record. */
  createTime?: number;
  /** The user who created the record. */
  createdBy?: string;
  /** The date format. */
  dateFormatter?: DateFormat;
  /** The description of the type definition. */
  description?: string;
  /** The GUID of the type definition. */
  guid?: string;
  /** The name of the type definition. */
  name?: string;
  /** The options for the type definition. */
  options?: Record<string, string>;
  /** The service type. */
  serviceType?: string;
  /** The version of the type. */
  typeVersion?: string;
  /** The update time of the record. */
  updateTime?: number;
  /** The user who updated the record. */
  updatedBy?: string;
  /** The version of the record. */
  version?: number;
  /** ETag for concurrency control. */
  lastModifiedTS?: string;
  /** An array of attribute definitions. */
  attributeDefs?: AtlasAttributeDef[];
  /** An array of sub types. */
  subTypes?: string[];
  /** An array of super types. */
  superTypes?: string[];
  /** An array of relationship attributes. */
  relationshipAttributeDefs?: AtlasRelationshipAttributeDef[];
}

export function atlasEntityDefSerializer(item: AtlasEntityDef): any {
  return {
    category: item["category"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    dateFormatter: !item["dateFormatter"]
      ? item["dateFormatter"]
      : dateFormatSerializer(item["dateFormatter"]),
    description: item["description"],
    guid: item["guid"],
    name: item["name"],
    options: item["options"],
    serviceType: item["serviceType"],
    typeVersion: item["typeVersion"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    version: item["version"],
    lastModifiedTS: item["lastModifiedTS"],
    attributeDefs: !item["attributeDefs"]
      ? item["attributeDefs"]
      : atlasAttributeDefArraySerializer(item["attributeDefs"]),
    subTypes: !item["subTypes"]
      ? item["subTypes"]
      : item["subTypes"].map((p: any) => {
          return p;
        }),
    superTypes: !item["superTypes"]
      ? item["superTypes"]
      : item["superTypes"].map((p: any) => {
          return p;
        }),
    relationshipAttributeDefs: !item["relationshipAttributeDefs"]
      ? item["relationshipAttributeDefs"]
      : atlasRelationshipAttributeDefArraySerializer(
          item["relationshipAttributeDefs"],
        ),
  };
}

export function atlasEntityDefDeserializer(item: any): AtlasEntityDef {
  return {
    category: item["category"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    dateFormatter: !item["dateFormatter"]
      ? item["dateFormatter"]
      : dateFormatDeserializer(item["dateFormatter"]),
    description: item["description"],
    guid: item["guid"],
    name: item["name"],
    options: item["options"],
    serviceType: item["serviceType"],
    typeVersion: item["typeVersion"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    version: item["version"],
    lastModifiedTS: item["lastModifiedTS"],
    attributeDefs: !item["attributeDefs"]
      ? item["attributeDefs"]
      : atlasAttributeDefArrayDeserializer(item["attributeDefs"]),
    subTypes: !item["subTypes"]
      ? item["subTypes"]
      : item["subTypes"].map((p: any) => {
          return p;
        }),
    superTypes: !item["superTypes"]
      ? item["superTypes"]
      : item["superTypes"].map((p: any) => {
          return p;
        }),
    relationshipAttributeDefs: !item["relationshipAttributeDefs"]
      ? item["relationshipAttributeDefs"]
      : atlasRelationshipAttributeDefArrayDeserializer(
          item["relationshipAttributeDefs"],
        ),
  };
}

export function atlasRelationshipAttributeDefArraySerializer(
  result: Array<AtlasRelationshipAttributeDef>,
): any[] {
  return result.map((item) => {
    return atlasRelationshipAttributeDefSerializer(item);
  });
}

export function atlasRelationshipAttributeDefArrayDeserializer(
  result: Array<AtlasRelationshipAttributeDef>,
): any[] {
  return result.map((item) => {
    return atlasRelationshipAttributeDefDeserializer(item);
  });
}

/**
 * The relationshipEndDef represents an end of the relationship. The end of the
 * relationship is defined by a type, an
 * attribute name, cardinality and whether
 * it  is the container end of the relationship.
 */
export interface AtlasRelationshipAttributeDef {
  /** single-valued attribute or multi-valued attribute. */
  cardinality?: CardinalityValue;
  /** An array of constraints. */
  constraints?: AtlasConstraintDef[];
  /** The default value of the attribute. */
  defaultValue?: string;
  /** The description of the attribute. */
  description?: string;
  /** Determines if it is included in notification. */
  includeInNotification?: boolean;
  /** Determines if it is indexable. */
  isIndexable?: boolean;
  /** Determines if it is optional. */
  isOptional?: boolean;
  /** Determines if it unique. */
  isUnique?: boolean;
  /** The name of the attribute. */
  name?: string;
  /** The options for the attribute. */
  options?: Record<string, string>;
  /** The name of the type. */
  typeName?: string;
  /** The maximum count of the values. */
  valuesMaxCount?: number;
  /** The minimum count of the values. */
  valuesMinCount?: number;
  /** Determines if it is a legacy attribute. */
  isLegacyAttribute?: boolean;
  /** The name of the relationship type. */
  relationshipTypeName?: string;
}

export function atlasRelationshipAttributeDefSerializer(
  item: AtlasRelationshipAttributeDef,
): any {
  return {
    cardinality: item["cardinality"],
    constraints: !item["constraints"]
      ? item["constraints"]
      : atlasConstraintDefArraySerializer(item["constraints"]),
    defaultValue: item["defaultValue"],
    description: item["description"],
    includeInNotification: item["includeInNotification"],
    isIndexable: item["isIndexable"],
    isOptional: item["isOptional"],
    isUnique: item["isUnique"],
    name: item["name"],
    options: item["options"],
    typeName: item["typeName"],
    valuesMaxCount: item["valuesMaxCount"],
    valuesMinCount: item["valuesMinCount"],
    isLegacyAttribute: item["isLegacyAttribute"],
    relationshipTypeName: item["relationshipTypeName"],
  };
}

export function atlasRelationshipAttributeDefDeserializer(
  item: any,
): AtlasRelationshipAttributeDef {
  return {
    cardinality: item["cardinality"],
    constraints: !item["constraints"]
      ? item["constraints"]
      : atlasConstraintDefArrayDeserializer(item["constraints"]),
    defaultValue: item["defaultValue"],
    description: item["description"],
    includeInNotification: item["includeInNotification"],
    isIndexable: item["isIndexable"],
    isOptional: item["isOptional"],
    isUnique: item["isUnique"],
    name: item["name"],
    options: item["options"],
    typeName: item["typeName"],
    valuesMaxCount: item["valuesMaxCount"],
    valuesMinCount: item["valuesMinCount"],
    isLegacyAttribute: item["isLegacyAttribute"],
    relationshipTypeName: item["relationshipTypeName"],
  };
}

/** class that captures details of an enum-type. */
export interface AtlasEnumDef {
  /** The enum of type category. */
  category?: TypeCategory;
  /** The created time of the record. */
  createTime?: number;
  /** The user who created the record. */
  createdBy?: string;
  /** The date format. */
  dateFormatter?: DateFormat;
  /** The description of the type definition. */
  description?: string;
  /** The GUID of the type definition. */
  guid?: string;
  /** The name of the type definition. */
  name?: string;
  /** The options for the type definition. */
  options?: Record<string, string>;
  /** The service type. */
  serviceType?: string;
  /** The version of the type. */
  typeVersion?: string;
  /** The update time of the record. */
  updateTime?: number;
  /** The user who updated the record. */
  updatedBy?: string;
  /** The version of the record. */
  version?: number;
  /** ETag for concurrency control. */
  lastModifiedTS?: string;
  /** The default value. */
  defaultValue?: string;
  /** An array of enum element definitions. */
  elementDefs?: AtlasEnumElementDef[];
}

export function atlasEnumDefSerializer(item: AtlasEnumDef): any {
  return {
    category: item["category"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    dateFormatter: !item["dateFormatter"]
      ? item["dateFormatter"]
      : dateFormatSerializer(item["dateFormatter"]),
    description: item["description"],
    guid: item["guid"],
    name: item["name"],
    options: item["options"],
    serviceType: item["serviceType"],
    typeVersion: item["typeVersion"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    version: item["version"],
    lastModifiedTS: item["lastModifiedTS"],
    defaultValue: item["defaultValue"],
    elementDefs: !item["elementDefs"]
      ? item["elementDefs"]
      : atlasEnumElementDefArraySerializer(item["elementDefs"]),
  };
}

export function atlasEnumDefDeserializer(item: any): AtlasEnumDef {
  return {
    category: item["category"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    dateFormatter: !item["dateFormatter"]
      ? item["dateFormatter"]
      : dateFormatDeserializer(item["dateFormatter"]),
    description: item["description"],
    guid: item["guid"],
    name: item["name"],
    options: item["options"],
    serviceType: item["serviceType"],
    typeVersion: item["typeVersion"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    version: item["version"],
    lastModifiedTS: item["lastModifiedTS"],
    defaultValue: item["defaultValue"],
    elementDefs: !item["elementDefs"]
      ? item["elementDefs"]
      : atlasEnumElementDefArrayDeserializer(item["elementDefs"]),
  };
}

export function atlasEnumElementDefArraySerializer(
  result: Array<AtlasEnumElementDef>,
): any[] {
  return result.map((item) => {
    return atlasEnumElementDefSerializer(item);
  });
}

export function atlasEnumElementDefArrayDeserializer(
  result: Array<AtlasEnumElementDef>,
): any[] {
  return result.map((item) => {
    return atlasEnumElementDefDeserializer(item);
  });
}

/** class that captures details of an enum-element. */
export interface AtlasEnumElementDef {
  /** The description of the enum element definition. */
  description?: string;
  /** The ordinal of the enum element definition. */
  ordinal?: number;
  /** The value of the enum element definition. */
  value?: string;
}

export function atlasEnumElementDefSerializer(item: AtlasEnumElementDef): any {
  return {
    description: item["description"],
    ordinal: item["ordinal"],
    value: item["value"],
  };
}

export function atlasEnumElementDefDeserializer(
  item: any,
): AtlasEnumElementDef {
  return {
    description: item["description"],
    ordinal: item["ordinal"],
    value: item["value"],
  };
}

/**
 * AtlasRelationshipDef is a TypeDef that defines a relationship.
 * As with other typeDefs the AtlasRelationshipDef has a name. Once created the
 * RelationshipDef has a guid.
 * The name and the guid are the 2 ways that the
 * RelationshipDef is identified.
 * RelationshipDefs have 2 ends, each of which
 * specify cardinality, an EntityDef type name and name and optionally
 * whether the
 * end is a container.
 * RelationshipDefs can have AttributeDefs - though only
 * primitive types are allowed.
 * RelationshipDefs have a relationshipCategory
 * specifying the UML type of relationship required
 * The way EntityDefs and
 * RelationshipDefs are intended to be used is that EntityDefs will define
 * AttributeDefs these AttributeDefs
 * will not specify an EntityDef type name as
 * their types.
 * RelationshipDefs introduce new attributes to the entity
 * instances. For example
 * EntityDef A might have attributes attr1,attr2,attr3
 *
 * EntityDef B might have attributes attr4,attr5,attr6
 * RelationshipDef
 * AtoB might define 2 ends
 *
 * end1:  type A, name attr7
 * end2:  type B, name attr8
 *
 * When an instance of EntityDef A is created, it
 * will have attributes attr1,attr2,attr3,attr7
 * When an instance of EntityDef
 * B is created, it will have attributes attr4,attr5,attr6,attr8
 *
 * In this way
 * relationshipDefs can be authored separately from entityDefs and can inject
 * relationship attributes into
 * the entity instances
 */
export interface AtlasRelationshipDef {
  /** The enum of type category. */
  category?: TypeCategory;
  /** The created time of the record. */
  createTime?: number;
  /** The user who created the record. */
  createdBy?: string;
  /** The date format. */
  dateFormatter?: DateFormat;
  /** The description of the type definition. */
  description?: string;
  /** The GUID of the type definition. */
  guid?: string;
  /** The name of the type definition. */
  name?: string;
  /** The options for the type definition. */
  options?: Record<string, string>;
  /** The service type. */
  serviceType?: string;
  /** The version of the type. */
  typeVersion?: string;
  /** The update time of the record. */
  updateTime?: number;
  /** The user who updated the record. */
  updatedBy?: string;
  /** The version of the record. */
  version?: number;
  /** ETag for concurrency control. */
  lastModifiedTS?: string;
  /** An array of attribute definitions. */
  attributeDefs?: AtlasAttributeDef[];
  /**
   * The relationshipEndDef represents an end of the relationship. The end of the
   * relationship is defined by a type, an
   * attribute name, cardinality and whether
   * it  is the container end of the relationship.
   */
  endDef1?: AtlasRelationshipEndDef;
  /**
   * The relationshipEndDef represents an end of the relationship. The end of the
   * relationship is defined by a type, an
   * attribute name, cardinality and whether
   * it  is the container end of the relationship.
   */
  endDef2?: AtlasRelationshipEndDef;
  /**
   * The Relationship category determines the style of relationship around
   * containment and lifecycle.
   * UML terminology is used for the values.
   * ASSOCIATION is a relationship with no containment.
   * COMPOSITION and AGGREGATION are containment relationships.
   * The difference being in the lifecycles of the container and its children.
   * In the COMPOSITION case, the children cannot exist without the container.
   * For AGGREGATION, the life cycles of the container and children are totally independent.
   */
  relationshipCategory?: RelationshipCategory;
  /** The label of the relationship. */
  relationshipLabel?: string;
}

export function atlasRelationshipDefSerializer(
  item: AtlasRelationshipDef,
): any {
  return {
    category: item["category"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    dateFormatter: !item["dateFormatter"]
      ? item["dateFormatter"]
      : dateFormatSerializer(item["dateFormatter"]),
    description: item["description"],
    guid: item["guid"],
    name: item["name"],
    options: item["options"],
    serviceType: item["serviceType"],
    typeVersion: item["typeVersion"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    version: item["version"],
    lastModifiedTS: item["lastModifiedTS"],
    attributeDefs: !item["attributeDefs"]
      ? item["attributeDefs"]
      : atlasAttributeDefArraySerializer(item["attributeDefs"]),
    endDef1: !item["endDef1"]
      ? item["endDef1"]
      : atlasRelationshipEndDefSerializer(item["endDef1"]),
    endDef2: !item["endDef2"]
      ? item["endDef2"]
      : atlasRelationshipEndDefSerializer(item["endDef2"]),
    relationshipCategory: item["relationshipCategory"],
    relationshipLabel: item["relationshipLabel"],
  };
}

export function atlasRelationshipDefDeserializer(
  item: any,
): AtlasRelationshipDef {
  return {
    category: item["category"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    dateFormatter: !item["dateFormatter"]
      ? item["dateFormatter"]
      : dateFormatDeserializer(item["dateFormatter"]),
    description: item["description"],
    guid: item["guid"],
    name: item["name"],
    options: item["options"],
    serviceType: item["serviceType"],
    typeVersion: item["typeVersion"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    version: item["version"],
    lastModifiedTS: item["lastModifiedTS"],
    attributeDefs: !item["attributeDefs"]
      ? item["attributeDefs"]
      : atlasAttributeDefArrayDeserializer(item["attributeDefs"]),
    endDef1: !item["endDef1"]
      ? item["endDef1"]
      : atlasRelationshipEndDefDeserializer(item["endDef1"]),
    endDef2: !item["endDef2"]
      ? item["endDef2"]
      : atlasRelationshipEndDefDeserializer(item["endDef2"]),
    relationshipCategory: item["relationshipCategory"],
    relationshipLabel: item["relationshipLabel"],
  };
}

/**
 * The relationshipEndDef represents an end of the relationship. The end of the
 * relationship is defined by a type, an
 * attribute name, cardinality and whether
 * it  is the container end of the relationship.
 */
export interface AtlasRelationshipEndDef {
  /** single-valued attribute or multi-valued attribute. */
  cardinality?: CardinalityValue;
  /** The description of the relationship end definition. */
  description?: string;
  /** Determines if it is container. */
  isContainer?: boolean;
  /** Determines if it is a legacy attribute. */
  isLegacyAttribute?: boolean;
  /** The name of the relationship end definition. */
  name?: string;
  /** The type of the relationship end. */
  type?: string;
}

export function atlasRelationshipEndDefSerializer(
  item: AtlasRelationshipEndDef,
): any {
  return {
    cardinality: item["cardinality"],
    description: item["description"],
    isContainer: item["isContainer"],
    isLegacyAttribute: item["isLegacyAttribute"],
    name: item["name"],
    type: item["type"],
  };
}

export function atlasRelationshipEndDefDeserializer(
  item: any,
): AtlasRelationshipEndDef {
  return {
    cardinality: item["cardinality"],
    description: item["description"],
    isContainer: item["isContainer"],
    isLegacyAttribute: item["isLegacyAttribute"],
    name: item["name"],
    type: item["type"],
  };
}

/** Relationship Category */
export type RelationshipCategory =
  | "ASSOCIATION"
  | "AGGREGATION"
  | "COMPOSITION";

/** class that captures details of a struct-type. */
export interface AtlasStructDef {
  /** The enum of type category. */
  category?: TypeCategory;
  /** The created time of the record. */
  createTime?: number;
  /** The user who created the record. */
  createdBy?: string;
  /** The date format. */
  dateFormatter?: DateFormat;
  /** The description of the type definition. */
  description?: string;
  /** The GUID of the type definition. */
  guid?: string;
  /** The name of the type definition. */
  name?: string;
  /** The options for the type definition. */
  options?: Record<string, string>;
  /** The service type. */
  serviceType?: string;
  /** The version of the type. */
  typeVersion?: string;
  /** The update time of the record. */
  updateTime?: number;
  /** The user who updated the record. */
  updatedBy?: string;
  /** The version of the record. */
  version?: number;
  /** ETag for concurrency control. */
  lastModifiedTS?: string;
  /** An array of attribute definitions. */
  attributeDefs?: AtlasAttributeDef[];
}

export function atlasStructDefSerializer(item: AtlasStructDef): any {
  return {
    category: item["category"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    dateFormatter: !item["dateFormatter"]
      ? item["dateFormatter"]
      : dateFormatSerializer(item["dateFormatter"]),
    description: item["description"],
    guid: item["guid"],
    name: item["name"],
    options: item["options"],
    serviceType: item["serviceType"],
    typeVersion: item["typeVersion"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    version: item["version"],
    lastModifiedTS: item["lastModifiedTS"],
    attributeDefs: !item["attributeDefs"]
      ? item["attributeDefs"]
      : atlasAttributeDefArraySerializer(item["attributeDefs"]),
  };
}

export function atlasStructDefDeserializer(item: any): AtlasStructDef {
  return {
    category: item["category"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    dateFormatter: !item["dateFormatter"]
      ? item["dateFormatter"]
      : dateFormatDeserializer(item["dateFormatter"]),
    description: item["description"],
    guid: item["guid"],
    name: item["name"],
    options: item["options"],
    serviceType: item["serviceType"],
    typeVersion: item["typeVersion"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    version: item["version"],
    lastModifiedTS: item["lastModifiedTS"],
    attributeDefs: !item["attributeDefs"]
      ? item["attributeDefs"]
      : atlasAttributeDefArrayDeserializer(item["attributeDefs"]),
  };
}

/** The definitions of type. */
export interface AtlasTypeDef {
  /** The enum of type category. */
  category?: TypeCategory;
  /** The created time of the record. */
  createTime?: number;
  /** The user who created the record. */
  createdBy?: string;
  /** The date format. */
  dateFormatter?: DateFormat;
  /** The description of the type definition. */
  description?: string;
  /** The GUID of the type definition. */
  guid?: string;
  /** The name of the type definition. */
  name?: string;
  /** The options for the type definition. */
  options?: Record<string, string>;
  /** The service type. */
  serviceType?: string;
  /** The version of the type. */
  typeVersion?: string;
  /** The update time of the record. */
  updateTime?: number;
  /** The user who updated the record. */
  updatedBy?: string;
  /** The version of the record. */
  version?: number;
  /** ETag for concurrency control. */
  lastModifiedTS?: string;
  /**
   * Specifying a list of entityType names in the classificationDef, ensures that
   * classifications can
   * only be applied to those entityTypes.
   *
   * Any subtypes of the entity types inherit the restriction.
   *
   * Any classificationDef subtypes inherit the parents entityTypes restrictions.
   *
   * Any classificationDef subtypes can further restrict the parents entityTypes
   * restrictions by specifying a subset of the entityTypes.
   *
   * An empty entityTypes list when there are no parent restrictions means there are no
   * restrictions.
   *
   * An empty entityTypes list when there are parent
   * restrictions means that the subtype picks up the parents
   * restrictions.
   *
   * If a list of entityTypes are supplied, where one inherits
   * from another, this will be rejected. This should encourage cleaner
   * classificationsDefs.
   *
   */
  entityTypes?: string[];
  /** An array of sub types. */
  subTypes?: string[];
  /** An array of super types. */
  superTypes?: string[];
  /** An array of relationship attributes. */
  relationshipAttributeDefs?: AtlasRelationshipAttributeDef[];
  /** The default value. */
  defaultValue?: string;
  /** An array of enum element definitions. */
  elementDefs?: AtlasEnumElementDef[];
  /**
   * The relationshipEndDef represents an end of the relationship. The end of the
   * relationship is defined by a type, an
   * attribute name, cardinality and whether
   * it  is the container end of the relationship.
   */
  endDef1?: AtlasRelationshipEndDef;
  /**
   * The relationshipEndDef represents an end of the relationship. The end of the
   * relationship is defined by a type, an
   * attribute name, cardinality and whether
   * it  is the container end of the relationship.
   */
  endDef2?: AtlasRelationshipEndDef;
  /**
   * The Relationship category determines the style of relationship around
   * containment and lifecycle.
   * UML terminology is used for the values.
   *
   * ASSOCIATION is a relationship with no containment.
   * COMPOSITION and AGGREGATION are containment relationships.
   *
   * The difference being in the lifecycles of the container and its children.
   * In the COMPOSITION case, the children cannot exist without the container.
   * For AGGREGATION, the life cycles of the container and children are totally independent.
   */
  relationshipCategory?: RelationshipCategory;
  /** The label of the relationship. */
  relationshipLabel?: string;
  /** An array of attribute definitions. */
  attributeDefs?: AtlasAttributeDef[];
}

export function atlasTypeDefDeserializer(item: any): AtlasTypeDef {
  return {
    category: item["category"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    dateFormatter: !item["dateFormatter"]
      ? item["dateFormatter"]
      : dateFormatDeserializer(item["dateFormatter"]),
    description: item["description"],
    guid: item["guid"],
    name: item["name"],
    options: item["options"],
    serviceType: item["serviceType"],
    typeVersion: item["typeVersion"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    version: item["version"],
    lastModifiedTS: item["lastModifiedTS"],
    entityTypes: !item["entityTypes"]
      ? item["entityTypes"]
      : item["entityTypes"].map((p: any) => {
          return p;
        }),
    subTypes: !item["subTypes"]
      ? item["subTypes"]
      : item["subTypes"].map((p: any) => {
          return p;
        }),
    superTypes: !item["superTypes"]
      ? item["superTypes"]
      : item["superTypes"].map((p: any) => {
          return p;
        }),
    relationshipAttributeDefs: !item["relationshipAttributeDefs"]
      ? item["relationshipAttributeDefs"]
      : atlasRelationshipAttributeDefArrayDeserializer(
          item["relationshipAttributeDefs"],
        ),
    defaultValue: item["defaultValue"],
    elementDefs: !item["elementDefs"]
      ? item["elementDefs"]
      : atlasEnumElementDefArrayDeserializer(item["elementDefs"]),
    endDef1: !item["endDef1"]
      ? item["endDef1"]
      : atlasRelationshipEndDefDeserializer(item["endDef1"]),
    endDef2: !item["endDef2"]
      ? item["endDef2"]
      : atlasRelationshipEndDefDeserializer(item["endDef2"]),
    relationshipCategory: item["relationshipCategory"],
    relationshipLabel: item["relationshipLabel"],
    attributeDefs: !item["attributeDefs"]
      ? item["attributeDefs"]
      : atlasAttributeDefArrayDeserializer(item["attributeDefs"]),
  };
}

/** The definitions of types. */
export interface AtlasTypesDef {
  /** businessMetadataDefs */
  businessMetadataDefs?: AtlasBusinessMetadataDef[];
  /** An array of classification definitions. */
  classificationDefs?: AtlasClassificationDef[];
  /** An array of entity definitions. */
  entityDefs?: AtlasEntityDef[];
  /** An array of enum definitions. */
  enumDefs?: AtlasEnumDef[];
  /** An array of relationship definitions. */
  relationshipDefs?: AtlasRelationshipDef[];
  /** An array of struct definitions. */
  structDefs?: AtlasStructDef[];
  /** An array of term template definitions. */
  termTemplateDefs?: TermTemplateDef[];
}

export function atlasTypesDefSerializer(item: AtlasTypesDef): any {
  return {
    businessMetadataDefs: !item["businessMetadataDefs"]
      ? item["businessMetadataDefs"]
      : atlasBusinessMetadataDefArraySerializer(item["businessMetadataDefs"]),
    classificationDefs: !item["classificationDefs"]
      ? item["classificationDefs"]
      : atlasClassificationDefArraySerializer(item["classificationDefs"]),
    entityDefs: !item["entityDefs"]
      ? item["entityDefs"]
      : atlasEntityDefArraySerializer(item["entityDefs"]),
    enumDefs: !item["enumDefs"]
      ? item["enumDefs"]
      : atlasEnumDefArraySerializer(item["enumDefs"]),
    relationshipDefs: !item["relationshipDefs"]
      ? item["relationshipDefs"]
      : atlasRelationshipDefArraySerializer(item["relationshipDefs"]),
    structDefs: !item["structDefs"]
      ? item["structDefs"]
      : atlasStructDefArraySerializer(item["structDefs"]),
    termTemplateDefs: !item["termTemplateDefs"]
      ? item["termTemplateDefs"]
      : termTemplateDefArraySerializer(item["termTemplateDefs"]),
  };
}

export function atlasTypesDefDeserializer(item: any): AtlasTypesDef {
  return {
    businessMetadataDefs: !item["businessMetadataDefs"]
      ? item["businessMetadataDefs"]
      : atlasBusinessMetadataDefArrayDeserializer(item["businessMetadataDefs"]),
    classificationDefs: !item["classificationDefs"]
      ? item["classificationDefs"]
      : atlasClassificationDefArrayDeserializer(item["classificationDefs"]),
    entityDefs: !item["entityDefs"]
      ? item["entityDefs"]
      : atlasEntityDefArrayDeserializer(item["entityDefs"]),
    enumDefs: !item["enumDefs"]
      ? item["enumDefs"]
      : atlasEnumDefArrayDeserializer(item["enumDefs"]),
    relationshipDefs: !item["relationshipDefs"]
      ? item["relationshipDefs"]
      : atlasRelationshipDefArrayDeserializer(item["relationshipDefs"]),
    structDefs: !item["structDefs"]
      ? item["structDefs"]
      : atlasStructDefArrayDeserializer(item["structDefs"]),
    termTemplateDefs: !item["termTemplateDefs"]
      ? item["termTemplateDefs"]
      : termTemplateDefArrayDeserializer(item["termTemplateDefs"]),
  };
}

export function atlasBusinessMetadataDefArraySerializer(
  result: Array<AtlasBusinessMetadataDef>,
): any[] {
  return result.map((item) => {
    return atlasBusinessMetadataDefSerializer(item);
  });
}

export function atlasBusinessMetadataDefArrayDeserializer(
  result: Array<AtlasBusinessMetadataDef>,
): any[] {
  return result.map((item) => {
    return atlasBusinessMetadataDefDeserializer(item);
  });
}

export function atlasClassificationDefArraySerializer(
  result: Array<AtlasClassificationDef>,
): any[] {
  return result.map((item) => {
    return atlasClassificationDefSerializer(item);
  });
}

export function atlasClassificationDefArrayDeserializer(
  result: Array<AtlasClassificationDef>,
): any[] {
  return result.map((item) => {
    return atlasClassificationDefDeserializer(item);
  });
}

export function atlasEntityDefArraySerializer(
  result: Array<AtlasEntityDef>,
): any[] {
  return result.map((item) => {
    return atlasEntityDefSerializer(item);
  });
}

export function atlasEntityDefArrayDeserializer(
  result: Array<AtlasEntityDef>,
): any[] {
  return result.map((item) => {
    return atlasEntityDefDeserializer(item);
  });
}

export function atlasEnumDefArraySerializer(
  result: Array<AtlasEnumDef>,
): any[] {
  return result.map((item) => {
    return atlasEnumDefSerializer(item);
  });
}

export function atlasEnumDefArrayDeserializer(
  result: Array<AtlasEnumDef>,
): any[] {
  return result.map((item) => {
    return atlasEnumDefDeserializer(item);
  });
}

export function atlasRelationshipDefArraySerializer(
  result: Array<AtlasRelationshipDef>,
): any[] {
  return result.map((item) => {
    return atlasRelationshipDefSerializer(item);
  });
}

export function atlasRelationshipDefArrayDeserializer(
  result: Array<AtlasRelationshipDef>,
): any[] {
  return result.map((item) => {
    return atlasRelationshipDefDeserializer(item);
  });
}

export function atlasStructDefArraySerializer(
  result: Array<AtlasStructDef>,
): any[] {
  return result.map((item) => {
    return atlasStructDefSerializer(item);
  });
}

export function atlasStructDefArrayDeserializer(
  result: Array<AtlasStructDef>,
): any[] {
  return result.map((item) => {
    return atlasStructDefDeserializer(item);
  });
}

export function termTemplateDefArraySerializer(
  result: Array<TermTemplateDef>,
): any[] {
  return result.map((item) => {
    return termTemplateDefSerializer(item);
  });
}

export function termTemplateDefArrayDeserializer(
  result: Array<TermTemplateDef>,
): any[] {
  return result.map((item) => {
    return termTemplateDefDeserializer(item);
  });
}

/** Term template definition for glossary term. */
export interface TermTemplateDef {
  /** The enum of type category. */
  category?: TypeCategory;
  /** The created time of the record. */
  createTime?: number;
  /** The user who created the record. */
  createdBy?: string;
  /** The date format. */
  dateFormatter?: DateFormat;
  /** The description of the type definition. */
  description?: string;
  /** The GUID of the type definition. */
  guid?: string;
  /** The name of the type definition. */
  name?: string;
  /** The options for the type definition. */
  options?: Record<string, string>;
  /** The service type. */
  serviceType?: string;
  /** The version of the type. */
  typeVersion?: string;
  /** The update time of the record. */
  updateTime?: number;
  /** The user who updated the record. */
  updatedBy?: string;
  /** The version of the record. */
  version?: number;
  /** ETag for concurrency control. */
  lastModifiedTS?: string;
  /** An array of attribute definitions. */
  attributeDefs?: AtlasAttributeDef[];
}

export function termTemplateDefSerializer(item: TermTemplateDef): any {
  return {
    category: item["category"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    dateFormatter: !item["dateFormatter"]
      ? item["dateFormatter"]
      : dateFormatSerializer(item["dateFormatter"]),
    description: item["description"],
    guid: item["guid"],
    name: item["name"],
    options: item["options"],
    serviceType: item["serviceType"],
    typeVersion: item["typeVersion"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    version: item["version"],
    lastModifiedTS: item["lastModifiedTS"],
    attributeDefs: !item["attributeDefs"]
      ? item["attributeDefs"]
      : atlasAttributeDefArraySerializer(item["attributeDefs"]),
  };
}

export function termTemplateDefDeserializer(item: any): TermTemplateDef {
  return {
    category: item["category"],
    createTime: item["createTime"],
    createdBy: item["createdBy"],
    dateFormatter: !item["dateFormatter"]
      ? item["dateFormatter"]
      : dateFormatDeserializer(item["dateFormatter"]),
    description: item["description"],
    guid: item["guid"],
    name: item["name"],
    options: item["options"],
    serviceType: item["serviceType"],
    typeVersion: item["typeVersion"],
    updateTime: item["updateTime"],
    updatedBy: item["updatedBy"],
    version: item["version"],
    lastModifiedTS: item["lastModifiedTS"],
    attributeDefs: !item["attributeDefs"]
      ? item["attributeDefs"]
      : atlasAttributeDefArrayDeserializer(item["attributeDefs"]),
  };
}

/** The basic information of the type definition. */
export interface AtlasTypeDefHeader {
  /** The enum of type category. */
  category?: TypeCategory;
  /** The GUID of the type definition. */
  guid?: string;
  /** The name of the type definition. */
  name?: string;
}

export function atlasTypeDefHeaderDeserializer(item: any): AtlasTypeDefHeader {
  return {
    category: item["category"],
    guid: item["guid"],
    name: item["name"],
  };
}

/** Enum for business attribute update behavior */
export type BusinessAttributeUpdateBehavior = "ignore" | "replace" | "merge";

/** Service API versions */
export enum KnownApiVersions {
  /** 2023-09-01 service API version */
  V20230901 = "2023-09-01",
}

export function atlasTypeDefHeaderArrayDeserializer(
  result: Array<AtlasTypeDefHeader>,
): any[] {
  return result.map((item) => {
    return atlasTypeDefHeaderDeserializer(item);
  });
}

export function atlasGlossaryArraySerializer(
  result: Array<AtlasGlossary>,
): any[] {
  return result.map((item) => {
    return atlasGlossarySerializer(item);
  });
}

export function atlasGlossaryArrayDeserializer(
  result: Array<AtlasGlossary>,
): any[] {
  return result.map((item) => {
    return atlasGlossaryDeserializer(item);
  });
}

export function atlasGlossaryCategoryArraySerializer(
  result: Array<AtlasGlossaryCategory>,
): any[] {
  return result.map((item) => {
    return atlasGlossaryCategorySerializer(item);
  });
}

export function atlasGlossaryCategoryArrayDeserializer(
  result: Array<AtlasGlossaryCategory>,
): any[] {
  return result.map((item) => {
    return atlasGlossaryCategoryDeserializer(item);
  });
}

export function atlasRelatedCategoryHeaderArrayRecordSerializer(
  item: Record<string, Array<AtlasRelatedCategoryHeader>>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : atlasRelatedCategoryHeaderArraySerializer(item[key]);
  });
  return result;
}

export function atlasRelatedCategoryHeaderArrayRecordDeserializer(
  item: Record<string, any>,
): Record<string, Array<AtlasRelatedCategoryHeader>> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : atlasRelatedCategoryHeaderArrayDeserializer(item[key]);
  });
  return result;
}

export function atlasGlossaryTermArraySerializer(
  result: Array<AtlasGlossaryTerm>,
): any[] {
  return result.map((item) => {
    return atlasGlossaryTermSerializer(item);
  });
}

export function atlasGlossaryTermArrayDeserializer(
  result: Array<AtlasGlossaryTerm>,
): any[] {
  return result.map((item) => {
    return atlasGlossaryTermDeserializer(item);
  });
}

export function atlasRelatedTermHeaderArrayRecordSerializer(
  item: Record<string, Array<AtlasRelatedTermHeader>>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : atlasRelatedTermHeaderArraySerializer(item[key]);
  });
  return result;
}

export function atlasRelatedTermHeaderArrayRecordDeserializer(
  item: Record<string, any>,
): Record<string, Array<AtlasRelatedTermHeader>> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : atlasRelatedTermHeaderArrayDeserializer(item[key]);
  });
  return result;
}

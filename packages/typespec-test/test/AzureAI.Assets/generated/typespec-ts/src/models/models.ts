// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Index resource Definition */
export interface Index {
  /** Fully qualified resource Id: azureml://workspace/{workspaceName}/indexes/{name}/versions/{version} of the index. */
  readonly id: string;
  /** Update stage to 'Archive' to archive the asset. Default is Development, which means the asset is under development. */
  stage?: string;
  /** Description information of the asset. */
  description?: string;
  /** Metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemData;
  /** Asset's tags. Unlike properties, tags are fully mutable. */
  tags?: Record<string, string>;
  /** Asset's properties. Unlike tags, properties are add-only. Once added, a property cannot be removed. */
  properties?: Record<string, string>;
  /** Default workspace blob storage Uri. Should work across storage types and auth scenarios. */
  storageUri: string;
}

export function indexSerializer(item: Index): any {
  return {
    stage: item["stage"],
    description: item["description"],
    tags: item["tags"],
    properties: item["properties"],
    storageUri: item["storageUri"],
  };
}

export function indexDeserializer(item: any): Index {
  return {
    id: item["id"],
    stage: item["stage"],
    description: item["description"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    tags: item["tags"],
    properties: item["properties"],
    storageUri: item["storageUri"],
  };
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The timestamp the resource was created at. */
  readonly createdAt?: Date;
  /** The identity that created the resource. */
  readonly createdBy?: string;
  /** The identity type that created the resource. */
  readonly createdByType?: string;
  /** The timestamp of resource last modification (UTC) */
  readonly lastModifiedAt?: Date;
}

export function systemDataDeserializer(item: any): SystemData {
  return {
    createdAt: !item["createdAt"]
      ? item["createdAt"]
      : new Date(item["createdAt"]),
    createdBy: item["createdBy"],
    createdByType: item["createdByType"],
    lastModifiedAt: !item["lastModifiedAt"]
      ? item["lastModifiedAt"]
      : new Date(item["lastModifiedAt"]),
  };
}

/** Paged collection of IndexVersion items. */
export interface _PagedIndex {
  /** The list of Indexes. */
  value: Index[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedIndexDeserializer(item: any): _PagedIndex {
  return {
    value: indexArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function indexArraySerializer(result: Array<Index>): any[] {
  return result.map((item) => {
    return indexSerializer(item);
  });
}

export function indexArrayDeserializer(result: Array<Index>): any[] {
  return result.map((item) => {
    return indexDeserializer(item);
  });
}

/** Next version definition. */
export interface VersionInfo {
  /** Next version as defined by the server. The server keeps track of all versions that are string-representations of integers. If one exists, the nextVersion will be a string representation of the highest integer value + 1. Otherwise, the nextVersion will default to '1'. */
  nextVersion?: number;
  /** Current latest version of the resource. */
  latestVersion: string;
}

export function versionInfoDeserializer(item: any): VersionInfo {
  return {
    nextVersion: item["nextVersion"],
    latestVersion: item["latestVersion"],
  };
}

/** Prompt resource definition */
export interface Prompt {
  /** Fully qualified resource Id: azureml://workspace/{workspaceName}/indexes/{name}/versions/{version} of the index. */
  readonly id: string;
  /** Update stage to 'Archive' to archive the asset. Default is Development, which means the asset is under development. */
  stage?: string;
  /** Description information of the asset. */
  description?: string;
  /** Metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemData;
  /** Asset's tags. Unlike properties, tags are fully mutable. */
  tags?: Record<string, string>;
  /** Asset's properties. Unlike tags, properties are add-only. Once added, a property cannot be removed. */
  properties?: Record<string, string>;
  /** Default workspace blob storage Ui. Should work across storage types and auth scenarios. */
  dataUri: string;
  /** Relative path of the prompt data file at the dataUri location */
  templatePath: string;
}

export function promptSerializer(item: Prompt): any {
  return {
    stage: item["stage"],
    description: item["description"],
    tags: item["tags"],
    properties: item["properties"],
    dataUri: item["dataUri"],
    templatePath: item["templatePath"],
  };
}

export function promptDeserializer(item: any): Prompt {
  return {
    id: item["id"],
    stage: item["stage"],
    description: item["description"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    tags: item["tags"],
    properties: item["properties"],
    dataUri: item["dataUri"],
    templatePath: item["templatePath"],
  };
}

/** Paged collection of PromptVersion items */
export interface _PagedPrompt {
  /** The list of Prompts. */
  value: Prompt[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedPromptDeserializer(item: any): _PagedPrompt {
  return {
    value: promptArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function promptArraySerializer(result: Array<Prompt>): any[] {
  return result.map((item) => {
    return promptSerializer(item);
  });
}

export function promptArrayDeserializer(result: Array<Prompt>): any[] {
  return result.map((item) => {
    return promptDeserializer(item);
  });
}

/** Azure Machine Learning Services api versions. */
export enum KnownVersions {
  /** Azure Machine Learning Services api version 2024-04-01-preview. */
  _20240401Preview = "2024-04-01-preview",
  /** Azure Machine Learning Services api version 2024-05-01-preview. */
  _20240501Preview = "2024-05-01-preview",
}

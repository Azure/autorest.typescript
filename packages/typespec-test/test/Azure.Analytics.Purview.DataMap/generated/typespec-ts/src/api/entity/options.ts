// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BusinessAttributeUpdateBehavior } from "../../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface EntityMoveEntitiesToCollectionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface EntityAddLabelsByUniqueAttributeOptionalParams
  extends OperationOptions {
  /**
   * The qualified name of the entity. (This is only an example. qualifiedName can
   * be changed to other unique attributes)
   */
  attribute?: string;
  /** set of labels to be added */
  body?: string[];
}

/** Optional parameters. */
export interface EntitySetLabelsByUniqueAttributeOptionalParams
  extends OperationOptions {
  /**
   * The qualified name of the entity. (This is only an example. qualifiedName can
   * be changed to other unique attributes)
   */
  attribute?: string;
  /** set of labels to be set */
  body?: string[];
}

/** Optional parameters. */
export interface EntityRemoveLabelsByUniqueAttributeOptionalParams
  extends OperationOptions {
  /**
   * The qualified name of the entity. (This is only an example. qualifiedName can
   * be changed to other unique attributes)
   */
  attribute?: string;
  /** set of labels to be deleted */
  body?: string[];
}

/** Optional parameters. */
export interface EntityAddLabelOptionalParams extends OperationOptions {
  /** set of labels to be added */
  body?: string[];
}

/** Optional parameters. */
export interface EntitySetLabelsOptionalParams extends OperationOptions {
  /** set of labels to be set to the entity */
  body?: string[];
}

/** Optional parameters. */
export interface EntityRemoveLabelsOptionalParams extends OperationOptions {
  /** set of labels to be deleted */
  body?: string[];
}

/** Optional parameters. */
export interface EntityImportBusinessMetadataOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface EntityGetSampleBusinessMetadataTemplateOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface EntityAddOrUpdateBusinessMetadataAttributesOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface EntityRemoveBusinessMetadataAttributesOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface EntityAddOrUpdateBusinessMetadataOptionalParams
  extends OperationOptions {
  /**
   * Whether to overwrite the existing business metadata on the entity or not,
   * default is false.
   */
  overwrite?: boolean;
}

/** Optional parameters. */
export interface EntityRemoveBusinessMetadataOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface EntityGetHeaderOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EntityListByUniqueAttributesOptionalParams
  extends OperationOptions {
  /** Whether to return minimal information for referred entities. */
  minExtInfo?: boolean;
  /** Whether to ignore relationship attributes. */
  ignoreRelationships?: boolean;
  /**
   * Qualified name of an entity. E.g. to find 2 entities you can set
   * attrs_1:qualifiedName=db1@cl1&attrs_2:qualifiedName=db2@cl1. (This is only an
   * example. qualifiedName can be changed to other unique attributes)
   */
  attrNQualifiedName?: string;
}

/** Optional parameters. */
export interface EntityBulkSetClassificationsOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface EntityUpdateClassificationsByUniqueAttributeOptionalParams
  extends OperationOptions {
  /**
   * The qualified name of the entity. (This is only an example. qualifiedName can
   * be changed to other unique attributes)
   */
  attribute?: string;
}

/** Optional parameters. */
export interface EntityAddClassificationsByUniqueAttributeOptionalParams
  extends OperationOptions {
  /**
   * The qualified name of the entity. (This is only an example. qualifiedName can
   * be changed to other unique attributes)
   */
  attribute?: string;
}

/** Optional parameters. */
export interface EntityRemoveClassificationByUniqueAttributeOptionalParams
  extends OperationOptions {
  /**
   * The qualified name of the entity. (This is only an example. qualifiedName can
   * be changed to other unique attributes)
   */
  attribute?: string;
}

/** Optional parameters. */
export interface EntityDeleteByUniqueAttributeOptionalParams
  extends OperationOptions {
  /**
   * The qualified name of the entity. (This is only an example. qualifiedName can
   * be changed to other unique attributes)
   */
  attribute?: string;
}

/** Optional parameters. */
export interface EntityPartialUpdateByUniqueAttributesOptionalParams
  extends OperationOptions {
  /**
   * The qualified name of the entity. (This is only an example. qualifiedName can
   * be changed to other unique attributes)
   */
  attribute?: string;
}

/** Optional parameters. */
export interface EntityGetByUniqueAttributesOptionalParams
  extends OperationOptions {
  /** Whether to return minimal information for referred entities. */
  minExtInfo?: boolean;
  /** Whether to ignore relationship attributes. */
  ignoreRelationships?: boolean;
  /**
   * The qualified name of the entity. (This is only an example. qualifiedName can
   * be changed to other unique attributes)
   */
  attribute?: string;
}

/** Optional parameters. */
export interface EntityUpdateClassificationsOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface EntityAddClassificationsOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface EntityGetClassificationsOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface EntityRemoveClassificationOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface EntityGetClassificationOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface EntityDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EntityPartialUpdateAttributeByGuidOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface EntityGetOptionalParams extends OperationOptions {
  /** Whether to return minimal information for referred entities. */
  minExtInfo?: boolean;
  /** Whether to ignore relationship attributes. */
  ignoreRelationships?: boolean;
}

/** Optional parameters. */
export interface EntityAddClassificationOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface EntityBulkDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EntityBulkCreateOrUpdateOptionalParams
  extends OperationOptions {
  /**
   * The collection where entities will be moved to. Only specify a value if you
   * need to move an entity to another collection.
   */
  collectionId?: string;
  /**
   * Used to define the update behavior for business attributes when updating
   * entities.
   */
  businessAttributeUpdateBehavior?: BusinessAttributeUpdateBehavior;
}

/** Optional parameters. */
export interface EntityListByGuidsOptionalParams extends OperationOptions {
  /** Whether to return minimal information for referred entities. */
  minExtInfo?: boolean;
  /** Whether to ignore relationship attributes. */
  ignoreRelationships?: boolean;
}

/** Optional parameters. */
export interface EntityCreateOrUpdateOptionalParams extends OperationOptions {
  /**
   * Used to define the update behavior for business attributes when updating
   * entities.
   */
  businessAttributeUpdateBehavior?: BusinessAttributeUpdateBehavior;
  /**
   * The collection where entities will be moved to. Only specify a value if you
   * need to move an entity to another collection.
   */
  collectionId?: string;
}

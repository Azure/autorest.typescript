// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TypeCategory } from "../../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface TypeGetTermTemplateDefByNameOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeGetTermTemplateDefByGuidOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeListHeadersOptionalParams extends OperationOptions {
  /**
   * Whether include termtemplatedef when return all typedefs.
   * This is always true
   * when search filter type=term_template
   */
  includeTermTemplate?: boolean;
  /** Typedef name as search filter when get typedefs. */
  typeParam?: TypeCategory;
}

/** Optional parameters. */
export interface TypeBulkDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TypeBulkUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TypeBulkCreateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TypeListOptionalParams extends OperationOptions {
  /**
   * Whether include termtemplatedef when return all typedefs.
   * This is always true
   * when search filter type=term_template
   */
  includeTermTemplate?: boolean;
  /** Typedef name as search filter when get typedefs. */
  typeParam?: TypeCategory;
}

/** Optional parameters. */
export interface TypeDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TypeGetByNameOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TypeGetByGuidOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TypeGetStructDefByNameOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeGetStructDefByGuidOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeGetRelationshipDefByNameOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeGetRelationshipDefByGuidOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeGetEnumDefByNameOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TypeGetEnumDefByGuidOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TypeGetEntityDefByNameOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeGetEntityDefByGuidOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeGetClassificationDefByNameOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeGetClassificationDefByGuidOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeGetBusinessMetadataDefByNameOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeGetBusinessMetadataDefByGuidOptionalParams
  extends OperationOptions {}

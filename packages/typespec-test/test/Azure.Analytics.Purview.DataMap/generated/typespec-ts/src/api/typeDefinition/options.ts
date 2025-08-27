// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TypeCategory } from "../../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface TypeDefinitionGetTermTemplateByNameOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeDefinitionGetTermTemplateByIdOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeDefinitionGetHeadersOptionalParams
  extends OperationOptions {
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
export interface TypeDefinitionBatchDeleteOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeDefinitionBatchUpdateOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeDefinitionBatchCreateOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeDefinitionGetOptionalParams extends OperationOptions {
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
export interface TypeDefinitionDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TypeDefinitionGetByNameOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeDefinitionGetByIdOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TypeDefinitionGetStructByNameOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeDefinitionGetStructByIdOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeDefinitionGetRelationshipByNameOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeDefinitionGetRelationshipByIdOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeDefinitionGetEnumByNameOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeDefinitionGetEnumByIdOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeDefinitionGetEntityByNameOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeDefinitionGetEntityByIdOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeDefinitionGetClassificationByNameOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeDefinitionGetClassificationByIdOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeDefinitionGetBusinessMetadataByNameOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TypeDefinitionGetBusinessMetadataByIdOptionalParams
  extends OperationOptions {}

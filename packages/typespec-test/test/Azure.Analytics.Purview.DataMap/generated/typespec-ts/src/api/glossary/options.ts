// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface GlossaryGetTermHeadersOptionalParams extends OperationOptions {
  /** The page size - by default there is no paging. */
  limit?: number;
  /** The offset for pagination purpose. */
  offset?: number;
  /** The sort order, ASC (default) or DESC. */
  sort?: string;
}

/** Optional parameters. */
export interface GlossaryGetTermsOptionalParams extends OperationOptions {
  /** The page size - by default there is no paging. */
  limit?: number;
  /** The offset for pagination purpose. */
  offset?: number;
  /** The sort order, ASC (default) or DESC. */
  sort?: string;
}

/** Optional parameters. */
export interface GlossaryPartialUpdateOptionalParams extends OperationOptions {
  /** Whether ignore terms and categories */
  ignoreTermsAndCategories?: boolean;
}

/** Optional parameters. */
export interface GlossaryGetDetailedOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GlossaryGetCategoriesHeadersOptionalParams
  extends OperationOptions {
  /** The page size - by default there is no paging. */
  limit?: number;
  /** The offset for pagination purpose. */
  offset?: number;
  /** The sort order, ASC (default) or DESC. */
  sort?: string;
}

/** Optional parameters. */
export interface GlossaryGetCategoriesOptionalParams extends OperationOptions {
  /** The page size - by default there is no paging. */
  limit?: number;
  /** The offset for pagination purpose. */
  offset?: number;
  /** The sort order, ASC (default) or DESC. */
  sort?: string;
}

/** Optional parameters. */
export interface GlossaryDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GlossaryUpdateOptionalParams extends OperationOptions {
  /** Whether ignore terms and categories */
  ignoreTermsAndCategories?: boolean;
}

/** Optional parameters. */
export interface GlossaryGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GlossaryGetRelatedTermsOptionalParams
  extends OperationOptions {
  /** The page size - by default there is no paging. */
  limit?: number;
  /** The offset for pagination purpose. */
  offset?: number;
  /** The sort order, ASC (default) or DESC. */
  sort?: string;
}

/** Optional parameters. */
export interface GlossaryDeleteTermAssignmentFromEntitiesOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GlossaryAssignTermToEntitiesOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GlossaryGetEntitiesAssignedWithTermOptionalParams
  extends OperationOptions {
  /** The page size - by default there is no paging. */
  limit?: number;
  /** The offset for pagination purpose. */
  offset?: number;
  /** The sort order, ASC (default) or DESC. */
  sort?: string;
}

/** Optional parameters. */
export interface GlossaryCreateTermsOptionalParams extends OperationOptions {
  /** Whether include term hierarchy */
  includeTermHierarchy?: boolean;
}

/** Optional parameters. */
export interface GlossaryPartialUpdateTermOptionalParams
  extends OperationOptions {
  /** Whether include term hierarchy */
  includeTermHierarchy?: boolean;
}

/** Optional parameters. */
export interface GlossaryDeleteTermOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GlossaryUpdateTermOptionalParams extends OperationOptions {
  /** Whether include term hierarchy */
  includeTermHierarchy?: boolean;
}

/** Optional parameters. */
export interface GlossaryGetTermOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GlossaryCreateTermOptionalParams extends OperationOptions {
  /** Whether include term hierarchy */
  includeTermHierarchy?: boolean;
}

/** Optional parameters. */
export interface GlossaryGetCategoryTermsOptionalParams
  extends OperationOptions {
  /** The page size - by default there is no paging. */
  limit?: number;
  /** The offset for pagination purpose. */
  offset?: number;
  /** The sort order, ASC (default) or DESC. */
  sort?: string;
}

/** Optional parameters. */
export interface GlossaryGetRelatedCategoriesOptionalParams
  extends OperationOptions {
  /** The page size - by default there is no paging. */
  limit?: number;
  /** The offset for pagination purpose. */
  offset?: number;
  /** The sort order, ASC (default) or DESC. */
  sort?: string;
}

/** Optional parameters. */
export interface GlossaryPartialUpdateCategoryOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GlossaryDeleteCategoryOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GlossaryUpdateCategoryOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GlossaryGetCategoryOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GlossaryCreateCategoryOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GlossaryCreateCategoriesOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GlossaryCreateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GlossaryBatchGetOptionalParams extends OperationOptions {
  /** The page size - by default there is no paging. */
  limit?: number;
  /** The offset for pagination purpose. */
  offset?: number;
  /** The sort order, ASC (default) or DESC. */
  sort?: string;
  /** Whether ignore terms and categories */
  ignoreTermsAndCategories?: boolean;
}

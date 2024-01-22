// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface StringGetNonNullOptions extends OperationOptions {}

export interface StringGetNullOptions extends OperationOptions {}

export interface StringPatchNonNullOptions extends OperationOptions {
  /** content-type is application/merge-patch+json */
  contentType?: string;
}

export interface StringPatchNullOptions extends OperationOptions {
  /** content-type is application/merge-patch+json */
  contentType?: string;
}

export interface BytesGetNonNullOptions extends OperationOptions {}

export interface BytesGetNullOptions extends OperationOptions {}

export interface BytesPatchNonNullOptions extends OperationOptions {
  /** content-type is application/merge-patch+json */
  contentType?: string;
}

export interface BytesPatchNullOptions extends OperationOptions {
  /** content-type is application/merge-patch+json */
  contentType?: string;
}

export interface DatetimeGetNonNullOptions extends OperationOptions {}

export interface DatetimeGetNullOptions extends OperationOptions {}

export interface DatetimePatchNonNullOptions extends OperationOptions {
  /** content-type is application/merge-patch+json */
  contentType?: string;
}

export interface DatetimePatchNullOptions extends OperationOptions {
  /** content-type is application/merge-patch+json */
  contentType?: string;
}

export interface DurationGetNonNullOptions extends OperationOptions {}

export interface DurationGetNullOptions extends OperationOptions {}

export interface DurationPatchNonNullOptions extends OperationOptions {
  /** content-type is application/merge-patch+json */
  contentType?: string;
}

export interface DurationPatchNullOptions extends OperationOptions {
  /** content-type is application/merge-patch+json */
  contentType?: string;
}

export interface CollectionsByteGetNonNullOptions extends OperationOptions {}

export interface CollectionsByteGetNullOptions extends OperationOptions {}

export interface CollectionsBytePatchNonNullOptions extends OperationOptions {
  /** content-type is application/merge-patch+json */
  contentType?: string;
}

export interface CollectionsBytePatchNullOptions extends OperationOptions {
  /** content-type is application/merge-patch+json */
  contentType?: string;
}

export interface CollectionsModelGetNonNullOptions extends OperationOptions {}

export interface CollectionsModelGetNullOptions extends OperationOptions {}

export interface CollectionsModelPatchNonNullOptions extends OperationOptions {
  /** content-type is application/merge-patch+json */
  contentType?: string;
}

export interface CollectionsModelPatchNullOptions extends OperationOptions {
  /** content-type is application/merge-patch+json */
  contentType?: string;
}

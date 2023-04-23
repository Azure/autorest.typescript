// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  StringProperty,
  BytesProperty,
  DatetimeProperty,
  DurationProperty,
  CollectionsByteProperty,
  CollectionsModelProperty,
} from "./models";

export type StringModelGetNonNullParameters = RequestParameters;
export type StringModelGetNullParameters = RequestParameters;
export type StringPropertyResourceMergeAndPatch = Partial<StringProperty>;

export interface StringModelPatchNonNullBodyParam {
  body: StringPropertyResourceMergeAndPatch;
}

export interface StringModelPatchNonNullMediaTypesParam {
  /** content-type is application/merge-patch+json */
  contentType: "application/merge-patch+json";
}

export type StringModelPatchNonNullParameters =
  StringModelPatchNonNullMediaTypesParam &
    StringModelPatchNonNullBodyParam &
    RequestParameters;

export interface StringModelPatchNullBodyParam {
  body: StringPropertyResourceMergeAndPatch;
}

export interface StringModelPatchNullMediaTypesParam {
  /** content-type is application/merge-patch+json */
  contentType: "application/merge-patch+json";
}

export type StringModelPatchNullParameters =
  StringModelPatchNullMediaTypesParam &
    StringModelPatchNullBodyParam &
    RequestParameters;
export type BytesGetNonNullParameters = RequestParameters;
export type BytesGetNullParameters = RequestParameters;
export type BytesPropertyResourceMergeAndPatch = Partial<BytesProperty>;

export interface BytesPatchNonNullBodyParam {
  body: BytesPropertyResourceMergeAndPatch;
}

export interface BytesPatchNonNullMediaTypesParam {
  /** content-type is application/merge-patch+json */
  contentType: "application/merge-patch+json";
}

export type BytesPatchNonNullParameters = BytesPatchNonNullMediaTypesParam &
  BytesPatchNonNullBodyParam &
  RequestParameters;

export interface BytesPatchNullBodyParam {
  body: BytesPropertyResourceMergeAndPatch;
}

export interface BytesPatchNullMediaTypesParam {
  /** content-type is application/merge-patch+json */
  contentType: "application/merge-patch+json";
}

export type BytesPatchNullParameters = BytesPatchNullMediaTypesParam &
  BytesPatchNullBodyParam &
  RequestParameters;
export type DatetimeGetNonNullParameters = RequestParameters;
export type DatetimeGetNullParameters = RequestParameters;
export type DatetimePropertyResourceMergeAndPatch = Partial<DatetimeProperty>;

export interface DatetimePatchNonNullBodyParam {
  body: DatetimePropertyResourceMergeAndPatch;
}

export interface DatetimePatchNonNullMediaTypesParam {
  /** content-type is application/merge-patch+json */
  contentType: "application/merge-patch+json";
}

export type DatetimePatchNonNullParameters =
  DatetimePatchNonNullMediaTypesParam &
    DatetimePatchNonNullBodyParam &
    RequestParameters;

export interface DatetimePatchNullBodyParam {
  body: DatetimePropertyResourceMergeAndPatch;
}

export interface DatetimePatchNullMediaTypesParam {
  /** content-type is application/merge-patch+json */
  contentType: "application/merge-patch+json";
}

export type DatetimePatchNullParameters = DatetimePatchNullMediaTypesParam &
  DatetimePatchNullBodyParam &
  RequestParameters;
export type DurationGetNonNullParameters = RequestParameters;
export type DurationGetNullParameters = RequestParameters;
export type DurationPropertyResourceMergeAndPatch = Partial<DurationProperty>;

export interface DurationPatchNonNullBodyParam {
  body: DurationPropertyResourceMergeAndPatch;
}

export interface DurationPatchNonNullMediaTypesParam {
  /** content-type is application/merge-patch+json */
  contentType: "application/merge-patch+json";
}

export type DurationPatchNonNullParameters =
  DurationPatchNonNullMediaTypesParam &
    DurationPatchNonNullBodyParam &
    RequestParameters;

export interface DurationPatchNullBodyParam {
  body: DurationPropertyResourceMergeAndPatch;
}

export interface DurationPatchNullMediaTypesParam {
  /** content-type is application/merge-patch+json */
  contentType: "application/merge-patch+json";
}

export type DurationPatchNullParameters = DurationPatchNullMediaTypesParam &
  DurationPatchNullBodyParam &
  RequestParameters;
export type CollectionsByteGetNonNullParameters = RequestParameters;
export type CollectionsByteGetNullParameters = RequestParameters;
export type CollectionsBytePropertyResourceMergeAndPatch =
  Partial<CollectionsByteProperty>;

export interface CollectionsBytePatchNonNullBodyParam {
  body: CollectionsBytePropertyResourceMergeAndPatch;
}

export interface CollectionsBytePatchNonNullMediaTypesParam {
  /** content-type is application/merge-patch+json */
  contentType: "application/merge-patch+json";
}

export type CollectionsBytePatchNonNullParameters =
  CollectionsBytePatchNonNullMediaTypesParam &
    CollectionsBytePatchNonNullBodyParam &
    RequestParameters;

export interface CollectionsBytePatchNullBodyParam {
  body: CollectionsBytePropertyResourceMergeAndPatch;
}

export interface CollectionsBytePatchNullMediaTypesParam {
  /** content-type is application/merge-patch+json */
  contentType: "application/merge-patch+json";
}

export type CollectionsBytePatchNullParameters =
  CollectionsBytePatchNullMediaTypesParam &
    CollectionsBytePatchNullBodyParam &
    RequestParameters;
export type CollectionsModelGetNonNullParameters = RequestParameters;
export type CollectionsModelGetNullParameters = RequestParameters;
export type CollectionsModelPropertyResourceMergeAndPatch =
  Partial<CollectionsModelProperty>;

export interface CollectionsModelPatchNonNullBodyParam {
  body: CollectionsModelPropertyResourceMergeAndPatch;
}

export interface CollectionsModelPatchNonNullMediaTypesParam {
  /** content-type is application/merge-patch+json */
  contentType: "application/merge-patch+json";
}

export type CollectionsModelPatchNonNullParameters =
  CollectionsModelPatchNonNullMediaTypesParam &
    CollectionsModelPatchNonNullBodyParam &
    RequestParameters;

export interface CollectionsModelPatchNullBodyParam {
  body: CollectionsModelPropertyResourceMergeAndPatch;
}

export interface CollectionsModelPatchNullMediaTypesParam {
  /** content-type is application/merge-patch+json */
  contentType: "application/merge-patch+json";
}

export type CollectionsModelPatchNullParameters =
  CollectionsModelPatchNullMediaTypesParam &
    CollectionsModelPatchNullBodyParam &
    RequestParameters;

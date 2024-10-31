import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

export declare interface BytesGetNonnull {
    get(options?: BytesGetNonnullParameters): StreamableMethod<BytesGetNonnull200Response>;
    patch(options: BytesPatchNonnullParameters): StreamableMethod<BytesPatchNonnull204Response>;
}

export declare interface BytesGetNonnull200Response extends HttpResponse {
    status: "200";
    body: BytesPropertyOutput;
}

export declare type BytesGetNonnullParameters = RequestParameters;

export declare interface BytesGetnull {
    get(options?: BytesGetnullParameters): StreamableMethod<BytesGetnull200Response>;
    patch(options: BytesPatchnullParameters): StreamableMethod<BytesPatchnull204Response>;
}

export declare interface BytesGetnull200Response extends HttpResponse {
    status: "200";
    body: BytesPropertyOutput;
}

export declare type BytesGetnullParameters = RequestParameters;

export declare interface BytesPatchNonnull204Response extends HttpResponse {
    status: "204";
}

export declare interface BytesPatchNonnullBodyParam {
    body: BytesPropertyResourceMergeAndPatch;
}

export declare interface BytesPatchNonnullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type BytesPatchNonnullParameters = BytesPatchNonnullMediaTypesParam & BytesPatchNonnullBodyParam & RequestParameters;

export declare interface BytesPatchnull204Response extends HttpResponse {
    status: "204";
}

export declare interface BytesPatchnullBodyParam {
    body: BytesPropertyResourceMergeAndPatch;
}

export declare interface BytesPatchnullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type BytesPatchnullParameters = BytesPatchnullMediaTypesParam & BytesPatchnullBodyParam & RequestParameters;

export declare interface BytesProperty {
    requiredProperty: string;
    nullableProperty: string | null;
}

export declare interface BytesPropertyOutput {
    requiredProperty: string;
    nullableProperty: string | null;
}

export declare type BytesPropertyResourceMergeAndPatch = Partial<BytesProperty>;

export declare interface CollectionsByteGetNonnull {
    get(options?: CollectionsByteGetNonnullParameters): StreamableMethod<CollectionsByteGetNonnull200Response>;
    patch(options: CollectionsBytePatchNonnullParameters): StreamableMethod<CollectionsBytePatchNonnull204Response>;
}

export declare interface CollectionsByteGetNonnull200Response extends HttpResponse {
    status: "200";
    body: CollectionsBytePropertyOutput;
}

export declare type CollectionsByteGetNonnullParameters = RequestParameters;

export declare interface CollectionsByteGetnull {
    get(options?: CollectionsByteGetnullParameters): StreamableMethod<CollectionsByteGetnull200Response>;
    patch(options: CollectionsBytePatchnullParameters): StreamableMethod<CollectionsBytePatchnull204Response>;
}

export declare interface CollectionsByteGetnull200Response extends HttpResponse {
    status: "200";
    body: CollectionsBytePropertyOutput;
}

export declare type CollectionsByteGetnullParameters = RequestParameters;

export declare interface CollectionsBytePatchNonnull204Response extends HttpResponse {
    status: "204";
}

export declare interface CollectionsBytePatchNonnullBodyParam {
    body: CollectionsBytePropertyResourceMergeAndPatch;
}

export declare interface CollectionsBytePatchNonnullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type CollectionsBytePatchNonnullParameters = CollectionsBytePatchNonnullMediaTypesParam & CollectionsBytePatchNonnullBodyParam & RequestParameters;

export declare interface CollectionsBytePatchnull204Response extends HttpResponse {
    status: "204";
}

export declare interface CollectionsBytePatchnullBodyParam {
    body: CollectionsBytePropertyResourceMergeAndPatch;
}

export declare interface CollectionsBytePatchnullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type CollectionsBytePatchnullParameters = CollectionsBytePatchnullMediaTypesParam & CollectionsBytePatchnullBodyParam & RequestParameters;

export declare interface CollectionsByteProperty {
    requiredProperty: string;
    nullableProperty: string[] | null;
}

export declare interface CollectionsBytePropertyOutput {
    requiredProperty: string;
    nullableProperty: string[] | null;
}

export declare type CollectionsBytePropertyResourceMergeAndPatch = Partial<CollectionsByteProperty>;

export declare interface CollectionsModelGetNonnull {
    get(options?: CollectionsModelGetNonnullParameters): StreamableMethod<CollectionsModelGetNonnull200Response>;
    patch(options: CollectionsModelPatchNonnullParameters): StreamableMethod<CollectionsModelPatchNonnull204Response>;
}

export declare interface CollectionsModelGetNonnull200Response extends HttpResponse {
    status: "200";
    body: CollectionsModelPropertyOutput;
}

export declare type CollectionsModelGetNonnullParameters = RequestParameters;

export declare interface CollectionsModelGetnull {
    get(options?: CollectionsModelGetnullParameters): StreamableMethod<CollectionsModelGetnull200Response>;
    patch(options: CollectionsModelPatchnullParameters): StreamableMethod<CollectionsModelPatchnull204Response>;
}

export declare interface CollectionsModelGetnull200Response extends HttpResponse {
    status: "200";
    body: CollectionsModelPropertyOutput;
}

export declare type CollectionsModelGetnullParameters = RequestParameters;

export declare interface CollectionsModelPatchNonnull204Response extends HttpResponse {
    status: "204";
}

export declare interface CollectionsModelPatchNonnullBodyParam {
    body: CollectionsModelPropertyResourceMergeAndPatch;
}

export declare interface CollectionsModelPatchNonnullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type CollectionsModelPatchNonnullParameters = CollectionsModelPatchNonnullMediaTypesParam & CollectionsModelPatchNonnullBodyParam & RequestParameters;

export declare interface CollectionsModelPatchnull204Response extends HttpResponse {
    status: "204";
}

export declare interface CollectionsModelPatchnullBodyParam {
    body: CollectionsModelPropertyResourceMergeAndPatch;
}

export declare interface CollectionsModelPatchnullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type CollectionsModelPatchnullParameters = CollectionsModelPatchnullMediaTypesParam & CollectionsModelPatchnullBodyParam & RequestParameters;

export declare interface CollectionsModelProperty {
    requiredProperty: string;
    nullableProperty: Array<InnerModel> | null;
}

export declare interface CollectionsModelPropertyOutput {
    requiredProperty: string;
    nullableProperty: Array<InnerModelOutput> | null;
}

export declare type CollectionsModelPropertyResourceMergeAndPatch = Partial<CollectionsModelProperty>;

export declare interface CollectionsStringGetNonnull {
    get(options?: CollectionsStringGetNonnullParameters): StreamableMethod<CollectionsStringGetNonnull200Response>;
    patch(options: CollectionsStringPatchNonnullParameters): StreamableMethod<CollectionsStringPatchNonnull204Response>;
}

export declare interface CollectionsStringGetNonnull200Response extends HttpResponse {
    status: "200";
    body: CollectionsStringPropertyOutput;
}

export declare type CollectionsStringGetNonnullParameters = RequestParameters;

export declare interface CollectionsStringGetnull {
    get(options?: CollectionsStringGetnullParameters): StreamableMethod<CollectionsStringGetnull200Response>;
    patch(options: CollectionsStringPatchnullParameters): StreamableMethod<CollectionsStringPatchnull204Response>;
}

export declare interface CollectionsStringGetnull200Response extends HttpResponse {
    status: "200";
    body: CollectionsStringPropertyOutput;
}

export declare type CollectionsStringGetnullParameters = RequestParameters;

export declare interface CollectionsStringPatchNonnull204Response extends HttpResponse {
    status: "204";
}

export declare interface CollectionsStringPatchNonnullBodyParam {
    body: CollectionsStringPropertyResourceMergeAndPatch;
}

export declare interface CollectionsStringPatchNonnullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type CollectionsStringPatchNonnullParameters = CollectionsStringPatchNonnullMediaTypesParam & CollectionsStringPatchNonnullBodyParam & RequestParameters;

export declare interface CollectionsStringPatchnull204Response extends HttpResponse {
    status: "204";
}

export declare interface CollectionsStringPatchnullBodyParam {
    body: CollectionsStringPropertyResourceMergeAndPatch;
}

export declare interface CollectionsStringPatchnullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type CollectionsStringPatchnullParameters = CollectionsStringPatchnullMediaTypesParam & CollectionsStringPatchnullBodyParam & RequestParameters;

export declare interface CollectionsStringProperty {
    requiredProperty: string;
    nullableProperty: string[] | null;
}

export declare interface CollectionsStringPropertyOutput {
    requiredProperty: string;
    nullableProperty: string[] | null;
}

export declare type CollectionsStringPropertyResourceMergeAndPatch = Partial<CollectionsStringProperty>;

declare function createClient(options?: NullableClientOptions): NullableClient;
export default createClient;

export declare interface DatetimeGetNonnull {
    get(options?: DatetimeGetNonnullParameters): StreamableMethod<DatetimeGetNonnull200Response>;
    patch(options: DatetimePatchNonnullParameters): StreamableMethod<DatetimePatchNonnull204Response>;
}

export declare interface DatetimeGetNonnull200Response extends HttpResponse {
    status: "200";
    body: DatetimePropertyOutput;
}

export declare type DatetimeGetNonnullParameters = RequestParameters;

export declare interface DatetimeGetnull {
    get(options?: DatetimeGetnullParameters): StreamableMethod<DatetimeGetnull200Response>;
    patch(options: DatetimePatchnullParameters): StreamableMethod<DatetimePatchnull204Response>;
}

export declare interface DatetimeGetnull200Response extends HttpResponse {
    status: "200";
    body: DatetimePropertyOutput;
}

export declare type DatetimeGetnullParameters = RequestParameters;

export declare interface DatetimePatchNonnull204Response extends HttpResponse {
    status: "204";
}

export declare interface DatetimePatchNonnullBodyParam {
    body: DatetimePropertyResourceMergeAndPatch;
}

export declare interface DatetimePatchNonnullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type DatetimePatchNonnullParameters = DatetimePatchNonnullMediaTypesParam & DatetimePatchNonnullBodyParam & RequestParameters;

export declare interface DatetimePatchnull204Response extends HttpResponse {
    status: "204";
}

export declare interface DatetimePatchnullBodyParam {
    body: DatetimePropertyResourceMergeAndPatch;
}

export declare interface DatetimePatchnullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type DatetimePatchnullParameters = DatetimePatchnullMediaTypesParam & DatetimePatchnullBodyParam & RequestParameters;

export declare interface DatetimeProperty {
    requiredProperty: string;
    nullableProperty: Date | string | null;
}

export declare interface DatetimePropertyOutput {
    requiredProperty: string;
    nullableProperty: string | null;
}

export declare type DatetimePropertyResourceMergeAndPatch = Partial<DatetimeProperty>;

export declare interface DurationGetNonnull {
    get(options?: DurationGetNonnullParameters): StreamableMethod<DurationGetNonnull200Response>;
    patch(options: DurationPatchNonnullParameters): StreamableMethod<DurationPatchNonnull204Response>;
}

export declare interface DurationGetNonnull200Response extends HttpResponse {
    status: "200";
    body: DurationPropertyOutput;
}

export declare type DurationGetNonnullParameters = RequestParameters;

export declare interface DurationGetnull {
    get(options?: DurationGetnullParameters): StreamableMethod<DurationGetnull200Response>;
    patch(options: DurationPatchnullParameters): StreamableMethod<DurationPatchnull204Response>;
}

export declare interface DurationGetnull200Response extends HttpResponse {
    status: "200";
    body: DurationPropertyOutput;
}

export declare type DurationGetnullParameters = RequestParameters;

export declare interface DurationPatchNonnull204Response extends HttpResponse {
    status: "204";
}

export declare interface DurationPatchNonnullBodyParam {
    body: DurationPropertyResourceMergeAndPatch;
}

export declare interface DurationPatchNonnullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type DurationPatchNonnullParameters = DurationPatchNonnullMediaTypesParam & DurationPatchNonnullBodyParam & RequestParameters;

export declare interface DurationPatchnull204Response extends HttpResponse {
    status: "204";
}

export declare interface DurationPatchnullBodyParam {
    body: DurationPropertyResourceMergeAndPatch;
}

export declare interface DurationPatchnullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type DurationPatchnullParameters = DurationPatchnullMediaTypesParam & DurationPatchnullBodyParam & RequestParameters;

export declare interface DurationProperty {
    requiredProperty: string;
    nullableProperty: string | null;
}

export declare interface DurationPropertyOutput {
    requiredProperty: string;
    nullableProperty: string | null;
}

export declare type DurationPropertyResourceMergeAndPatch = Partial<DurationProperty>;

export declare interface InnerModel {
    property: string;
}

export declare interface InnerModelOutput {
    property: string;
}

export declare type NullableClient = Client & {
    path: Routes;
};

export declare interface NullableClientOptions extends ClientOptions {
}

export declare interface Routes {
    (path: "/type/property/nullable/string/non-null"): StringModelGetNonnull;
    (path: "/type/property/nullable/string/null"): StringModelGetnull;
    (path: "/type/property/nullable/bytes/non-null"): BytesGetNonnull;
    (path: "/type/property/nullable/bytes/null"): BytesGetnull;
    (path: "/type/property/nullable/datetime/non-null"): DatetimeGetNonnull;
    (path: "/type/property/nullable/datetime/null"): DatetimeGetnull;
    (path: "/type/property/nullable/duration/non-null"): DurationGetNonnull;
    (path: "/type/property/nullable/duration/null"): DurationGetnull;
    (path: "/type/property/nullable/collections/bytes/non-null"): CollectionsByteGetNonnull;
    (path: "/type/property/nullable/collections/bytes/null"): CollectionsByteGetnull;
    (path: "/type/property/nullable/collections/model/non-null"): CollectionsModelGetNonnull;
    (path: "/type/property/nullable/collections/model/null"): CollectionsModelGetnull;
    (path: "/type/property/nullable/collections/string/non-null"): CollectionsStringGetNonnull;
    (path: "/type/property/nullable/collections/string/null"): CollectionsStringGetnull;
}

export declare interface StringModelGetNonnull {
    get(options?: StringModelGetNonnullParameters): StreamableMethod<StringModelGetNonnull200Response>;
    patch(options: StringModelPatchNonnullParameters): StreamableMethod<StringModelPatchNonnull204Response>;
}

export declare interface StringModelGetNonnull200Response extends HttpResponse {
    status: "200";
    body: StringPropertyOutput;
}

export declare type StringModelGetNonnullParameters = RequestParameters;

export declare interface StringModelGetnull {
    get(options?: StringModelGetnullParameters): StreamableMethod<StringModelGetnull200Response>;
    patch(options: StringModelPatchnullParameters): StreamableMethod<StringModelPatchnull204Response>;
}

export declare interface StringModelGetnull200Response extends HttpResponse {
    status: "200";
    body: StringPropertyOutput;
}

export declare type StringModelGetnullParameters = RequestParameters;

export declare interface StringModelPatchNonnull204Response extends HttpResponse {
    status: "204";
}

export declare interface StringModelPatchNonnullBodyParam {
    body: StringPropertyResourceMergeAndPatch;
}

export declare interface StringModelPatchNonnullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type StringModelPatchNonnullParameters = StringModelPatchNonnullMediaTypesParam & StringModelPatchNonnullBodyParam & RequestParameters;

export declare interface StringModelPatchnull204Response extends HttpResponse {
    status: "204";
}

export declare interface StringModelPatchnullBodyParam {
    body: StringPropertyResourceMergeAndPatch;
}

export declare interface StringModelPatchnullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type StringModelPatchnullParameters = StringModelPatchnullMediaTypesParam & StringModelPatchnullBodyParam & RequestParameters;

export declare interface StringProperty {
    requiredProperty: string;
    nullableProperty: string | null;
}

export declare interface StringPropertyOutput {
    requiredProperty: string;
    nullableProperty: string | null;
}

export declare type StringPropertyResourceMergeAndPatch = Partial<StringProperty>;

export { }

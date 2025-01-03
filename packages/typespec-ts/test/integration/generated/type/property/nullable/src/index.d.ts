import { Client } from '@typespec/ts-http-runtime';
import { ClientOptions } from '@typespec/ts-http-runtime';
import { HttpResponse } from '@typespec/ts-http-runtime';
import { RequestParameters } from '@typespec/ts-http-runtime';
import { StreamableMethod } from '@typespec/ts-http-runtime';

export declare interface BytesGetNonNull {
    get(options?: BytesGetNonNullParameters): StreamableMethod<BytesGetNonNull200Response>;
    patch(options: BytesPatchNonNullParameters): StreamableMethod<BytesPatchNonNull204Response>;
}

export declare interface BytesGetNonNull200Response extends HttpResponse {
    status: "200";
    body: BytesPropertyOutput;
}

export declare type BytesGetNonNullParameters = RequestParameters;

export declare interface BytesGetNull {
    get(options?: BytesGetNullParameters): StreamableMethod<BytesGetNull200Response>;
    patch(options: BytesPatchNullParameters): StreamableMethod<BytesPatchNull204Response>;
}

export declare interface BytesGetNull200Response extends HttpResponse {
    status: "200";
    body: BytesPropertyOutput;
}

export declare type BytesGetNullParameters = RequestParameters;

export declare interface BytesPatchNonNull204Response extends HttpResponse {
    status: "204";
}

export declare interface BytesPatchNonNullBodyParam {
    body: BytesPropertyResourceMergeAndPatch;
}

export declare interface BytesPatchNonNullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type BytesPatchNonNullParameters = BytesPatchNonNullMediaTypesParam & BytesPatchNonNullBodyParam & RequestParameters;

export declare interface BytesPatchNull204Response extends HttpResponse {
    status: "204";
}

export declare interface BytesPatchNullBodyParam {
    body: BytesPropertyResourceMergeAndPatch;
}

export declare interface BytesPatchNullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type BytesPatchNullParameters = BytesPatchNullMediaTypesParam & BytesPatchNullBodyParam & RequestParameters;

export declare interface BytesProperty {
    requiredProperty: string;
    nullableProperty: string | null;
}

export declare interface BytesPropertyOutput {
    requiredProperty: string;
    nullableProperty: string | null;
}

export declare type BytesPropertyResourceMergeAndPatch = Partial<BytesProperty>;

export declare interface CollectionsByteGetNonNull {
    get(options?: CollectionsByteGetNonNullParameters): StreamableMethod<CollectionsByteGetNonNull200Response>;
    patch(options: CollectionsBytePatchNonNullParameters): StreamableMethod<CollectionsBytePatchNonNull204Response>;
}

export declare interface CollectionsByteGetNonNull200Response extends HttpResponse {
    status: "200";
    body: CollectionsBytePropertyOutput;
}

export declare type CollectionsByteGetNonNullParameters = RequestParameters;

export declare interface CollectionsByteGetNull {
    get(options?: CollectionsByteGetNullParameters): StreamableMethod<CollectionsByteGetNull200Response>;
    patch(options: CollectionsBytePatchNullParameters): StreamableMethod<CollectionsBytePatchNull204Response>;
}

export declare interface CollectionsByteGetNull200Response extends HttpResponse {
    status: "200";
    body: CollectionsBytePropertyOutput;
}

export declare type CollectionsByteGetNullParameters = RequestParameters;

export declare interface CollectionsBytePatchNonNull204Response extends HttpResponse {
    status: "204";
}

export declare interface CollectionsBytePatchNonNullBodyParam {
    body: CollectionsBytePropertyResourceMergeAndPatch;
}

export declare interface CollectionsBytePatchNonNullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type CollectionsBytePatchNonNullParameters = CollectionsBytePatchNonNullMediaTypesParam & CollectionsBytePatchNonNullBodyParam & RequestParameters;

export declare interface CollectionsBytePatchNull204Response extends HttpResponse {
    status: "204";
}

export declare interface CollectionsBytePatchNullBodyParam {
    body: CollectionsBytePropertyResourceMergeAndPatch;
}

export declare interface CollectionsBytePatchNullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type CollectionsBytePatchNullParameters = CollectionsBytePatchNullMediaTypesParam & CollectionsBytePatchNullBodyParam & RequestParameters;

export declare interface CollectionsByteProperty {
    requiredProperty: string;
    nullableProperty: string[] | null;
}

export declare interface CollectionsBytePropertyOutput {
    requiredProperty: string;
    nullableProperty: string[] | null;
}

export declare type CollectionsBytePropertyResourceMergeAndPatch = Partial<CollectionsByteProperty>;

export declare interface CollectionsModelGetNonNull {
    get(options?: CollectionsModelGetNonNullParameters): StreamableMethod<CollectionsModelGetNonNull200Response>;
    patch(options: CollectionsModelPatchNonNullParameters): StreamableMethod<CollectionsModelPatchNonNull204Response>;
}

export declare interface CollectionsModelGetNonNull200Response extends HttpResponse {
    status: "200";
    body: CollectionsModelPropertyOutput;
}

export declare type CollectionsModelGetNonNullParameters = RequestParameters;

export declare interface CollectionsModelGetNull {
    get(options?: CollectionsModelGetNullParameters): StreamableMethod<CollectionsModelGetNull200Response>;
    patch(options: CollectionsModelPatchNullParameters): StreamableMethod<CollectionsModelPatchNull204Response>;
}

export declare interface CollectionsModelGetNull200Response extends HttpResponse {
    status: "200";
    body: CollectionsModelPropertyOutput;
}

export declare type CollectionsModelGetNullParameters = RequestParameters;

export declare interface CollectionsModelPatchNonNull204Response extends HttpResponse {
    status: "204";
}

export declare interface CollectionsModelPatchNonNullBodyParam {
    body: CollectionsModelPropertyResourceMergeAndPatch;
}

export declare interface CollectionsModelPatchNonNullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type CollectionsModelPatchNonNullParameters = CollectionsModelPatchNonNullMediaTypesParam & CollectionsModelPatchNonNullBodyParam & RequestParameters;

export declare interface CollectionsModelPatchNull204Response extends HttpResponse {
    status: "204";
}

export declare interface CollectionsModelPatchNullBodyParam {
    body: CollectionsModelPropertyResourceMergeAndPatch;
}

export declare interface CollectionsModelPatchNullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type CollectionsModelPatchNullParameters = CollectionsModelPatchNullMediaTypesParam & CollectionsModelPatchNullBodyParam & RequestParameters;

export declare interface CollectionsModelProperty {
    requiredProperty: string;
    nullableProperty: Array<InnerModel> | null;
}

export declare interface CollectionsModelPropertyOutput {
    requiredProperty: string;
    nullableProperty: Array<InnerModelOutput> | null;
}

export declare type CollectionsModelPropertyResourceMergeAndPatch = Partial<CollectionsModelProperty>;

export declare interface CollectionsStringGetNonNull {
    get(options?: CollectionsStringGetNonNullParameters): StreamableMethod<CollectionsStringGetNonNull200Response>;
    patch(options: CollectionsStringPatchNonNullParameters): StreamableMethod<CollectionsStringPatchNonNull204Response>;
}

export declare interface CollectionsStringGetNonNull200Response extends HttpResponse {
    status: "200";
    body: CollectionsStringPropertyOutput;
}

export declare type CollectionsStringGetNonNullParameters = RequestParameters;

export declare interface CollectionsStringGetNull {
    get(options?: CollectionsStringGetNullParameters): StreamableMethod<CollectionsStringGetNull200Response>;
    patch(options: CollectionsStringPatchNullParameters): StreamableMethod<CollectionsStringPatchNull204Response>;
}

export declare interface CollectionsStringGetNull200Response extends HttpResponse {
    status: "200";
    body: CollectionsStringPropertyOutput;
}

export declare type CollectionsStringGetNullParameters = RequestParameters;

export declare interface CollectionsStringPatchNonNull204Response extends HttpResponse {
    status: "204";
}

export declare interface CollectionsStringPatchNonNullBodyParam {
    body: CollectionsStringPropertyResourceMergeAndPatch;
}

export declare interface CollectionsStringPatchNonNullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type CollectionsStringPatchNonNullParameters = CollectionsStringPatchNonNullMediaTypesParam & CollectionsStringPatchNonNullBodyParam & RequestParameters;

export declare interface CollectionsStringPatchNull204Response extends HttpResponse {
    status: "204";
}

export declare interface CollectionsStringPatchNullBodyParam {
    body: CollectionsStringPropertyResourceMergeAndPatch;
}

export declare interface CollectionsStringPatchNullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type CollectionsStringPatchNullParameters = CollectionsStringPatchNullMediaTypesParam & CollectionsStringPatchNullBodyParam & RequestParameters;

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

export declare interface DatetimeGetNonNull {
    get(options?: DatetimeGetNonNullParameters): StreamableMethod<DatetimeGetNonNull200Response>;
    patch(options: DatetimePatchNonNullParameters): StreamableMethod<DatetimePatchNonNull204Response>;
}

export declare interface DatetimeGetNonNull200Response extends HttpResponse {
    status: "200";
    body: DatetimePropertyOutput;
}

export declare type DatetimeGetNonNullParameters = RequestParameters;

export declare interface DatetimeGetNull {
    get(options?: DatetimeGetNullParameters): StreamableMethod<DatetimeGetNull200Response>;
    patch(options: DatetimePatchNullParameters): StreamableMethod<DatetimePatchNull204Response>;
}

export declare interface DatetimeGetNull200Response extends HttpResponse {
    status: "200";
    body: DatetimePropertyOutput;
}

export declare type DatetimeGetNullParameters = RequestParameters;

export declare interface DatetimePatchNonNull204Response extends HttpResponse {
    status: "204";
}

export declare interface DatetimePatchNonNullBodyParam {
    body: DatetimePropertyResourceMergeAndPatch;
}

export declare interface DatetimePatchNonNullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type DatetimePatchNonNullParameters = DatetimePatchNonNullMediaTypesParam & DatetimePatchNonNullBodyParam & RequestParameters;

export declare interface DatetimePatchNull204Response extends HttpResponse {
    status: "204";
}

export declare interface DatetimePatchNullBodyParam {
    body: DatetimePropertyResourceMergeAndPatch;
}

export declare interface DatetimePatchNullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type DatetimePatchNullParameters = DatetimePatchNullMediaTypesParam & DatetimePatchNullBodyParam & RequestParameters;

export declare interface DatetimeProperty {
    requiredProperty: string;
    nullableProperty: Date | string | null;
}

export declare interface DatetimePropertyOutput {
    requiredProperty: string;
    nullableProperty: string | null;
}

export declare type DatetimePropertyResourceMergeAndPatch = Partial<DatetimeProperty>;

export declare interface DurationGetNonNull {
    get(options?: DurationGetNonNullParameters): StreamableMethod<DurationGetNonNull200Response>;
    patch(options: DurationPatchNonNullParameters): StreamableMethod<DurationPatchNonNull204Response>;
}

export declare interface DurationGetNonNull200Response extends HttpResponse {
    status: "200";
    body: DurationPropertyOutput;
}

export declare type DurationGetNonNullParameters = RequestParameters;

export declare interface DurationGetNull {
    get(options?: DurationGetNullParameters): StreamableMethod<DurationGetNull200Response>;
    patch(options: DurationPatchNullParameters): StreamableMethod<DurationPatchNull204Response>;
}

export declare interface DurationGetNull200Response extends HttpResponse {
    status: "200";
    body: DurationPropertyOutput;
}

export declare type DurationGetNullParameters = RequestParameters;

export declare interface DurationPatchNonNull204Response extends HttpResponse {
    status: "204";
}

export declare interface DurationPatchNonNullBodyParam {
    body: DurationPropertyResourceMergeAndPatch;
}

export declare interface DurationPatchNonNullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type DurationPatchNonNullParameters = DurationPatchNonNullMediaTypesParam & DurationPatchNonNullBodyParam & RequestParameters;

export declare interface DurationPatchNull204Response extends HttpResponse {
    status: "204";
}

export declare interface DurationPatchNullBodyParam {
    body: DurationPropertyResourceMergeAndPatch;
}

export declare interface DurationPatchNullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type DurationPatchNullParameters = DurationPatchNullMediaTypesParam & DurationPatchNullBodyParam & RequestParameters;

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
    (path: "/type/property/nullable/string/non-null"): StringModelGetNonNull;
    (path: "/type/property/nullable/string/null"): StringModelGetNull;
    (path: "/type/property/nullable/bytes/non-null"): BytesGetNonNull;
    (path: "/type/property/nullable/bytes/null"): BytesGetNull;
    (path: "/type/property/nullable/datetime/non-null"): DatetimeGetNonNull;
    (path: "/type/property/nullable/datetime/null"): DatetimeGetNull;
    (path: "/type/property/nullable/duration/non-null"): DurationGetNonNull;
    (path: "/type/property/nullable/duration/null"): DurationGetNull;
    (path: "/type/property/nullable/collections/bytes/non-null"): CollectionsByteGetNonNull;
    (path: "/type/property/nullable/collections/bytes/null"): CollectionsByteGetNull;
    (path: "/type/property/nullable/collections/model/non-null"): CollectionsModelGetNonNull;
    (path: "/type/property/nullable/collections/model/null"): CollectionsModelGetNull;
    (path: "/type/property/nullable/collections/string/non-null"): CollectionsStringGetNonNull;
    (path: "/type/property/nullable/collections/string/null"): CollectionsStringGetNull;
}

export declare interface StringModelGetNonNull {
    get(options?: StringModelGetNonNullParameters): StreamableMethod<StringModelGetNonNull200Response>;
    patch(options: StringModelPatchNonNullParameters): StreamableMethod<StringModelPatchNonNull204Response>;
}

export declare interface StringModelGetNonNull200Response extends HttpResponse {
    status: "200";
    body: StringPropertyOutput;
}

export declare type StringModelGetNonNullParameters = RequestParameters;

export declare interface StringModelGetNull {
    get(options?: StringModelGetNullParameters): StreamableMethod<StringModelGetNull200Response>;
    patch(options: StringModelPatchNullParameters): StreamableMethod<StringModelPatchNull204Response>;
}

export declare interface StringModelGetNull200Response extends HttpResponse {
    status: "200";
    body: StringPropertyOutput;
}

export declare type StringModelGetNullParameters = RequestParameters;

export declare interface StringModelPatchNonNull204Response extends HttpResponse {
    status: "204";
}

export declare interface StringModelPatchNonNullBodyParam {
    body: StringPropertyResourceMergeAndPatch;
}

export declare interface StringModelPatchNonNullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type StringModelPatchNonNullParameters = StringModelPatchNonNullMediaTypesParam & StringModelPatchNonNullBodyParam & RequestParameters;

export declare interface StringModelPatchNull204Response extends HttpResponse {
    status: "204";
}

export declare interface StringModelPatchNullBodyParam {
    body: StringPropertyResourceMergeAndPatch;
}

export declare interface StringModelPatchNullMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type StringModelPatchNullParameters = StringModelPatchNullMediaTypesParam & StringModelPatchNullBodyParam & RequestParameters;

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

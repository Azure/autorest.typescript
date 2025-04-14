import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare type AdditionalPropertiesClient = Client & {
    path: Routes;
};

export declare interface AdditionalPropertiesClientOptions extends ClientOptions {
}

declare function createClient(options?: AdditionalPropertiesClientOptions): AdditionalPropertiesClient;
export default createClient;

export declare interface DifferentSpreadFloatDerived extends DifferentSpreadFloatRecord {
    derivedProp: number;
}

export declare interface DifferentSpreadFloatDerivedOutput extends DifferentSpreadFloatRecordOutput {
    derivedProp: number;
}

export declare interface DifferentSpreadFloatRecord extends Record<string, unknown> {
    name: string;
}

export declare interface DifferentSpreadFloatRecordOutput extends Record<string, any> {
    name: string;
}

export declare interface DifferentSpreadModelArrayDerived extends DifferentSpreadModelArrayRecord {
    derivedProp: Array<ModelForRecord>;
}

export declare interface DifferentSpreadModelArrayDerivedOutput extends DifferentSpreadModelArrayRecordOutput {
    derivedProp: Array<ModelForRecordOutput>;
}

export declare interface DifferentSpreadModelArrayRecord extends Record<string, unknown> {
    knownProp: string;
}

export declare interface DifferentSpreadModelArrayRecordOutput extends Record<string, any> {
    knownProp: string;
}

export declare interface DifferentSpreadModelDerived extends DifferentSpreadModelRecord {
    derivedProp: ModelForRecord;
}

export declare interface DifferentSpreadModelDerivedOutput extends DifferentSpreadModelRecordOutput {
    derivedProp: ModelForRecordOutput;
}

export declare interface DifferentSpreadModelRecord extends Record<string, unknown> {
    knownProp: string;
}

export declare interface DifferentSpreadModelRecordOutput extends Record<string, any> {
    knownProp: string;
}

export declare interface DifferentSpreadStringDerived extends DifferentSpreadStringRecord {
    derivedProp: string;
}

export declare interface DifferentSpreadStringDerivedOutput extends DifferentSpreadStringRecordOutput {
    derivedProp: string;
}

export declare interface DifferentSpreadStringRecord extends Record<string, unknown> {
    id: number;
}

export declare interface DifferentSpreadStringRecordOutput extends Record<string, any> {
    id: number;
}

export declare interface ExtendsDifferentSpreadFloatGet {
    get(options?: ExtendsDifferentSpreadFloatGetParameters): StreamableMethod<ExtendsDifferentSpreadFloatGet200Response>;
    put(options: ExtendsDifferentSpreadFloatPutParameters): StreamableMethod<ExtendsDifferentSpreadFloatPut204Response>;
}

export declare interface ExtendsDifferentSpreadFloatGet200Response extends HttpResponse {
    status: "200";
    body: DifferentSpreadFloatDerivedOutput;
}

export declare type ExtendsDifferentSpreadFloatGetParameters = RequestParameters;

export declare interface ExtendsDifferentSpreadFloatPut204Response extends HttpResponse {
    status: "204";
}

export declare interface ExtendsDifferentSpreadFloatPutBodyParam {
    body: DifferentSpreadFloatDerived;
}

export declare type ExtendsDifferentSpreadFloatPutParameters = ExtendsDifferentSpreadFloatPutBodyParam & RequestParameters;

export declare interface ExtendsDifferentSpreadModelArrayGet {
    get(options?: ExtendsDifferentSpreadModelArrayGetParameters): StreamableMethod<ExtendsDifferentSpreadModelArrayGet200Response>;
    put(options: ExtendsDifferentSpreadModelArrayPutParameters): StreamableMethod<ExtendsDifferentSpreadModelArrayPut204Response>;
}

export declare interface ExtendsDifferentSpreadModelArrayGet200Response extends HttpResponse {
    status: "200";
    body: DifferentSpreadModelArrayDerivedOutput;
}

export declare type ExtendsDifferentSpreadModelArrayGetParameters = RequestParameters;

export declare interface ExtendsDifferentSpreadModelArrayPut204Response extends HttpResponse {
    status: "204";
}

export declare interface ExtendsDifferentSpreadModelArrayPutBodyParam {
    body: DifferentSpreadModelArrayDerived;
}

export declare type ExtendsDifferentSpreadModelArrayPutParameters = ExtendsDifferentSpreadModelArrayPutBodyParam & RequestParameters;

export declare interface ExtendsDifferentSpreadModelGet {
    get(options?: ExtendsDifferentSpreadModelGetParameters): StreamableMethod<ExtendsDifferentSpreadModelGet200Response>;
    put(options: ExtendsDifferentSpreadModelPutParameters): StreamableMethod<ExtendsDifferentSpreadModelPut204Response>;
}

export declare interface ExtendsDifferentSpreadModelGet200Response extends HttpResponse {
    status: "200";
    body: DifferentSpreadModelDerivedOutput;
}

export declare type ExtendsDifferentSpreadModelGetParameters = RequestParameters;

export declare interface ExtendsDifferentSpreadModelPut204Response extends HttpResponse {
    status: "204";
}

export declare interface ExtendsDifferentSpreadModelPutBodyParam {
    body: DifferentSpreadModelDerived;
}

export declare type ExtendsDifferentSpreadModelPutParameters = ExtendsDifferentSpreadModelPutBodyParam & RequestParameters;

export declare interface ExtendsDifferentSpreadStringGet {
    get(options?: ExtendsDifferentSpreadStringGetParameters): StreamableMethod<ExtendsDifferentSpreadStringGet200Response>;
    put(options: ExtendsDifferentSpreadStringPutParameters): StreamableMethod<ExtendsDifferentSpreadStringPut204Response>;
}

export declare interface ExtendsDifferentSpreadStringGet200Response extends HttpResponse {
    status: "200";
    body: DifferentSpreadStringDerivedOutput;
}

export declare type ExtendsDifferentSpreadStringGetParameters = RequestParameters;

export declare interface ExtendsDifferentSpreadStringPut204Response extends HttpResponse {
    status: "204";
}

export declare interface ExtendsDifferentSpreadStringPutBodyParam {
    body: DifferentSpreadStringDerived;
}

export declare type ExtendsDifferentSpreadStringPutParameters = ExtendsDifferentSpreadStringPutBodyParam & RequestParameters;

export declare interface ExtendsFloatAdditionalProperties extends Record<string, number> {
    id: number;
}

export declare interface ExtendsFloatAdditionalPropertiesOutput extends Record<string, number> {
    id: number;
}

export declare interface ExtendsFloatGet {
    get(options?: ExtendsFloatGetParameters): StreamableMethod<ExtendsFloatGet200Response>;
    put(options: ExtendsFloatPutParameters): StreamableMethod<ExtendsFloatPut204Response>;
}

export declare interface ExtendsFloatGet200Response extends HttpResponse {
    status: "200";
    body: ExtendsFloatAdditionalPropertiesOutput;
}

export declare type ExtendsFloatGetParameters = RequestParameters;

export declare interface ExtendsFloatPut204Response extends HttpResponse {
    status: "204";
}

export declare interface ExtendsFloatPutBodyParam {
    body: ExtendsFloatAdditionalProperties;
}

export declare type ExtendsFloatPutParameters = ExtendsFloatPutBodyParam & RequestParameters;

export declare interface ExtendsModelAdditionalProperties extends Record<string, ModelForRecord> {
    knownProp: ModelForRecord;
}

export declare interface ExtendsModelAdditionalPropertiesOutput extends Record<string, ModelForRecordOutput> {
    knownProp: ModelForRecordOutput;
}

export declare interface ExtendsModelArrayAdditionalProperties extends Record<string, Array<ModelForRecord>> {
    knownProp: Array<ModelForRecord>;
}

export declare interface ExtendsModelArrayAdditionalPropertiesOutput extends Record<string, Array<ModelForRecordOutput>> {
    knownProp: Array<ModelForRecordOutput>;
}

export declare interface ExtendsModelArrayGet {
    get(options?: ExtendsModelArrayGetParameters): StreamableMethod<ExtendsModelArrayGet200Response>;
    put(options: ExtendsModelArrayPutParameters): StreamableMethod<ExtendsModelArrayPut204Response>;
}

export declare interface ExtendsModelArrayGet200Response extends HttpResponse {
    status: "200";
    body: ExtendsModelArrayAdditionalPropertiesOutput;
}

export declare type ExtendsModelArrayGetParameters = RequestParameters;

export declare interface ExtendsModelArrayPut204Response extends HttpResponse {
    status: "204";
}

export declare interface ExtendsModelArrayPutBodyParam {
    body: ExtendsModelArrayAdditionalProperties;
}

export declare type ExtendsModelArrayPutParameters = ExtendsModelArrayPutBodyParam & RequestParameters;

export declare interface ExtendsModelGet {
    get(options?: ExtendsModelGetParameters): StreamableMethod<ExtendsModelGet200Response>;
    put(options: ExtendsModelPutParameters): StreamableMethod<ExtendsModelPut204Response>;
}

export declare interface ExtendsModelGet200Response extends HttpResponse {
    status: "200";
    body: ExtendsModelAdditionalPropertiesOutput;
}

export declare type ExtendsModelGetParameters = RequestParameters;

export declare interface ExtendsModelPut204Response extends HttpResponse {
    status: "204";
}

export declare interface ExtendsModelPutBodyParam {
    body: ExtendsModelAdditionalProperties;
}

export declare type ExtendsModelPutParameters = ExtendsModelPutBodyParam & RequestParameters;

export declare interface ExtendsStringAdditionalProperties extends Record<string, string> {
    name: string;
}

export declare interface ExtendsStringAdditionalPropertiesOutput extends Record<string, string> {
    name: string;
}

export declare interface ExtendsStringGet {
    get(options?: ExtendsStringGetParameters): StreamableMethod<ExtendsStringGet200Response>;
    put(options: ExtendsStringPutParameters): StreamableMethod<ExtendsStringPut204Response>;
}

export declare interface ExtendsStringGet200Response extends HttpResponse {
    status: "200";
    body: ExtendsStringAdditionalPropertiesOutput;
}

export declare type ExtendsStringGetParameters = RequestParameters;

export declare interface ExtendsStringPut204Response extends HttpResponse {
    status: "204";
}

export declare interface ExtendsStringPutBodyParam {
    body: ExtendsStringAdditionalProperties;
}

export declare type ExtendsStringPutParameters = ExtendsStringPutBodyParam & RequestParameters;

export declare interface ExtendsUnknownAdditionalProperties extends Record<string, unknown> {
    name: string;
}

export declare interface ExtendsUnknownAdditionalPropertiesDerived extends ExtendsUnknownAdditionalProperties {
    index: number;
    age?: number;
}

export declare interface ExtendsUnknownAdditionalPropertiesDerivedOutput extends ExtendsUnknownAdditionalPropertiesOutput {
    index: number;
    age?: number;
}

export declare type ExtendsUnknownAdditionalPropertiesDiscriminated = ExtendsUnknownAdditionalPropertiesDiscriminatedParent | ExtendsUnknownAdditionalPropertiesDiscriminatedDerived;

export declare interface ExtendsUnknownAdditionalPropertiesDiscriminatedDerived extends ExtendsUnknownAdditionalPropertiesDiscriminatedParent {
    kind: "derived";
    index: number;
    age?: number;
}

export declare interface ExtendsUnknownAdditionalPropertiesDiscriminatedDerivedOutput extends ExtendsUnknownAdditionalPropertiesDiscriminatedOutputParent {
    kind: "derived";
    index: number;
    age?: number;
}

export declare type ExtendsUnknownAdditionalPropertiesDiscriminatedOutput = ExtendsUnknownAdditionalPropertiesDiscriminatedOutputParent | ExtendsUnknownAdditionalPropertiesDiscriminatedDerivedOutput;

export declare interface ExtendsUnknownAdditionalPropertiesDiscriminatedOutputParent extends Record<string, any> {
    name: string;
    kind: string;
}

export declare interface ExtendsUnknownAdditionalPropertiesDiscriminatedParent extends Record<string, unknown> {
    name: string;
    kind: string;
}

export declare interface ExtendsUnknownAdditionalPropertiesOutput extends Record<string, any> {
    name: string;
}

export declare interface ExtendsUnknownDerivedGet {
    get(options?: ExtendsUnknownDerivedGetParameters): StreamableMethod<ExtendsUnknownDerivedGet200Response>;
    put(options: ExtendsUnknownDerivedPutParameters): StreamableMethod<ExtendsUnknownDerivedPut204Response>;
}

export declare interface ExtendsUnknownDerivedGet200Response extends HttpResponse {
    status: "200";
    body: ExtendsUnknownAdditionalPropertiesDerivedOutput;
}

export declare type ExtendsUnknownDerivedGetParameters = RequestParameters;

export declare interface ExtendsUnknownDerivedPut204Response extends HttpResponse {
    status: "204";
}

export declare interface ExtendsUnknownDerivedPutBodyParam {
    body: ExtendsUnknownAdditionalPropertiesDerived;
}

export declare type ExtendsUnknownDerivedPutParameters = ExtendsUnknownDerivedPutBodyParam & RequestParameters;

export declare interface ExtendsUnknownDiscriminatedGet {
    get(options?: ExtendsUnknownDiscriminatedGetParameters): StreamableMethod<ExtendsUnknownDiscriminatedGet200Response>;
    put(options: ExtendsUnknownDiscriminatedPutParameters): StreamableMethod<ExtendsUnknownDiscriminatedPut204Response>;
}

export declare interface ExtendsUnknownDiscriminatedGet200Response extends HttpResponse {
    status: "200";
    body: ExtendsUnknownAdditionalPropertiesDiscriminatedOutput;
}

export declare type ExtendsUnknownDiscriminatedGetParameters = RequestParameters;

export declare interface ExtendsUnknownDiscriminatedPut204Response extends HttpResponse {
    status: "204";
}

export declare interface ExtendsUnknownDiscriminatedPutBodyParam {
    body: ExtendsUnknownAdditionalPropertiesDiscriminated;
}

export declare type ExtendsUnknownDiscriminatedPutParameters = ExtendsUnknownDiscriminatedPutBodyParam & RequestParameters;

export declare interface ExtendsUnknownGet {
    get(options?: ExtendsUnknownGetParameters): StreamableMethod<ExtendsUnknownGet200Response>;
    put(options: ExtendsUnknownPutParameters): StreamableMethod<ExtendsUnknownPut204Response>;
}

export declare interface ExtendsUnknownGet200Response extends HttpResponse {
    status: "200";
    body: ExtendsUnknownAdditionalPropertiesOutput;
}

export declare type ExtendsUnknownGetParameters = RequestParameters;

export declare interface ExtendsUnknownPut204Response extends HttpResponse {
    status: "204";
}

export declare interface ExtendsUnknownPutBodyParam {
    body: ExtendsUnknownAdditionalProperties;
}

export declare type ExtendsUnknownPutParameters = ExtendsUnknownPutBodyParam & RequestParameters;

export declare interface IsFloatAdditionalProperties extends Record<string, number> {
    id: number;
}

export declare interface IsFloatAdditionalPropertiesOutput extends Record<string, number> {
    id: number;
}

export declare interface IsFloatGet {
    get(options?: IsFloatGetParameters): StreamableMethod<IsFloatGet200Response>;
    put(options: IsFloatPutParameters): StreamableMethod<IsFloatPut204Response>;
}

export declare interface IsFloatGet200Response extends HttpResponse {
    status: "200";
    body: IsFloatAdditionalPropertiesOutput;
}

export declare type IsFloatGetParameters = RequestParameters;

export declare interface IsFloatPut204Response extends HttpResponse {
    status: "204";
}

export declare interface IsFloatPutBodyParam {
    body: IsFloatAdditionalProperties;
}

export declare type IsFloatPutParameters = IsFloatPutBodyParam & RequestParameters;

export declare interface IsModelAdditionalProperties extends Record<string, ModelForRecord> {
    knownProp: ModelForRecord;
}

export declare interface IsModelAdditionalPropertiesOutput extends Record<string, ModelForRecordOutput> {
    knownProp: ModelForRecordOutput;
}

export declare interface IsModelArrayAdditionalProperties extends Record<string, Array<ModelForRecord>> {
    knownProp: Array<ModelForRecord>;
}

export declare interface IsModelArrayAdditionalPropertiesOutput extends Record<string, Array<ModelForRecordOutput>> {
    knownProp: Array<ModelForRecordOutput>;
}

export declare interface IsModelArrayGet {
    get(options?: IsModelArrayGetParameters): StreamableMethod<IsModelArrayGet200Response>;
    put(options: IsModelArrayPutParameters): StreamableMethod<IsModelArrayPut204Response>;
}

export declare interface IsModelArrayGet200Response extends HttpResponse {
    status: "200";
    body: IsModelArrayAdditionalPropertiesOutput;
}

export declare type IsModelArrayGetParameters = RequestParameters;

export declare interface IsModelArrayPut204Response extends HttpResponse {
    status: "204";
}

export declare interface IsModelArrayPutBodyParam {
    body: IsModelArrayAdditionalProperties;
}

export declare type IsModelArrayPutParameters = IsModelArrayPutBodyParam & RequestParameters;

export declare interface IsModelGet {
    get(options?: IsModelGetParameters): StreamableMethod<IsModelGet200Response>;
    put(options: IsModelPutParameters): StreamableMethod<IsModelPut204Response>;
}

export declare interface IsModelGet200Response extends HttpResponse {
    status: "200";
    body: IsModelAdditionalPropertiesOutput;
}

export declare type IsModelGetParameters = RequestParameters;

export declare interface IsModelPut204Response extends HttpResponse {
    status: "204";
}

export declare interface IsModelPutBodyParam {
    body: IsModelAdditionalProperties;
}

export declare type IsModelPutParameters = IsModelPutBodyParam & RequestParameters;

export declare interface IsStringAdditionalProperties extends Record<string, string> {
    name: string;
}

export declare interface IsStringAdditionalPropertiesOutput extends Record<string, string> {
    name: string;
}

export declare interface IsStringGet {
    get(options?: IsStringGetParameters): StreamableMethod<IsStringGet200Response>;
    put(options: IsStringPutParameters): StreamableMethod<IsStringPut204Response>;
}

export declare interface IsStringGet200Response extends HttpResponse {
    status: "200";
    body: IsStringAdditionalPropertiesOutput;
}

export declare type IsStringGetParameters = RequestParameters;

export declare interface IsStringPut204Response extends HttpResponse {
    status: "204";
}

export declare interface IsStringPutBodyParam {
    body: IsStringAdditionalProperties;
}

export declare type IsStringPutParameters = IsStringPutBodyParam & RequestParameters;

export declare interface IsUnknownAdditionalProperties extends Record<string, unknown> {
    name: string;
}

export declare interface IsUnknownAdditionalPropertiesDerived extends IsUnknownAdditionalProperties {
    index: number;
    age?: number;
}

export declare interface IsUnknownAdditionalPropertiesDerivedOutput extends IsUnknownAdditionalPropertiesOutput {
    index: number;
    age?: number;
}

export declare type IsUnknownAdditionalPropertiesDiscriminated = IsUnknownAdditionalPropertiesDiscriminatedParent | IsUnknownAdditionalPropertiesDiscriminatedDerived;

export declare interface IsUnknownAdditionalPropertiesDiscriminatedDerived extends IsUnknownAdditionalPropertiesDiscriminatedParent {
    kind: "derived";
    index: number;
    age?: number;
}

export declare interface IsUnknownAdditionalPropertiesDiscriminatedDerivedOutput extends IsUnknownAdditionalPropertiesDiscriminatedOutputParent {
    kind: "derived";
    index: number;
    age?: number;
}

export declare type IsUnknownAdditionalPropertiesDiscriminatedOutput = IsUnknownAdditionalPropertiesDiscriminatedOutputParent | IsUnknownAdditionalPropertiesDiscriminatedDerivedOutput;

export declare interface IsUnknownAdditionalPropertiesDiscriminatedOutputParent extends Record<string, any> {
    name: string;
    kind: string;
}

export declare interface IsUnknownAdditionalPropertiesDiscriminatedParent extends Record<string, unknown> {
    name: string;
    kind: string;
}

export declare interface IsUnknownAdditionalPropertiesOutput extends Record<string, any> {
    name: string;
}

export declare interface IsUnknownDerivedGet {
    get(options?: IsUnknownDerivedGetParameters): StreamableMethod<IsUnknownDerivedGet200Response>;
    put(options: IsUnknownDerivedPutParameters): StreamableMethod<IsUnknownDerivedPut204Response>;
}

export declare interface IsUnknownDerivedGet200Response extends HttpResponse {
    status: "200";
    body: IsUnknownAdditionalPropertiesDerivedOutput;
}

export declare type IsUnknownDerivedGetParameters = RequestParameters;

export declare interface IsUnknownDerivedPut204Response extends HttpResponse {
    status: "204";
}

export declare interface IsUnknownDerivedPutBodyParam {
    body: IsUnknownAdditionalPropertiesDerived;
}

export declare type IsUnknownDerivedPutParameters = IsUnknownDerivedPutBodyParam & RequestParameters;

export declare interface IsUnknownDiscriminatedGet {
    get(options?: IsUnknownDiscriminatedGetParameters): StreamableMethod<IsUnknownDiscriminatedGet200Response>;
    put(options: IsUnknownDiscriminatedPutParameters): StreamableMethod<IsUnknownDiscriminatedPut204Response>;
}

export declare interface IsUnknownDiscriminatedGet200Response extends HttpResponse {
    status: "200";
    body: IsUnknownAdditionalPropertiesDiscriminatedOutput;
}

export declare type IsUnknownDiscriminatedGetParameters = RequestParameters;

export declare interface IsUnknownDiscriminatedPut204Response extends HttpResponse {
    status: "204";
}

export declare interface IsUnknownDiscriminatedPutBodyParam {
    body: IsUnknownAdditionalPropertiesDiscriminated;
}

export declare type IsUnknownDiscriminatedPutParameters = IsUnknownDiscriminatedPutBodyParam & RequestParameters;

export declare interface IsUnknownGet {
    get(options?: IsUnknownGetParameters): StreamableMethod<IsUnknownGet200Response>;
    put(options: IsUnknownPutParameters): StreamableMethod<IsUnknownPut204Response>;
}

export declare interface IsUnknownGet200Response extends HttpResponse {
    status: "200";
    body: IsUnknownAdditionalPropertiesOutput;
}

export declare type IsUnknownGetParameters = RequestParameters;

export declare interface IsUnknownPut204Response extends HttpResponse {
    status: "204";
}

export declare interface IsUnknownPutBodyParam {
    body: IsUnknownAdditionalProperties;
}

export declare type IsUnknownPutParameters = IsUnknownPutBodyParam & RequestParameters;

export declare interface ModelForRecord {
    state: string;
}

export declare interface ModelForRecordOutput {
    state: string;
}

export declare interface MultipleSpreadGet {
    get(options?: MultipleSpreadGetParameters): StreamableMethod<MultipleSpreadGet200Response>;
    put(options: MultipleSpreadPutParameters): StreamableMethod<MultipleSpreadPut204Response>;
}

export declare interface MultipleSpreadGet200Response extends HttpResponse {
    status: "200";
    body: MultipleSpreadRecordOutput;
}

export declare type MultipleSpreadGetParameters = RequestParameters;

export declare interface MultipleSpreadPut204Response extends HttpResponse {
    status: "204";
}

export declare interface MultipleSpreadPutBodyParam {
    body: MultipleSpreadRecord;
}

export declare type MultipleSpreadPutParameters = MultipleSpreadPutBodyParam & RequestParameters;

export declare interface MultipleSpreadRecord extends Record<string, unknown> {
    flag: boolean;
}

export declare interface MultipleSpreadRecordOutput extends Record<string, any> {
    flag: boolean;
}

export declare interface Routes {
    (path: "/type/property/additionalProperties/extendsRecordUnknown"): ExtendsUnknownGet;
    (path: "/type/property/additionalProperties/extendsRecordUnknownDerived"): ExtendsUnknownDerivedGet;
    (path: "/type/property/additionalProperties/extendsUnknownDiscriminated"): ExtendsUnknownDiscriminatedGet;
    (path: "/type/property/additionalProperties/isRecordUnknown"): IsUnknownGet;
    (path: "/type/property/additionalProperties/isRecordUnknownDerived"): IsUnknownDerivedGet;
    (path: "/type/property/additionalProperties/isUnknownDiscriminated"): IsUnknownDiscriminatedGet;
    (path: "/type/property/additionalProperties/extendsRecordString"): ExtendsStringGet;
    (path: "/type/property/additionalProperties/isRecordstring"): IsStringGet;
    (path: "/type/property/additionalProperties/spreadRecordString"): SpreadStringGet;
    (path: "/type/property/additionalProperties/extendsRecordFloat"): ExtendsFloatGet;
    (path: "/type/property/additionalProperties/isRecordFloat"): IsFloatGet;
    (path: "/type/property/additionalProperties/spreadRecordFloat"): SpreadFloatGet;
    (path: "/type/property/additionalProperties/extendsRecordModel"): ExtendsModelGet;
    (path: "/type/property/additionalProperties/isRecordModel"): IsModelGet;
    (path: "/type/property/additionalProperties/spreadRecordModel"): SpreadModelGet;
    (path: "/type/property/additionalProperties/extendsRecordModelArray"): ExtendsModelArrayGet;
    (path: "/type/property/additionalProperties/isRecordModelArray"): IsModelArrayGet;
    (path: "/type/property/additionalProperties/spreadRecordModelArray"): SpreadModelArrayGet;
    (path: "/type/property/additionalProperties/spreadDifferentRecordString"): SpreadDifferentStringGet;
    (path: "/type/property/additionalProperties/spreadDifferentRecordFloat"): SpreadDifferentFloatGet;
    (path: "/type/property/additionalProperties/spreadDifferentRecordModel"): SpreadDifferentModelGet;
    (path: "/type/property/additionalProperties/spreadDifferentRecordModelArray"): SpreadDifferentModelArrayGet;
    (path: "/type/property/additionalProperties/extendsDifferentSpreadString"): ExtendsDifferentSpreadStringGet;
    (path: "/type/property/additionalProperties/extendsDifferentSpreadFloat"): ExtendsDifferentSpreadFloatGet;
    (path: "/type/property/additionalProperties/extendsDifferentSpreadModel"): ExtendsDifferentSpreadModelGet;
    (path: "/type/property/additionalProperties/extendsDifferentSpreadModelArray"): ExtendsDifferentSpreadModelArrayGet;
    (path: "/type/property/additionalProperties/multipleSpreadRecord"): MultipleSpreadGet;
    (path: "/type/property/additionalProperties/spreadRecordUnion"): SpreadRecordUnionGet;
    (path: "/type/property/additionalProperties/spreadRecordNonDiscriminatedUnion"): SpreadRecordNonDiscriminatedUnionGet;
    (path: "/type/property/additionalProperties/spreadRecordNonDiscriminatedUnion2"): SpreadRecordNonDiscriminatedUnion2Get;
    (path: "/type/property/additionalProperties/spreadRecordNonDiscriminatedUnion3"): SpreadRecordNonDiscriminatedUnion3Get;
}

export declare interface SpreadDifferentFloatGet {
    get(options?: SpreadDifferentFloatGetParameters): StreamableMethod<SpreadDifferentFloatGet200Response>;
    put(options: SpreadDifferentFloatPutParameters): StreamableMethod<SpreadDifferentFloatPut204Response>;
}

export declare interface SpreadDifferentFloatGet200Response extends HttpResponse {
    status: "200";
    body: DifferentSpreadFloatRecordOutput;
}

export declare type SpreadDifferentFloatGetParameters = RequestParameters;

export declare interface SpreadDifferentFloatPut204Response extends HttpResponse {
    status: "204";
}

export declare interface SpreadDifferentFloatPutBodyParam {
    body: DifferentSpreadFloatRecord;
}

export declare type SpreadDifferentFloatPutParameters = SpreadDifferentFloatPutBodyParam & RequestParameters;

export declare interface SpreadDifferentModelArrayGet {
    get(options?: SpreadDifferentModelArrayGetParameters): StreamableMethod<SpreadDifferentModelArrayGet200Response>;
    put(options: SpreadDifferentModelArrayPutParameters): StreamableMethod<SpreadDifferentModelArrayPut204Response>;
}

export declare interface SpreadDifferentModelArrayGet200Response extends HttpResponse {
    status: "200";
    body: DifferentSpreadModelArrayRecordOutput;
}

export declare type SpreadDifferentModelArrayGetParameters = RequestParameters;

export declare interface SpreadDifferentModelArrayPut204Response extends HttpResponse {
    status: "204";
}

export declare interface SpreadDifferentModelArrayPutBodyParam {
    body: DifferentSpreadModelArrayRecord;
}

export declare type SpreadDifferentModelArrayPutParameters = SpreadDifferentModelArrayPutBodyParam & RequestParameters;

export declare interface SpreadDifferentModelGet {
    get(options?: SpreadDifferentModelGetParameters): StreamableMethod<SpreadDifferentModelGet200Response>;
    put(options: SpreadDifferentModelPutParameters): StreamableMethod<SpreadDifferentModelPut204Response>;
}

export declare interface SpreadDifferentModelGet200Response extends HttpResponse {
    status: "200";
    body: DifferentSpreadModelRecordOutput;
}

export declare type SpreadDifferentModelGetParameters = RequestParameters;

export declare interface SpreadDifferentModelPut204Response extends HttpResponse {
    status: "204";
}

export declare interface SpreadDifferentModelPutBodyParam {
    body: DifferentSpreadModelRecord;
}

export declare type SpreadDifferentModelPutParameters = SpreadDifferentModelPutBodyParam & RequestParameters;

export declare interface SpreadDifferentStringGet {
    get(options?: SpreadDifferentStringGetParameters): StreamableMethod<SpreadDifferentStringGet200Response>;
    put(options: SpreadDifferentStringPutParameters): StreamableMethod<SpreadDifferentStringPut204Response>;
}

export declare interface SpreadDifferentStringGet200Response extends HttpResponse {
    status: "200";
    body: DifferentSpreadStringRecordOutput;
}

export declare type SpreadDifferentStringGetParameters = RequestParameters;

export declare interface SpreadDifferentStringPut204Response extends HttpResponse {
    status: "204";
}

export declare interface SpreadDifferentStringPutBodyParam {
    body: DifferentSpreadStringRecord;
}

export declare type SpreadDifferentStringPutParameters = SpreadDifferentStringPutBodyParam & RequestParameters;

export declare interface SpreadFloatGet {
    get(options?: SpreadFloatGetParameters): StreamableMethod<SpreadFloatGet200Response>;
    put(options: SpreadFloatPutParameters): StreamableMethod<SpreadFloatPut204Response>;
}

export declare interface SpreadFloatGet200Response extends HttpResponse {
    status: "200";
    body: SpreadFloatRecordOutput;
}

export declare type SpreadFloatGetParameters = RequestParameters;

export declare interface SpreadFloatPut204Response extends HttpResponse {
    status: "204";
}

export declare interface SpreadFloatPutBodyParam {
    body: SpreadFloatRecord;
}

export declare type SpreadFloatPutParameters = SpreadFloatPutBodyParam & RequestParameters;

export declare interface SpreadFloatRecord extends Record<string, number> {
    id: number;
}

export declare interface SpreadFloatRecordOutput extends Record<string, number> {
    id: number;
}

export declare interface SpreadModelArrayGet {
    get(options?: SpreadModelArrayGetParameters): StreamableMethod<SpreadModelArrayGet200Response>;
    put(options: SpreadModelArrayPutParameters): StreamableMethod<SpreadModelArrayPut204Response>;
}

export declare interface SpreadModelArrayGet200Response extends HttpResponse {
    status: "200";
    body: SpreadModelArrayRecordOutput;
}

export declare type SpreadModelArrayGetParameters = RequestParameters;

export declare interface SpreadModelArrayPut204Response extends HttpResponse {
    status: "204";
}

export declare interface SpreadModelArrayPutBodyParam {
    body: SpreadModelArrayRecord;
}

export declare type SpreadModelArrayPutParameters = SpreadModelArrayPutBodyParam & RequestParameters;

export declare interface SpreadModelArrayRecord extends Record<string, Array<ModelForRecord>> {
    knownProp: Array<ModelForRecord>;
}

export declare interface SpreadModelArrayRecordOutput extends Record<string, Array<ModelForRecordOutput>> {
    knownProp: Array<ModelForRecordOutput>;
}

export declare interface SpreadModelGet {
    get(options?: SpreadModelGetParameters): StreamableMethod<SpreadModelGet200Response>;
    put(options: SpreadModelPutParameters): StreamableMethod<SpreadModelPut204Response>;
}

export declare interface SpreadModelGet200Response extends HttpResponse {
    status: "200";
    body: SpreadModelRecordOutput;
}

export declare type SpreadModelGetParameters = RequestParameters;

export declare interface SpreadModelPut204Response extends HttpResponse {
    status: "204";
}

export declare interface SpreadModelPutBodyParam {
    body: SpreadModelRecord;
}

export declare type SpreadModelPutParameters = SpreadModelPutBodyParam & RequestParameters;

export declare interface SpreadModelRecord extends Record<string, ModelForRecord> {
    knownProp: ModelForRecord;
}

export declare interface SpreadModelRecordOutput extends Record<string, ModelForRecordOutput> {
    knownProp: ModelForRecordOutput;
}

export declare interface SpreadRecordForNonDiscriminatedUnion extends Record<string, unknown> {
    name: string;
}

export declare interface SpreadRecordForNonDiscriminatedUnion2 extends Record<string, unknown> {
    name: string;
}

export declare interface SpreadRecordForNonDiscriminatedUnion2Output extends Record<string, any> {
    name: string;
}

export declare interface SpreadRecordForNonDiscriminatedUnion3 extends Record<string, unknown> {
    name: string;
}

export declare interface SpreadRecordForNonDiscriminatedUnion3Output extends Record<string, any> {
    name: string;
}

export declare interface SpreadRecordForNonDiscriminatedUnionOutput extends Record<string, any> {
    name: string;
}

export declare interface SpreadRecordForUnion extends Record<string, unknown> {
    flag: boolean;
}

export declare interface SpreadRecordForUnionOutput extends Record<string, any> {
    flag: boolean;
}

export declare interface SpreadRecordNonDiscriminatedUnion2Get {
    get(options?: SpreadRecordNonDiscriminatedUnion2GetParameters): StreamableMethod<SpreadRecordNonDiscriminatedUnion2Get200Response>;
    put(options: SpreadRecordNonDiscriminatedUnion2PutParameters): StreamableMethod<SpreadRecordNonDiscriminatedUnion2Put204Response>;
}

export declare interface SpreadRecordNonDiscriminatedUnion2Get200Response extends HttpResponse {
    status: "200";
    body: SpreadRecordForNonDiscriminatedUnion2Output;
}

export declare type SpreadRecordNonDiscriminatedUnion2GetParameters = RequestParameters;

export declare interface SpreadRecordNonDiscriminatedUnion2Put204Response extends HttpResponse {
    status: "204";
}

export declare interface SpreadRecordNonDiscriminatedUnion2PutBodyParam {
    body: SpreadRecordForNonDiscriminatedUnion2;
}

export declare type SpreadRecordNonDiscriminatedUnion2PutParameters = SpreadRecordNonDiscriminatedUnion2PutBodyParam & RequestParameters;

export declare interface SpreadRecordNonDiscriminatedUnion3Get {
    get(options?: SpreadRecordNonDiscriminatedUnion3GetParameters): StreamableMethod<SpreadRecordNonDiscriminatedUnion3Get200Response>;
    put(options: SpreadRecordNonDiscriminatedUnion3PutParameters): StreamableMethod<SpreadRecordNonDiscriminatedUnion3Put204Response>;
}

export declare interface SpreadRecordNonDiscriminatedUnion3Get200Response extends HttpResponse {
    status: "200";
    body: SpreadRecordForNonDiscriminatedUnion3Output;
}

export declare type SpreadRecordNonDiscriminatedUnion3GetParameters = RequestParameters;

export declare interface SpreadRecordNonDiscriminatedUnion3Put204Response extends HttpResponse {
    status: "204";
}

export declare interface SpreadRecordNonDiscriminatedUnion3PutBodyParam {
    body: SpreadRecordForNonDiscriminatedUnion3;
}

export declare type SpreadRecordNonDiscriminatedUnion3PutParameters = SpreadRecordNonDiscriminatedUnion3PutBodyParam & RequestParameters;

export declare interface SpreadRecordNonDiscriminatedUnionGet {
    get(options?: SpreadRecordNonDiscriminatedUnionGetParameters): StreamableMethod<SpreadRecordNonDiscriminatedUnionGet200Response>;
    put(options: SpreadRecordNonDiscriminatedUnionPutParameters): StreamableMethod<SpreadRecordNonDiscriminatedUnionPut204Response>;
}

export declare interface SpreadRecordNonDiscriminatedUnionGet200Response extends HttpResponse {
    status: "200";
    body: SpreadRecordForNonDiscriminatedUnionOutput;
}

export declare type SpreadRecordNonDiscriminatedUnionGetParameters = RequestParameters;

export declare interface SpreadRecordNonDiscriminatedUnionPut204Response extends HttpResponse {
    status: "204";
}

export declare interface SpreadRecordNonDiscriminatedUnionPutBodyParam {
    body: SpreadRecordForNonDiscriminatedUnion;
}

export declare type SpreadRecordNonDiscriminatedUnionPutParameters = SpreadRecordNonDiscriminatedUnionPutBodyParam & RequestParameters;

export declare interface SpreadRecordUnionGet {
    get(options?: SpreadRecordUnionGetParameters): StreamableMethod<SpreadRecordUnionGet200Response>;
    put(options: SpreadRecordUnionPutParameters): StreamableMethod<SpreadRecordUnionPut204Response>;
}

export declare interface SpreadRecordUnionGet200Response extends HttpResponse {
    status: "200";
    body: SpreadRecordForUnionOutput;
}

export declare type SpreadRecordUnionGetParameters = RequestParameters;

export declare interface SpreadRecordUnionPut204Response extends HttpResponse {
    status: "204";
}

export declare interface SpreadRecordUnionPutBodyParam {
    body: SpreadRecordForUnion;
}

export declare type SpreadRecordUnionPutParameters = SpreadRecordUnionPutBodyParam & RequestParameters;

export declare interface SpreadStringGet {
    get(options?: SpreadStringGetParameters): StreamableMethod<SpreadStringGet200Response>;
    put(options: SpreadStringPutParameters): StreamableMethod<SpreadStringPut204Response>;
}

export declare interface SpreadStringGet200Response extends HttpResponse {
    status: "200";
    body: SpreadStringRecordOutput;
}

export declare type SpreadStringGetParameters = RequestParameters;

export declare interface SpreadStringPut204Response extends HttpResponse {
    status: "204";
}

export declare interface SpreadStringPutBodyParam {
    body: SpreadStringRecord;
}

export declare type SpreadStringPutParameters = SpreadStringPutBodyParam & RequestParameters;

export declare interface SpreadStringRecord extends Record<string, string> {
    name: string;
}

export declare interface SpreadStringRecordOutput extends Record<string, string> {
    name: string;
}

export declare interface WidgetData0 {
    kind: "kind0";
    fooProp: string;
}

export declare interface WidgetData0Output {
    kind: "kind0";
    fooProp: string;
}

export declare interface WidgetData1 {
    kind: "kind1";
    start: Date | string;
    end?: Date | string;
}

export declare interface WidgetData1Output {
    kind: "kind1";
    start: string;
    end?: string;
}

export declare interface WidgetData2 {
    kind: "kind1";
    start: string;
}

export declare interface WidgetData2Output {
    kind: "kind1";
    start: string;
}

export { }

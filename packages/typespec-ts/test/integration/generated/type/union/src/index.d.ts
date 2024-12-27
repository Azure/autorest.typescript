import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare interface Cat {
    name: string;
}

export declare interface CatOutput {
    name: string;
}

declare function createClient(options?: UnionsClientOptions): UnionsClient;
export default createClient;

export declare interface Dog {
    bark: string;
}

export declare interface DogOutput {
    bark: string;
}

export declare interface EnumsOnlyCases {
    lr: Lr | Ud;
    ud: Ud | Ud;
}

export declare interface EnumsOnlyCasesOutput {
    lr: LrOutput | UdOutput;
    ud: UdOutput | UdOutput;
}

export declare interface EnumsOnlyGet {
    get(options?: EnumsOnlyGetParameters): StreamableMethod<EnumsOnlyGet200Response>;
    post(options: EnumsOnlySendParameters): StreamableMethod<EnumsOnlySend204Response>;
}

export declare interface EnumsOnlyGet200Response extends HttpResponse {
    status: "200";
    body: {
        prop: EnumsOnlyCasesOutput;
    };
}

export declare type EnumsOnlyGetParameters = RequestParameters;

export declare interface EnumsOnlySend204Response extends HttpResponse {
    status: "204";
}

export declare interface EnumsOnlySendBodyParam {
    body: {
        prop: EnumsOnlyCases;
    };
}

export declare type EnumsOnlySendParameters = EnumsOnlySendBodyParam & RequestParameters;

export declare interface FloatsOnlyGet {
    get(options?: FloatsOnlyGetParameters): StreamableMethod<FloatsOnlyGet200Response>;
    post(options: FloatsOnlySendParameters): StreamableMethod<FloatsOnlySend204Response>;
}

export declare interface FloatsOnlyGet200Response extends HttpResponse {
    status: "200";
    body: {
        prop: 1.1 | 2.2 | 3.3;
    };
}

export declare type FloatsOnlyGetParameters = RequestParameters;

export declare interface FloatsOnlySend204Response extends HttpResponse {
    status: "204";
}

export declare interface FloatsOnlySendBodyParam {
    body: {
        prop: 1.1 | 2.2 | 3.3;
    };
}

export declare type FloatsOnlySendParameters = FloatsOnlySendBodyParam & RequestParameters;

export declare interface IntsOnlyGet {
    get(options?: IntsOnlyGetParameters): StreamableMethod<IntsOnlyGet200Response>;
    post(options: IntsOnlySendParameters): StreamableMethod<IntsOnlySend204Response>;
}

export declare interface IntsOnlyGet200Response extends HttpResponse {
    status: "200";
    body: {
        prop: 1 | 2 | 3;
    };
}

export declare type IntsOnlyGetParameters = RequestParameters;

export declare interface IntsOnlySend204Response extends HttpResponse {
    status: "204";
}

export declare interface IntsOnlySendBodyParam {
    body: {
        prop: 1 | 2 | 3;
    };
}

export declare type IntsOnlySendParameters = IntsOnlySendBodyParam & RequestParameters;

export declare type Lr = "left" | "right";

export declare type LrOutput = "left" | "right";

export declare interface MixedLiteralsCases {
    stringLiteral: "a" | 2 | 3.3 | true;
    intLiteral: "a" | 2 | 3.3 | true;
    floatLiteral: "a" | 2 | 3.3 | true;
    booleanLiteral: "a" | 2 | 3.3 | true;
}

export declare interface MixedLiteralsCasesOutput {
    stringLiteral: "a" | 2 | 3.3 | true;
    intLiteral: "a" | 2 | 3.3 | true;
    floatLiteral: "a" | 2 | 3.3 | true;
    booleanLiteral: "a" | 2 | 3.3 | true;
}

export declare interface MixedLiteralsGet {
    get(options?: MixedLiteralsGetParameters): StreamableMethod<MixedLiteralsGet200Response>;
    post(options: MixedLiteralsSendParameters): StreamableMethod<MixedLiteralsSend204Response>;
}

export declare interface MixedLiteralsGet200Response extends HttpResponse {
    status: "200";
    body: {
        prop: MixedLiteralsCasesOutput;
    };
}

export declare type MixedLiteralsGetParameters = RequestParameters;

export declare interface MixedLiteralsSend204Response extends HttpResponse {
    status: "204";
}

export declare interface MixedLiteralsSendBodyParam {
    body: {
        prop: MixedLiteralsCases;
    };
}

export declare type MixedLiteralsSendParameters = MixedLiteralsSendBodyParam & RequestParameters;

export declare interface MixedTypesCases {
    model: Cat | "a" | number | boolean;
    literal: Cat | "a" | number | boolean;
    int: Cat | "a" | number | boolean;
    boolean: Cat | "a" | number | boolean;
    array: (Cat | "a" | number | boolean)[];
}

export declare interface MixedTypesCasesOutput {
    model: CatOutput | "a" | number | boolean;
    literal: CatOutput | "a" | number | boolean;
    int: CatOutput | "a" | number | boolean;
    boolean: CatOutput | "a" | number | boolean;
    array: (CatOutput | "a" | number | boolean)[];
}

export declare interface MixedTypesGet {
    get(options?: MixedTypesGetParameters): StreamableMethod<MixedTypesGet200Response>;
    post(options: MixedTypesSendParameters): StreamableMethod<MixedTypesSend204Response>;
}

export declare interface MixedTypesGet200Response extends HttpResponse {
    status: "200";
    body: {
        prop: MixedTypesCasesOutput;
    };
}

export declare type MixedTypesGetParameters = RequestParameters;

export declare interface MixedTypesSend204Response extends HttpResponse {
    status: "204";
}

export declare interface MixedTypesSendBodyParam {
    body: {
        prop: MixedTypesCases;
    };
}

export declare type MixedTypesSendParameters = MixedTypesSendBodyParam & RequestParameters;

export declare interface ModelsOnlyGet {
    get(options?: ModelsOnlyGetParameters): StreamableMethod<ModelsOnlyGet200Response>;
    post(options: ModelsOnlySendParameters): StreamableMethod<ModelsOnlySend204Response>;
}

export declare interface ModelsOnlyGet200Response extends HttpResponse {
    status: "200";
    body: {
        prop: CatOutput | DogOutput;
    };
}

export declare type ModelsOnlyGetParameters = RequestParameters;

export declare interface ModelsOnlySend204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsOnlySendBodyParam {
    body: {
        prop: Cat | Dog;
    };
}

export declare type ModelsOnlySendParameters = ModelsOnlySendBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/type/union/strings-only"): StringsOnlyGet;
    (path: "/type/union/string-extensible"): StringExtensibleGet;
    (path: "/type/union/string-extensible-named"): StringExtensibleNamedGet;
    (path: "/type/union/ints-only"): IntsOnlyGet;
    (path: "/type/union/floats-only"): FloatsOnlyGet;
    (path: "/type/union/models-only"): ModelsOnlyGet;
    (path: "/type/union/enums-only"): EnumsOnlyGet;
    (path: "/type/union/string-and-array"): StringAndArrayGet;
    (path: "/type/union/mixed-literals"): MixedLiteralsGet;
    (path: "/type/union/mixed-types"): MixedTypesGet;
}

export declare interface StringAndArrayCases {
    string: string | string[];
    array: string | string[];
}

export declare interface StringAndArrayCasesOutput {
    string: string | string[];
    array: string | string[];
}

export declare interface StringAndArrayGet {
    get(options?: StringAndArrayGetParameters): StreamableMethod<StringAndArrayGet200Response>;
    post(options: StringAndArraySendParameters): StreamableMethod<StringAndArraySend204Response>;
}

export declare interface StringAndArrayGet200Response extends HttpResponse {
    status: "200";
    body: {
        prop: StringAndArrayCasesOutput;
    };
}

export declare type StringAndArrayGetParameters = RequestParameters;

export declare interface StringAndArraySend204Response extends HttpResponse {
    status: "204";
}

export declare interface StringAndArraySendBodyParam {
    body: {
        prop: StringAndArrayCases;
    };
}

export declare type StringAndArraySendParameters = StringAndArraySendBodyParam & RequestParameters;

export declare interface StringExtensibleGet {
    get(options?: StringExtensibleGetParameters): StreamableMethod<StringExtensibleGet200Response>;
    post(options: StringExtensibleSendParameters): StreamableMethod<StringExtensibleSend204Response>;
}

export declare interface StringExtensibleGet200Response extends HttpResponse {
    status: "200";
    body: {
        prop: string;
    };
}

export declare type StringExtensibleGetParameters = RequestParameters;

export declare interface StringExtensibleNamedGet {
    get(options?: StringExtensibleNamedGetParameters): StreamableMethod<StringExtensibleNamedGet200Response>;
    post(options: StringExtensibleNamedSendParameters): StreamableMethod<StringExtensibleNamedSend204Response>;
}

export declare interface StringExtensibleNamedGet200Response extends HttpResponse {
    status: "200";
    body: {
        prop: StringExtensibleNamedUnionOutput;
    };
}

export declare type StringExtensibleNamedGetParameters = RequestParameters;

export declare interface StringExtensibleNamedSend204Response extends HttpResponse {
    status: "204";
}

export declare interface StringExtensibleNamedSendBodyParam {
    body: {
        prop: StringExtensibleNamedUnion;
    };
}

export declare type StringExtensibleNamedSendParameters = StringExtensibleNamedSendBodyParam & RequestParameters;

export declare type StringExtensibleNamedUnion = string;

export declare type StringExtensibleNamedUnionOutput = string;

export declare interface StringExtensibleSend204Response extends HttpResponse {
    status: "204";
}

export declare interface StringExtensibleSendBodyParam {
    body: {
        prop: string;
    };
}

export declare type StringExtensibleSendParameters = StringExtensibleSendBodyParam & RequestParameters;

export declare interface StringsOnlyGet {
    get(options?: StringsOnlyGetParameters): StreamableMethod<StringsOnlyGet200Response>;
    post(options: StringsOnlySendParameters): StreamableMethod<StringsOnlySend204Response>;
}

export declare interface StringsOnlyGet200Response extends HttpResponse {
    status: "200";
    body: {
        prop: "a" | "b" | "c";
    };
}

export declare type StringsOnlyGetParameters = RequestParameters;

export declare interface StringsOnlySend204Response extends HttpResponse {
    status: "204";
}

export declare interface StringsOnlySendBodyParam {
    body: {
        prop: "a" | "b" | "c";
    };
}

export declare type StringsOnlySendParameters = StringsOnlySendBodyParam & RequestParameters;

export declare type Ud = "up" | "down";

export declare type UdOutput = "up" | "down";

export declare type UnionsClient = Client & {
    path: Routes;
};

export declare interface UnionsClientOptions extends ClientOptions {
}

export { }

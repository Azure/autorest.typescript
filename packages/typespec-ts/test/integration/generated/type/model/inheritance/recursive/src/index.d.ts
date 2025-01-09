import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';

declare function createClient(options?: RecursiveClientOptions): RecursiveClient;
export default createClient;

declare interface Element_2 {
    extension?: Array<Extension>;
}
export { Element_2 as Element }

export declare interface ElementOutput {
    extension?: Array<ExtensionOutput>;
}

export declare interface Extension extends Element_2 {
    level: number;
}

export declare interface ExtensionOutput extends ElementOutput {
    level: number;
}

export declare interface Get200Response extends HttpResponse {
    status: "200";
    body: ExtensionOutput;
}

export declare type GetParameters = RequestParameters;

export declare interface Put {
    put(options: PutParameters): StreamableMethod<Put204Response>;
    get(options?: GetParameters): StreamableMethod<Get200Response>;
}

export declare interface Put204Response extends HttpResponse {
    status: "204";
}

export declare interface PutBodyParam {
    body: Extension;
}

export declare type PutParameters = PutBodyParam & RequestParameters;

export declare type RecursiveClient = Client & {
    path: Routes;
};

export declare interface RecursiveClientOptions extends ClientOptions {
}

export declare interface Routes {
    (path: "/type/model/inheritance/recursive"): Put;
}

export { }

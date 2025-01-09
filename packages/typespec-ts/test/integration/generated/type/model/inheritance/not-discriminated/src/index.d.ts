import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';

export declare interface Cat extends Pet {
    age: number;
}

export declare interface CatOutput extends PetOutput {
    age: number;
}

declare function createClient(options?: NotDiscriminatedClientOptions): NotDiscriminatedClient;
export default createClient;

export declare interface GetValid200Response extends HttpResponse {
    status: "200";
    body: SiameseOutput;
}

export declare type GetValidParameters = RequestParameters;

export declare type NotDiscriminatedClient = Client & {
    path: Routes;
};

export declare interface NotDiscriminatedClientOptions extends ClientOptions {
}

export declare interface Pet {
    name: string;
}

export declare interface PetOutput {
    name: string;
}

export declare interface PostValid {
    post(options: PostValidParameters): StreamableMethod<PostValid204Response>;
    get(options?: GetValidParameters): StreamableMethod<GetValid200Response>;
    put(options: PutValidParameters): StreamableMethod<PutValid200Response>;
}

export declare interface PostValid204Response extends HttpResponse {
    status: "204";
}

export declare interface PostValidBodyParam {
    body: Siamese;
}

export declare type PostValidParameters = PostValidBodyParam & RequestParameters;

export declare interface PutValid200Response extends HttpResponse {
    status: "200";
    body: SiameseOutput;
}

export declare interface PutValidBodyParam {
    body: Siamese;
}

export declare type PutValidParameters = PutValidBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/type/model/inheritance/not-discriminated/valid"): PostValid;
}

export declare interface Siamese extends Cat {
    smart: boolean;
}

export declare interface SiameseOutput extends CatOutput {
    smart: boolean;
}

export { }

import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Create {
    post(options: Options): StreamableMethod<>;
}

export interface Read {
    get(options: Options): StreamableMethod<>;
}

export interface CustomGet {
    get(options: Options): StreamableMethod<>;
}

export interface Routes {
    /** Resource for '/' has methods for the following verbs: post */
    (path: "/"): Create;
    /** Resource for '/widgets/\{id\}' has methods for the following verbs: get */
    (path: "/widgets/{id}", id: string): Read;
    /** Resource for '/customGet' has methods for the following verbs: get */
    (path: "/customGet"): CustomGet;
}

export type FooClient = Client & {
        path: Routes;
    };

import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for WidgetService operations */
export interface WidgetServiceOperations {
    create(options: Options): StreamableMethod<>;
    read(id: string, options: Options): StreamableMethod<>;
    customGet(options: Options): StreamableMethod<>;
}

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
        widgetService: WidgetServiceOperations;
    };

import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for Pets operations */
export interface PetsOperations {
    /** Returns a pet. Supports eTags. */
    read(petId: number, options: Options): StreamableMethod<>;
    create(options: Options): StreamableMethod<>;
}

/** Contains operations for ListPetToysResponse operations */
export interface ListPetToysResponseOperations {
    list(petId: string, options: Options): StreamableMethod<>;
}

export interface PetsRead {
    /** Returns a pet. Supports eTags. */
    get(options: Options): StreamableMethod<>;
}

export interface PetsCreate {
    post(options: Options): StreamableMethod<>;
}

export interface ListPetToysResponseList {
    get(options: Options): StreamableMethod<>;
}

export interface Routes {
    /** Resource for '/pets/\{petId\}' has methods for the following verbs: get */
    (path: "/pets/{petId}", petId: number): PetsRead;
    /** Resource for '/pets' has methods for the following verbs: post */
    (path: "/pets"): PetsCreate;
    /** Resource for '/pets/\{petId\}/toys' has methods for the following verbs: get */
    (path: "/pets/{petId}/toys", petId: string): ListPetToysResponseList;
}

export type FooClient = Client & {
        path: Routes;
        pets: PetsOperations;
        listPetToysResponse: ListPetToysResponseOperations;
    };

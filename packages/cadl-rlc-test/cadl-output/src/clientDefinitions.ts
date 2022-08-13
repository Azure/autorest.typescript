import { GetNullParameters, PutNullParameters, GetEmptyParameters, PutEmptyParameters, GetWhitespaceParameters, PutWhitespaceParameters, GetMbcsParameters, PutMbcsParameters, GetNotProvidedParameters, PutNotProvidedParameters, GetNotExpandableParameters, PutNotExpandableParameters, GetReferencedParameters, PutReferencedParameters, GetReferencedConstantParameters, PutReferencedConstantParameters } from "./parameters";
import { GetNull200Response, GetNullDefaultResponse, PutNull204Response, PutNullDefaultResponse, GetEmpty200Response, GetEmptyDefaultResponse, PutEmpty204Response, PutEmptyDefaultResponse, GetWhitespace200Response, GetWhitespaceDefaultResponse, PutWhitespace204Response, PutWhitespaceDefaultResponse, GetMbcs200Response, GetMbcsDefaultResponse, PutMbcs204Response, PutMbcsDefaultResponse, GetNotProvided200Response, GetNotProvidedDefaultResponse, PutNotProvided204Response, PutNotProvidedDefaultResponse, GetNotExpandable200Response, GetNotExpandableDefaultResponse, PutNotExpandable204Response, PutNotExpandableDefaultResponse, GetReferenced200Response, GetReferencedDefaultResponse, PutReferenced204Response, PutReferencedDefaultResponse, GetReferencedConstant200Response, GetReferencedConstantDefaultResponse, PutReferencedConstant204Response, PutReferencedConstantDefaultResponse } from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for String operations */
export interface StringOperations {
    getNull(options: GetNullParameters): StreamableMethod<GetNull200Response | GetNullDefaultResponse>;
    putNull(options: PutNullParameters): StreamableMethod<PutNull204Response | PutNullDefaultResponse>;
    getEmpty(options: GetEmptyParameters): StreamableMethod<GetEmpty200Response | GetEmptyDefaultResponse>;
    putEmpty(options: PutEmptyParameters): StreamableMethod<PutEmpty204Response | PutEmptyDefaultResponse>;
    getWhitespace(options: GetWhitespaceParameters): StreamableMethod<GetWhitespace200Response | GetWhitespaceDefaultResponse>;
    putWhitespace(options: PutWhitespaceParameters): StreamableMethod<PutWhitespace204Response | PutWhitespaceDefaultResponse>;
    getMbcs(options: GetMbcsParameters): StreamableMethod<GetMbcs200Response | GetMbcsDefaultResponse>;
    putMbcs(options: PutMbcsParameters): StreamableMethod<PutMbcs204Response | PutMbcsDefaultResponse>;
    getNotProvided(options: GetNotProvidedParameters): StreamableMethod<GetNotProvided200Response | GetNotProvidedDefaultResponse>;
    putNotProvided(options: PutNotProvidedParameters): StreamableMethod<PutNotProvided204Response | PutNotProvidedDefaultResponse>;
}

/** Contains operations for Enum operations */
export interface EnumOperations {
    getNotExpandable(options: GetNotExpandableParameters): StreamableMethod<GetNotExpandable200Response | GetNotExpandableDefaultResponse>;
    putNotExpandable(options: PutNotExpandableParameters): StreamableMethod<PutNotExpandable204Response | PutNotExpandableDefaultResponse>;
    getReferenced(options: GetReferencedParameters): StreamableMethod<GetReferenced200Response | GetReferencedDefaultResponse>;
    putReferenced(options: PutReferencedParameters): StreamableMethod<PutReferenced204Response | PutReferencedDefaultResponse>;
    getReferencedConstant(options: GetReferencedConstantParameters): StreamableMethod<GetReferencedConstant200Response | GetReferencedConstantDefaultResponse>;
    putReferencedConstant(options: PutReferencedConstantParameters): StreamableMethod<PutReferencedConstant204Response | PutReferencedConstantDefaultResponse>;
}

export interface StringGetNull {
    get(options: GetNullParameters): StreamableMethod<GetNull200Response | GetNullDefaultResponse>;
    put(options: PutNullParameters): StreamableMethod<PutNull204Response | PutNullDefaultResponse>;
}

export interface StringGetEmpty {
    get(options: GetEmptyParameters): StreamableMethod<GetEmpty200Response | GetEmptyDefaultResponse>;
    put(options: PutEmptyParameters): StreamableMethod<PutEmpty204Response | PutEmptyDefaultResponse>;
}

export interface StringGetWhitespace {
    get(options: GetWhitespaceParameters): StreamableMethod<GetWhitespace200Response | GetWhitespaceDefaultResponse>;
    put(options: PutWhitespaceParameters): StreamableMethod<PutWhitespace204Response | PutWhitespaceDefaultResponse>;
}

export interface StringGetMbcs {
    get(options: GetMbcsParameters): StreamableMethod<GetMbcs200Response | GetMbcsDefaultResponse>;
    put(options: PutMbcsParameters): StreamableMethod<PutMbcs204Response | PutMbcsDefaultResponse>;
}

export interface StringGetNotProvided {
    get(options: GetNotProvidedParameters): StreamableMethod<GetNotProvided200Response | GetNotProvidedDefaultResponse>;
    put(options: PutNotProvidedParameters): StreamableMethod<PutNotProvided204Response | PutNotProvidedDefaultResponse>;
}

export interface EnumGetNotExpandable {
    get(options: GetNotExpandableParameters): StreamableMethod<GetNotExpandable200Response | GetNotExpandableDefaultResponse>;
    put(options: PutNotExpandableParameters): StreamableMethod<PutNotExpandable204Response | PutNotExpandableDefaultResponse>;
}

export interface EnumGetReferenced {
    get(options: GetReferencedParameters): StreamableMethod<GetReferenced200Response | GetReferencedDefaultResponse>;
    put(options: PutReferencedParameters): StreamableMethod<PutReferenced204Response | PutReferencedDefaultResponse>;
}

export interface EnumGetReferencedConstant {
    get(options: GetReferencedConstantParameters): StreamableMethod<GetReferencedConstant200Response | GetReferencedConstantDefaultResponse>;
    put(options: PutReferencedConstantParameters): StreamableMethod<PutReferencedConstant204Response | PutReferencedConstantDefaultResponse>;
}

export interface Routes {
    /** Resource for '/string/null' has methods for the following verbs: get, put */
    (path: "/string/null"): StringGetNull;
    /** Resource for '/string/empty' has methods for the following verbs: get, put */
    (path: "/string/empty"): StringGetEmpty;
    /** Resource for '/string/whitespace' has methods for the following verbs: get, put */
    (path: "/string/whitespace"): StringGetWhitespace;
    /** Resource for '/string/mbcs' has methods for the following verbs: get, put */
    (path: "/string/mbcs"): StringGetMbcs;
    /** Resource for '/string/notProvided' has methods for the following verbs: get, put */
    (path: "/string/notProvided"): StringGetNotProvided;
    /** Resource for '/string/enum/notExpandable' has methods for the following verbs: get, put */
    (path: "/string/enum/notExpandable"): EnumGetNotExpandable;
    /** Resource for '/string/enum/Referenced' has methods for the following verbs: get, put */
    (path: "/string/enum/Referenced"): EnumGetReferenced;
    /** Resource for '/string/enum/ReferencedConstant' has methods for the following verbs: get, put */
    (path: "/string/enum/ReferencedConstant"): EnumGetReferencedConstant;
}

export type FooClient = Client & {
        path: Routes;
        string: StringOperations;
        enum: EnumOperations;
    };

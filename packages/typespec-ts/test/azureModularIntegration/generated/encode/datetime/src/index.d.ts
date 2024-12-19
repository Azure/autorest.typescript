import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class DatetimeClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: DatetimeClientOptionalParams);
    readonly query: QueryOperations;
    readonly property: PropertyOperations;
    readonly header: HeaderOperations;
    readonly responseHeader: ResponseHeaderOperations;
}

export declare interface DatetimeClientOptionalParams extends ClientOptions {
}

export declare interface DefaultDatetimeProperty {
    value: Date;
}

export declare interface HeaderDefaultOptionalParams extends OperationOptions {
}

export declare interface HeaderOperations {
    default: (value: Date, options?: HeaderDefaultOptionalParams) => Promise<void>;
    rfc3339: (value: Date, options?: HeaderRfc3339OptionalParams) => Promise<void>;
    rfc7231: (value: Date, options?: HeaderRfc7231OptionalParams) => Promise<void>;
    unixTimestamp: (value: Date, options?: HeaderUnixTimestampOptionalParams) => Promise<void>;
    unixTimestampArray: (value: Date[], options?: HeaderUnixTimestampArrayOptionalParams) => Promise<void>;
}

export declare interface HeaderRfc3339OptionalParams extends OperationOptions {
}

export declare interface HeaderRfc7231OptionalParams extends OperationOptions {
}

export declare interface HeaderUnixTimestampArrayOptionalParams extends OperationOptions {
}

export declare interface HeaderUnixTimestampOptionalParams extends OperationOptions {
}

export declare interface PropertyDefaultOptionalParams extends OperationOptions {
}

export declare interface PropertyOperations {
    default: (body: DefaultDatetimeProperty, options?: PropertyDefaultOptionalParams) => Promise<DefaultDatetimeProperty>;
    rfc3339: (body: Rfc3339DatetimeProperty, options?: PropertyRfc3339OptionalParams) => Promise<Rfc3339DatetimeProperty>;
    rfc7231: (body: Rfc7231DatetimeProperty, options?: PropertyRfc7231OptionalParams) => Promise<Rfc7231DatetimeProperty>;
    unixTimestamp: (body: UnixTimestampDatetimeProperty, options?: PropertyUnixTimestampOptionalParams) => Promise<UnixTimestampDatetimeProperty>;
    unixTimestampArray: (body: UnixTimestampArrayDatetimeProperty, options?: PropertyUnixTimestampArrayOptionalParams) => Promise<UnixTimestampArrayDatetimeProperty>;
}

export declare interface PropertyRfc3339OptionalParams extends OperationOptions {
}

export declare interface PropertyRfc7231OptionalParams extends OperationOptions {
}

export declare interface PropertyUnixTimestampArrayOptionalParams extends OperationOptions {
}

export declare interface PropertyUnixTimestampOptionalParams extends OperationOptions {
}

export declare interface QueryDefaultOptionalParams extends OperationOptions {
}

export declare interface QueryOperations {
    default: (value: Date, options?: QueryDefaultOptionalParams) => Promise<void>;
    rfc3339: (value: Date, options?: QueryRfc3339OptionalParams) => Promise<void>;
    rfc7231: (value: Date, options?: QueryRfc7231OptionalParams) => Promise<void>;
    unixTimestamp: (value: Date, options?: QueryUnixTimestampOptionalParams) => Promise<void>;
    unixTimestampArray: (value: Date[], options?: QueryUnixTimestampArrayOptionalParams) => Promise<void>;
}

export declare interface QueryRfc3339OptionalParams extends OperationOptions {
}

export declare interface QueryRfc7231OptionalParams extends OperationOptions {
}

export declare interface QueryUnixTimestampArrayOptionalParams extends OperationOptions {
}

export declare interface QueryUnixTimestampOptionalParams extends OperationOptions {
}

export declare interface ResponseHeaderDefaultOptionalParams extends OperationOptions {
}

export declare interface ResponseHeaderOperations {
    default: (options?: ResponseHeaderDefaultOptionalParams) => Promise<void>;
    rfc3339: (options?: ResponseHeaderRfc3339OptionalParams) => Promise<void>;
    rfc7231: (options?: ResponseHeaderRfc7231OptionalParams) => Promise<void>;
    unixTimestamp: (options?: ResponseHeaderUnixTimestampOptionalParams) => Promise<void>;
}

export declare interface ResponseHeaderRfc3339OptionalParams extends OperationOptions {
}

export declare interface ResponseHeaderRfc7231OptionalParams extends OperationOptions {
}

export declare interface ResponseHeaderUnixTimestampOptionalParams extends OperationOptions {
}

export declare interface Rfc3339DatetimeProperty {
    value: Date;
}

export declare interface Rfc7231DatetimeProperty {
    value: Date;
}

export declare interface UnixTimestampArrayDatetimeProperty {
    value: Date[];
}

export declare interface UnixTimestampDatetimeProperty {
    value: Date;
}

export { }

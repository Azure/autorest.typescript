import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export declare class DatetimeClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: DatetimeClientOptionalParams);
    readonly responseHeader: ResponseHeaderOperations;
    readonly header: HeaderOperations;
    readonly property: PropertyOperations;
    readonly query: QueryOperations;
}

export declare interface DatetimeClientOptionalParams extends ClientOptions {
    endpointParam?: string;
}

export declare interface DefaultDatetimeProperty {
    value: Date;
}

declare interface HeaderDefaultOptionalParams extends OperationOptions {
}

export declare interface HeaderOperations {
    unixTimestampArray: (value: Date[], options?: HeaderUnixTimestampArrayOptionalParams) => Promise<void>;
    unixTimestamp: (value: Date, options?: HeaderUnixTimestampOptionalParams) => Promise<void>;
    rfc7231: (value: Date, options?: HeaderRfc7231OptionalParams) => Promise<void>;
    rfc3339: (value: Date, options?: HeaderRfc3339OptionalParams) => Promise<void>;
    default: (value: Date, options?: HeaderDefaultOptionalParams) => Promise<void>;
}

declare interface HeaderRfc3339OptionalParams extends OperationOptions {
}

declare interface HeaderRfc7231OptionalParams extends OperationOptions {
}

declare interface HeaderUnixTimestampArrayOptionalParams extends OperationOptions {
}

declare interface HeaderUnixTimestampOptionalParams extends OperationOptions {
}

export { isRestError }

declare interface PropertyDefaultOptionalParams extends OperationOptions {
}

export declare interface PropertyOperations {
    unixTimestampArray: (body: UnixTimestampArrayDatetimeProperty, options?: PropertyUnixTimestampArrayOptionalParams) => Promise<UnixTimestampArrayDatetimeProperty>;
    unixTimestamp: (body: UnixTimestampDatetimeProperty, options?: PropertyUnixTimestampOptionalParams) => Promise<UnixTimestampDatetimeProperty>;
    rfc7231: (body: Rfc7231DatetimeProperty, options?: PropertyRfc7231OptionalParams) => Promise<Rfc7231DatetimeProperty>;
    rfc3339: (body: Rfc3339DatetimeProperty, options?: PropertyRfc3339OptionalParams) => Promise<Rfc3339DatetimeProperty>;
    default: (body: DefaultDatetimeProperty, options?: PropertyDefaultOptionalParams) => Promise<DefaultDatetimeProperty>;
}

declare interface PropertyRfc3339OptionalParams extends OperationOptions {
}

declare interface PropertyRfc7231OptionalParams extends OperationOptions {
}

declare interface PropertyUnixTimestampArrayOptionalParams extends OperationOptions {
}

declare interface PropertyUnixTimestampOptionalParams extends OperationOptions {
}

declare interface QueryDefaultOptionalParams extends OperationOptions {
}

export declare interface QueryOperations {
    unixTimestampArray: (value: Date[], options?: QueryUnixTimestampArrayOptionalParams) => Promise<void>;
    unixTimestamp: (value: Date, options?: QueryUnixTimestampOptionalParams) => Promise<void>;
    rfc7231: (value: Date, options?: QueryRfc7231OptionalParams) => Promise<void>;
    rfc3339: (value: Date, options?: QueryRfc3339OptionalParams) => Promise<void>;
    default: (value: Date, options?: QueryDefaultOptionalParams) => Promise<void>;
}

declare interface QueryRfc3339OptionalParams extends OperationOptions {
}

declare interface QueryRfc7231OptionalParams extends OperationOptions {
}

declare interface QueryUnixTimestampArrayOptionalParams extends OperationOptions {
}

declare interface QueryUnixTimestampOptionalParams extends OperationOptions {
}

declare interface ResponseHeaderDefaultOptionalParams extends OperationOptions {
}

export declare interface ResponseHeaderOperations {
    unixTimestamp: (options?: ResponseHeaderUnixTimestampOptionalParams) => Promise<void>;
    rfc7231: (options?: ResponseHeaderRfc7231OptionalParams) => Promise<void>;
    rfc3339: (options?: ResponseHeaderRfc3339OptionalParams) => Promise<void>;
    default: (options?: ResponseHeaderDefaultOptionalParams) => Promise<void>;
}

declare interface ResponseHeaderRfc3339OptionalParams extends OperationOptions {
}

declare interface ResponseHeaderRfc7231OptionalParams extends OperationOptions {
}

declare interface ResponseHeaderUnixTimestampOptionalParams extends OperationOptions {
}

export { RestError }

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

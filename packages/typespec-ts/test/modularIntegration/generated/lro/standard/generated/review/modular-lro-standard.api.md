## API Report File for "@msinternal/modular-lro-standard"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { OperationState } from '@azure/core-lro/next';
import { Pipeline } from '@azure/core-rest-pipeline';
import { PollerLike } from '@azure/core-lro/next';

// @public (undocumented)
export interface CreateOrReplaceOptions extends OperationOptions {
    updateIntervalInMs?: number;
}

// @public (undocumented)
export interface DeleteOperationOptions extends OperationOptions {
    updateIntervalInMs?: number;
}

// @public
export interface ExportedUser {
    name: string;
    resourceUri: string;
}

// @public (undocumented)
export interface ExportOperationOptions extends OperationOptions {
    updateIntervalInMs?: number;
}

// @public (undocumented)
export class StandardClient {
    constructor(options?: StandardClientOptions);
    createOrReplace(name: string, resource: User, options?: CreateOrReplaceOptions): PollerLike<OperationState<User>, User>;
    deleteOperation(name: string, options?: DeleteOperationOptions): PollerLike<OperationState<void>, void>;
    exportOperation(name: string, format: string, options?: ExportOperationOptions): PollerLike<OperationState<ExportedUser>, ExportedUser>;
    readonly pipeline: Pipeline;
}

// @public (undocumented)
export interface StandardClientOptions extends ClientOptions {
}

// @public
export interface User {
    readonly name: string;
    role: string;
}

// (No @packageDocumentation comment for this package)

```
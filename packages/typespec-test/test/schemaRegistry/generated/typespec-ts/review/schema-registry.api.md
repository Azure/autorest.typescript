## API Report File for "@msinternal/schema-registry"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { TokenCredential } from '@azure/core-auth';

// @public
export type ContentTypeEnum = "application/octet-stream" | "application/json; serialization=Avro" | "application/json; serialization=json" | "text/vnd.ms.protobuf";

// @public
export type ContinuablePage<TElement, TPage = TElement[]> = TPage & {
    continuationToken?: string;
};

// @public
export enum KnownServiceApiVersions {
    V202110 = "2021-10",
    V202210 = "2022-10",
    V20230701 = "2023-07-01"
}

// @public
export interface PagedAsyncIterableIterator<TElement, TPage = TElement[], TPageSettings extends PageSettings = PageSettings> {
    [Symbol.asyncIterator](): PagedAsyncIterableIterator<TElement, TPage, TPageSettings>;
    byPage: (settings?: TPageSettings) => AsyncIterableIterator<ContinuablePage<TElement, TPage>>;
    next(): Promise<IteratorResult<TElement>>;
}

// @public
export interface PageSettings {
    continuationToken?: string;
}

// @public
export interface Schema {
    definition: string;
    properties: SchemaProperties;
}

// @public
export type SchemaContentTypeValues = "application/json; serialization=Avro" | "application/json; serialization=json" | "text/plain; charset=utf-8" | "text/vnd.ms.protobuf";

// @public
export type SchemaFormat = "Avro" | "Json" | "Custom" | "Protobuf";

// @public
export interface SchemaGroup {
    readonly groupName: string;
}

// @public
export interface SchemaOperationsGetSchemaByIdOptionalParams extends OperationOptions {
}

// @public
export interface SchemaOperationsGetSchemaByVersionOptionalParams extends OperationOptions {
}

// @public
export interface SchemaOperationsGetSchemaIdByContentOptionalParams extends OperationOptions {
}

// @public
export interface SchemaOperationsListSchemaGroupsOptionalParams extends OperationOptions {
}

// @public
export interface SchemaOperationsListSchemaVersionsOptionalParams extends OperationOptions {
}

// @public
export interface SchemaOperationsOperations {
    getSchemaById: (id: string, options?: SchemaOperationsGetSchemaByIdOptionalParams) => Promise<Uint8Array>;
    getSchemaByVersion: (groupName: string, name: string, schemaVersion: number, options?: SchemaOperationsGetSchemaByVersionOptionalParams) => Promise<Uint8Array>;
    getSchemaIdByContent: (groupName: string, name: string, contentType: SchemaContentTypeValues, schemaContent: Uint8Array, options?: SchemaOperationsGetSchemaIdByContentOptionalParams) => Promise<void>;
    listSchemaGroups: (options?: SchemaOperationsListSchemaGroupsOptionalParams) => PagedAsyncIterableIterator<SchemaGroup>;
    listSchemaVersions: (groupName: string, name: string, options?: SchemaOperationsListSchemaVersionsOptionalParams) => PagedAsyncIterableIterator<SchemaVersion>;
    registerSchema: (groupName: string, name: string, content: Uint8Array, contentType: SchemaContentTypeValues, options?: SchemaOperationsRegisterSchemaOptionalParams) => Promise<void>;
}

// @public
export interface SchemaOperationsRegisterSchemaOptionalParams extends OperationOptions {
}

// @public
export interface SchemaProperties {
    format: SchemaFormat;
    groupName: string;
    id: string;
    name: string;
    version: number;
}

// @public (undocumented)
export class SchemaRegistryClient {
    constructor(endpointParam: string, credential: TokenCredential, options?: SchemaRegistryClientOptionalParams);
    readonly pipeline: Pipeline;
    readonly schemaOperations: SchemaOperationsOperations;
}

// @public
export interface SchemaRegistryClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

// @public
export interface SchemaVersion {
    readonly schemaVersion: number;
}

// (No @packageDocumentation comment for this package)

```

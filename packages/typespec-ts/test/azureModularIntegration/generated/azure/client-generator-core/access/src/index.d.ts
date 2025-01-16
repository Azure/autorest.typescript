import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

declare interface AbstractModel {
    kind: string;
    name: string;
}

declare type AbstractModelUnion = RealModel | AbstractModel;

export declare class AccessClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: AccessClientOptionalParams);
    discriminator(kind: string, options?: DiscriminatorOptionalParams): Promise<AbstractModelUnion>;
    operation(name: string, options?: OperationOptionalParams): Promise<OuterModel>;
    internal(name: string, options?: InternalOptionalParams): Promise<SharedModel>;
    public(name: string, options?: PublicOptionalParams): Promise<SharedModel>;
    publicDecoratorInInternal(name: string, options?: PublicDecoratorInInternalOptionalParams): Promise<PublicDecoratorModelInInternal>;
    internalDecoratorInInternal(name: string, options?: InternalDecoratorInInternalOptionalParams): Promise<InternalDecoratorModelInInternal>;
    noDecoratorInInternal(name: string, options?: NoDecoratorInInternalOptionalParams): Promise<NoDecoratorModelInInternal>;
    publicDecoratorInPublic(name: string, options?: PublicDecoratorInPublicOptionalParams): Promise<PublicDecoratorModelInPublic>;
    noDecoratorInPublic(name: string, options?: NoDecoratorInPublicOptionalParams): Promise<NoDecoratorModelInPublic>;
}

export declare interface AccessClientOptionalParams extends ClientOptions {
}

declare interface BaseModel {
    name: string;
}

export declare interface DiscriminatorOptionalParams extends OperationOptions {
}

declare interface InnerModel {
    name: string;
}

export declare interface InternalDecoratorInInternalOptionalParams extends OperationOptions {
}

declare interface InternalDecoratorModelInInternal {
    name: string;
}

export declare interface InternalOptionalParams extends OperationOptions {
}

export declare interface NoDecoratorInInternalOptionalParams extends OperationOptions {
}

export declare interface NoDecoratorInPublicOptionalParams extends OperationOptions {
}

declare interface NoDecoratorModelInInternal {
    name: string;
}

declare interface NoDecoratorModelInPublic {
    name: string;
}

export declare interface OperationOptionalParams extends OperationOptions {
}

declare interface OuterModel extends BaseModel {
    inner: InnerModel;
}

export declare interface PublicDecoratorInInternalOptionalParams extends OperationOptions {
}

export declare interface PublicDecoratorInPublicOptionalParams extends OperationOptions {
}

declare interface PublicDecoratorModelInInternal {
    name: string;
}

declare interface PublicDecoratorModelInPublic {
    name: string;
}

export declare interface PublicOptionalParams extends OperationOptions {
}

declare interface RealModel extends AbstractModel {
    kind: "real";
}

declare interface SharedModel {
    name: string;
}

export { }

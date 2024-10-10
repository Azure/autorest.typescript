import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare function $public(context: AccessContext, name: string, options?: PublicOptionalParams): Promise<SharedModel>;

export declare interface AbstractModel {
    kind: string;
    name: string;
}

export declare type AbstractModelUnion = RealModel | AbstractModel;

export declare class AccessClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: AccessClientOptionalParams);
    noDecoratorInPublic(name: string, options?: NoDecoratorInPublicOptionalParams): Promise<NoDecoratorModelInPublic>;
    publicDecoratorInPublic(name: string, options?: PublicDecoratorInPublicOptionalParams): Promise<PublicDecoratorModelInPublic>;
    noDecoratorInInternal(name: string, options?: NoDecoratorInInternalOptionalParams): Promise<NoDecoratorModelInInternal>;
    internalDecoratorInInternal(name: string, options?: InternalDecoratorInInternalOptionalParams): Promise<InternalDecoratorModelInInternal>;
    publicDecoratorInInternal(name: string, options?: PublicDecoratorInInternalOptionalParams): Promise<PublicDecoratorModelInInternal>;
    public(name: string, options?: PublicOptionalParams): Promise<SharedModel>;
    internal(name: string, options?: InternalOptionalParams): Promise<SharedModel>;
    operation(name: string, options?: OperationOptionalParams): Promise<OuterModel>;
    discriminator(kind: string, options?: DiscriminatorOptionalParams): Promise<AbstractModelUnion>;
}

export declare interface AccessClientOptionalParams extends ClientOptions {
}

export declare interface AccessContext extends Client {
}

export declare interface BaseModel {
    name: string;
}

export declare function createAccess(options?: AccessClientOptionalParams): AccessContext;

export declare function discriminator(context: AccessContext, kind: string, options?: DiscriminatorOptionalParams): Promise<AbstractModelUnion>;

export declare interface DiscriminatorOptionalParams extends OperationOptions {
}

export declare interface InnerModel {
    name: string;
}

export declare function internal(context: AccessContext, name: string, options?: InternalOptionalParams): Promise<SharedModel>;

export declare function internalDecoratorInInternal(context: AccessContext, name: string, options?: InternalDecoratorInInternalOptionalParams): Promise<InternalDecoratorModelInInternal>;

export declare interface InternalDecoratorInInternalOptionalParams extends OperationOptions {
}

export declare interface InternalDecoratorModelInInternal {
    name: string;
}

export declare interface InternalOptionalParams extends OperationOptions {
}

export declare function noDecoratorInInternal(context: AccessContext, name: string, options?: NoDecoratorInInternalOptionalParams): Promise<NoDecoratorModelInInternal>;

export declare interface NoDecoratorInInternalOptionalParams extends OperationOptions {
}

export declare function noDecoratorInPublic(context: AccessContext, name: string, options?: NoDecoratorInPublicOptionalParams): Promise<NoDecoratorModelInPublic>;

export declare interface NoDecoratorInPublicOptionalParams extends OperationOptions {
}

export declare interface NoDecoratorModelInInternal {
    name: string;
}

export declare interface NoDecoratorModelInPublic {
    name: string;
}

export declare function operation(context: AccessContext, name: string, options?: OperationOptionalParams): Promise<OuterModel>;

export declare interface OperationOptionalParams extends OperationOptions {
}

export declare interface OuterModel extends BaseModel {
    inner: InnerModel;
}

export declare function publicDecoratorInInternal(context: AccessContext, name: string, options?: PublicDecoratorInInternalOptionalParams): Promise<PublicDecoratorModelInInternal>;

export declare interface PublicDecoratorInInternalOptionalParams extends OperationOptions {
}

export declare function publicDecoratorInPublic(context: AccessContext, name: string, options?: PublicDecoratorInPublicOptionalParams): Promise<PublicDecoratorModelInPublic>;

export declare interface PublicDecoratorInPublicOptionalParams extends OperationOptions {
}

export declare interface PublicDecoratorModelInInternal {
    name: string;
}

export declare interface PublicDecoratorModelInPublic {
    name: string;
}

export declare interface PublicOptionalParams extends OperationOptions {
}

export declare interface RealModel extends AbstractModel {
    kind: "real";
}

export declare interface SharedModel {
    name: string;
}

export { }

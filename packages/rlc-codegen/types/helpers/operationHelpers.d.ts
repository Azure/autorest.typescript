import { MethodSignatureStructure, OptionalKind, ParameterDeclarationStructure } from "ts-morph";
import { Methods, PathParameter } from "../interfaces";
export declare function buildMethodDefinitions(methods: Methods, pathParams?: PathParameter[]): OptionalKind<MethodSignatureStructure>[];
export declare function getPathParamDefinitions(pathParams: PathParameter[]): OptionalKind<ParameterDeclarationStructure>[];

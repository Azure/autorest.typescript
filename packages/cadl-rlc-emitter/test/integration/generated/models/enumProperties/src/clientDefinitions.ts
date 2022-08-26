import {
  EnumPropertiesBasicSendEnumPropertyModelParameters,
  EnumPropertiesBasicGetEnumPropertModelParameters,
  EnumPropertiesBasicSetEnumPropertModelParameters,
} from "./parameters";
import {
  EnumPropertiesBasicSendEnumPropertyModel200Response,
  EnumPropertiesBasicSendEnumPropertyModelDefaultResponse,
  EnumPropertiesBasicGetEnumPropertModel200Response,
  EnumPropertiesBasicGetEnumPropertModelDefaultResponse,
  EnumPropertiesBasicSetEnumPropertModel200Response,
  EnumPropertiesBasicSetEnumPropertModelDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for EnumPropertiesBasic operations */
export interface EnumPropertiesBasicOperations {
  sendEnumPropertyModel(
    options?: EnumPropertiesBasicSendEnumPropertyModelParameters
  ): StreamableMethod<
    | EnumPropertiesBasicSendEnumPropertyModel200Response
    | EnumPropertiesBasicSendEnumPropertyModelDefaultResponse
  >;
  getEnumPropertModel(
    options?: EnumPropertiesBasicGetEnumPropertModelParameters
  ): StreamableMethod<
    | EnumPropertiesBasicGetEnumPropertModel200Response
    | EnumPropertiesBasicGetEnumPropertModelDefaultResponse
  >;
  setEnumPropertModel(
    options?: EnumPropertiesBasicSetEnumPropertModelParameters
  ): StreamableMethod<
    | EnumPropertiesBasicSetEnumPropertModel200Response
    | EnumPropertiesBasicSetEnumPropertModelDefaultResponse
  >;
}

export interface SendEnumPropertyModel {
  post(
    options?: EnumPropertiesBasicSendEnumPropertyModelParameters
  ): StreamableMethod<
    | EnumPropertiesBasicSendEnumPropertyModel200Response
    | EnumPropertiesBasicSendEnumPropertyModelDefaultResponse
  >;
  get(
    options?: EnumPropertiesBasicGetEnumPropertModelParameters
  ): StreamableMethod<
    | EnumPropertiesBasicGetEnumPropertModel200Response
    | EnumPropertiesBasicGetEnumPropertModelDefaultResponse
  >;
  put(
    options?: EnumPropertiesBasicSetEnumPropertModelParameters
  ): StreamableMethod<
    | EnumPropertiesBasicSetEnumPropertModel200Response
    | EnumPropertiesBasicSetEnumPropertModelDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/enum-properties-basic/models' has methods for the following verbs: post, get, put */
  (path: "/enum-properties-basic/models"): SendEnumPropertyModel;
}

export type EnumPropertiesBasicClient = Client & {
  path: Routes;
  enumPropertiesBasic: EnumPropertiesBasicOperations;
};

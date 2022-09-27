import { OAuth2ValidParameters, OAuth2InvalidParameters } from "./parameters";
import {
  OAuth2Valid204Response,
  OAuth2Invalid204Response,
  OAuth2Invalid403Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for OAuth2 operations */
export interface OAuth2Operations {
  /** Check whether client is authenticated */
  valid(
    options?: OAuth2ValidParameters
  ): StreamableMethod<OAuth2Valid204Response>;
  /** Check whether client is authenticated. Will return an invalid bearer error. */
  invalid(
    options?: OAuth2InvalidParameters
  ): StreamableMethod<OAuth2Invalid204Response | OAuth2Invalid403Response>;
}

export interface Valid {
  /** Check whether client is authenticated */
  get(
    options?: OAuth2ValidParameters
  ): StreamableMethod<OAuth2Valid204Response>;
}

export interface Invalid {
  /** Check whether client is authenticated. Will return an invalid bearer error. */
  get(
    options?: OAuth2InvalidParameters
  ): StreamableMethod<OAuth2Invalid204Response | OAuth2Invalid403Response>;
}

export interface Routes {
  /** Resource for '/authentication/oauth2/valid' has methods for the following verbs: get */
  (path: "/authentication/oauth2/valid"): Valid;
  /** Resource for '/authentication/oauth2/invalid' has methods for the following verbs: get */
  (path: "/authentication/oauth2/invalid"): Invalid;
}

export type AuthOauth2Client = Client & {
  path: Routes;
  oAuth2: OAuth2Operations;
};

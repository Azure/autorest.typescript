import {
  ParamsHeadNoParamsParameters,
  ParamsGetRequiredParameters,
  ParamsPutRequiredOptionalParameters,
  ParamsPostParametersParameters,
  ParamsGetOptionalParameters,
} from "./parameters";
import {
  ParamsHeadNoParams200Response,
  ParamsGetRequired200Response,
  ParamsPutRequiredOptional200Response,
  ParamsPostParameters200Response,
  ParamsGetOptional200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface HeadNoParams {
  /**
   * Head request, no params.
   *  Initially has no query parameters. After evolution, a new optional query parameter is added
   */
  head(
    options?: ParamsHeadNoParamsParameters
  ): StreamableMethod<ParamsHeadNoParams200Response>;
  /**
   * Get true Boolean value on path.
   *  Initially only has one required Query Parameter. After evolution, a new optional query parameter is added
   */
  get(
    options: ParamsGetRequiredParameters
  ): StreamableMethod<ParamsGetRequired200Response>;
  /** Initially has one required query parameter and one optional query parameter.  After evolution, a new optional query parameter is added */
  put(
    options: ParamsPutRequiredOptionalParameters
  ): StreamableMethod<ParamsPutRequiredOptional200Response>;
}

export interface PostParameters {
  /** POST a JSON */
  post(
    options?: ParamsPostParametersParameters
  ): StreamableMethod<ParamsPostParameters200Response>;
}

export interface GetOptional {
  /**
   * Get true Boolean value on path.
   *  Initially has one optional query parameter. After evolution, a new optional query parameter is added
   */
  get(
    options?: ParamsGetOptionalParameters
  ): StreamableMethod<ParamsGetOptional200Response>;
}

export interface Routes {
  /** Resource for '/resilency/servicedriven1/parameters' has methods for the following verbs: head, get, put */
  (path: "/resilency/servicedriven1/parameters"): HeadNoParams;
  /** Resource for '/resilency/servicedriven1/parameters/\{contentTypePath\}' has methods for the following verbs: post */
  (
    path: "/resilency/servicedriven1/parameters/{contentTypePath}",
    contentTypePath: "json"
  ): PostParameters;
  /** Resource for '/resilency/servicedriven1/moreParameters' has methods for the following verbs: get */
  (path: "/resilency/servicedriven1/moreParameters"): GetOptional;
}

export type ResiliencyServiceDriven1Client = Client & {
  path: Routes;
};

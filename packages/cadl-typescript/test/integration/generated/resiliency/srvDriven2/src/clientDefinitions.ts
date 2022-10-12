import {
  ParamsHeadNoParamsParameters,
  ParamsGetRequiredParameters,
  ParamsPutRequiredOptionalParameters,
  ParamsDeleteParametersParameters,
  ParamsPostParametersParameters,
  ParamsGetOptionalParameters,
  ParamsGetNewOperationParameters,
} from "./parameters";
import {
  ParamsHeadNoParams200Response,
  ParamsGetRequired200Response,
  ParamsPutRequiredOptional200Response,
  ParamsDeleteParameters204Response,
  ParamsPostParameters200Response,
  ParamsGetOptional200Response,
  ParamsGetNewOperation200Response,
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
  /**
   * Delete something.
   *  Initially the path exists but there is no delete method. After evolution this is a new method in a known path
   */
  delete(
    options?: ParamsDeleteParametersParameters
  ): StreamableMethod<ParamsDeleteParameters204Response>;
}

export interface PostParameters {
  /** POST a JSON or a JPEG */
  post(
    options: ParamsPostParametersParameters
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

export interface GetNewOperation {
  /**
   * I'm a new operation.
   *  Initially neither path or method exist for this operation. After evolution, this is a new method in a new path
   */
  get(
    options?: ParamsGetNewOperationParameters
  ): StreamableMethod<ParamsGetNewOperation200Response>;
}

export interface Routes {
  /** Resource for '/serviceDriven2/serviceDriven/parameters' has methods for the following verbs: head, get, put, delete */
  (path: "/serviceDriven2/serviceDriven/parameters"): HeadNoParams;
  /** Resource for '/serviceDriven2/serviceDriven/parameters/\{contentTypePath\}' has methods for the following verbs: post */
  (
    path: "/serviceDriven2/serviceDriven/parameters/{contentTypePath}",
    contentTypePath: "json" | "jpeg"
  ): PostParameters;
  /** Resource for '/serviceDriven2/serviceDriven/moreParameters' has methods for the following verbs: get */
  (path: "/serviceDriven2/serviceDriven/moreParameters"): GetOptional;
  /** Resource for '/serviceDriven2/serviceDriven/newPath' has methods for the following verbs: get */
  (path: "/serviceDriven2/serviceDriven/newPath"): GetNewOperation;
}

export type ResiliencyServiceDriven2Client = Client & {
  path: Routes;
};

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  HttpOperationResponse,
  OperationArguments,
  OperationResponse,
  OperationSpec
} from "@azure/core-http";
import {
  LroResourceLocationConfig,
  GetLroStatusFromResponse,
  LongRunningOperation,
  LroConfig,
  LroMode,
  LroResponse,
  LroStatus,
  createGetLroStatusFromResponse,
  RawResponse
} from "./lro";

export const successStates = ["succeeded"];
export const failureStates = ["failed", "canceled", "cancelled"];
export const terminalStates = successStates.concat(failureStates);

export type SendOperationFn<T> = (
  args: OperationArguments,
  spec: OperationSpec
) => Promise<LroResponse<T>>;

export function createPollingMethod<TResult>(
  sendOperationFn: SendOperationFn<TResult>,
  getLroStatusFromResponse: GetLroStatusFromResponse<TResult>,
  args: OperationArguments,
  spec: OperationSpec,
  mode?: LroMode
): (path?: string) => Promise<LroStatus<TResult>> {
  /**
   * Polling calls will always return a status object i.e. {"status": "success"}
   * these intermediate responses are not described in the swagger so we need to
   * pass custom mappers at runtime.
   * This function replaces all the existing mappers to be able to deserialize a status object
   * @param responses Original set of responses defined in the operation
   */
  function getCompositeMappers(responses: {
    [responseCode: string]: OperationResponse;
  }): {
    [responseCode: string]: OperationResponse;
  } {
    return Object.keys(responses).reduce((acc, statusCode) => {
      return {
        ...acc,
        [statusCode]: {
          ...responses[statusCode],
          bodyMapper: {
            type: {
              name: "Composite",
              modelProperties: {
                status: {
                  serializedName: "status",
                  type: {
                    name: "String"
                  }
                }
              }
            }
          }
        }
      };
    }, {} as { [responseCode: string]: OperationResponse });
  }
  // Make sure we don't send any body to the get request
  const { requestBody, responses, ...restSpec } = spec;
  if (mode === "AzureAsync") {
    return async (path?: string) => {
      const { flatResponse, rawResponse } = await sendOperationFn(args, {
        ...restSpec,
        responses: getCompositeMappers(responses),
        httpMethod: "GET",
        ...(path && { path })
      });
      return getLroStatusFromResponse(rawResponse, flatResponse as TResult);
    };
  }
  return async (path?: string) => {
    const { flatResponse, rawResponse } = await sendOperationFn(args, {
      ...restSpec,
      responses: responses,
      httpMethod: "GET",
      ...(path && { path })
    });
    return getLroStatusFromResponse(rawResponse, flatResponse as TResult);
  };
}

/**
 * We need to selectively deserialize our responses, only deserializing if we
 * are in a final Lro response, not deserializing any polling non-terminal responses
 */
export function shouldDeserializeLro(lroResourceLocationConfig?: string) {
  let initialOperationInfo: LroResponseInfo | undefined;
  let isInitialRequest = true;

  return (response: HttpOperationResponse) => {
    if (response.status < 200 || response.status >= 300) {
      return true;
    }

    if (!initialOperationInfo) {
      initialOperationInfo = getLroData(response);
    } else {
      isInitialRequest = false;
    }

    if (
      initialOperationInfo.azureAsyncOperation ||
      initialOperationInfo.operationLocation
    ) {
      return (
        !isInitialRequest &&
        isAsyncOperationFinalResponse(
          response,
          initialOperationInfo,
          lroResourceLocationConfig
        )
      );
    }

    if (initialOperationInfo.location) {
      return isLocationFinalResponse(response);
    }

    if (initialOperationInfo.requestMethod === "PUT") {
      return isBodyPollingFinalResponse(response);
    }

    return true;
  };
}

function isAsyncOperationFinalResponse(
  response: HttpOperationResponse,
  initialOperationInfo: LroResponseInfo,
  lroResourceLocationConfig?: string
): boolean {
  const status: string = response.parsedBody?.status || "Succeeded";
  if (!terminalStates.includes(status.toLowerCase())) {
    return false;
  }

  if (initialOperationInfo.requestMethod === "DELETE") {
    return true;
  }

  if (
    initialOperationInfo.requestMethod === "PUT" &&
    lroResourceLocationConfig &&
    lroResourceLocationConfig.toLowerCase() === "azure-asyncoperation"
  ) {
    return true;
  }

  if (
    initialOperationInfo.requestMethod !== "PUT" &&
    !initialOperationInfo.location
  ) {
    return true;
  }

  return false;
}

function isLocationFinalResponse(response: HttpOperationResponse): boolean {
  return response.status !== 202;
}

function isBodyPollingFinalResponse(response: HttpOperationResponse): boolean {
  const provisioningState: string =
    response.parsedBody?.properties?.provisioningState || "Succeeded";

  if (terminalStates.includes(provisioningState.toLowerCase())) {
    return true;
  }

  return false;
}

interface LroResponseInfo {
  requestMethod: string;
  azureAsyncOperation?: string;
  operationLocation?: string;
  location?: string;
}

function getLroData(result: HttpOperationResponse): LroResponseInfo {
  return {
    azureAsyncOperation: result.headers.get("azure-asyncoperation"),
    operationLocation: result.headers.get("operation-location"),
    location: result.headers.get("location"),
    requestMethod: result.request.method
  };
}

export function getSpecPath(spec: OperationSpec): string {
  if (spec.path) {
    return spec.path;
  } else {
    throw Error("Bad spec: request path is not found!");
  }
}

export class CoreHttpLro<T> implements LongRunningOperation<T> {
  constructor(
    private sendOperationFn: SendOperationFn<T>,
    private args: OperationArguments,
    private spec: OperationSpec,
    private lroResourceLocationConfig?: LroResourceLocationConfig,
    public requestPath: string = spec.path!,
    public requestMethod: string = spec.httpMethod
  ) {}
  public async sendInitialRequest(
    initializeState: (
      rawResponse: RawResponse,
      flatResponse: unknown
    ) => boolean
  ): Promise<LroResponse<T>> {
    const response = await this.sendOperationFn(this.args, this.spec);
    initializeState(response.rawResponse, response.flatResponse);
    return response;
  }

  public async sendPollRequest(
    config: LroConfig,
    path: string
  ): Promise<LroStatus<T>> {
    const getLroStatusFromResponse = createGetLroStatusFromResponse(
      this,
      config,
      this.lroResourceLocationConfig
    );
    return createPollingMethod(
      this.sendOperationFn,
      getLroStatusFromResponse,
      this.args,
      this.spec,
      config.mode
    )(path);
  }

  public async retrieveAzureAsyncResource(
    path?: string
  ): Promise<LroResponse<T>> {
    const updatedArgs = { ...this.args };
    if (updatedArgs.options) {
      (updatedArgs.options as any).shouldDeserialize = true;
    }
    return createPollingMethod(
      this.sendOperationFn,
      (rawResponse, flatResponse) => ({
        rawResponse,
        flatResponse,
        done: true
      }),
      updatedArgs,
      this.spec
    )(path);
  }
}

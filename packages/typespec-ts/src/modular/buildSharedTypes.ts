import { Project, SourceFile } from "ts-morph";
import { Client } from "./modularCodeModel.js";
import { isLro, isPagingLro } from "./helpers/operationHelpers.js";

const content = `
import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
 
/**
 * Common options to set on an outgoing operation
 */
export interface RequestOptions {
/**
 * Options to set on an outgoing HTTP request
 */
  requestOptions?: {
    /**
     * Headers to send along with the request
     */
    headers?: RawHttpHeadersInput;
    /** Set to true if the request is sent over HTTP instead of HTTPS */
    allowInsecureConnection?: boolean;
    /** Set to true if you want to skip encoding the path parameters */
    skipUrlEncoding?: boolean;
  };
}`;

/**
 * Creates a file with common interfaces. This should be moved to core
 */
export function buildSharedTypes(
  project: Project,
  srcPath: string
): SourceFile {
  const path = `${srcPath}/src/common/interfaces.ts`;
  const commonTypes = project.createSourceFile(path, content);

  commonTypes.fixMissingImports({}, { importModuleSpecifierEnding: "js" });

  return commonTypes;
}

const lroContent = `
import {
  CreateHttpPollerOptions,
  LongRunningOperation,
  LroResponse,
  OperationState,
  SimplePollerLike,
  createHttpPoller
} from "@azure/core-lro";


export interface GetLongRunningPollerOptions<
  TResponse extends HttpResponse = HttpResponse
> {
  requestMethod: string;
  requestUrl: string;
  sendInitialRequestFn: (
    context: Client,
    ...args: unknown[]
  ) => StreamableMethod<TResponse>;
  sendInitialRequestFnArgs: unknown[];
  deserializeFn: (response: TResponse) => Promise<unknown>;
  createPollerOptions: CreateHttpPollerOptions<
    unknown,
    OperationState<unknown>
  >;
}

export async function getLongRunningPoller<TResponse extends HttpResponse>(
  client: Client,
  options: GetLongRunningPollerOptions<TResponse>
): Promise<SimplePollerLike<OperationState<unknown>, unknown>> {
  let initialResponse: TResponse;
  const poller: LongRunningOperation<unknown> = {
    requestMethod: options.requestMethod,
    requestPath: options.requestUrl,
    sendInitialRequest: async () => {
      initialResponse = (await options.sendInitialRequestFn(
        client,
        ...options.sendInitialRequestFnArgs
      )) as TResponse;
      return getLroResponse(initialResponse, options.deserializeFn);
    },
    sendPollRequest: async (path) => {
      // This is the callback that is going to be called to poll the service
      // to get the latest status. We use the client provided and the polling path
      // which is an opaque URL provided by caller, the service sends this in one of the following headers: operation-location, azure-asyncoperation or location
      // depending on the lro pattern that the service implements. If non is provided we default to the initial path.
      if (!path || path === options.requestUrl) {
        path = initialResponse.request.url ?? options.requestUrl;
      }
      const response = await client.pathUnchecked(path).get();
      const lroResponse = getLroResponse(
        response as TResponse,
        options.deserializeFn
      );
      if (initialResponse.request.url) {
        lroResponse.rawResponse.headers["x-ms-original-url"] =
          initialResponse.request.url;
      }
      return lroResponse;
    }
  };

  return await createHttpPoller(poller, options.createPollerOptions);
}

/**
 * Converts a Rest Client response to a response that the LRO implementation understands
 * @param response - a rest client http response
 * @param deserializeFn - deserialize function to convert Rest response to modular output
 * @returns - An LRO response that the LRO implementation understands
 */
function getLroResponse<TResponse extends HttpResponse>(
  response: TResponse,
  deserializeFn: (result: TResponse) => Promise<unknown>
): LroResponse {
  if (Number.isNaN(response.status)) {
    throw new TypeError(
      \`Status code of the response is not a number. Value: \${response.status}\`
    );
  }

  return {
    flatResponse: deserializeFn(response),
    rawResponse: {
      ...response,
      statusCode: Number.parseInt(response.status),
      body: response.body
    }
  };
}
`;

export function buildLroImpl(
  client: Client,
  project: Project,
  srcPath: string
): SourceFile | undefined {
  const hasLro = client.operationGroups.some((group) =>
    group.operations.some(isLro || isPagingLro)
  );
  if (!hasLro) {
    return;
  }
  const path = `${srcPath}/src/common/lroImpl.ts`;
  const commonTypes = project.createSourceFile(path, lroContent);

  commonTypes.fixMissingImports({}, { importModuleSpecifierEnding: "js" });

  return commonTypes;
}

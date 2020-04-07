import {
  RequestPolicy,
  RequestPolicyOptions,
  BaseRequestPolicy,
  HttpOperationResponse,
  WebResource,
  OperationSpec,
  OperationResponse
} from "@azure/core-http";
import { getLROData, shouldDeserializeLRO } from "./requestUtils";
import { isEmpty } from "lodash";

export function lroPolicy() {
  return {
    create: (nextPolicy: RequestPolicy, options: RequestPolicyOptions) => {
      return new LROPolicy(nextPolicy, options);
    }
  };
}

class LROPolicy extends BaseRequestPolicy {
  constructor(nextPolicy: RequestPolicy, options: RequestPolicyOptions) {
    super(nextPolicy, options);
  }

  public async sendRequest(
    webResource: WebResource
  ): Promise<HttpOperationResponse> {
    webResource.shouldDeserialize;
    webResource.operationSpec = injectMissingResponses(
      webResource.operationSpec
    );
    let result = await this._nextPolicy.sendRequest(webResource);
    const _lroData = getLROData(result);
    result.parsedBody = { ...result.parsedBody, _lroData };
    return result;
  }
}

/**
 * SWAGGER doesn't require to define all possible response codes
 * for the polling operations, since we need to send operation specs
 * to coreHttp we'll inject possible response codes. The stub responses
 * will be a clone of the first success response defined
 */
function injectMissingResponses(
  operationSpec?: OperationSpec
): OperationSpec | undefined {
  const acceptedResponses = [200, 201, 202, 204];

  if (!operationSpec) {
    return operationSpec;
  }

  // Use an already defined accepted response as base;
  const baseResponse = acceptedResponses.reduce((acc, status) => {
    if (!isEmpty(acc)) {
      return acc;
    }

    const response = operationSpec.responses[`${status}`];
    if (response) {
      acc = response;
    }

    return acc;
  }, {} as OperationResponse);

  const responses = acceptedResponses.reduce((responses, status) => {
    let currentResponse = operationSpec.responses[`${status}`];
    if (!currentResponse) {
      currentResponse = { ...baseResponse };
    }

    return { ...responses, [`${status}`]: currentResponse };
  }, {} as { [responseCode: string]: OperationResponse });

  return { ...operationSpec, responses };
}

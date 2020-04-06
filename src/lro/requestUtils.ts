import { HttpOperationResponse } from "@azure/core-http";
import { terminalStates } from "./constants";
import { LROResponseInfo } from "./models";

/**
 * We need to selectively deserialize our responses, only deserializing if we
 * are in a final LRO response, not deserializing any polling non-terminal responses
 */
export function shouldDeserializeLRO({
  initialRequestMethod,
  isInitialRequest
}: LROResponseInfo) {
  let initialOperationInfo: LROResponseInfo = {
    initialRequestMethod
  };

  return (response: HttpOperationResponse) => {
    if (isInitialRequest) {
      initialOperationInfo = {
        ...getLROData(response),
        ...initialOperationInfo
      };
    }

    if (
      initialOperationInfo.azureAsyncOperation ||
      initialOperationInfo.operationLocation
    ) {
      return !isInitialRequest && isAsyncOperationFinalResponse(response);
    }

    if (initialOperationInfo.location) {
      return isLocationFinalResponse(response);
    }

    if (initialOperationInfo.initialRequestMethod === "PUT") {
      return isBodyPollingFinalResponse(response);
    }

    return true;
  };
}

function isAsyncOperationFinalResponse(
  response: HttpOperationResponse
): boolean {
  return true;
}

function isLocationFinalResponse(response: HttpOperationResponse): boolean {
  return false;
}

function isBodyPollingFinalResponse(response: HttpOperationResponse): boolean {
  const provisioningState: string =
    response.parsedBody.properties?.provisioningState || "Succeeded";

  if (terminalStates.includes(provisioningState.toLowerCase())) {
    return true;
  }

  return false;
}

export function getLROData(result: HttpOperationResponse): LROResponseInfo {
  const { status, properties } = JSON.parse(result.bodyAsText || "{}");
  return {
    azureAsyncOperation: result.headers.get("azure-asyncoperation"),
    operationLocation: result.headers.get("operation-location"),
    location: result.headers.get("location"),
    initialRequestMethod: result.request.method,
    status,
    provisioningState: properties?.provisioningState
  };
}

import { BaseResult, FinalStateVia, LROResult } from "./models";
import { terminalStates } from "./constants";
import { getResponseStatus } from "./requestUtils";

export function createAzureAsyncOperationStrategy<TResult extends BaseResult>(
  pollOnce: (pollingURL: string) => Promise<TResult>,
  restrieveResource: (path?: string) => Promise<TResult>,
  resourceLocation?: string,
  finalStateVia?: FinalStateVia
): (pollingURL: string) => Promise<LROResult<TResult>> {
  async function sendFinalRequest(
    result: LROResult<TResult>
  ): Promise<LROResult<TResult>> {
    const sendFinalGet = async (path?: string): Promise<LROResult<TResult>> => {
      const result = await restrieveResource(path);
      return {
        result,
        done: true
      };
    };
    switch (finalStateVia) {
      case "original-uri":
        return sendFinalGet();
      case "azure-async-operation":
        return result;
      case "location":
      default:
        return sendFinalGet(resourceLocation);
    }
  }
  return async (pollingURL: string): Promise<LROResult<TResult>> => {
    const response = await pollOnce(pollingURL);
    const status = getResponseStatus(response._response);
    const result = {
      result: response,
      done: terminalStates.includes(status)
    };
    if (status === "succeeded" && resourceLocation !== undefined) {
      return sendFinalRequest(result);
    }
    return result;
  };
}

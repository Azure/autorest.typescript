import { BaseResult, LROResult } from "./models";
import { isBodyPollingDone } from "./requestUtils";

/**
 * Creates a polling strategy based on BodyPolling which uses the provisioning state
 * from the result to determine the current operation state
 */
export function createBodyPollingStrategy<TResult extends BaseResult>(
  pollOnce: (pollingURL: string) => Promise<TResult>
): (pollingURL: string) => Promise<LROResult<TResult>> {
  return async (pollingURL: string) => {
    const result = await pollOnce(pollingURL);
    return {
      result,
      done: isBodyPollingDone(result)
    };
  };
}

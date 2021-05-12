import { BaseResult, LROResult } from "./models";
import { isLocationPollingDone } from "./requestUtils";

export function createLocationStrategy<TResult extends BaseResult>(
  pollOnce: (pollingURL: string) => Promise<TResult>
): (pollingURL: string) => Promise<LROResult<TResult>> {
  return async (pollingURL: string) => {
    const result = await pollOnce(pollingURL);
    return {
      result: result,
      done: isLocationPollingDone(result)
    };
  };
}

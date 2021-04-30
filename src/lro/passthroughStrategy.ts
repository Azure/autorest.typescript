import { BaseResult, LROResult } from "./models";

export function createPassthroughStrategy<TResult extends BaseResult>(
  pollOnce: (pollingURL: string) => Promise<TResult>
): (pollingURL: string) => Promise<LROResult<TResult>> {
  return async (pollingURL: string): Promise<LROResult<TResult>> => {
    const result = await pollOnce(pollingURL);
    return {
      result,
      done: true
    };
  };
}

import { LongRunningOperation, LroResponse } from "@azure/core-lro";

export class LroImpl<T> implements LongRunningOperation<T> {
  constructor(
    private sendOperationFn: (args: any, spec: any) => Promise<LroResponse<T>>,
    private args: any,
    private spec: any,
    public requestPath: string = spec.path,
    public requestMethod: string = spec.httpMethod
  ) {}
  public async sendInitialRequest(): Promise<LroResponse<T>> {
    return this.sendOperationFn(this.args, this.spec);
  }
  public async sendPollRequest(path: string): Promise<LroResponse<T>> {
    return this.sendOperationFn(this.args, {
      ...this.spec,
      path,
      httpMethod: "GET"
    });
  }
}

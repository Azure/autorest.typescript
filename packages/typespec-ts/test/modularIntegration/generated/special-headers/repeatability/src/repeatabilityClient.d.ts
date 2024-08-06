import { Pipeline } from "@azure/core-rest-pipeline";
import { RepeatabilityClientOptionalParams } from "./api/index.js";
import { ImmediateSuccessOptionalParams } from "./models/options.js";
export { RepeatabilityClientOptionalParams } from "./api/repeatabilityContext.js";
export declare class RepeatabilityClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: RepeatabilityClientOptionalParams);
    immediateSuccess(repeatabilityRequestID: string, repeatabilityFirstSent: Date, options?: ImmediateSuccessOptionalParams): Promise<void>;
}
//# sourceMappingURL=repeatabilityClient.d.ts.map
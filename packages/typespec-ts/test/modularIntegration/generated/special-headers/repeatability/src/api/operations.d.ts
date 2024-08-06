import { RepeatabilityContext as Client, ImmediateSuccess204Response } from "../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { ImmediateSuccessOptionalParams } from "../models/options.js";
export declare function _immediateSuccessSend(context: Client, repeatabilityRequestID: string, repeatabilityFirstSent: Date, options?: ImmediateSuccessOptionalParams): StreamableMethod<ImmediateSuccess204Response>;
export declare function _immediateSuccessDeserialize(result: ImmediateSuccess204Response): Promise<void>;
export declare function immediateSuccess(context: Client, repeatabilityRequestID: string, repeatabilityFirstSent: Date, options?: ImmediateSuccessOptionalParams): Promise<void>;
//# sourceMappingURL=operations.d.ts.map
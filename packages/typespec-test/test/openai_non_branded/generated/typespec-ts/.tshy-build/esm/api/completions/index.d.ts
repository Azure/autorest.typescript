import { CreateCompletionRequest, CreateCompletionResponse } from "../../models/models.js";
import { CompletionsCreate200Response, CompletionsCreateDefaultResponse, OpenAIContext as Client } from "../../rest/index.js";
import { StreamableMethod } from "@typespec/ts-http-runtime";
import { CompletionsCreateOptions } from "../../models/options.js";
export declare function _createSend(context: Client, body: CreateCompletionRequest, options?: CompletionsCreateOptions): StreamableMethod<CompletionsCreate200Response | CompletionsCreateDefaultResponse>;
export declare function _createDeserialize(result: CompletionsCreate200Response | CompletionsCreateDefaultResponse): Promise<CreateCompletionResponse>;
export declare function create(context: Client, body: CreateCompletionRequest, options?: CompletionsCreateOptions): Promise<CreateCompletionResponse>;
//# sourceMappingURL=index.d.ts.map
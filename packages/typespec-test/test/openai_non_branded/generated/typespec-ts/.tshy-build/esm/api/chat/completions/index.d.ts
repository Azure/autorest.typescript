import { CreateChatCompletionRequest, CreateChatCompletionResponse } from "../../../models/models.js";
import { ChatCompletionsCreate200Response, ChatCompletionsCreateDefaultResponse, OpenAIContext as Client } from "../../../rest/index.js";
import { StreamableMethod } from "@typespec/ts-http-runtime";
import { ChatCompletionsCreateOptions } from "../../../models/options.js";
export declare function _createSend(context: Client, body: CreateChatCompletionRequest, options?: ChatCompletionsCreateOptions): StreamableMethod<ChatCompletionsCreate200Response | ChatCompletionsCreateDefaultResponse>;
export declare function _createDeserialize(result: ChatCompletionsCreate200Response | ChatCompletionsCreateDefaultResponse): Promise<CreateChatCompletionResponse>;
export declare function create(context: Client, body: CreateChatCompletionRequest, options?: ChatCompletionsCreateOptions): Promise<CreateChatCompletionResponse>;
//# sourceMappingURL=index.d.ts.map
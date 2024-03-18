import { OpenAIContext } from "../../../api/OpenAIContext.js";
import { CreateChatCompletionRequest, CreateChatCompletionResponse } from "../../../models/models.js";
import { ChatCompletionsCreateOptions } from "../../../models/options.js";
export interface ChatCompletionsOperations {
    create: (body: CreateChatCompletionRequest, options?: ChatCompletionsCreateOptions) => Promise<CreateChatCompletionResponse>;
}
export declare function getChatCompletions(context: OpenAIContext): {
    create: (body: CreateChatCompletionRequest, options?: ChatCompletionsCreateOptions) => Promise<CreateChatCompletionResponse>;
};
export declare function getChatCompletionsOperations(context: OpenAIContext): ChatCompletionsOperations;
//# sourceMappingURL=index.d.ts.map
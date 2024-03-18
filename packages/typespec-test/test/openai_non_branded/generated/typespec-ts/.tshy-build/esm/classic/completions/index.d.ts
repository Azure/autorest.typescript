import { OpenAIContext } from "../../api/OpenAIContext.js";
import { CreateCompletionRequest, CreateCompletionResponse } from "../../models/models.js";
import { CompletionsCreateOptions } from "../../models/options.js";
export interface CompletionsOperations {
    create: (body: CreateCompletionRequest, options?: CompletionsCreateOptions) => Promise<CreateCompletionResponse>;
}
export declare function getCompletions(context: OpenAIContext): {
    create: (body: CreateCompletionRequest, options?: CompletionsCreateOptions) => Promise<CreateCompletionResponse>;
};
export declare function getCompletionsOperations(context: OpenAIContext): CompletionsOperations;
//# sourceMappingURL=index.d.ts.map
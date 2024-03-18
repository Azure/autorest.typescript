import { OpenAIContext } from "../../api/OpenAIContext.js";
import { ChatCompletionsOperations } from "./completions/index.js";
export interface ChatOperations {
    completions: ChatCompletionsOperations;
}
export declare function getChatOperations(context: OpenAIContext): ChatOperations;
//# sourceMappingURL=index.d.ts.map
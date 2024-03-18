import { KeyCredential } from "@typespec/ts-http-runtime";
import { ClientOptions } from "@typespec/ts-http-runtime";
import { OpenAIContext } from "../rest/index.js";
export interface OpenAIClientOptions extends ClientOptions {
}
export { OpenAIContext } from "../rest/index.js";
/** The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details. */
export declare function createOpenAI(credential: KeyCredential, options?: OpenAIClientOptions): OpenAIContext;
//# sourceMappingURL=OpenAIContext.d.ts.map
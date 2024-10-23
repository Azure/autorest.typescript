// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** An abstract representation of a chat message as provided in a request. */
export interface ChatRequestMessage {
  /** The chat role associated with this message. */
  /** The discriminator possible values: system, user, assistant, tool */
  role: ChatRole;
}

export function chatRequestMessageSerializer(item: ChatRequestMessage): any {
  return { role: item["role"] };
}

/** Alias for ChatRequestMessageUnion */
export type ChatRequestMessageUnion =
  | ChatRequestSystemMessage
  | ChatRequestUserMessage
  | ChatRequestAssistantMessage
  | ChatRequestToolMessage
  | ChatRequestMessage;

export function chatRequestMessageUnionSerializer(
  item: ChatRequestMessageUnion,
): any {
  switch (item.role) {
    case "system":
      return chatRequestSystemMessageSerializer(
        item as ChatRequestSystemMessage,
      );

    case "user":
      return chatRequestUserMessageSerializer(item as ChatRequestUserMessage);

    case "assistant":
      return chatRequestAssistantMessageSerializer(
        item as ChatRequestAssistantMessage,
      );

    case "tool":
      return chatRequestToolMessageSerializer(item as ChatRequestToolMessage);

    default:
      return chatRequestMessageSerializer(item);
  }
}

/** A description of the intended purpose of a message within a chat completions interaction. */
export type ChatRole = "system" | "user" | "assistant" | "tool";

/**
 * A request chat message containing system instructions that influence how the model will generate a chat completions
 * response.
 */
export interface ChatRequestSystemMessage extends ChatRequestMessage {
  /** The chat role associated with this message, which is always 'system' for system messages. */
  role: "system";
  /** The contents of the system message. */
  content: string;
}

export function chatRequestSystemMessageSerializer(
  item: ChatRequestSystemMessage,
): any {
  return { role: item["role"], content: item["content"] };
}

/** A request chat message representing user input to the assistant. */
export interface ChatRequestUserMessage extends ChatRequestMessage {
  /** The chat role associated with this message, which is always 'user' for user messages. */
  role: "user";
  /** The contents of the user message, with available input types varying by selected model. */
  content: string;
}

export function chatRequestUserMessageSerializer(
  item: ChatRequestUserMessage,
): any {
  return { role: item["role"], content: item["content"] };
}

/** A request chat message representing response or action from the assistant. */
export interface ChatRequestAssistantMessage extends ChatRequestMessage {
  /** The chat role associated with this message, which is always 'assistant' for assistant messages. */
  role: "assistant";
  /** The content of the message. */
  content?: string | null;
  /**
   * The tool calls that must be resolved and have their outputs appended to subsequent input messages for the chat
   * completions request to resolve as configured.
   */
  toolCalls?: ChatCompletionsToolCallUnion[];
}

export function chatRequestAssistantMessageSerializer(
  item: ChatRequestAssistantMessage,
): any {
  return {
    role: item["role"],
    content: item["content"],
    tool_calls: !item["toolCalls"]
      ? item["toolCalls"]
      : chatCompletionsToolCallUnionArraySerializer(item["toolCalls"]),
  };
}

/**
 * An abstract representation of a tool call that must be resolved in a subsequent request to perform the requested
 * chat completion.
 */
export interface ChatCompletionsToolCall {
  /** The object type. */
  /** The discriminator possible values: function */
  type: string;
  /** The ID of the tool call. */
  id: string;
}

export function chatCompletionsToolCallSerializer(
  item: ChatCompletionsToolCall,
): any {
  return { type: item["type"], id: item["id"] };
}

export function chatCompletionsToolCallDeserializer(
  item: any,
): ChatCompletionsToolCall {
  return {
    type: item["type"],
    id: item["id"],
  };
}

/** Alias for ChatCompletionsToolCallUnion */
export type ChatCompletionsToolCallUnion =
  | ChatCompletionsFunctionToolCall
  | ChatCompletionsToolCall;

export function chatCompletionsToolCallUnionSerializer(
  item: ChatCompletionsToolCallUnion,
): any {
  switch (item.type) {
    case "function":
      return chatCompletionsFunctionToolCallSerializer(
        item as ChatCompletionsFunctionToolCall,
      );

    default:
      return chatCompletionsToolCallSerializer(item);
  }
}

export function chatCompletionsToolCallUnionDeserializer(
  item: any,
): ChatCompletionsToolCallUnion {
  switch (item.type) {
    case "function":
      return chatCompletionsFunctionToolCallDeserializer(
        item as ChatCompletionsFunctionToolCall,
      );

    default:
      return chatCompletionsToolCallDeserializer(item);
  }
}

/**
 * A tool call to a function tool, issued by the model in evaluation of a configured function tool, that represents
 * a function invocation needed for a subsequent chat completions request to resolve.
 */
export interface ChatCompletionsFunctionToolCall
  extends ChatCompletionsToolCall {
  /** The type of tool call, in this case always 'function'. */
  type: "function";
  /** The details of the function invocation requested by the tool call. */
  function: FunctionCall;
}

export function chatCompletionsFunctionToolCallSerializer(
  item: ChatCompletionsFunctionToolCall,
): any {
  return {
    type: item["type"],
    id: item["id"],
    function: functionCallSerializer(item["function"]),
  };
}

export function chatCompletionsFunctionToolCallDeserializer(
  item: any,
): ChatCompletionsFunctionToolCall {
  return {
    type: item["type"],
    id: item["id"],
    function: functionCallDeserializer(item["function"]),
  };
}

/** The name and arguments of a function that should be called, as generated by the model. */
export interface FunctionCall {
  /** The name of the function to call. */
  name: string;
  /**
   * The arguments to call the function with, as generated by the model in JSON format.
   * Note that the model does not always generate valid JSON, and may hallucinate parameters
   * not defined by your function schema. Validate the arguments in your code before calling
   * your function.
   */
  arguments: string;
}

export function functionCallSerializer(item: FunctionCall): any {
  return { name: item["name"], arguments: item["arguments"] };
}

export function functionCallDeserializer(item: any): FunctionCall {
  return {
    name: item["name"],
    arguments: item["arguments"],
  };
}

export function chatCompletionsToolCallUnionArraySerializer(
  result: Array<ChatCompletionsToolCallUnion>,
): any[] {
  return result.map((item) => {
    return chatCompletionsToolCallUnionSerializer(item);
  });
}

export function chatCompletionsToolCallUnionArrayDeserializer(
  result: Array<ChatCompletionsToolCallUnion>,
): any[] {
  return result.map((item) => {
    return chatCompletionsToolCallUnionDeserializer(item);
  });
}

/** A request chat message representing requested output from a configured tool. */
export interface ChatRequestToolMessage extends ChatRequestMessage {
  /** The chat role associated with this message, which is always 'tool' for tool messages. */
  role: "tool";
  /** The content of the message. */
  content: string | null;
  /** The ID of the tool call resolved by the provided content. */
  toolCallId: string;
}

export function chatRequestToolMessageSerializer(
  item: ChatRequestToolMessage,
): any {
  return {
    role: item["role"],
    content: item["content"],
    tool_call_id: item["toolCallId"],
  };
}

/** An abstract representation of a tool that can be used by the model to improve a chat completions response. */
export interface ChatCompletionsToolDefinition {
  /** The object type. */
  /** The discriminator possible values: function */
  type: string;
}

export function chatCompletionsToolDefinitionSerializer(
  item: ChatCompletionsToolDefinition,
): any {
  return { type: item["type"] };
}

/** Alias for ChatCompletionsToolDefinitionUnion */
export type ChatCompletionsToolDefinitionUnion =
  | ChatCompletionsFunctionToolDefinition
  | ChatCompletionsToolDefinition;

export function chatCompletionsToolDefinitionUnionSerializer(
  item: ChatCompletionsToolDefinitionUnion,
): any {
  switch (item.type) {
    case "function":
      return chatCompletionsFunctionToolDefinitionSerializer(
        item as ChatCompletionsFunctionToolDefinition,
      );

    default:
      return chatCompletionsToolDefinitionSerializer(item);
  }
}

/** The definition information for a chat completions function tool that can call a function in response to a tool call. */
export interface ChatCompletionsFunctionToolDefinition
  extends ChatCompletionsToolDefinition {
  /** The object name, which is always 'function'. */
  type: "function";
  /** The function definition details for the function tool. */
  function: FunctionDefinition;
}

export function chatCompletionsFunctionToolDefinitionSerializer(
  item: ChatCompletionsFunctionToolDefinition,
): any {
  return {
    type: item["type"],
    function: functionDefinitionSerializer(item["function"]),
  };
}

/** The definition of a caller-specified function that chat completions may invoke in response to matching user input. */
export interface FunctionDefinition {
  /** The name of the function to be called. */
  name: string;
  /**
   * A description of what the function does. The model will use this description when selecting the function and
   * interpreting its parameters.
   */
  description?: string;
  /** The parameters the function accepts, described as a JSON Schema object. */
  parameters?: any;
}

export function functionDefinitionSerializer(item: FunctionDefinition): any {
  return {
    name: item["name"],
    description: item["description"],
    parameters: item["parameters"],
  };
}

/** An abstract representation of an explicit, named tool selection to use for a chat completions request. */
export interface ChatCompletionsNamedToolSelection {
  /** The object type. */
  /** The discriminator possible values: function */
  type: string;
}

export function chatCompletionsNamedToolSelectionSerializer(
  item: ChatCompletionsNamedToolSelection,
): any {
  return { type: item["type"] };
}

/** Alias for ChatCompletionsNamedToolSelectionUnion */
export type ChatCompletionsNamedToolSelectionUnion =
  | ChatCompletionsNamedFunctionToolSelection
  | ChatCompletionsNamedToolSelection;

export function chatCompletionsNamedToolSelectionUnionSerializer(
  item: ChatCompletionsNamedToolSelectionUnion,
): any {
  switch (item.type) {
    case "function":
      return chatCompletionsNamedFunctionToolSelectionSerializer(
        item as ChatCompletionsNamedFunctionToolSelection,
      );

    default:
      return chatCompletionsNamedToolSelectionSerializer(item);
  }
}

/** A tool selection of a specific, named function tool that will limit chat completions to using the named function. */
export interface ChatCompletionsNamedFunctionToolSelection
  extends ChatCompletionsNamedToolSelection {
  /** The object type, which is always 'function'. */
  type: "function";
  /** The function that should be called. */
  function: ChatCompletionsFunctionToolSelection;
}

export function chatCompletionsNamedFunctionToolSelectionSerializer(
  item: ChatCompletionsNamedFunctionToolSelection,
): any {
  return {
    type: item["type"],
    function: chatCompletionsFunctionToolSelectionSerializer(item["function"]),
  };
}

/** A tool selection of a specific, named function tool that will limit chat completions to using the named function. */
export interface ChatCompletionsFunctionToolSelection {
  /** The name of the function that should be called. */
  name: string;
}

export function chatCompletionsFunctionToolSelectionSerializer(
  item: ChatCompletionsFunctionToolSelection,
): any {
  return { name: item["name"] };
}

export function chatRequestMessageUnionArraySerializer(
  result: Array<ChatRequestMessageUnion>,
): any[] {
  return result.map((item) => {
    return chatRequestMessageUnionSerializer(item);
  });
}

/**
 * An representation of a response format configuration usable by Chat Completions. Can be used to enable JSON
 * mode.
 */
export type ChatCompletionsResponseFormat = "text" | "json_object";

export function chatCompletionsToolDefinitionUnionArraySerializer(
  result: Array<ChatCompletionsToolDefinitionUnion>,
): any[] {
  return result.map((item) => {
    return chatCompletionsToolDefinitionUnionSerializer(item);
  });
}

/** Alias for _CompleteRequestToolChoice */
export type _CompleteRequestToolChoice =
  | ChatCompletionsToolSelectionPreset
  | ChatCompletionsNamedToolSelectionUnion;

export function _completeRequestToolChoiceSerializer(
  item: _CompleteRequestToolChoice,
): any {
  return item;
}

export function _completeRequestToolChoiceDeserializer(
  item: any,
): _CompleteRequestToolChoice {
  return item;
}

/** Represents a generic policy for how a chat completions tool may be selected. */
export type ChatCompletionsToolSelectionPreset = "auto" | "none" | "required";

/**
 * Representation of the response data from a chat completions request.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export interface ChatCompletions {
  /** A unique identifier associated with this chat completions response. */
  id: string;
  /**
   * The first timestamp associated with generation activity for this completions response,
   * represented as seconds since the beginning of the Unix epoch of 00:00 on 1 Jan 1970.
   */
  created: Date;
  /** The model used for the chat completion. */
  model: string;
  /** Usage information for tokens processed and generated as part of this completions operation. */
  usage: CompletionsUsage;
  /**
   * The collection of completions choices associated with this completions response.
   * Generally, `n` choices are generated per provided prompt with a default value of 1.
   * Token limits and other settings may limit the number of choices generated.
   */
  choices: ChatChoice[];
}

export function chatCompletionsDeserializer(item: any): ChatCompletions {
  return {
    id: item["id"],
    created: new Date(item["created"]),
    model: item["model"],
    usage: completionsUsageDeserializer(item["usage"]),
    choices: chatChoiceArrayDeserializer(item["choices"]),
  };
}

/**
 * Representation of the token counts processed for a completions request.
 * Counts consider all tokens across prompts, choices, choice alternates, best_of generations, and
 * other consumers.
 */
export interface CompletionsUsage {
  /** Indicates whether your capacity has been affected by the usage amount (token count) reported here. */
  capacityType: CapacityType;
  /** The number of tokens generated across all completions emissions. */
  completionTokens: number;
  /** The number of tokens in the provided prompts for the completions request. */
  promptTokens: number;
  /** The total number of tokens processed for the completions request and response. */
  totalTokens: number;
}

export function completionsUsageDeserializer(item: any): CompletionsUsage {
  return {
    capacityType: item["capacity_type"],
    completionTokens: item["completion_tokens"],
    promptTokens: item["prompt_tokens"],
    totalTokens: item["total_tokens"],
  };
}

/** Whether your capacity has been affected by the usage amount (token count) reported here. */
export type CapacityType = "usage" | "fixed";

/**
 * The representation of a single prompt completion as part of an overall chat completions request.
 * Generally, `n` choices are generated per provided prompt with a default value of 1.
 * Token limits and other settings may limit the number of choices generated.
 */
export interface ChatChoice {
  /** The ordered index associated with this chat completions choice. */
  index: number;
  /** The reason that this chat completions choice completed its generated. */
  finishReason: CompletionsFinishReason | null;
  /** The chat message for a given chat completions prompt. */
  message: ChatResponseMessage;
}

export function chatChoiceDeserializer(item: any): ChatChoice {
  return {
    index: item["index"],
    finishReason: item["finish_reason"],
    message: chatResponseMessageDeserializer(item["message"]),
  };
}

/** Representation of the manner in which a completions response concluded. */
export type CompletionsFinishReason =
  | "stop"
  | "length"
  | "content_filter"
  | "tool_calls";

/** A representation of a chat message as received in a response. */
export interface ChatResponseMessage {
  /** The chat role associated with the message. */
  role: ChatRole;
  /** The content of the message. */
  content: string | null;
  /**
   * The tool calls that must be resolved and have their outputs appended to subsequent input messages for the chat
   * completions request to resolve as configured.
   */
  toolCalls?: ChatCompletionsToolCallUnion[];
}

export function chatResponseMessageDeserializer(
  item: any,
): ChatResponseMessage {
  return {
    role: item["role"],
    content: item["content"],
    toolCalls: !item["tool_calls"]
      ? item["tool_calls"]
      : chatCompletionsToolCallUnionArrayDeserializer(item["tool_calls"]),
  };
}

export function chatChoiceArrayDeserializer(result: Array<ChatChoice>): any[] {
  return result.map((item) => {
    return chatChoiceDeserializer(item);
  });
}

/** Represents some basic information about the AI model. */
export interface ModelInfo {
  /** The name of the AI model. For example: `Phi21` */
  modelName: string;
  /** The type of the AI model. A Unique identifier for the profile. */
  modelType: ModelType;
  /** The model provider name. For example: `Microsoft Research` */
  modelProviderName: string;
}

export function modelInfoDeserializer(item: any): ModelInfo {
  return {
    modelName: item["model_name"],
    modelType: item["model_type"],
    modelProviderName: item["model_provider_name"],
  };
}

/** The type of AI model */
export type ModelType =
  | "embeddings"
  | "image_generation"
  | "text_generation"
  | "image_embeddings"
  | "audio_generation"
  | "chat";
/**
 * The format of the embeddings result.
 * Returns a 422 error if the model doesn't support the value or parameter.
 */
export type EmbeddingEncodingFormat =
  | "base64"
  | "binary"
  | "float"
  | "int8"
  | "ubinary"
  | "uint8";
/** Represents the input types used for embedding search. */
export type EmbeddingInputType = "text" | "query" | "document";

/**
 * Representation of the response data from an embeddings request.
 * Embeddings measure the relatedness of text strings and are commonly used for search, clustering,
 * recommendations, and other similar scenarios.
 */
export interface EmbeddingsResult {
  /** Unique identifier for the embeddings result. */
  id: string;
  /** Embedding values for the prompts submitted in the request. */
  data: EmbeddingItem[];
  /** Usage counts for tokens input using the embeddings API. */
  usage: EmbeddingsUsage;
  /** The model ID used to generate this result. */
  model: string;
}

export function embeddingsResultDeserializer(item: any): EmbeddingsResult {
  return {
    id: item["id"],
    data: embeddingItemArrayDeserializer(item["data"]),
    usage: embeddingsUsageDeserializer(item["usage"]),
    model: item["model"],
  };
}

/** Representation of a single embeddings relatedness comparison. */
export interface EmbeddingItem {
  /**
   * List of embeddings value for the input prompt. These represent a measurement of the
   * vector-based relatedness of the provided input.
   */
  embedding: number[];
  /** Index of the prompt to which the EmbeddingItem corresponds. */
  index: number;
}

export function embeddingItemDeserializer(item: any): EmbeddingItem {
  return {
    embedding: item["embedding"].map((p: any) => {
      return p;
    }),
    index: item["index"],
  };
}

export function embeddingItemArrayDeserializer(
  result: Array<EmbeddingItem>,
): any[] {
  return result.map((item) => {
    return embeddingItemDeserializer(item);
  });
}

/** Measurement of the amount of tokens used in this request and response. */
export interface EmbeddingsUsage {
  /** Indicates whether your capacity has been affected by the usage amount (token count) reported here. */
  capacityType: CapacityType;
  /** Number of tokens in the request prompt. */
  inputTokens: number;
  /**
   * Number of tokens used for the prompt sent to the AI model. Typically identical to `input_tokens`.
   * However, certain AI models may add extra tokens to the input hence the number can be higher.
   * (for example when input_type="query").
   */
  promptTokens: number;
  /** Total number of tokens transacted in this request/response. */
  totalTokens: number;
}

export function embeddingsUsageDeserializer(item: any): EmbeddingsUsage {
  return {
    capacityType: item["capacity_type"],
    inputTokens: item["input_tokens"],
    promptTokens: item["prompt_tokens"],
    totalTokens: item["total_tokens"],
  };
}

/** Represents an image with optional text. */
export interface EmbeddingInput {
  /** The input image, in PNG format. */
  image: string;
  /**
   * Optional. The text input to feed into the model (like DINO, CLIP).
   * Returns a 422 error if the model doesn't support the value or parameter.
   */
  text?: string;
}

export function embeddingInputSerializer(item: EmbeddingInput): any {
  return { image: item["image"], text: item["text"] };
}

export function embeddingInputArraySerializer(
  result: Array<EmbeddingInput>,
): any[] {
  return result.map((item) => {
    return embeddingInputSerializer(item);
  });
}

/**
 * Represents a response update to a chat completions request, when the service is streaming updates
 * using Server Sent Events (SSE).
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export interface StreamingChatCompletionsUpdate {
  /** A unique identifier associated with this chat completions response. */
  id: string;
  /**
   * The first timestamp associated with generation activity for this completions response,
   * represented as seconds since the beginning of the Unix epoch of 00:00 on 1 Jan 1970.
   */
  created: Date;
  /** The model used for the chat completion. */
  model: string;
  /** Usage information for tokens processed and generated as part of this completions operation. */
  usage: CompletionsUsage;
  /**
   * An update to the collection of completion choices associated with this completions response.
   * Generally, `n` choices are generated per provided prompt with a default value of 1.
   * Token limits and other settings may limit the number of choices generated.
   */
  choices: StreamingChatChoiceUpdate[];
}

export function streamingChatCompletionsUpdateDeserializer(
  item: any,
): StreamingChatCompletionsUpdate {
  return {
    id: item["id"],
    created: new Date(item["created"]),
    model: item["model"],
    usage: completionsUsageDeserializer(item["usage"]),
    choices: streamingChatChoiceUpdateArrayDeserializer(item["choices"]),
  };
}

/**
 * Represents an update to a single prompt completion when the service is streaming updates
 * using Server Sent Events (SSE).
 * Generally, `n` choices are generated per provided prompt with a default value of 1.
 * Token limits and other settings may limit the number of choices generated.
 */
export interface StreamingChatChoiceUpdate {
  /** The ordered index associated with this chat completions choice. */
  index: number;
  /** The reason that this chat completions choice completed its generated. */
  finishReason: CompletionsFinishReason | null;
  /** An update to the chat message for a given chat completions prompt. */
  delta: ChatResponseMessage;
}

export function streamingChatChoiceUpdateDeserializer(
  item: any,
): StreamingChatChoiceUpdate {
  return {
    index: item["index"],
    finishReason: item["finish_reason"],
    delta: chatResponseMessageDeserializer(item["delta"]),
  };
}

export function streamingChatChoiceUpdateArrayDeserializer(
  result: Array<StreamingChatChoiceUpdate>,
): any[] {
  return result.map((item) => {
    return streamingChatChoiceUpdateDeserializer(item);
  });
}

/** Controls what happens if unknown parameters are passed in the JSON request payload. */
export type UnknownParams = "error" | "drop" | "pass_through";

// Licensed under the MIT License.

/** model interface AIChatCompletionRequest */
export interface AIChatCompletionRequest {
  messages: AIChatMessage[];
  context?: Record<string, any>;
  sessionState?: any;
}

export function aIChatCompletionRequestSerializer(
  item: AIChatCompletionRequest,
): any {
  return {
    messages: aIChatMessageArraySerializer(item["messages"]),
    context: item["context"],
    sessionState: item["sessionState"],
  };
}

export function aIChatMessageArraySerializer(
  result: Array<AIChatMessage>,
): any[] {
  return result.map((item) => {
    return aIChatMessageSerializer(item);
  });
}

/** model interface AIChatMessage */
export interface AIChatMessage {
  role: AIChatRole;
  content: string;
  context?: Record<string, any>;
}

export function aIChatMessageSerializer(item: AIChatMessage): any {
  return {
    role: item["role"],
    content: item["content"],
    context: item["context"],
  };
}

/** Type of AIChatRole */
export type AIChatRole = "assistant" | "user" | "system";

/** model interface AIChatErrorResponse */
export interface AIChatErrorResponse {
  error: AIChatError;
}

export function aIChatErrorResponseDeserializer(
  item: any,
): AIChatErrorResponse {
  return {
    error: aIChatErrorDeserializer(item["error"]),
  };
}

/** model interface AIChatError */
export interface AIChatError {
  code: string;
  message: string;
}

export function aIChatErrorDeserializer(item: any): AIChatError {
  return {
    code: item["code"],
    message: item["message"],
  };
}

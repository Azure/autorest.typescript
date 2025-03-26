// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** A single, role-attributed message within a chat completion interaction. */
export interface ChatMessage {
  /** The type of the message. If not specified, the message is assumed to be text. */
  /** The discriminator possible values: text */
  kind: MessageKind;
  /** The role associated with the message. */
  role: ChatRole;
  /**
   * Field that allows the chat app to store and retrieve data, the structure of such data is dependant on the backend
   * being used. The client must send back the data in this field unchanged in subsequent requests, until the chat app
   * sends a new one. The data in this field can be used to implement stateful services, such as remembering previous
   * conversations or user preferences.
   */
  sessionState?: any;
}

export function chatMessageSerializer(item: ChatMessage): any {
  return {
    kind: item["kind"],
    role: item["role"],
    sessionState: item["sessionState"],
  };
}

export function chatMessageDeserializer(item: any): ChatMessage {
  return {
    kind: item["kind"],
    role: item["role"],
    sessionState: item["sessionState"],
  };
}

/** Alias for ChatMessageUnion */
export type ChatMessageUnion = TextChatMessage | ChatMessage;

export function chatMessageUnionSerializer(item: ChatMessageUnion): any {
  switch (item.kind) {
    case "text":
      return textChatMessageSerializer(item as TextChatMessage);

    default:
      return chatMessageSerializer(item);
  }
}

export function chatMessageUnionDeserializer(item: any): ChatMessageUnion {
  switch (item.kind) {
    case "text":
      return textChatMessageDeserializer(item as TextChatMessage);

    default:
      return chatMessageDeserializer(item);
  }
}

/** Identifies the type of a message. */
export type MessageKind = "text";
/** A representation of the intended purpose of a message. */
export type ChatRole = "user" | "system" | "assistant";

/** A single, role-attributed text message within a chat completion interaction. */
export interface TextChatMessage extends ChatMessage {
  /** The type of the message. */
  kind: "text";
  /** The text associated with the message. */
  content: string;
}

export function textChatMessageSerializer(item: TextChatMessage): any {
  return {
    kind: item["kind"],
    role: item["role"],
    sessionState: item["sessionState"],
    content: item["content"],
  };
}

export function textChatMessageDeserializer(item: any): TextChatMessage {
  return {
    kind: item["kind"],
    role: item["role"],
    sessionState: item["sessionState"],
    content: item["content"],
  };
}

export function chatMessageUnionArraySerializer(
  result: Array<ChatMessageUnion>,
): any[] {
  return result.map((item) => {
    return chatMessageUnionSerializer(item);
  });
}

export function chatMessageUnionArrayDeserializer(
  result: Array<ChatMessageUnion>,
): any[] {
  return result.map((item) => {
    return chatMessageUnionDeserializer(item);
  });
}

/** A single response to a streaming completion request. */
export interface ChatCompletionChunk {
  /** The collection of choice deltas received in this chunk. */
  choices: ChoiceDelta[];
}

export function chatCompletionChunkDeserializer(
  item: any,
): ChatCompletionChunk {
  return {
    choices: choiceDeltaArrayDeserializer(item["choices"]),
  };
}

export function choiceDeltaArrayDeserializer(
  result: Array<ChoiceDelta>,
): any[] {
  return result.map((item) => {
    return choiceDeltaDeserializer(item);
  });
}

/** The representation of an incremental choice received in a streaming completion. */
export interface ChoiceDelta {
  /** The index of the of the chat choice, relative to the other choices in the same completion. */
  index: number;
  /** The partial message received for this choice. */
  delta: ChatMessageDeltaUnion;
  /**
   * Field that allows the chat app to store and retrieve data, the structure of such data is dependant on the backend
   * being used. The client must send back the data in this field unchanged in subsequent requests, until the chat app
   * sends a new one. The data in this field can be used to implement stateful services, such as remembering previous
   * conversations or user preferences.
   */
  sessionState?: any;
  /**
   * Context allows the chat app to receive extra parameters from the client, such as temperature, functions, or
   * customer_info. These parameters are specific to the chat app and not understood by the generic clients.
   */
  context?: Record<string, any>;
  /** The reason this chat completion completed its generation. */
  finishReason?: FinishReason;
}

export function choiceDeltaDeserializer(item: any): ChoiceDelta {
  return {
    index: item["index"],
    delta: chatMessageDeltaUnionDeserializer(item["delta"]),
    sessionState: item["sessionState"],
    context: item["context"],
    finishReason: item["finishReason"],
  };
}

/** The representation of a delta message received in a streaming completion. */
export interface ChatMessageDelta {
  /** The type of the message. If not specified, the message is assumed to be text. */
  /** The discriminator possible values: text */
  kind: MessageKind;
  /** The role associated with the message. */
  role?: ChatRole;
  /**
   * Field that allows the chat app to store and retrieve data, the structure of such data is dependant on the backend
   * being used. The client must send back the data in this field unchanged in subsequent requests, until the chat app
   * sends a new one. The data in this field can be used to implement stateful services, such as remembering previous
   * conversations or user preferences.
   */
  sessionState?: any;
}

export function chatMessageDeltaDeserializer(item: any): ChatMessageDelta {
  return {
    kind: item["kind"],
    role: item["role"],
    sessionState: item["sessionState"],
  };
}

/** Alias for ChatMessageDeltaUnion */
export type ChatMessageDeltaUnion = TextChatMessageDelta | ChatMessageDelta;

export function chatMessageDeltaUnionDeserializer(
  item: any,
): ChatMessageDeltaUnion {
  switch (item.kind) {
    case "text":
      return textChatMessageDeltaDeserializer(item as TextChatMessageDelta);

    default:
      return chatMessageDeltaDeserializer(item);
  }
}

/** The representation of a delta text message received in a streaming completion. */
export interface TextChatMessageDelta extends ChatMessageDelta {
  /** The type of the message. */
  kind: "text";
  /** An incremental part of the text associated with the message. */
  content?: string;
}

export function textChatMessageDeltaDeserializer(
  item: any,
): TextChatMessageDelta {
  return {
    kind: item["kind"],
    role: item["role"],
    sessionState: item["sessionState"],
    content: item["content"],
  };
}

/** Representation of the reason why a chat session has finished processing. */
export type FinishReason = "stop" | "length";

/** Representation of the response to a chat completion request. */
export interface ChatCompletion {
  /** The collection of generated completions. */
  choices: ChatChoice[];
}

export function chatCompletionDeserializer(item: any): ChatCompletion {
  return {
    choices: chatChoiceArrayDeserializer(item["choices"]),
  };
}

export function chatChoiceArrayDeserializer(result: Array<ChatChoice>): any[] {
  return result.map((item) => {
    return chatChoiceDeserializer(item);
  });
}

/** The representation of a single generated completion. */
export interface ChatChoice {
  /** The index of the of the chat choice, relative to the other choices in the same completion. */
  index: number;
  /** The chat message for a given chat completion. */
  message: ChatMessageUnion;
  /**
   * Field that allows the chat app to store and retrieve data, the structure of such data is dependant on the backend
   * being used. The client must send back the data in this field unchanged in subsequent requests, until the chat app
   * sends a new one. The data in this field can be used to implement stateful services, such as remembering previous
   * conversations or user preferences.
   */
  sessionState?: any;
  /**
   * Context allows the chat app to receive extra parameters from the client, such as temperature, functions, or
   * customer_info. These parameters are specific to the chat app and not understood by the generic clients.
   */
  context?: Record<string, any>;
  /** The reason this chat completion completed its generation. */
  finishReason: FinishReason;
}

export function chatChoiceDeserializer(item: any): ChatChoice {
  return {
    index: item["index"],
    message: chatMessageUnionDeserializer(item["message"]),
    sessionState: item["sessionState"],
    context: item["context"],
    finishReason: item["finishReason"],
  };
}

/** Known values of {@link APIVersion} that the service accepts. */
export enum KnownAPIVersion {
  V20231001Preview = "2023-10-01-preview",
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AgentsCancelRunOptionalParams,
  AgentsCancelVectorStoreFileBatchOptionalParams,
  AgentsCreateAgentOptionalParams,
  AgentsCreateMessageOptionalParams,
  AgentsCreateRunOptionalParams,
  AgentsCreateThreadAndRunOptionalParams,
  AgentsCreateThreadOptionalParams,
  AgentsCreateVectorStoreFileBatchOptionalParams,
  AgentsCreateVectorStoreFileOptionalParams,
  AgentsCreateVectorStoreOptionalParams,
  AgentsDeleteAgentOptionalParams,
  AgentsDeleteFileOptionalParams,
  AgentsDeleteThreadOptionalParams,
  AgentsDeleteVectorStoreFileOptionalParams,
  AgentsDeleteVectorStoreOptionalParams,
  AgentsGetAgentOptionalParams,
  AgentsGetFileContentOptionalParams,
  AgentsGetFileOptionalParams,
  AgentsGetMessageOptionalParams,
  AgentsGetRunOptionalParams,
  AgentsGetRunStepOptionalParams,
  AgentsGetThreadOptionalParams,
  AgentsGetVectorStoreFileBatchOptionalParams,
  AgentsGetVectorStoreFileOptionalParams,
  AgentsGetVectorStoreOptionalParams,
  AgentsListAgentsOptionalParams,
  AgentsListFilesOptionalParams,
  AgentsListMessagesOptionalParams,
  AgentsListRunsOptionalParams,
  AgentsListRunStepsOptionalParams,
  AgentsListVectorStoreFileBatchFilesOptionalParams,
  AgentsListVectorStoreFilesOptionalParams,
  AgentsListVectorStoresOptionalParams,
  AgentsModifyVectorStoreOptionalParams,
  AgentsSubmitToolOutputsToRunOptionalParams,
  AgentsUpdateAgentOptionalParams,
  AgentsUpdateMessageOptionalParams,
  AgentsUpdateRunOptionalParams,
  AgentsUpdateThreadOptionalParams,
  AgentsUploadFileOptionalParams,
  AzureAIContext as Client,
} from "../index.js";
import {
  toolDefinitionUnionSerializer,
  codeInterpreterToolResourceSerializer,
  fileSearchToolResourceSerializer,
  connectionListResourceSerializer,
  azureAISearchResourceSerializer,
  Agent,
  agentDeserializer,
  OpenAIPageableListOfAgent,
  openAIPageableListOfAgentDeserializer,
  AgentDeletionStatus,
  agentDeletionStatusDeserializer,
  threadMessageOptionsSerializer,
  MessageRole,
  messageAttachmentSerializer,
  threadMessageOptionsArraySerializer,
  AgentThread,
  agentThreadDeserializer,
  ThreadDeletionStatus,
  threadDeletionStatusDeserializer,
  ThreadMessage,
  threadMessageSerializer,
  threadMessageDeserializer,
  OpenAIPageableListOfThreadMessage,
  openAIPageableListOfThreadMessageDeserializer,
  ThreadRun,
  threadRunDeserializer,
  updateCodeInterpreterToolResourceOptionsSerializer,
  updateFileSearchToolResourceOptionsSerializer,
  OpenAIPageableListOfThreadRun,
  openAIPageableListOfThreadRunDeserializer,
  ToolOutput,
  toolOutputSerializer,
  RunStep,
  runStepDeserializer,
  OpenAIPageableListOfRunStep,
  openAIPageableListOfRunStepDeserializer,
  FileListResponse,
  fileListResponseDeserializer,
  OpenAIFile,
  openAIFileDeserializer,
  FilePurpose,
  FileDeletionStatus,
  fileDeletionStatusDeserializer,
  FileContentResponse,
  fileContentResponseDeserializer,
  OpenAIPageableListOfVectorStore,
  openAIPageableListOfVectorStoreDeserializer,
  VectorStore,
  vectorStoreDeserializer,
  VectorStoreDeletionStatus,
  vectorStoreDeletionStatusDeserializer,
  OpenAIPageableListOfVectorStoreFile,
  openAIPageableListOfVectorStoreFileDeserializer,
  VectorStoreFile,
  vectorStoreFileDeserializer,
  VectorStoreFileDeletionStatus,
  vectorStoreFileDeletionStatusDeserializer,
  VectorStoreFileBatch,
  vectorStoreFileBatchDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";

export function _createAgentSend(
  context: Client,
  model: string,
  options: AgentsCreateAgentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context.path("/assistants").post({
    ...operationOptionsToRequestParameters(options),
    body: {
      model: model,
      name: options?.name,
      description: options?.description,
      instructions: options?.instructions,
      tools: !options?.tools
        ? options?.tools
        : options?.tools.map((p: any) => {
            return toolDefinitionUnionSerializer(p);
          }),
      tool_resources: {
        code_interpreter: !options?.toolResources?.["codeInterpreter"]
          ? options?.toolResources?.["codeInterpreter"]
          : codeInterpreterToolResourceSerializer(
              options?.toolResources?.["codeInterpreter"],
            ),
        file_search: !options?.toolResources?.["fileSearch"]
          ? options?.toolResources?.["fileSearch"]
          : fileSearchToolResourceSerializer(
              options?.toolResources?.["fileSearch"],
            ),
        bing_grounding: !options?.toolResources?.["bingGrounding"]
          ? options?.toolResources?.["bingGrounding"]
          : connectionListResourceSerializer(
              options?.toolResources?.["bingGrounding"],
            ),
        microsoft_fabric: !options?.toolResources?.["microsoftFabric"]
          ? options?.toolResources?.["microsoftFabric"]
          : connectionListResourceSerializer(
              options?.toolResources?.["microsoftFabric"],
            ),
        sharepoint: !options?.toolResources?.["sharePoint"]
          ? options?.toolResources?.["sharePoint"]
          : connectionListResourceSerializer(
              options?.toolResources?.["sharePoint"],
            ),
        azure_ai_search: !options?.toolResources?.["azureAISearch"]
          ? options?.toolResources?.["azureAISearch"]
          : azureAISearchResourceSerializer(
              options?.toolResources?.["azureAISearch"],
            ),
      },
      temperature: options?.temperature,
      top_p: options?.topP,
      response_format: options?.responseFormat as any,
      metadata: options?.metadata,
    },
  });
}

export async function _createAgentDeserialize(
  result: PathUncheckedResponse,
): Promise<Agent> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return agentDeserializer(result.body);
}

/** Creates a new agent. */
export async function createAgent(
  context: Client,
  model: string,
  options: AgentsCreateAgentOptionalParams = { requestOptions: {} },
): Promise<Agent> {
  const result = await _createAgentSend(context, model, options);
  return _createAgentDeserialize(result);
}

export function _listAgentsSend(
  context: Client,
  options: AgentsListAgentsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/assistants")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listAgentsDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIPageableListOfAgent> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return openAIPageableListOfAgentDeserializer(result.body);
}

/** Gets a list of agents that were previously created. */
export async function listAgents(
  context: Client,
  options: AgentsListAgentsOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfAgent> {
  const result = await _listAgentsSend(context, options);
  return _listAgentsDeserialize(result);
}

export function _getAgentSend(
  context: Client,
  assistantId: string,
  options: AgentsGetAgentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/assistants/{assistantId}", assistantId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAgentDeserialize(
  result: PathUncheckedResponse,
): Promise<Agent> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return agentDeserializer(result.body);
}

/** Retrieves an existing agent. */
export async function getAgent(
  context: Client,
  assistantId: string,
  options: AgentsGetAgentOptionalParams = { requestOptions: {} },
): Promise<Agent> {
  const result = await _getAgentSend(context, assistantId, options);
  return _getAgentDeserialize(result);
}

export function _updateAgentSend(
  context: Client,
  assistantId: string,
  options: AgentsUpdateAgentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context.path("/assistants/{assistantId}", assistantId).post({
    ...operationOptionsToRequestParameters(options),
    body: {
      model: options?.model,
      name: options?.name,
      description: options?.description,
      instructions: options?.instructions,
      tools: !options?.tools
        ? options?.tools
        : options?.tools.map((p: any) => {
            return toolDefinitionUnionSerializer(p);
          }),
      tool_resources: {
        code_interpreter: !options?.toolResources?.["codeInterpreter"]
          ? options?.toolResources?.["codeInterpreter"]
          : codeInterpreterToolResourceSerializer(
              options?.toolResources?.["codeInterpreter"],
            ),
        file_search: !options?.toolResources?.["fileSearch"]
          ? options?.toolResources?.["fileSearch"]
          : fileSearchToolResourceSerializer(
              options?.toolResources?.["fileSearch"],
            ),
        bing_grounding: !options?.toolResources?.["bingGrounding"]
          ? options?.toolResources?.["bingGrounding"]
          : connectionListResourceSerializer(
              options?.toolResources?.["bingGrounding"],
            ),
        microsoft_fabric: !options?.toolResources?.["microsoftFabric"]
          ? options?.toolResources?.["microsoftFabric"]
          : connectionListResourceSerializer(
              options?.toolResources?.["microsoftFabric"],
            ),
        sharepoint: !options?.toolResources?.["sharePoint"]
          ? options?.toolResources?.["sharePoint"]
          : connectionListResourceSerializer(
              options?.toolResources?.["sharePoint"],
            ),
        azure_ai_search: !options?.toolResources?.["azureAISearch"]
          ? options?.toolResources?.["azureAISearch"]
          : azureAISearchResourceSerializer(
              options?.toolResources?.["azureAISearch"],
            ),
      },
      temperature: options?.temperature,
      top_p: options?.topP,
      response_format: options?.responseFormat as any,
      metadata: options?.metadata,
    },
  });
}

export async function _updateAgentDeserialize(
  result: PathUncheckedResponse,
): Promise<Agent> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return agentDeserializer(result.body);
}

/** Modifies an existing agent. */
export async function updateAgent(
  context: Client,
  assistantId: string,
  options: AgentsUpdateAgentOptionalParams = { requestOptions: {} },
): Promise<Agent> {
  const result = await _updateAgentSend(context, assistantId, options);
  return _updateAgentDeserialize(result);
}

export function _deleteAgentSend(
  context: Client,
  assistantId: string,
  options: AgentsDeleteAgentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/assistants/{assistantId}", assistantId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteAgentDeserialize(
  result: PathUncheckedResponse,
): Promise<AgentDeletionStatus> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return agentDeletionStatusDeserializer(result.body);
}

/** Deletes an agent. */
export async function deleteAgent(
  context: Client,
  assistantId: string,
  options: AgentsDeleteAgentOptionalParams = { requestOptions: {} },
): Promise<AgentDeletionStatus> {
  const result = await _deleteAgentSend(context, assistantId, options);
  return _deleteAgentDeserialize(result);
}

export function _createThreadSend(
  context: Client,
  options: AgentsCreateThreadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context.path("/threads").post({
    ...operationOptionsToRequestParameters(options),
    body: {
      messages: !options?.messages
        ? options?.messages
        : options?.messages.map((p: any) => {
            return threadMessageOptionsSerializer(p);
          }),
      tool_resources: {
        code_interpreter: !options?.toolResources?.["codeInterpreter"]
          ? options?.toolResources?.["codeInterpreter"]
          : codeInterpreterToolResourceSerializer(
              options?.toolResources?.["codeInterpreter"],
            ),
        file_search: !options?.toolResources?.["fileSearch"]
          ? options?.toolResources?.["fileSearch"]
          : fileSearchToolResourceSerializer(
              options?.toolResources?.["fileSearch"],
            ),
        bing_grounding: !options?.toolResources?.["bingGrounding"]
          ? options?.toolResources?.["bingGrounding"]
          : connectionListResourceSerializer(
              options?.toolResources?.["bingGrounding"],
            ),
        microsoft_fabric: !options?.toolResources?.["microsoftFabric"]
          ? options?.toolResources?.["microsoftFabric"]
          : connectionListResourceSerializer(
              options?.toolResources?.["microsoftFabric"],
            ),
        sharepoint: !options?.toolResources?.["sharePoint"]
          ? options?.toolResources?.["sharePoint"]
          : connectionListResourceSerializer(
              options?.toolResources?.["sharePoint"],
            ),
        azure_ai_search: !options?.toolResources?.["azureAISearch"]
          ? options?.toolResources?.["azureAISearch"]
          : azureAISearchResourceSerializer(
              options?.toolResources?.["azureAISearch"],
            ),
      },
      metadata: options?.metadata,
    },
  });
}

export async function _createThreadDeserialize(
  result: PathUncheckedResponse,
): Promise<AgentThread> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return agentThreadDeserializer(result.body);
}

/** Creates a new thread. Threads contain messages and can be run by agents. */
export async function createThread(
  context: Client,
  options: AgentsCreateThreadOptionalParams = { requestOptions: {} },
): Promise<AgentThread> {
  const result = await _createThreadSend(context, options);
  return _createThreadDeserialize(result);
}

export function _getThreadSend(
  context: Client,
  threadId: string,
  options: AgentsGetThreadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}", threadId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getThreadDeserialize(
  result: PathUncheckedResponse,
): Promise<AgentThread> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return agentThreadDeserializer(result.body);
}

/** Gets information about an existing thread. */
export async function getThread(
  context: Client,
  threadId: string,
  options: AgentsGetThreadOptionalParams = { requestOptions: {} },
): Promise<AgentThread> {
  const result = await _getThreadSend(context, threadId, options);
  return _getThreadDeserialize(result);
}

export function _updateThreadSend(
  context: Client,
  threadId: string,
  options: AgentsUpdateThreadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}", threadId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        tool_resources: {
          code_interpreter: !options?.toolResources?.["codeInterpreter"]
            ? options?.toolResources?.["codeInterpreter"]
            : codeInterpreterToolResourceSerializer(
                options?.toolResources?.["codeInterpreter"],
              ),
          file_search: !options?.toolResources?.["fileSearch"]
            ? options?.toolResources?.["fileSearch"]
            : fileSearchToolResourceSerializer(
                options?.toolResources?.["fileSearch"],
              ),
          bing_grounding: !options?.toolResources?.["bingGrounding"]
            ? options?.toolResources?.["bingGrounding"]
            : connectionListResourceSerializer(
                options?.toolResources?.["bingGrounding"],
              ),
          microsoft_fabric: !options?.toolResources?.["microsoftFabric"]
            ? options?.toolResources?.["microsoftFabric"]
            : connectionListResourceSerializer(
                options?.toolResources?.["microsoftFabric"],
              ),
          sharepoint: !options?.toolResources?.["sharePoint"]
            ? options?.toolResources?.["sharePoint"]
            : connectionListResourceSerializer(
                options?.toolResources?.["sharePoint"],
              ),
          azure_ai_search: !options?.toolResources?.["azureAISearch"]
            ? options?.toolResources?.["azureAISearch"]
            : azureAISearchResourceSerializer(
                options?.toolResources?.["azureAISearch"],
              ),
        },
        metadata: options?.metadata,
      },
    });
}

export async function _updateThreadDeserialize(
  result: PathUncheckedResponse,
): Promise<AgentThread> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return agentThreadDeserializer(result.body);
}

/** Modifies an existing thread. */
export async function updateThread(
  context: Client,
  threadId: string,
  options: AgentsUpdateThreadOptionalParams = { requestOptions: {} },
): Promise<AgentThread> {
  const result = await _updateThreadSend(context, threadId, options);
  return _updateThreadDeserialize(result);
}

export function _deleteThreadSend(
  context: Client,
  threadId: string,
  options: AgentsDeleteThreadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}", threadId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteThreadDeserialize(
  result: PathUncheckedResponse,
): Promise<ThreadDeletionStatus> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return threadDeletionStatusDeserializer(result.body);
}

/** Deletes an existing thread. */
export async function deleteThread(
  context: Client,
  threadId: string,
  options: AgentsDeleteThreadOptionalParams = { requestOptions: {} },
): Promise<ThreadDeletionStatus> {
  const result = await _deleteThreadSend(context, threadId, options);
  return _deleteThreadDeserialize(result);
}

export function _createMessageSend(
  context: Client,
  threadId: string,
  role: MessageRole,
  content: string,
  options: AgentsCreateMessageOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context.path("/threads/{threadId}/messages", threadId).post({
    ...operationOptionsToRequestParameters(options),
    body: {
      role: role,
      content: content,
      attachments: !options?.attachments
        ? options?.attachments
        : options?.attachments.map((p: any) => {
            return messageAttachmentSerializer(p);
          }),
      metadata: options?.metadata,
    },
  });
}

export async function _createMessageDeserialize(
  result: PathUncheckedResponse,
): Promise<ThreadMessage> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return threadMessageDeserializer(result.body);
}

/** Creates a new message on a specified thread. */
export async function createMessage(
  context: Client,
  threadId: string,
  role: MessageRole,
  content: string,
  options: AgentsCreateMessageOptionalParams = { requestOptions: {} },
): Promise<ThreadMessage> {
  const result = await _createMessageSend(
    context,
    threadId,
    role,
    content,
    options,
  );
  return _createMessageDeserialize(result);
}

export function _listMessagesSend(
  context: Client,
  threadId: string,
  options: AgentsListMessagesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}/messages", threadId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        runId: options?.runId,
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listMessagesDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIPageableListOfThreadMessage> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return openAIPageableListOfThreadMessageDeserializer(result.body);
}

/** Gets a list of messages that exist on a thread. */
export async function listMessages(
  context: Client,
  threadId: string,
  options: AgentsListMessagesOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfThreadMessage> {
  const result = await _listMessagesSend(context, threadId, options);
  return _listMessagesDeserialize(result);
}

export function _getMessageSend(
  context: Client,
  threadId: string,
  messageId: string,
  options: AgentsGetMessageOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}/messages/{messageId}", threadId, messageId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getMessageDeserialize(
  result: PathUncheckedResponse,
): Promise<ThreadMessage> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return threadMessageDeserializer(result.body);
}

/** Gets an existing message from an existing thread. */
export async function getMessage(
  context: Client,
  threadId: string,
  messageId: string,
  options: AgentsGetMessageOptionalParams = { requestOptions: {} },
): Promise<ThreadMessage> {
  const result = await _getMessageSend(context, threadId, messageId, options);
  return _getMessageDeserialize(result);
}

export function _updateMessageSend(
  context: Client,
  threadId: string,
  messageId: string,
  options: AgentsUpdateMessageOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}/messages/{messageId}", threadId, messageId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { metadata: options?.metadata },
    });
}

export async function _updateMessageDeserialize(
  result: PathUncheckedResponse,
): Promise<ThreadMessage> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return threadMessageDeserializer(result.body);
}

/** Modifies an existing message on an existing thread. */
export async function updateMessage(
  context: Client,
  threadId: string,
  messageId: string,
  options: AgentsUpdateMessageOptionalParams = { requestOptions: {} },
): Promise<ThreadMessage> {
  const result = await _updateMessageSend(
    context,
    threadId,
    messageId,
    options,
  );
  return _updateMessageDeserialize(result);
}

export function _createRunSend(
  context: Client,
  threadId: string,
  assistantId: string,
  options: AgentsCreateRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context.path("/threads/{threadId}/runs", threadId).post({
    ...operationOptionsToRequestParameters(options),
    body: {
      assistant_id: assistantId,
      model: options?.model,
      instructions: options?.instructions,
      additional_instructions: options?.additionalInstructions,
      additional_messages: !options?.additionalMessages
        ? options?.additionalMessages
        : options?.additionalMessages.map((p: any) => {
            return threadMessageSerializer(p);
          }),
      tools: !options?.tools
        ? options?.tools
        : options?.tools.map((p: any) => {
            return toolDefinitionUnionSerializer(p);
          }),
      stream: options?.stream,
      temperature: options?.temperature,
      top_p: options?.topP,
      max_prompt_tokens: options?.maxPromptTokens,
      max_completion_tokens: options?.maxCompletionTokens,
      truncation_strategy: {
        type: options?.truncationStrategy?.["type"],
        last_messages: options?.truncationStrategy?.["lastMessages"],
      },
      tool_choice: options?.toolChoice as any,
      response_format: options?.responseFormat as any,
      metadata: options?.metadata,
    },
  });
}

export async function _createRunDeserialize(
  result: PathUncheckedResponse,
): Promise<ThreadRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return threadRunDeserializer(result.body);
}

/** Creates a new run for an agent thread. */
export async function createRun(
  context: Client,
  threadId: string,
  assistantId: string,
  options: AgentsCreateRunOptionalParams = { requestOptions: {} },
): Promise<ThreadRun> {
  const result = await _createRunSend(context, threadId, assistantId, options);
  return _createRunDeserialize(result);
}

export function _listRunsSend(
  context: Client,
  threadId: string,
  options: AgentsListRunsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}/runs", threadId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listRunsDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIPageableListOfThreadRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return openAIPageableListOfThreadRunDeserializer(result.body);
}

/** Gets a list of runs for a specified thread. */
export async function listRuns(
  context: Client,
  threadId: string,
  options: AgentsListRunsOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfThreadRun> {
  const result = await _listRunsSend(context, threadId, options);
  return _listRunsDeserialize(result);
}

export function _getRunSend(
  context: Client,
  threadId: string,
  runId: string,
  options: AgentsGetRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}/runs/{runId}", threadId, runId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getRunDeserialize(
  result: PathUncheckedResponse,
): Promise<ThreadRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return threadRunDeserializer(result.body);
}

/** Gets an existing run from an existing thread. */
export async function getRun(
  context: Client,
  threadId: string,
  runId: string,
  options: AgentsGetRunOptionalParams = { requestOptions: {} },
): Promise<ThreadRun> {
  const result = await _getRunSend(context, threadId, runId, options);
  return _getRunDeserialize(result);
}

export function _updateRunSend(
  context: Client,
  threadId: string,
  runId: string,
  options: AgentsUpdateRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}/runs/{runId}", threadId, runId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { metadata: options?.metadata },
    });
}

export async function _updateRunDeserialize(
  result: PathUncheckedResponse,
): Promise<ThreadRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return threadRunDeserializer(result.body);
}

/** Modifies an existing thread run. */
export async function updateRun(
  context: Client,
  threadId: string,
  runId: string,
  options: AgentsUpdateRunOptionalParams = { requestOptions: {} },
): Promise<ThreadRun> {
  const result = await _updateRunSend(context, threadId, runId, options);
  return _updateRunDeserialize(result);
}

export function _submitToolOutputsToRunSend(
  context: Client,
  threadId: string,
  runId: string,
  toolOutputs: ToolOutput[],
  options: AgentsSubmitToolOutputsToRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/threads/{threadId}/runs/{runId}/submit_tool_outputs",
      threadId,
      runId,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        tool_outputs: toolOutputs.map((p: any) => {
          return toolOutputSerializer(p);
        }),
        stream: options?.stream,
      },
    });
}

export async function _submitToolOutputsToRunDeserialize(
  result: PathUncheckedResponse,
): Promise<ThreadRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return threadRunDeserializer(result.body);
}

/** Submits outputs from tools as requested by tool calls in a run. Runs that need submitted tool outputs will have a status of 'requires_action' with a required_action.type of 'submit_tool_outputs'. */
export async function submitToolOutputsToRun(
  context: Client,
  threadId: string,
  runId: string,
  toolOutputs: ToolOutput[],
  options: AgentsSubmitToolOutputsToRunOptionalParams = { requestOptions: {} },
): Promise<ThreadRun> {
  const result = await _submitToolOutputsToRunSend(
    context,
    threadId,
    runId,
    toolOutputs,
    options,
  );
  return _submitToolOutputsToRunDeserialize(result);
}

export function _cancelRunSend(
  context: Client,
  threadId: string,
  runId: string,
  options: AgentsCancelRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}/runs/{runId}/cancel", threadId, runId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _cancelRunDeserialize(
  result: PathUncheckedResponse,
): Promise<ThreadRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return threadRunDeserializer(result.body);
}

/** Cancels a run of an in progress thread. */
export async function cancelRun(
  context: Client,
  threadId: string,
  runId: string,
  options: AgentsCancelRunOptionalParams = { requestOptions: {} },
): Promise<ThreadRun> {
  const result = await _cancelRunSend(context, threadId, runId, options);
  return _cancelRunDeserialize(result);
}

export function _createThreadAndRunSend(
  context: Client,
  assistantId: string,
  options: AgentsCreateThreadAndRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context.path("/threads/runs").post({
    ...operationOptionsToRequestParameters(options),
    body: {
      assistant_id: assistantId,
      thread: {
        messages: !options?.thread?.["messages"]
          ? options?.thread?.["messages"]
          : threadMessageOptionsArraySerializer(options?.thread?.["messages"]),
        tool_resources: options?.thread?.["toolResources"],
        metadata: options?.thread?.["metadata"],
      },
      model: options?.model,
      instructions: options?.instructions,
      tools: !options?.tools
        ? options?.tools
        : options?.tools.map((p: any) => {
            return toolDefinitionUnionSerializer(p);
          }),
      tool_resources: {
        code_interpreter: !options?.toolResources?.["codeInterpreter"]
          ? options?.toolResources?.["codeInterpreter"]
          : updateCodeInterpreterToolResourceOptionsSerializer(
              options?.toolResources?.["codeInterpreter"],
            ),
        file_search: !options?.toolResources?.["fileSearch"]
          ? options?.toolResources?.["fileSearch"]
          : updateFileSearchToolResourceOptionsSerializer(
              options?.toolResources?.["fileSearch"],
            ),
        bing_grounding: !options?.toolResources?.["bingGrounding"]
          ? options?.toolResources?.["bingGrounding"]
          : connectionListResourceSerializer(
              options?.toolResources?.["bingGrounding"],
            ),
        microsoft_fabric: !options?.toolResources?.["microsoftFabric"]
          ? options?.toolResources?.["microsoftFabric"]
          : connectionListResourceSerializer(
              options?.toolResources?.["microsoftFabric"],
            ),
        sharepoint: !options?.toolResources?.["sharePoint"]
          ? options?.toolResources?.["sharePoint"]
          : connectionListResourceSerializer(
              options?.toolResources?.["sharePoint"],
            ),
        azure_ai_search: !options?.toolResources?.["azureAISearch"]
          ? options?.toolResources?.["azureAISearch"]
          : azureAISearchResourceSerializer(
              options?.toolResources?.["azureAISearch"],
            ),
      },
      stream: options?.stream,
      temperature: options?.temperature,
      top_p: options?.topP,
      max_prompt_tokens: options?.maxPromptTokens,
      max_completion_tokens: options?.maxCompletionTokens,
      truncation_strategy: {
        type: options?.truncationStrategy?.["type"],
        last_messages: options?.truncationStrategy?.["lastMessages"],
      },
      tool_choice: options?.toolChoice as any,
      response_format: options?.responseFormat as any,
      metadata: options?.metadata,
    },
  });
}

export async function _createThreadAndRunDeserialize(
  result: PathUncheckedResponse,
): Promise<ThreadRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return threadRunDeserializer(result.body);
}

/** Creates a new agent thread and immediately starts a run using that new thread. */
export async function createThreadAndRun(
  context: Client,
  assistantId: string,
  options: AgentsCreateThreadAndRunOptionalParams = { requestOptions: {} },
): Promise<ThreadRun> {
  const result = await _createThreadAndRunSend(context, assistantId, options);
  return _createThreadAndRunDeserialize(result);
}

export function _getRunStepSend(
  context: Client,
  threadId: string,
  runId: string,
  stepId: string,
  options: AgentsGetRunStepOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/threads/{threadId}/runs/{runId}/steps/{stepId}",
      threadId,
      runId,
      stepId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getRunStepDeserialize(
  result: PathUncheckedResponse,
): Promise<RunStep> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return runStepDeserializer(result.body);
}

/** Gets a single run step from a thread run. */
export async function getRunStep(
  context: Client,
  threadId: string,
  runId: string,
  stepId: string,
  options: AgentsGetRunStepOptionalParams = { requestOptions: {} },
): Promise<RunStep> {
  const result = await _getRunStepSend(
    context,
    threadId,
    runId,
    stepId,
    options,
  );
  return _getRunStepDeserialize(result);
}

export function _listRunStepsSend(
  context: Client,
  threadId: string,
  runId: string,
  options: AgentsListRunStepsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}/runs/{runId}/steps", threadId, runId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listRunStepsDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIPageableListOfRunStep> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return openAIPageableListOfRunStepDeserializer(result.body);
}

/** Gets a list of run steps from a thread run. */
export async function listRunSteps(
  context: Client,
  threadId: string,
  runId: string,
  options: AgentsListRunStepsOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfRunStep> {
  const result = await _listRunStepsSend(context, threadId, runId, options);
  return _listRunStepsDeserialize(result);
}

export function _listFilesSend(
  context: Client,
  options: AgentsListFilesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/files")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { purpose: options?.purpose },
    });
}

export async function _listFilesDeserialize(
  result: PathUncheckedResponse,
): Promise<FileListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fileListResponseDeserializer(result.body);
}

/** Gets a list of previously uploaded files. */
export async function listFiles(
  context: Client,
  options: AgentsListFilesOptionalParams = { requestOptions: {} },
): Promise<FileListResponse> {
  const result = await _listFilesSend(context, options);
  return _listFilesDeserialize(result);
}

export function _uploadFileSend(
  context: Client,
  file: Uint8Array,
  purpose: FilePurpose,
  options: AgentsUploadFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/files")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        file: uint8ArrayToString(file, "base64"),
        purpose: purpose,
        filename: options?.filename,
      },
    });
}

export async function _uploadFileDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return openAIFileDeserializer(result.body);
}

/** Uploads a file for use by other operations. */
export async function uploadFile(
  context: Client,
  file: Uint8Array,
  purpose: FilePurpose,
  options: AgentsUploadFileOptionalParams = { requestOptions: {} },
): Promise<OpenAIFile> {
  const result = await _uploadFileSend(context, file, purpose, options);
  return _uploadFileDeserialize(result);
}

export function _deleteFileSend(
  context: Client,
  fileId: string,
  options: AgentsDeleteFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/files/{fileId}", fileId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteFileDeserialize(
  result: PathUncheckedResponse,
): Promise<FileDeletionStatus> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fileDeletionStatusDeserializer(result.body);
}

/** Delete a previously uploaded file. */
export async function deleteFile(
  context: Client,
  fileId: string,
  options: AgentsDeleteFileOptionalParams = { requestOptions: {} },
): Promise<FileDeletionStatus> {
  const result = await _deleteFileSend(context, fileId, options);
  return _deleteFileDeserialize(result);
}

export function _getFileSend(
  context: Client,
  fileId: string,
  options: AgentsGetFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/files/{fileId}", fileId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getFileDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return openAIFileDeserializer(result.body);
}

/** Returns information about a specific file. Does not retrieve file content. */
export async function getFile(
  context: Client,
  fileId: string,
  options: AgentsGetFileOptionalParams = { requestOptions: {} },
): Promise<OpenAIFile> {
  const result = await _getFileSend(context, fileId, options);
  return _getFileDeserialize(result);
}

export function _getFileContentSend(
  context: Client,
  fileId: string,
  options: AgentsGetFileContentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/files/{fileId}/content", fileId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getFileContentDeserialize(
  result: PathUncheckedResponse,
): Promise<FileContentResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fileContentResponseDeserializer(result.body);
}

/** Returns information about a specific file. Does not retrieve file content. */
export async function getFileContent(
  context: Client,
  fileId: string,
  options: AgentsGetFileContentOptionalParams = { requestOptions: {} },
): Promise<FileContentResponse> {
  const result = await _getFileContentSend(context, fileId, options);
  return _getFileContentDeserialize(result);
}

export function _listVectorStoresSend(
  context: Client,
  options: AgentsListVectorStoresOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/vector_stores")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listVectorStoresDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIPageableListOfVectorStore> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return openAIPageableListOfVectorStoreDeserializer(result.body);
}

/** Returns a list of vector stores. */
export async function listVectorStores(
  context: Client,
  options: AgentsListVectorStoresOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfVectorStore> {
  const result = await _listVectorStoresSend(context, options);
  return _listVectorStoresDeserialize(result);
}

export function _createVectorStoreSend(
  context: Client,
  options: AgentsCreateVectorStoreOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context.path("/vector_stores").post({
    ...operationOptionsToRequestParameters(options),
    body: {
      file_ids: !options?.fileIds
        ? options?.fileIds
        : options?.fileIds.map((p: any) => {
            return p;
          }),
      name: options?.name,
      expires_after: {
        anchor: options?.expiresAfter?.["anchor"],
        days: options?.expiresAfter?.["days"],
      },
      chunking_strategy: { type: options?.chunkingStrategy?.["type"] },
      metadata: options?.metadata,
    },
  });
}

export async function _createVectorStoreDeserialize(
  result: PathUncheckedResponse,
): Promise<VectorStore> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vectorStoreDeserializer(result.body);
}

/** Creates a vector store. */
export async function createVectorStore(
  context: Client,
  options: AgentsCreateVectorStoreOptionalParams = { requestOptions: {} },
): Promise<VectorStore> {
  const result = await _createVectorStoreSend(context, options);
  return _createVectorStoreDeserialize(result);
}

export function _getVectorStoreSend(
  context: Client,
  vectorStoreId: string,
  options: AgentsGetVectorStoreOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/vector_stores/{vectorStoreId}", vectorStoreId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getVectorStoreDeserialize(
  result: PathUncheckedResponse,
): Promise<VectorStore> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vectorStoreDeserializer(result.body);
}

/** Returns the vector store object matching the specified ID. */
export async function getVectorStore(
  context: Client,
  vectorStoreId: string,
  options: AgentsGetVectorStoreOptionalParams = { requestOptions: {} },
): Promise<VectorStore> {
  const result = await _getVectorStoreSend(context, vectorStoreId, options);
  return _getVectorStoreDeserialize(result);
}

export function _modifyVectorStoreSend(
  context: Client,
  vectorStoreId: string,
  options: AgentsModifyVectorStoreOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/vector_stores/{vectorStoreId}", vectorStoreId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        name: options?.name,
        expires_after: {
          anchor: options?.expiresAfter?.["anchor"],
          days: options?.expiresAfter?.["days"],
        },
        metadata: options?.metadata,
      },
    });
}

export async function _modifyVectorStoreDeserialize(
  result: PathUncheckedResponse,
): Promise<VectorStore> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vectorStoreDeserializer(result.body);
}

/** The ID of the vector store to modify. */
export async function modifyVectorStore(
  context: Client,
  vectorStoreId: string,
  options: AgentsModifyVectorStoreOptionalParams = { requestOptions: {} },
): Promise<VectorStore> {
  const result = await _modifyVectorStoreSend(context, vectorStoreId, options);
  return _modifyVectorStoreDeserialize(result);
}

export function _deleteVectorStoreSend(
  context: Client,
  vectorStoreId: string,
  options: AgentsDeleteVectorStoreOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/vector_stores/{vectorStoreId}", vectorStoreId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteVectorStoreDeserialize(
  result: PathUncheckedResponse,
): Promise<VectorStoreDeletionStatus> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vectorStoreDeletionStatusDeserializer(result.body);
}

/** Deletes the vector store object matching the specified ID. */
export async function deleteVectorStore(
  context: Client,
  vectorStoreId: string,
  options: AgentsDeleteVectorStoreOptionalParams = { requestOptions: {} },
): Promise<VectorStoreDeletionStatus> {
  const result = await _deleteVectorStoreSend(context, vectorStoreId, options);
  return _deleteVectorStoreDeserialize(result);
}

export function _listVectorStoreFilesSend(
  context: Client,
  vectorStoreId: string,
  options: AgentsListVectorStoreFilesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/vector_stores/{vectorStoreId}/files", vectorStoreId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        filter: options?.filter,
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listVectorStoreFilesDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIPageableListOfVectorStoreFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return openAIPageableListOfVectorStoreFileDeserializer(result.body);
}

/** Returns a list of vector store files. */
export async function listVectorStoreFiles(
  context: Client,
  vectorStoreId: string,
  options: AgentsListVectorStoreFilesOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfVectorStoreFile> {
  const result = await _listVectorStoreFilesSend(
    context,
    vectorStoreId,
    options,
  );
  return _listVectorStoreFilesDeserialize(result);
}

export function _createVectorStoreFileSend(
  context: Client,
  vectorStoreId: string,
  fileId: string,
  options: AgentsCreateVectorStoreFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/vector_stores/{vectorStoreId}/files", vectorStoreId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        file_id: fileId,
        chunking_strategy: { type: options?.chunkingStrategy?.["type"] },
      },
    });
}

export async function _createVectorStoreFileDeserialize(
  result: PathUncheckedResponse,
): Promise<VectorStoreFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vectorStoreFileDeserializer(result.body);
}

/** Create a vector store file by attaching a file to a vector store. */
export async function createVectorStoreFile(
  context: Client,
  vectorStoreId: string,
  fileId: string,
  options: AgentsCreateVectorStoreFileOptionalParams = { requestOptions: {} },
): Promise<VectorStoreFile> {
  const result = await _createVectorStoreFileSend(
    context,
    vectorStoreId,
    fileId,
    options,
  );
  return _createVectorStoreFileDeserialize(result);
}

export function _getVectorStoreFileSend(
  context: Client,
  vectorStoreId: string,
  fileId: string,
  options: AgentsGetVectorStoreFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/vector_stores/{vectorStoreId}/files/{fileId}",
      vectorStoreId,
      fileId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getVectorStoreFileDeserialize(
  result: PathUncheckedResponse,
): Promise<VectorStoreFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vectorStoreFileDeserializer(result.body);
}

/** Retrieves a vector store file. */
export async function getVectorStoreFile(
  context: Client,
  vectorStoreId: string,
  fileId: string,
  options: AgentsGetVectorStoreFileOptionalParams = { requestOptions: {} },
): Promise<VectorStoreFile> {
  const result = await _getVectorStoreFileSend(
    context,
    vectorStoreId,
    fileId,
    options,
  );
  return _getVectorStoreFileDeserialize(result);
}

export function _deleteVectorStoreFileSend(
  context: Client,
  vectorStoreId: string,
  fileId: string,
  options: AgentsDeleteVectorStoreFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/vector_stores/{vectorStoreId}/files/{fileId}",
      vectorStoreId,
      fileId,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteVectorStoreFileDeserialize(
  result: PathUncheckedResponse,
): Promise<VectorStoreFileDeletionStatus> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vectorStoreFileDeletionStatusDeserializer(result.body);
}

/**
 * Delete a vector store file. This will remove the file from the vector store but the file itself will not be deleted.
 * To delete the file, use the delete file endpoint.
 */
export async function deleteVectorStoreFile(
  context: Client,
  vectorStoreId: string,
  fileId: string,
  options: AgentsDeleteVectorStoreFileOptionalParams = { requestOptions: {} },
): Promise<VectorStoreFileDeletionStatus> {
  const result = await _deleteVectorStoreFileSend(
    context,
    vectorStoreId,
    fileId,
    options,
  );
  return _deleteVectorStoreFileDeserialize(result);
}

export function _createVectorStoreFileBatchSend(
  context: Client,
  vectorStoreId: string,
  fileIds: string[],
  options: AgentsCreateVectorStoreFileBatchOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/vector_stores/{vectorStoreId}/file_batches", vectorStoreId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        file_ids: fileIds.map((p: any) => {
          return p;
        }),
        chunking_strategy: { type: options?.chunkingStrategy?.["type"] },
      },
    });
}

export async function _createVectorStoreFileBatchDeserialize(
  result: PathUncheckedResponse,
): Promise<VectorStoreFileBatch> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vectorStoreFileBatchDeserializer(result.body);
}

/** Create a vector store file batch. */
export async function createVectorStoreFileBatch(
  context: Client,
  vectorStoreId: string,
  fileIds: string[],
  options: AgentsCreateVectorStoreFileBatchOptionalParams = {
    requestOptions: {},
  },
): Promise<VectorStoreFileBatch> {
  const result = await _createVectorStoreFileBatchSend(
    context,
    vectorStoreId,
    fileIds,
    options,
  );
  return _createVectorStoreFileBatchDeserialize(result);
}

export function _getVectorStoreFileBatchSend(
  context: Client,
  vectorStoreId: string,
  batchId: string,
  options: AgentsGetVectorStoreFileBatchOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/vector_stores/{vectorStoreId}/file_batches/{batchId}",
      vectorStoreId,
      batchId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getVectorStoreFileBatchDeserialize(
  result: PathUncheckedResponse,
): Promise<VectorStoreFileBatch> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vectorStoreFileBatchDeserializer(result.body);
}

/** Retrieve a vector store file batch. */
export async function getVectorStoreFileBatch(
  context: Client,
  vectorStoreId: string,
  batchId: string,
  options: AgentsGetVectorStoreFileBatchOptionalParams = { requestOptions: {} },
): Promise<VectorStoreFileBatch> {
  const result = await _getVectorStoreFileBatchSend(
    context,
    vectorStoreId,
    batchId,
    options,
  );
  return _getVectorStoreFileBatchDeserialize(result);
}

export function _cancelVectorStoreFileBatchSend(
  context: Client,
  vectorStoreId: string,
  batchId: string,
  options: AgentsCancelVectorStoreFileBatchOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/vector_stores/{vectorStoreId}/file_batches/{batchId}/cancel",
      vectorStoreId,
      batchId,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _cancelVectorStoreFileBatchDeserialize(
  result: PathUncheckedResponse,
): Promise<VectorStoreFileBatch> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vectorStoreFileBatchDeserializer(result.body);
}

/** Cancel a vector store file batch. This attempts to cancel the processing of files in this batch as soon as possible. */
export async function cancelVectorStoreFileBatch(
  context: Client,
  vectorStoreId: string,
  batchId: string,
  options: AgentsCancelVectorStoreFileBatchOptionalParams = {
    requestOptions: {},
  },
): Promise<VectorStoreFileBatch> {
  const result = await _cancelVectorStoreFileBatchSend(
    context,
    vectorStoreId,
    batchId,
    options,
  );
  return _cancelVectorStoreFileBatchDeserialize(result);
}

export function _listVectorStoreFileBatchFilesSend(
  context: Client,
  vectorStoreId: string,
  batchId: string,
  options: AgentsListVectorStoreFileBatchFilesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/vector_stores/{vectorStoreId}/file_batches/{batchId}/files",
      vectorStoreId,
      batchId,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        filter: options?.filter,
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listVectorStoreFileBatchFilesDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIPageableListOfVectorStoreFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return openAIPageableListOfVectorStoreFileDeserializer(result.body);
}

/** Returns a list of vector store files in a batch. */
export async function listVectorStoreFileBatchFiles(
  context: Client,
  vectorStoreId: string,
  batchId: string,
  options: AgentsListVectorStoreFileBatchFilesOptionalParams = {
    requestOptions: {},
  },
): Promise<OpenAIPageableListOfVectorStoreFile> {
  const result = await _listVectorStoreFileBatchFilesSend(
    context,
    vectorStoreId,
    batchId,
    options,
  );
  return _listVectorStoreFileBatchFilesDeserialize(result);
}

import "@azure-tools/typespec-client-generator-core";

using Azure.ClientGenerator.Core;

namespace Azure.AI.Projects.Agents {
  // Trivial response value containers should treat these containers as internal details and instead surface a shimmed
  // operation that exposes the underlying data directly.
  @@clientName(AgentDeletionStatus, "InternalAgentDeletionStatus", "csharp");
  @@access(deleteAgent, Access.internal, "csharp");
  @@clientName(deleteAgent, "InternalDeleteAgent", "csharp");
  @@access(deleteThread, Access.internal, "csharp");
  @@clientName(deleteThread, "InternalDeleteThread", "csharp");
  @@access(listAgents, Access.internal, "csharp");
  @@clientName(listAgents, "InternalGetAgents", "csharp");
  @@access(listRunSteps, Access.internal, "csharp");
  @@clientName(listRunSteps, "InternalGetRunSteps", "csharp");
  @@access(listMessages, Access.internal, "csharp");
  @@clientName(listMessages, "InternalGetMessages", "csharp");
  @@access(listRuns, Access.internal, "csharp");
  @@clientName(listRuns, "InternalGetRuns", "csharp");
  @@access(FileListResponse, Access.internal, "csharp");
  @@clientName(FileListResponse, "InternalFileListResponse", "csharp");
  @@access(listFiles, Access.internal, "csharp");
  @@clientName(listFiles, "InternalListFiles", "csharp");
  @@access(FileDeletionStatus, Access.internal, "csharp");
  @@clientName(FileDeletionStatus, "InternalFileDeletionStatus", "csharp");
  @@access(deleteFile, Access.internal, "csharp");
  @@clientName(deleteFile, "InternalDeleteFile", "csharp");

  // In addition to top-level response value containers, trivial intermediate structure -- levels of single-use model
  // hierarchy that don't convey explanatory or functional benefit to consumers of the surface -- should also be
  // internalized and merged into the more useful top-level type.

  // FunctionToolDefinition: merge FunctionDefinition structure to recast e.g. toolDefinition.function.name into
  // toolDefinition.name

  @@access(FunctionDefinition, Access.internal);
  @@clientName(FunctionDefinition, "InternalFunctionDefinition", "csharp");
  @@clientName(FunctionToolDefinition.function, "InternalFunction", "csharp");

  // Make AzureFunctionDefinition internal in C#.
  @@access(AzureFunctionDefinition, Access.internal);
  @@clientName(AzureFunctionDefinition,
    "InternalAzureFunctionDefinition",
    "csharp"
  );
  @@clientName(AzureFunctionToolDefinition.azureFunction,
    "InternalAzureFunction",
    "csharp"
  );
  @@access(AzureFunctionBinding, Access.public);

  // SubmitToolOutputsAction: include .tool_calls directly rather than via an intermediate .details.

  @@access(SubmitToolOutputsDetails, Access.internal);
  @@clientName(SubmitToolOutputsDetails,
    "InternalSubmitToolOutputsDetails",
    "csharp"
  );
  @@clientName(SubmitToolOutputsAction.submitToolOutputs,
    "InternalDetails",
    "csharp"
  );

  // RequiredFunctionToolCall, RunStepFunctionToolCall: include name/arguments/output directly

  @@access(RunStepFunctionToolCallDetails, Access.internal);
  @@clientName(RunStepFunctionToolCallDetails,
    "InternalRunStepFunctionToolCallDetails",
    "csharp"
  );
  @@clientName(RequiredFunctionToolCall.function, "InternalDetails", "csharp");
  @@access(RequiredFunctionToolCallDetails, Access.internal);
  @@clientName(RequiredFunctionToolCallDetails,
    "InternalRequiredFunctionToolCallDetails",
    "csharp"
  );
  @@clientName(RunStepFunctionToolCall.function, "InternalDetails", "csharp");

  // RunStepCodeInterpreterToolCall: include input/outputs directly

  @@access(RunStepCodeInterpreterToolCallDetails, Access.internal);
  @@clientName(RunStepCodeInterpreterToolCallDetails,
    "InternalCodeInterpreterToolCallDetails",
    "csharp"
  );
  @@clientName(RunStepCodeInterpreterToolCall.codeInterpreter,
    "InternalDetails",
    "csharp"
  );

  // MessageTextContent: text/annotations can also merge

  @@access(MessageTextDetails, Access.internal);
  @@clientName(MessageTextDetails, "InternalMessageTextDetails", "csharp");
  @@clientName(MessageTextContent.text, "InternalDetails", "csharp");

  // MessageTextFileCitationAnnotation: file_id/quote don't need another type

  @@access(MessageTextFileCitationDetails, Access.internal);
  @@clientName(MessageTextFileCitationDetails,
    "InternalMessageTextFileCitationDetails",
    "csharp"
  );
  @@clientName(MessageTextFileCitationAnnotation.fileCitation,
    "InternalDetails",
    "csharp"
  );

  // MessageTextFilePathAnnotation: file_id doesn't need a separate details client type

  @@access(MessageTextFilePathDetails, Access.internal);
  @@clientName(MessageTextFilePathDetails,
    "InternalMessageTextFilePathDetails",
    "csharp"
  );
  @@clientName(MessageTextFilePathAnnotation.filePath,
    "InternalDetails",
    "csharp"
  );

  // MessageImageFileContent: *two* levels of intermediate structure can be squashed to bring file_id to the parent
  // type. Per earlier precedent with image generation, even the introduction of more image file representations (e.g.
  // base64) are better accomplished via another approach at the client layer.

  @@access(MessageImageFileDetails, Access.internal);
  @@clientName(MessageImageFileDetails,
    "InternalMessageImageFileDetails",
    "csharp"
  );
  @@clientName(MessageImageFileContent.imageFile, "InternalDetails", "csharp");
  @@clientName(MessageImageFileDetails.fileId, "InternalDetails", "csharp");

  // Several of the content item types are not intended to be used as input

  @@usage(MessageTextContent, Usage.output);
  @@usage(MessageImageFileContent, Usage.output);
  @@usage(MessageTextContent, Usage.output);
  @@usage(MessageTextFileCitationAnnotation, Usage.output);
  @@usage(MessageTextFilePathAnnotation, Usage.output);

  // Ensure some shared types remain public despite interaction with previously internalized details

  // Ensure generator inclusion of streaming "leaf" types not yet referenced by a route

  @@usage(MessageDeltaTextFileCitationAnnotation, Usage.output);
  @@access(MessageDeltaTextFileCitationAnnotation, Access.public);

  @@usage(MessageDeltaTextFileCitationAnnotationObject, Usage.output);
  @@access(MessageDeltaTextFileCitationAnnotationObject, Access.public);

  @@usage(MessageDeltaTextFilePathAnnotation, Usage.output);
  @@access(MessageDeltaTextFilePathAnnotation, Access.public);

  @@usage(MessageDeltaTextFilePathAnnotationObject, Usage.output);
  @@access(MessageDeltaTextFilePathAnnotationObject, Access.public);

  @@usage(MessageDeltaImageFileContent, Usage.output);
  @@access(MessageDeltaImageFileContent, Access.public);

  @@usage(MessageDeltaImageFileContentObject, Usage.output);
  @@access(MessageDeltaImageFileContentObject, Access.public);

  @@usage(MessageDeltaTextContent, Usage.output);
  @@access(MessageDeltaTextContent, Access.public);

  @@usage(MessageDeltaTextContentObject, Usage.output);
  @@access(MessageDeltaTextContentObject, Access.public);

  @@usage(RunStepDeltaMessageCreationObject, Usage.output);
  @@access(RunStepDeltaMessageCreationObject, Access.public);

  @@usage(RunStepDeltaFunction, Usage.output);
  @@access(RunStepDeltaFunction, Access.public);

  @@usage(RunStepDeltaCodeInterpreterLogOutput, Usage.output);
  @@access(RunStepDeltaCodeInterpreterLogOutput, Access.public);

  @@usage(RunStepDeltaCodeInterpreterImageOutputObject, Usage.output);
  @@access(RunStepDeltaCodeInterpreterImageOutputObject, Access.public);

  @@usage(RunStepDeltaChunk, Usage.output);
  @@access(RunStepDeltaChunk, Access.public);

  @@usage(MessageDeltaChunk, Usage.output);
  @@access(MessageDeltaChunk, Access.public);

  @@usage(MessageDelta, Usage.output);
  @@access(MessageDelta, Access.public);

  @@usage(MessageDeltaContent, Usage.output);
  @@access(MessageDeltaContent, Access.public);

  // Stream events : made public to expose documentation and make class casting for strongly typed languages easier

  @@usage(AgentStreamEvent, Usage.output);
  @@access(AgentStreamEvent, Access.public);

  @@usage(ThreadStreamEvent, Usage.output);
  @@access(ThreadStreamEvent, Access.public);

  @@usage(RunStreamEvent, Usage.output);
  @@access(RunStreamEvent, Access.public);

  @@usage(RunStepStreamEvent, Usage.output);
  @@access(RunStepStreamEvent, Access.public);

  @@usage(MessageStreamEvent, Usage.output);
  @@access(MessageStreamEvent, Access.public);

  @@usage(ErrorEvent, Usage.output);
  @@access(ErrorEvent, Access.public);

  @@usage(DoneEvent, Usage.output);
  @@access(DoneEvent, Access.public);

  // Tool resources
  @@usage(ToolResources, Usage.output);
  @@access(ToolResources, Access.public);

  @@usage(CodeInterpreterToolResource, Usage.output);
  @@access(CodeInterpreterToolResource, Access.public);

  @@usage(FileSearchToolResource, Usage.output);
  @@access(FileSearchToolResource, Access.public);

  // Ensure some shared types remain public despite interaction with previously internalized details
  @@access(MessageTextFilePathAnnotation, Access.public);
  @@access(MessageTextFileCitationAnnotation, Access.public);
  @@access(ListSortOrder, Access.public);
  @@access(RequiredToolCall, Access.public);
  @@usage(FilePurpose, Usage.input | Usage.output);
  @@usage(ListSortOrder, Usage.input | Usage.output);

  // Make getFileContent internal method in Python (override with get_file_content_stream)
  @@access(getFileContent, Access.internal, "python");

  // Additional, language-specific idiomatic renames

  @@clientName(OpenAIFile, "OpenAIFile", "csharp");
  @@clientName(OpenAIFile.bytes, "Size", "csharp");
  @@clientName(FilePurpose, "OpenAIFilePurpose", "csharp");
  @@clientName(ThreadMessage.content, "ContentItems", "csharp");
  @@clientName(MessageTextDetails.value, "Text", "csharp");
  @@clientName(CreateRunOptions.`model`, "OverrideModelName", "csharp");
  @@clientName(CreateRunOptions.instructions, "OverrideInstructions", "csharp");
  @@clientName(CreateRunOptions.tools, "OverrideTools", "csharp");
  @@clientName(CreateAndRunThreadOptions.`model`,
    "OverrideModelName",
    "csharp"
  );
  @@clientName(CreateAndRunThreadOptions.instructions,
    "OverrideInstructions",
    "csharp"
  );
  @@clientName(CreateAndRunThreadOptions.tools, "OverrideTools", "csharp");
  // From https://platform.openai.com/docs/agents/how-it-works
  // "Note that deleting an AgentFile doesn’t delete the original File object, it simply deletes the association
  // between that File and the Agent."

  //@override(Azure.AI.Agents.createAgent, "java")
  //op createAgentCustomization(createAgentOptions: CreateAgentOptions): Agent;

  //@@clientName(updateAgent::parameters.body,
  //  "updateAgentOptions",
  //  "java"
  //);
  //@@clientName(createThreadAndRun::parameters.body,
  //  "createAndRunThreadOptions",
  //  "java"
  //);
  //@@clientName(createThread::parameters.body,
  //  "agentThreadCreationOptions",
  //  "java"
  //);
  ///@@clientName(updateThread::parameters.body,
  //  "updateAgentThreadOptions",
  //  "java"
  //);
  //@@clientName(createVectorStore::parameters.body,
  //  "vectorStoreOptions",
  //  "java"
  //);
  //@@clientName(modifyVectorStore::parameters.body,
  //  "vectorStoreUpdateOptions",
  //  "java"
  //);
  //@@clientName(createRun::parameters.body, "createRunOptions", "java");
  //@@clientName(createMessage::parameters.body, "threadMessageOptions", "java");
}

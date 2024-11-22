// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { stringToUint8Array } from "@azure/core-util";

/** Evaluation Definition */
export interface Evaluation {
  /** Identifier of the evaluation. */
  readonly id: string;
  /** Data for evaluation. */
  data: InputDataUnion;
  /** Display Name for evaluation. It helps to find evaluation easily in AI Studio. It does not need to be unique. */
  displayName?: string;
  /** Description of the evaluation. It can be used to store additional information about the evaluation and is mutable. */
  description?: string;
  /** Metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemData;
  /** Status of the evaluation. It is set by service and is read-only. */
  readonly status?: string;
  /** Evaluation's tags. Unlike properties, tags are fully mutable. */
  tags?: Record<string, string>;
  /** Evaluation's properties. Unlike tags, properties are add-only. Once added, a property cannot be removed. */
  properties?: Record<string, string>;
  /** Evaluators to be used for the evaluation. */
  evaluators: Record<string, EvaluatorConfiguration>;
}

export function evaluationSerializer(item: Evaluation): any {
  return {
    data: inputDataUnionSerializer(item["data"]),
    displayName: item["displayName"],
    description: item["description"],
    tags: item["tags"],
    properties: item["properties"],
    evaluators: evaluatorConfigurationRecordSerializer(item["evaluators"]),
  };
}

export function evaluationDeserializer(item: any): Evaluation {
  return {
    id: item["id"],
    data: inputDataUnionDeserializer(item["data"]),
    displayName: item["displayName"],
    description: item["description"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    status: item["status"],
    tags: item["tags"],
    properties: item["properties"],
    evaluators: evaluatorConfigurationRecordDeserializer(item["evaluators"]),
  };
}

/** Abstract data class for input data configuration. */
export interface InputData {
  /** Type of the data. */
  /** The discriminator possible values: app_insights, dataset */
  type: string;
}

export function inputDataSerializer(item: InputData): any {
  return { type: item["type"] };
}

export function inputDataDeserializer(item: any): InputData {
  return {
    type: item["type"],
  };
}

/** Alias for InputDataUnion */
export type InputDataUnion = AppInsightsConfiguration | Dataset | InputData;

export function inputDataUnionSerializer(item: InputDataUnion): any {
  switch (item.type) {
    case "app_insights":
      return appInsightsConfigurationSerializer(
        item as AppInsightsConfiguration,
      );

    case "dataset":
      return datasetSerializer(item as Dataset);

    default:
      return inputDataSerializer(item);
  }
}

export function inputDataUnionDeserializer(item: any): InputDataUnion {
  switch (item.type) {
    case "app_insights":
      return appInsightsConfigurationDeserializer(
        item as AppInsightsConfiguration,
      );

    case "dataset":
      return datasetDeserializer(item as Dataset);

    default:
      return inputDataDeserializer(item);
  }
}

/** Data Source for Application Insight. */
export interface AppInsightsConfiguration extends InputData {
  readonly type: "app_insights";
  /** LogAnalytic Workspace resourceID associated with AppInsights */
  resourceId: string;
  /** Query to fetch the data. */
  query: string;
  /** Service name. */
  serviceName: string;
}

export function appInsightsConfigurationSerializer(
  item: AppInsightsConfiguration,
): any {
  return {
    resourceId: item["resourceId"],
    query: item["query"],
    serviceName: item["serviceName"],
  };
}

export function appInsightsConfigurationDeserializer(
  item: any,
): AppInsightsConfiguration {
  return {
    type: item["type"],
    resourceId: item["resourceId"],
    query: item["query"],
    serviceName: item["serviceName"],
  };
}

/** Dataset as source for evaluation. */
export interface Dataset extends InputData {
  readonly type: "dataset";
  /** Evaluation input data */
  id: string;
}

export function datasetSerializer(item: Dataset): any {
  return { id: item["id"] };
}

export function datasetDeserializer(item: any): Dataset {
  return {
    type: item["type"],
    id: item["id"],
  };
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The timestamp the resource was created at. */
  readonly createdAt?: Date;
  /** The identity that created the resource. */
  readonly createdBy?: string;
  /** The identity type that created the resource. */
  readonly createdByType?: string;
  /** The timestamp of resource last modification (UTC) */
  readonly lastModifiedAt?: Date;
}

export function systemDataDeserializer(item: any): SystemData {
  return {
    createdAt: !item["createdAt"]
      ? item["createdAt"]
      : new Date(item["createdAt"]),
    createdBy: item["createdBy"],
    createdByType: item["createdByType"],
    lastModifiedAt: !item["lastModifiedAt"]
      ? item["lastModifiedAt"]
      : new Date(item["lastModifiedAt"]),
  };
}

export function evaluatorConfigurationRecordSerializer(
  item: Record<string, EvaluatorConfiguration>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : evaluatorConfigurationSerializer(item[key]);
  });
  return result;
}

export function evaluatorConfigurationRecordDeserializer(
  item: Record<string, any>,
): Record<string, EvaluatorConfiguration> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : evaluatorConfigurationDeserializer(item[key]);
  });
  return result;
}

/** Evaluator Configuration */
export interface EvaluatorConfiguration {
  /** Identifier of the evaluator. */
  id: string;
  /** Initialization parameters of the evaluator. */
  initParams?: Record<string, any>;
  /** Data parameters of the evaluator. */
  dataMapping?: Record<string, string>;
}

export function evaluatorConfigurationSerializer(
  item: EvaluatorConfiguration,
): any {
  return {
    id: item["id"],
    initParams: item["initParams"],
    dataMapping: item["dataMapping"],
  };
}

export function evaluatorConfigurationDeserializer(
  item: any,
): EvaluatorConfiguration {
  return {
    id: item["id"],
    initParams: item["initParams"],
    dataMapping: item["dataMapping"],
  };
}

/** Paged collection of Evaluation items */
export interface _PagedEvaluation {
  /** The Evaluation items on this page */
  value: Evaluation[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedEvaluationDeserializer(item: any): _PagedEvaluation {
  return {
    value: evaluationArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function evaluationArraySerializer(result: Array<Evaluation>): any[] {
  return result.map((item) => {
    return evaluationSerializer(item);
  });
}

export function evaluationArrayDeserializer(result: Array<Evaluation>): any[] {
  return result.map((item) => {
    return evaluationDeserializer(item);
  });
}

/** Evaluation Schedule Definition */
export interface EvaluationSchedule {
  /** Identifier of the evaluation. */
  readonly id: string;
  /** Data for evaluation. */
  data: InputDataUnion;
  /** Display Name for evaluation. It helps to find evaluation easily in AI Studio. It does not need to be unique. */
  displayName?: string;
  /** Description of the evaluation. It can be used to store additional information about the evaluation and is mutable. */
  description?: string;
  /** Metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemData;
  /** Status of the evaluation. It is set by service and is read-only. */
  readonly provisioningStatus?: string;
  /** Evaluation's tags. Unlike properties, tags are fully mutable. */
  tags?: Record<string, string>;
  /** Evaluation's properties. Unlike tags, properties are add-only. Once added, a property cannot be removed. */
  properties?: Record<string, string>;
  /** Evaluators to be used for the evaluation. */
  evaluators: Record<string, EvaluatorConfiguration>;
  /** Trigger for the evaluation. */
  trigger: TriggerUnion;
  /** Sampling strategy for the evaluation. */
  samplingStrategy: SamplingStrategy;
}

export function evaluationScheduleSerializer(item: EvaluationSchedule): any {
  return {
    data: inputDataUnionSerializer(item["data"]),
    displayName: item["displayName"],
    description: item["description"],
    tags: item["tags"],
    properties: item["properties"],
    evaluators: evaluatorConfigurationRecordSerializer(item["evaluators"]),
    trigger: triggerUnionSerializer(item["trigger"]),
    samplingStrategy: samplingStrategySerializer(item["samplingStrategy"]),
  };
}

export function evaluationScheduleDeserializer(item: any): EvaluationSchedule {
  return {
    id: item["id"],
    data: inputDataUnionDeserializer(item["data"]),
    displayName: item["displayName"],
    description: item["description"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    provisioningStatus: item["provisioningStatus"],
    tags: item["tags"],
    properties: item["properties"],
    evaluators: evaluatorConfigurationRecordDeserializer(item["evaluators"]),
    trigger: triggerUnionDeserializer(item["trigger"]),
    samplingStrategy: samplingStrategyDeserializer(item["samplingStrategy"]),
  };
}

/** Abstract data class for input data configuration. */
export interface Trigger {
  /** Type of the trigger. */
  /** The discriminator possible values: Recurrence, Cron */
  type: string;
}

export function triggerSerializer(item: Trigger): any {
  return { type: item["type"] };
}

export function triggerDeserializer(item: any): Trigger {
  return {
    type: item["type"],
  };
}

/** Alias for TriggerUnion */
export type TriggerUnion = RecurrenceTrigger | CronTrigger | Trigger;

export function triggerUnionSerializer(item: TriggerUnion): any {
  switch (item.type) {
    case "Recurrence":
      return recurrenceTriggerSerializer(item as RecurrenceTrigger);

    case "Cron":
      return cronTriggerSerializer(item as CronTrigger);

    default:
      return triggerSerializer(item);
  }
}

export function triggerUnionDeserializer(item: any): TriggerUnion {
  switch (item.type) {
    case "Recurrence":
      return recurrenceTriggerDeserializer(item as RecurrenceTrigger);

    case "Cron":
      return cronTriggerDeserializer(item as CronTrigger);

    default:
      return triggerDeserializer(item);
  }
}

/** Recurrence Trigger Definition */
export interface RecurrenceTrigger extends Trigger {
  readonly type: "Recurrence";
  /** The frequency to trigger schedule. */
  frequency: Frequency;
  /** Specifies schedule interval in conjunction with frequency */
  interval: number;
  /** The recurrence schedule. */
  schedule: RecurrenceSchedule;
}

export function recurrenceTriggerSerializer(item: RecurrenceTrigger): any {
  return {
    frequency: item["frequency"],
    interval: item["interval"],
    schedule: recurrenceScheduleSerializer(item["schedule"]),
  };
}

export function recurrenceTriggerDeserializer(item: any): RecurrenceTrigger {
  return {
    type: item["type"],
    frequency: item["frequency"],
    interval: item["interval"],
    schedule: recurrenceScheduleDeserializer(item["schedule"]),
  };
}

/** Frequency of the schedule - day, week, month, hour, minute */
export type Frequency = "Month" | "Week" | "Day" | "Hour" | "Minute";

/** RecurrenceSchedule Definition */
export interface RecurrenceSchedule {
  /** List of hours for the schedule. */
  hours: number[];
  /** List of minutes for the schedule. */
  minutes: number[];
  /** List of days for the schedule. */
  weekDays: WeekDays[];
  /** List of month days for the schedule */
  monthDays: number[];
}

export function recurrenceScheduleSerializer(item: RecurrenceSchedule): any {
  return {
    hours: item["hours"].map((p: any) => {
      return p;
    }),
    minutes: item["minutes"].map((p: any) => {
      return p;
    }),
    weekDays: item["weekDays"].map((p: any) => {
      return p;
    }),
    monthDays: item["monthDays"].map((p: any) => {
      return p;
    }),
  };
}

export function recurrenceScheduleDeserializer(item: any): RecurrenceSchedule {
  return {
    hours: item["hours"].map((p: any) => {
      return p;
    }),
    minutes: item["minutes"].map((p: any) => {
      return p;
    }),
    weekDays: item["weekDays"].map((p: any) => {
      return p;
    }),
    monthDays: item["monthDays"].map((p: any) => {
      return p;
    }),
  };
}

/** WeekDay of the schedule - Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday */
export type WeekDays =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

/** Cron Trigger Definition */
export interface CronTrigger extends Trigger {
  readonly type: "Cron";
  /** Cron expression for the trigger. */
  expression: string;
}

export function cronTriggerSerializer(item: CronTrigger): any {
  return { expression: item["expression"] };
}

export function cronTriggerDeserializer(item: any): CronTrigger {
  return {
    type: item["type"],
    expression: item["expression"],
  };
}

/** SamplingStrategy Definition */
export interface SamplingStrategy {
  /** Sampling rate */
  rate: number;
}

export function samplingStrategySerializer(item: SamplingStrategy): any {
  return { rate: item["rate"] };
}

export function samplingStrategyDeserializer(item: any): SamplingStrategy {
  return {
    rate: item["rate"],
  };
}

/** Paged collection of EvaluationSchedule items */
export interface _PagedEvaluationSchedule {
  /** The EvaluationSchedule items on this page */
  value: EvaluationSchedule[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedEvaluationScheduleDeserializer(
  item: any,
): _PagedEvaluationSchedule {
  return {
    value: evaluationScheduleArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function evaluationScheduleArraySerializer(
  result: Array<EvaluationSchedule>,
): any[] {
  return result.map((item) => {
    return evaluationScheduleSerializer(item);
  });
}

export function evaluationScheduleArrayDeserializer(
  result: Array<EvaluationSchedule>,
): any[] {
  return result.map((item) => {
    return evaluationScheduleDeserializer(item);
  });
}

/** Response from the list operation */
export interface ConnectionsListResponse {
  /** A list of connection list secrets */
  value: ConnectionsListSecretsResponse[];
}

export function connectionsListResponseDeserializer(
  item: any,
): ConnectionsListResponse {
  return {
    value: connectionsListSecretsResponseArrayDeserializer(item["value"]),
  };
}

export function connectionsListSecretsResponseArrayDeserializer(
  result: Array<ConnectionsListSecretsResponse>,
): any[] {
  return result.map((item) => {
    return connectionsListSecretsResponseDeserializer(item);
  });
}

/** Response from the listSecrets operation */
export interface ConnectionsListSecretsResponse {
  /** A unique identifier for the connection */
  id: string;
  /** The name of the resource */
  name: string;
  /** The properties of the resource */
  properties: ConnectionPropertiesUnion;
}

export function connectionsListSecretsResponseDeserializer(
  item: any,
): ConnectionsListSecretsResponse {
  return {
    id: item["id"],
    name: item["name"],
    properties: connectionPropertiesUnionDeserializer(item["properties"]),
  };
}

/** Connection properties */
export interface ConnectionProperties {
  /** Authentication type of the connection target */
  /** The discriminator possible values: ApiKey, AAD, SAS */
  authType: AuthenticationType;
}

export function connectionPropertiesDeserializer(
  item: any,
): ConnectionProperties {
  return {
    authType: item["authType"],
  };
}

/** Alias for ConnectionPropertiesUnion */
export type ConnectionPropertiesUnion =
  | ConnectionPropertiesApiKeyAuth
  | ConnectionPropertiesAADAuth
  | ConnectionPropertiesSASAuth
  | ConnectionProperties;

export function connectionPropertiesUnionDeserializer(
  item: any,
): ConnectionPropertiesUnion {
  switch (item.authType) {
    case "ApiKey":
      return connectionPropertiesApiKeyAuthDeserializer(
        item as ConnectionPropertiesApiKeyAuth,
      );

    case "AAD":
      return connectionPropertiesAADAuthDeserializer(
        item as ConnectionPropertiesAADAuth,
      );

    case "SAS":
      return connectionPropertiesSASAuthDeserializer(
        item as ConnectionPropertiesSASAuth,
      );

    default:
      return connectionPropertiesDeserializer(item);
  }
}

/** Authentication type used by Azure AI service to connect to another service */
export type AuthenticationType = "ApiKey" | "AAD" | "SAS";

/** Connection properties for connections with API key authentication */
export interface ConnectionPropertiesApiKeyAuth extends ConnectionProperties {
  /** Authentication type of the connection target */
  authType: "ApiKey";
  /** Category of the connection */
  category: ConnectionType;
  /** Credentials will only be present for authType=ApiKey */
  credentials: CredentialsApiKeyAuth;
  /** The connection URL to be used for this service */
  target: string;
}

export function connectionPropertiesApiKeyAuthDeserializer(
  item: any,
): ConnectionPropertiesApiKeyAuth {
  return {
    authType: item["authType"],
    category: item["category"],
    credentials: credentialsApiKeyAuthDeserializer(item["credentials"]),
    target: item["target"],
  };
}

/** The Type (or category) of the connection */
export type ConnectionType =
  | "AzureOpenAI"
  | "Serverless"
  | "AzureBlob"
  | "AIServices";

/** The credentials needed for API key authentication */
export interface CredentialsApiKeyAuth {
  /** The API key */
  key: string;
}

export function credentialsApiKeyAuthDeserializer(
  item: any,
): CredentialsApiKeyAuth {
  return {
    key: item["key"],
  };
}

/** Connection properties for connections with AAD authentication (aka `Entra ID passthrough`) */
export interface ConnectionPropertiesAADAuth extends ConnectionProperties {
  /** Authentication type of the connection target */
  authType: "AAD";
  /** Category of the connection */
  category: ConnectionType;
  /** The connection URL to be used for this service */
  target: string;
}

export function connectionPropertiesAADAuthDeserializer(
  item: any,
): ConnectionPropertiesAADAuth {
  return {
    authType: item["authType"],
    category: item["category"],
    target: item["target"],
  };
}

/** Connection properties for connections with SAS authentication */
export interface ConnectionPropertiesSASAuth extends ConnectionProperties {
  /** Authentication type of the connection target */
  authType: "SAS";
  /** Category of the connection */
  category: ConnectionType;
  /** Credentials will only be present for authType=ApiKey */
  credentials: CredentialsSASAuth;
  /** The connection URL to be used for this service */
  target: string;
}

export function connectionPropertiesSASAuthDeserializer(
  item: any,
): ConnectionPropertiesSASAuth {
  return {
    authType: item["authType"],
    category: item["category"],
    credentials: credentialsSASAuthDeserializer(item["credentials"]),
    target: item["target"],
  };
}

/** The credentials needed for Shared Access Signatures (SAS) authentication */
export interface CredentialsSASAuth {
  /** The Shared Access Signatures (SAS) token */
  sas: string;
}

export function credentialsSASAuthDeserializer(item: any): CredentialsSASAuth {
  return {
    sas: item["SAS"],
  };
}

/** An abstract representation of an input tool definition that an agent can use. */
export interface ToolDefinition {
  /** The object type. */
  /** The discriminator possible values: code_interpreter, file_search, function, bing_grounding, microsoft_fabric, sharepoint, azure_ai_search */
  type: string;
}

export function toolDefinitionSerializer(item: ToolDefinition): any {
  return { type: item["type"] };
}

export function toolDefinitionDeserializer(item: any): ToolDefinition {
  return {
    type: item["type"],
  };
}

/** Alias for ToolDefinitionUnion */
export type ToolDefinitionUnion =
  | CodeInterpreterToolDefinition
  | FileSearchToolDefinition
  | FunctionToolDefinition
  | BingGroundingToolDefinition
  | MicrosoftFabricToolDefinition
  | SharepointToolDefinition
  | AzureAISearchToolDefinition
  | ToolDefinition;

export function toolDefinitionUnionSerializer(item: ToolDefinitionUnion): any {
  switch (item.type) {
    case "code_interpreter":
      return codeInterpreterToolDefinitionSerializer(
        item as CodeInterpreterToolDefinition,
      );

    case "file_search":
      return fileSearchToolDefinitionSerializer(
        item as FileSearchToolDefinition,
      );

    case "function":
      return functionToolDefinitionSerializer(item as FunctionToolDefinition);

    case "bing_grounding":
      return bingGroundingToolDefinitionSerializer(
        item as BingGroundingToolDefinition,
      );

    case "microsoft_fabric":
      return microsoftFabricToolDefinitionSerializer(
        item as MicrosoftFabricToolDefinition,
      );

    case "sharepoint":
      return sharepointToolDefinitionSerializer(
        item as SharepointToolDefinition,
      );

    case "azure_ai_search":
      return azureAISearchToolDefinitionSerializer(
        item as AzureAISearchToolDefinition,
      );

    default:
      return toolDefinitionSerializer(item);
  }
}

export function toolDefinitionUnionDeserializer(
  item: any,
): ToolDefinitionUnion {
  switch (item.type) {
    case "code_interpreter":
      return codeInterpreterToolDefinitionDeserializer(
        item as CodeInterpreterToolDefinition,
      );

    case "file_search":
      return fileSearchToolDefinitionDeserializer(
        item as FileSearchToolDefinition,
      );

    case "function":
      return functionToolDefinitionDeserializer(item as FunctionToolDefinition);

    case "bing_grounding":
      return bingGroundingToolDefinitionDeserializer(
        item as BingGroundingToolDefinition,
      );

    case "microsoft_fabric":
      return microsoftFabricToolDefinitionDeserializer(
        item as MicrosoftFabricToolDefinition,
      );

    case "sharepoint":
      return sharepointToolDefinitionDeserializer(
        item as SharepointToolDefinition,
      );

    case "azure_ai_search":
      return azureAISearchToolDefinitionDeserializer(
        item as AzureAISearchToolDefinition,
      );

    default:
      return toolDefinitionDeserializer(item);
  }
}

/** The input definition information for a code interpreter tool as used to configure an agent. */
export interface CodeInterpreterToolDefinition extends ToolDefinition {
  /** The object type, which is always 'code_interpreter'. */
  type: "code_interpreter";
}

export function codeInterpreterToolDefinitionSerializer(
  item: CodeInterpreterToolDefinition,
): any {
  return { type: item["type"] };
}

export function codeInterpreterToolDefinitionDeserializer(
  item: any,
): CodeInterpreterToolDefinition {
  return {
    type: item["type"],
  };
}

/** The input definition information for a file search tool as used to configure an agent. */
export interface FileSearchToolDefinition extends ToolDefinition {
  /** The object type, which is always 'file_search'. */
  type: "file_search";
  /** Options overrides for the file search tool. */
  fileSearch?: FileSearchToolDefinitionDetails;
}

export function fileSearchToolDefinitionSerializer(
  item: FileSearchToolDefinition,
): any {
  return {
    type: item["type"],
    file_search: !item["fileSearch"]
      ? item["fileSearch"]
      : fileSearchToolDefinitionDetailsSerializer(item["fileSearch"]),
  };
}

export function fileSearchToolDefinitionDeserializer(
  item: any,
): FileSearchToolDefinition {
  return {
    type: item["type"],
    fileSearch: !item["file_search"]
      ? item["file_search"]
      : fileSearchToolDefinitionDetailsDeserializer(item["file_search"]),
  };
}

/** Options overrides for the file search tool. */
export interface FileSearchToolDefinitionDetails {
  /**
   * The maximum number of results the file search tool should output. The default is 20 for gpt-4* models and 5 for gpt-3.5-turbo. This number should be between 1 and 50 inclusive.
   *
   * Note that the file search tool may output fewer than `max_num_results` results. See the file search tool documentation for more information.
   */
  maxNumResults?: number;
}

export function fileSearchToolDefinitionDetailsSerializer(
  item: FileSearchToolDefinitionDetails,
): any {
  return { max_num_results: item["maxNumResults"] };
}

export function fileSearchToolDefinitionDetailsDeserializer(
  item: any,
): FileSearchToolDefinitionDetails {
  return {
    maxNumResults: item["max_num_results"],
  };
}

/** The input definition information for a function tool as used to configure an agent. */
export interface FunctionToolDefinition extends ToolDefinition {
  /** The object type, which is always 'function'. */
  type: "function";
  /** The definition of the concrete function that the function tool should call. */
  function: FunctionDefinition;
}

export function functionToolDefinitionSerializer(
  item: FunctionToolDefinition,
): any {
  return {
    type: item["type"],
    function: functionDefinitionSerializer(item["function"]),
  };
}

export function functionToolDefinitionDeserializer(
  item: any,
): FunctionToolDefinition {
  return {
    type: item["type"],
    function: functionDefinitionDeserializer(item["function"]),
  };
}

/** The input definition information for a function. */
export interface FunctionDefinition {
  /** The name of the function to be called. */
  name: string;
  /** A description of what the function does, used by the model to choose when and how to call the function. */
  description?: string;
  /** The parameters the functions accepts, described as a JSON Schema object. */
  parameters: any;
}

export function functionDefinitionSerializer(item: FunctionDefinition): any {
  return {
    name: item["name"],
    description: item["description"],
    parameters: item["parameters"],
  };
}

export function functionDefinitionDeserializer(item: any): FunctionDefinition {
  return {
    name: item["name"],
    description: item["description"],
    parameters: item["parameters"],
  };
}

/** The input definition information for a bing grounding search tool as used to configure an agent. */
export interface BingGroundingToolDefinition extends ToolDefinition {
  /** The object type, which is always 'bing_grounding'. */
  type: "bing_grounding";
}

export function bingGroundingToolDefinitionSerializer(
  item: BingGroundingToolDefinition,
): any {
  return { type: item["type"] };
}

export function bingGroundingToolDefinitionDeserializer(
  item: any,
): BingGroundingToolDefinition {
  return {
    type: item["type"],
  };
}

/** The input definition information for a Microsoft Fabric tool as used to configure an agent. */
export interface MicrosoftFabricToolDefinition extends ToolDefinition {
  /** The object type, which is always 'microsoft_fabric'. */
  type: "microsoft_fabric";
}

export function microsoftFabricToolDefinitionSerializer(
  item: MicrosoftFabricToolDefinition,
): any {
  return { type: item["type"] };
}

export function microsoftFabricToolDefinitionDeserializer(
  item: any,
): MicrosoftFabricToolDefinition {
  return {
    type: item["type"],
  };
}

/** The input definition information for a sharepoint tool as used to configure an agent. */
export interface SharepointToolDefinition extends ToolDefinition {
  /** The object type, which is always 'sharepoint'. */
  type: "sharepoint";
}

export function sharepointToolDefinitionSerializer(
  item: SharepointToolDefinition,
): any {
  return { type: item["type"] };
}

export function sharepointToolDefinitionDeserializer(
  item: any,
): SharepointToolDefinition {
  return {
    type: item["type"],
  };
}

/** The input definition information for an Azure AI search tool as used to configure an agent. */
export interface AzureAISearchToolDefinition extends ToolDefinition {
  /** The object type, which is always 'azure_ai_search'. */
  type: "azure_ai_search";
}

export function azureAISearchToolDefinitionSerializer(
  item: AzureAISearchToolDefinition,
): any {
  return { type: item["type"] };
}

export function azureAISearchToolDefinitionDeserializer(
  item: any,
): AzureAISearchToolDefinition {
  return {
    type: item["type"],
  };
}

/**
 * A set of resources that are used by the agent's tools. The resources are specific to the type of
 * tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search`
 * tool requires a list of vector store IDs.
 */
export interface ToolResources {
  /** Resources to be used by the `code_interpreter tool` consisting of file IDs. */
  codeInterpreter?: CodeInterpreterToolResource;
  /** Resources to be used by the `file_search` tool consisting of vector store IDs. */
  fileSearch?: FileSearchToolResource;
  /** Resources to be used by the `bing_grounding` tool consisting of connection IDs. */
  bingGrounding?: ConnectionListResource;
  /** Resources to be used by the `microsoft_fabric` tool consisting of connection IDs. */
  microsoftFabric?: ConnectionListResource;
  /** Resources to be used by the `sharepoint` tool consisting of connection IDs. */
  sharePoint?: ConnectionListResource;
  /** Resources to be used by the `azure_ai_search` tool consisting of index IDs and names. */
  azureAISearch?: AzureAISearchResource;
}

export function toolResourcesSerializer(item: ToolResources): any {
  return {
    code_interpreter: !item["codeInterpreter"]
      ? item["codeInterpreter"]
      : codeInterpreterToolResourceSerializer(item["codeInterpreter"]),
    file_search: !item["fileSearch"]
      ? item["fileSearch"]
      : fileSearchToolResourceSerializer(item["fileSearch"]),
    bing_grounding: !item["bingGrounding"]
      ? item["bingGrounding"]
      : connectionListResourceSerializer(item["bingGrounding"]),
    microsoft_fabric: !item["microsoftFabric"]
      ? item["microsoftFabric"]
      : connectionListResourceSerializer(item["microsoftFabric"]),
    sharepoint: !item["sharePoint"]
      ? item["sharePoint"]
      : connectionListResourceSerializer(item["sharePoint"]),
    azure_ai_search: !item["azureAISearch"]
      ? item["azureAISearch"]
      : azureAISearchResourceSerializer(item["azureAISearch"]),
  };
}

export function toolResourcesDeserializer(item: any): ToolResources {
  return {
    codeInterpreter: !item["code_interpreter"]
      ? item["code_interpreter"]
      : codeInterpreterToolResourceDeserializer(item["code_interpreter"]),
    fileSearch: !item["file_search"]
      ? item["file_search"]
      : fileSearchToolResourceDeserializer(item["file_search"]),
    bingGrounding: !item["bing_grounding"]
      ? item["bing_grounding"]
      : connectionListResourceDeserializer(item["bing_grounding"]),
    microsoftFabric: !item["microsoft_fabric"]
      ? item["microsoft_fabric"]
      : connectionListResourceDeserializer(item["microsoft_fabric"]),
    sharePoint: !item["sharepoint"]
      ? item["sharepoint"]
      : connectionListResourceDeserializer(item["sharepoint"]),
    azureAISearch: !item["azure_ai_search"]
      ? item["azure_ai_search"]
      : azureAISearchResourceDeserializer(item["azure_ai_search"]),
  };
}

/** A set of resources that are used by the `code_interpreter` tool. */
export interface CodeInterpreterToolResource {
  /**
   * A list of file IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files
   * associated with the tool.
   */
  fileIds?: string[];
}

export function codeInterpreterToolResourceSerializer(
  item: CodeInterpreterToolResource,
): any {
  return {
    file_ids: !item["fileIds"]
      ? item["fileIds"]
      : item["fileIds"].map((p: any) => {
          return p;
        }),
  };
}

export function codeInterpreterToolResourceDeserializer(
  item: any,
): CodeInterpreterToolResource {
  return {
    fileIds: !item["file_ids"]
      ? item["file_ids"]
      : item["file_ids"].map((p: any) => {
          return p;
        }),
  };
}

/** A set of resources that are used by the `file_search` tool. */
export interface FileSearchToolResource {
  /**
   * The ID of the vector store attached to this agent. There can be a maximum of 1 vector
   * store attached to the agent.
   */
  vectorStoreIds?: string[];
}

export function fileSearchToolResourceSerializer(
  item: FileSearchToolResource,
): any {
  return {
    vector_store_ids: !item["vectorStoreIds"]
      ? item["vectorStoreIds"]
      : item["vectorStoreIds"].map((p: any) => {
          return p;
        }),
  };
}

export function fileSearchToolResourceDeserializer(
  item: any,
): FileSearchToolResource {
  return {
    vectorStoreIds: !item["vector_store_ids"]
      ? item["vector_store_ids"]
      : item["vector_store_ids"].map((p: any) => {
          return p;
        }),
  };
}

/** A set of connection resources currently used by either the `bing_grounding`, `microsoft_fabric`, or `sharepoint` tools. */
export interface ConnectionListResource {
  /**
   * The connections attached to this agent. There can be a maximum of 1 connection
   * resource attached to the agent.
   */
  connectionList?: ConnectionResource[];
}

export function connectionListResourceSerializer(
  item: ConnectionListResource,
): any {
  return {
    connections: !item["connectionList"]
      ? item["connectionList"]
      : connectionResourceArraySerializer(item["connectionList"]),
  };
}

export function connectionListResourceDeserializer(
  item: any,
): ConnectionListResource {
  return {
    connectionList: !item["connections"]
      ? item["connections"]
      : connectionResourceArrayDeserializer(item["connections"]),
  };
}

export function connectionResourceArraySerializer(
  result: Array<ConnectionResource>,
): any[] {
  return result.map((item) => {
    return connectionResourceSerializer(item);
  });
}

export function connectionResourceArrayDeserializer(
  result: Array<ConnectionResource>,
): any[] {
  return result.map((item) => {
    return connectionResourceDeserializer(item);
  });
}

/** A connection resource. */
export interface ConnectionResource {
  /** A connection in a ConnectionListResource attached to this agent. */
  connectionId: string;
}

export function connectionResourceSerializer(item: ConnectionResource): any {
  return { connection_id: item["connectionId"] };
}

export function connectionResourceDeserializer(item: any): ConnectionResource {
  return {
    connectionId: item["connection_id"],
  };
}

/** A set of index resources used by the `azure_ai_search` tool. */
export interface AzureAISearchResource {
  /**
   * The indices attached to this agent. There can be a maximum of 1 index
   * resource attached to the agent.
   */
  indexList?: IndexResource[];
}

export function azureAISearchResourceSerializer(
  item: AzureAISearchResource,
): any {
  return {
    indexes: !item["indexList"]
      ? item["indexList"]
      : indexResourceArraySerializer(item["indexList"]),
  };
}

export function azureAISearchResourceDeserializer(
  item: any,
): AzureAISearchResource {
  return {
    indexList: !item["indexes"]
      ? item["indexes"]
      : indexResourceArrayDeserializer(item["indexes"]),
  };
}

export function indexResourceArraySerializer(
  result: Array<IndexResource>,
): any[] {
  return result.map((item) => {
    return indexResourceSerializer(item);
  });
}

export function indexResourceArrayDeserializer(
  result: Array<IndexResource>,
): any[] {
  return result.map((item) => {
    return indexResourceDeserializer(item);
  });
}

/** A Index resource. */
export interface IndexResource {
  /** An index connection id in an IndexResource attached to this agent. */
  indexConnectionId: string;
  /** The name of an index in an IndexResource attached to this agent. */
  indexName: string;
}

export function indexResourceSerializer(item: IndexResource): any {
  return {
    index_connection_id: item["indexConnectionId"],
    index_name: item["indexName"],
  };
}

export function indexResourceDeserializer(item: any): IndexResource {
  return {
    indexConnectionId: item["index_connection_id"],
    indexName: item["index_name"],
  };
}

/**
 * An object describing the expected output of the model. If `json_object` only `function` type `tools` are allowed to be passed to the Run.
 * If `text` the model can return text or any value needed.
 */
export interface AgentsApiResponseFormat {
  /** Must be one of `text` or `json_object`. */
  type?: ApiResponseFormat;
}

export function agentsApiResponseFormatSerializer(
  item: AgentsApiResponseFormat,
): any {
  return { type: item["type"] };
}

export function agentsApiResponseFormatDeserializer(
  item: any,
): AgentsApiResponseFormat {
  return {
    type: item["type"],
  };
}

/** Possible API response formats. */
export type ApiResponseFormat = "text" | "json_object";

export function toolDefinitionUnionArraySerializer(
  result: Array<ToolDefinitionUnion>,
): any[] {
  return result.map((item) => {
    return toolDefinitionUnionSerializer(item);
  });
}

export function toolDefinitionUnionArrayDeserializer(
  result: Array<ToolDefinitionUnion>,
): any[] {
  return result.map((item) => {
    return toolDefinitionUnionDeserializer(item);
  });
}

/** Alias for AgentsApiResponseFormatOption */
export type AgentsApiResponseFormatOption =
  | string
  | AgentsApiResponseFormatMode
  | AgentsApiResponseFormat;

export function agentsApiResponseFormatOptionSerializer(
  item: AgentsApiResponseFormatOption,
): any {
  return item;
}

export function agentsApiResponseFormatOptionDeserializer(
  item: any,
): AgentsApiResponseFormatOption {
  return item;
}

/** Represents the mode in which the model will handle the return format of a tool call. */
export type AgentsApiResponseFormatMode = "auto" | "none";

/** Represents an agent that can call the model and use tools. */
export interface Agent {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always assistant. */
  object: "assistant";
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /** The name of the agent. */
  name: string | null;
  /** The description of the agent. */
  description: string | null;
  /** The ID of the model to use. */
  model: string;
  /** The system instructions for the agent to use. */
  instructions: string | null;
  /** The collection of tools enabled for the agent. */
  tools: ToolDefinitionUnion[];
  /**
   * A set of resources that are used by the agent's tools. The resources are specific to the type of tool. For example, the `code_interpreter`
   * tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
   */
  toolResources: ToolResources | null;
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random,
   * while lower values like 0.2 will make it more focused and deterministic.
   */
  temperature: number | null;
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass.
   * So 0.1 means only the tokens comprising the top 10% probability mass are considered.
   *
   * We generally recommend altering this or temperature but not both.
   */
  topP: number | null;
  /** The response format of the tool calls used by this agent. */
  responseFormat?: AgentsApiResponseFormatOption | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata: Record<string, string> | null;
}

export function agentDeserializer(item: any): Agent {
  return {
    id: item["id"],
    object: item["object"],
    createdAt: new Date(item["created_at"] * 1000),
    name: item["name"],
    description: item["description"],
    model: item["model"],
    instructions: item["instructions"],
    tools: toolDefinitionUnionArrayDeserializer(item["tools"]),
    toolResources: item["tool_resources"],
    temperature: item["temperature"],
    topP: item["top_p"],
    responseFormat: !item["response_format"]
      ? item["response_format"]
      : (item["response_format"] as any),
    metadata: item["metadata"],
  };
}

/** The response data for a requested list of items. */
export interface OpenAIPageableListOfAgent {
  /** The object type, which is always list. */
  object: "list";
  /** The requested list of items. */
  data: Agent[];
  /** The first ID represented in this list. */
  firstId: string;
  /** The last ID represented in this list. */
  lastId: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  hasMore: boolean;
}

export function openAIPageableListOfAgentDeserializer(
  item: any,
): OpenAIPageableListOfAgent {
  return {
    object: item["object"],
    data: agentArrayDeserializer(item["data"]),
    firstId: item["first_id"],
    lastId: item["last_id"],
    hasMore: item["has_more"],
  };
}

export function agentArrayDeserializer(result: Array<Agent>): any[] {
  return result.map((item) => {
    return agentDeserializer(item);
  });
}

/** The status of an agent deletion operation. */
export interface AgentDeletionStatus {
  /** The ID of the resource specified for deletion. */
  id: string;
  /** A value indicating whether deletion was successful. */
  deleted: boolean;
  /** The object type, which is always 'assistant.deleted'. */
  object: "assistant.deleted";
}

export function agentDeletionStatusDeserializer(
  item: any,
): AgentDeletionStatus {
  return {
    id: item["id"],
    deleted: item["deleted"],
    object: item["object"],
  };
}

/** A single message within an agent thread, as provided during that thread's creation for its initial state. */
export interface ThreadMessageOptions {
  /**
   * The role of the entity that is creating the message. Allowed values include:
   * - `user`: Indicates the message is sent by an actual user and should be used in most cases to represent user-generated messages.
   * - `assistant`: Indicates the message is generated by the agent. Use this value to insert messages from the agent into
   * the conversation.
   */
  role: MessageRole;
  /**
   * The textual content of the initial message. Currently, robust input including images and annotated text may only be provided via
   * a separate call to the create message API.
   */
  content: string;
  /** A list of files attached to the message, and the tools they should be added to. */
  attachments?: MessageAttachment[] | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

export function threadMessageOptionsSerializer(
  item: ThreadMessageOptions,
): any {
  return {
    role: item["role"],
    content: item["content"],
    attachments: !item["attachments"]
      ? item["attachments"]
      : item["attachments"].map((p: any) => {
          return messageAttachmentSerializer(p);
        }),
    metadata: item["metadata"],
  };
}

/** The possible values for roles attributed to messages in a thread. */
export type MessageRole = "user" | "assistant";

export function messageAttachmentArraySerializer(
  result: Array<MessageAttachment>,
): any[] {
  return result.map((item) => {
    return messageAttachmentSerializer(item);
  });
}

export function messageAttachmentArrayDeserializer(
  result: Array<MessageAttachment>,
): any[] {
  return result.map((item) => {
    return messageAttachmentDeserializer(item);
  });
}

/** This describes to which tools a file has been attached. */
export interface MessageAttachment {
  /** The ID of the file to attach to the message. */
  fileId: string;
  /** The tools to add to this file. */
  tools: MessageAttachmentToolDefinition[];
}

export function messageAttachmentSerializer(item: MessageAttachment): any {
  return {
    file_id: item["fileId"],
    tools: messageAttachmentToolDefinitionArraySerializer(item["tools"]),
  };
}

export function messageAttachmentDeserializer(item: any): MessageAttachment {
  return {
    fileId: item["file_id"],
    tools: messageAttachmentToolDefinitionArrayDeserializer(item["tools"]),
  };
}

export function messageAttachmentToolDefinitionArraySerializer(
  result: Array<MessageAttachmentToolDefinition>,
): any[] {
  return result.map((item) => {
    return messageAttachmentToolDefinitionSerializer(item);
  });
}

export function messageAttachmentToolDefinitionArrayDeserializer(
  result: Array<MessageAttachmentToolDefinition>,
): any[] {
  return result.map((item) => {
    return messageAttachmentToolDefinitionDeserializer(item);
  });
}

/** Alias for MessageAttachmentToolDefinition */
export type MessageAttachmentToolDefinition =
  | CodeInterpreterToolDefinition
  | FileSearchToolDefinition;

export function messageAttachmentToolDefinitionSerializer(
  item: MessageAttachmentToolDefinition,
): any {
  return item;
}

export function messageAttachmentToolDefinitionDeserializer(
  item: any,
): MessageAttachmentToolDefinition {
  return item;
}

/** Alias for _MessageAttachmentTool */
export type _MessageAttachmentTool =
  | CodeInterpreterToolDefinition
  | FileSearchToolDefinition;

export function _messageAttachmentToolSerializer(
  item: _MessageAttachmentTool,
): any {
  return item;
}

export function _messageAttachmentToolDeserializer(
  item: any,
): _MessageAttachmentTool {
  return item;
}

export function threadMessageOptionsArraySerializer(
  result: Array<ThreadMessageOptions>,
): any[] {
  return result.map((item) => {
    return threadMessageOptionsSerializer(item);
  });
}

/** Information about a single thread associated with an agent. */
export interface AgentThread {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always 'thread'. */
  object: "thread";
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /**
   * A set of resources that are made available to the agent's tools in this thread. The resources are specific to the type
   * of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list
   * of vector store IDs.
   */
  toolResources: ToolResources | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata: Record<string, string> | null;
}

export function agentThreadDeserializer(item: any): AgentThread {
  return {
    id: item["id"],
    object: item["object"],
    createdAt: new Date(item["created_at"] * 1000),
    toolResources: item["tool_resources"],
    metadata: item["metadata"],
  };
}

/** The status of a thread deletion operation. */
export interface ThreadDeletionStatus {
  /** The ID of the resource specified for deletion. */
  id: string;
  /** A value indicating whether deletion was successful. */
  deleted: boolean;
  /** The object type, which is always 'thread.deleted'. */
  object: "thread.deleted";
}

export function threadDeletionStatusDeserializer(
  item: any,
): ThreadDeletionStatus {
  return {
    id: item["id"],
    deleted: item["deleted"],
    object: item["object"],
  };
}

/** A single, existing message within an agent thread. */
export interface ThreadMessage {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always 'thread.message'. */
  object: "thread.message";
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /** The ID of the thread that this message belongs to. */
  threadId: string;
  /** The status of the message. */
  status: MessageStatus;
  /** On an incomplete message, details about why the message is incomplete. */
  incompleteDetails: MessageIncompleteDetails | null;
  /** The Unix timestamp (in seconds) for when the message was completed. */
  completedAt: Date | null;
  /** The Unix timestamp (in seconds) for when the message was marked as incomplete. */
  incompleteAt: Date | null;
  /** The role associated with the agent thread message. */
  role: MessageRole;
  /** The list of content items associated with the agent thread message. */
  content: MessageContentUnion[];
  /** If applicable, the ID of the agent that authored this message. */
  assistantId: string | null;
  /** If applicable, the ID of the run associated with the authoring of this message. */
  runId: string | null;
  /** A list of files attached to the message, and the tools they were added to. */
  attachments: MessageAttachment[] | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata: Record<string, string> | null;
}

export function threadMessageSerializer(item: ThreadMessage): any {
  return {
    id: item["id"],
    object: item["object"],
    created_at: (item["createdAt"].getTime() / 1000) | 0,
    thread_id: item["threadId"],
    status: item["status"],
    incomplete_details: item["incompleteDetails"],
    completed_at: !item["completedAt"]
      ? item["completedAt"]
      : (item["completedAt"].getTime() / 1000) | 0,
    incomplete_at: !item["incompleteAt"]
      ? item["incompleteAt"]
      : (item["incompleteAt"].getTime() / 1000) | 0,
    role: item["role"],
    content: messageContentUnionArraySerializer(item["content"]),
    assistant_id: item["assistantId"],
    run_id: item["runId"],
    attachments: !item["attachments"]
      ? item["attachments"]
      : item["attachments"].map((p: any) => {
          return messageAttachmentSerializer(p);
        }),
    metadata: item["metadata"],
  };
}

export function threadMessageDeserializer(item: any): ThreadMessage {
  return {
    id: item["id"],
    object: item["object"],
    createdAt: new Date(item["created_at"] * 1000),
    threadId: item["thread_id"],
    status: item["status"],
    incompleteDetails: item["incomplete_details"],
    completedAt: !item["completed_at"]
      ? item["completed_at"]
      : !item["completed_at"]
        ? item["completed_at"]
        : new Date(item["completed_at"] * 1000),
    incompleteAt: !item["incomplete_at"]
      ? item["incomplete_at"]
      : !item["incomplete_at"]
        ? item["incomplete_at"]
        : new Date(item["incomplete_at"] * 1000),
    role: item["role"],
    content: messageContentUnionArrayDeserializer(item["content"]),
    assistantId: item["assistant_id"],
    runId: item["run_id"],
    attachments: !item["attachments"]
      ? item["attachments"]
      : !item["attachments"]
        ? item["attachments"]
        : item["attachments"].map((p: any) => {
            return messageAttachmentDeserializer(p);
          }),
    metadata: item["metadata"],
  };
}

/** The possible execution status values for a thread message. */
export type MessageStatus = "in_progress" | "incomplete" | "completed";

/** Information providing additional detail about a message entering an incomplete status. */
export interface MessageIncompleteDetails {
  /** The provided reason describing why the message was marked as incomplete. */
  reason: MessageIncompleteDetailsReason;
}

export function messageIncompleteDetailsSerializer(
  item: MessageIncompleteDetails,
): any {
  return { reason: item["reason"] };
}

export function messageIncompleteDetailsDeserializer(
  item: any,
): MessageIncompleteDetails {
  return {
    reason: item["reason"],
  };
}

/** A set of reasons describing why a message is marked as incomplete. */
export type MessageIncompleteDetailsReason =
  | "content_filter"
  | "max_tokens"
  | "run_cancelled"
  | "run_failed"
  | "run_expired";

export function messageContentUnionArraySerializer(
  result: Array<MessageContentUnion>,
): any[] {
  return result.map((item) => {
    return messageContentUnionSerializer(item);
  });
}

export function messageContentUnionArrayDeserializer(
  result: Array<MessageContentUnion>,
): any[] {
  return result.map((item) => {
    return messageContentUnionDeserializer(item);
  });
}

/** An abstract representation of a single item of thread message content. */
export interface MessageContent {
  /** The object type. */
  /** The discriminator possible values: text, image_file */
  type: string;
}

export function messageContentSerializer(item: MessageContent): any {
  return { type: item["type"] };
}

export function messageContentDeserializer(item: any): MessageContent {
  return {
    type: item["type"],
  };
}

/** Alias for MessageContentUnion */
export type MessageContentUnion =
  | MessageTextContent
  | MessageImageFileContent
  | MessageContent;

export function messageContentUnionSerializer(item: MessageContentUnion): any {
  switch (item.type) {
    case "text":
      return messageTextContentSerializer(item as MessageTextContent);

    case "image_file":
      return messageImageFileContentSerializer(item as MessageImageFileContent);

    default:
      return messageContentSerializer(item);
  }
}

export function messageContentUnionDeserializer(
  item: any,
): MessageContentUnion {
  switch (item.type) {
    case "text":
      return messageTextContentDeserializer(item as MessageTextContent);

    case "image_file":
      return messageImageFileContentDeserializer(
        item as MessageImageFileContent,
      );

    default:
      return messageContentDeserializer(item);
  }
}

/** A representation of a textual item of thread message content. */
export interface MessageTextContent extends MessageContent {
  /** The object type, which is always 'text'. */
  type: "text";
  /** The text and associated annotations for this thread message content item. */
  text: MessageTextDetails;
}

export function messageTextContentSerializer(item: MessageTextContent): any {
  return {
    type: item["type"],
    text: messageTextDetailsSerializer(item["text"]),
  };
}

export function messageTextContentDeserializer(item: any): MessageTextContent {
  return {
    type: item["type"],
    text: messageTextDetailsDeserializer(item["text"]),
  };
}

/** The text and associated annotations for a single item of agent thread message content. */
export interface MessageTextDetails {
  /** The text data. */
  value: string;
  /** A list of annotations associated with this text. */
  annotations: MessageTextAnnotationUnion[];
}

export function messageTextDetailsSerializer(item: MessageTextDetails): any {
  return {
    value: item["value"],
    annotations: messageTextAnnotationUnionArraySerializer(item["annotations"]),
  };
}

export function messageTextDetailsDeserializer(item: any): MessageTextDetails {
  return {
    value: item["value"],
    annotations: messageTextAnnotationUnionArrayDeserializer(
      item["annotations"],
    ),
  };
}

export function messageTextAnnotationUnionArraySerializer(
  result: Array<MessageTextAnnotationUnion>,
): any[] {
  return result.map((item) => {
    return messageTextAnnotationUnionSerializer(item);
  });
}

export function messageTextAnnotationUnionArrayDeserializer(
  result: Array<MessageTextAnnotationUnion>,
): any[] {
  return result.map((item) => {
    return messageTextAnnotationUnionDeserializer(item);
  });
}

/** An abstract representation of an annotation to text thread message content. */
export interface MessageTextAnnotation {
  /** The object type. */
  /** The discriminator possible values: file_citation, file_path */
  type: string;
  /** The textual content associated with this text annotation item. */
  text: string;
}

export function messageTextAnnotationSerializer(
  item: MessageTextAnnotation,
): any {
  return { type: item["type"], text: item["text"] };
}

export function messageTextAnnotationDeserializer(
  item: any,
): MessageTextAnnotation {
  return {
    type: item["type"],
    text: item["text"],
  };
}

/** Alias for MessageTextAnnotationUnion */
export type MessageTextAnnotationUnion =
  | MessageTextFileCitationAnnotation
  | MessageTextFilePathAnnotation
  | MessageTextAnnotation;

export function messageTextAnnotationUnionSerializer(
  item: MessageTextAnnotationUnion,
): any {
  switch (item.type) {
    case "file_citation":
      return messageTextFileCitationAnnotationSerializer(
        item as MessageTextFileCitationAnnotation,
      );

    case "file_path":
      return messageTextFilePathAnnotationSerializer(
        item as MessageTextFilePathAnnotation,
      );

    default:
      return messageTextAnnotationSerializer(item);
  }
}

export function messageTextAnnotationUnionDeserializer(
  item: any,
): MessageTextAnnotationUnion {
  switch (item.type) {
    case "file_citation":
      return messageTextFileCitationAnnotationDeserializer(
        item as MessageTextFileCitationAnnotation,
      );

    case "file_path":
      return messageTextFilePathAnnotationDeserializer(
        item as MessageTextFilePathAnnotation,
      );

    default:
      return messageTextAnnotationDeserializer(item);
  }
}

/** A citation within the message that points to a specific quote from a specific File associated with the agent or the message. Generated when the agent uses the 'file_search' tool to search files. */
export interface MessageTextFileCitationAnnotation
  extends MessageTextAnnotation {
  /** The object type, which is always 'file_citation'. */
  type: "file_citation";
  /**
   * A citation within the message that points to a specific quote from a specific file.
   * Generated when the agent uses the "file_search" tool to search files.
   */
  fileCitation: MessageTextFileCitationDetails;
  /** The first text index associated with this text annotation. */
  startIndex?: number;
  /** The last text index associated with this text annotation. */
  endIndex?: number;
}

export function messageTextFileCitationAnnotationSerializer(
  item: MessageTextFileCitationAnnotation,
): any {
  return {
    type: item["type"],
    text: item["text"],
    file_citation: messageTextFileCitationDetailsSerializer(
      item["fileCitation"],
    ),
    start_index: item["startIndex"],
    end_index: item["endIndex"],
  };
}

export function messageTextFileCitationAnnotationDeserializer(
  item: any,
): MessageTextFileCitationAnnotation {
  return {
    type: item["type"],
    text: item["text"],
    fileCitation: messageTextFileCitationDetailsDeserializer(
      item["file_citation"],
    ),
    startIndex: item["start_index"],
    endIndex: item["end_index"],
  };
}

/** A representation of a file-based text citation, as used in a file-based annotation of text thread message content. */
export interface MessageTextFileCitationDetails {
  /** The ID of the file associated with this citation. */
  fileId: string;
  /** The specific quote cited in the associated file. */
  quote: string;
}

export function messageTextFileCitationDetailsSerializer(
  item: MessageTextFileCitationDetails,
): any {
  return { file_id: item["fileId"], quote: item["quote"] };
}

export function messageTextFileCitationDetailsDeserializer(
  item: any,
): MessageTextFileCitationDetails {
  return {
    fileId: item["file_id"],
    quote: item["quote"],
  };
}

/** A citation within the message that points to a file located at a specific path. */
export interface MessageTextFilePathAnnotation extends MessageTextAnnotation {
  /** The object type, which is always 'file_path'. */
  type: "file_path";
  /** A URL for the file that's generated when the agent used the code_interpreter tool to generate a file. */
  filePath: MessageTextFilePathDetails;
  /** The first text index associated with this text annotation. */
  startIndex?: number;
  /** The last text index associated with this text annotation. */
  endIndex?: number;
}

export function messageTextFilePathAnnotationSerializer(
  item: MessageTextFilePathAnnotation,
): any {
  return {
    type: item["type"],
    text: item["text"],
    file_path: messageTextFilePathDetailsSerializer(item["filePath"]),
    start_index: item["startIndex"],
    end_index: item["endIndex"],
  };
}

export function messageTextFilePathAnnotationDeserializer(
  item: any,
): MessageTextFilePathAnnotation {
  return {
    type: item["type"],
    text: item["text"],
    filePath: messageTextFilePathDetailsDeserializer(item["file_path"]),
    startIndex: item["start_index"],
    endIndex: item["end_index"],
  };
}

/** An encapsulation of an image file ID, as used by message image content. */
export interface MessageTextFilePathDetails {
  /** The ID of the specific file that the citation is from. */
  fileId: string;
}

export function messageTextFilePathDetailsSerializer(
  item: MessageTextFilePathDetails,
): any {
  return { file_id: item["fileId"] };
}

export function messageTextFilePathDetailsDeserializer(
  item: any,
): MessageTextFilePathDetails {
  return {
    fileId: item["file_id"],
  };
}

/** A representation of image file content in a thread message. */
export interface MessageImageFileContent extends MessageContent {
  /** The object type, which is always 'image_file'. */
  type: "image_file";
  /** The image file for this thread message content item. */
  imageFile: MessageImageFileDetails;
}

export function messageImageFileContentSerializer(
  item: MessageImageFileContent,
): any {
  return {
    type: item["type"],
    image_file: messageImageFileDetailsSerializer(item["imageFile"]),
  };
}

export function messageImageFileContentDeserializer(
  item: any,
): MessageImageFileContent {
  return {
    type: item["type"],
    imageFile: messageImageFileDetailsDeserializer(item["image_file"]),
  };
}

/** An image reference, as represented in thread message content. */
export interface MessageImageFileDetails {
  /** The ID for the file associated with this image. */
  fileId: string;
}

export function messageImageFileDetailsSerializer(
  item: MessageImageFileDetails,
): any {
  return { file_id: item["fileId"] };
}

export function messageImageFileDetailsDeserializer(
  item: any,
): MessageImageFileDetails {
  return {
    fileId: item["file_id"],
  };
}

/** The response data for a requested list of items. */
export interface OpenAIPageableListOfThreadMessage {
  /** The object type, which is always list. */
  object: "list";
  /** The requested list of items. */
  data: ThreadMessage[];
  /** The first ID represented in this list. */
  firstId: string;
  /** The last ID represented in this list. */
  lastId: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  hasMore: boolean;
}

export function openAIPageableListOfThreadMessageDeserializer(
  item: any,
): OpenAIPageableListOfThreadMessage {
  return {
    object: item["object"],
    data: threadMessageArrayDeserializer(item["data"]),
    firstId: item["first_id"],
    lastId: item["last_id"],
    hasMore: item["has_more"],
  };
}

export function threadMessageArraySerializer(
  result: Array<ThreadMessage>,
): any[] {
  return result.map((item) => {
    return threadMessageSerializer(item);
  });
}

export function threadMessageArrayDeserializer(
  result: Array<ThreadMessage>,
): any[] {
  return result.map((item) => {
    return threadMessageDeserializer(item);
  });
}

/**
 * Controls for how a thread will be truncated prior to the run. Use this to control the initial
 * context window of the run.
 */
export interface TruncationObject {
  /**
   * The truncation strategy to use for the thread. The default is `auto`. If set to `last_messages`, the thread will
   * be truncated to the `lastMessages` count most recent messages in the thread. When set to `auto`, messages in the middle of the thread
   * will be dropped to fit the context length of the model, `max_prompt_tokens`.
   */
  type: TruncationStrategy;
  /** The number of most recent messages from the thread when constructing the context for the run. */
  lastMessages?: number | null;
}

export function truncationObjectSerializer(item: TruncationObject): any {
  return { type: item["type"], last_messages: item["lastMessages"] };
}

export function truncationObjectDeserializer(item: any): TruncationObject {
  return {
    type: item["type"],
    lastMessages: item["last_messages"],
  };
}

/** Possible truncation strategies for the thread. */
export type TruncationStrategy = "auto" | "last_messages";

/** Specifies a tool the model should use. Use to force the model to call a specific tool. */
export interface AgentsNamedToolChoice {
  /** the type of tool. If type is `function`, the function name must be set. */
  type: AgentsNamedToolChoiceType;
  /** The name of the function to call */
  function?: FunctionName;
}

export function agentsNamedToolChoiceSerializer(
  item: AgentsNamedToolChoice,
): any {
  return {
    type: item["type"],
    function: !item["function"]
      ? item["function"]
      : functionNameSerializer(item["function"]),
  };
}

export function agentsNamedToolChoiceDeserializer(
  item: any,
): AgentsNamedToolChoice {
  return {
    type: item["type"],
    function: !item["function"]
      ? item["function"]
      : functionNameDeserializer(item["function"]),
  };
}

/** Available tool types for agents named tools. */
export type AgentsNamedToolChoiceType =
  | "function"
  | "code_interpreter"
  | "file_search"
  | "bing_grounding"
  | "microsoft_fabric"
  | "sharepoint"
  | "azure_ai_search";

/** The function name that will be used, if using the `function` tool */
export interface FunctionName {
  /** The name of the function to call */
  name: string;
}

export function functionNameSerializer(item: FunctionName): any {
  return { name: item["name"] };
}

export function functionNameDeserializer(item: any): FunctionName {
  return {
    name: item["name"],
  };
}

/** Alias for AgentsApiToolChoiceOption */
export type AgentsApiToolChoiceOption =
  | string
  | AgentsApiToolChoiceOptionMode
  | AgentsNamedToolChoice;

export function agentsApiToolChoiceOptionSerializer(
  item: AgentsApiToolChoiceOption,
): any {
  return item;
}

export function agentsApiToolChoiceOptionDeserializer(
  item: any,
): AgentsApiToolChoiceOption {
  return item;
}

/** Specifies how the tool choice will be used */
export type AgentsApiToolChoiceOptionMode = "none" | "auto";

/** Data representing a single evaluation run of an agent thread. */
export interface ThreadRun {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always 'thread.run'. */
  object: "thread.run";
  /** The ID of the thread associated with this run. */
  threadId: string;
  /** The ID of the agent associated with the thread this run was performed against. */
  assistantId: string;
  /** The status of the agent thread run. */
  status: RunStatus;
  /** The details of the action required for the agent thread run to continue. */
  requiredAction?: RequiredActionUnion | null;
  /** The last error, if any, encountered by this agent thread run. */
  lastError: RunError | null;
  /** The ID of the model to use. */
  model: string;
  /** The overridden system instructions used for this agent thread run. */
  instructions: string;
  /** The overridden enabled tools used for this agent thread run. */
  tools: ToolDefinitionUnion[];
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /** The Unix timestamp, in seconds, representing when this item expires. */
  expiresAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this item was started. */
  startedAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this completed. */
  completedAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this was cancelled. */
  cancelledAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this failed. */
  failedAt: Date | null;
  /** Details on why the run is incomplete. Will be `null` if the run is not incomplete. */
  incompleteDetails: IncompleteRunDetails | null;
  /** Usage statistics related to the run. This value will be `null` if the run is not in a terminal state (i.e. `in_progress`, `queued`, etc.). */
  usage: RunCompletionUsage | null;
  /** The sampling temperature used for this run. If not set, defaults to 1. */
  temperature?: number | null;
  /** The nucleus sampling value used for this run. If not set, defaults to 1. */
  topP?: number | null;
  /** The maximum number of prompt tokens specified to have been used over the course of the run. */
  maxPromptTokens: number | null;
  /** The maximum number of completion tokens specified to have been used over the course of the run. */
  maxCompletionTokens: number | null;
  /** The strategy to use for dropping messages as the context windows moves forward. */
  truncationStrategy: TruncationObject | null;
  /** Controls whether or not and which tool is called by the model. */
  toolChoice: AgentsApiToolChoiceOption | null;
  /** The response format of the tool calls used in this run. */
  responseFormat: AgentsApiResponseFormatOption | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata: Record<string, string> | null;
  /** Override the tools the agent can use for this run. This is useful for modifying the behavior on a per-run basis */
  toolResources?: UpdateToolResourcesOptions | null;
  /** Determines if tools can be executed in parallel within the run. */
  parallelToolCalls?: boolean;
}

export function threadRunDeserializer(item: any): ThreadRun {
  return {
    id: item["id"],
    object: item["object"],
    threadId: item["thread_id"],
    assistantId: item["assistant_id"],
    status: item["status"],
    requiredAction: item["required_action"],
    lastError: item["last_error"],
    model: item["model"],
    instructions: item["instructions"],
    tools: toolDefinitionUnionArrayDeserializer(item["tools"]),
    createdAt: new Date(item["created_at"] * 1000),
    expiresAt: !item["expires_at"]
      ? item["expires_at"]
      : !item["expires_at"]
        ? item["expires_at"]
        : new Date(item["expires_at"] * 1000),
    startedAt: !item["started_at"]
      ? item["started_at"]
      : !item["started_at"]
        ? item["started_at"]
        : new Date(item["started_at"] * 1000),
    completedAt: !item["completed_at"]
      ? item["completed_at"]
      : !item["completed_at"]
        ? item["completed_at"]
        : new Date(item["completed_at"] * 1000),
    cancelledAt: !item["cancelled_at"]
      ? item["cancelled_at"]
      : !item["cancelled_at"]
        ? item["cancelled_at"]
        : new Date(item["cancelled_at"] * 1000),
    failedAt: !item["failed_at"]
      ? item["failed_at"]
      : !item["failed_at"]
        ? item["failed_at"]
        : new Date(item["failed_at"] * 1000),
    incompleteDetails: item["incomplete_details"],
    usage: item["usage"],
    temperature: item["temperature"],
    topP: item["top_p"],
    maxPromptTokens: item["max_prompt_tokens"],
    maxCompletionTokens: item["max_completion_tokens"],
    truncationStrategy: item["truncation_strategy"],
    toolChoice: !item["tool_choice"]
      ? item["tool_choice"]
      : (item["tool_choice"] as any),
    responseFormat: !item["response_format"]
      ? item["response_format"]
      : (item["response_format"] as any),
    metadata: item["metadata"],
    toolResources: item["tool_resources"],
    parallelToolCalls: item["parallelToolCalls"],
  };
}

/** Possible values for the status of an agent thread run. */
export type RunStatus =
  | "queued"
  | "in_progress"
  | "requires_action"
  | "cancelling"
  | "cancelled"
  | "failed"
  | "completed"
  | "expired";

/** An abstract representation of a required action for an agent thread run to continue. */
export interface RequiredAction {
  /** The object type. */
  /** The discriminator possible values: submit_tool_outputs */
  type: string;
}

export function requiredActionDeserializer(item: any): RequiredAction {
  return {
    type: item["type"],
  };
}

/** Alias for RequiredActionUnion */
export type RequiredActionUnion = SubmitToolOutputsAction | RequiredAction;

export function requiredActionUnionDeserializer(
  item: any,
): RequiredActionUnion {
  switch (item.type) {
    case "submit_tool_outputs":
      return submitToolOutputsActionDeserializer(
        item as SubmitToolOutputsAction,
      );

    default:
      return requiredActionDeserializer(item);
  }
}

/** The details for required tool calls that must be submitted for an agent thread run to continue. */
export interface SubmitToolOutputsAction extends RequiredAction {
  /** The object type, which is always 'submit_tool_outputs'. */
  type: "submit_tool_outputs";
  /** The details describing tools that should be called to submit tool outputs. */
  submitToolOutputs: SubmitToolOutputsDetails;
}

export function submitToolOutputsActionDeserializer(
  item: any,
): SubmitToolOutputsAction {
  return {
    type: item["type"],
    submitToolOutputs: submitToolOutputsDetailsDeserializer(
      item["submit_tool_outputs"],
    ),
  };
}

/** The details describing tools that should be called to submit tool outputs. */
export interface SubmitToolOutputsDetails {
  /** The list of tool calls that must be resolved for the agent thread run to continue. */
  toolCalls: RequiredToolCallUnion[];
}

export function submitToolOutputsDetailsDeserializer(
  item: any,
): SubmitToolOutputsDetails {
  return {
    toolCalls: requiredToolCallUnionArrayDeserializer(item["tool_calls"]),
  };
}

export function requiredToolCallUnionArrayDeserializer(
  result: Array<RequiredToolCallUnion>,
): any[] {
  return result.map((item) => {
    return requiredToolCallUnionDeserializer(item);
  });
}

/** An abstract representation a a tool invocation needed by the model to continue a run. */
export interface RequiredToolCall {
  /** The object type for the required tool call. */
  /** The discriminator possible values: function */
  type: string;
  /** The ID of the tool call. This ID must be referenced when submitting tool outputs. */
  id: string;
}

export function requiredToolCallDeserializer(item: any): RequiredToolCall {
  return {
    type: item["type"],
    id: item["id"],
  };
}

/** Alias for RequiredToolCallUnion */
export type RequiredToolCallUnion = RequiredFunctionToolCall | RequiredToolCall;

export function requiredToolCallUnionDeserializer(
  item: any,
): RequiredToolCallUnion {
  switch (item.type) {
    case "function":
      return requiredFunctionToolCallDeserializer(
        item as RequiredFunctionToolCall,
      );

    default:
      return requiredToolCallDeserializer(item);
  }
}

/** A representation of a requested call to a function tool, needed by the model to continue evaluation of a run. */
export interface RequiredFunctionToolCall extends RequiredToolCall {
  /** The object type of the required tool call. Always 'function' for function tools. */
  type: "function";
  /** Detailed information about the function to be executed by the tool that includes name and arguments. */
  function: RequiredFunctionToolCallDetails;
}

export function requiredFunctionToolCallDeserializer(
  item: any,
): RequiredFunctionToolCall {
  return {
    type: item["type"],
    id: item["id"],
    function: requiredFunctionToolCallDetailsDeserializer(item["function"]),
  };
}

/** The detailed information for a function invocation, as provided by a required action invoking a function tool, that includes the name of and arguments to the function. */
export interface RequiredFunctionToolCallDetails {
  /** The name of the function. */
  name: string;
  /** The arguments to use when invoking the named function, as provided by the model. Arguments are presented as a JSON document that should be validated and parsed for evaluation. */
  arguments: string;
}

export function requiredFunctionToolCallDetailsDeserializer(
  item: any,
): RequiredFunctionToolCallDetails {
  return {
    name: item["name"],
    arguments: item["arguments"],
  };
}

/** The details of an error as encountered by an agent thread run. */
export interface RunError {
  /** The status for the error. */
  code: string;
  /** The human-readable text associated with the error. */
  message: string;
}

export function runErrorDeserializer(item: any): RunError {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/** The reason why the run is incomplete. This will point to which specific token limit was reached over the course of the run. */
export type IncompleteRunDetails =
  | "max_completion_tokens"
  | "max_prompt_tokens";

/** Usage statistics related to the run. This value will be `null` if the run is not in a terminal state (i.e. `in_progress`, `queued`, etc.). */
export interface RunCompletionUsage {
  /** Number of completion tokens used over the course of the run. */
  completionTokens: number;
  /** Number of prompt tokens used over the course of the run. */
  promptTokens: number;
  /** Total number of tokens used (prompt + completion). */
  totalTokens: number;
}

export function runCompletionUsageDeserializer(item: any): RunCompletionUsage {
  return {
    completionTokens: item["completion_tokens"],
    promptTokens: item["prompt_tokens"],
    totalTokens: item["total_tokens"],
  };
}

/**
 * Request object. A set of resources that are used by the agent's tools. The resources are specific to the type of tool.
 * For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of
 * vector store IDs.
 */
export interface UpdateToolResourcesOptions {
  /**
   * Overrides the list of file IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files
   * associated with the tool.
   */
  codeInterpreter?: UpdateCodeInterpreterToolResourceOptions;
  /** Overrides the vector store attached to this agent. There can be a maximum of 1 vector store attached to the agent. */
  fileSearch?: UpdateFileSearchToolResourceOptions;
  /** Overrides the list of connections to be used by the `bing_grounding` tool consisting of connection IDs. */
  bingGrounding?: ConnectionListResource;
  /** Overrides the list of connections to be used by the `microsoft_fabric` tool consisting of connection IDs. */
  microsoftFabric?: ConnectionListResource;
  /** Overrides the list of connections to be used by the `sharepoint` tool consisting of connection IDs. */
  sharePoint?: ConnectionListResource;
  /** Overrides the resources to be used by the `azure_ai_search` tool consisting of index IDs and names. */
  azureAISearch?: AzureAISearchResource;
}

export function updateToolResourcesOptionsSerializer(
  item: UpdateToolResourcesOptions,
): any {
  return {
    code_interpreter: !item["codeInterpreter"]
      ? item["codeInterpreter"]
      : updateCodeInterpreterToolResourceOptionsSerializer(
          item["codeInterpreter"],
        ),
    file_search: !item["fileSearch"]
      ? item["fileSearch"]
      : updateFileSearchToolResourceOptionsSerializer(item["fileSearch"]),
    bing_grounding: !item["bingGrounding"]
      ? item["bingGrounding"]
      : connectionListResourceSerializer(item["bingGrounding"]),
    microsoft_fabric: !item["microsoftFabric"]
      ? item["microsoftFabric"]
      : connectionListResourceSerializer(item["microsoftFabric"]),
    sharepoint: !item["sharePoint"]
      ? item["sharePoint"]
      : connectionListResourceSerializer(item["sharePoint"]),
    azure_ai_search: !item["azureAISearch"]
      ? item["azureAISearch"]
      : azureAISearchResourceSerializer(item["azureAISearch"]),
  };
}

export function updateToolResourcesOptionsDeserializer(
  item: any,
): UpdateToolResourcesOptions {
  return {
    codeInterpreter: !item["code_interpreter"]
      ? item["code_interpreter"]
      : updateCodeInterpreterToolResourceOptionsDeserializer(
          item["code_interpreter"],
        ),
    fileSearch: !item["file_search"]
      ? item["file_search"]
      : updateFileSearchToolResourceOptionsDeserializer(item["file_search"]),
    bingGrounding: !item["bing_grounding"]
      ? item["bing_grounding"]
      : connectionListResourceDeserializer(item["bing_grounding"]),
    microsoftFabric: !item["microsoft_fabric"]
      ? item["microsoft_fabric"]
      : connectionListResourceDeserializer(item["microsoft_fabric"]),
    sharePoint: !item["sharepoint"]
      ? item["sharepoint"]
      : connectionListResourceDeserializer(item["sharepoint"]),
    azureAISearch: !item["azure_ai_search"]
      ? item["azure_ai_search"]
      : azureAISearchResourceDeserializer(item["azure_ai_search"]),
  };
}

/** Request object to update `code_interpreted` tool resources. */
export interface UpdateCodeInterpreterToolResourceOptions {
  /** A list of file IDs to override the current list of the agent. */
  fileIds?: string[];
}

export function updateCodeInterpreterToolResourceOptionsSerializer(
  item: UpdateCodeInterpreterToolResourceOptions,
): any {
  return {
    file_ids: !item["fileIds"]
      ? item["fileIds"]
      : item["fileIds"].map((p: any) => {
          return p;
        }),
  };
}

export function updateCodeInterpreterToolResourceOptionsDeserializer(
  item: any,
): UpdateCodeInterpreterToolResourceOptions {
  return {
    fileIds: !item["file_ids"]
      ? item["file_ids"]
      : item["file_ids"].map((p: any) => {
          return p;
        }),
  };
}

/** Request object to update `file_search` tool resources. */
export interface UpdateFileSearchToolResourceOptions {
  /** A list of vector store IDs to override the current list of the agent. */
  vectorStoreIds?: string[];
}

export function updateFileSearchToolResourceOptionsSerializer(
  item: UpdateFileSearchToolResourceOptions,
): any {
  return {
    vector_store_ids: !item["vectorStoreIds"]
      ? item["vectorStoreIds"]
      : item["vectorStoreIds"].map((p: any) => {
          return p;
        }),
  };
}

export function updateFileSearchToolResourceOptionsDeserializer(
  item: any,
): UpdateFileSearchToolResourceOptions {
  return {
    vectorStoreIds: !item["vector_store_ids"]
      ? item["vector_store_ids"]
      : item["vector_store_ids"].map((p: any) => {
          return p;
        }),
  };
}

/** The response data for a requested list of items. */
export interface OpenAIPageableListOfThreadRun {
  /** The object type, which is always list. */
  object: "list";
  /** The requested list of items. */
  data: ThreadRun[];
  /** The first ID represented in this list. */
  firstId: string;
  /** The last ID represented in this list. */
  lastId: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  hasMore: boolean;
}

export function openAIPageableListOfThreadRunDeserializer(
  item: any,
): OpenAIPageableListOfThreadRun {
  return {
    object: item["object"],
    data: threadRunArrayDeserializer(item["data"]),
    firstId: item["first_id"],
    lastId: item["last_id"],
    hasMore: item["has_more"],
  };
}

export function threadRunArrayDeserializer(result: Array<ThreadRun>): any[] {
  return result.map((item) => {
    return threadRunDeserializer(item);
  });
}

/** The data provided during a tool outputs submission to resolve pending tool calls and allow the model to continue. */
export interface ToolOutput {
  /** The ID of the tool call being resolved, as provided in the tool calls of a required action from a run. */
  toolCallId?: string;
  /** The output from the tool to be submitted. */
  output?: string;
}

export function toolOutputSerializer(item: ToolOutput): any {
  return { tool_call_id: item["toolCallId"], output: item["output"] };
}

export function toolOutputArraySerializer(result: Array<ToolOutput>): any[] {
  return result.map((item) => {
    return toolOutputSerializer(item);
  });
}

/** The details used to create a new agent thread. */
export interface AgentThreadCreationOptions {
  /** The initial messages to associate with the new thread. */
  messages?: ThreadMessageOptions[];
  /**
   * A set of resources that are made available to the agent's tools in this thread. The resources are specific to the
   * type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires
   * a list of vector store IDs.
   */
  toolResources?: ToolResources | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

export function agentThreadCreationOptionsSerializer(
  item: AgentThreadCreationOptions,
): any {
  return {
    messages: !item["messages"]
      ? item["messages"]
      : threadMessageOptionsArraySerializer(item["messages"]),
    tool_resources: item["toolResources"],
    metadata: item["metadata"],
  };
}

/** Detailed information about a single step of an agent thread run. */
export interface RunStep {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always 'thread.run.step'. */
  object: "thread.run.step";
  /** The type of run step, which can be either message_creation or tool_calls. */
  type: RunStepType;
  /** The ID of the agent associated with the run step. */
  assistantId: string;
  /** The ID of the thread that was run. */
  threadId: string;
  /** The ID of the run that this run step is a part of. */
  runId: string;
  /** The status of this run step. */
  status: RunStepStatus;
  /** The details for this run step. */
  stepDetails: RunStepDetailsUnion;
  /** If applicable, information about the last error encountered by this run step. */
  lastError: RunStepError | null;
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /** The Unix timestamp, in seconds, representing when this item expired. */
  expiredAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this completed. */
  completedAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this was cancelled. */
  cancelledAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this failed. */
  failedAt: Date | null;
  /** Usage statistics related to the run step. This value will be `null` while the run step's status is `in_progress`. */
  usage?: RunStepCompletionUsage | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata: Record<string, string> | null;
}

export function runStepDeserializer(item: any): RunStep {
  return {
    id: item["id"],
    object: item["object"],
    type: item["type"],
    assistantId: item["assistant_id"],
    threadId: item["thread_id"],
    runId: item["run_id"],
    status: item["status"],
    stepDetails: runStepDetailsUnionDeserializer(item["step_details"]),
    lastError: item["last_error"],
    createdAt: new Date(item["created_at"] * 1000),
    expiredAt: !item["expired_at"]
      ? item["expired_at"]
      : !item["expired_at"]
        ? item["expired_at"]
        : new Date(item["expired_at"] * 1000),
    completedAt: !item["completed_at"]
      ? item["completed_at"]
      : !item["completed_at"]
        ? item["completed_at"]
        : new Date(item["completed_at"] * 1000),
    cancelledAt: !item["cancelled_at"]
      ? item["cancelled_at"]
      : !item["cancelled_at"]
        ? item["cancelled_at"]
        : new Date(item["cancelled_at"] * 1000),
    failedAt: !item["failed_at"]
      ? item["failed_at"]
      : !item["failed_at"]
        ? item["failed_at"]
        : new Date(item["failed_at"] * 1000),
    usage: item["usage"],
    metadata: item["metadata"],
  };
}

/** The possible types of run steps. */
export type RunStepType = "message_creation" | "tool_calls";
/** Possible values for the status of a run step. */
export type RunStepStatus =
  | "in_progress"
  | "cancelled"
  | "failed"
  | "completed"
  | "expired";

/** An abstract representation of the details for a run step. */
export interface RunStepDetails {
  /** The object type. */
  /** The discriminator possible values: message_creation, tool_calls */
  type: RunStepType;
}

export function runStepDetailsDeserializer(item: any): RunStepDetails {
  return {
    type: item["type"],
  };
}

/** Alias for RunStepDetailsUnion */
export type RunStepDetailsUnion =
  | RunStepMessageCreationDetails
  | RunStepToolCallDetails
  | RunStepDetails;

export function runStepDetailsUnionDeserializer(
  item: any,
): RunStepDetailsUnion {
  switch (item.type) {
    case "message_creation":
      return runStepMessageCreationDetailsDeserializer(
        item as RunStepMessageCreationDetails,
      );

    case "tool_calls":
      return runStepToolCallDetailsDeserializer(item as RunStepToolCallDetails);

    default:
      return runStepDetailsDeserializer(item);
  }
}

/** The detailed information associated with a message creation run step. */
export interface RunStepMessageCreationDetails extends RunStepDetails {
  /** The object type, which is always 'message_creation'. */
  type: "message_creation";
  /** Information about the message creation associated with this run step. */
  messageCreation: RunStepMessageCreationReference;
}

export function runStepMessageCreationDetailsDeserializer(
  item: any,
): RunStepMessageCreationDetails {
  return {
    type: item["type"],
    messageCreation: runStepMessageCreationReferenceDeserializer(
      item["message_creation"],
    ),
  };
}

/** The details of a message created as a part of a run step. */
export interface RunStepMessageCreationReference {
  /** The ID of the message created by this run step. */
  messageId: string;
}

export function runStepMessageCreationReferenceDeserializer(
  item: any,
): RunStepMessageCreationReference {
  return {
    messageId: item["message_id"],
  };
}

/** The detailed information associated with a run step calling tools. */
export interface RunStepToolCallDetails extends RunStepDetails {
  /** The object type, which is always 'tool_calls'. */
  type: "tool_calls";
  /** A list of tool call details for this run step. */
  toolCalls: RunStepToolCallUnion[];
}

export function runStepToolCallDetailsDeserializer(
  item: any,
): RunStepToolCallDetails {
  return {
    type: item["type"],
    toolCalls: runStepToolCallUnionArrayDeserializer(item["tool_calls"]),
  };
}

export function runStepToolCallUnionArrayDeserializer(
  result: Array<RunStepToolCallUnion>,
): any[] {
  return result.map((item) => {
    return runStepToolCallUnionDeserializer(item);
  });
}

/** An abstract representation of a detailed tool call as recorded within a run step for an existing run. */
export interface RunStepToolCall {
  /** The object type. */
  /** The discriminator possible values: code_interpreter, file_search, bing_grounding, azure_ai_search, sharepoint, microsoft_fabric, function */
  type: string;
  /** The ID of the tool call. This ID must be referenced when you submit tool outputs. */
  id: string;
}

export function runStepToolCallDeserializer(item: any): RunStepToolCall {
  return {
    type: item["type"],
    id: item["id"],
  };
}

/** Alias for RunStepToolCallUnion */
export type RunStepToolCallUnion =
  | RunStepCodeInterpreterToolCall
  | RunStepFileSearchToolCall
  | RunStepBingGroundingToolCall
  | RunStepAzureAISearchToolCall
  | RunStepSharepointToolCall
  | RunStepMicrosoftFabricToolCall
  | RunStepFunctionToolCall
  | RunStepToolCall;

export function runStepToolCallUnionDeserializer(
  item: any,
): RunStepToolCallUnion {
  switch (item.type) {
    case "code_interpreter":
      return runStepCodeInterpreterToolCallDeserializer(
        item as RunStepCodeInterpreterToolCall,
      );

    case "file_search":
      return runStepFileSearchToolCallDeserializer(
        item as RunStepFileSearchToolCall,
      );

    case "bing_grounding":
      return runStepBingGroundingToolCallDeserializer(
        item as RunStepBingGroundingToolCall,
      );

    case "azure_ai_search":
      return runStepAzureAISearchToolCallDeserializer(
        item as RunStepAzureAISearchToolCall,
      );

    case "sharepoint":
      return runStepSharepointToolCallDeserializer(
        item as RunStepSharepointToolCall,
      );

    case "microsoft_fabric":
      return runStepMicrosoftFabricToolCallDeserializer(
        item as RunStepMicrosoftFabricToolCall,
      );

    case "function":
      return runStepFunctionToolCallDeserializer(
        item as RunStepFunctionToolCall,
      );

    default:
      return runStepToolCallDeserializer(item);
  }
}

/**
 * A record of a call to a code interpreter tool, issued by the model in evaluation of a defined tool, that
 * represents inputs and outputs consumed and emitted by the code interpreter.
 */
export interface RunStepCodeInterpreterToolCall extends RunStepToolCall {
  /** The object type, which is always 'code_interpreter'. */
  type: "code_interpreter";
  /** The details of the tool call to the code interpreter tool. */
  codeInterpreter: RunStepCodeInterpreterToolCallDetails;
}

export function runStepCodeInterpreterToolCallDeserializer(
  item: any,
): RunStepCodeInterpreterToolCall {
  return {
    type: item["type"],
    id: item["id"],
    codeInterpreter: runStepCodeInterpreterToolCallDetailsDeserializer(
      item["code_interpreter"],
    ),
  };
}

/** The detailed information about a code interpreter invocation by the model. */
export interface RunStepCodeInterpreterToolCallDetails {
  /** The input provided by the model to the code interpreter tool. */
  input: string;
  /** The outputs produced by the code interpreter tool back to the model in response to the tool call. */
  outputs: RunStepCodeInterpreterToolCallOutputUnion[];
}

export function runStepCodeInterpreterToolCallDetailsDeserializer(
  item: any,
): RunStepCodeInterpreterToolCallDetails {
  return {
    input: item["input"],
    outputs: runStepCodeInterpreterToolCallOutputUnionArrayDeserializer(
      item["outputs"],
    ),
  };
}

export function runStepCodeInterpreterToolCallOutputUnionArrayDeserializer(
  result: Array<RunStepCodeInterpreterToolCallOutputUnion>,
): any[] {
  return result.map((item) => {
    return runStepCodeInterpreterToolCallOutputUnionDeserializer(item);
  });
}

/** An abstract representation of an emitted output from a code interpreter tool. */
export interface RunStepCodeInterpreterToolCallOutput {
  /** The object type. */
  /** The discriminator possible values: logs, image */
  type: string;
}

export function runStepCodeInterpreterToolCallOutputDeserializer(
  item: any,
): RunStepCodeInterpreterToolCallOutput {
  return {
    type: item["type"],
  };
}

/** Alias for RunStepCodeInterpreterToolCallOutputUnion */
export type RunStepCodeInterpreterToolCallOutputUnion =
  | RunStepCodeInterpreterLogOutput
  | RunStepCodeInterpreterImageOutput
  | RunStepCodeInterpreterToolCallOutput;

export function runStepCodeInterpreterToolCallOutputUnionDeserializer(
  item: any,
): RunStepCodeInterpreterToolCallOutputUnion {
  switch (item.type) {
    case "logs":
      return runStepCodeInterpreterLogOutputDeserializer(
        item as RunStepCodeInterpreterLogOutput,
      );

    case "image":
      return runStepCodeInterpreterImageOutputDeserializer(
        item as RunStepCodeInterpreterImageOutput,
      );

    default:
      return runStepCodeInterpreterToolCallOutputDeserializer(item);
  }
}

/** A representation of a log output emitted by a code interpreter tool in response to a tool call by the model. */
export interface RunStepCodeInterpreterLogOutput
  extends RunStepCodeInterpreterToolCallOutput {
  /** The object type, which is always 'logs'. */
  type: "logs";
  /** The serialized log output emitted by the code interpreter. */
  logs: string;
}

export function runStepCodeInterpreterLogOutputDeserializer(
  item: any,
): RunStepCodeInterpreterLogOutput {
  return {
    type: item["type"],
    logs: item["logs"],
  };
}

/** A representation of an image output emitted by a code interpreter tool in response to a tool call by the model. */
export interface RunStepCodeInterpreterImageOutput
  extends RunStepCodeInterpreterToolCallOutput {
  /** The object type, which is always 'image'. */
  type: "image";
  /** Referential information for the image associated with this output. */
  image: RunStepCodeInterpreterImageReference;
}

export function runStepCodeInterpreterImageOutputDeserializer(
  item: any,
): RunStepCodeInterpreterImageOutput {
  return {
    type: item["type"],
    image: runStepCodeInterpreterImageReferenceDeserializer(item["image"]),
  };
}

/** An image reference emitted by a code interpreter tool in response to a tool call by the model. */
export interface RunStepCodeInterpreterImageReference {
  /** The ID of the file associated with this image. */
  fileId: string;
}

export function runStepCodeInterpreterImageReferenceDeserializer(
  item: any,
): RunStepCodeInterpreterImageReference {
  return {
    fileId: item["file_id"],
  };
}

/**
 * A record of a call to a file search tool, issued by the model in evaluation of a defined tool, that represents
 * executed file search.
 */
export interface RunStepFileSearchToolCall extends RunStepToolCall {
  /** The object type, which is always 'file_search'. */
  type: "file_search";
  /** Reserved for future use. */
  fileSearch: Record<string, string>;
}

export function runStepFileSearchToolCallDeserializer(
  item: any,
): RunStepFileSearchToolCall {
  return {
    type: item["type"],
    id: item["id"],
    fileSearch: item["file_search"],
  };
}

/**
 * A record of a call to a bing grounding tool, issued by the model in evaluation of a defined tool, that represents
 * executed search with bing grounding.
 */
export interface RunStepBingGroundingToolCall extends RunStepToolCall {
  /** The object type, which is always 'bing_grounding'. */
  type: "bing_grounding";
  /** Reserved for future use. */
  bingGrounding: Record<string, string>;
}

export function runStepBingGroundingToolCallDeserializer(
  item: any,
): RunStepBingGroundingToolCall {
  return {
    type: item["type"],
    id: item["id"],
    bingGrounding: item["bing_grounding"],
  };
}

/**
 * A record of a call to an Azure AI Search tool, issued by the model in evaluation of a defined tool, that represents
 * executed Azure AI search.
 */
export interface RunStepAzureAISearchToolCall extends RunStepToolCall {
  /** The object type, which is always 'azure_ai_search'. */
  type: "azure_ai_search";
  /** Reserved for future use. */
  azureAISearch: Record<string, string>;
}

export function runStepAzureAISearchToolCallDeserializer(
  item: any,
): RunStepAzureAISearchToolCall {
  return {
    type: item["type"],
    id: item["id"],
    azureAISearch: item["azure_ai_search"],
  };
}

/**
 * A record of a call to a SharePoint tool, issued by the model in evaluation of a defined tool, that represents
 * executed SharePoint actions.
 */
export interface RunStepSharepointToolCall extends RunStepToolCall {
  /** The object type, which is always 'sharepoint'. */
  type: "sharepoint";
  /** Reserved for future use. */
  sharePoint: Record<string, string>;
}

export function runStepSharepointToolCallDeserializer(
  item: any,
): RunStepSharepointToolCall {
  return {
    type: item["type"],
    id: item["id"],
    sharePoint: item["sharepoint"],
  };
}

/**
 * A record of a call to a Microsoft Fabric tool, issued by the model in evaluation of a defined tool, that represents
 * executed Microsoft Fabric operations.
 */
export interface RunStepMicrosoftFabricToolCall extends RunStepToolCall {
  /** The object type, which is always 'microsoft_fabric'. */
  type: "microsoft_fabric";
  /** Reserved for future use. */
  microsoftFabric: Record<string, string>;
}

export function runStepMicrosoftFabricToolCallDeserializer(
  item: any,
): RunStepMicrosoftFabricToolCall {
  return {
    type: item["type"],
    id: item["id"],
    microsoftFabric: item["microsoft_fabric"],
  };
}

/**
 * A record of a call to a function tool, issued by the model in evaluation of a defined tool, that represents the inputs
 * and output consumed and emitted by the specified function.
 */
export interface RunStepFunctionToolCall extends RunStepToolCall {
  /** The object type, which is always 'function'. */
  type: "function";
  /** The detailed information about the function called by the model. */
  function: RunStepFunctionToolCallDetails;
}

export function runStepFunctionToolCallDeserializer(
  item: any,
): RunStepFunctionToolCall {
  return {
    type: item["type"],
    id: item["id"],
    function: runStepFunctionToolCallDetailsDeserializer(item["function"]),
  };
}

/** The detailed information about the function called by the model. */
export interface RunStepFunctionToolCallDetails {
  /** The name of the function. */
  name: string;
  /** The arguments that the model requires are provided to the named function. */
  arguments: string;
  /** The output of the function, only populated for function calls that have already have had their outputs submitted. */
  output: string | null;
}

export function runStepFunctionToolCallDetailsDeserializer(
  item: any,
): RunStepFunctionToolCallDetails {
  return {
    name: item["name"],
    arguments: item["arguments"],
    output: item["output"],
  };
}

/** The error information associated with a failed run step. */
export interface RunStepError {
  /** The error code for this error. */
  code: RunStepErrorCode;
  /** The human-readable text associated with this error. */
  message: string;
}

export function runStepErrorDeserializer(item: any): RunStepError {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/** Possible error code values attributable to a failed run step. */
export type RunStepErrorCode = "server_error" | "rate_limit_exceeded";

/** Usage statistics related to the run step. */
export interface RunStepCompletionUsage {
  /** Number of completion tokens used over the course of the run step. */
  completionTokens: number;
  /** Number of prompt tokens used over the course of the run step. */
  promptTokens: number;
  /** Total number of tokens used (prompt + completion). */
  totalTokens: number;
}

export function runStepCompletionUsageDeserializer(
  item: any,
): RunStepCompletionUsage {
  return {
    completionTokens: item["completion_tokens"],
    promptTokens: item["prompt_tokens"],
    totalTokens: item["total_tokens"],
  };
}

/** The response data for a requested list of items. */
export interface OpenAIPageableListOfRunStep {
  /** The object type, which is always list. */
  object: "list";
  /** The requested list of items. */
  data: RunStep[];
  /** The first ID represented in this list. */
  firstId: string;
  /** The last ID represented in this list. */
  lastId: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  hasMore: boolean;
}

export function openAIPageableListOfRunStepDeserializer(
  item: any,
): OpenAIPageableListOfRunStep {
  return {
    object: item["object"],
    data: runStepArrayDeserializer(item["data"]),
    firstId: item["first_id"],
    lastId: item["last_id"],
    hasMore: item["has_more"],
  };
}

export function runStepArrayDeserializer(result: Array<RunStep>): any[] {
  return result.map((item) => {
    return runStepDeserializer(item);
  });
}

/** The response data from a file list operation. */
export interface FileListResponse {
  /** The object type, which is always 'list'. */
  object: "list";
  /** The files returned for the request. */
  data: OpenAIFile[];
}

export function fileListResponseDeserializer(item: any): FileListResponse {
  return {
    object: item["object"],
    data: openAIFileArrayDeserializer(item["data"]),
  };
}

export function openAIFileArrayDeserializer(result: Array<OpenAIFile>): any[] {
  return result.map((item) => {
    return openAIFileDeserializer(item);
  });
}

/** Represents an agent that can call the model and use tools. */
export interface OpenAIFile {
  /** The object type, which is always 'file'. */
  object: "file";
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The size of the file, in bytes. */
  bytes: number;
  /** The name of the file. */
  filename: string;
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /** The intended purpose of a file. */
  purpose: FilePurpose;
  /** The state of the file. This field is available in Azure OpenAI only. */
  status?: FileState;
  /** The error message with details in case processing of this file failed. This field is available in Azure OpenAI only. */
  statusDetails?: string;
}

export function openAIFileDeserializer(item: any): OpenAIFile {
  return {
    object: item["object"],
    id: item["id"],
    bytes: item["bytes"],
    filename: item["filename"],
    createdAt: new Date(item["created_at"] * 1000),
    purpose: item["purpose"],
    status: item["status"],
    statusDetails: item["status_details"],
  };
}

/** The possible values denoting the intended usage of a file. */
export type FilePurpose =
  | "fine-tune"
  | "fine-tune-results"
  | "assistants"
  | "assistants_output"
  | "batch"
  | "batch_output"
  | "vision";
/** The state of the file. */
export type FileState =
  | "uploaded"
  | "pending"
  | "running"
  | "processed"
  | "error"
  | "deleting"
  | "deleted";

/** A status response from a file deletion operation. */
export interface FileDeletionStatus {
  /** The ID of the resource specified for deletion. */
  id: string;
  /** A value indicating whether deletion was successful. */
  deleted: boolean;
  /** The object type, which is always 'file'. */
  object: "file";
}

export function fileDeletionStatusDeserializer(item: any): FileDeletionStatus {
  return {
    id: item["id"],
    deleted: item["deleted"],
    object: item["object"],
  };
}

/** A response from a file get content operation. */
export interface FileContentResponse {
  /** The content of the file, in bytes. */
  content: Uint8Array;
}

export function fileContentResponseDeserializer(
  item: any,
): FileContentResponse {
  return {
    content:
      typeof item["content"] === "string"
        ? stringToUint8Array(item["content"], "base64")
        : item["content"],
  };
}

/** The response data for a requested list of items. */
export interface OpenAIPageableListOfVectorStore {
  /** The object type, which is always list. */
  object: "list";
  /** The requested list of items. */
  data: VectorStore[];
  /** The first ID represented in this list. */
  firstId: string;
  /** The last ID represented in this list. */
  lastId: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  hasMore: boolean;
}

export function openAIPageableListOfVectorStoreDeserializer(
  item: any,
): OpenAIPageableListOfVectorStore {
  return {
    object: item["object"],
    data: vectorStoreArrayDeserializer(item["data"]),
    firstId: item["first_id"],
    lastId: item["last_id"],
    hasMore: item["has_more"],
  };
}

export function vectorStoreArrayDeserializer(
  result: Array<VectorStore>,
): any[] {
  return result.map((item) => {
    return vectorStoreDeserializer(item);
  });
}

/** A vector store is a collection of processed files can be used by the `file_search` tool. */
export interface VectorStore {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `vector_store` */
  object: "vector_store";
  /** The Unix timestamp (in seconds) for when the vector store was created. */
  createdAt: Date;
  /** The name of the vector store. */
  name: string;
  /** The total number of bytes used by the files in the vector store. */
  usageBytes: number;
  /** Files count grouped by status processed or being processed by this vector store. */
  fileCounts: VectorStoreFileCount;
  /** The status of the vector store, which can be either `expired`, `in_progress`, or `completed`. A status of `completed` indicates that the vector store is ready for use. */
  status: VectorStoreStatus;
  /** Details on when this vector store expires */
  expiresAfter?: VectorStoreExpirationPolicy;
  /** The Unix timestamp (in seconds) for when the vector store will expire. */
  expiresAt?: Date | null;
  /** The Unix timestamp (in seconds) for when the vector store was last active. */
  lastActiveAt: Date | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata: Record<string, string> | null;
}

export function vectorStoreDeserializer(item: any): VectorStore {
  return {
    id: item["id"],
    object: item["object"],
    createdAt: new Date(item["created_at"] * 1000),
    name: item["name"],
    usageBytes: item["usage_bytes"],
    fileCounts: vectorStoreFileCountDeserializer(item["file_counts"]),
    status: item["status"],
    expiresAfter: !item["expires_after"]
      ? item["expires_after"]
      : vectorStoreExpirationPolicyDeserializer(item["expires_after"]),
    expiresAt: !item["expires_at"]
      ? item["expires_at"]
      : !item["expires_at"]
        ? item["expires_at"]
        : new Date(item["expires_at"] * 1000),
    lastActiveAt: !item["last_active_at"]
      ? item["last_active_at"]
      : !item["last_active_at"]
        ? item["last_active_at"]
        : new Date(item["last_active_at"] * 1000),
    metadata: item["metadata"],
  };
}

/** Counts of files processed or being processed by this vector store grouped by status. */
export interface VectorStoreFileCount {
  /** The number of files that are currently being processed. */
  inProgress: number;
  /** The number of files that have been successfully processed. */
  completed: number;
  /** The number of files that have failed to process. */
  failed: number;
  /** The number of files that were cancelled. */
  cancelled: number;
  /** The total number of files. */
  total: number;
}

export function vectorStoreFileCountDeserializer(
  item: any,
): VectorStoreFileCount {
  return {
    inProgress: item["in_progress"],
    completed: item["completed"],
    failed: item["failed"],
    cancelled: item["cancelled"],
    total: item["total"],
  };
}

/** Vector store possible status */
export type VectorStoreStatus = "expired" | "in_progress" | "completed";

/** The expiration policy for a vector store. */
export interface VectorStoreExpirationPolicy {
  /** Anchor timestamp after which the expiration policy applies. Supported anchors: `last_active_at`. */
  anchor: VectorStoreExpirationPolicyAnchor;
  /** The anchor timestamp after which the expiration policy applies. */
  days: number;
}

export function vectorStoreExpirationPolicySerializer(
  item: VectorStoreExpirationPolicy,
): any {
  return { anchor: item["anchor"], days: item["days"] };
}

export function vectorStoreExpirationPolicyDeserializer(
  item: any,
): VectorStoreExpirationPolicy {
  return {
    anchor: item["anchor"],
    days: item["days"],
  };
}

/** Describes the relationship between the days and the expiration of this vector store */
export type VectorStoreExpirationPolicyAnchor = "last_active_at";

/** An abstract representation of a vector store chunking strategy configuration. */
export interface VectorStoreChunkingStrategyRequest {
  /** The object type. */
  /** The discriminator possible values: auto, static */
  type: VectorStoreChunkingStrategyRequestType;
}

export function vectorStoreChunkingStrategyRequestSerializer(
  item: VectorStoreChunkingStrategyRequest,
): any {
  return { type: item["type"] };
}

/** Alias for VectorStoreChunkingStrategyRequestUnion */
export type VectorStoreChunkingStrategyRequestUnion =
  | VectorStoreAutoChunkingStrategyRequest
  | VectorStoreStaticChunkingStrategyRequest
  | VectorStoreChunkingStrategyRequest;

export function vectorStoreChunkingStrategyRequestUnionSerializer(
  item: VectorStoreChunkingStrategyRequestUnion,
): any {
  switch (item.type) {
    case "auto":
      return vectorStoreAutoChunkingStrategyRequestSerializer(
        item as VectorStoreAutoChunkingStrategyRequest,
      );

    case "static":
      return vectorStoreStaticChunkingStrategyRequestSerializer(
        item as VectorStoreStaticChunkingStrategyRequest,
      );

    default:
      return vectorStoreChunkingStrategyRequestSerializer(item);
  }
}

/** Type of chunking strategy */
export type VectorStoreChunkingStrategyRequestType = "auto" | "static";

/** The default strategy. This strategy currently uses a max_chunk_size_tokens of 800 and chunk_overlap_tokens of 400. */
export interface VectorStoreAutoChunkingStrategyRequest
  extends VectorStoreChunkingStrategyRequest {
  /** The object type, which is always 'auto'. */
  type: "auto";
}

export function vectorStoreAutoChunkingStrategyRequestSerializer(
  item: VectorStoreAutoChunkingStrategyRequest,
): any {
  return { type: item["type"] };
}

/** A statically configured chunking strategy. */
export interface VectorStoreStaticChunkingStrategyRequest
  extends VectorStoreChunkingStrategyRequest {
  /** The object type, which is always 'static'. */
  type: "static";
  /** The options for the static chunking strategy. */
  static: VectorStoreStaticChunkingStrategyOptions;
}

export function vectorStoreStaticChunkingStrategyRequestSerializer(
  item: VectorStoreStaticChunkingStrategyRequest,
): any {
  return {
    type: item["type"],
    static: vectorStoreStaticChunkingStrategyOptionsSerializer(item["static"]),
  };
}

/** Options to configure a vector store static chunking strategy. */
export interface VectorStoreStaticChunkingStrategyOptions {
  /** The maximum number of tokens in each chunk. The default value is 800. The minimum value is 100 and the maximum value is 4096. */
  maxChunkSizeTokens: number;
  /**
   * The number of tokens that overlap between chunks. The default value is 400.
   * Note that the overlap must not exceed half of max_chunk_size_tokens.     *
   */
  chunkOverlapTokens: number;
}

export function vectorStoreStaticChunkingStrategyOptionsSerializer(
  item: VectorStoreStaticChunkingStrategyOptions,
): any {
  return {
    max_chunk_size_tokens: item["maxChunkSizeTokens"],
    chunk_overlap_tokens: item["chunkOverlapTokens"],
  };
}

export function vectorStoreStaticChunkingStrategyOptionsDeserializer(
  item: any,
): VectorStoreStaticChunkingStrategyOptions {
  return {
    maxChunkSizeTokens: item["max_chunk_size_tokens"],
    chunkOverlapTokens: item["chunk_overlap_tokens"],
  };
}

/** Response object for deleting a vector store. */
export interface VectorStoreDeletionStatus {
  /** The ID of the resource specified for deletion. */
  id: string;
  /** A value indicating whether deletion was successful. */
  deleted: boolean;
  /** The object type, which is always 'vector_store.deleted'. */
  object: "vector_store.deleted";
}

export function vectorStoreDeletionStatusDeserializer(
  item: any,
): VectorStoreDeletionStatus {
  return {
    id: item["id"],
    deleted: item["deleted"],
    object: item["object"],
  };
}

/** The response data for a requested list of items. */
export interface OpenAIPageableListOfVectorStoreFile {
  /** The object type, which is always list. */
  object: "list";
  /** The requested list of items. */
  data: VectorStoreFile[];
  /** The first ID represented in this list. */
  firstId: string;
  /** The last ID represented in this list. */
  lastId: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  hasMore: boolean;
}

export function openAIPageableListOfVectorStoreFileDeserializer(
  item: any,
): OpenAIPageableListOfVectorStoreFile {
  return {
    object: item["object"],
    data: vectorStoreFileArrayDeserializer(item["data"]),
    firstId: item["first_id"],
    lastId: item["last_id"],
    hasMore: item["has_more"],
  };
}

export function vectorStoreFileArrayDeserializer(
  result: Array<VectorStoreFile>,
): any[] {
  return result.map((item) => {
    return vectorStoreFileDeserializer(item);
  });
}

/** Description of a file attached to a vector store. */
export interface VectorStoreFile {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `vector_store.file`. */
  object: "vector_store.file";
  /**
   * The total vector store usage in bytes. Note that this may be different from the original file
   * size.
   */
  usageBytes: number;
  /** The Unix timestamp (in seconds) for when the vector store file was created. */
  createdAt: Date;
  /** The ID of the vector store that the file is attached to. */
  vectorStoreId: string;
  /** The status of the vector store file, which can be either `in_progress`, `completed`, `cancelled`, or `failed`. The status `completed` indicates that the vector store file is ready for use. */
  status: VectorStoreFileStatus;
  /** The last error associated with this vector store file. Will be `null` if there are no errors. */
  lastError: VectorStoreFileError | null;
  /** The strategy used to chunk the file. */
  chunkingStrategy: VectorStoreChunkingStrategyResponseUnion;
}

export function vectorStoreFileDeserializer(item: any): VectorStoreFile {
  return {
    id: item["id"],
    object: item["object"],
    usageBytes: item["usage_bytes"],
    createdAt: new Date(item["created_at"] * 1000),
    vectorStoreId: item["vector_store_id"],
    status: item["status"],
    lastError: item["last_error"],
    chunkingStrategy: vectorStoreChunkingStrategyResponseUnionDeserializer(
      item["chunking_strategy"],
    ),
  };
}

/** Vector store file status */
export type VectorStoreFileStatus =
  | "in_progress"
  | "completed"
  | "failed"
  | "cancelled";

/** Details on the error that may have ocurred while processing a file for this vector store */
export interface VectorStoreFileError {
  /** One of `server_error` or `rate_limit_exceeded`. */
  code: VectorStoreFileErrorCode;
  /** A human-readable description of the error. */
  message: string;
}

export function vectorStoreFileErrorDeserializer(
  item: any,
): VectorStoreFileError {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/** Error code variants for vector store file processing */
export type VectorStoreFileErrorCode =
  | "internal_error"
  | "file_not_found"
  | "parsing_error"
  | "unhandled_mime_type";

/** An abstract representation of a vector store chunking strategy configuration. */
export interface VectorStoreChunkingStrategyResponse {
  /** The object type. */
  /** The discriminator possible values: other, static */
  type: VectorStoreChunkingStrategyResponseType;
}

export function vectorStoreChunkingStrategyResponseDeserializer(
  item: any,
): VectorStoreChunkingStrategyResponse {
  return {
    type: item["type"],
  };
}

/** Alias for VectorStoreChunkingStrategyResponseUnion */
export type VectorStoreChunkingStrategyResponseUnion =
  | VectorStoreAutoChunkingStrategyResponse
  | VectorStoreStaticChunkingStrategyResponse
  | VectorStoreChunkingStrategyResponse;

export function vectorStoreChunkingStrategyResponseUnionDeserializer(
  item: any,
): VectorStoreChunkingStrategyResponseUnion {
  switch (item.type) {
    case "other":
      return vectorStoreAutoChunkingStrategyResponseDeserializer(
        item as VectorStoreAutoChunkingStrategyResponse,
      );

    case "static":
      return vectorStoreStaticChunkingStrategyResponseDeserializer(
        item as VectorStoreStaticChunkingStrategyResponse,
      );

    default:
      return vectorStoreChunkingStrategyResponseDeserializer(item);
  }
}

/** Type of chunking strategy */
export type VectorStoreChunkingStrategyResponseType = "other" | "static";

/** This is returned when the chunking strategy is unknown. Typically, this is because the file was indexed before the chunking_strategy concept was introduced in the API. */
export interface VectorStoreAutoChunkingStrategyResponse
  extends VectorStoreChunkingStrategyResponse {
  /** The object type, which is always 'other'. */
  type: "other";
}

export function vectorStoreAutoChunkingStrategyResponseDeserializer(
  item: any,
): VectorStoreAutoChunkingStrategyResponse {
  return {
    type: item["type"],
  };
}

/** A statically configured chunking strategy. */
export interface VectorStoreStaticChunkingStrategyResponse
  extends VectorStoreChunkingStrategyResponse {
  /** The object type, which is always 'static'. */
  type: "static";
  /** The options for the static chunking strategy. */
  static: VectorStoreStaticChunkingStrategyOptions;
}

export function vectorStoreStaticChunkingStrategyResponseDeserializer(
  item: any,
): VectorStoreStaticChunkingStrategyResponse {
  return {
    type: item["type"],
    static: vectorStoreStaticChunkingStrategyOptionsDeserializer(
      item["static"],
    ),
  };
}

/** Response object for deleting a vector store file relationship. */
export interface VectorStoreFileDeletionStatus {
  /** The ID of the resource specified for deletion. */
  id: string;
  /** A value indicating whether deletion was successful. */
  deleted: boolean;
  /** The object type, which is always 'vector_store.deleted'. */
  object: "vector_store.file.deleted";
}

export function vectorStoreFileDeletionStatusDeserializer(
  item: any,
): VectorStoreFileDeletionStatus {
  return {
    id: item["id"],
    deleted: item["deleted"],
    object: item["object"],
  };
}

/** A batch of files attached to a vector store. */
export interface VectorStoreFileBatch {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `vector_store.file_batch`. */
  object: "vector_store.files_batch";
  /** The Unix timestamp (in seconds) for when the vector store files batch was created. */
  createdAt: Date;
  /** The ID of the vector store that the file is attached to. */
  vectorStoreId: string;
  /** The status of the vector store files batch, which can be either `in_progress`, `completed`, `cancelled` or `failed`. */
  status: VectorStoreFileBatchStatus;
  /** Files count grouped by status processed or being processed by this vector store. */
  fileCounts: VectorStoreFileCount;
}

export function vectorStoreFileBatchDeserializer(
  item: any,
): VectorStoreFileBatch {
  return {
    id: item["id"],
    object: item["object"],
    createdAt: new Date(item["created_at"] * 1000),
    vectorStoreId: item["vector_store_id"],
    status: item["status"],
    fileCounts: vectorStoreFileCountDeserializer(item["file_counts"]),
  };
}

/** The status of the vector store file batch. */
export type VectorStoreFileBatchStatus =
  | "in_progress"
  | "completed"
  | "cancelled"
  | "failed";

/** Represents a message delta i.e. any changed fields on a message during streaming. */
export interface MessageDeltaChunk {
  /** The identifier of the message, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `thread.message.delta`. */
  object: "thread.message.delta";
  /** The delta containing the fields that have changed on the Message. */
  delta: MessageDelta;
}

export function messageDeltaChunkDeserializer(item: any): MessageDeltaChunk {
  return {
    id: item["id"],
    object: item["object"],
    delta: messageDeltaDeserializer(item["delta"]),
  };
}

/** Represents the typed 'delta' payload within a streaming message delta chunk. */
export interface MessageDelta {
  /** The entity that produced the message. */
  role: MessageRole;
  /** The content of the message as an array of text and/or images. */
  content: MessageDeltaContentUnion[];
}

export function messageDeltaDeserializer(item: any): MessageDelta {
  return {
    role: item["role"],
    content: messageDeltaContentUnionArrayDeserializer(item["content"]),
  };
}

export function messageDeltaContentUnionArrayDeserializer(
  result: Array<MessageDeltaContentUnion>,
): any[] {
  return result.map((item) => {
    return messageDeltaContentUnionDeserializer(item);
  });
}

/** The abstract base representation of a partial streamed message content payload. */
export interface MessageDeltaContent {
  /** The index of the content part of the message. */
  index: number;
  /** The type of content for this content part. */
  /** The discriminator possible values: image_file, text */
  type: string;
}

export function messageDeltaContentDeserializer(
  item: any,
): MessageDeltaContent {
  return {
    index: item["index"],
    type: item["type"],
  };
}

/** Alias for MessageDeltaContentUnion */
export type MessageDeltaContentUnion =
  | MessageDeltaImageFileContent
  | MessageDeltaTextContent
  | MessageDeltaContent;

export function messageDeltaContentUnionDeserializer(
  item: any,
): MessageDeltaContentUnion {
  switch (item.type) {
    case "image_file":
      return messageDeltaImageFileContentDeserializer(
        item as MessageDeltaImageFileContent,
      );

    case "text":
      return messageDeltaTextContentDeserializer(
        item as MessageDeltaTextContent,
      );

    default:
      return messageDeltaContentDeserializer(item);
  }
}

/** Represents a streamed image file content part within a streaming message delta chunk. */
export interface MessageDeltaImageFileContent extends MessageDeltaContent {
  /** The type of content for this content part, which is always "image_file." */
  type: "image_file";
  /** The image_file data. */
  imageFile?: MessageDeltaImageFileContentObject;
}

export function messageDeltaImageFileContentDeserializer(
  item: any,
): MessageDeltaImageFileContent {
  return {
    index: item["index"],
    type: item["type"],
    imageFile: !item["image_file"]
      ? item["image_file"]
      : messageDeltaImageFileContentObjectDeserializer(item["image_file"]),
  };
}

/** Represents the 'image_file' payload within streaming image file content. */
export interface MessageDeltaImageFileContentObject {
  /** The file ID of the image in the message content. */
  fileId?: string;
}

export function messageDeltaImageFileContentObjectDeserializer(
  item: any,
): MessageDeltaImageFileContentObject {
  return {
    fileId: item["file_id"],
  };
}

/** Represents a streamed text content part within a streaming message delta chunk. */
export interface MessageDeltaTextContent extends MessageDeltaContent {
  /** The type of content for this content part, which is always "text." */
  type: "text";
  /** The text content details. */
  text?: MessageDeltaTextContentObject;
}

export function messageDeltaTextContentDeserializer(
  item: any,
): MessageDeltaTextContent {
  return {
    index: item["index"],
    type: item["type"],
    text: !item["text"]
      ? item["text"]
      : messageDeltaTextContentObjectDeserializer(item["text"]),
  };
}

/** Represents the data of a streamed text content part within a streaming message delta chunk. */
export interface MessageDeltaTextContentObject {
  /** The data that makes up the text. */
  value?: string;
  /** Annotations for the text. */
  annotations?: MessageDeltaTextAnnotationUnion[];
}

export function messageDeltaTextContentObjectDeserializer(
  item: any,
): MessageDeltaTextContentObject {
  return {
    value: item["value"],
    annotations: !item["annotations"]
      ? item["annotations"]
      : messageDeltaTextAnnotationUnionArrayDeserializer(item["annotations"]),
  };
}

export function messageDeltaTextAnnotationUnionArrayDeserializer(
  result: Array<MessageDeltaTextAnnotationUnion>,
): any[] {
  return result.map((item) => {
    return messageDeltaTextAnnotationUnionDeserializer(item);
  });
}

/** The abstract base representation of a streamed text content part's text annotation. */
export interface MessageDeltaTextAnnotation {
  /** The index of the annotation within a text content part. */
  index: number;
  /** The type of the text content annotation. */
  /** The discriminator possible values: file_citation, file_path */
  type: string;
}

export function messageDeltaTextAnnotationDeserializer(
  item: any,
): MessageDeltaTextAnnotation {
  return {
    index: item["index"],
    type: item["type"],
  };
}

/** Alias for MessageDeltaTextAnnotationUnion */
export type MessageDeltaTextAnnotationUnion =
  | MessageDeltaTextFileCitationAnnotation
  | MessageDeltaTextFilePathAnnotation
  | MessageDeltaTextAnnotation;

export function messageDeltaTextAnnotationUnionDeserializer(
  item: any,
): MessageDeltaTextAnnotationUnion {
  switch (item.type) {
    case "file_citation":
      return messageDeltaTextFileCitationAnnotationDeserializer(
        item as MessageDeltaTextFileCitationAnnotation,
      );

    case "file_path":
      return messageDeltaTextFilePathAnnotationDeserializer(
        item as MessageDeltaTextFilePathAnnotation,
      );

    default:
      return messageDeltaTextAnnotationDeserializer(item);
  }
}

/** Represents a streamed file citation applied to a streaming text content part. */
export interface MessageDeltaTextFileCitationAnnotation
  extends MessageDeltaTextAnnotation {
  /** The type of the text content annotation, which is always "file_citation." */
  type: "file_citation";
  /** The file citation information. */
  fileCitation?: MessageDeltaTextFileCitationAnnotationObject;
  /** The text in the message content that needs to be replaced */
  text?: string;
  /** The start index of this annotation in the content text. */
  startIndex?: number;
  /** The end index of this annotation in the content text. */
  endIndex?: number;
}

export function messageDeltaTextFileCitationAnnotationDeserializer(
  item: any,
): MessageDeltaTextFileCitationAnnotation {
  return {
    index: item["index"],
    type: item["type"],
    fileCitation: !item["file_citation"]
      ? item["file_citation"]
      : messageDeltaTextFileCitationAnnotationObjectDeserializer(
          item["file_citation"],
        ),
    text: item["text"],
    startIndex: item["start_index"],
    endIndex: item["end_index"],
  };
}

/** Represents the data of a streamed file citation as applied to a streaming text content part. */
export interface MessageDeltaTextFileCitationAnnotationObject {
  /** The ID of the specific file the citation is from. */
  fileId?: string;
  /** The specific quote in the cited file. */
  quote?: string;
}

export function messageDeltaTextFileCitationAnnotationObjectDeserializer(
  item: any,
): MessageDeltaTextFileCitationAnnotationObject {
  return {
    fileId: item["file_id"],
    quote: item["quote"],
  };
}

/** Represents a streamed file path annotation applied to a streaming text content part. */
export interface MessageDeltaTextFilePathAnnotation
  extends MessageDeltaTextAnnotation {
  /** The type of the text content annotation, which is always "file_path." */
  type: "file_path";
  /** The file path information. */
  filePath?: MessageDeltaTextFilePathAnnotationObject;
  /** The start index of this annotation in the content text. */
  startIndex?: number;
  /** The end index of this annotation in the content text. */
  endIndex?: number;
  /** The text in the message content that needs to be replaced */
  text?: string;
}

export function messageDeltaTextFilePathAnnotationDeserializer(
  item: any,
): MessageDeltaTextFilePathAnnotation {
  return {
    index: item["index"],
    type: item["type"],
    filePath: !item["file_path"]
      ? item["file_path"]
      : messageDeltaTextFilePathAnnotationObjectDeserializer(item["file_path"]),
    startIndex: item["start_index"],
    endIndex: item["end_index"],
    text: item["text"],
  };
}

/** Represents the data of a streamed file path annotation as applied to a streaming text content part. */
export interface MessageDeltaTextFilePathAnnotationObject {
  /** The file ID for the annotation. */
  fileId?: string;
}

export function messageDeltaTextFilePathAnnotationObjectDeserializer(
  item: any,
): MessageDeltaTextFilePathAnnotationObject {
  return {
    fileId: item["file_id"],
  };
}

/** Represents a run step delta i.e. any changed fields on a run step during streaming. */
export interface RunStepDeltaChunk {
  /** The identifier of the run step, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `thread.run.step.delta`. */
  object: "thread.run.step.delta";
  /** The delta containing the fields that have changed on the run step. */
  delta: RunStepDelta;
}

export function runStepDeltaChunkDeserializer(item: any): RunStepDeltaChunk {
  return {
    id: item["id"],
    object: item["object"],
    delta: runStepDeltaDeserializer(item["delta"]),
  };
}

/** Represents the delta payload in a streaming run step delta chunk. */
export interface RunStepDelta {
  /** The details of the run step. */
  stepDetails?: RunStepDeltaDetailUnion;
}

export function runStepDeltaDeserializer(item: any): RunStepDelta {
  return {
    stepDetails: !item["step_details"]
      ? item["step_details"]
      : runStepDeltaDetailUnionDeserializer(item["step_details"]),
  };
}

/** Represents a single run step detail item in a streaming run step's delta payload. */
export interface RunStepDeltaDetail {
  /** The object type for the run step detail object. */
  /** The discriminator possible values: message_creation, tool_calls */
  type: string;
}

export function runStepDeltaDetailDeserializer(item: any): RunStepDeltaDetail {
  return {
    type: item["type"],
  };
}

/** Alias for RunStepDeltaDetailUnion */
export type RunStepDeltaDetailUnion =
  | RunStepDeltaMessageCreation
  | RunStepDeltaToolCallObject
  | RunStepDeltaDetail;

export function runStepDeltaDetailUnionDeserializer(
  item: any,
): RunStepDeltaDetailUnion {
  switch (item.type) {
    case "message_creation":
      return runStepDeltaMessageCreationDeserializer(
        item as RunStepDeltaMessageCreation,
      );

    case "tool_calls":
      return runStepDeltaToolCallObjectDeserializer(
        item as RunStepDeltaToolCallObject,
      );

    default:
      return runStepDeltaDetailDeserializer(item);
  }
}

/** Represents a message creation within a streaming run step delta. */
export interface RunStepDeltaMessageCreation extends RunStepDeltaDetail {
  /** The object type, which is always "message_creation." */
  type: "message_creation";
  /** The message creation data. */
  messageCreation?: RunStepDeltaMessageCreationObject;
}

export function runStepDeltaMessageCreationDeserializer(
  item: any,
): RunStepDeltaMessageCreation {
  return {
    type: item["type"],
    messageCreation: !item["message_creation"]
      ? item["message_creation"]
      : runStepDeltaMessageCreationObjectDeserializer(item["message_creation"]),
  };
}

/** Represents the data within a streaming run step message creation response object. */
export interface RunStepDeltaMessageCreationObject {
  /** The ID of the newly-created message. */
  messageId?: string;
}

export function runStepDeltaMessageCreationObjectDeserializer(
  item: any,
): RunStepDeltaMessageCreationObject {
  return {
    messageId: item["message_id"],
  };
}

/** Represents an invocation of tool calls as part of a streaming run step. */
export interface RunStepDeltaToolCallObject extends RunStepDeltaDetail {
  /** The object type, which is always "tool_calls." */
  type: "tool_calls";
  /** The collection of tool calls for the tool call detail item. */
  toolCalls?: RunStepDeltaToolCallUnion[];
}

export function runStepDeltaToolCallObjectDeserializer(
  item: any,
): RunStepDeltaToolCallObject {
  return {
    type: item["type"],
    toolCalls: !item["tool_calls"]
      ? item["tool_calls"]
      : runStepDeltaToolCallUnionArrayDeserializer(item["tool_calls"]),
  };
}

export function runStepDeltaToolCallUnionArrayDeserializer(
  result: Array<RunStepDeltaToolCallUnion>,
): any[] {
  return result.map((item) => {
    return runStepDeltaToolCallUnionDeserializer(item);
  });
}

/** The abstract base representation of a single tool call within a streaming run step's delta tool call details. */
export interface RunStepDeltaToolCall {
  /** The index of the tool call detail in the run step's tool_calls array. */
  index: number;
  /** The ID of the tool call, used when submitting outputs to the run. */
  id: string;
  /** The type of the tool call detail item in a streaming run step's details. */
  /** The discriminator possible values: function, file_search, code_interpreter */
  type: string;
}

export function runStepDeltaToolCallDeserializer(
  item: any,
): RunStepDeltaToolCall {
  return {
    index: item["index"],
    id: item["id"],
    type: item["type"],
  };
}

/** Alias for RunStepDeltaToolCallUnion */
export type RunStepDeltaToolCallUnion =
  | RunStepDeltaFunctionToolCall
  | RunStepDeltaFileSearchToolCall
  | RunStepDeltaCodeInterpreterToolCall
  | RunStepDeltaToolCall;

export function runStepDeltaToolCallUnionDeserializer(
  item: any,
): RunStepDeltaToolCallUnion {
  switch (item.type) {
    case "function":
      return runStepDeltaFunctionToolCallDeserializer(
        item as RunStepDeltaFunctionToolCall,
      );

    case "file_search":
      return runStepDeltaFileSearchToolCallDeserializer(
        item as RunStepDeltaFileSearchToolCall,
      );

    case "code_interpreter":
      return runStepDeltaCodeInterpreterToolCallDeserializer(
        item as RunStepDeltaCodeInterpreterToolCall,
      );

    default:
      return runStepDeltaToolCallDeserializer(item);
  }
}

/** Represents a function tool call within a streaming run step's tool call details. */
export interface RunStepDeltaFunctionToolCall extends RunStepDeltaToolCall {
  /** The object type, which is always "function." */
  type: "function";
  /** The function data for the tool call. */
  function?: RunStepDeltaFunction;
}

export function runStepDeltaFunctionToolCallDeserializer(
  item: any,
): RunStepDeltaFunctionToolCall {
  return {
    index: item["index"],
    id: item["id"],
    type: item["type"],
    function: !item["function"]
      ? item["function"]
      : runStepDeltaFunctionDeserializer(item["function"]),
  };
}

/** Represents the function data in a streaming run step delta's function tool call. */
export interface RunStepDeltaFunction {
  /** The name of the function. */
  name?: string;
  /** The arguments passed to the function as input. */
  arguments?: string;
  /** The output of the function, null if outputs have not yet been submitted. */
  output?: string | null;
}

export function runStepDeltaFunctionDeserializer(
  item: any,
): RunStepDeltaFunction {
  return {
    name: item["name"],
    arguments: item["arguments"],
    output: item["output"],
  };
}

/** Represents a file search tool call within a streaming run step's tool call details. */
export interface RunStepDeltaFileSearchToolCall extends RunStepDeltaToolCall {
  /** The object type, which is always "file_search." */
  type: "file_search";
  /** Reserved for future use. */
  fileSearch?: Record<string, string>;
}

export function runStepDeltaFileSearchToolCallDeserializer(
  item: any,
): RunStepDeltaFileSearchToolCall {
  return {
    index: item["index"],
    id: item["id"],
    type: item["type"],
    fileSearch: item["file_search"],
  };
}

/** Represents a Code Interpreter tool call within a streaming run step's tool call details. */
export interface RunStepDeltaCodeInterpreterToolCall
  extends RunStepDeltaToolCall {
  /** The object type, which is always "code_interpreter." */
  type: "code_interpreter";
  /** The Code Interpreter data for the tool call. */
  codeInterpreter?: RunStepDeltaCodeInterpreterDetailItemObject;
}

export function runStepDeltaCodeInterpreterToolCallDeserializer(
  item: any,
): RunStepDeltaCodeInterpreterToolCall {
  return {
    index: item["index"],
    id: item["id"],
    type: item["type"],
    codeInterpreter: !item["code_interpreter"]
      ? item["code_interpreter"]
      : runStepDeltaCodeInterpreterDetailItemObjectDeserializer(
          item["code_interpreter"],
        ),
  };
}

/** Represents the Code Interpreter tool call data in a streaming run step's tool calls. */
export interface RunStepDeltaCodeInterpreterDetailItemObject {
  /** The input into the Code Interpreter tool call. */
  input?: string;
  /**
   * The outputs from the Code Interpreter tool call. Code Interpreter can output one or more
   * items, including text (`logs`) or images (`image`). Each of these are represented by a
   * different object type.
   */
  outputs?: RunStepDeltaCodeInterpreterOutputUnion[];
}

export function runStepDeltaCodeInterpreterDetailItemObjectDeserializer(
  item: any,
): RunStepDeltaCodeInterpreterDetailItemObject {
  return {
    input: item["input"],
    outputs: !item["outputs"]
      ? item["outputs"]
      : runStepDeltaCodeInterpreterOutputUnionArrayDeserializer(
          item["outputs"],
        ),
  };
}

export function runStepDeltaCodeInterpreterOutputUnionArrayDeserializer(
  result: Array<RunStepDeltaCodeInterpreterOutputUnion>,
): any[] {
  return result.map((item) => {
    return runStepDeltaCodeInterpreterOutputUnionDeserializer(item);
  });
}

/** The abstract base representation of a streaming run step tool call's Code Interpreter tool output. */
export interface RunStepDeltaCodeInterpreterOutput {
  /** The index of the output in the streaming run step tool call's Code Interpreter outputs array. */
  index: number;
  /** The type of the streaming run step tool call's Code Interpreter output. */
  /** The discriminator possible values: logs, image */
  type: string;
}

export function runStepDeltaCodeInterpreterOutputDeserializer(
  item: any,
): RunStepDeltaCodeInterpreterOutput {
  return {
    index: item["index"],
    type: item["type"],
  };
}

/** Alias for RunStepDeltaCodeInterpreterOutputUnion */
export type RunStepDeltaCodeInterpreterOutputUnion =
  | RunStepDeltaCodeInterpreterLogOutput
  | RunStepDeltaCodeInterpreterImageOutput
  | RunStepDeltaCodeInterpreterOutput;

export function runStepDeltaCodeInterpreterOutputUnionDeserializer(
  item: any,
): RunStepDeltaCodeInterpreterOutputUnion {
  switch (item.type) {
    case "logs":
      return runStepDeltaCodeInterpreterLogOutputDeserializer(
        item as RunStepDeltaCodeInterpreterLogOutput,
      );

    case "image":
      return runStepDeltaCodeInterpreterImageOutputDeserializer(
        item as RunStepDeltaCodeInterpreterImageOutput,
      );

    default:
      return runStepDeltaCodeInterpreterOutputDeserializer(item);
  }
}

/** Represents a log output as produced by the Code Interpreter tool and as represented in a streaming run step's delta tool calls collection. */
export interface RunStepDeltaCodeInterpreterLogOutput
  extends RunStepDeltaCodeInterpreterOutput {
  /** The type of the object, which is always "logs." */
  type: "logs";
  /** The text output from the Code Interpreter tool call. */
  logs?: string;
}

export function runStepDeltaCodeInterpreterLogOutputDeserializer(
  item: any,
): RunStepDeltaCodeInterpreterLogOutput {
  return {
    index: item["index"],
    type: item["type"],
    logs: item["logs"],
  };
}

/** Represents an image output as produced the Code interpreter tool and as represented in a streaming run step's delta tool calls collection. */
export interface RunStepDeltaCodeInterpreterImageOutput
  extends RunStepDeltaCodeInterpreterOutput {
  /** The object type, which is always "image." */
  type: "image";
  /** The image data for the Code Interpreter tool call output. */
  image?: RunStepDeltaCodeInterpreterImageOutputObject;
}

export function runStepDeltaCodeInterpreterImageOutputDeserializer(
  item: any,
): RunStepDeltaCodeInterpreterImageOutput {
  return {
    index: item["index"],
    type: item["type"],
    image: !item["image"]
      ? item["image"]
      : runStepDeltaCodeInterpreterImageOutputObjectDeserializer(item["image"]),
  };
}

/** Represents the data for a streaming run step's Code Interpreter tool call image output. */
export interface RunStepDeltaCodeInterpreterImageOutputObject {
  /** The file ID for the image. */
  fileId?: string;
}

export function runStepDeltaCodeInterpreterImageOutputObjectDeserializer(
  item: any,
): RunStepDeltaCodeInterpreterImageOutputObject {
  return {
    fileId: item["file_id"],
  };
}

/** Alias for _ */
export type _ =
  | ThreadStreamEvent
  | RunStreamEvent
  | RunStepStreamEvent
  | MessageStreamEvent
  | ErrorEvent
  | DoneEvent;
/** Thread operation related streaming events */
export type ThreadStreamEvent = "thread.created";
/** Run operation related streaming events */
export type RunStreamEvent =
  | "thread.run.created"
  | "thread.run.queued"
  | "thread.run.in_progress"
  | "thread.run.requires_action"
  | "thread.run.completed"
  | "thread.run.failed"
  | "thread.run.cancelling"
  | "thread.run.cancelled"
  | "thread.run.expired";
/** Run step operation related streaming events */
export type RunStepStreamEvent =
  | "thread.run.step.created"
  | "thread.run.step.in_progress"
  | "thread.run.step.delta"
  | "thread.run.step.completed"
  | "thread.run.step.failed"
  | "thread.run.step.cancelled"
  | "thread.run.step.expired";
/** Message operation related streaming events */
export type MessageStreamEvent =
  | "thread.message.created"
  | "thread.message.in_progress"
  | "thread.message.delta"
  | "thread.message.completed"
  | "thread.message.incomplete";
/** Terminal event indicating a server side error while streaming. */
export type ErrorEvent = "error";
/** Terminal event indicating the successful end of a stream. */
export type DoneEvent = "done";
/** Alias for AgentStreamEvent */
export type AgentStreamEvent =
  | string
  | (
      | ThreadStreamEvent
      | RunStreamEvent
      | RunStepStreamEvent
      | MessageStreamEvent
      | ErrorEvent
      | DoneEvent
    );

export function agentStreamEventDeserializer(item: any): AgentStreamEvent {
  return item;
}

/** The available sorting options when requesting a list of response objects. */
export type ListSortOrder = "asc" | "desc";
/** Query parameter filter for vector store file retrieval endpoint */
export type VectorStoreFileStatusFilter =
  | "in_progress"
  | "completed"
  | "failed"
  | "cancelled";

/** Azure AI API versions */
export enum KnownVersions {
  /** Azure AI API version 2024-07-01-preview. */
  "2024-07-01-preview" = "2024-07-01-preview",
}

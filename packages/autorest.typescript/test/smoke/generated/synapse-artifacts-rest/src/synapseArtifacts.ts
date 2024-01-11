// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { TokenCredential } from "@azure/core-auth";
import { SynapseArtifactsClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `SynapseArtifactsClient`
 * @param endpoint - The workspace development endpoint, for example https://myworkspace.dev.azuresynapse.net.
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  credentials: TokenCredential,
  options: ClientOptions = {},
): SynapseArtifactsClient {
  const baseUrl = options.baseUrl ?? `${endpoint}`;

  const userAgentInfo = `azsdk-js-synapse-artifacts-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
    loggingOptions: {
      logger: options.loggingOptions?.logger ?? logger.info,
    },
    credentials: {
      scopes: options.credentials?.scopes ?? [
        "https://dev.azuresynapse.net/.default",
      ],
    },
  };

  const client = getClient(
    baseUrl,
    credentials,
    options,
  ) as SynapseArtifactsClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  return {
    ...client,
    kqlScripts: {
      getAll: (options) => {
        return client.path("/kqlScripts").get(options);
      },
    },
    kqlScript: {
      createOrUpdate: (kqlScriptName, options) => {
        return client
          .path("/kqlScripts/{kqlScriptName}", kqlScriptName)
          .put(options);
      },
      getByName: (kqlScriptName, options) => {
        return client
          .path("/kqlScripts/{kqlScriptName}", kqlScriptName)
          .get(options);
      },
      deleteByName: (kqlScriptName, options) => {
        return client
          .path("/kqlScripts/{kqlScriptName}", kqlScriptName)
          .delete(options);
      },
      rename: (kqlScriptName, options) => {
        return client
          .path("/kqlScripts/{kqlScriptName}/rename", kqlScriptName)
          .post(options);
      },
    },
    metastore: {
      register: (id, options) => {
        return client
          .path("/metastore/create-database-operations/{id}", id)
          .put(options);
      },
      getDatabaseOperations: (id, options) => {
        return client
          .path("/metastore/create-database-operations/{id}", id)
          .get(options);
      },
      update: (id, options) => {
        return client
          .path("/metastore/update-database-operations/{id}", id)
          .put(options);
      },
      delete: (id, options) => {
        return client.path("/metastore/databases/{id}", id).delete(options);
      },
    },
    sparkConfiguration: {
      getSparkConfigurationsByWorkspace: (options) => {
        return client.path("/sparkconfigurations").get(options);
      },
      createOrUpdateSparkConfiguration: (sparkConfigurationName, options) => {
        return client
          .path(
            "/sparkconfigurations/{sparkConfigurationName}",
            sparkConfigurationName,
          )
          .put(options);
      },
      getSparkConfiguration: (sparkConfigurationName, options) => {
        return client
          .path(
            "/sparkconfigurations/{sparkConfigurationName}",
            sparkConfigurationName,
          )
          .get(options);
      },
      deleteSparkConfiguration: (sparkConfigurationName, options) => {
        return client
          .path(
            "/sparkconfigurations/{sparkConfigurationName}",
            sparkConfigurationName,
          )
          .delete(options);
      },
      renameSparkConfiguration: (sparkConfigurationName, options) => {
        return client
          .path(
            "/sparkconfigurations/{sparkConfigurationName}/rename",
            sparkConfigurationName,
          )
          .post(options);
      },
    },
    bigDataPools: {
      list: (options) => {
        return client.path("/bigDataPools").get(options);
      },
      get: (bigDataPoolName, options) => {
        return client
          .path("/bigDataPools/{bigDataPoolName}", bigDataPoolName)
          .get(options);
      },
    },
    dataFlow: {
      createOrUpdateDataFlow: (dataFlowName, options) => {
        return client
          .path("/dataflows/{dataFlowName}", dataFlowName)
          .put(options);
      },
      getDataFlow: (dataFlowName, options) => {
        return client
          .path("/dataflows/{dataFlowName}", dataFlowName)
          .get(options);
      },
      deleteDataFlow: (dataFlowName, options) => {
        return client
          .path("/dataflows/{dataFlowName}", dataFlowName)
          .delete(options);
      },
      renameDataFlow: (dataFlowName, options) => {
        return client
          .path("/dataflows/{dataFlowName}/rename", dataFlowName)
          .post(options);
      },
      getDataFlowsByWorkspace: (options) => {
        return client.path("/dataflows").get(options);
      },
    },
    dataFlowDebugSession: {
      createDataFlowDebugSession: (options) => {
        return client.path("/createDataFlowDebugSession").post(options);
      },
      queryDataFlowDebugSessionsByWorkspace: (options) => {
        return client.path("/queryDataFlowDebugSessions").post(options);
      },
      addDataFlow: (options) => {
        return client.path("/addDataFlowToDebugSession").post(options);
      },
      deleteDataFlowDebugSession: (options) => {
        return client.path("/deleteDataFlowDebugSession").post(options);
      },
      executeCommand: (options) => {
        return client.path("/executeDataFlowDebugCommand").post(options);
      },
    },
    dataset: {
      getDatasetsByWorkspace: (options) => {
        return client.path("/datasets").get(options);
      },
      createOrUpdateDataset: (datasetName, options) => {
        return client.path("/datasets/{datasetName}", datasetName).put(options);
      },
      getDataset: (datasetName, options) => {
        return client.path("/datasets/{datasetName}", datasetName).get(options);
      },
      deleteDataset: (datasetName, options) => {
        return client
          .path("/datasets/{datasetName}", datasetName)
          .delete(options);
      },
      renameDataset: (datasetName, options) => {
        return client
          .path("/datasets/{datasetName}/rename", datasetName)
          .post(options);
      },
    },
    workspaceGitRepoManagement: {
      getGitHubAccessToken: (options) => {
        return client.path("/getGitHubAccessToken").post(options);
      },
    },
    integrationRuntimes: {
      list: (options) => {
        return client.path("/integrationRuntimes").get(options);
      },
      get: (integrationRuntimeName, options) => {
        return client
          .path(
            "/integrationRuntimes/{integrationRuntimeName}",
            integrationRuntimeName,
          )
          .get(options);
      },
    },
    library: {
      list: (options) => {
        return client.path("/libraries").get(options);
      },
      flush: (libraryName, options) => {
        return client
          .path("/libraries/{libraryName}/flush", libraryName)
          .post(options);
      },
      getOperationResult: (operationId, options) => {
        return client
          .path("/libraryOperationResults/{operationId}", operationId)
          .get(options);
      },
      delete: (libraryName, options) => {
        return client
          .path("/libraries/{libraryName}", libraryName)
          .delete(options);
      },
      get: (libraryName, options) => {
        return client
          .path("/libraries/{libraryName}", libraryName)
          .get(options);
      },
      create: (libraryName, options) => {
        return client
          .path("/libraries/{libraryName}", libraryName)
          .put(options);
      },
      append: (libraryName, options) => {
        return client
          .path("/libraries/{libraryName}", libraryName)
          .put(options);
      },
    },
    linkedService: {
      getLinkedServicesByWorkspace: (options) => {
        return client.path("/linkedservices").get(options);
      },
      createOrUpdateLinkedService: (linkedServiceName, options) => {
        return client
          .path("/linkedservices/{linkedServiceName}", linkedServiceName)
          .put(options);
      },
      getLinkedService: (linkedServiceName, options) => {
        return client
          .path("/linkedservices/{linkedServiceName}", linkedServiceName)
          .get(options);
      },
      deleteLinkedService: (linkedServiceName, options) => {
        return client
          .path("/linkedservices/{linkedServiceName}", linkedServiceName)
          .delete(options);
      },
      renameLinkedService: (linkedServiceName, options) => {
        return client
          .path("/linkedservices/{linkedServiceName}/rename", linkedServiceName)
          .post(options);
      },
    },
    notebook: {
      getNotebooksByWorkspace: (options) => {
        return client.path("/notebooks").get(options);
      },
      getNotebookSummaryByWorkSpace: (options) => {
        return client.path("/notebooksSummary").get(options);
      },
      createOrUpdateNotebook: (notebookName, options) => {
        return client
          .path("/notebooks/{notebookName}", notebookName)
          .put(options);
      },
      getNotebook: (notebookName, options) => {
        return client
          .path("/notebooks/{notebookName}", notebookName)
          .get(options);
      },
      deleteNotebook: (notebookName, options) => {
        return client
          .path("/notebooks/{notebookName}", notebookName)
          .delete(options);
      },
      renameNotebook: (notebookName, options) => {
        return client
          .path("/notebooks/{notebookName}/rename", notebookName)
          .post(options);
      },
    },
    notebookOperationResult: {
      get: (operationId, options) => {
        return client
          .path("/notebookOperationResults/{operationId}", operationId)
          .get(options);
      },
    },
    pipelineOperations: {
      getPipelinesByWorkspace: (options) => {
        return client.path("/pipelines").get(options);
      },
      createOrUpdatePipeline: (pipelineName, options) => {
        return client
          .path("/pipelines/{pipelineName}", pipelineName)
          .put(options);
      },
      getPipeline: (pipelineName, options) => {
        return client
          .path("/pipelines/{pipelineName}", pipelineName)
          .get(options);
      },
      deletePipeline: (pipelineName, options) => {
        return client
          .path("/pipelines/{pipelineName}", pipelineName)
          .delete(options);
      },
      renamePipeline: (pipelineName, options) => {
        return client
          .path("/pipelines/{pipelineName}/rename", pipelineName)
          .post(options);
      },
      createPipelineRun: (pipelineName, options) => {
        return client
          .path("/pipelines/{pipelineName}/createRun", pipelineName)
          .post(options);
      },
    },
    pipelineRun: {
      queryPipelineRunsByWorkspace: (options) => {
        return client.path("/queryPipelineRuns").post(options);
      },
      getPipelineRun: (runId, options) => {
        return client.path("/pipelineruns/{runId}", runId).get(options);
      },
      queryActivityRuns: (pipelineName, runId, options) => {
        return client
          .path(
            "/pipelines/{pipelineName}/pipelineruns/{runId}/queryActivityruns",
            pipelineName,
            runId,
          )
          .post(options);
      },
      cancelPipelineRun: (runId, options) => {
        return client.path("/pipelineruns/{runId}/cancel", runId).post(options);
      },
    },
    sparkJobDefinition: {
      getSparkJobDefinitionsByWorkspace: (options) => {
        return client.path("/sparkJobDefinitions").get(options);
      },
      createOrUpdateSparkJobDefinition: (sparkJobDefinitionName, options) => {
        return client
          .path(
            "/sparkJobDefinitions/{sparkJobDefinitionName}",
            sparkJobDefinitionName,
          )
          .put(options);
      },
      getSparkJobDefinition: (sparkJobDefinitionName, options) => {
        return client
          .path(
            "/sparkJobDefinitions/{sparkJobDefinitionName}",
            sparkJobDefinitionName,
          )
          .get(options);
      },
      deleteSparkJobDefinition: (sparkJobDefinitionName, options) => {
        return client
          .path(
            "/sparkJobDefinitions/{sparkJobDefinitionName}",
            sparkJobDefinitionName,
          )
          .delete(options);
      },
      executeSparkJobDefinition: (sparkJobDefinitionName, options) => {
        return client
          .path(
            "/sparkJobDefinitions/{sparkJobDefinitionName}/execute",
            sparkJobDefinitionName,
          )
          .post(options);
      },
      renameSparkJobDefinition: (sparkJobDefinitionName, options) => {
        return client
          .path(
            "/sparkJobDefinitions/{sparkJobDefinitionName}/rename",
            sparkJobDefinitionName,
          )
          .post(options);
      },
      debugSparkJobDefinition: (options) => {
        return client.path("/debugSparkJobDefinition").post(options);
      },
    },
    sqlPools: {
      list: (options) => {
        return client.path("/sqlPools").get(options);
      },
      get: (sqlPoolName, options) => {
        return client.path("/sqlPools/{sqlPoolName}", sqlPoolName).get(options);
      },
    },
    sqlScript: {
      getSqlScriptsByWorkspace: (options) => {
        return client.path("/sqlScripts").get(options);
      },
      createOrUpdateSqlScript: (sqlScriptName, options) => {
        return client
          .path("/sqlScripts/{sqlScriptName}", sqlScriptName)
          .put(options);
      },
      getSqlScript: (sqlScriptName, options) => {
        return client
          .path("/sqlScripts/{sqlScriptName}", sqlScriptName)
          .get(options);
      },
      deleteSqlScript: (sqlScriptName, options) => {
        return client
          .path("/sqlScripts/{sqlScriptName}", sqlScriptName)
          .delete(options);
      },
      renameSqlScript: (sqlScriptName, options) => {
        return client
          .path("/sqlScripts/{sqlScriptName}/rename", sqlScriptName)
          .post(options);
      },
    },
    trigger: {
      getTriggersByWorkspace: (options) => {
        return client.path("/triggers").get(options);
      },
      createOrUpdateTrigger: (triggerName, options) => {
        return client.path("/triggers/{triggerName}", triggerName).put(options);
      },
      getTrigger: (triggerName, options) => {
        return client.path("/triggers/{triggerName}", triggerName).get(options);
      },
      deleteTrigger: (triggerName, options) => {
        return client
          .path("/triggers/{triggerName}", triggerName)
          .delete(options);
      },
      subscribeTriggerToEvents: (triggerName, options) => {
        return client
          .path("/triggers/{triggerName}/subscribeToEvents", triggerName)
          .post(options);
      },
      getEventSubscriptionStatus: (triggerName, options) => {
        return client
          .path(
            "/triggers/{triggerName}/getEventSubscriptionStatus",
            triggerName,
          )
          .post(options);
      },
      unsubscribeTriggerFromEvents: (triggerName, options) => {
        return client
          .path("/triggers/{triggerName}/unsubscribeFromEvents", triggerName)
          .post(options);
      },
      startTrigger: (triggerName, options) => {
        return client
          .path("/triggers/{triggerName}/start", triggerName)
          .post(options);
      },
      stopTrigger: (triggerName, options) => {
        return client
          .path("/triggers/{triggerName}/stop", triggerName)
          .post(options);
      },
    },
    triggerRun: {
      rerunTriggerInstance: (triggerName, runId, options) => {
        return client
          .path(
            "/triggers/{triggerName}/triggerRuns/{runId}/rerun",
            triggerName,
            runId,
          )
          .post(options);
      },
      cancelTriggerInstance: (triggerName, runId, options) => {
        return client
          .path(
            "/triggers/{triggerName}/triggerRuns/{runId}/cancel",
            triggerName,
            runId,
          )
          .post(options);
      },
      queryTriggerRunsByWorkspace: (options) => {
        return client.path("/queryTriggerRuns").post(options);
      },
    },
    workspace: {
      get: (options) => {
        return client.path("/workspace").get(options);
      },
    },
  };
}

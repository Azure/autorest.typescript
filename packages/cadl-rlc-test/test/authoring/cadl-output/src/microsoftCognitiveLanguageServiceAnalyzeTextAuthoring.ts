import { getClient, ClientOptions } from "@azure-rest/core-client";
import { KeyCredential } from "@azure/core-auth";
import { MicrosoftCognitiveLanguageServiceAnalyzeTextAuthoringClient } from "./clientDefinitions";

/**
 * Initialize a new instance of the class MicrosoftCognitiveLanguageServiceAnalyzeTextAuthoringClient class.
 * @param Endpoint type: string The endpoint to use.
 * @param credentials type: KeyCredential
 */
export default function createClient(
  Endpoint: string,
  credentials: KeyCredential,
  options: ClientOptions = {}
): MicrosoftCognitiveLanguageServiceAnalyzeTextAuthoringClient {
  const baseUrl = options.baseUrl ?? `${Endpoint}/language`;
  options.apiVersion = options.apiVersion ?? "2022-05-15-preview";
  options = {
    ...options,
    credentials: {
      apiKeyHeaderName: "Ocp-Apim-Subscription-Key",
    },
  };

  const userAgentInfo = `azsdk-js-authoring-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
  };

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as MicrosoftCognitiveLanguageServiceAnalyzeTextAuthoringClient;

  return {
    ...client,
    projects: {
      createOrUpdate: (projectName, options) => {
        return client
          .path("/authoring/analyze-text/projects/{projectName}", projectName)
          .patch(options);
      },
      get: (projectName, options) => {
        return client
          .path("/authoring/analyze-text/projects/{projectName}", projectName)
          .get(options);
      },
      delete: (projectName, options) => {
        return client
          .path("/authoring/analyze-text/projects/{projectName}", projectName)
          .delete(options);
      },
      list: (options) => {
        return client.path("/authoring/analyze-text/projects").get(options);
      },
      export: (projectName, options) => {
        return client
          .path(
            "/authoring/analyze-text/projects/{projectName}:export",
            projectName
          )
          .post(options);
      },
      importx: (projectName, options) => {
        return client
          .path(
            "/authoring/analyze-text/projects/{projectName}:importx",
            projectName
          )
          .post(options);
      },
      train: (projectName, options) => {
        return client
          .path(
            "/authoring/analyze-text/projects/{projectName}:train",
            projectName
          )
          .post(options);
      },
    },
    deployments: {
      getDeployment: (projectName, deploymentName, options) => {
        return client
          .path(
            "/authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}",
            projectName,
            deploymentName
          )
          .get(options);
      },
      deployProject: (projectName, deploymentName, options) => {
        return client
          .path(
            "/authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}",
            projectName,
            deploymentName
          )
          .put(options);
      },
      deleteDeployment: (projectName, deploymentName, options) => {
        return client
          .path(
            "/authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}",
            projectName,
            deploymentName
          )
          .delete(options);
      },
      list: (projectName, options) => {
        return client
          .path(
            "/authoring/analyze-text/projects/{projectName}/deployments",
            projectName
          )
          .get(options);
      },
      swapDeployments: (projectName, options) => {
        return client
          .path(
            "/authoring/analyze-text/projects/{projectName}/deployments/swap",
            projectName
          )
          .post(options);
      },
    },
    jobs: {
      getDeploymentStatus: (projectName, deploymentName, jobId, options) => {
        return client
          .path(
            "/authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}/jobs/{jobId}",
            projectName,
            deploymentName,
            jobId
          )
          .get(options);
      },
      getSwapDeploymentsStatus: (
        projectName,
        deploymentName,
        jobId,
        options
      ) => {
        return client
          .path(
            "/authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}/swap/jobs/{jobId}",
            projectName,
            deploymentName,
            jobId
          )
          .get(options);
      },
    },
    global: {
      getSupportedLanguages: (options) => {
        return client
          .path("/authoring/analyze-text/projects/global/languages")
          .get(options);
      },
      listTrainingConfigVersions: (options) => {
        return client
          .path(
            "/authoring/analyze-text/projects/global/training-config-versions"
          )
          .get(options);
      },
    },
  };
}

import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;

// NOTE: These features are missing:
// - Security definition for apiKey

@server(
  "{Endpoint}/language",
  "Language Service",
  {
    Endpoint: Endpoint,
  }
)
@service({
  title: "Microsoft Cognitive Language Service - Analyze Text Authoring",
  version: "202ß2-05-15-preview",
})
@useAuth(ApiKeyAuth<ApiKeyLocation.header, "Ocp-Apim-Subscription-Key">)
@useDependency(Azure.Core.Versions.v1_0_Preview_1)
@route("/authoring/analyze-text/")
namespace Azure.Language.Authoring;

// Common Parameters

// TODO: Use the common parameter for this
@doc("The endpoint to use.")
scalar Endpoint extends string;

// Models

@doc("The details of a project.")
model Project {
  @key
  @segment("projects")
  @doc("The project name.")
  @visibility("read")
  projectName: string;

  @doc("The project kind.")
  projectKind: ProjectKind;

  @doc("The storage container name.")
  storageInputContainerName: string;

  @doc("The project settings.")
  settings?: ProjectSettings;

  @doc("Whether the project would be used for multiple languages or not.")
  multilingual?: boolean;

  @doc("The project description.")
  description?: string;

  @doc("The project language. This is BCP-47 representation of a language. For example, use \"en\" for English, \"en-gb\" for English (UK), \"es\" for Spanish etc.")
  language: string;

  @doc("Represents the project creation datetime.")
  @visibility("read")
  createdDateTime: utcDateTime;

  @doc("Represents the project last modification datetime.")
  @visibility("read")
  lastModifiedDateTime: utcDateTime;

  @doc("Represents the project last training datetime.")
  @visibility("read")
  lastTrainedDateTime: utcDateTime;

  @doc("Represents the project last deployment datetime.")
  @visibility("read")
  lastDeployedDateTime: utcDateTime;
}

@doc("Represents the project kind.")
@fixed
enum ProjectKind {
  @doc("For building a classification model to classify text using your own data. Each file will have only one label. For example, file 1 is classified as A and file 2 is classified as B.")
  CustomSingleLabelClassification,

  @doc("For building a classification model to classify text using your own data. Each file can have one or many labels. For example, file 1 is classified as A, B, and C and file 2 is classified as B and C.")
  CustomMultiLabelClassification,

  @doc("For building an extraction model to identify your domain categories using your own data.")
  CustomEntityRecognition,
}

@doc("Represents the settings used to define the project behavior.")
model ProjectSettings is Record<string>;

@doc("The details of a project deployment.")
@parentResource(Project)
model Deployment {
  @doc("The name of the deployment.")
  @key("deploymentName")
  @segment("deployments")
  @visibility("read")
  name: string;
}

@doc("The details about a job.")
model Job {
  @doc("The job ID.")
  jobId: string;

  @doc("The creation date time of the job.")
  @visibility("read")
  createdDateTime: utcDateTime;

  @doc("The the last date time the job was updated.")
  @visibility("read")
  lastUpdatedDateTime: utcDateTime;

  @doc("The expiration date time of the job.")
  @visibility("read")
  expirationDateTime: utcDateTime;

  @doc("The job status.")
  status: JobStatus;

  @doc("The warnings that were encountered while executing the job.")
  warnings: JobWarning[];

  @doc("The errors encountered while executing the job.")
  errors: Azure.Core.Foundations.Error;
}

@doc("Represents the job status.")
@fixed
enum JobStatus {
  // These values are all camel-cased in the original spec
  notStarted,
  running,
  succeeded,
  failed,
  cancelled,
  cancelling,
  partiallyCompleted,
}

@doc("Represents a warning that was encountered while executing the request.")
model JobWarning {
  @doc("The warning code.")
  code: string;

  @doc("The warning message.")
  message: string;
}

@doc("The details of a deployment job.")
@parentResource(Deployment)
model DeploymentJob {
  ...Job;

  @doc("The job ID.")
  @key("jobId")
  @segment("jobs")
  @visibility("read")
  id: string;
}

@doc("The details of a swap deployments job.")
@parentResource(Deployment)
model SwapDeploymentsJob {
  ...Job;

  @doc("The job ID.")
  @key("jobId")
  @visibility("read")
  @segment("swap/jobs")
  id: string;
}

@doc("The details of an exported project.")
model ExportedProject {}

@doc("Represents a supported language.")
model SupportedLanguage {
  @doc("The language name.")
  languageName: string;

  @doc("The language code. This is BCP-47 representation of a language. For example, \"en\" for English, \"en-gb\" for English (UK), \"es\" for Spanish etc.")
  languageCode: string;
}

@doc("A collection of SupportedLanguage resources.")
model SupportedLanguages is Azure.Core.Page<SupportedLanguage>;

@doc("Represents a training config version.")
model TrainingConfigVersion {
  @doc("Represents the version of the config.")
  trainingConfigVersion: string;

  @doc("Represents the training config version expiration date.")
  modelExpirationDate: plainDate;
}

@doc("A collection of TrainingConfigVersion resources.")
model TrainingConfigVersions is Azure.Core.Page<TrainingConfigVersion>;

// Operations

@doc("Export parameters.")
model ExportParams {
  @query
  @doc("The project file version.")
  projectFileVersion: string;
}

@doc("Training job parameters.")
model TrainingJobOptions {
  @doc("The model label.")
  modelLabel: string;
}

@doc("Swap deployment options.")
model SwapDeploymentsOptions {
  @doc("Represents the first deployment name.")
  firstDeploymentName: string;

  @doc("Represents the second deployment name.")
  secondDeploymentName: string;
}

@doc("Swap deployment parameters.")
model SwapDeploymentsParams {
  @doc("The body schema of the operation.")
  @body
  body: SwapDeploymentsOptions;
}

interface Projects {
  #suppress "@azure-tools/cadl-azure-core/long-running-polling-operation-required" "This operation does not follow the standard long-running operation pattern."
  @doc("Creates a new project or updates an existing one.")
  createOrUpdate is LongRunningResourceCreateOrUpdate<Project>;

  @doc("Gets the details of a project.")
  get is ResourceRead<Project>;

  #suppress "@azure-tools/cadl-azure-core/long-running-polling-operation-required" "This operation does not follow the standard long-running operation pattern."
  @doc("Deletes a project.")
  delete is LongRunningResourceDelete<Project>;

  @doc("Lists the existing projects.")
  listProjects is ResourceList<
    Project,
    {
      parameters: StandardListQueryParameters;
    }
  >;

  #suppress "@azure-tools/cadl-azure-core/long-running-polling-operation-required" "This operation does not follow the standard long-running operation pattern."
  @doc("Triggers a job to export a project's data.")
  export is ResourceAction<
    Project,
    ExportParams,
    TypeSpec.Http.AcceptedResponse & Foundations.LongRunningStatusLocation
  >;

  #suppress "@azure-tools/cadl-azure-core/long-running-polling-operation-required" "This operation does not follow the standard long-running operation pattern."
  // NOTE: `import` is a reserved keyword
  @doc("Triggers a job to export a project's data.")
  importx is ResourceAction<
    Project,
    ExportedProject,
    TypeSpec.Http.AcceptedResponse & Foundations.LongRunningStatusLocation
  >;

  #suppress "@azure-tools/cadl-azure-core/long-running-polling-operation-required" "This operation does not follow the standard long-running operation pattern."
  @doc("Triggers a training job for a project.")
  train is ResourceAction<
    Project,
    {
      @doc("The body of the request.")
      @body
      body: TrainingJobOptions;
    },
    TypeSpec.Http.AcceptedResponse & Foundations.LongRunningStatusLocation
  >;
}

interface Deployments {
  @doc("Gets the details of a deployment.")
  getDeployment is ResourceRead<Deployment>;

  #suppress "@azure-tools/cadl-azure-core/long-running-polling-operation-required" "This operation does not follow the standard long-running operation pattern."
  @doc("Creates a new deployment or replaces an existing one.")
  deployProject is LongRunningResourceCreateOrReplace<Deployment>;

  #suppress "@azure-tools/cadl-azure-core/long-running-polling-operation-required" "This operation does not follow the standard long-running operation pattern."
  @doc("Deletes a project deployment.")
  deleteDeployment is LongRunningResourceDelete<Deployment>;

  @doc("Lists the existing deployments.")
  listDeployments is ResourceList<Deployment>;

  #suppress "@azure-tools/cadl-azure-core/long-running-polling-operation-required" "This operation does not follow the standard long-running operation pattern."
  @doc("Swaps two existing deployments with each other.")
  @collectionAction(Deployment, "swap")
  swapDeployments is ResourceCollectionAction<
    Deployment,
    SwapDeploymentsParams,
    Azure.Core.Foundations.AcceptedResponse & Foundations.LongRunningStatusLocation
  >;
}

interface Jobs {
  @doc("Gets the status of an existing deployment job.")
  getDeploymentStatus is ResourceRead<DeploymentJob>;

  @doc("Gets the status of an existing swap deployment job.")
  getSwapDeploymentsStatus is ResourceRead<SwapDeploymentsJob>;
}

@route("projects/global/")
interface Global {
  #suppress "@azure-tools/cadl-azure-core/use-standard-operations" "This is an existing service that cannot be changed."
  @get
  @route("languages")
  @doc("Gets the supported languages.")
  getSupportedLanguages is Foundations.Operation<StandardListQueryParameters, SupportedLanguages>;

  #suppress "@azure-tools/cadl-azure-core/use-standard-operations" "This is an existing service that cannot be changed."
  @get
  @doc("Lists training configuration versions.")
  @route("training-config-versions")
  listTrainingConfigVersions is Foundations.Operation<
    StandardListQueryParameters,
    TrainingConfigVersions
  >;
}

// Missing operations

// "/authoring/analyze-text/projects/{projectName}/models": {
// "/authoring/analyze-text/projects/{projectName}/models/{trainedModelLabel}": {
// "/authoring/analyze-text/projects/{projectName}/models/{trainedModelLabel}/evaluation/result": {
// "/authoring/analyze-text/projects/{projectName}/models/{trainedModelLabel}/evaluation/summary-result": {

// Special endpoints

// "/authoring/analyze-text/projects/{projectName}/export/jobs/{jobId}": {
// "/authoring/analyze-text/projects/{projectName}/import/jobs/{jobId}": {
// "/authoring/analyze-text/projects/{projectName}/train/jobs": {
// "/authoring/analyze-text/projects/{projectName}/train/jobs/{jobId}": {
// "/authoring/analyze-text/projects/{projectName}/train/jobs/{jobId}/:cancel": {

// Under global

// "/authoring/analyze-text/projects/global/deletion-jobs/{jobId}": {

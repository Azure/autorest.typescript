import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  ProjectOutput,
  ErrorResponseOutput,
  OperationStatusOutput,
  CustomPageOutput,
  DeploymentOutput,
  DeploymentJobOutput,
  SwapDeploymentsJobOutput,
  PagedSupportedLanguageOutput,
  PagedTrainingConfigVersionOutput,
} from "./outputModels";

export interface ProjectsCreateOrUpdate200Headers {
  operationlocation: string;
}

/** The request has succeeded. */
export interface ProjectsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: ProjectOutput;
  headers: RawHttpHeaders & ProjectsCreateOrUpdate200Headers;
}

export interface ProjectsCreateOrUpdate201Headers {
  operationlocation: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface ProjectsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: ProjectOutput;
  headers: RawHttpHeaders & ProjectsCreateOrUpdate201Headers;
}

export interface ProjectsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ProjectsGet200Response extends HttpResponse {
  status: "200";
  body: ProjectOutput;
}

export interface ProjectsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ProjectsDelete202Headers {
  operationlocation?: string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface ProjectsDelete202Response extends HttpResponse {
  status: "202";
  body: OperationStatusOutput;
  headers: RawHttpHeaders & ProjectsDelete202Headers;
}

export interface ProjectsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ProjectsList200Response extends HttpResponse {
  status: "200";
  body: CustomPageOutput;
}

export interface ProjectsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ProjectsExport202Headers {
  operationlocation: string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface ProjectsExport202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & ProjectsExport202Headers;
}

export interface ProjectsExportDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ProjectsImportx202Headers {
  operationlocation: string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface ProjectsImportx202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & ProjectsImportx202Headers;
}

export interface ProjectsImportxDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ProjectsTrain202Headers {
  operationlocation: string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface ProjectsTrain202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & ProjectsTrain202Headers;
}

export interface ProjectsTrainDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DeploymentsGetDeployment200Response extends HttpResponse {
  status: "200";
  body: DeploymentOutput;
}

export interface DeploymentsGetDeploymentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface DeploymentsDeployProject200Headers {
  operationlocation: string;
}

/** The request has succeeded. */
export interface DeploymentsDeployProject200Response extends HttpResponse {
  status: "200";
  body: DeploymentOutput;
  headers: RawHttpHeaders & DeploymentsDeployProject200Headers;
}

export interface DeploymentsDeployProject201Headers {
  operationlocation: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface DeploymentsDeployProject201Response extends HttpResponse {
  status: "201";
  body: DeploymentOutput;
  headers: RawHttpHeaders & DeploymentsDeployProject201Headers;
}

export interface DeploymentsDeployProjectDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface DeploymentsDeleteDeployment202Headers {
  operationlocation?: string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface DeploymentsDeleteDeployment202Response extends HttpResponse {
  status: "202";
  body: OperationStatusOutput;
  headers: RawHttpHeaders & DeploymentsDeleteDeployment202Headers;
}

export interface DeploymentsDeleteDeploymentDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DeploymentsList200Response extends HttpResponse {
  status: "200";
  body: CustomPageOutput;
}

export interface DeploymentsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface DeploymentsSwapDeployments202Headers {
  operationlocation: string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface DeploymentsSwapDeployments202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & DeploymentsSwapDeployments202Headers;
}

export interface DeploymentsSwapDeploymentsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface JobsGetDeploymentStatus200Response extends HttpResponse {
  status: "200";
  body: DeploymentJobOutput;
}

export interface JobsGetDeploymentStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface JobsGetSwapDeploymentsStatus200Response extends HttpResponse {
  status: "200";
  body: SwapDeploymentsJobOutput;
}

export interface JobsGetSwapDeploymentsStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GlobalGetSupportedLanguages200Response extends HttpResponse {
  status: "200";
  body: PagedSupportedLanguageOutput;
}

export interface GlobalGetSupportedLanguagesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GlobalListTrainingConfigVersions200Response
  extends HttpResponse {
  status: "200";
  body: PagedTrainingConfigVersionOutput;
}

export interface GlobalListTrainingConfigVersionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

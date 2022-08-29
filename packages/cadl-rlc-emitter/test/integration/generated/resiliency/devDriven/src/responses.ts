import { HttpResponse } from "@azure-rest/core-client";
import {
  ProductOutput,
  ResourceOkResponseOutput,
  ErrorResponseOutput,
  LROProductOutput,
} from "./outputModels";

/** Returns {'received': <mode>} */
export interface DevDrivenGetModel200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Returns {'received': <mode>} */
export interface DevDrivenPostModel200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** The request has succeeded. */
export interface DevDrivenGetPages200Response extends HttpResponse {
  status: "200";
  body: ResourceOkResponseOutput;
}

export interface DevDrivenGetPagesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Initial response with ProvisioningState='Succeeded' */
export interface DevDrivenLro200Response extends HttpResponse {
  status: "200";
  body: LROProductOutput;
}

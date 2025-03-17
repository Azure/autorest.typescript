import { assert } from "chai";
import { emitResponsesFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("ARM template", () => {
  it("Response with ArmProviderActionAsync", async () => {
    const tspContent = `
      import "@azure-tools/typespec-azure-resource-manager";
      import "@typespec/versioning";
  
      using Azure.ResourceManager;
      using TypeSpec.Versioning;
  
      @armProviderNamespace
      @service(#{
        title: "App Compliance Automation Tool for Microsoft 365",
      })
      @versioned(Versions)
      @armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v3)
      namespace Microsoft.AppComplianceAutomation;
  
      /**
       * The available API versions.
       */
      enum Versions {
        /**
         * The 2024-06-27 API version.
         */
        @useDependency(Azure.ResourceManager.Versions.v1_0_Preview_1)
        @useDependency(Azure.Core.Versions.v1_0_Preview_1)
        v2024_06_27: "2024-06-27",
      }
  
      alias PlaceholderResource = Azure.ResourceManager.Foundations.ProxyResource;
      alias ArmProviderActionAsync<
        Request extends {} | void,
        Response extends {} | void,
        Parameters extends {} = {},
        LroHeaders extends TypeSpec.Reflection.Model = ArmLroLocationHeader &
          Azure.Core.Foundations.RetryAfterHeader
      > = Azure.ResourceManager.ArmResourceActionAsync<
        PlaceholderResource,
        Request,
        Response | ArmAcceptedLroResponse<"Accepted", LroHeaders>,
        BaseParameters = ApiVersionParameter,
        Parameters = Parameters,
        LroHeaders = ArmLroLocationHeader<Azure.Core.StatusMonitorPollingOptions<ArmOperationStatus>>
      >;
  
      @doc("Parameters for onboard operation")
      model OnboardRequest {
        /**
         * List of subscription ids to be onboarded
         */
        subscriptionIds: string[];
      }
  
      /**
       * Onboard subscriptions response.
       */
      @doc("Success. The response indicates given subscriptions has been onboarded.")
      model OnboardResponse {
        /**
         * List of subscription ids that are onboarded
         */
        subscriptionIds?: string[];
      }
  
      op upload is ArmProviderActionAsync<OnboardRequest, OnboardResponse>;
      `;
    const response = await emitResponsesFromTypeSpec(tspContent, {
      needAzureCore: false,
      withRawContent: true,
      needTCGC: true,
      withVersionedApiVersion: true
    });
    assert.ok(response);
    await assertEqualContent(
      response!.content,
      `
      import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
      import type { HttpResponse } from "@azure-rest/core-client";
      import type { OnboardResponseOutput, ErrorResponseOutput } from "./outputModels.js";
      
      /** Azure operation completed successfully. */
      export interface Upload200Response extends HttpResponse {
          status: "200";
          body: OnboardResponseOutput;
      }
      
      export interface Upload202Headers {
          /** The Location header contains the URL where the status of the long running operation can be checked. */
          "location"?: string;
          /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
          "retry-after"?: number;
      }
      
      /** Resource operation accepted. */
      export interface Upload202Response extends HttpResponse {
          status: "202";
          headers: RawHttpHeaders & Upload202Headers;
      }
      
      export interface UploadDefaultResponse extends HttpResponse {
          status: string;
          body: ErrorResponseOutput;
      }
      
      /** The final response for long-running upload operation */
      export interface UploadLogicalResponse extends HttpResponse {
          status: "200";
          body: OnboardResponseOutput;
      }`
    );
  });
});

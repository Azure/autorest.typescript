import assert from "assert";
import { emitModularClientContextFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

// TODO issue tracked https://github.com/Azure/typespec-azure/issues/1598
describe.skip("modular client context type", () => {
  it("handle with no default values in server", async () => {
    const tspContent = `
    import "@typespec/http";
    import "@typespec/rest";
    import "@typespec/versioning";
    import "@azure-tools/typespec-azure-core";

    using TypeSpec.Http;
    using TypeSpec.Rest;
    using TypeSpec.Versioning;
    using Azure.Core;
    using Azure.Core.Traits;
    
    @server(
      "{endpoint}/client/structure/{client}",
      "",
      {
        @doc("Need to be set as 'http://localhost:3000' in client.")
        endpoint: url,
    
        @doc("Need to be set as 'default', 'multi-client', 'renamed-operation', 'two-operation-group' in client.")
        client: ClientType = ClientType.Default,
      }
    )
    @service({
      title: "MultiClient"
    })
    @versioned(Client.Structure.Service.Versions)
    namespace Client.Structure.Service;

    enum Versions {
      /** Version 2022-08-31 */
      @useDependency(Azure.Core.Versions.v1_0_Preview_2)
      \`2022-08-30\`,
    }
    
    enum ClientType {
      Default: "default",
      MultiClient: "multi-client",
      RenamedOperation: "renamed-operation",
      TwoOperationGroup: "two-operation-group",
    }
    
    @route("/one")
    @post
    op one(): void;
        `;
    const clientContext = await emitModularClientContextFromTypeSpec(
      tspContent,
      {
        withRawContent: true
      }
    );
    assert.ok(clientContext);
    await assertEqualContent(
      clientContext?.getFullText()!,
      `
        import { ClientOptions, Client, getClient  } from "@azure-rest/core-client";
        import { logger } from "../logger.js";

        export interface ServiceContext extends Client {}
        
        /** Optional parameters for the client. */
        export interface ServiceClientOptionalParams  extends ClientOptions  {}
        
        export function createService(
          endpointParam: string,
          clientParam: ClientType,
          options: ServiceClientOptionalParams  = {}
        ): ServiceContext {
          const endpointUrl =
            options.endpoint ??
            options.baseUrl ??
            \`\${endpointParam}/client/structure/\${clientParam}\`;

          const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
          const userAgentPrefix = prefixFromOptions
            ? \`\$\{prefixFromOptions\} azsdk-js-api\`
            : "azsdk-js-api";
          const { apiVersion: _, ...updatedOptions } = {
            ...options,
            userAgentOptions: { userAgentPrefix },
            loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info }
          };
          const clientContext = getClient(endpointUrl, undefined, updatedOptions);
          clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
          if (options.apiVersion) {
            logger.warning(
              "This client does not support client api-version, please change it at the operation level",
            );
          }
          return clientContext;
        }`
    );
  });

  it("handle with default values in server", async () => {
    const clientContext = await emitModularClientContextFromTypeSpec(
      `
    import "@typespec/http";
    import "@typespec/rest";
    import "@typespec/versioning";
    import "@azure-tools/typespec-azure-core";

    using TypeSpec.Http;
    using TypeSpec.Rest;
    using TypeSpec.Versioning;
    using Azure.Core;
    using Azure.Core.Traits;
    
    @server(
      "{endpoint}/client/structure/{client}",
      "",
      {
        @doc("Need to be set as 'http://localhost:3000' in client.")
        endpoint: url = "http://localhost:3000",
    
        @doc("Need to be set as 'default', 'multi-client', 'renamed-operation', 'two-operation-group' in client.")
        client: ClientType = ClientType.Default,
      }
    )
    @service({
      title: "MultiClient"
    })
    @versioned(Client.Structure.Service.Versions)
    namespace Client.Structure.Service;

    enum Versions {
      /** Version 2022-08-31 */
      @useDependency(Azure.Core.Versions.v1_0_Preview_2)
      \`2022-08-30\`,
    }
    
    enum ClientType {
      Default: "default",
      MultiClient: "multi-client",
      RenamedOperation: "renamed-operation",
      TwoOperationGroup: "two-operation-group",
    }
    
    @route("/one")
    @post
    op one(): void;
        `,
      {
        withRawContent: true
      }
    );
    assert.ok(clientContext);
    await assertEqualContent(
      clientContext?.getFullText()!,
      `
        import { ClientOptions, Client, getClient } from "@azure-rest/core-client";
        import { logger } from "../logger.js";

        export interface ServiceContext extends Client {}
        
        /** Optional parameters for the client. */
        export interface ServiceClientOptionalParams  extends ClientOptions {
          /** Need to be set as 'http://localhost:3000' in client. */
          endpointParam?: string;
        }
        
        export function createService(
          clientParam: ClientType,
          options: ServiceClientOptionalParams  = {}
        ): ServiceContext {
          const endpointParam = options.endpointParam ?? "http://localhost:3000";
          const endpointUrl =
            options.endpoint ??
            options.baseUrl ??
            \`\${endpointParam}/client/structure/\${clientParam}\`;
          
          const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
          const userAgentPrefix = prefixFromOptions
            ? \`\$\{prefixFromOptions\} azsdk-js-api\`
            : "azsdk-js-api";
          const { apiVersion: _, ...updatedOptions } = {
            ...options,
            userAgentOptions: { userAgentPrefix },
            loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
          };
          const clientContext = getClient(endpointUrl, undefined, updatedOptions);
          clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
          if (options.apiVersion) {
            logger.warning(
              "This client does not support client api-version, please change it at the operation level",
            );
          }
          return clientContext;
        }`
    );
  });
});

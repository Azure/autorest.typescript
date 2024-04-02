import assert from "assert";
import { emitModularClientContextFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("modular client context type", () => {
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
      true
    );
    assert.ok(clientContext);
    await assertEqualContent(
      clientContext?.getFullText()!,
      `
        import { ClientOptions } from "@azure-rest/core-client";
        import { ServiceContext } from "../rest/index.js";
        import getClient from "../rest/index.js";
        
        export interface ServiceClientOptions extends ClientOptions {}
        
        export { ServiceContext } from "../rest/index.js";
        
        export function createService(
          endpointParam: string,
          clientParam: ClientType,
          options: ServiceClientOptions = {}
        ): ServiceContext {
          const clientContext = getClient(endpointParam, clientParam, options);
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
      true
    );
    assert.ok(clientContext);
    await assertEqualContent(
      clientContext?.getFullText()!,
      `
        import { ClientOptions } from "@azure-rest/core-client";
        import { ServiceContext } from "../rest/index.js";
        import getClient from "../rest/index.js";
        
        export interface ServiceClientOptions extends ClientOptions {}
        
        export { ServiceContext } from "../rest/index.js";
        
        export function createService(
          endpointParam: string,
          clientParam: ClientType,
          options: ServiceClientOptions = {}
        ): ServiceContext {
          const clientContext = getClient(endpointParam, clientParam, options);
          return clientContext;
        }`
    );
  });
});

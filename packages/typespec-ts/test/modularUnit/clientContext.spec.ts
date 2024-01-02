import assert from "assert";
import { emitModularClientContextFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("modular client context type", () => {
  it("handle with no default values in server", async () => {
    const tspContent = `
    import "@typespec/http";

    using TypeSpec.Http;
    
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
      title: "MultiClient",
      version: "1.0.0",
    })
    namespace Client.Structure.Service;
    
    enum ClientType {
      Default: "default",
      MultiClient: "multi-client",
      RenamedOperation: "renamed-operation",
      TwoOperationGroup: "two-operation-group",
    }
    
    @route("/one")
    @post
    op one(): void;
        `
    const clientContext = await emitModularClientContextFromTypeSpec(tspContent, true);
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
          endpoint: string,
          client: ClientType,
          options: ServiceClientOptions = {}
        ): ServiceContext {
          const clientContext = getClient(endpoint, client, options);
          return clientContext;
        }`
      );
  });

  it("handle with default values in server", async () => {
    const clientContext = await emitModularClientContextFromTypeSpec(`
    import "@typespec/http";

    using TypeSpec.Http;
    
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
      title: "MultiClient",
      version: "1.0.0",
    })
    namespace Client.Structure.Service;
    
    enum ClientType {
      Default: "default",
      MultiClient: "multi-client",
      RenamedOperation: "renamed-operation",
      TwoOperationGroup: "two-operation-group",
    }
    
    @route("/one")
    @post
    op one(): void;
        `, true);
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
          endpoint: string,
          client: ClientType,
          options: ServiceClientOptions = {}
        ): ServiceContext {
          const clientContext = getClient(endpoint, client, options);
          return clientContext;
        }`
      );
  });
});

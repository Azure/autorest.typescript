import { assert } from "chai";
import { getRLCClientsFromTypeSpec } from "../util/emitUtil.js";

describe("client utils get rlc clients", () => {
  it("should get the service client if no @client decorator", async () => {
    const content = `
    import "@azure-tools/typespec-client-generator-core";

    using Azure.ClientGenerator.Core;
    
    @service
    namespace MyService;
    
    interface MyInterface {
        op1(): void
    }

    interface MySecondInterface {
        op1(): void
    }
    `;
    const clients = await getRLCClientsFromTypeSpec(content);
    assert.equal(clients.length, 1);
    assert.equal(clients[0]?.name, "MyServiceClient");
  });

  it("should get the service client if more than one @client decorators are specified", async () => {
    const content = `
    import "@azure-tools/typespec-client-generator-core";

    using Azure.ClientGenerator.Core;
    
    @service
    namespace MyService;
    
    @client({
      name: "MyClient",
      service: MyService
    })
    interface MyInterface {
      op1(): void
    }
    
    @client({
      name: "MySecondClient",
      service: MyService
    })
    interface MySecondInterface {
      op2(): void
    }`;
    const clients = await getRLCClientsFromTypeSpec(content);
    assert.equal(clients.length, 1);
    assert.equal(clients[0]?.name, "MyServiceClient");
  });

  it("should get the @client client if only one @client decorator is applied to one service", async () => {
    const content = `
    import "@azure-tools/typespec-client-generator-core";

    using Azure.ClientGenerator.Core;
    
    @service
    namespace MyService;
    
    @client({
      name: "MyClient",
      service: MyService
    })
    interface MyInterface {
      op1(): void
    }
    `;
    const clients = await getRLCClientsFromTypeSpec(content);
    assert.equal(clients.length, 1);
    assert.equal(clients[0]?.name, "MyServiceClient");
  });

  // skip for https://github.com/Azure/autorest.typescript/issues/3664
  it.skip("should get the @client client if each services have only one @client decorators", async () => {
    const content = `
    import "@azure-tools/typespec-client-generator-core";

    using Azure.ClientGenerator.Core;
    
    @service
    namespace MyService {
      @client({
        name: "MyClient",
        service: MyService
      })
      interface MyInterface {
        op1(): void
      }
    }
    
    @service
    namespace MySecondService {
      @client({
        name: "MySecondClient",
        service: MySecondService
      })
      interface MySecondInterface {
        op1(): void
      }
    }
    `;
    const clients = await getRLCClientsFromTypeSpec(content);
    assert.equal(clients.length, 2);
    assert.equal(clients[0]?.name, "MyServiceClient");
    assert.equal(clients[1]?.name, "MySecondServiceClient");
  });

  // skip for https://github.com/Azure/autorest.typescript/issues/3664
  it.skip("should handle both 1:1 and 1:N mappings between @service and @client", async () => {
    const content = `
    import "@azure-tools/typespec-client-generator-core";

    using Azure.ClientGenerator.Core;
    
    @service
    namespace MyService {
      @client({
        name: "MyClient",
        service: MyService
      })
      interface MyInterface {
        op1(): void
      }
    }
    
    @service
    namespace MySecondService {
      @client({
        name: "MySecondClient",
        service: MySecondService
      })
      interface MySecondInterface {
        op1(): void
      }
      @client({
        name: "MyThirdClient",
        service: MySecondService
      })
      interface MyThirdInterface {
        op1(): void
      }
    }
    `;
    const clients = await getRLCClientsFromTypeSpec(content);
    assert.equal(clients.length, 2);
    assert.equal(clients[0]?.name, "MyServiceClient");
    assert.equal(clients[1]?.name, "MySecondServiceClient");
  });
});

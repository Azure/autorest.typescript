import { assert } from "chai";
import {
  createDpgContextTestHelper,
  createRLCEmitterTestHost,
  rlcEmitterFor
} from "../util/testUtil.js";
import { detectModelConflicts } from "../../src/utils/namespaceUtils.js";

describe("detectModelConflicts", () => {
  it("should return false when there are no model conflicts", async () => {
    const host = await rlcEmitterFor(
      `
      model Foo {
        prop: string;
      }

      model Bar {
        prop: string;
      }

      op test(@body body: Foo): Bar;
      `
    );
    const context = await createDpgContextTestHelper(host.program);
    const result = detectModelConflicts(context);
    assert.isFalse(result);
  });

  it("should return true when there are real model name conflicts", async () => {
    const host = await rlcEmitterFor(
      `
      import "@typespec/http";
      import "@typespec/rest";
      import "@typespec/versioning";
      import "@azure-tools/typespec-client-generator-core";
      import "@azure-tools/typespec-azure-core";

      using Http;
      using Rest;
      using Versioning;
      using Azure.ClientGenerator.Core;
      using Azure.Core;

      @service(#{
        title: "Test Service"
      })
      namespace TestService;

      namespace SubA {
        model Conflict {
          a: string;
        }
      }

      namespace SubB {
        model Conflict {
          b: string;
        }
      }

      op test(@body body: SubA.Conflict): SubB.Conflict;
      `,
      { withRawContent: true }
    );
    const context = await createDpgContextTestHelper(host.program);
    const result = detectModelConflicts(context);
    assert.isTrue(result);
  });

  it("should not treat API version enums as model conflicts in multi-service scenarios", async () => {
    const host = await createRLCEmitterTestHost();
    host.addTypeSpecFile(
      "main.tsp",
      `
      import "@typespec/http";
      import "@typespec/rest";
      import "@typespec/versioning";
      import "@azure-tools/typespec-client-generator-core";

      import "./serviceA.tsp";
      import "./serviceB.tsp";

      using Azure.ClientGenerator.Core;

      @client({
        name: "CombinedClient",
        service: [ServiceA, ServiceB],
      })
      namespace CombinedClient;
      `
    );
    host.addTypeSpecFile(
      "serviceA.tsp",
      `
      import "@typespec/http";
      import "@typespec/versioning";

      using Http;
      using Versioning;

      @service(#{
        title: "Service A"
      })
      @versioned(Versions)
      namespace ServiceA {
        enum Versions {
          v1: "v1",
        }

        model ModelA {
          prop: string;
        }

        op getA(): ModelA;
      }
      `
    );
    host.addTypeSpecFile(
      "serviceB.tsp",
      `
      import "@typespec/http";
      import "@typespec/versioning";

      using Http;
      using Versioning;

      @service(#{
        title: "Service B"
      })
      @versioned(Versions)
      namespace ServiceB {
        enum Versions {
          v2: "v2",
        }

        model ModelB {
          prop: string;
        }

        op getB(): ModelB;
      }
      `
    );
    await host.compile("./", { warningAsError: false });
    const context = await createDpgContextTestHelper(host.program);
    const result = detectModelConflicts(context);
    assert.isFalse(result);
  });
});

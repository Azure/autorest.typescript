import { assert } from "chai";
import ServiceDrivenOldClientFactory, {
  ServiceDrivenOldClient
} from "./generated/resiliency/srvDriven1/src/index.js";
import ServiceDrivenNewClientFactory, {
  ServiceDrivenNewClient
} from "./generated/resiliency/srvDriven2/src/index.js";
describe("ResiliencyDevDrivenClient Rest Client", () => {
  let client1: ServiceDrivenOldClient;

  beforeEach(() => {
    client1 = ServiceDrivenOldClientFactory("v1", {
      allowInsecureConnection: true
    });
  });

  let client2: ServiceDrivenNewClient;

  beforeEach(() => {
    client2 = ServiceDrivenNewClientFactory("v2", {
      allowInsecureConnection: true
    });
  });

  describe("resiliency with service driven", () => {
    it("should work with none parameter", async () => {
      const result1 = await client1
        .path("/add-optional-param/from-none")
        .head();

      assert.equal(result1.status, "204");
      const result2 = await client2.path("/add-optional-param/from-none").head({
        queryParameters: {
          "new-parameter": "new"
        }
      });

      assert.equal(result2.status, "204");
    });

    it("should work with one optional parameter", async () => {
      const result1 = await client1
        .path("/add-optional-param/from-one-optional")
        .get({
          queryParameters: {
            parameter: "optional"
          }
        });
      assert.equal(result1.status, "204");
      const result2 = await client2
        .path("/add-optional-param/from-one-optional")
        .get({
          queryParameters: {
            parameter: "optional",
            "new-parameter": "new"
          }
        });
      assert.equal(result2.status, "204");
    });

    it("should work with one required parameter", async () => {
      const result1 = await client1
        .path("/add-optional-param/from-one-required")
        .get({
          queryParameters: {
            parameter: "required"
          }
        });
      assert.equal(result1.status, "204");
      const result2 = await client2
        .path("/add-optional-param/from-one-required")
        .get({
          queryParameters: {
            parameter: "required",
            "new-parameter": "new"
          }
        });
      assert.equal(result2.status, "204");
    });
  });

  it("should work with add operation", async () => {
    const result2 = await client2.path("/add-operation").delete()
    assert.equal(result2.status, "204");
  });
});

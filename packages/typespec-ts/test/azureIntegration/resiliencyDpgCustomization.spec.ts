import { assert } from "chai";
import ServiceDrivenOldClientFactory, {
  ServiceDrivenOldClient
} from "./generated/resiliency/srv-driven-old/src/index.js";
import ServiceDrivenNewClientFactory, {
  ServiceDrivenNewClient
} from "./generated/resiliency/srv-driven-main/src/index.js";
describe("ResiliencyDevDrivenClient Rest Client", () => {
  let client11: ServiceDrivenOldClient;
  let client12: ServiceDrivenOldClient;
  let client21: ServiceDrivenNewClient;
  let client22: ServiceDrivenNewClient;

  beforeEach(() => {
    client11 = ServiceDrivenOldClientFactory("http://localhost:3003", "v1", {
      allowInsecureConnection: true,
      apiVersion: "v1"
    });
    client12 = ServiceDrivenOldClientFactory("http://localhost:3003", "v2", {
      allowInsecureConnection: true,
      apiVersion: "v1"
    });
    client21 = ServiceDrivenNewClientFactory("http://localhost:3003", "v2", {
      allowInsecureConnection: true,
      apiVersion: "v1"
    });
    client22 = ServiceDrivenNewClientFactory("http://localhost:3003", "v2", {
      allowInsecureConnection: true,
      apiVersion: "v2"
    });
  });

  describe("resiliency with service driven", () => {
    it("should work with none parameter", async () => {
      const result11 = await client11
        .path("/add-optional-param/from-none")
        .head();

      assert.equal(result11.status, "204");
      const result12 = await client12
        .path("/add-optional-param/from-none")
        .head();

      assert.equal(result12.status, "204");
      const result21 = await client21
        .path("/add-optional-param/from-none")
        .head({
          queryParameters: {
            "new-parameter": "new"
          }
        });

      assert.equal(result21.status, "204");
      const result22 = await client22
        .path("/add-optional-param/from-none")
        .head({
          queryParameters: {
            "new-parameter": "new"
          }
        });

      assert.equal(result22.status, "204");
    });

    it("should work with one optional parameter", async () => {
      const result11 = await client11
        .path("/add-optional-param/from-one-optional")
        .get({
          queryParameters: {
            parameter: "optional"
          }
        });
      assert.equal(result11.status, "204");
      const result12 = await client12
        .path("/add-optional-param/from-one-optional")
        .get({
          queryParameters: {
            parameter: "optional"
          }
        });
      assert.equal(result12.status, "204");
      const result21 = await client21
        .path("/add-optional-param/from-one-optional")
        .get({
          queryParameters: {
            parameter: "optional",
            "new-parameter": "new"
          }
        });
      assert.equal(result21.status, "204");
      const result22 = await client22
        .path("/add-optional-param/from-one-optional")
        .get({
          queryParameters: {
            parameter: "optional",
            "new-parameter": "new"
          }
        });
      assert.equal(result22.status, "204");
    });

    it("should work with one required parameter", async () => {
      const result11 = await client11
        .path("/add-optional-param/from-one-required")
        .get({
          queryParameters: {
            parameter: "required"
          }
        });
      assert.equal(result11.status, "204");
      const result12 = await client12
        .path("/add-optional-param/from-one-required")
        .get({
          queryParameters: {
            parameter: "required"
          }
        });
      assert.equal(result12.status, "204");
      const result21 = await client21
        .path("/add-optional-param/from-one-required")
        .get({
          queryParameters: {
            parameter: "required",
            "new-parameter": "new"
          }
        });
      assert.equal(result21.status, "204");
      const result22 = await client22
        .path("/add-optional-param/from-one-required")
        .get({
          queryParameters: {
            parameter: "required",
            "new-parameter": "new"
          }
        });
      assert.equal(result22.status, "204");
    });
  });

  it("should work with add operation", async () => {
    const client122 = ServiceDrivenOldClientFactory(
      "http://localhost:3003",
      "v2",
      {
        allowInsecureConnection: true,
        apiVersion: "v2"
      }
    );
    const result122 = await client122.pathUnchecked("/add-operation").delete();
    assert.equal(result122.status, "204");
    const result22 = await client22.path("/add-operation").delete();
    assert.equal(result22.status, "204");
  });
});

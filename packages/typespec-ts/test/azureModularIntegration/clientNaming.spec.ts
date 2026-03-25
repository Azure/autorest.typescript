import { describe, it, beforeEach } from "vitest";

import { assert } from "chai";
import { NamingClient } from "./generated/client/naming/src/index.js";
describe("NameAndEncodedName Client", () => {
  let client: NamingClient;

  beforeEach(() => {
    client = new NamingClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("should work with property client", async () => {
    await client.property.client({ clientName: true });
  });

  it("should work with property language", async () => {
    await client.property.language({ tsName: true });
  });

  it("should work with property compatibleWithEncodedName", async () => {
    await client.property.compatibleWithEncodedName({
      clientName: true
    });
  });

  it("should work with operation", async () => {
    await client.clientName();
  });

  it("should work with parameter", async () => {
    await client.parameter("true");
  });

  it("should work with header request", async () => {
    await client.header.request("true");
  });

  it("should work with header response", async () => {
    await client.header.response({
      onResponse: function (res) {
        assert.strictEqual(res.headers.get("default-name"), "true");
      }
    });
  });

  it("should work with model client", async () => {
    await client.modelClient.client({ defaultName: true });
  });

  it("should work with model language", async () => {
    await client.modelClient.language({ defaultName: true });
  });

  it("should work union enum name", async () => {
    await client.unionEnum.unionEnumName("value1", {
      requestOptions: { headers: { "content-type": "text/plain" } }
    });
  });

  it("should work with union enum member name", async () => {
    await client.unionEnum.unionEnumMemberName("value1", {
      requestOptions: { headers: { "content-type": "text/plain" } }
    });
  });
});

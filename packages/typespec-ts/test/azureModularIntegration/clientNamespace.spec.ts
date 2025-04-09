import { assert } from "chai";
import {
  ClientNamespaceFirstClient,
  ClientNamespaceSecondClient
} from "./generated/client/namespace/src/index.js";
describe("NameSpace Client", () => {
  let firstClient: ClientNamespaceFirstClient;
  let secondClient: ClientNamespaceSecondClient;

  beforeEach(() => {
    firstClient = new ClientNamespaceFirstClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
    secondClient = new ClientNamespaceSecondClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });
  it("should get Client ClientNamespace first", async () => {
    const result = await firstClient.getFirst();
    assert.strictEqual(result.name, "first");
  });
  it("should get Client ClientNamespace second", async () => {
    const result = await secondClient.getSecond();
    assert.strictEqual(result.type, "second");
  });
});

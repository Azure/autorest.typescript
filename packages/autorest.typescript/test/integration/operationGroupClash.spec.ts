import { OperationGroupClashClient } from "./generated/operationgroupclash/src";
import { assert } from "chai";

describe("Integration tests for OperationGroupClash", () => {
  let client: OperationGroupClashClient;

  it("should create a client successfully", async () => {
    const host: string = "host";
    const apiVersion: string = "apiVersion";
    client = new OperationGroupClashClient(host, apiVersion);
    assert.notEqual(client, null);
  });
});

import { IoTSpacesClient } from "./generated/iotspaces/src";
import { assert } from "chai";

describe("Integration tests for IoTSpaces", () => {
  let client: IoTSpacesClient;

  it("should create a client successfully", async () => {
    client = new IoTSpacesClient(undefined);
    assert.notEqual(client, null);
  });
});

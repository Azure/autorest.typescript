import { CustomUrlClient } from "./generated/customUrl/src/customUrlClient";
import * as assert from "assert";

describe("Custom Endpoint", () => {
  let client: CustomUrlClient;
  let clientOptions: any;
  beforeEach(() => {
    clientOptions = { host: "host:3000" };
    client = new CustomUrlClient(clientOptions);
  });

  it("should return 200", async () => {
    const response = await client.paths.getEmpty("local");
    assert.equal(response._response.status, 200);
  });
});

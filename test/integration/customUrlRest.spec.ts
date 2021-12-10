import CustomUrlRestClient, { CustomUrlRestClientRestClient } from "./generated/customUrlRest/src";
import { assert } from 'chai';

describe("CustomRest Endpoint", () => {
  let client: CustomUrlRestClientRestClient;
  let clientOptions: any;
  beforeEach(() => {
    clientOptions = { host: "host:3000", allowInsecureConnection: true };
    client = CustomUrlRestClient(clientOptions);
  });

  it("should return 200", async () => {
    const result = await client.path("/customuri", 'localhost').get();
    assert.strictEqual(result.status, '200');
  });
});

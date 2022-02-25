import CustomUrlRestClient, {
  CustomUrlRestClientLike
} from "./generated/customUrlRest/src";
import { assert } from "chai";

describe("CustomRest Endpoint", () => {
  let client: CustomUrlRestClientLike;
  let clientOptions: any;
  beforeEach(() => {
    clientOptions = { allowInsecureConnection: true };
    client = CustomUrlRestClient("host:3000", clientOptions);
  });

  it("should return 200", async () => {
    const result = await client.path("/customuri").get({
      pathParameters: {
        accountName: "local"
      }
    });
    assert.strictEqual(result.status, "200");
  });

  it("should return 200 for RLC shortcut", async () => {
    const result = await client.paths.getEmpty({
      pathParameters: {
        accountName: "local"
      }
    });
    assert.strictEqual(result.status, "200");
  });
});

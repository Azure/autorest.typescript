import RecursiveClientFactory, {
  Extension,
  RecursiveClient
} from "./generated/type/model/inheritance/recursive/src/index.js";
import { assert } from "chai";

const body: Extension = {
  level: 0,
  extension: [
    {
      level: 1,
      extension: [
        {
          level: 2
        }
      ]
    },
    {
      level: 1
    }
  ]
};
describe("Recursive Client", () => {
  let client: RecursiveClient;

  beforeEach(() => {
    client = RecursiveClientFactory({
      allowInsecureConnection: true
    });
  });

  it("Inheritance Recursive put test", async () => {
    const result = await client
      .path("/type/model/inheritance/recursive")
      .put({ body });
    assert.equal(result.status, "204");
  });

  it("Inheritance Recursive get test", async () => {
    const result = await client.path("/type/model/inheritance/recursive").get();
    assert.equal(result.status, "200");
  });
});

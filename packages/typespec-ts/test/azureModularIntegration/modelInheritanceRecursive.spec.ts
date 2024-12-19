import {
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
    client = new RecursiveClient({
      endpoint: "http://localhost:3006",
      allowInsecureConnection: true
    });
  });

  it("Inheritance Recursive put test", async () => {
    const result = await client.put(body);
    assert.isNotNull(result);
  });

  it("Inheritance Recursive get test", async () => {
    const result = await client.get();
    assert.isNotNull(result);
  });
});

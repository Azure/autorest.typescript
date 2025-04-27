import { PathClient } from "./generated/parameters/path/src/index.js";
describe("PathClient Client", () => {
  let client: PathClient;

  beforeEach(() => {
    client = new PathClient({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3002"
    });
  });

  it("path parameters normal", async () => {
    await client.normal("foo");
  });

  it("without path parameters optional", async () => {
    await client.optional();
  });
  it("with path parameters optional", async () => {
    await client.optional({ name: "foo" });
  });
});

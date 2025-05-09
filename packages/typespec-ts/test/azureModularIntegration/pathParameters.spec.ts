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

  it("without setting optional path parameter", async () => {
    await client.optional();
  });
  it("with setting path parameter as `foo`", async () => {
    await client.optional({ name: "foo" });
  });
});

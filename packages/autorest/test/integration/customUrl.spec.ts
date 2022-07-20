import { CustomUrlClient } from "./generated/customUrl/src";
import { responseStatusChecker } from "../utils/responseStatusChecker";

describe("Custom Endpoint", () => {
  let client: CustomUrlClient;
  let clientOptions: any;
  beforeEach(() => {
    clientOptions = { host: "host:3000", allowInsecureConnection: true };
    client = new CustomUrlClient(clientOptions);
  });

  it("should return 200", async () => {
    await client.paths.getEmpty("local", responseStatusChecker);
  });
});

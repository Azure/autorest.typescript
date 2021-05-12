import {
  CustomUrlMoreOptionsClient,
  CustomUrlMoreOptionsClientOptionalParams
} from "./generated/customUrlMoreOptions/src";
import { responseStatusChecker } from "../utils/responseStatusChecker";

describe("Custom URL More Options", () => {
  let client: CustomUrlMoreOptionsClient;

  beforeEach(() => {
    const clientOptions: CustomUrlMoreOptionsClientOptionalParams = {
      endpoint: "http://localhost:3000",
      dnsSuffix: "",
      allowInsecureConnection: true
    };
    client = new CustomUrlMoreOptionsClient("test12", clientOptions);
  });

  describe("Paths", () => {
    it("getEmpty", async () => {
      await client.paths.getEmpty("testVault", "testSecret", "key1", {
        ...responseStatusChecker,
        keyVersion: "v1"
      });
    });
  });
});

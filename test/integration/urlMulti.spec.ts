import { assert } from "chai";
import { UrlMultiClient } from "./generated/urlMulti/src";
import { responseStatusChecker } from "../utils/responseStatusChecker";

describe("URLMultiCollectionFormat", () => {
  let client: UrlMultiClient;

  beforeEach(() => {
    client = new UrlMultiClient({ allowInsecureConnection: true });
  });

  it("should handle arrayStringMultiEmpty", async () => {
    await client.queries.arrayStringMultiEmpty({
      ...responseStatusChecker,
      arrayQuery: []
    });
  });

  it("should handle arrayStringMultiNull", async () => {
    await client.queries.arrayStringMultiNull(responseStatusChecker);
  });

  it("should handle arrayStringMultiValid", async () => {
    await client.queries.arrayStringMultiValid({
      ...responseStatusChecker,
      arrayQuery: [
        "ArrayQuery1",
        "begin!*'();:@ &=+$,/?#[]end",
        null as any,
        ""
      ]
    });
  });
});

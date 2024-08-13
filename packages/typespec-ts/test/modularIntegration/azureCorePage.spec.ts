import { PageClient } from "./generated/azure/core/page/src/index.js";
import { assert } from "chai";

describe("Page Client", () => {
  let client: PageClient;

  beforeEach(() => {
    client = new PageClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });
  const validUser = {
    id: 1,
    name: "Madge",
    etag: "11bdc430-65e8-45ad-81d9-8ffa60d55b59"
  };
  // const responseBody = {
  //   value: [validUser]
  // };
  it.only("should list core page withPage", async () => {
    const result = (await client.listWithPage().next()).value;

    assert.deepStrictEqual(result, validUser);
  });

  // it("should list core page withParameters", async () => {
  //   const validBody = { inputName: "Madge" };
  //   const result = await client.listWithParameters(validBody, {
  //     another: "Second"
  //   });
  //   assert.deepStrictEqual(result, responseBody);
  // });

  // it("should get core page TwoModelsAsPageItem", async () => {
  //   const result1 = await client.listFirstItem();
  //   assert.deepStrictEqual(result1, {
  //     value: [{ id: 1 }]
  //   });
  //   const result2 = await client.listSecondItem();
  //   assert.deepStrictEqual(result2, {
  //     value: [{ name: "Madge" }]
  //   });
  // });

  // it("should list core page withCustomPageModel", async () => {
  //   const result = await client.listWithCustomPageModel();
  //   assert.deepStrictEqual(result, {
  //     items: [validUser]
  //   });
  // });
});

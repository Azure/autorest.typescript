// import VersioningRemovedClientFactory, {
//   VersioningRemovedClient
// } from "./generated/versioning/removed/src/index.js";
// import { assert } from "chai";
// describe("VersioningRemoved Rest Client", () => {
//   let client: VersioningRemovedClient;

//   beforeEach(() => {
//     client = VersioningRemovedClientFactory("http://localhost:3000", "v2", {
//       allowInsecureConnection: true
//     });
//   });

//   it("versioning removed test", async () => {
//     const result = await client.path("/v2").post({
//       body: {
//         prop: "foo",
//         enumProp: "enumMemberV2",
//         unionProp: "bar"
//       }
//     });
//     assert.strictEqual(result.status, "200");
//     assert.strictEqual(result.body.prop, "foo");
//     assert.strictEqual(result.body.enumProp, "enumMemberV2");
//     assert.strictEqual(result.body.unionProp, "bar");
//   });
// });

import {
    RenamedOperationClient
  } from "./generated/client/structure/renamed-operation/src/index.js";
  import { assert } from "chai";
  describe("Client Structure Renamed-Operation Rest Client", () => {
    let client: RenamedOperationClient;
  
    beforeEach(() => {
      client = new RenamedOperationClient("http://localhost:3000", "renamed-operation", {
        allowInsecureConnection: true
      });
    });
  
    it("should call operation one correctly", async () => {
      try {
        const result = await client.renamedOne();
        assert.strictEqual(result, undefined);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  
    it("should call operation two correctly", async () => {
      try {
        const result = await client.group.renamedTwo();
        assert.strictEqual(result, undefined);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  
    it("should call operation three correctly", async () => {
      try {
        const result = await client.renamedThree();
        assert.strictEqual(result, undefined);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  
    it("should call operation four correctly", async () => {
      try {
        const result = await client.group.renamedFour();
        assert.strictEqual(result, undefined);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  
    it("should call operation five correctly", async () => {
      try {
        const result = await client.renamedFive();
        assert.strictEqual(result, undefined);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  
    it("should call operation six correctly", async () => {
      try {
        const result = await client.group.renamedSix();
        assert.strictEqual(result, undefined);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });
  
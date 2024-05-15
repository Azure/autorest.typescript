import { assert } from "chai";
import { SpecialWordsClient } from "./generated/special-words/src/index.js";

describe("Special Words Client", () => {
  let client: SpecialWordsClient;

  beforeEach(() => {
    client = new SpecialWordsClient({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3002"
    });
  });

  it("should post modelProperties sameAsModel", async () => {
    try {
      const result = await client.modelProperties.sameAsModel({
        sameAsModel: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations And", async () => {
    try {
      const result = await client.operations.and();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations As", async () => {
    try {
      const result = await client.operations.as();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Assert", async () => {
    try {
      const result = await client.operations.assert();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Async", async () => {
    try {
      const result = await client.operations.async();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Await", async () => {
    try {
      const result = await client.operations.await();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Break", async () => {
    try {
      const result = await client.operations.break();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Class", async () => {
    try {
      const result = await client.operations.class();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Constructor", async () => {
    try {
      const result = await client.operations.constructor();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Continue", async () => {
    try {
      const result = await client.operations.continue();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Def", async () => {
    try {
      const result = await client.operations.def();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Del", async () => {
    try {
      const result = await client.operations.del();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Elif", async () => {
    try {
      const result = await client.operations.elif();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Else", async () => {
    try {
      const result = await client.operations.else();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Except", async () => {
    try {
      const result = await client.operations.except();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Exec", async () => {
    try {
      const result = await client.operations.exec();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Finally", async () => {
    try {
      const result = await client.operations.finally();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations For", async () => {
    try {
      const result = await client.operations.for();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations From", async () => {
    try {
      const result = await client.operations.from();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Global", async () => {
    try {
      const result = await client.operations.global();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations If", async () => {
    try {
      const result = await client.operations.if();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Import", async () => {
    try {
      const result = await client.operations.import();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations In", async () => {
    try {
      const result = await client.operations.in();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Is", async () => {
    try {
      const result = await client.operations.is();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Lambda", async () => {
    try {
      const result = await client.operations.lambda();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Not", async () => {
    try {
      const result = await client.operations.not();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Or", async () => {
    try {
      const result = await client.operations.or();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Pass", async () => {
    try {
      const result = await client.operations.pass();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Raise", async () => {
    try {
      const result = await client.operations.raise();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Return", async () => {
    try {
      const result = await client.operations.return();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Try", async () => {
    try {
      const result = await client.operations.try();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations While", async () => {
    try {
      const result = await client.operations.while();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations With", async () => {
    try {
      const result = await client.operations.with();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get operations Yield", async () => {
    try {
      const result = await client.operations.yield();
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withAnd", async () => {
    try {
      const result = await client.parameters.withAnd("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withAs", async () => {
    try {
      const result = await client.parameters.withAs("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withAssert", async () => {
    try {
      const result = await client.parameters.withAssert("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withAsync", async () => {
    try {
      const result = await client.parameters.withAsync("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withAwait", async () => {
    try {
      const result = await client.parameters.withAwait("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withBreak", async () => {
    try {
      const result = await client.parameters.withBreak("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withClass", async () => {
    try {
      const result = await client.parameters.withClass("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withConstructor", async () => {
    try {
      const result = await client.parameters.withConstructor("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withContinue", async () => {
    try {
      const result = await client.parameters.withContinue("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withDef", async () => {
    try {
      const result = await client.parameters.withDef("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withDel", async () => {
    try {
      const result = await client.parameters.withDel("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withElif", async () => {
    try {
      const result = await client.parameters.withElif("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withElse", async () => {
    try {
      const result = await client.parameters.withElse("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withExcept", async () => {
    try {
      const result = await client.parameters.withExcept("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withExec", async () => {
    try {
      const result = await client.parameters.withExec("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withFinally", async () => {
    try {
      const result = await client.parameters.withFinally("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withFor", async () => {
    try {
      const result = await client.parameters.withFor("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withFrom", async () => {
    try {
      const result = await client.parameters.withFrom("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withGlobal", async () => {
    try {
      const result = await client.parameters.withGlobal("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withIf", async () => {
    try {
      const result = await client.parameters.withIf("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withImport", async () => {
    try {
      const result = await client.parameters.withImport("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withIn", async () => {
    try {
      const result = await client.parameters.withIn("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withIs", async () => {
    try {
      const result = await client.parameters.withIs("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withLambda", async () => {
    try {
      const result = await client.parameters.withLambda("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withNot", async () => {
    try {
      const result = await client.parameters.withNot("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withOr", async () => {
    try {
      const result = await client.parameters.withOr("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withPass", async () => {
    try {
      const result = await client.parameters.withPass("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withRaise", async () => {
    try {
      const result = await client.parameters.withRaise("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withReturn", async () => {
    try {
      const result = await client.parameters.withReturn("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withTry", async () => {
    try {
      const result = await client.parameters.withTry("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withWhile", async () => {
    try {
      const result = await client.parameters.withWhile("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withWith", async () => {
    try {
      const result = await client.parameters.withWith("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withYield", async () => {
    try {
      const result = await client.parameters.withYield("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post parameters withCancellationToken", async () => {
    try {
      const result = await client.parameters.withCancellationToken("ok");
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withAnd", async () => {
    try {
      const result = await client.models.withAnd({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withAs", async () => {
    try {
      const result = await client.models.withAs({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withAssert", async () => {
    try {
      const result = await client.models.withAssert({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withAsync", async () => {
    try {
      const result = await client.models.withAsync({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withAwait", async () => {
    try {
      const result = await client.models.withAwait({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withBreak", async () => {
    try {
      const result = await client.models.withBreak({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withClass", async () => {
    try {
      const result = await client.models.withClass({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withConstructor", async () => {
    try {
      const result = await client.models.withConstructor({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withContinue", async () => {
    try {
      const result = await client.models.withContinue({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withDef", async () => {
    try {
      const result = await client.models.withDef({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withDel", async () => {
    try {
      const result = await client.models.withDel({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withElif", async () => {
    try {
      const result = await client.models.withElif({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withElse", async () => {
    try {
      const result = await client.models.withElse({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withExcept", async () => {
    try {
      const result = await client.models.withExcept({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withExec", async () => {
    try {
      const result = await client.models.withExec({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withFinally", async () => {
    try {
      const result = await client.models.withFinally({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withFor", async () => {
    try {
      const result = await client.models.withFor({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withFrom", async () => {
    try {
      const result = await client.models.withFrom({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withGlobal", async () => {
    try {
      const result = await client.models.withGlobal({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withIf", async () => {
    try {
      const result = await client.models.withIf({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withImport", async () => {
    try {
      const result = await client.models.withImport({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withIn", async () => {
    try {
      const result = await client.models.withIn({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withIs", async () => {
    try {
      const result = await client.models.withIs({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withLambda", async () => {
    try {
      const result = await client.models.withLambda({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withNot", async () => {
    try {
      const result = await client.models.withNot({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withOr", async () => {
    try {
      const result = await client.models.withOr({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withPass", async () => {
    try {
      const result = await client.models.withPass({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withRaise", async () => {
    try {
      const result = await client.models.withRaise({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withReturn", async () => {
    try {
      const result = await client.models.withReturn({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withTry", async () => {
    try {
      const result = await client.models.withTry({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withWhile", async () => {
    try {
      const result = await client.models.withWhile({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withWith", async () => {
    try {
      const result = await client.models.withWith({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post models withYield", async () => {
    try {
      const result = await client.models.withYield({
        name: "ok"
      });
      assert.equal(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});

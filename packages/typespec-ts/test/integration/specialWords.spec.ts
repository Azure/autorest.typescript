import SpecialWordsClientFactory, {
  SpecialWordsClient
} from "./generated/specialWords/src/index.js";
import { assert } from "chai";
describe("SpecialWordsClient Rest Client", () => {
  let client: SpecialWordsClient;

  beforeEach(() => {
    client = SpecialWordsClientFactory({ allowInsecureConnection: true });
  });

  describe("operations", () => {
    it("should get special words for operation `for`", async () => {
      try {
        const result = await client.path("/special-words/operations/for").get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `and`", async () => {
      try {
        const result = await client.path("/special-words/operations/and").get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `as`", async () => {
      try {
        const result = await client.path("/special-words/operations/as").get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `assert`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/assert")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `async`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/async")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `await`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/await")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `break`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/break")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `class`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/class")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `constructor`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/constructor")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `continue`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/continue")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `def`", async () => {
      try {
        const result = await client.path("/special-words/operations/def").get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `elif`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/elif")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `else`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/else")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `except`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/except")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `exec`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/exec")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `finally`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/finally")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `for`", async () => {
      try {
        const result = await client.path("/special-words/operations/for").get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `from`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/from")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `global`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/global")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `if`", async () => {
      try {
        const result = await client.path("/special-words/operations/if").get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `import`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/import")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `in`", async () => {
      try {
        const result = await client.path("/special-words/operations/in").get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `is`", async () => {
      try {
        const result = await client.path("/special-words/operations/is").get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `lambda`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/lambda")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `not`", async () => {
      try {
        const result = await client.path("/special-words/operations/not").get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `or`", async () => {
      try {
        const result = await client.path("/special-words/operations/or").get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `pass`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/pass")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `raise`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/raise")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `return`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/return")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `try`", async () => {
      try {
        const result = await client.path("/special-words/operations/try").get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `while`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/while")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `with`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/with")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `yield`", async () => {
      try {
        const result = await client
          .path("/special-words/operations/yield")
          .get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });

  describe("parameters", () => {
    it("should get special words for operation `for`", async () => {
      try {
        const result = await client.path("/special-words/parameters/for").get({
          queryParameters: {
            for: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `and`", async () => {
      try {
        const result = await client.path("/special-words/parameters/and").get({
          queryParameters: {
            and: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `as`", async () => {
      try {
        const result = await client.path("/special-words/parameters/as").get({
          queryParameters: {
            as: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `assert`", async () => {
      try {
        const result = await client
          .path("/special-words/parameters/assert")
          .get({
            queryParameters: {
              assert: "ok"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `async`", async () => {
      try {
        const result = await client
          .path("/special-words/parameters/async")
          .get({
            queryParameters: {
              async: "ok"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `await`", async () => {
      try {
        const result = await client
          .path("/special-words/parameters/await")
          .get({
            queryParameters: {
              await: "ok"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `break`", async () => {
      try {
        const result = await client
          .path("/special-words/parameters/break")
          .get({
            queryParameters: {
              break: "ok"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `class`", async () => {
      try {
        const result = await client
          .path("/special-words/parameters/class")
          .get({
            queryParameters: {
              class: "ok"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `constructor`", async () => {
      try {
        const result = await client
          .path("/special-words/parameters/constructor")
          .get({
            queryParameters: {
              constructor: "ok" as any
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `continue`", async () => {
      try {
        const result = await client
          .path("/special-words/parameters/continue")
          .get({
            queryParameters: {
              continue: "ok"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `def`", async () => {
      try {
        const result = await client.path("/special-words/parameters/def").get({
          queryParameters: {
            def: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `elif`", async () => {
      try {
        const result = await client.path("/special-words/parameters/elif").get({
          queryParameters: {
            elif: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `else`", async () => {
      try {
        const result = await client.path("/special-words/parameters/else").get({
          queryParameters: {
            else: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `except`", async () => {
      try {
        const result = await client
          .path("/special-words/parameters/except")
          .get({
            queryParameters: {
              except: "ok"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `exec`", async () => {
      try {
        const result = await client.path("/special-words/parameters/exec").get({
          queryParameters: {
            exec: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `finally`", async () => {
      try {
        const result = await client
          .path("/special-words/parameters/finally")
          .get({
            queryParameters: {
              finally: "ok"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `for`", async () => {
      try {
        const result = await client.path("/special-words/parameters/for").get({
          queryParameters: {
            for: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `from`", async () => {
      try {
        const result = await client.path("/special-words/parameters/from").get({
          queryParameters: {
            from: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `global`", async () => {
      try {
        const result = await client
          .path("/special-words/parameters/global")
          .get({
            queryParameters: {
              global: "ok"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `if`", async () => {
      try {
        const result = await client.path("/special-words/parameters/if").get({
          queryParameters: {
            if: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `import`", async () => {
      try {
        const result = await client
          .path("/special-words/parameters/import")
          .get({
            queryParameters: {
              import: "ok"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `in`", async () => {
      try {
        const result = await client.path("/special-words/parameters/in").get({
          queryParameters: {
            in: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `is`", async () => {
      try {
        const result = await client.path("/special-words/parameters/is").get({
          queryParameters: {
            is: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `lambda`", async () => {
      try {
        const result = await client
          .path("/special-words/parameters/lambda")
          .get({
            queryParameters: {
              lambda: "ok"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `not`", async () => {
      try {
        const result = await client.path("/special-words/parameters/not").get({
          queryParameters: {
            not: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `or`", async () => {
      try {
        const result = await client.path("/special-words/parameters/or").get({
          queryParameters: {
            or: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `pass`", async () => {
      try {
        const result = await client.path("/special-words/parameters/pass").get({
          queryParameters: {
            pass: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `raise`", async () => {
      try {
        const result = await client
          .path("/special-words/parameters/raise")
          .get({
            queryParameters: {
              raise: "ok"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `return`", async () => {
      try {
        const result = await client
          .path("/special-words/parameters/return")
          .get({
            queryParameters: {
              return: "ok"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `try`", async () => {
      try {
        const result = await client.path("/special-words/parameters/try").get({
          queryParameters: {
            try: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `while`", async () => {
      try {
        const result = await client
          .path("/special-words/parameters/while")
          .get({
            queryParameters: {
              while: "ok"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `with`", async () => {
      try {
        const result = await client.path("/special-words/parameters/with").get({
          queryParameters: {
            with: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `yield`", async () => {
      try {
        const result = await client
          .path("/special-words/parameters/yield")
          .get({
            queryParameters: {
              yield: "ok"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });

  describe("models", () => {
    it("should get special words for operation `for`", async () => {
      try {
        const result = await client.path("/special-words/models/for").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `and`", async () => {
      try {
        const result = await client.path("/special-words/models/and").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `as`", async () => {
      try {
        const result = await client.path("/special-words/models/as").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `assert`", async () => {
      try {
        const result = await client.path("/special-words/models/assert").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `async`", async () => {
      try {
        const result = await client.path("/special-words/models/async").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `await`", async () => {
      try {
        const result = await client.path("/special-words/models/await").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `break`", async () => {
      try {
        const result = await client.path("/special-words/models/break").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `class`", async () => {
      try {
        const result = await client.path("/special-words/models/class").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `constructor`", async () => {
      try {
        const result = await client
          .path("/special-words/models/constructor")
          .post({
            body: {
              name: "ok"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `continue`", async () => {
      try {
        const result = await client
          .path("/special-words/models/continue")
          .post({
            body: {
              name: "ok"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `def`", async () => {
      try {
        const result = await client.path("/special-words/models/def").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `elif`", async () => {
      try {
        const result = await client.path("/special-words/models/elif").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `else`", async () => {
      try {
        const result = await client.path("/special-words/models/else").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `except`", async () => {
      try {
        const result = await client.path("/special-words/models/except").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `exec`", async () => {
      try {
        const result = await client.path("/special-words/models/exec").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `finally`", async () => {
      try {
        const result = await client.path("/special-words/models/finally").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `for`", async () => {
      try {
        const result = await client.path("/special-words/models/for").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `from`", async () => {
      try {
        const result = await client.path("/special-words/models/from").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `global`", async () => {
      try {
        const result = await client.path("/special-words/models/global").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `if`", async () => {
      try {
        const result = await client.path("/special-words/models/if").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `import`", async () => {
      try {
        const result = await client.path("/special-words/models/import").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `in`", async () => {
      try {
        const result = await client.path("/special-words/models/in").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `is`", async () => {
      try {
        const result = await client.path("/special-words/models/is").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `lambda`", async () => {
      try {
        const result = await client.path("/special-words/models/lambda").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `not`", async () => {
      try {
        const result = await client.path("/special-words/models/not").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `or`", async () => {
      try {
        const result = await client.path("/special-words/models/or").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `pass`", async () => {
      try {
        const result = await client.path("/special-words/models/pass").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `raise`", async () => {
      try {
        const result = await client.path("/special-words/models/raise").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `return`", async () => {
      try {
        const result = await client.path("/special-words/models/return").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `try`", async () => {
      try {
        const result = await client.path("/special-words/models/try").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `while`", async () => {
      try {
        const result = await client.path("/special-words/models/while").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should get special words for operation `with`", async () => {
      try {
        const result = await client.path("/special-words/models/with").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
    it("should get special words for operation `yield`", async () => {
      try {
        const result = await client.path("/special-words/models/yield").post({
          body: {
            name: "ok"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });
});

import { equal, fail, ok } from "assert";
import { BodyStringClient } from "../../generated/bodyString/src/bodyStringClient";

describe("Integration tests for BodyString", () => {
  describe("getMbcs", () => {
    it("should receive an UTF8 string in the response body", async () => {
      const client = new BodyStringClient();
      try {
        const result = await client.string.getMbcs();
        equal(
          result.body,
          "啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€"
        );
      } catch (error) {
        fail(error);
      }
    }).timeout(5000);
  });

  describe("putMbcs", () => {
    it("should send an UTF8 string in the request body", async () => {
      const client = new BodyStringClient();
      const utf8String =
        "啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€";
      try {
        await client.string.putMbcs(utf8String);
        ok(true, "Operation executed with no errors");
      } catch (error) {
        fail(error);
      }
    }).timeout(5000);
  });
});

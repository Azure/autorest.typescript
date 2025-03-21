import "@typespec/http";
import "@typespec/rest";

@service(#{
  title: "Widget Service",
})
namespace DemoService;

using TypeSpec.Http;
using TypeSpec.Rest;
model Test {
  prop: string;
}

interface A {
  @route("/test1")
  test1(a: string, b: string, c: string): void;

  @route("/test2")
  test2(...Test): void;

  @route("/test3")
  test3(
    @body body: {
      prop: string;
    },
  ): void;

  @route("/test4")
  test4(
    @body body: {
      ...Test;
    },
  ): void;
}

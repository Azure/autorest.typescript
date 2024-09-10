import "@typespec/rest";
import "@typespec/http";

using TypeSpec.Rest;
using TypeSpec.Http;

@service({})
namespace Foo;

model A {
  prop1: string;
}

@route("b")
namespace B {
  @route("e")
  namespace E {
    model A {
      prop3: string;
    }
    interface C {
      @route("bec")
      op opBEC(@body body: A):  { @body body: {} };
    }
    op foo(@body body: A):  { @body body: {} };
  }
  op foo(@body body: A):  { @body body: {} };
}

@route("/d")
interface D {
  @doc("show example opD")
  op opD(@body body: A):  { @body body: {} };
}
@doc("show example opTopLevel")
op opTopLevel(@body body: A):  { @body body: {} };

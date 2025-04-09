import "@typespec/rest";
import "@typespec/http";

using TypeSpec.Rest;
using TypeSpec.Http;

@service(#{})
namespace Foo;

model A {
  prop1: string;
}

@route("b")
namespace B {
  model A {
    prop2: string;
  }
  @route("c")
  interface C {
    op op1(@body body: A): void;
  }
  @route("e")
  namespace E {
    model A {
      prop3: string;
    }
    interface C {
      op op1(@body body: A): void
    }
  }
  op op1(@body body: A): void;
}

@route("/d")
interface D {
  op op1(@body body: A): void;
}
op op1(@body body: A): void;

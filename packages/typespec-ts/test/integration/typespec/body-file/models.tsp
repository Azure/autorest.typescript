import "@typespec/rest";
import "@typespec/http";

using TypeSpec.Rest;
using TypeSpec.Http;

namespace TypeScript.Testing.BodyFile;

@error
model Error {
  status?: int32;
  message?: string;
}

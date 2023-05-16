import "@typespec/rest";
import "@typespec/http";

using TypeSpec.Rest;
using TypeSpec.Http;

namespace TypeScript.Test.BodyFormData;

@error
model Error {
  status?: int32;
  message?: string;
}

model Paths1MqqetpFormdataStreamUploadfilePostRequestbodyContentMultipartFormDataSchema {
  @doc("File to upload.")
  fileContent: bytes;

  @doc("File name to upload. Name has to be spelled exactly as written here.")
  fileName: string;
}

model Paths1P3Stk3FormdataStreamUploadfilesPostRequestbodyContentMultipartFormDataSchema {
  @doc("Files to upload.")
  fileContent: bytes[];
}

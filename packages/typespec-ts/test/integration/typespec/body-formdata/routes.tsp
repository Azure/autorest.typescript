import "@azure-tools/typespec-azure-core";
import "@typespec/rest";
import "./models.tsp";

using TypeSpec.Rest;
using TypeSpec.Http;

namespace TypeScript.Test.BodyFormData;

interface formdataOperations {
  @doc("Upload file")
  @route("/formdata/stream/uploadfile")
  @post
  UploadFile is Azure.Core.Foundations.Operation<
    {
      @doc("File to upload.")
      @body
      fileContent: bytes;

      @doc("File name to upload. Name has to be spelled exactly as written here.")
      @body
      fileName: string;

      @doc("Accept header")
      @header
      Accept: "application/octet-stream, application/json";
    },
    void
  >;

  @doc("Upload file")
  @route("/formdata/stream/uploadfile")
  @put
  UploadFileViaBody is Azure.Core.Foundations.Operation<
    {
      @doc("File to upload.")
      @body
      fileContent: bytes;

      @doc("Accept header")
      @header
      Accept: "application/octet-stream, application/json";
    },
    void
  >;

  @doc("Upload multiple files")
  @route("/formdata/stream/uploadfiles")
  @post
  UploadFiles is Azure.Core.Foundations.Operation<
    {
      @doc("Files to upload.")
      @body
      fileContent: bytes[];

      @doc("Accept header")
      @header
      Accept: "application/octet-stream, application/json";
    },
    void
  >;
}

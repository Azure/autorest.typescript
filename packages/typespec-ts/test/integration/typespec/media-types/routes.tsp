import "@azure-tools/typespec-azure-core";
import "@typespec/rest";
import "./models.tsp";

using TypeSpec.Rest;
using TypeSpec.Http;

namespace TypeScript.Test.MediaTypes;

@doc("Analyze body, that could be different media types.")
@route("/mediatypes/analyze")
@post
op AnalyzeBody is Azure.Core.Foundations.Operation<
  {
    @doc("Upload file type")
    @header
    `Content-Type`: ContentType;

    @doc("Input parameter.")
    @body
    input: bytes;
  },
  void
>;

@doc("Analyze body, that could be different media types.")
@route("/mediatypes/analyze")
@post
op AnalyzeBody is Azure.Core.Foundations.Operation<
  {
    @doc("Upload file type")
    @header
    `Content-Type`: ContentType;

    @doc("Input parameter.")
    @body
    input: bytes;
  },
  void
>;

@doc("""
Analyze body, that could be different media types. Adds to AnalyzeBody by not
having an accept type.
""")
@route("/mediatypes/analyzeNoAccept")
@post
op AnalyzeBodyNoAcceptHeader is Azure.Core.Foundations.Operation<
  {
    @doc("Upload file type")
    @header
    `Content-Type`: ContentType;

    @doc("Input parameter.")
    @body
    input: bytes;
  },
  void
>;

@doc("""
Analyze body, that could be different media types. Adds to AnalyzeBody by not
having an accept type.
""")
@route("/mediatypes/analyzeNoAccept")
@post
op AnalyzeBodyNoAcceptHeader is Azure.Core.Foundations.Operation<
  {
    @doc("Upload file type")
    @header
    `Content-Type`: ContentType;

    @doc("Input parameter.")
    @body
    input: bytes;
  },
  void
>;

@doc("""
Pass in contentType 'text/plain; charset=UTF-8' to pass test. Value for input
does not matter
""")
@route("/mediatypes/contentTypeWithEncoding")
@post
op contentTypeWithEncoding is Azure.Core.Foundations.Operation<
  {
    @doc("Input parameter.")
    @body
    input: string;
  },
  void
>;

@doc("""
Binary body with two content types. Pass in of {'hello': 'world'} for the
application/json content type, and a byte stream of 'hello, world!' for
application/octet-stream.
""")
@route("/mediatypes/binaryBodyTwoContentTypes")
@post
op binaryBodyWithTwoContentTypes is Azure.Core.Foundations.Operation<
  {
    @doc("Upload file type")
    @header
    `Content-Type`: ContentType1;

    @doc("The payload body.")
    @body
    message: bytes;

    @doc("Accept header")
    @header
    Accept: "text/plain";
  },
  void
>;

@doc("""
Binary body with three content types. Pass in string 'hello, world' with
content type 'text/plain', {'hello': world'} with content type
'application/json' and a byte string for 'application/octet-stream'.
""")
@route("/mediatypes/binaryBodyThreeContentTypes")
@post
op binaryBodyWithThreeContentTypes is Azure.Core.Foundations.Operation<
  {
    @doc("Upload file type")
    @header
    `Content-Type`: ContentType2;

    @doc("The payload body.")
    @body
    message: bytes;

    @doc("Accept header")
    @header
    Accept: "text/plain";
  },
  void
>;

@doc("""
Body with three types. Can be stream, string, or JSON. Pass in string 'hello,
world' with content type 'text/plain', {'hello': world'} with content type
'application/json' and a byte string for 'application/octet-stream'.
""")
@route("/mediatypes/bodyThreeTypes")
@post
op bodyThreeTypes is Azure.Core.Foundations.Operation<
  {
    @doc("The payload body.")
    @body
    message: bytes;

    @doc("Accept header")
    @header
    Accept: "text/plain";
  },
  void
>;

@doc("""
Body with three types. Can be stream, string, or JSON. Pass in string 'hello,
world' with content type 'text/plain', {'hello': world'} with content type
'application/json' and a byte string for 'application/octet-stream'.
""")
@route("/mediatypes/bodyThreeTypes")
@post
op bodyThreeTypes is Azure.Core.Foundations.Operation<
  {
    @doc("The payload body.")
    @body
    message: bytes;

    @doc("Accept header")
    @header
    Accept: "text/plain";
  },
  void
>;

@doc("""
Body with three types. Can be stream, string, or JSON. Pass in string 'hello,
world' with content type 'text/plain', {'hello': world'} with content type
'application/json' and a byte string for 'application/octet-stream'.
""")
@route("/mediatypes/bodyThreeTypes")
@post
op bodyThreeTypes is Azure.Core.Foundations.Operation<
  {
    @doc("The payload body.")
    @body
    message: bytes;

    @doc("Accept header")
    @header
    Accept: "text/plain";
  },
  void
>;

@doc("Body that's either text/plain or application/json")
@route("/mediatypes/textAndJson")
@post
op putTextAndJsonBody is Azure.Core.Foundations.Operation<
  {
    @doc("Upload file type")
    @header
    `Content-Type`: ContentType3;

    @doc("The payload body.")
    @body
    message: string;

    @doc("Accept header")
    @header
    Accept: "text/plain";
  },
  void
>;

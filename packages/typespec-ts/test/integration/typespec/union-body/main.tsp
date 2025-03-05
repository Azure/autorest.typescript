import "@typespec/rest";

using TypeSpec.Http;

// PAYMENT_METHODS
enum PAYMENT_METHODS {
  CREDIT_CARD: "01",
}

model CommonRegistrationRequest {
  payMethod: PAYMENT_METHODS,
}

model RequestRegisterCC extends CommonRegistrationRequest {
  payMethod: PAYMENT_METHODS.CREDIT_CARD,
}

model RequestRegisterVA {
  prop: string;
}

model ReturnResponse {
  @body body: RequestRegisterCC | RequestRegisterVA
}

@service(#{})
@route("/")
namespace NicepayPlatform {
  @post
  @route("/request-union-body")
  op requestUnionBody(@body request: RequestRegisterCC | RequestRegisterVA): {@body _ : {};};

  @get
  @route("/response-union-body")
  op responseUnionBody(): ReturnResponse;
}

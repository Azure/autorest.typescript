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

@service({})
@route("/")
namespace NicepayPlatform {
  @post
  @route("/registration")
  op Registration(@body request: RequestRegisterCC | RequestRegisterVA): {};
}
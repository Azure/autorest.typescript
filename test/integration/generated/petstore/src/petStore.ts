import * as coreHttp from "@azure/core-http";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { PetStoreContext } from "./petStoreContext";
import {
  PetStoreOptionalParams,
  PetStoreAddPetUsingByteArrayOptionalParams,
  PetStoreAddPetOptionalParams,
  PetStoreUpdatePetOptionalParams,
  PetStoreFindPetsByStatusOptionalParams,
  PetStoreFindPetsByStatusResponse,
  PetStoreFindPetsByTagsOptionalParams,
  PetStoreFindPetsByTagsResponse,
  PetStoreFindPetsWithByteArrayOptionalParams,
  PetStoreFindPetsWithByteArrayResponse,
  PetStoreGetPetByIdOptionalParams,
  PetStoreGetPetByIdResponse,
  PetStoreUpdatePetWithFormOptionalParams,
  PetStoreDeletePetOptionalParams,
  PetStoreUploadFileOptionalParams,
  PetStoreGetInventoryOptionalParams,
  PetStoreGetInventoryResponse,
  PetStorePlaceOrderOptionalParams,
  PetStorePlaceOrderResponse,
  PetStoreGetOrderByIdOptionalParams,
  PetStoreGetOrderByIdResponse,
  PetStoreDeleteOrderOptionalParams,
  PetStoreCreateUserOptionalParams,
  PetStoreCreateUsersWithArrayInputOptionalParams,
  PetStoreCreateUsersWithListInputOptionalParams,
  PetStoreLoginUserOptionalParams,
  PetStoreLoginUserResponse,
  PetStoreLogoutUserOptionalParams,
  PetStoreGetUserByNameOptionalParams,
  PetStoreGetUserByNameResponse,
  PetStoreUpdateUserOptionalParams,
  PetStoreDeleteUserOptionalParams
} from "./models";

export class PetStore extends PetStoreContext {
  /**
   * Initializes a new instance of the PetStore class.
   * @param options The parameter options
   */
  constructor(options?: PetStoreOptionalParams) {
    super(options);
  }

  /**
   * Fake endpoint to test byte array in body parameter for adding a new pet to the store
   * @param options The options parameters.
   */
  addPetUsingByteArray(
    options?: PetStoreAddPetUsingByteArrayOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      addPetUsingByteArrayOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Adds a new pet to the store. You may receive an HTTP invalid input if your pet is invalid.
   * @param options The options parameters.
   */
  addPet(
    options?: PetStoreAddPetOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      addPetOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Update an existing pet
   * @param options The options parameters.
   */
  updatePet(
    options?: PetStoreUpdatePetOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      updatePetOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Multiple status values can be provided with comma seperated strings
   * @param options The options parameters.
   */
  findPetsByStatus(
    options?: PetStoreFindPetsByStatusOptionalParams
  ): Promise<PetStoreFindPetsByStatusResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      findPetsByStatusOperationSpec
    ) as Promise<PetStoreFindPetsByStatusResponse>;
  }

  /**
   * Muliple tags can be provided with comma seperated strings. Use tag1, tag2, tag3 for testing.
   * @param options The options parameters.
   */
  findPetsByTags(
    options?: PetStoreFindPetsByTagsOptionalParams
  ): Promise<PetStoreFindPetsByTagsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      findPetsByTagsOperationSpec
    ) as Promise<PetStoreFindPetsByTagsResponse>;
  }

  /**
   * Returns a pet when ID < 10.  ID > 10 or nonintegers will simulate API error conditions
   * @param petId ID of pet that needs to be fetched
   * @param options The options parameters.
   */
  findPetsWithByteArray(
    petId: number,
    options?: PetStoreFindPetsWithByteArrayOptionalParams
  ): Promise<PetStoreFindPetsWithByteArrayResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      petId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      findPetsWithByteArrayOperationSpec
    ) as Promise<PetStoreFindPetsWithByteArrayResponse>;
  }

  /**
   * Returns a pet when ID < 10.  ID > 10 or nonintegers will simulate API error conditions
   * @param petId ID of pet that needs to be fetched
   * @param options The options parameters.
   */
  getPetById(
    petId: number,
    options?: PetStoreGetPetByIdOptionalParams
  ): Promise<PetStoreGetPetByIdResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      petId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getPetByIdOperationSpec
    ) as Promise<PetStoreGetPetByIdResponse>;
  }

  /**
   * Updates a pet in the store with form data
   * @param petId ID of pet that needs to be updated
   * @param options The options parameters.
   */
  updatePetWithForm(
    petId: string,
    options?: PetStoreUpdatePetWithFormOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      petId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      updatePetWithFormOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Deletes a pet
   * @param petId Pet id to delete
   * @param options The options parameters.
   */
  deletePet(
    petId: number,
    options?: PetStoreDeletePetOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      petId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      deletePetOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * uploads an image
   * @param petId ID of pet to update
   * @param options The options parameters.
   */
  uploadFile(
    petId: number,
    options?: PetStoreUploadFileOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      petId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      uploadFileOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Returns a map of status codes to quantities
   * @param options The options parameters.
   */
  getInventory(
    options?: PetStoreGetInventoryOptionalParams
  ): Promise<PetStoreGetInventoryResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getInventoryOperationSpec
    ) as Promise<PetStoreGetInventoryResponse>;
  }

  /**
   * Place an order for a pet
   * @param options The options parameters.
   */
  placeOrder(
    options?: PetStorePlaceOrderOptionalParams
  ): Promise<PetStorePlaceOrderResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      placeOrderOperationSpec
    ) as Promise<PetStorePlaceOrderResponse>;
  }

  /**
   * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
   * @param orderId ID of pet that needs to be fetched
   * @param options The options parameters.
   */
  getOrderById(
    orderId: string,
    options?: PetStoreGetOrderByIdOptionalParams
  ): Promise<PetStoreGetOrderByIdResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      orderId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getOrderByIdOperationSpec
    ) as Promise<PetStoreGetOrderByIdResponse>;
  }

  /**
   * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will
   * generate API errors
   * @param orderId ID of the order that needs to be deleted
   * @param options The options parameters.
   */
  deleteOrder(
    orderId: string,
    options?: PetStoreDeleteOrderOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      orderId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      deleteOrderOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * This can only be done by the logged in user.
   * @param options The options parameters.
   */
  createUser(
    options?: PetStoreCreateUserOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      createUserOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Creates list of users with given input array
   * @param options The options parameters.
   */
  createUsersWithArrayInput(
    options?: PetStoreCreateUsersWithArrayInputOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      createUsersWithArrayInputOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Creates list of users with given input array
   * @param options The options parameters.
   */
  createUsersWithListInput(
    options?: PetStoreCreateUsersWithListInputOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      createUsersWithListInputOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Logs user into the system
   * @param options The options parameters.
   */
  loginUser(
    options?: PetStoreLoginUserOptionalParams
  ): Promise<PetStoreLoginUserResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      loginUserOperationSpec
    ) as Promise<PetStoreLoginUserResponse>;
  }

  /**
   * Logs out current logged in user session
   * @param options The options parameters.
   */
  logoutUser(
    options?: PetStoreLogoutUserOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      logoutUserOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get user by user name
   * @param username The name that needs to be fetched. Use user1 for testing.
   * @param options The options parameters.
   */
  getUserByName(
    username: string,
    options?: PetStoreGetUserByNameOptionalParams
  ): Promise<PetStoreGetUserByNameResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      username,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getUserByNameOperationSpec
    ) as Promise<PetStoreGetUserByNameResponse>;
  }

  /**
   * This can only be done by the logged in user.
   * @param username name that need to be deleted
   * @param options The options parameters.
   */
  updateUser(
    username: string,
    options?: PetStoreUpdateUserOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      username,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      updateUserOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * This can only be done by the logged in user.
   * @param username The name that needs to be deleted
   * @param options The options parameters.
   */
  deleteUser(
    username: string,
    options?: PetStoreDeleteUserOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      username,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      deleteUserOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }
}
// Operation Specifications
const xmlSerializer = new coreHttp.Serializer(Mappers, /* isXml */ true);

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const addPetUsingByteArrayOperationSpec: coreHttp.OperationSpec = {
  path: "/pet",
  httpMethod: "POST",
  responses: { 405: {} },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "binary",
  serializer
};
const addPetOperationSpec: coreHttp.OperationSpec = {
  path: "/pet",
  httpMethod: "POST",
  responses: { 405: {} },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const updatePetOperationSpec: coreHttp.OperationSpec = {
  path: "/pet",
  httpMethod: "PUT",
  responses: { 400: {}, 404: {}, 405: {} },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const findPetsByStatusOperationSpec: coreHttp.OperationSpec = {
  path: "/pet/findByStatus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Pet" } }
        },
        serializedName: "ArrayOfPet",
        xmlElementName: "Pet"
      }
    },
    400: {}
  },
  queryParameters: [Parameters.status],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const findPetsByTagsOperationSpec: coreHttp.OperationSpec = {
  path: "/pet/findByTags",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Pet" } }
        },
        serializedName: "ArrayOfPet",
        xmlElementName: "Pet"
      }
    },
    400: {}
  },
  queryParameters: [Parameters.tags],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const findPetsWithByteArrayOperationSpec: coreHttp.OperationSpec = {
  path: "/pet/{petId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    },
    400: {},
    404: {}
  },
  urlParameters: [Parameters.$host, Parameters.petId],
  headerParameters: [Parameters.accept],
  serializer
};
const getPetByIdOperationSpec: coreHttp.OperationSpec = {
  path: "/pet/{petId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Pet
    },
    400: {},
    404: {}
  },
  urlParameters: [Parameters.$host, Parameters.petId],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const updatePetWithFormOperationSpec: coreHttp.OperationSpec = {
  path: "/pet/{petId}",
  httpMethod: "POST",
  responses: { 405: {} },
  formDataParameters: [Parameters.status1],
  urlParameters: [Parameters.$host, Parameters.petId1],
  headerParameters: [Parameters.contentType2],
  serializer
};
const deletePetOperationSpec: coreHttp.OperationSpec = {
  path: "/pet/{petId}",
  httpMethod: "DELETE",
  responses: { 400: {} },
  urlParameters: [Parameters.$host, Parameters.petId],
  headerParameters: [Parameters.apiKey],
  serializer
};
const uploadFileOperationSpec: coreHttp.OperationSpec = {
  path: "/pet/{petId}/uploadImage",
  httpMethod: "POST",
  responses: { default: {} },
  formDataParameters: [Parameters.additionalMetadata, Parameters.file],
  urlParameters: [Parameters.$host, Parameters.petId],
  headerParameters: [Parameters.contentType3],
  serializer
};
const getInventoryOperationSpec: coreHttp.OperationSpec = {
  path: "/store/inventory",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "Number" } } },
        serializedName: "DictionaryOfInteger"
      }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const placeOrderOperationSpec: coreHttp.OperationSpec = {
  path: "/store/order",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Order
    },
    400: {}
  },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOrderByIdOperationSpec: coreHttp.OperationSpec = {
  path: "/store/order/{orderId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Order
    },
    400: {},
    404: {}
  },
  urlParameters: [Parameters.$host, Parameters.orderId],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const deleteOrderOperationSpec: coreHttp.OperationSpec = {
  path: "/store/order/{orderId}",
  httpMethod: "DELETE",
  responses: { 400: {}, 404: {} },
  urlParameters: [Parameters.$host, Parameters.orderId],
  serializer
};
const createUserOperationSpec: coreHttp.OperationSpec = {
  path: "/user",
  httpMethod: "POST",
  responses: { default: {} },
  requestBody: Parameters.body3,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const createUsersWithArrayInputOperationSpec: coreHttp.OperationSpec = {
  path: "/user/createWithArray",
  httpMethod: "POST",
  responses: { default: {} },
  requestBody: Parameters.body4,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const createUsersWithListInputOperationSpec: coreHttp.OperationSpec = {
  path: "/user/createWithList",
  httpMethod: "POST",
  responses: { default: {} },
  requestBody: Parameters.body4,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const loginUserOperationSpec: coreHttp.OperationSpec = {
  path: "/user/login",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" }, serializedName: "String" }
    },
    400: {}
  },
  queryParameters: [Parameters.username, Parameters.password],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const logoutUserOperationSpec: coreHttp.OperationSpec = {
  path: "/user/logout",
  httpMethod: "GET",
  responses: { default: {} },
  urlParameters: [Parameters.$host],
  serializer
};
const getUserByNameOperationSpec: coreHttp.OperationSpec = {
  path: "/user/{username}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.User
    },
    400: {},
    404: {}
  },
  urlParameters: [Parameters.$host, Parameters.username1],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const updateUserOperationSpec: coreHttp.OperationSpec = {
  path: "/user/{username}",
  httpMethod: "PUT",
  responses: { 400: {}, 404: {} },
  requestBody: Parameters.body3,
  urlParameters: [Parameters.$host, Parameters.username1],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const deleteUserOperationSpec: coreHttp.OperationSpec = {
  path: "/user/{username}",
  httpMethod: "DELETE",
  responses: { 400: {}, 404: {} },
  urlParameters: [Parameters.$host, Parameters.username1],
  serializer
};

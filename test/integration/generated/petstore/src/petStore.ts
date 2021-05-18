import * as coreClient from "@azure/core-client";
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
  ): Promise<void> {
    return this.sendOperationRequest(
      { options },
      addPetUsingByteArrayOperationSpec
    );
  }

  /**
   * Adds a new pet to the store. You may receive an HTTP invalid input if your pet is invalid.
   * @param options The options parameters.
   */
  addPet(options?: PetStoreAddPetOptionalParams): Promise<void> {
    return this.sendOperationRequest({ options }, addPetOperationSpec);
  }

  /**
   * Update an existing pet
   * @param options The options parameters.
   */
  updatePet(options?: PetStoreUpdatePetOptionalParams): Promise<void> {
    return this.sendOperationRequest({ options }, updatePetOperationSpec);
  }

  /**
   * Multiple status values can be provided with comma seperated strings
   * @param options The options parameters.
   */
  findPetsByStatus(
    options?: PetStoreFindPetsByStatusOptionalParams
  ): Promise<PetStoreFindPetsByStatusResponse> {
    return this.sendOperationRequest(
      { options },
      findPetsByStatusOperationSpec
    );
  }

  /**
   * Muliple tags can be provided with comma seperated strings. Use tag1, tag2, tag3 for testing.
   * @param options The options parameters.
   */
  findPetsByTags(
    options?: PetStoreFindPetsByTagsOptionalParams
  ): Promise<PetStoreFindPetsByTagsResponse> {
    return this.sendOperationRequest({ options }, findPetsByTagsOperationSpec);
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
    return this.sendOperationRequest(
      { petId, options },
      findPetsWithByteArrayOperationSpec
    );
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
    return this.sendOperationRequest(
      { petId, options },
      getPetByIdOperationSpec
    );
  }

  /**
   * Updates a pet in the store with form data
   * @param petId ID of pet that needs to be updated
   * @param options The options parameters.
   */
  updatePetWithForm(
    petId: string,
    options?: PetStoreUpdatePetWithFormOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { petId, options },
      updatePetWithFormOperationSpec
    );
  }

  /**
   * Deletes a pet
   * @param petId Pet id to delete
   * @param options The options parameters.
   */
  deletePet(
    petId: number,
    options?: PetStoreDeletePetOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { petId, options },
      deletePetOperationSpec
    );
  }

  /**
   * uploads an image
   * @param petId ID of pet to update
   * @param options The options parameters.
   */
  uploadFile(
    petId: number,
    options?: PetStoreUploadFileOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { petId, options },
      uploadFileOperationSpec
    );
  }

  /**
   * Returns a map of status codes to quantities
   * @param options The options parameters.
   */
  getInventory(
    options?: PetStoreGetInventoryOptionalParams
  ): Promise<PetStoreGetInventoryResponse> {
    return this.sendOperationRequest({ options }, getInventoryOperationSpec);
  }

  /**
   * Place an order for a pet
   * @param options The options parameters.
   */
  placeOrder(
    options?: PetStorePlaceOrderOptionalParams
  ): Promise<PetStorePlaceOrderResponse> {
    return this.sendOperationRequest({ options }, placeOrderOperationSpec);
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
    return this.sendOperationRequest(
      { orderId, options },
      getOrderByIdOperationSpec
    );
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
  ): Promise<void> {
    return this.sendOperationRequest(
      { orderId, options },
      deleteOrderOperationSpec
    );
  }

  /**
   * This can only be done by the logged in user.
   * @param options The options parameters.
   */
  createUser(options?: PetStoreCreateUserOptionalParams): Promise<void> {
    return this.sendOperationRequest({ options }, createUserOperationSpec);
  }

  /**
   * Creates list of users with given input array
   * @param options The options parameters.
   */
  createUsersWithArrayInput(
    options?: PetStoreCreateUsersWithArrayInputOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { options },
      createUsersWithArrayInputOperationSpec
    );
  }

  /**
   * Creates list of users with given input array
   * @param options The options parameters.
   */
  createUsersWithListInput(
    options?: PetStoreCreateUsersWithListInputOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { options },
      createUsersWithListInputOperationSpec
    );
  }

  /**
   * Logs user into the system
   * @param options The options parameters.
   */
  loginUser(
    options?: PetStoreLoginUserOptionalParams
  ): Promise<PetStoreLoginUserResponse> {
    return this.sendOperationRequest({ options }, loginUserOperationSpec);
  }

  /**
   * Logs out current logged in user session
   * @param options The options parameters.
   */
  logoutUser(options?: PetStoreLogoutUserOptionalParams): Promise<void> {
    return this.sendOperationRequest({ options }, logoutUserOperationSpec);
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
    return this.sendOperationRequest(
      { username, options },
      getUserByNameOperationSpec
    );
  }

  /**
   * This can only be done by the logged in user.
   * @param username name that need to be deleted
   * @param options The options parameters.
   */
  updateUser(
    username: string,
    options?: PetStoreUpdateUserOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { username, options },
      updateUserOperationSpec
    );
  }

  /**
   * This can only be done by the logged in user.
   * @param username The name that needs to be deleted
   * @param options The options parameters.
   */
  deleteUser(
    username: string,
    options?: PetStoreDeleteUserOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { username, options },
      deleteUserOperationSpec
    );
  }
}
// Operation Specifications
const xmlSerializer = coreClient.createSerializer(Mappers, /* isXml */ true);

const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const addPetUsingByteArrayOperationSpec: coreClient.OperationSpec = {
  path: "/pet",
  httpMethod: "POST",
  responses: { 405: {} },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "binary",
  serializer
};
const addPetOperationSpec: coreClient.OperationSpec = {
  path: "/pet",
  httpMethod: "POST",
  responses: { 405: {} },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const updatePetOperationSpec: coreClient.OperationSpec = {
  path: "/pet",
  httpMethod: "PUT",
  responses: { 400: {}, 404: {}, 405: {} },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const findPetsByStatusOperationSpec: coreClient.OperationSpec = {
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
const findPetsByTagsOperationSpec: coreClient.OperationSpec = {
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
const findPetsWithByteArrayOperationSpec: coreClient.OperationSpec = {
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
const getPetByIdOperationSpec: coreClient.OperationSpec = {
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
const updatePetWithFormOperationSpec: coreClient.OperationSpec = {
  path: "/pet/{petId}",
  httpMethod: "POST",
  responses: { 405: {} },
  formDataParameters: [Parameters.status1],
  urlParameters: [Parameters.$host, Parameters.petId1],
  headerParameters: [Parameters.contentType2],
  serializer
};
const deletePetOperationSpec: coreClient.OperationSpec = {
  path: "/pet/{petId}",
  httpMethod: "DELETE",
  responses: { 400: {} },
  urlParameters: [Parameters.$host, Parameters.petId],
  headerParameters: [Parameters.apiKey],
  serializer
};
const uploadFileOperationSpec: coreClient.OperationSpec = {
  path: "/pet/{petId}/uploadImage",
  httpMethod: "POST",
  responses: { default: {} },
  formDataParameters: [Parameters.additionalMetadata, Parameters.file],
  urlParameters: [Parameters.$host, Parameters.petId],
  headerParameters: [Parameters.contentType3],
  serializer
};
const getInventoryOperationSpec: coreClient.OperationSpec = {
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
const placeOrderOperationSpec: coreClient.OperationSpec = {
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
const getOrderByIdOperationSpec: coreClient.OperationSpec = {
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
const deleteOrderOperationSpec: coreClient.OperationSpec = {
  path: "/store/order/{orderId}",
  httpMethod: "DELETE",
  responses: { 400: {}, 404: {} },
  urlParameters: [Parameters.$host, Parameters.orderId],
  serializer
};
const createUserOperationSpec: coreClient.OperationSpec = {
  path: "/user",
  httpMethod: "POST",
  responses: { default: {} },
  requestBody: Parameters.body3,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const createUsersWithArrayInputOperationSpec: coreClient.OperationSpec = {
  path: "/user/createWithArray",
  httpMethod: "POST",
  responses: { default: {} },
  requestBody: Parameters.body4,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const createUsersWithListInputOperationSpec: coreClient.OperationSpec = {
  path: "/user/createWithList",
  httpMethod: "POST",
  responses: { default: {} },
  requestBody: Parameters.body4,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const loginUserOperationSpec: coreClient.OperationSpec = {
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
const logoutUserOperationSpec: coreClient.OperationSpec = {
  path: "/user/logout",
  httpMethod: "GET",
  responses: { default: {} },
  urlParameters: [Parameters.$host],
  serializer
};
const getUserByNameOperationSpec: coreClient.OperationSpec = {
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
const updateUserOperationSpec: coreClient.OperationSpec = {
  path: "/user/{username}",
  httpMethod: "PUT",
  responses: { 400: {}, 404: {} },
  requestBody: Parameters.body3,
  urlParameters: [Parameters.$host, Parameters.username1],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const deleteUserOperationSpec: coreClient.OperationSpec = {
  path: "/user/{username}",
  httpMethod: "DELETE",
  responses: { 400: {}, 404: {} },
  urlParameters: [Parameters.$host, Parameters.username1],
  serializer
};

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";

/** A group of properties representing a pet. */
export interface Pet {
  /** A more detailed description of the id of the pet. */
  id?: number;
  category?: Category;
  name: string;
  photoUrls: string[];
  tags?: Tag[];
  /** pet status in the store */
  status?: PetStatus;
}

export interface Category {
  id?: number;
  name?: string;
}

export interface Tag {
  id?: number;
  name?: string;
}

export interface Order {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: Date;
  /** Order Status */
  status?: OrderStatus;
  complete?: boolean;
}

export interface User {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  /** User Status */
  userStatus?: number;
}

export interface PathsN18Gb4PetPetidPostRequestbodyContentApplicationXWwwFormUrlencodedSchema {
  /** Updated name of the pet */
  name?: string;
  /** Updated status of the pet */
  status?: string;
}

export interface PathsQ1AtbnPetPetidUploadimagePostRequestbodyContentMultipartFormDataSchema {
  /** Additional data to pass to server */
  additionalMetadata?: string;
  /** file to upload */
  file?: coreRestPipeline.RequestBodyType;
}

/** Known values of {@link PetStatus} that the service accepts. */
export const enum KnownPetStatus {
  Available = "available",
  Pending = "pending",
  Sold = "sold"
}

/**
 * Defines values for PetStatus. \
 * {@link KnownPetStatus} can be used interchangeably with PetStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **available** \
 * **pending** \
 * **sold**
 */
export type PetStatus = string;

/** Known values of {@link OrderStatus} that the service accepts. */
export const enum KnownOrderStatus {
  Placed = "placed",
  Approved = "approved",
  Delivered = "delivered"
}

/**
 * Defines values for OrderStatus. \
 * {@link KnownOrderStatus} can be used interchangeably with OrderStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **placed** \
 * **approved** \
 * **delivered**
 */
export type OrderStatus = string;

/** Optional parameters. */
export interface PetStoreAddPetUsingByteArray$binaryOptionalParams
  extends coreClient.OperationOptions {
  /** Pet object in the form of byte array */
  body?: coreRestPipeline.RequestBodyType;
}

/** Optional parameters. */
export interface PetStoreAddPetUsingByteArray$xmlOptionalParams
  extends coreClient.OperationOptions {
  /** Pet object in the form of byte array */
  body?: coreRestPipeline.RequestBodyType;
}

/** Optional parameters. */
export interface PetStoreAddPetOptionalParams
  extends coreClient.OperationOptions {
  /** Pet object that needs to be added to the store */
  body?: Pet;
}

/** Optional parameters. */
export interface PetStoreUpdatePetOptionalParams
  extends coreClient.OperationOptions {
  /** Pet object that needs to be added to the store */
  body?: Pet;
}

/** Optional parameters. */
export interface PetStoreFindPetsByStatusOptionalParams
  extends coreClient.OperationOptions {
  /** Status values that need to be considered for filter */
  status?: string[];
}

/** Contains response data for the findPetsByStatus operation. */
export type PetStoreFindPetsByStatusResponse = Pet[];

/** Optional parameters. */
export interface PetStoreFindPetsByTagsOptionalParams
  extends coreClient.OperationOptions {
  /** Tags to filter by */
  tags?: string[];
}

/** Contains response data for the findPetsByTags operation. */
export type PetStoreFindPetsByTagsResponse = Pet[];

/** Optional parameters. */
export interface PetStoreFindPetsWithByteArrayOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the findPetsWithByteArray operation. */
export type PetStoreFindPetsWithByteArrayResponse = {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export interface PetStoreGetPetByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getPetById operation. */
export type PetStoreGetPetByIdResponse = Pet;

/** Optional parameters. */
export interface PetStoreUpdatePetWithFormOptionalParams
  extends coreClient.OperationOptions {
  /** Updated name of the pet */
  name?: string;
  /** Updated status of the pet */
  status?: string;
}

/** Optional parameters. */
export interface PetStoreDeletePetOptionalParams
  extends coreClient.OperationOptions {
  apiKey?: string;
}

/** Optional parameters. */
export interface PetStoreUploadFileOptionalParams
  extends coreClient.OperationOptions {
  /** Additional data to pass to server */
  additionalMetadata?: string;
  /** file to upload */
  file?: coreRestPipeline.RequestBodyType;
}

/** Optional parameters. */
export interface PetStoreGetInventoryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getInventory operation. */
export type PetStoreGetInventoryResponse = { [propertyName: string]: number };

/** Optional parameters. */
export interface PetStorePlaceOrderOptionalParams
  extends coreClient.OperationOptions {
  /** order placed for purchasing the pet */
  body?: Order;
}

/** Contains response data for the placeOrder operation. */
export type PetStorePlaceOrderResponse = Order;

/** Optional parameters. */
export interface PetStoreGetOrderByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getOrderById operation. */
export type PetStoreGetOrderByIdResponse = Order;

/** Optional parameters. */
export interface PetStoreDeleteOrderOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PetStoreCreateUserOptionalParams
  extends coreClient.OperationOptions {
  /** Created user object */
  body?: User;
}

/** Optional parameters. */
export interface PetStoreCreateUsersWithArrayInputOptionalParams
  extends coreClient.OperationOptions {
  /** List of user object */
  body?: User[];
}

/** Optional parameters. */
export interface PetStoreCreateUsersWithListInputOptionalParams
  extends coreClient.OperationOptions {
  /** List of user object */
  body?: User[];
}

/** Optional parameters. */
export interface PetStoreLoginUserOptionalParams
  extends coreClient.OperationOptions {
  /** The user name for login */
  username?: string;
  /** The password for login in clear text */
  password?: string;
}

/** Contains response data for the loginUser operation. */
export type PetStoreLoginUserResponse = {
  /** The parsed response body. */
  body: string;
};

/** Optional parameters. */
export interface PetStoreLogoutUserOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PetStoreGetUserByNameOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getUserByName operation. */
export type PetStoreGetUserByNameResponse = User;

/** Optional parameters. */
export interface PetStoreUpdateUserOptionalParams
  extends coreClient.OperationOptions {
  /** Updated user object */
  body?: User;
}

/** Optional parameters. */
export interface PetStoreDeleteUserOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PetStoreOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}

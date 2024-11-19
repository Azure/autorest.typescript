import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreHttpCompat from "@azure/core-http-compat";

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
  /** The restriction level applied to the cluster's node resource group */
  petRestrictionLevel?: RestrictionLevel;
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
export enum KnownPetStatus {
  /** Available */
  Available = "available",
  /** Pending */
  Pending = "pending",
  /** Sold */
  Sold = "sold",
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

/** Known values of {@link RestrictionLevel} that the service accepts. */
export enum KnownRestrictionLevel {
  /** All RBAC permissions are allowed on the managed node resource group */
  Unrestricted = "Unrestricted",
  /** Only *\/read RBAC permissions allowed on the managed node resource group */
  ReadOnly = "ReadOnly",
}

/**
 * Defines values for RestrictionLevel. \
 * {@link KnownRestrictionLevel} can be used interchangeably with RestrictionLevel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unrestricted**: All RBAC permissions are allowed on the managed node resource group \
 * **ReadOnly**: Only *\/read RBAC permissions allowed on the managed node resource group
 */
export type RestrictionLevel = string;

/** Known values of {@link OrderStatus} that the service accepts. */
export enum KnownOrderStatus {
  /** Placed */
  Placed = "placed",
  /** Approved */
  Approved = "approved",
  /** Delivered */
  Delivered = "delivered",
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
export interface AddPetUsingByteArray$binaryOptionalParams
  extends coreClient.OperationOptions {
  /** Pet object in the form of byte array */
  body?: coreRestPipeline.RequestBodyType;
}

/** Optional parameters. */
export interface AddPetUsingByteArray$xmlOptionalParams
  extends coreClient.OperationOptions {
  /** Pet object in the form of byte array */
  body?: coreRestPipeline.RequestBodyType;
}

/** Optional parameters. */
export interface AddPetOptionalParams extends coreClient.OperationOptions {
  /** Pet object that needs to be added to the store */
  body?: Pet;
}

/** Optional parameters. */
export interface UpdatePetOptionalParams extends coreClient.OperationOptions {
  /** Pet object that needs to be added to the store */
  body?: Pet;
}

/** Optional parameters. */
export interface FindPetsByStatusOptionalParams
  extends coreClient.OperationOptions {
  /** Status values that need to be considered for filter */
  status?: string[];
}

/** Contains response data for the findPetsByStatus operation. */
export type FindPetsByStatusResponse = Pet[];

/** Optional parameters. */
export interface FindPetsByTagsOptionalParams
  extends coreClient.OperationOptions {
  /** Tags to filter by */
  tags?: string[];
}

/** Contains response data for the findPetsByTags operation. */
export type FindPetsByTagsResponse = Pet[];

/** Optional parameters. */
export interface FindPetsWithByteArrayOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the findPetsWithByteArray operation. */
export type FindPetsWithByteArrayResponse = {
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
export interface GetPetByIdOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the getPetById operation. */
export type GetPetByIdResponse = Pet;

/** Optional parameters. */
export interface UpdatePetWithFormOptionalParams
  extends coreClient.OperationOptions {
  /** Updated name of the pet */
  name?: string;
  /** Updated status of the pet */
  status?: string;
}

/** Optional parameters. */
export interface DeletePetOptionalParams extends coreClient.OperationOptions {
  apiKey?: string;
}

/** Optional parameters. */
export interface UploadFileOptionalParams extends coreClient.OperationOptions {
  /** Additional data to pass to server */
  additionalMetadata?: string;
  /** file to upload */
  file?: coreRestPipeline.RequestBodyType;
}

/** Optional parameters. */
export interface GetInventoryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getInventory operation. */
export type GetInventoryResponse = { [propertyName: string]: number };

/** Optional parameters. */
export interface PlaceOrderOptionalParams extends coreClient.OperationOptions {
  /** order placed for purchasing the pet */
  body?: Order;
}

/** Contains response data for the placeOrder operation. */
export type PlaceOrderResponse = Order;

/** Optional parameters. */
export interface GetOrderByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getOrderById operation. */
export type GetOrderByIdResponse = Order;

/** Optional parameters. */
export interface DeleteOrderOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface CreateUserOptionalParams extends coreClient.OperationOptions {
  /** Created user object */
  body?: User;
}

/** Optional parameters. */
export interface CreateUsersWithArrayInputOptionalParams
  extends coreClient.OperationOptions {
  /** List of user object */
  body?: User[];
}

/** Optional parameters. */
export interface CreateUsersWithListInputOptionalParams
  extends coreClient.OperationOptions {
  /** List of user object */
  body?: User[];
}

/** Optional parameters. */
export interface LoginUserOptionalParams extends coreClient.OperationOptions {
  /** The user name for login */
  username?: string;
  /** The password for login in clear text */
  password?: string;
}

/** Contains response data for the loginUser operation. */
export type LoginUserResponse = {
  /** The parsed response body. */
  body: string;
};

/** Optional parameters. */
export interface LogoutUserOptionalParams extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GetUserByNameOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getUserByName operation. */
export type GetUserByNameResponse = User;

/** Optional parameters. */
export interface UpdateUserOptionalParams extends coreClient.OperationOptions {
  /** Updated user object */
  body?: User;
}

/** Optional parameters. */
export interface DeleteUserOptionalParams extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PetStoreOptionalParams
  extends coreHttpCompat.ExtendedServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}

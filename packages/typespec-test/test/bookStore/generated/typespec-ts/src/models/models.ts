// Licensed under the MIT License.

/** Represents an order for publications */
export interface Order {
  /** Unique identifier for the order */
  id: string;
  /** Customer who placed the order */
  customerId: string;
  /** List of publications in the order */
  items: Publication[];
  /** Total price of the order */
  totalPrice: number;
  /** Status of the order */
  status: OrderStatus;
}

export function orderSerializer(item: Order): any {
  return {
    id: item["id"],
    customerId: item["customerId"],
    items: publicationArraySerializer(item["items"]),
    totalPrice: item["totalPrice"],
    status: item["status"],
  };
}

export function orderDeserializer(item: any): Order {
  return {
    id: item["id"],
    customerId: item["customerId"],
    items: publicationArrayDeserializer(item["items"]),
    totalPrice: item["totalPrice"],
    status: item["status"],
  };
}

export function publicationArraySerializer(result: Array<Publication>): any[] {
  return result.map((item) => {
    return publicationSerializer(item);
  });
}

export function publicationArrayDeserializer(
  result: Array<Publication>,
): any[] {
  return result.map((item) => {
    return publicationDeserializer(item);
  });
}

/** Alias for Publication */
export type Publication = Book | Magazine;

export function publicationSerializer(item: Publication): any {
  return item;
}

export function publicationDeserializer(item: any): Publication {
  return item;
}

/** Represents a book in the store */
export interface Book extends PublicationBase {
  type: "Book";
  /** Author of the book */
  author: string;
  /** ISBN of the book */
  isbn: string;
}

export function bookSerializer(item: Book): any {
  return {
    id: item["id"],
    title: item["title"],
    publishDate: item["publishDate"].toISOString(),
    price: item["price"],
    type: item["type"],
    author: item["author"],
    isbn: item["isbn"],
  };
}

export function bookDeserializer(item: any): Book {
  return {
    id: item["id"],
    title: item["title"],
    publishDate: new Date(item["publishDate"]),
    price: item["price"],
    type: item["type"],
    author: item["author"],
    isbn: item["isbn"],
  };
}

/** Represents a magazine in the store */
export interface Magazine extends PublicationBase {
  type: "Magazine";
  /** Issue number of the magazine */
  issueNumber: number;
  /** Publisher of the magazine */
  publisher: string;
}

export function magazineSerializer(item: Magazine): any {
  return {
    id: item["id"],
    title: item["title"],
    publishDate: item["publishDate"].toISOString(),
    price: item["price"],
    type: item["type"],
    issueNumber: item["issueNumber"],
    publisher: item["publisher"],
  };
}

export function magazineDeserializer(item: any): Magazine {
  return {
    id: item["id"],
    title: item["title"],
    publishDate: new Date(item["publishDate"]),
    price: item["price"],
    type: item["type"],
    issueNumber: item["issueNumber"],
    publisher: item["publisher"],
  };
}

/** Possible statuses for an order */
export type OrderStatus = "Pending" | "Shipped" | "Delivered" | "Cancelled";

/** Base model for books and magazines */
export interface PublicationBase {
  /** Unique identifier */
  id: string;
  /** Title of the publication */
  title: string;
  /** Publication date */
  publishDate: Date;
  /** Price in USD */
  price: number;
  /** Type of publication */
  type: PublicationType;
}

export function publicationBaseSerializer(item: PublicationBase): any {
  return {
    id: item["id"],
    title: item["title"],
    publishDate: item["publishDate"].toISOString(),
    price: item["price"],
    type: item["type"],
  };
}

export function publicationBaseDeserializer(item: any): PublicationBase {
  return {
    id: item["id"],
    title: item["title"],
    publishDate: new Date(item["publishDate"]),
    price: item["price"],
    type: item["type"],
  };
}

/** Type of PublicationType */
export type PublicationType = "Book" | "Magazine";

/** Error response */
export interface ErrorModel {
  /** Error code */
  code: number;
  /** Error message */
  message: string;
}

export function errorDeserializer(item: any): ErrorModel {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/** Known values of {@link Versions} that the service accepts. */
export enum KnownVersions {
  "1.0.0" = "1.0.0",
}

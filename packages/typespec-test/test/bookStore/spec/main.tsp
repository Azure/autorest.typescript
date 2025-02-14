import "@typespec/http";
import "@typespec/openapi";
import "@typespec/openapi3";
import "@typespec/versioning";

using TypeSpec.Http;
using TypeSpec.OpenAPI;
using TypeSpec.Versioning;

@service({
  title: "Book Store API",
})
@info({
  termsOfService: "https://bookstore.example.com/terms",
  contact: {
    name: "API Support",
    url: "https://bookstore.example.com/support",
    email: "support@bookstore.example.com",
  },
  license: {
    name: "Apache 2.0",
    url: "https://www.apache.org/licenses/LICENSE-2.0.html",
  },
})
@versioned(Versions)
@server("http://127.0.0.1:4010", "Book Store API v1")
@doc("API for managing a book store inventory and orders")
namespace BookStore;

enum Versions {
  `1.0.0`,
}

enum PublicationType {
  Book,
  Magazine,
}

@doc("Base model for books and magazines")
model PublicationBase {
  @doc("Unique identifier")
  @key
  id: string;

  @doc("Title of the publication")
  title: string;

  @doc("Publication date")
  publishDate: utcDateTime;

  @doc("Price in USD")
  price: float32;

  @doc("Type of publication")
  type: PublicationType;
}

const BookExample1 = #{
  id: "123",
  title: "Book Title",
  publishDate: utcDateTime.fromISO("2020-01-01T00:00:00Z"),
  price: 19.99,
  type: PublicationType.Book,
  author: "Author Name",
  isbn: "1234567890",
};

const BookExample2 = #{
  id: "456",
  title: "Another Book Title",
  publishDate: utcDateTime.fromISO("2020-02-01T00:00:00Z"),
  price: 24.99,
  type: PublicationType.Book,
  author: "Another Author",
  isbn: "0987654321",
};

@example(BookExample1)
@doc("Represents a book in the store")
model Book extends PublicationBase {
  type: PublicationType.Book;

  @doc("Author of the book")
  author: string;

  @doc("ISBN of the book")
  isbn: string;
}

const MagazineExample1 = #{
  id: "789",
  title: "Magazine Title",
  publishDate: utcDateTime.fromISO("2020-03-01T00:00:00Z"),
  price: 9.99,
  type: PublicationType.Magazine,
  issueNumber: 1,
  publisher: "Publisher Name",
};

const MagazineExample2 = #{
  id: "012",
  title: "Another Magazine Title",
  publishDate: utcDateTime.fromISO("2020-04-01T00:00:00Z"),
  price: 7.99,
  type: PublicationType.Magazine,
  issueNumber: 2,
  publisher: "Another Publisher",
};

@example(MagazineExample1)
@doc("Represents a magazine in the store")
model Magazine extends PublicationBase {
  type: PublicationType.Magazine;

  @doc("Issue number of the magazine")
  issueNumber: int32;

  @doc("Publisher of the magazine")
  publisher: string;
}

const PublicationExample1 = BookExample1;

const PublicationExample2 = MagazineExample1;

@example(PublicationExample1)
@discriminator("type")
@oneOf
union Publication {
  book: Book,
  magazine: Magazine,
}

@doc("Possible statuses for an order")
enum OrderStatus {
  Pending,
  Shipped,
  Delivered,
  Cancelled,
};

const OrderExample1 = #{
  id: "abc",
  customerId: "123",
  items: #[BookExample1, MagazineExample1],
  totalPrice: 29.98,
  status: OrderStatus.Pending,
};

@example(OrderExample1)
@doc("Represents an order for publications")
model Order {
  @doc("Unique identifier for the order")
  id: string;

  @doc("Customer who placed the order")
  customerId: string;

  @doc("List of publications in the order")
  items: Publication[];

  @doc("Total price of the order")
  totalPrice: float32;

  @doc("Status of the order")
  status: OrderStatus;
}

@doc("Operations for managing publications")
@tag("publications")
@route("/publications")
interface Publications {
  @opExample(#{ returnType: #[BookExample1, MagazineExample1] })
  @doc("List all publications")
  @operationId("listPublications")
  list(): Publication[];

  @opExample(#{ parameters: #{ id: "123" }, returnType: BookExample1 })
  @doc("Get a specific publication by ID")
  @operationId("getPublication")
  get(@path id: string): Publication | Error;

  @opExample(#{
    parameters: #{ publication: BookExample1 },
    returnType: BookExample1,
  })
  @doc("Create a new publication")
  @operationId("createPublication")
  create(@body publication: Publication): Publication | Error;
}

@doc("Operations for managing orders")
@tag("orders")
@route("/orders")
interface Orders {
  @opExample(#{
    parameters: #{ order: OrderExample1 },
    returnType: OrderExample1,
  })
  @doc("Place a new order")
  @operationId("placeOrder")
  placeOrder(@body order: Order): Order | Error;

  @opExample(#{ parameters: #{ id: "123" }, returnType: OrderExample1 })
  @doc("Get an order by ID")
  @operationId("getOrder")
  getOrder(@path id: string): Order | Error;

  @opExample(#{
    parameters: #{ id: "123", status: OrderStatus.Shipped },
    returnType: OrderExample1,
  })
  @doc("Update the status of an order")
  @operationId("updateOrderStatus")
  updateStatus(@path id: string, @body status: OrderStatus): Order | Error;
}

@example(#{ code: 404, message: "Publication not found" })
@error
@doc("Error response")
model Error {
  @doc("Error code")
  code: int32;

  @doc("Error message")
  message: string;
}
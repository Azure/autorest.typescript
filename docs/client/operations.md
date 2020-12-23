# <img align="center" src="../images/logo.png">  Calling Operations with Your Typescript Client

AutoRest provides both synchronous and asynchronous method overloads for each service operation.
Depending on your swagger definition, operations can be accessed through operation groups (TODO: link to swagger docs) on the client,
or directly on the client.

## Operation Group vs No Operation Group

If your swagger defines an operation group for your operation (for example, in [this][operation_group_example] swagger, the operation `list`
is part of operation group `application`), you would access the operation through `client.application.list()`.

If there's no operation group, as in [this][mixin_example] case, you would access the operation directly from the client
itself, i.e. `client.getDog()`.

## Regular Operations

### Sync Operations

We don't generate sync operations, all of our operations are async.

### Async Operations

When calling our async operations, we use our async client, which is in a different module. Following the [example above](#sync-operations Sync Operations),
our call to `getDog` looks like this:

```js
import { DefaultAzureCredential } from "@azure/identity";
import { PetsClient } from "@azure/pets";

let client: PetsClient;

client = new PetsClient(new DefaultAzureCredential());
const dog = await client.getDog();
```

## Long Running Operations

Long-running operations are operations which consist of an initial request sent to the service to start an operation, followed by polling the service at intervals to determine whether the operation has completed or failed, and if it has succeeded, to get the result.

In concurrence with our [typescript guidelines][poller_guidelines], all of our long running operations are prefixed with `begin`, to signify the starting of the long running operation.

For our example, we will use the long running operation generated from [this][example_swagger] swagger. Let's say we generated this swagger with package name `@azure/lro`.

### Sync Long Running Operations

We don't generate sync operations, all of our operations are async.

### Async Long Running Operations

By default, our async long running operations return an [`Poller`][poller] polling object, though there [are ways][custom_poller] of changing this. Calling `.pollUntilDone()`
on the poller will wait until the long running operation finishes then return the final result.

```js
import { DefaultAzureCredential } from "@azure/identity";
import { Product, PollingPagingExampleClient } from "@azure/lro";

let client: PollingPagingExampleClient;
let inputProduct: Product;

client = new PollingPagingExampleClient(new DefaultAzureCredential());

inputProduct = {
    id: 1;
    name: "My Polling example"
};

const poller = await client.beginBasicPolling(inputProduct);
const outputProduct = await poller.pollUntilDone();
```

## Paging Operations

A paging operation pages through lists of data, returning an iterator for the items. Network calls get made when users start iterating through the output, not when the operation
is initially called.

For our example, we will use the long running operation generated from [this][example_swagger] swagger. Let's say we generated this swagger with package name `@azure/paging`.

### Sync Paging Operations

We don't generate sync operations, all of our operations are async.

### Async Paging Operations

By default, our sync paging operations return an [`PagedAsyncIterableIterator`][paged_async_iterable_iterator] pager. Since network calls aren't
made until starting to page, our generated operation is synchronous, and there's no need to wait the initial call to the function. Since network calls are made when iterating,
we have to do async looping.

```js
import { DefaultAzureCredential } from "@azure/identity";
import { PollingPagingExampleClient } from "@azure/paging";

let client: PollingPagingExampleClient;

client = new PollingPagingExampleClient(new DefaultAzureCredential());

const pager = client.basicPaging();
for await (const product of pager) {
    console.log(`${product.id}, ${product.name}`);
}
```

## Advanced: LRO + paging

We also support generating a long running paging operation. In this case, we return a poller from the operation, and the final result from the poller is
a pager that pages through the final lists of data.


<!-- LINKS -->
[operation_group_example]: https://github.com/Azure/azure-rest-api-specs/blob/master/specification/batch/data-plane/Microsoft.Batch/stable/2020-09-01.12.0/BatchService.json#L64
[mixin_example]: https://github.com/Azure/autorest/blob/new_docs/docs/openapi/examples/pets.json#L20
[pets_swaggger]: https://github.com/Azure/autorest/blob/new_docs/docs/openapi/examples/pets.json
[initializing]: ./initializing.md
[poller]:  https://docs.microsoft.com/en-us/javascript/api/@azure/core-lro/poller?view=azure-node-latest
[custom_poller]: ../generate/directives.md#generate-with-a-custom-poller
[example_swagger]: ../samples/specification/directives/pollingPaging.json
[poller_guidelines]: https://azure.github.io/azure-sdk/typescript_design.html#ts-lro
[custom_pager]: ../generate/directives.md#generate-with-a-custom-pager
[paged_async_iterable_iterator]: https://docs.microsoft.com/en-us/javascript/api/@azure/core-paging/pagedasynciterableiterator?view=azure-node-latest
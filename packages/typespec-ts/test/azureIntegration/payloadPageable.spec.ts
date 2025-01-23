// import { assert } from "chai";
// import PageableClientFactory, {
//     PageableClient,
//     paginate,
//     PetOutput
// } from "./generated/payload/pageable/src/index.js";

// describe("Pageable Client", () => {
//     let client: PageableClient;

//     beforeEach(() => {
//         client = PageableClientFactory({
//             allowInsecureConnection: true
//         });
//     });
//     const pets: PetOutput[] = [
//         { id: "1", name: "dog" },
//         { id: "2", name: "cat" },
//         { id: "3", name: "bird" },
//         { id: "4", name: "fish" }
//     ]
//     it("should get pagable Server Driven Pagination link", async () => {
//         const initialResponse = await client
//             .path("/payload/pageable/server-driven-pagination/link")
//             .get({ queryParameters: { maxpagesize: 3 } });

//         const iter = paginate(client, initialResponse);

//         let result: PetOutput[] = [];
//         for await (const item of iter) {
//             result.push(item);
//         }
//         assert.equal(result.length, 4)
//         assert.deepEqual(result, pets);
//     });
// });

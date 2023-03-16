import "@typespec/rest";
import "@typespec/versioning";

using TypeSpec.Rest; 
using TypeSpec.Http;
using TypeSpec.Versioning;

@service({
  title: "Collection Format Testing",
  version: "2022-12-16-preview",
})

namespace Azure.TypeScript.Testing;

model MultiCollectionFormatParameter {
  @query({
    format: "multi",
  })
  colors: string[];
}
model CsvCollectionFormatParameter {
  @query({
    format: "csv",
  })
  colors: string[];
}
@route("/collectionFormat/multi")
op testMulti(...MultiCollectionFormatParameter): string;
@route("/collectionFormat/csv")
op testCsv(...CsvCollectionFormatParameter): string;
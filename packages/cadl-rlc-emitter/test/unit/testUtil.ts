import { createTestHost } from "@cadl-lang/compiler/testing";
import { RestTestLibrary } from "@cadl-lang/rest/testing";
export async function createOpenAPITestHost() {
  return createTestHost({
    libraries: [RestTestLibrary]
  });
}

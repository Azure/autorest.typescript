import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";

using TypeSpec.Http;

@server("language", "Language Service")
@service(#{ title: "Test Service" })
namespace TestService;

model DefaultPets {
    catList?: CatDef[] = #[#{ catType: "American Shorthair" }];
}

model PetSettings {
    petList?: {
        cat?: DefaultPets.catList;
    };
}

model CatDef {
    catType: string;
}

interface Global {
    getPetSettings(): PetSettings;
}

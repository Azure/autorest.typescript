import "./lib";
/**
 * NOTE: This is a work in progress API model of the service.
 * It is here to testify the capabilities of the TypeSpec language and Learn API guideline.
 */
using TypeSpec.Http;
using TypeSpec.Reflection;

namespace Microsoft.Learn;

model StudyGuide<T> {
    type: EntityType;

    /** The unique identifier of this entity */
    id: string;
}

model LearningPath {
    type: EntityType.learningPath;

    @key
    id: uid;

    title: string;
    durationInMinutes: int32;

    @visibility("read")
    url: string;

    summary: string;
    iconUrl: string;

    levels: Taxonomy[];
    roles: Taxonomy[];
    products: Taxonomy[];
    subjects?: Taxonomy[];

    // @hidden
    // @expandable
    modules: EntityRef<Module>[];

    // @hidden
    @visibility("read")
    rating?: Rating;

    // @hidden
    @visibility("read")
    popularity?: float32;

    studyGuide: StudyGuide<LearningPath | Module>;
}

enum LearningPathExpand
{
    "modules",
    "rating",
    "popularity",
    "modules.units",
    "modules.rating",
    "modules.popularity"
}

model Module {
    type: EntityType.module;

    @key
    id: uid;
    title: string;
    durationInMinutes: int32;

    @visibility("read")
    url: string;

    summary: string;
    iconUrl: string;
    levels: Taxonomy[];
    roles: Taxonomy[];
    products: Taxonomy[];
    subjects?: Taxonomy[];

    // @hidden
    // @expandable
    units: EntityRef<Unit>[];

    // @hidden
    @visibility("read")
    rating?: Rating;

    // @hidden
    @visibility("read")
    popularity?: float32;
}

enum ModuleExpand {
    "units",
    "rating",
    "popularity"
}

model Unit {
    type: EntityType.unit;

    @key
    id: uid;

    title: string;
    durationInMinutes: int32;

    @visibility("read")
    url: string;
}

// @backend("public", "https://learn.microsoft.com/api/hierarchy/v1")
// @backend("pubdev", "https://dev.learn.microsoft.com/api/hierarchy/v1")
interface TrainingService {
    @route("/learning-paths/{id}")
    op readLearningPath is ContentReadOperation<LearningPath, ExpandQueryParameter<LearningPathExpand> & {
        @path id: uid;
    }>;

    @route("/learning-paths")
    op listLearningPaths is ContentListOperation<LearningPath, ExpandQueryParameter<LearningPathExpand>>;

    @route("/modules/{id}")
    op readModule is ContentReadOperation<Module, ExpandQueryParameter<ModuleExpand> & {
        @path id: uid;
    }>;

    @route("/modules")
    op listModules is ContentListOperation<Module, ExpandQueryParameter<ModuleExpand>>;
}

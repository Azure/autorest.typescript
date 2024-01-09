
namespace Microsoft.Learn;

/** List of all supported entity types */
enum EntityType {
    learningPath,
    module,
    unit,
}

/**
 * List of API verions.
 * 
 * Any breaking changes to the APIs will be introduced in a new version.
 * - Stable APIs are supported for at least 24 more months following the releasing of new versions.
 * - Preview APIs are supported for 3 more months following the releasing of new versions.
 */
enum Versions {
    `2023-11-01-preview`
}

/** A list of supported Learn locales */
enum Locale {
    `id-id`,
    `ms-my`,
    `bs-latn-ba`,
    `ca-es`,
    `cs-cz`,
    `da-dk`,
    `de-at`,
    `de-ch`,
    `de-de`,
    `et-ee`,
    `en-au`,
    `en-ca`,
    `en-in`,
    `en-ie`,
    `en-my`,
    `en-nz`,
    `en-sg`,
    `en-za`,
    `en-gb`,
    `en-us`,
    `es-mx`,
    `es-es`,
    `eu-es`,
    `fil-ph`,
    `fr-be`,
    `fr-ca`,
    `fr-ch`,
    `fr-fr`,
    `ga-ie`,
    `gl-es`,
    `ka-ge`,
    `hr-hr`,
    `is-is`,
    `it-ch`,
    `it-it`,
    `lv-lv`,
    `lb-lu`,
    `lt-lt`,
    `hu-hu`,
    `mt-mt`,
    `nl-be`,
    `nl-nl`,
    `nb-no`,
    `pl-pl`,
    `pt-br`,
    `pt-pt`,
    `ro-ro`,
    `sk-sk`,
    `sl-si`,
    `sr-latn-rs`,
    `fi-fi`,
    `sv-se`,
    `vi-vn`,
    `tr-tr`,
    `el-gr`,
    `bg-bg`,
    `kk-kz`,
    `ru-ru`,
    `sr-cyrl-rs`,
    `uk-ua`,
    `he-il`,
    `ar-sa`,
    `hi-in`,
    `th-th`,
    `ko-kr`,
    `zh-cn`,
    `zh-tw`,
    `zh-hk`,
    `ja-jp`,
}

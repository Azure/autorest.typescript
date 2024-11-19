import "@typespec/http";
import "@typespec/rest";
import "@azure-tools/typespec-client-generator-core";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.ClientGenerator.Core;

namespace ContentSafety;

#suppress "@azure-tools/typespec-azure-core/documentation-required" "MUST fix in next update"
@doc("Text analyze category")
enum TextCategory {
  Hate,
  SelfHarm,
  Sexual,
  Violence,
}

#suppress "@azure-tools/typespec-azure-core/documentation-required" "MUST fix in next update"
@doc("Image analyze category")
enum ImageCategory {
  Hate,
  SelfHarm,
  Sexual,
  Violence,
}

@doc("The type of text analysis output.")
enum AnalyzeTextOutputType {
  @doc("Output severities in four levels, the value could be 0,2,4,6.")
  FourLevels,

  @doc("Output severities in four levels, the value could be 0,1,2,3,4,5,6,7.")
  EightLevels,
}

@doc("The type of image analysis output.")
enum AnalyzeImageOutputType {
  @doc("Output severities in four levels, the value could be 0,2,4,6.")
  FourLevels,
}

@doc("The analysis request of the text.")
model AnalyzeTextOptions {
  // @doc("The text needs to be scanned. We support at most 1000 characters (unicode code points) in text of one request.")
  // @maxLength(1000)
  @doc("The text needs to be scanned. We support at most 10k Unicode characters (unicode code points) in text of one request.")
  @maxLength(10000)
  text: string;

  @doc("The categories will be analyzed. If not assigned, a default set of the categories' analysis results will be returned.")
  categories?: TextCategory[];

  @doc("The names of blocklists.")
  blocklistNames?: string[];

  @doc("When set to true, further analyses of harmful content will not be performed in cases where blocklists are hit. When set to false, all analyses of harmful content will be performed, whether or not blocklists are hit.")
  breakByBlocklists?: boolean;

  @doc("The type of text analysis output. If not assigned, the default value is \"FourLevels\".")
  outputType?: AnalyzeTextOutputType = AnalyzeTextOutputType.FourLevels;
}

@doc("The analysis response of the text")
model AnalyzeTextResult {
  @doc("The details of blocklist match.")
  blocklistsMatchResults?: TextBlocklistMatchResult[];

  @doc("Analysis result for categories.")
  analyzeResults: TextAnalyzeSeverityResult[];
}

@doc("The result of blocklist match.")
model TextBlocklistMatchResult {
  @doc("The name of matched blocklist.")
  @maxLength(64)
  blocklistName: string;

  @doc("The id of matched item.")
  @maxLength(64)
  blockItemId: string;

  @doc("The content of matched item.")
  @maxLength(128)
  blockItemText: string;
}

@doc("Text analysis result.")
model TextAnalyzeSeverityResult {
  @doc("The text category.")
  category: TextCategory;

  @doc("This field is decided by outputType in request, if choose \"FourLevels\", the value could be 0,2,4,6. The higher the severity of input content, the larger this value is.")
  severity?: int32;
}

@doc("The analysis request of the image.")
model AnalyzeImageOptions {
  @doc("The image needs to be analyzed.")
  image: ImageData;

  @doc("The categories will be analyzed. If not assigned, a default set of the categories' analysis results will be returned.")
  categories?: ImageCategory[];

  @doc("The type of image analysis output. If not assigned, the default value is \"FourLevels\".")
  outputType?: AnalyzeImageOutputType = AnalyzeImageOutputType.FourLevels;
}

@doc("The content or blob url of image, could be base64 encoding bytes or blob url. You can choose only one of them. If both are given, the request will be refused. The maximum size of image is 2048 pixels * 2048 pixels, no larger than 4MB at the same time. The minimum size of image is 50 pixels * 50 pixels.")
@clientName("ContentSafetyImageData", "csharp")
model ImageData {
  @doc("Base64 encoding of image.")
  content?: bytes;

  @doc("The blob url of image.")
  blobUrl?: url;
}

@doc("The analysis response of the image.")
model AnalyzeImageResult {
  @doc("Analysis result for categories.")
  analyzeResults: ImageAnalyzeSeverityResult[];
}

@doc("Image analysis result.")
model ImageAnalyzeSeverityResult {
  @doc("The image category.")
  category: ImageCategory;

  @doc("This field is decided by outputType in request, if choose \"FourLevels\", the value could be 0,2,4,6. The higher the severity of input content, the larger this value is.")
  severity?: int32;
}

@doc("Text Blocklist.")
@resource("text/blocklists")
model TextBlocklist {
  @doc("Text blocklist name.")
  @pattern("^[0-9A-Za-z._~-]+$")
  @key("blocklistName")
  @visibility("read", "create", "query")
  @maxLength(64)
  blocklistName: string;

  @doc("Text blocklist description.")
  @maxLength(1024)
  description?: string;
}

@doc("Item in TextBlocklist.")
@resource("blockItems")
@parentResource(TextBlocklist)
model TextBlockItem {
  @doc("Block Item Id. It will be uuid.")
  @key("blockItemId")
  @visibility("read", "create", "query")
  @maxLength(64)
  blockItemId: string;

  @doc("Block item description.")
  @maxLength(1024)
  description?: string;

  @doc("Block item content.")
  @maxLength(128)
  text: string;
}

@doc("Block item info in text blocklist.")
model TextBlockItemInfo {
  @doc("Block item description.")
  @maxLength(1024)
  description?: string;

  @doc("Block item content.")
  @maxLength(128)
  text: string;
}

@doc("The request of adding blockItems to text blocklist.")
model AddOrUpdateBlockItemsOptions {
  @doc("Array of blockItemInfo to add.")
  blockItems: TextBlockItemInfo[];
}

@doc("The response of adding blockItems to text blocklist.")
model AddOrUpdateBlockItemsResult {
  @doc("Array of blockItems added.")
  value?: TextBlockItem[];
}

@doc("The request of removing blockItems from text blocklist.")
model RemoveBlockItemsOptions {
  @doc("Array of blockItemIds to remove.")
  blockItemIds: string[];
}
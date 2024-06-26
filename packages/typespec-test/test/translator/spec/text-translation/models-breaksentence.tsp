import "@typespec/rest";
import "@azure-tools/typespec-azure-core";
import "./models-shared.tsp";
import "./models-translate.tsp";

using TypeSpec.Http;
using TypeSpec.Rest;
using Azure.Core;

namespace Translator.TextTranslation;

@doc("Request parameters for the break sentence API.")
model BreakSentenceParameters {
    ...CommonParameters;

    @query
    @doc("""
    Language tag identifying the language of the input text. 
    If a code isn't specified, automatic language detection will be applied.
    """)
    language?: string;

    @query
    @doc("""
    Script tag identifying the script used by the input text. 
    If a script isn't specified, the default script of the language will be assumed.
    """)
    script?: string;

    @body
    @doc("Array of the text for which values the sentence boundaries will be calculated.")
    content: InputTextElement[];
}

@doc("Response for the Break SEntence API.")
model BreakSentenceResult {
    ...CommonResultHeaders;

    @body
    @doc("Array of the break sentence elements.")
    result: BreakSentenceElement[];
}

@doc("Elemented containing break sentence result.")
model BreakSentenceElement {
    @doc("The detectedLanguage property is only present in the result object when language auto-detection is requested.")
    detectedLanguage?: DetectedLanguage;

    @doc("""
    Sentence boundaries in the input and output texts.
    """)
    sentLen: SentenceLength;
}
// using TypeSpec.Reflection;

// namespace Microsoft.Learn;

// /**
//  * Marks fields with large size or expensive to retrieve as hidden.
//  * Hidden fields are not sent to the client by default and must be explicitly requested using the `expand` query parameter.
//  */
// extern dec hidden(target: ModelProperty);

// /**
//  * Marks an entity reference as expandable.
//  * Entity references marked as expandable returns IDs by default and can be dereferenced using the `expand` query parameter.
//  */
// extern dec expandable(target: ModelProperty);

// /**
//  * Declares the backend for a given operation group. 
//  */
// extern dec backend(target: Interface, env: valueof "public" | "pubdev", url: valueof string);

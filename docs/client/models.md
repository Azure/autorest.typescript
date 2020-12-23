# <img align="center" src="../images/logo.png">  Accessing Models and Enums

## General

Models and enums are generated in the `models` namespace. So, say you are using package `@azure/pets`. To access model `Dog`, you would use the following code
snippet

```js
import { Dog } from "@azure/pets.models";
```

Enums are also listed in the `models` namespace, so say you have enum class `DogTypes`. To access the `Dalmation` enum, your code would look like

```js
import { DogTypes } from "@azure/pets.models";

let dogType: str;

dogType = DogTypes.Dalmation;
```

# texture-manager
A mindustry mod lib for texture packs.
## How to use?
Create a `scripts/` in your mod folder, and add a `main.js` file.

Add this in your `main.js` file:
```js
const setup = require("texture-manager/setup")

setup(
    {
      //router = name of the original sprite
      "router": [ "modname-sprite" ]
      // you can have multiple textures for a single sprite
    }
)
```
Remember to add the dependency to the `mod.json`.
```
"dependencies": [ "texture-manager" ]
```

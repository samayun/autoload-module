# autoload-module

Autoload Modules, models, resolvers, services etc from any folder

## Installation

Installation is as simple as any other `npm` package:

```
$ npm install autoload-module
```

## Usage

- Autoload Modules, models, resolvers, services etc from any folder

## Example

### Autoload Mongoose Models

@return Object;
example given for [Penguin.js](https://github.com/samayun/penguin.js) modules

```js
/**
 * Auto Load all models using FileSystem
 */

const AutoLoad = require("autoload-module");

const modelObject = {};
function callback(module, moduleName) {
  // eslint-disable-next-line import/no-dynamic-require
  modelObject[moduleName] = require(module);
}

new AutoLoad(__dirname, "", callback).bootstrapModule();

module.exports = modelObject;
```

### Autoload REST Modules

@return array;
example given for [Penguin.js](https://github.com/samayun/penguin.js) modules

```js
/**
 * Auto Load module's routes using FileSystem
 */

const AutoLoad = require("autoload-module");

module.exports = (app) => {
  function callback(module) {
    // eslint-disable-next-line import/no-dynamic-require
    require(module)(app);
  }
  new AutoLoad(__dirname, "/routes", callback).bootstrapModule();
};
```

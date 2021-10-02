/* require() -> CommonJS | The simplified version of dist/main.js

  var webpack_modules = {
    './src/message.js': module => {
      module.exports = 'control is an illusion';
    }
  };

  function webpack_require(moduleId) {
    var moduleFn = webpack_modules[moduleId];

    var module = { exports: {} };

    moduleFn(module);

    return module.exports;
  }

  const message = webpack_require('./src/message.js');
  console.log(message);
*/
// const message = require('./message');

/* import/export -> ES2015 Modules | The simplified version of dist/main.js

  var webpack_modules = {
    './src/index.js': (
      unused_webpack_module,
      webpack_exports,
      webpack_require
    ) => {
      var importedModule = webpack_require('./src/message.js');
      console.log(importedModule.default);
    },
    './src/message.js': (
      unused_webpack_module,
      webpack_exports,
      webpack_require
    ) => {
      webpack_require.d(
        webpack_exports,
        {default: () => WEBPACK_DEFAULT_EXPORT}
      );

      const WEBPACK_DEFAULT_EXPORT = 'Our democracy has been hacked';
    }
  };

  // the module cache
  var webpack_module_cache = {};

  // the require function
  function webpack_require(moduleId) {
    // check if module is in cache
    if(webpack_module_cache[moduleId]) {
      return webpack_module_cache[moduleId].exports;
    }

    // create a new module & put it into the cache
    var module = (
      webpack_module_cache[moduleId] = { exports: {} }
    );

    // execute the module function
    webpack_module_cache[moduleId](
      module, 
      module.exports, 
      webpack_require
    );

    // return the exports of the module
    return module.exports;
  }

  (() => {
    // define getter functions for harmony exports
    webpack_require.d = (exports, definition) => {
      for(var key in definition) {
        if(
          webpack_require.o(definition, key) && 
          !webpack_require.o(exports, key)
        ) {
          Object.defineProperty(
            exports, 
            key, 
            {enumerable: true, get: definition[key]}
          );
        }
      }
    };
  })();

  // webpack/runtime/hasOwnProperty shorthand
  (() => {
    webpack_require.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  })();

  // webpack/runtime/make namespace object
  (() => {
    // define esModule on exports
    webpack_require.r = exports => {
      if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(
          exports, 
          Symbol.toStringTag, 
          { value: 'Module' }
        );
      }

      Object.defineProperty(
        exports, 
        'esModule', 
        { value: true }
      );
    };
  })();

  // startup, load entry module, this entry module used 'exports' so it can't be inlined
  webpack_require('./src/index.js');
*/
import message from './message';

console.log(message);
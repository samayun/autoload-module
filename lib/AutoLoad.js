const { readdirSync, existsSync } = require("fs");
const { resolve, join } = require("path");

class AutoLoad {
  constructor(dirname, modulePath, callback) {
    this.dirname = dirname;
    this.subPath = modulePath;
    this.callback = callback;
  }
  // eslint-disable-next-line lines-between-class-members
  bootstrapModule() {
    const modulePath = resolve(this.dirname);
    const modules = readdirSync(modulePath);

    modules.forEach(async (module) => {
      const LoadFile = join(modulePath, module, this.subPath);

      // eslint-disable-next-line prefer-const
      if (existsSync(LoadFile)) {
        // eslint-disable-next-line import/no-dynamic-require
        this.callback(LoadFile, module);
      }
    });
  }
}

module.exports = AutoLoad;

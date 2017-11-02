var Resource = require('deployd/lib/resource'),
  util = require('util'),
  fs = require('fs');

function CodeResource(module) {
  Resource.apply(this, arguments);

  this.on('changed', function (config) {
    delete require.cache[require.resolve(fs.realpathSync('./') + '/resources/' + module)];
  });
}
util.inherits(CodeResource, Resource);

CodeResource.label = "Code";
CodeResource.events = ["index"];

module.exports = CodeResource;

CodeResource.prototype.clientGeneration = false;

CodeResource.prototype.handle = function (ctx, next) {
  next();
};

global.requireModule = function (module) {
  return require(fs.realpathSync('./') + '/resources/' + module);
}
var Resource = require('deployd/lib/resource'),
  util = require('util'),
  fs = require('fs'),
  path = require('path');

var resourcesPath = fs.realpathSync('./') + '/resources/';

function CodeResource(moduleName) {
  Resource.apply(this, arguments);

  this.on('changed', function (config) {
    delete require.cache[require.resolve(resourcesPath + moduleName)];
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
  var safeModule = path.normalize(module).replace(/^(\.\.[\/\\])+/, '');

  return require(resourcesPath + safeModule);
}
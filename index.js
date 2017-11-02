var Resource = require('deployd/lib/resource')
  , util = require('util');

function EventResource() {
  Resource.apply(this, arguments);
}
util.inherits(EventResource, Resource);

EventResource.label = "Code";
EventResource.events = ["index"];

module.exports = EventResource;

EventResource.prototype.clientGeneration = false;

EventResource.prototype.handle = function (ctx, next) {
  next();
};

global.requireModule = function(module) {
  return require(__dirname + '/resources/' + module);
}
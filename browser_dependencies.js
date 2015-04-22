'use strict';

var dependencies = {};

module.exports = {
  set: function(name, mod) {
    dependencies[name] = mod;
  },

  get: function(name) {
    return dependencies[name];
  }
};

'use strict';

var React = require('react');
var FormComponent = require('./form_component');
var dependencies = require('./browser_dependencies');

// We can do all kinds of browser-related stuff here.
// E.g. adding Jquery to the global scope for Bootstrap to work.
window.$ = window.jQuery = require('./vendor/jquery');

// Save the dependencies so they can be required by React components.
dependencies.set('jquery', jQuery);
dependencies.set('bootstrap', require('./vendor/bootstrap'));
dependencies.set('validate', require('./vendor/validate'));

React.render(
  React.createElement(FormComponent, null),
  document.getElementById('react-container')
);

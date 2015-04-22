'use strict';

var React = require('react');
var dependencies = require('./browser_dependencies');
var $, FormValidator;

module.exports = React.createClass({
  componentDidMount: function() {
    // Here we can initialize the browser libraries.
    // This will not be called on the server side.
    $ = dependencies.get('jquery');
    FormValidator = dependencies.get('validate');

    // Set up form validation.
    var validator = new FormValidator('react-form', [{
      name: 'name',
      rules: 'required'
    }, {
      name: 'hobby',
      rules: 'required'
    }], function(errors, event) {
      if (errors.length > 0) {
        alert(errors.map(function(err) { return err.message }).join(" "));
      } else {
        this.submit();
      }
    }.bind(this));
  },

  submit: function() {
    // Use Jquery ajax to submit the form.
    $.post('/submit', {
      name: $('#name').val(),
      hobby: $('#hobby').val(),
    }, function(msg) {
      alert(msg);
    });
  },

  render: function() {
    // JSX can be used here also.
    return (
      React.createElement("div", {className: "panel panel-default"},
        React.createElement("div", {className: "panel-heading"},
          React.createElement("h4", {className: "panel-title"},
            React.createElement("a", {"data-toggle":"collapse", href:"#react-form"}, "React Form")
          )
        ),

        React.createElement("form", {id: "react-form", className: "collapse in"},
          React.createElement("div", {className: "panel-body"},
            React.createElement("div", {className: "form-group"},
              React.createElement("label", {htmlFor: "name"}, "Your name"),
              React.createElement("input", {type: "text", className: "form-control", name: "name", id: "name", placeholder: "Your name"})
            ),
            React.createElement("div", {className: "form-group"},
              React.createElement("label", {htmlFor: "hobby"}, "Your Hobby"),
              React.createElement("input", {type: "text", className: "form-control", name: "hobby", id: "hobby", placeholder: "Your Hobby"})
            ),
            React.createElement("button", {type:"submit", className: "btn btn-default"}, "Submit")
          )
        )
      )
    );
  }
});

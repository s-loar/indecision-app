'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'This is some more info',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  };
};

var removeAll = function removeAll() {
  if (app.options.length > 0) {
    app.options = [];
    render();
  }
};

var makeDecision = function makeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var container = document.getElementById("app");
var root = ReactDOM.createRoot(container);

var render = function render() {

  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options && app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'p',
      null,
      React.createElement(
        'button',
        { disabled: app.options.length === 0, onClick: makeDecision },
        'What should I do?'
      )
    ),
    React.createElement(
      'p',
      null,
      React.createElement(
        'button',
        { onClick: removeAll },
        'Remove All'
      )
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    )
  );

  root.render(template);
};

render();

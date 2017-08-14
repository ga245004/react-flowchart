const React = require('react');
const { render } = require('react-dom');
const App = require('./app');

const { AppContainer } = require('react-hot-loader');

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.querySelector('#root'),
);

if (module.hot) {
  module.hot.accept('./app', () => {
    const AppNew = require('./app');
    render(
      <AppContainer>
        <AppNew />
      </AppContainer>,
      document.querySelector('#root'),
    );
  });
}

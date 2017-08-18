const React = require('react');
const { render } = require('react-dom');
const App = require('./ui/app');

const { AppContainer } = require('react-hot-loader');

render(
  <AppContainer height={'100%'}>
    <App />
  </AppContainer>,
  document.querySelector('#root'),
);

if (module.hot) {
  module.hot.accept('./ui/app', () => {
    const AppNew = require('./ui/app');
    render(
      <AppContainer>
        <AppNew width={0} height={0} />
      </AppContainer>,
      document.querySelector('#root'),
    );
  });
}

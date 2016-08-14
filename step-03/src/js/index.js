import 'babel-polyfill'
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import Root from './containers/Root'
const RedBox = require('redbox-react').default;
const rootEl = document.getElementById('app');

try {
  render(
    <AppContainer>
      <Root history={browserHistory} />
    </AppContainer>,
    rootEl
  )
} catch (e) {
  render(
    <RedBox error={e}>
      <AppContainer>
        <Root history={browserHistory} />
      </AppContainer>
    </RedBox>,
    rootEl
  )
}

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./containers/Root').default;
    try {
      render(
        <AppContainer>
          <NextApp history={browserHistory} />
        </AppContainer>,
        rootEl
      )
    } catch (e) {
      render(
        <RedBox error={e}>
          <AppContainer>
            <NextApp history={browserHistory} />
          </AppContainer>
        </RedBox>,
        rootEl
      )
    }
  });
}
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Amplify from 'aws-amplify'
import config from 'aws-exports'

import { App } from 'App'
import { store } from 'redux/store'

Amplify.configure(config)

function WithProvider() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  )
}

ReactDOM.render(<WithProvider />, document.getElementById('root'))

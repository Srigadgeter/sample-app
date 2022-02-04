// external imports
import React from 'react'
import ReactDOM from 'react-dom'

// router import
import { BrowserRouter } from 'react-router-dom'

// redux imports
import { Provider } from 'react-redux'
import store from './store'

// internal imports
import App from './App'

// web vitals
import reportWebVitals from './reportWebVitals'

// stylesheets
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename='/'>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
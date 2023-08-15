import { FC } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { RoutesWrapper, store } from 'libraries'

import 'styles/index.global.scss'

const App: FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <RoutesWrapper />
    </BrowserRouter>
  </Provider>
)

export default App

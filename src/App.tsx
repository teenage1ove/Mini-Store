import { Provider } from 'react-redux'
import Header from './components/Header'
import Products from './components/Products'
import store from './store/store'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'

function App() {
  return (
      <Provider store={store}>
        {/* @ts-ignore */}
        <PersistGate persistor={persistStore(store)} loading={'loading e-commerce'}
        >
          <Header/>
          <Products/>
        </PersistGate>
      </Provider>
  )
}

export default App

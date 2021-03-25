import './App.css';
import React from 'react'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from './components/Reducer/Reducer'
import Counter from './components/appComponents/Counter'
import createSagaMidddleware from 'redux-saga'
import rootSagas from './components/Saga/Saga'

const sagamiddleware=createSagaMidddleware()
const store=createStore(reducer,applyMiddleware(sagamiddleware))
sagamiddleware.run(rootSagas)


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter/>
      </Provider>
    </div>
  );
}

export default App;

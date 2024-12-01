import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Calculator from './components/Calculator';
import './styles/App.css';

const App = () => {
  return (
    <Provider store={store}>
   <Calculator />
   </Provider>
  );
};

export default App;
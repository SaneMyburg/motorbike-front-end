import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Home';
import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout>
          <Home />
        </Layout>
      </div>
    </Provider>
  );
}

export default App;

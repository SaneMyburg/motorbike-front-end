import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import store from './redux/store';
import Home from './components/Home';
import './App.css';
import Layout from './components/Layout';
import Reserve from './components/Reserve';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reserve/:motorId" element={<Reserve />} />
          </Routes>
        </Layout>
      </div>
    </Provider>
  );
}

export default App;

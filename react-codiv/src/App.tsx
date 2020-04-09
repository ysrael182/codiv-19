import React from 'react';
import './App.scss';
import Footer from '../src/components/footer';
import Header from '../src/components/header';
import Sidebar from '../src/components/sidebar/sidebar.container';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Footer />
    </div>
  );
}
export default App;

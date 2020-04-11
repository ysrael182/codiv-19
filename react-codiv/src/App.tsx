import React from 'react';
import '../src/styles/App.scss';
import Footer from '../src/components/footer';
import Header from '../src/components/header';
import Main from '../src/components/main';
import Sidebar from '../src/components/sidebar/sidebar.container';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}
export default App;

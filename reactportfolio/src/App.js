import React from 'react';
import  Sidebar  from "./components/Sidebar"


function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="row">
      <div className="col-3">
        <div className="app_sidebar">
        <Sidebar />
        </div>
      </div>
      <div className="col-9 app_main-content">
        main
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
import React, { Suspense, useEffect } from 'react';
import MainRouter from 'router';
import 'bootstrap/scss/bootstrap.scss';
import 'assets/styles/index.scss';

function App() {
  return (
    <div className="app-mainwrap">
      <MainRouter />
    </div>
  );
}

export default App;

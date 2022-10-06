import React, { Suspense, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate, useNavigate } from "react-router-dom";
import Home from 'pages';

function MainRouter() {

  return (
  <>
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  </>
  );
}

export default MainRouter;

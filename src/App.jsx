import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Workshop from "./Components/Workshop";
import Blog from "./Components/Blog";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Footer from "./Components/Footer";

import ReactCourse from "./Pages/ReactCourse";
import JavaScriptCourse from "./Pages/JavascripCourse";
import BootstrapCourse from "./Pages/BootstrapCourse";
import HtmlCssCourse from "./Pages/HtmlCssCourse";

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  return (
    <div className="app">
      {currentUser && <Header setCurrentUser={setCurrentUser} />}
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={currentUser ? <Home /> : <Navigate to="/login" replace />} />
          <Route path="/login" element={currentUser ? <Navigate to="/" replace /> : <Login setCurrentUser={setCurrentUser} />} />
          <Route path="/register" element={currentUser ? <Navigate to="/" replace /> : <Register />} />
          <Route path="/workshop" element={currentUser ? <Workshop /> : <Navigate to="/login" replace />} />
          <Route path="/blog" element={currentUser ? <Blog /> : <Navigate to="/login" replace />} />
          <Route path="/react" element={currentUser ? <ReactCourse /> : <Navigate to="/login" replace />} />
          <Route path="/javascript" element={currentUser ? <JavaScriptCourse /> : <Navigate to="/login" replace />} />
          <Route path="/bootstrap" element={currentUser ? <BootstrapCourse /> : <Navigate to="/login" replace />} />
          <Route path="/html-css" element={currentUser ? <HtmlCssCourse /> : <Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to={currentUser ? "/" : "/login"} replace />} />
        </Routes>
      </main>
      {currentUser && <Footer />}
    </div>
  );
}

export default App;
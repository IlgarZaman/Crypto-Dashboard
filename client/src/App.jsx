import "./App.scss";
import Header from "./layouts/header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { useEffect } from "react";
import { setInitialDarkMode } from "./redux/slice/darkModeSlice";
import store from "./redux/store.js";

function App() {
  useEffect(() => {
    store.dispatch(setInitialDarkMode());
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

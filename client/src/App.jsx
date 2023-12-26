import "./App.css";
import Header from "./layouts/header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
function App() {
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

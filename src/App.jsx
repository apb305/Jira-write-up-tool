import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNav from "./components/Navbar";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppNav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={1500} hideProgressBar={true} />
    </>
  );
}

export default App;

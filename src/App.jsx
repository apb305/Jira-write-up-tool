import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNav from "./components/Navbar";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppNav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        autoClose={1500}
        hideProgressBar={true}
        position="top-center"
      />
    </>
  );
}

export default App;

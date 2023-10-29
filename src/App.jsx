import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNav from "./components/Navbar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
      <BrowserRouter>
        <AppNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={1500} hideProgressBar={true} />
    </>
  );
}

export default App;

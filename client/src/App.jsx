import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import NavBar from "./Components/layout/NavBar"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Products from "./pages/Products"
import Footer from "./Components/layout/Footer"
import { getme } from "./services/authService"
import { useEffect, useState } from "react"
import ProductDetails from "./pages/ProductDetails"
import Home from "./pages/Home"
import Test from "./pages/Test"



function AppContent() {

  const [authUser, setAuthuser] = useState();
  useEffect(() => {
    async function me() {
      try {
        const user = await getme();
        if(user.name)
          setAuthuser(user);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    }
    me();
  }, []); // ✅ only run once


  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/signup" && <NavBar />}

      <Routes>
        <Route path="/login" element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to='/' /> : <Signup />} />
        <Route path="/" element={<Products/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/test" element={<Test></Test>} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      {location.pathname !== "/login" && location.pathname !== "/signup" && <Footer />}
    </>
  );
}



function App() {

  return (
    <>
      {/* {authUser?<Home authUser ></Home>:<Handle authUser={setAuthuser} ></Handle>} */}
      {/* <Handle></Handle> */}
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </>
  )
}

export default App

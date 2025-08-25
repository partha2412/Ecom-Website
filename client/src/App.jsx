import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import NavBar from "./Components/layout/NavBar"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Products from "./pages/Products"
import Footer from "./Components/layout/Footer"
import { getme } from "./services/authService"
import { useEffect, useState } from "react"
import ProductDetails from "./pages/ProductDetails"



function AppContent() {

  const [authUser,setAuthuser] = useState();
  useEffect(() => {
    async function me() {
      setAuthuser( await getme() )
    }
    me()
  })
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && <NavBar />}

      <Routes>
        <Route path="/login" element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to='/' /> : <Signup />} />
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<ProductDetails />} />

      </Routes>
      {location.pathname === "/" && <Footer />}
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

import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import NavBar from "./Components/layout/NavBar"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Products from "./pages/Products"
import Footer from "./Components/layout/Footer"
import { getme } from "./services/authService"
import { useEffect } from "react"




function AppContent() {

  let authUser;
  useEffect(() => {
    async function me() {
      authUser = await getme()
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

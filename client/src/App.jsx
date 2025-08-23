import { useState } from "react"
import Auth from "./pages/Shopping/Auth/Auth"
import Home from "./pages/Shopping/Home"


function App() {
  const [authUser, setAuthuser] = useState(false)
  return (
    <>
      {authUser?<Home setAuthuser={setAuthuser}></Home>:<Auth setAuthuser={setAuthuser} ></Auth>}
    </>
  )
}

export default App

import { Outlet } from "react-router-dom"
import Navbar from "./componts/Navbar"

const Layou = () => {
  return (
    <div>
      <Navbar/>
      <Outlet></Outlet>
    </div>
  )
}

export default Layou

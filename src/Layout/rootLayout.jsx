import { Outlet } from "react-router-dom"
import ScrollToTop from "../components/scrollToTop"

const rootLayout = () => {
  return (
    <>
      <ScrollToTop/>
    <Outlet/>
    </>
  )
}

export default rootLayout
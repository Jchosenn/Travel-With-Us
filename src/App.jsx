import { RouterProvider } from "react-router-dom"
import "./App.css"
import { router } from "./router"
import { Toaster } from "sonner"
import scrollToTop from "./components/scrollToTop"

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <scrollToTop/>
      <Toaster position="top-right" richColors toastOptions={{className: "font-urbanist", style: {fontFamily: "Urbanist, sans-serif"}}}/>
    </>
  )
}

export default App

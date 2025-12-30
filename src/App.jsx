import { AuthProvider } from "./context/AuthContext"
import router from "./Routes"
import { RouterProvider } from "react-router-dom"

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
  
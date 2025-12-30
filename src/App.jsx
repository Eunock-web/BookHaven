import { AuthProvider } from "./context/AuthContext"
import { FilterProvider } from "./context/FilterContext"
import router from "./Routes"
import { RouterProvider } from "react-router-dom"

function App() {

  return (
    <AuthProvider>
      <FilterProvider>
        <RouterProvider router={router} />
      </FilterProvider>
    </AuthProvider>
  )
}

export default App
  
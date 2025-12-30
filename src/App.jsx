import { AuthProvider } from "./context/AuthContext"
import { FavoriteProvider } from "./context/FavoriteContext"
import { FilterProvider } from "./context/FilterContext"
import router from "./Routes"
import { RouterProvider } from "react-router-dom"

function App() {

  return (
    <AuthProvider>
      <FilterProvider>
        <FavoriteProvider >
        <RouterProvider router={router} />
        </FavoriteProvider>
      </FilterProvider>
    </AuthProvider>
  )
}

export default App
  
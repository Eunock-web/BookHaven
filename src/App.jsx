import { AuthProvider } from "./context/AuthContext"
import { BookProvider } from "./context/BookContext"
import { FavoriteProvider } from "./context/FavoriteContext"
import { FilterProvider } from "./context/FilterContext"
import router from "./Routes"
import { RouterProvider } from "react-router-dom"

function App() {

  return (
    <AuthProvider>
      <FilterProvider>
        <FavoriteProvider >
          <BookProvider>
            <RouterProvider router={router} />
          </BookProvider>
        </FavoriteProvider>
      </FilterProvider>
    </AuthProvider>
  )
}

export default App
  
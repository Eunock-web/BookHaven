import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"


function Layout(){
    return <>
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    </>
}
export default Layout
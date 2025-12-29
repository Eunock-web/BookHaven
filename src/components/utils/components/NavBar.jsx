import { BookOpen } from "lucide-react"


function NavBar(){
    return <>
        <div>
            <div>
                <BookOpen />
                <h1>BookHaven</h1>
            </div>

            <div>
                <Link>Ma bibliothèque</Link>
            </div>

            <div>
                <input type="search" />
            </div>

            <div>
                
            </div>
        </div>
    </>
}

export default NavBar
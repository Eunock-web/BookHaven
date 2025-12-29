import { BookOpen } from "lucide-react"


function NavBar(){
    return <>
        {/* <div>
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
        </div> */}

        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e9edf1] h-20 shadow-sm">
      <div className="max-w-400 mx-auto px-6 h-full flex items-center justify-between gap-8">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="size-10 bg-[#1f3b61]/10 rounded-lg flex items-center justify-center text-[#1f3b61]">
            <span className="material-symbols-outlined text-[28px]">menu_book</span>
          </div>
          <h1 className="text-[#1f3b61] text-2xl font-bold tracking-tight">BookHaven</h1>
        </div>

        <div className="hidden md:flex flex-1 max-w-2xl">
          <div className="flex w-full items-center rounded-xl bg-[#e9edf1] border-2 border-transparent focus-within:border-[#1f3b61]/20 focus-within:bg-white transition-all duration-200">
            <div className="pl-4 text-gray-500 flex items-center justify-center">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input className="w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-500 h-11 px-3 text-base" placeholder="Search by title, author..."/>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2.5 rounded-lg text-gray-600 hover:bg-gray-100"><span className="material-symbols-outlined">light_mode</span></button>
          <button className="relative p-2.5 rounded-lg text-[#1f3b61] bg-[#1f3b61]/10"><span className="material-symbols-outlined">shopping_cart</span></button>
        </div>
      </div>
    </header>
    </>
}

export default NavBar
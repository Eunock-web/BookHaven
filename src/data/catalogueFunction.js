import { books } from "./books"

export const ListCatalogue = ()=>{
    return  books.map(book=>book.category);
}

export const ListLangues = ()=>{
    return books.map(book=>book.language)
}



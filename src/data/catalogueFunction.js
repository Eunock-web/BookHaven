import { books } from "./books"

export const ListCatalogue = ()=>{
    return  [...new Set(books.map(book=>book.category))];
}

export const ListLangues = ()=>{
    return [...new Set(books.map(book=>book.language))];
}



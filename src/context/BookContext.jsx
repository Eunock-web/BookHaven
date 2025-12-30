import { createContext, useContext, useState } from 'react';
import { initialBooks } from '../data/books'; 

const BookContext = createContext();

export function BookProvider({ children }) {
    const [books, setBooks] = useState(initialBooks);

    const addBook = (newBook) => {
        setBooks([...books, { ...newBook, id: Date.now(), rating: 0, reviewCount: 0 }]);
    };

    const deleteBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };

    const updateBook = (id, updatedFields) => {
        setBooks(books.map(book => book.id === id ? { ...book, ...updatedFields } : book));
    };

    return (
        <BookContext.Provider value={{ books, addBook, deleteBook, updateBook }}>
            {children}
        </BookContext.Provider>
    );
}

export const useBooks = () => useContext(BookContext);
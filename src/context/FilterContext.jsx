import { createContext, useState, useContext, useCallback } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        search: "",
        categories: [], // Checkbox
        maxPrice: 50,   // Range
        minRating: 0,   // Rang/Etoiles
        language: "Tous",
        onlyInStock: false // Boolean
    });

    // On utilise useCallback pour que cette fonction soit stable
    const updateFilter = useCallback((name, value) => {
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);

    const resetFilters = () => {
        setFilters({
            search: "",
            categories: [],
            maxPrice: 50,
            minRating: 0,
            language: "Tous",
            onlyInStock: false
        });
    };

    return (
        <FilterContext.Provider value={{ filters, updateFilter, resetFilters }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilters = () => useContext(FilterContext);
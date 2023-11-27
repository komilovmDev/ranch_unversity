import React, { createContext, useState, useEffect } from 'react';
import { getCategors } from './api'; // Import the function correctly

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await getCategors();
              
                    setCategories(response);
                
                console.log(categories);
            } catch (error) {
                console.error('Category:', error);
            }
        }

        fetchCategories();
    }, []);

    return (
        <AppContext.Provider value={categories}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };

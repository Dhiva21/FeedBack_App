import { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const MenuContext = createContext();

// Create a provider component
export const MenuProvider = ({ children }) => {
  const [menuName, setMenuName] = useState(() => {
    return localStorage.getItem("menuName") || "Check Menu Context";
  });

  useEffect(() => {
    // Store the menu name in localStorage whenever it changes
    if (menuName) {
      localStorage.setItem("menuName", menuName);
    }
  }, [menuName]);

  return (
    <MenuContext.Provider value={{ menuName, setMenuName }}>
      {children}
    </MenuContext.Provider>
  );
};

// Custom hook to use the Menu context
export const useMenu = () => {
  return useContext(MenuContext);
};

import { createContext, useContext, useState } from "react";

// Context
export const ToggleNavContext = createContext();

// Provider
export const ToggleNavProvider = ({ children }) => {

    const [nav, setNav] = useState("-left-full");


    const handleToggleNav = (e) => {
        e.preventDefault();
        if (nav === "-left-full") {
            setNav("left-0");
        } else {
            setNav("-left-full");
        }
    }

    return <ToggleNavContext.Provider value={{ nav, handleToggleNav }}>
        {children}
    </ToggleNavContext.Provider>

}

// Consumer
export const useToggleNav = () => {
    const ToggleNavContextValue = useContext(ToggleNavContext);
    return ToggleNavContextValue;
}
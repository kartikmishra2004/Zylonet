import { createContext, useContext, useState } from "react";

// Context
export const ToggleNavContext = createContext();

// Provider
export const ToggleNavProvider = ({ children }) => {

    const [nav, setNav] = useState("-left-full");
    const [navShadow, setNavShadow] = useState("hidden");


    const handleToggleNav = (e) => {
        e.preventDefault();
        if (nav === "-left-full") {
            setNav("left-0");
        } else {
            setNav("-left-full");
        }
        if (navShadow === "hidden") {
            setNavShadow("block");
        } else {
            setNavShadow("hidden");
        }
    }

    return <ToggleNavContext.Provider value={{ nav, handleToggleNav, navShadow }}>
        {children}
    </ToggleNavContext.Provider>

}

// Consumer
export const useToggleNav = () => {
    const ToggleNavContextValue = useContext(ToggleNavContext);
    return ToggleNavContextValue;
}
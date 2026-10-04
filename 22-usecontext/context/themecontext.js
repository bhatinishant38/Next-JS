'use client'

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

export default function ThemeContextProvider({children}){
    const [isDark ,setIsDark] = useState(localStorage.getItem("isDark") === "false" ? false : true )

    function toggleTheme(){
        setIsDark((prev) => !prev)
    }

    useEffect(()=>{
        localStorage.setItem('isDark',isDark)
        if(isDark){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    },[isDark])

    const value ={
        isDark,
        toggleTheme
    }


    return (
        <ThemeContext.Provider value={value} >
            {children}
        </ThemeContext.Provider>
    )
}
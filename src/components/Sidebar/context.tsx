import React, { createContext, useContext, useState } from "react";
export type ContextType = {
    isSidebarOpen:boolean;
    isModalOpen:boolean;
    openModal:()=>void;
    closeModal:()=>void;
    openSidebar:()=>void
    closeSidebar:()=>void
    
}
const AppContext = createContext<ContextType| undefined>(undefined)
export const ThemeProvider = ({children}:{children:React.ReactNode})=>{
    const [isSidebarOpen,setIsSidebarOpen] = useState(false)
    const [isModalOpen,setIsModalOpen] = useState(false)
    const openModal = () =>{
        setIsModalOpen(true)
    }
    const closeModal = () =>{
        setIsModalOpen(false)
    }
    const openSidebar = () =>{
        setIsSidebarOpen(true)
    }
     const closeSidebar = () =>{
        setIsSidebarOpen(false)
    }
    return (
        <AppContext.Provider value={{isSidebarOpen,isModalOpen,openModal,closeModal,openSidebar,closeSidebar}}>
            {children}
        </AppContext.Provider>
    )

}
export const useGlobalContext = () =>{
    return useContext(AppContext)
}
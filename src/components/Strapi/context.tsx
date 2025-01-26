import React, { createContext, useContext, useState } from 'react';
export type ContextType = {
    isSidebarOpen:boolean
    openSidebar:()=>void
    closeSidebar:()=>void
    setPageId:React.Dispatch<React.SetStateAction<string | null>>
    pageId:string | null
}
const AppContext = createContext<ContextType | undefined>(undefined)
export const AppProvider = ({children}:{children:React.ReactNode}) => {
    const [isSidebarOpen,setIsSidebarOpen] = useState(false)
    const [pageId,setPageId]  = useState<string | null>(null)
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
   
    return (
        <AppContext.Provider value={{isSidebarOpen,openSidebar,closeSidebar,setPageId,pageId}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
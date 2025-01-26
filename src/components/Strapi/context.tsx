import { createContext, useContext, useState } from 'react';
type ContextType = {
    isSidebarOpen:boolean
    openSidebar:()=>void
}
const AppContext = createContext<ContextType | undefined>(undefined)
export const AppProvider = ({children}:{children:React.ReactNode}) => {
    const [isSidebarOpen,setIsSidebarOpen] = useState(false)
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    return (
        <AppContext.Provider value={{isSidebarOpen,openSidebar}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
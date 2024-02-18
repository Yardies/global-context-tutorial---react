import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  console.log(isModalOpen)
  console.log(isSidebarOpen)

  // const openSidebar = () => {
  //   setIsSidebarOpen(true)
  // }
  // const closeSidebar = () => {
  //   setIsSidebarOpen(false)
  // }
  // const openModal = () => {
  //   setIsModalOpen(true)
  // }
  // const closeModal = () => {
  //   setIsModalOpen(false)
  // }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        setIsModalOpen,
        setIsSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

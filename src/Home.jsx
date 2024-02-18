import { useGlobalContext } from './context'
import { GiHamburgerMenu } from 'react-icons/gi'
export const Home = () => {
  const { setIsModalOpen, setIsSidebarOpen, isSidebarOpen, isModalOpen } =
    useGlobalContext()

  return (
    <div className="home-container">
      <button
        className="hamburger-btn"
        type="button"
        onClick={() =>
          isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true)
        }
      >
        <GiHamburgerMenu />
      </button>
      <button
        type="button"
        className=" btn"
        onClick={() => setIsModalOpen(true)}
      >
        open modal
      </button>
    </div>
  )
}

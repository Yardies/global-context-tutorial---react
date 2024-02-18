import { useGlobalContext } from './context'
import logo from './logo.svg'
import { IoMdClose } from 'react-icons/io'
import { links, social } from './data'

console.log(logo)
export const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext()
  return (
    <div className={'sidebar'} style={{ display: isSidebarOpen || 'none' }}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" height={`40px`} />
        <button
          className="close-btn"
          onClick={() => {
            setIsSidebarOpen(false)
          }}
        >
          <IoMdClose />
        </button>
      </div>

      <ul className="links">
        {links.map((link) => {
          const { id, text, url, icon } = link
          return (
            <li key={id} className="link">
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

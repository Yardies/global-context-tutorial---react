import { useGlobalContext } from './context'
import { IoMdClose } from 'react-icons/io'

export const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useGlobalContext()
  return (
    <div className="modal-overlay" style={{ display: isModalOpen || 'none' }}>
      <div className="modal-content">
        <button
          className="close-btn"
          type="button"
          onClick={() => setIsModalOpen(false)}
        >
          <IoMdClose />
        </button>
        <h5>Modal Content Goes Here</h5>
      </div>
    </div>
  )
}

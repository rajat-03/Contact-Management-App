import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 z-40 w-full h-full flex items-center justify-center backdrop-blur">
          <div className="relative z-50 mx-4 my-8 sm:mx-0 sm:w-full sm:max-w-md bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl cursor-pointer" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;

import { deleteDoc,doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import {db} from "../config/firebase";
import { collection } from "firebase/firestore";
import useDisclouse from "../hooks/useDisclosure";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { toast } from "react-toastify";
import { FaUserEdit } from "react-icons/fa";

const ContactCard = ({contact}) => {

  const { isOpen, onClose, onOpen } = useDisclouse();

  const deleteContact = async(id) =>
  {
    try {
      const contactRef = collection(db, "Contacts");
      await deleteDoc(doc(contactRef, id));
      toast.success("Contact Deleted Successfully");

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div
        key={contact.id}
        className="flex items-center justify-between rounded-lg bg-yellow p-2"
      >
        <div className="flex items-center gap-1">
          <HiOutlineUserCircle className="text-5xl text-orange " />
          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.mobNo}</p>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl gap-1" >
          <FaUserEdit onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="cursor-pointer text-orange"
          />
        </div>
      </div>
      <AddAndUpdateContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;

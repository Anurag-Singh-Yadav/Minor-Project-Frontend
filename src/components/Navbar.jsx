import { MdManageAccounts } from "react-icons/md";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import { RiHomeOfficeFill } from "react-icons/ri";
function Navbar() {
  return (
    <div className="bg-[#0369a0] text-sm px-4 py-[1px] flex justify-evenly items-center text-white w-full">
      <div className="flex justify-center items-center gap-2">
        <div className="flex justify-center items-center gap-2">
          <MdManageAccounts />
          <div>Jobs</div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <MdOutlineAddHomeWork />
          <div>Tenders</div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <IoBookSharp />
          <div>Placements</div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <MdOutlineLibraryBooks />
          <div>Resources</div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <FaRegAddressBook />
          <div>PhoneBooks</div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <FaFacebook />
        <FaInstagramSquare />
        <FaTwitter />
        <FaLinkedin />
        <FaYoutube />
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="flex justify-center items-center gap-2">
          <RiLoginCircleFill />
          <div>ERP</div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <RiHomeOfficeFill />
          <div>Register</div>
          </div>
      </div>
    </div>
  );
}

export default Navbar;

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import ngMusic from "../assets/ngmusic.svg";
import Modal from "./Modal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="header flex sticky top-0 justify-between items-center h-[60px] p-[22px] bg-gradient-to-r from-[#712bda] to-[#a45deb] rounded-curve shadow-header">
        <ul className="w-full flex justify-between">
          <li>
            <Link to="/" className="flex items-center -mt-[5px]">
              <GiHamburgerMenu size={18} color="#fff" />
            </Link>
          </li>
          <li>
            <img src={ngMusic} alt="ngMusic logo" />
          </li>
          <li>
            <div
              className="flex items-center -mt-[5px] cursor-pointer"
              onClick={handleShowModal}
            >
              <IoSearch size={18} color="#fff" />
            </div>
          </li>
        </ul>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Header;

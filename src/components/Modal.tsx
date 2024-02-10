import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

type modalType = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Modal = ({ showModal, setShowModal }: modalType) => {
  const [search, setSearch] = useState("");

  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className="fixed inset-0 m-auto w-full h-full p-[30px] flex justify-center items-center bg-[#1c1c2de6] z-50"
          variants={backdrop}
          initial="hidden"
          animate="visible"
        >
          <div
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowModal(!showModal)}
          >
            <IoClose size={24} color="white" />
          </div>

          <div className="w-full flex flex-col justify-center items-center max-w-[320px]">
            <div className="flex justify-center items-center mb-[30px]">
              <h3 className="text-xl font-bold text-[#fff] tracking-[0.71px]">
                Search
              </h3>
            </div>
            <div className="w-full flex flex-col justify-center space-y-[15px]">
              <input
                className="input"
                placeholder="Artist / Album / Title"
                onChange={(input: any) => setSearch(input.target.value)}
              />
              <Link
                to={{
                  pathname: "/result",
                  search: search && `?sort=${search}`,
                }}
                state={{ search: search }}
                className="button-purple"
                onClick={() => setShowModal(!showModal)}
              >
                Search
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
